import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setArrayOfTodosAndUsersActionCreator,
  getArrayOfTodosAndUsers } from './store';

import User from './User';

const classNames = require('classnames');

const TodoItem = (
  { todo,
    setArrayOfTodosAndUsers,
    arrayOfTodosAndUsers }
) => (
  <tr className="list-of-todos__row">
    <td className="list-of-todos__cell">
      {todo.title}
    </td>
    <td className="list-of-todos__cell">
      <User user={todo.user} />
    </td>
    <td className={
      classNames(
        'list-of-todos__cell',
        {
          completed: todo.completed,
          'not-completed': !todo.completed,
        },
      )
    }
    >
      {todo.completed ? 'completed' : 'not completed'}
    </td>
    <td className="list-of-todos__cell">
      <button
        type="button"
        onClick={() => {
          setArrayOfTodosAndUsers(
            arrayOfTodosAndUsers.filter(
              oldTodo => oldTodo.id !== todo.id
            )
          );
        }}
        className="button button_remove"
      >
          delete
      </button>
    </td>
  </tr>
);

const getData = state => ({
  arrayOfTodosAndUsers: getArrayOfTodosAndUsers(state),
});

const getMethods = dispatch => ({
  setArrayOfTodosAndUsers: value => dispatch(
    setArrayOfTodosAndUsersActionCreator(value)
  ),
});

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setArrayOfTodosAndUsers: PropTypes.func.isRequired,
  arrayOfTodosAndUsers: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default connect(getData, getMethods)(TodoItem);
