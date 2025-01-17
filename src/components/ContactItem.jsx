/* eslint-disable react/prop-types */

import styles from "./ContactItem.module.css"

function ContactItem({data:{ id ,name , lastName , email, phone} ,deleteHandler}) {
    return (
        <li className={styles.item}>
            <p>{name} {lastName}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={()=>deleteHandler(id)}>Delete</button>
        </li>
    )
}

export default ContactItem