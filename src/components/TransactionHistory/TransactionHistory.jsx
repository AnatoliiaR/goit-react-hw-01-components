import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  const transactions = items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id} className={style.tr}>
        <td className={style.td}>{type}</td>
        <td className={style.td}>{amount}</td>
        <td className={style.td}>{currency}</td>
      </tr>
    );
  });
  return (
    <>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th}>Type</th>
            <th className={style.th}>Amount</th>
            <th className={style.th}>Currency</th>
          </tr>
        </thead>

        <tbody className={style.tbody}>{transactions}</tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
