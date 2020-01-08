/* eslint-disable camelcase */
import { createStore } from 'redux';

// action types
const TYPE_SetArrayOfTodosAndUsers = (
  'setArrayOfTodosAndUsers'
);
const TYPE_SetIsLoadingArrayOfTodosAndUsers = (
  'setIsLoadingArrayOfTodosAndUsers'
);
const TYPE_SetIsLoadedArrayOfTodosAndUsers = (
  'setIsLoadedArrayOfTodosAndUsers'
);
const TYPE_SetActiveSortField = 'setActiveSortField';
const TYPE_SetReverseStatus = 'setReverseStatus';

// action creators
export const setArrayOfTodosAndUsersActionCreator = value => ({
  type: TYPE_SetArrayOfTodosAndUsers, value,
});
export const setIsLoadingArrayOfTodosAndUsersActionCreator = value => ({
  type: TYPE_SetIsLoadingArrayOfTodosAndUsers, value,
});
export const setIsLoadedArrayOfTodosAndUsersActionCreator = value => ({
  type: TYPE_SetIsLoadedArrayOfTodosAndUsers, value,
});
export const setActiveSortFieldActionCreator = value => ({
  type: TYPE_SetActiveSortField, value,
});
export const setReverseStatusActionCreator = value => ({
  type: TYPE_SetReverseStatus, value,
});

// selectors
export const getArrayOfTodosAndUsers = state => state.arrayOfTodosAndUsers;
export const getIsLoadingArrayOfTodosAndUsers = state => (
  state.isLoadingArrayOfTodosAndUsers
);
export const getIsLoadedArrayOfTodosAndUsers = state => (
  state.isLoadedArrayOfTodosAndUsers
);
export const getActiveSortField = state => state.activeSortField;
export const getReverseStatus = state => state.reverseStatus;

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_SetArrayOfTodosAndUsers:
      return {
        ...state, arrayOfTodosAndUsers: action.value,
      };

    case TYPE_SetIsLoadingArrayOfTodosAndUsers: return {
      ...state,
      isLoadingArrayOfTodosAndUsers: action.value,
    };

    case TYPE_SetIsLoadedArrayOfTodosAndUsers: return {
      ...state,
      isLoadedArrayOfTodosAndUsers: action.value,
    };

    case TYPE_SetActiveSortField: return {
      ...state,
      activeSortField: action.value,
    };

    case TYPE_SetReverseStatus: return {
      ...state,
      reverseStatus: action.value,
    };

    default:
      return state;
  }
};

const store = createStore(reducer, {
  arrayOfTodosAndUsers: [],
  isLoadingArrayOfTodosAndUsers: false,
  isLoadedArrayOfTodosAndUsers: false,
  activeSortField: '',
  reverseStatus: false,
});

export default store;
