import styles from './Edittodos.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setEditbarVisibility } from '../../States/editbar-reducer'
import CancelIcon from '../SvgIcons/CancleIcon'
import { useEffect, useRef } from 'react'
import { editTodos } from '../../States/todos-reducer'
const EditTodos = () => {
    const showEditbar = useSelector(state => state.editbar.visibility)
    const todo = useSelector(state => state.editbar.todo)
    const dispatch = useDispatch()
    const inputRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef()

    const toggleEditbar = () => {
        dispatch(setEditbarVisibility({ visibility: false, todo: null }))
    }

    const editTodoHandler = () => {
        const todoEdit = {
            id: todo.id,
            title: inputRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value
        }
        dispatch(editTodos(todoEdit))
        dispatch(setEditbarVisibility({ visibility: false, todo: null }))
    }

    useEffect(() => {
        if (todo) {
            inputRef.current.value = todo.title;
            descriptionRef.current.value = todo.description
            dateRef.current.value = todo.date
        }
    }, [todo])

    return (
        <div className={`${styles.editbar} ${showEditbar ? styles.open : styles.close}`}>
            <div className={styles.title}>
                <div className={styles['cancle-icon']} onClick={toggleEditbar}>
                    <CancelIcon></CancelIcon>
                </div>
                <span>Edit Todo</span>
            </div>
            <div className={styles['input-edit']}>
                <div className={styles.inputcontainer}>
                    <input ref={inputRef}></input>
                </div>
            </div>
            <div className={styles['input-edit']}>
                <div className={styles.inputcontainer}>
                    <input ref={dateRef} type='datetime-local'></input>
                </div>
            </div>
            <div className={styles.addtodoform}>
                <textarea ref={descriptionRef}></textarea>
            </div>
            <div className={styles['button-container']}>
                <button onClick={editTodoHandler}>Save</button>
            </div>
        </div>
    )
}

export default EditTodos;