import axios from "axios";
const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';
let BEST_STORIES_FETCHED = 0;
let LATEST_STORIES_FETCHED = 0;
let TOP_STORIES_FETCHED = 0;
const getStoriesData = async(type) => {
    const {data: storyIds} = await axios.get(`${API_BASE_URL}/${type}stories.json`);
    let paginatedStoryIDs = getPaginatedStoryIDs(type, storyIds);
    const stories = await getStories(paginatedStoryIDs);
    return stories;
}

const getStory = async(itemID) => {
    try {
        const data =  await axios.get(`${API_BASE_URL}/item/${itemID}.json`);
        return data.data;
    } catch(error) {
        console.log("Error while getting story");
    }
}

//Takes an array of story ids
const getStories = async(storyIds) => {
    const stories =  await Promise.all(storyIds.map(getStory));
    return stories;
}

const getPaginatedStoryIDs = (type, storyIds) => {
    let paginatedStoryIDs = 30;
    switch (type) {
        case "best":
            BEST_STORIES_FETCHED = BEST_STORIES_FETCHED + 30;
            paginatedStoryIDs = storyIds.slice(0, BEST_STORIES_FETCHED);
            break;
        case "latest":
            LATEST_STORIES_FETCHED = LATEST_STORIES_FETCHED + 30;
            paginatedStoryIDs = storyIds.slice(0, LATEST_STORIES_FETCHED);
            break;
        case "top":
            TOP_STORIES_FETCHED = TOP_STORIES_FETCHED + 30;
            paginatedStoryIDs = storyIds.slice(0, TOP_STORIES_FETCHED);
            break;
        default:
            break;
    }
    return paginatedStoryIDs;
}
export {getStories, getStoriesData};


