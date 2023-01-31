import propTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
    <section className={css.sectionStyle}>
        <h2 className={css.title}>{title}</h2>
        {children}
    </section>
);

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
};


