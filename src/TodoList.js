import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getTodos,
  getIsLoading,
  getIsLoadedTodos,
  getActiveSortField,
  getReverseStatus,
  setArrayOfTodos,
  setIsLoading,
  setIsLoadedTodos,
  setActiveSortFieldTodoList,
  setReverseStatusTodoList,
} from './store';

import { todosUrl, usersUrl } from './api';
import { getDataFromServer } from './helpers';

import TodoItem from './TodoItem';

const TodoList = (
  {
    arrayOfTodosAndUsers,
    setArrayOfTodosAndUsers,
    isLoadingArrayOfTodosAndUsers,
    setIsLoadingArrayOfTodosAndUsers,
    isLoadedArrayOfTodosAndUsers,
    setIsLoadedArrayOfTodosAndUsers,
    activeSortField,
    setActiveSortField,
    reverseStatus,
    setReverseStatus,
  }
) => {
  const loadArrayOfTodosAndUsers = async() => {
    setIsLoadingArrayOfTodosAndUsers(true);

    const [todos, users] = await Promise.all(
      [getDataFromServer(todosUrl), getDataFromServer(usersUrl)]
    );

    setArrayOfTodosAndUsers(
      todos.map(
        todo => ({
          ...todo, user: users.find(user => user.id === todo.userId),
        })
      )
    );

    setIsLoadingArrayOfTodosAndUsers(false);
    setIsLoadedArrayOfTodosAndUsers(true);
  };

  const getSortMethod = (sortfield) => {
    if (arrayOfTodosAndUsers.length === 0) {
      return () => 1;
    }

    if (activeSortField === '') {
      return () => 1;
    }

    const typeOfValue = typeof arrayOfTodosAndUsers[0][sortfield];

    if (typeOfValue === 'string') {
      return (a, b) => a[sortfield].localeCompare(b[sortfield]);
    }

    if (typeOfValue === 'boolean'
      || typeOfValue === 'number'
    ) {
      return (a, b) => a[sortfield] - b[sortfield];
    }

    return () => 1;
  };

  const headers = ['Title', 'User', 'Completed', 'Remove item'];

  let visibleTodos = [...arrayOfTodosAndUsers].sort(
    getSortMethod(activeSortField)
  );

  if (reverseStatus) {
    visibleTodos = visibleTodos.reverse();
  }

  return (
    <>
      {isLoadedArrayOfTodosAndUsers ? ''
        : (
          <button
            type="button"
            disabled={isLoadingArrayOfTodosAndUsers}
            onClick={loadArrayOfTodosAndUsers}
          >
            {isLoadingArrayOfTodosAndUsers
              ? 'loading...' : 'download list'}
          </button>
        )}

      {
        isLoadedArrayOfTodosAndUsers
          ? (
            <table className="list-of-todos">
              <thead>
                <tr>
                  {headers.map(
                    item => (
                      <th
                        key={item}
                        onClick={() => {
                          setActiveSortField(
                            item.toLowerCase() === 'user'
                              ? 'user.name' : item.toLowerCase()
                          );

                          setReverseStatus(
                            (activeSortField === item.toLowerCase()
                              || activeSortField === 'user.name')
                              ? !reverseStatus : reverseStatus
                          );
                        }}
                        className="list-of-todos__heading list-of-todos__cell"
                      >
                        {item}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {visibleTodos.map(
                  todo => <TodoItem key={todo.id} todo={todo} />
                )}
              </tbody>
            </table>
          )
          : ''
      }
    </>
  );
};

const getData = state => ({
  arrayOfTodosAndUsers: getTodos(state),
  isLoadingArrayOfTodosAndUsers: getIsLoading(state),
  isLoadedArrayOfTodosAndUsers: getIsLoadedTodos(state),
  activeSortField: getActiveSortField(state),
  reverseStatus: getReverseStatus(state),
});

const getMethods = dispatch => ({
  setArrayOfTodosAndUsers: value => dispatch(
    setArrayOfTodos(value)
  ),
  setIsLoadingArrayOfTodosAndUsers: value => dispatch(
    setIsLoading(value)
  ),
  setIsLoadedArrayOfTodosAndUsers: value => dispatch(
    setIsLoadedTodos(value)
  ),
  setActiveSortField: value => dispatch(
    setActiveSortFieldTodoList(value)
  ),
  setReverseStatus: value => dispatch(
    setReverseStatusTodoList(value)
  ),
});

TodoList.propTypes = {
  arrayOfTodosAndUsers: PropTypes.arrayOf(PropTypes.object),
  setArrayOfTodosAndUsers: PropTypes.func.isRequired,
  isLoadingArrayOfTodosAndUsers: PropTypes.bool.isRequired,
  setIsLoadingArrayOfTodosAndUsers: PropTypes.func.isRequired,
  isLoadedArrayOfTodosAndUsers: PropTypes.bool.isRequired,
  setIsLoadedArrayOfTodosAndUsers: PropTypes.func.isRequired,
  activeSortField: PropTypes.string.isRequired,
  setActiveSortField: PropTypes.func.isRequired,
  reverseStatus: PropTypes.bool.isRequired,
  setReverseStatus: PropTypes.func.isRequired,

};

TodoList.defaultProps = {
  arrayOfTodosAndUsers: [],
};

export default connect(getData, getMethods)(TodoList);
