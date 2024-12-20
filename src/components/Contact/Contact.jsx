import s from './Contact.module.css';
import { ImUser } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <li className={s.listItem}>
            <p className={s.contactInfo}>
                <ImUser />
                {name}
            </p>
            <p className={s.contactInfo}>
                <FaPhoneAlt />
                {number}
            </p>
            <button
                className={s.deleteBtn}
                onClick={() => onDeleteContact(id)}
            >
                Delete
            </button>
        </li>
    );
};

export default Contact;
