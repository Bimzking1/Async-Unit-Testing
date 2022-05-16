import React from 'react'

import style from './TodoFooter.module.css'

const TodoFooter = props => {
  return (
    <div className={style.todoFooter} data-testid='todo-footer-container'>
        { !props.todoLength &&
            <p data-testid='todo-footer-no-item'>Awesome!! You have free time!!</p>
        }
        {props.todoLength > 0 &&
            <p data-testid='todo-footer-with-items'>You have {props.todoLength} {props.todoLength > 1 ? 'tasks' : 'task' }</p>
        }
    </div>
  )
}

// 1. Tes container dirender atau tidak
// 2. Check props.todoLength > 0
  // - todo-footer-with-items dirender
  // - todo-footer-no-item tidak dirender
// 3. Test kalau props.todoLength > 1
  // - todo-footer-with-items berisi text 'You have {count} tasks'
// 4. Test kalau props.todoLength == 1
  // - todo-footer-with-items berisi text 'You have 1 task'
// 5. Test kalau props.todoLength <= 0
  // - todo-footer-with-items TIDAK di render
  // - todo-footer-no-item di render

export default TodoFooter