import PropTypes from 'prop-types';
import s from './List.module.css';

export default function List({ label, percentage }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

List.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
