/* eslint-disable camelcase */
import { createStore } from 'redux';

// action types
const SET_TODOS = ('SET_TODOS');
const SET_IS_LOADING = ('SET_IS_LOADING');
const SET_IS_LOADED_TODOS = ('SET_IS_LOADED_TODOS');
const SET_ACTIVE_SORT_FIELD = 'SET_ACTIVE_SORT_FIELD';
const SET_REVERSE_STATUS = 'SET_REVERSE_STATUS';

// action creators
export const setArrayOfTodos = value => ({
  type: SET_TODOS, value,
});
export const setIsLoading = value => ({
  type: SET_IS_LOADING, value,
});
export const setIsLoadedTodos = value => ({
  type: SET_IS_LOADED_TODOS, value,
});
export const setActiveSortFieldTodoList = value => ({
  type: SET_ACTIVE_SORT_FIELD, value,
});
export const setReverseStatusTodoList = value => ({
  type: SET_REVERSE_STATUS, value,
});

// selectors
export const getTodos = state => state.arrayOfTodosAndUsers;
export const getIsLoading = state => (
  state.isLoading
);
export const getIsLoadedTodos = state => (
  state.isLoadedTodos
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

    case SET_IS_LOADING: return {
      ...state,
      isLoading: action.value,
    };

    case SET_IS_LOADED_TODOS: return {
      ...state,
      isLoadedTodos: action.value,
    };

    case SET_ACTIVE_SORT_FIELD: return {
      ...state,
      activeSortField: action.value,
    };

    case SET_REVERSE_STATUS: return {
      ...state,
      reverseStatus: action.value,
    };

    default:
      return state;
  }
};

const store = createStore(reducer, {
  arrayOfTodosAndUsers: [],
  isLoading: false,
  isLoadedTodos: false,
  activeSortField: '',
  reverseStatus: false,
});

export default store;
