import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
    <div className="container mt-5 mb-3 d-flex justify-content-between">
      <h2>Watch-history</h2>
      <Link style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}} to={"/home"}>
      Back To Home <i className="fa-solid fa-arrow-rotate-left fa-beat-fade"></i>
      </Link>
    </div>
    <tble className="table mt-5 container shadow w-100">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Url</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
    </tble>
      
    </>
  )
}

export default WatchHistory
