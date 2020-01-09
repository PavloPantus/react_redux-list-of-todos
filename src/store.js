/* eslint-disable camelcase */
import { createStore } from 'redux';

// action types
const TYPE_setTodos = ('setTodos');
const TYPE_setIsLoadingTodos = ('setIsLoadingTodos');
const TYPE_setIsLoadedTodos = ('setIsLoadedTodos');
const TYPE_setActiveSortField = 'setActiveSortField';
const TYPE_setReverseStatus = 'setReverseStatus';

// action creators
export const setArrayOfTodos = value => ({
  type: TYPE_setTodos, value,
});
export const setIsLoadingTodos = value => ({
  type: TYPE_setIsLoadingTodos, value,
});
export const setIsLoadedTodos = value => ({
  type: TYPE_setIsLoadedTodos, value,
});
export const setActiveSortField = value => ({
  type: TYPE_setActiveSortField, value,
});
export const setReverseStatus = value => ({
  type: TYPE_setReverseStatus, value,
});

// selectors
export const getTodos = state => state.arrayOfTodosAndUsers;
export const getIsLoadingTodos = state => (
  state.isLoadingArrayOfTodosAndUsers
);
export const getIsLoadedTodos = state => (
  state.isLoadedArrayOfTodosAndUsers
);
export const getActiveSortField = state => state.activeSortField;
export const getReverseStatus = state => state.reverseStatus;

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_setTodos:
      return {
        ...state, arrayOfTodosAndUsers: action.value,
      };

    case TYPE_setIsLoadingTodos: return {
      ...state,
      isLoadingArrayOfTodosAndUsers: action.value,
    };

    case TYPE_setIsLoadedTodos: return {
      ...state,
      isLoadedArrayOfTodosAndUsers: action.value,
    };

    case TYPE_setActiveSortField: return {
      ...state,
      activeSortField: action.value,
    };

    case TYPE_setReverseStatus: return {
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
