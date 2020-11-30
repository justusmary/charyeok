import constants from './constants';

export const addNote = (payload) => {
  return {
    type: constants.ADD_NOTE,
    payload
  }
}