import styles from './SideBarItem.module.css'
import { setSidebarSelction } from '../../States/sidebar-reducer';
import { useDispatch } from 'react-redux';

const SideBarItem  = (props)=>{
  const dispatch = useDispatch();
  const selected = props.selction === props.name ;
  console.log(selected)
  const selctionHandler = ()=>{
    dispatch(setSidebarSelction(props.name))
  }
    return(
        <div className={`${styles['side-bar-item']} ${selected ? styles.selcted : ''}`} onClick={selctionHandler}>
          {props.children}
        </div>
    )
}
export default SideBarItem ;