import { commonAPI } from "./commonApi";
import { SERVER_URL } from "./server_url";

// upload video
export const uploadVideoAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/allVideos`, video);
}

// get all uploaded videos
export const getAlluploadedVideosAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos`, "");
}

// get a video
export const getAVideosAPI = async (id) => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${id}`, "");
}

// delete video
export const deleteVideosAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${id}`, {});
}

// allVideo History
export const addVideoHistoryAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, video);
}

// getHistory
export const getVideoHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/history`, "");
}

// delete History
export const deleteHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${id}`, {});
}

// add video category
export const addvideocategoryAPI = async (category) => {
    return await commonAPI("POST", `${SERVER_URL}/category`, category);
}

// get category
export const getVideoCategoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/category`, "");
}

// delete Category
export const deleteCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/category/${id}`, {});
}

// update category
export const updateCategoryAPI = async (id,categoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/category/${id}`,categoryDetails);
}



