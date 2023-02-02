import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { ConctactListItem } from 'components/ContactListItem/ContactListItem';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, onDelete }) => (
    <ul className={css.ulStyle}>
        {contacts.map(({ number, name, id }) => (
            <ConctactListItem
                key={nanoid(5)}
                id={id}
                name={name}
                number={number}
                onDelete={onDelete}
            />
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })
    ),
    onDelete: propTypes.func.isRequired,
};
