import {combineReducers} from 'redux';
import imageReducer from './images';

const rootReducer = combineReducers({
  imageState: imageReducer,
});

export default rootReducer;
