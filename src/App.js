import Sidebar from './components/SideBar/Sidebar.js';
import styles from './Display.module.css'
import Header from "./components/Header/Header";
import EditTodos from "./components/EditTodos/EditTodos";
import TodosList from './components/Todos/TodosList/TodosList.js';
import UsersList from './components/UsersList/UsersList.js';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector(state => state.todos.todoList)
  const selection = useSelector(state => state.sidebar.selction)
  if (todos) {
    localStorage.setItem('todosLists', JSON.stringify(todos))
  }

  return (
    <div className={styles['container-main']}>
      <Sidebar></Sidebar>
      <div style={{ height: '100%', width: '100%' }}>
        <Header></Header>
        {selection === 'Todos' && <div className={styles['container-todos-edit']}>
          <div className={styles['container-todos']}>
            <TodosList todos={todos}></TodosList>
          </div>
          <EditTodos></EditTodos>
        </div>}
        {selection === 'Users' && <div className={styles.users}><UsersList></UsersList></div>}
      </div>
    </div>

  );
}

export default App;
