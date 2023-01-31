import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => (
<div>
    <label>Find contacts by Name </label>
    <input
    className={css.filterName}
    type="text"
    name="filter"
    placeholder="Enter filter"
    value={filter}
    onChange={onChange}
    />
    </div>
);

Filter.propTypes = {
    filter: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
};