/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import * as types from '../types';

polyfill();

export function makeWorksRequest(method, id, data, api = '/work') {
  return request[method](api + (id ? ('/' + id) : 's'), data);
}

// FAVORITE
export function makeWorkFavoriteRedux(id, favorite) {
  return {type: types.WORK_FAVORITE, id, favorite};
}

export function makeWorkFavorite(id, currentFavorite) {
  return dispatch => {
    const f = currentFavorite ? 0 : 1;
    return makeWorksRequest('put', id, {favorite: f})
    .then(() => dispatch(makeWorkFavoriteRedux(id, f)));
  };
}

// ARCHIVE
export function workArchiveRedux(id) {
  return {type: types.WORK_ARCHIVE, id};
}

export function makeWorkArchive(id) {
  return dispatch => {
    return makeWorksRequest('put', id, {archived: 1})
      .then(() => dispatch(workArchiveRedux(id)));
  };
}
