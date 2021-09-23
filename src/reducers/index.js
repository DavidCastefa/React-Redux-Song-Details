import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: 'Macarena', duration: '2:30'},
    { title: 'All Star', duration: '3:15'},
    { title: 'I want it that Way', duration: '1:45'},
    { title: 'Dancing in the Street', duration: '2:45'},
    { title: 'Heartbreak Hotel', duration: '2:07'},
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
