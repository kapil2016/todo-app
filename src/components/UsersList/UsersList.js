import useFetch from '../../Hooks/useFetch'
import Item from './Item'
import { useRef } from 'react'
import styles from './UsersList.module.css'

const UsersList = () => {
    const [usersList, fetchNextPage] = useFetch('https://reqres.in/api/users?page=1')
    const page = useRef(1)
    const jupmTo = useRef();
    function pageChanegeHandler(p) {
        if (p < 1) {
            page.current = 1;
            return;
        }
        fetchNextPage(`https://reqres.in/api/users?page=${p}`)
    }

    function submitHandler(e) {
        e.preventDefault();
        const p = jupmTo.current.value;
        page.current = Number(p);
        pageChanegeHandler(p);
        jupmTo.current.value = 1;
    }

    return (
        <>
            <div className={styles.ListContainer}>
                {usersList[0] ? usersList.map((user) => <Item key={user.id} {...user}></Item>) : <p>No Data Found</p>}
            </div>
            <div className={styles.pageContainer}>
                <form onSubmit={(e) => submitHandler(e)}>
                    <label htmlFor='jump'>Jump To Page : </label>
                    <input id='jump' type='number' min={1} ref={jupmTo}></input>
                </form>
                <p>page:{page.current}</p>
            </div>

            <div className={styles.buttonContainer}>
                <button onClick={() => { page.current = page.current - 1; pageChanegeHandler(page.current) }}>Previous Page</button>
                <button onClick={() => { page.current = page.current + 1; pageChanegeHandler(page.current) }}>Next Page</button>
            </div>
        </>
    )
}
export default UsersList;