import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';



export const ConctactListItem = ({ name, number, id, onDelete}) => {
    return (
        <>
        <li className={css.liStyle}>{name}: {number}
        <button type='button' className={css.contactBtn} onClick={(() => onDelete(id))}>Delete</button>
        </li>
        </>
    )
};

ConctactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}