import React from 'react';
import styles from './SideBar.module.css';
import SideBarItem from './SideBarItem';
import HomeIcon from '../SvgIcons/HomeIconSvg';
import Section1Icon from '../SvgIcons/Section1Svg';
import NameIcon from '../SvgIcons/NameSvg';
import ClosingIcon from '../SvgIcons/ClosingSvg';
import { setSidebarVisibility } from '../../States/sidebar-reducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const sidebaritemlist = [
    { name: 'Todos', icon: <HomeIcon /> },
    { name: 'Users', icon: <Section1Icon /> },   
]


const Sidebar = () => {
    const showSidebar = useSelector(state => state.sidebar.visibilty)
    const selction =useSelector(state => state.sidebar.selction) 
    console.log(selction);
    const dispatch = useDispatch()
    const toggleSidebar = () => {
        dispatch(setSidebarVisibility(false))
    }
    return (
        <div className={`${styles.sidebar} ${showSidebar ? styles.open : styles.close}`}>
            <div className={styles.logo}>
                <NameIcon></NameIcon>
                <span>Name</span>
                <div onClick={toggleSidebar}>
                    <ClosingIcon ></ClosingIcon>
                </div>
            </div>
            {sidebaritemlist.map((item) => <SideBarItem key={item.name} name={item.name} selction={selction}>{item.icon}<div>{item.name}</div></SideBarItem>)}
            {/* <SideBarItem style={{ color: 'white', background: '#353945', borderRadius: '12px' }}>
                <ShareIconWhite></ShareIconWhite>
                <div>Section 8</div>
            </SideBarItem> */}
        </div>
    );
};

export default Sidebar;
