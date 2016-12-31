import _ from 'lodash';
import { combineReducers } from 'redux';
import * as types from '../types';

const works = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.WORK_ARCHIVE:
      return state.filter(t => t.wid !== action.id);
    case types.WORK_FAVORITE:
      return state.map(t => {
        const w = t;
        if (t.wid === action.id) {
          w.favorite = action.favorite;
        }
        return w;
      });
    default:
      return state;
  }
};

const worksReducer = combineReducers({
  works
});

export default worksReducer;
