import styles from './TodoCard.module.css'
import MoneyBagIcon from '../../SvgIcons/MoneyBag';
import PencileIcon from '../../SvgIcons/PencileIcon';
import { useSelector } from 'react-redux';
import { setEditbarVisibility } from '../../../States/editbar-reducer';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../States/todos-reducer';
const TodoCard = (props) => {
    const { id, title, description,date } = props.todo
    const select = useSelector(state => state.editbar.todo.id)
    const selected = id === select  // check card is selected or not 

    const dispatch = useDispatch()
    const editTodoHandler = () => {
        dispatch(setEditbarVisibility({ visibility: true, todo:{...props.todo} }))
    }

    const deleteTodoHandler = ()=>{
        dispatch(deleteTodo(id))
    }

    return (
        <div className={`${styles.todocard} ${selected ? styles.selected : ''}`}>
            <div className={styles.title}>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div className={styles.Button} onClick={deleteTodoHandler} data-tooltip="delete">
                    <MoneyBagIcon></MoneyBagIcon>
                    </div>
                    
                    <div style={{ marginLeft: '5px', color: 'white' }}>
                        {title}
                    </div>
                    <div style={{ marginLeft: '5px', color: 'gray',fontSize:'14px' }}>
                        {date}
                    </div>
                
                </div>
                
                <div onClick={editTodoHandler} className={styles.Button} data-tooltip="edit">
                    <PencileIcon></PencileIcon>
                </div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

export default TodoCard;