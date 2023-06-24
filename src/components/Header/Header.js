import styles from './Header.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSidebarVisibility } from '../../States/sidebar-reducer';
import MenuIcon from '../SvgIcons/MenuSvg';
const Header = () => {
    const showSidebar = useSelector(state => state.sidebar.visibilty)
    const selection =useSelector(state => state.sidebar.selction) 
    const dispatch = useDispatch()
    // console.log(showSidebar)
    const toggleSidebar = () => {
        dispatch(setSidebarVisibility(true))
    }
    return (
        <div className={styles.header}>
            <div style={{ display: 'flex', marginLeft: '10px' }}>
                {!showSidebar && <div onClick={toggleSidebar}><MenuIcon></MenuIcon></div>}
                <span className={styles['header-section']}>{selection}</span>
            </div>
        </div>
    )
}
export default Header;