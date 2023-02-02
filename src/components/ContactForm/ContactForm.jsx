import { useState } from 'react';
import propTypes from 'prop-types';
import css from './ContactForm.module.css';

export function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({ name, number });

        setName('');
        setNumber('');
    };

    return (
        <>
            <form
                className={css.form}
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Enter name"
                    onChange={handleChange}
                    className={css.formName}
                />

                <label>Number</label>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Enter number"
                    onChange={handleChange}
                    className={css.formNumber}
                />

                <button type="submit" className={css.contactBtn}>
                    Add contact
                </button>
            </form>
        </>
    );
}

ContactForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
};
