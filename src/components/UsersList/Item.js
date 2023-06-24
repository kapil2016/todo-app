import React from 'react';
import styles from './Item.module.css'

const Item = (props) => {
  const { avatar, first_name, last_name, email } = props;
  return (
    <div className={styles['list-item']}>
      <img src={avatar} alt="Profile" className={styles['profile-image']} />
      <div className={styles['user-details']}>
        <h3>{first_name} {last_name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Item;
