/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import * as types from '../types';

polyfill();

export function makeWorksRequest(method, id, data, api = '/works') {
  return request[method](api + (id ? ('/' + id) : ''), data);
}

export function makeWorkFavorite(id) {
  console.log('>> dispatch fa', id);
  return {type: types.WORK_FAVORITE, id};
}

export function makeWorkArchive(id) {
  console.log('>> dispatch ar', id);
  return {type: types.WORK_ARCHIVE, id};
}
