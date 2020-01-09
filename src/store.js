/* eslint-disable camelcase */
import { createStore } from 'redux';

// action types
const SET_TODOS = ('SET_TODOS');
const SET_ISLOADINGTODOS = ('SET_ISLOADINGTODOS');
const SET_ISLOADEDTODOS = ('SET_ISLOADEDTODOS');
const SET_ACTIVESORTFIELD = 'SET_ACTIVESORTFIELD';
const SET_REVERSESTATUS = 'SET_REVERSESTATUS';

// action creators
export const setArrayOfTodos = value => ({
  type: SET_TODOS, value,
});
export const setIsLoadingTodos = value => ({
  type: SET_ISLOADINGTODOS, value,
});
export const setIsLoadedTodos = value => ({
  type: SET_ISLOADEDTODOS, value,
});
export const setActiveSortFieldTodoList = value => ({
  type: SET_ACTIVESORTFIELD, value,
});
export const setReverseStatusTodoList = value => ({
  type: SET_REVERSESTATUS, value,
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
    case SET_TODOS:
      return {
        ...state, arrayOfTodosAndUsers: action.value,
      };

    case SET_ISLOADINGTODOS: return {
      ...state,
      isLoadingArrayOfTodosAndUsers: action.value,
    };

    case SET_ISLOADEDTODOS: return {
      ...state,
      isLoadedArrayOfTodosAndUsers: action.value,
    };

    case SET_ACTIVESORTFIELD: return {
      ...state,
      activeSortField: action.value,
    };

    case SET_REVERSESTATUS: return {
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
