import styles from './TodosList.module.css'
import AddIcon from '../../SvgIcons/AddIcon';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../../States/todos-reducer';
import TodoCard from '../TodoCard/TodoCard';
const TodosList = (props) => {
  const todos = props.todos;
  const inputRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const dispatch = useDispatch()

  const formSubmitHandler = () => {
    if (inputRef.current.value !== '' && descriptionRef.current.value !== '' && dateRef.current.value !== '') {
      const todo = {
        id: Date.now(),
        date: dateRef.current.value,
        title: inputRef.current.value,
        description: descriptionRef.current.value,
      }
      dispatch(addNewTodo(todo))
      dateRef.current.value = '';
      inputRef.current.value = '';
      descriptionRef.current.value = '';
    } else {
      alert('please fill all the fileds')
    }
  }

  return (
    <div className={styles.todoslist}>
      <form className={styles.addtodoform}>
        <div className={styles.inputcontainer}>
          <input placeholder='Add Todo' ref={inputRef}></input>
          <input type='datetime-local' ref={dateRef} placeholder="Select date and time"></input>
          <div onClick={formSubmitHandler} className={styles.Button} data-tooltip="Add" >
            <AddIcon></AddIcon>
          </div>
        </div>
        <textarea placeholder='Add Todo Description' ref={descriptionRef}></textarea>
      </form>
      {todos.map((todo) => <TodoCard key={todo.id} todo={todo}></TodoCard>)}
    </div>

  )
}

export default TodosList;