import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addvideocategoryAPI, deleteCategoryAPI, getAVideosAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../services/allAPI'
import VideoCard from './VideoCard';


function Category({remove,dropVideoResponse}) {

  const[ CategoryName, setCategoryName]=useState("");
  const [allCategories, setAllCategories]=useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAdd=async()=>{

    if (CategoryName){
      const result=await addvideocategoryAPI({CategoryName,allVideos:[]})
        if(result.status>=200 && result.status<300){
          handleClose()
          setCategoryName("")
          getCategories()
        }else{
          alert(result.message)
        }
    }else{
      alert("please fill missing fields")
    }
  }

  useEffect(()=>{
    getCategories()
    
    
  },[]);


  const getCategories =async()=>{
    const {data}=await getVideoCategoryAPI()
    setAllCategories(data)
  }

  const removeCategory = async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
    remove(true)
  }


  const dragOver=(e)=>{
    console.log("video card dragged over the category");
    e.preventDefault()
  }

  const videoDropped = async (e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
    console.log("video id"+videoId,"dropped into the "+categoryId);
    const {data}=await getAVideosAPI(videoId)
    const selectedCategory = allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    const res =await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
  }

  const videoDragStarted=(e,videoId,categoryId)=>{
    let dataShare={videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }


  return (
    <>
    <div className="d-grid">
      <button onClick={handleShow} className="btn btn-info">Add Category</button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingName" label="category" className='mb-3'>
              <Form.Control  type="text" placeholder="Enter Category Name" onChange={e=>setCategoryName(e.target.value)}  />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


   { 
   allCategories?.length>0?allCategories.map(category=>(

     <div className="border rounded p-4 m-3" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e,category?.id)}>
        <div className="d-flex-justify-content-between-align-items-center">
          <h5>{category?.CategoryName}</h5>
          <button  onClick={()=>removeCategory(category?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
        </div>

        <Row>
          {
            category?.allVideos?.length>0?category?.allVideos.map(card=>(
              <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                <VideoCard video={card} insideCategory={true}/>
                </Col>
            )):null
          }
          </Row>
      </div>
   )):<p>Nothing To Display</p>

  }

      
    </>
  )
}

export default Category
