import style from './Statistics.module.css';
import { getRandomStyle } from './randomStyles';
import PropTypes from 'prop-types';


export const Statistics = ({ stats }) => {

    const elements = stats.map(({ id, label, percentage }) => 
      
        <li className={style.item} key={id} style={getRandomStyle()}>
            
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}</span>
        </li>
    )

    
    return <section className={style.statistics}>
        <h2 className={style.title}>Upload stats</h2>

        <ul className={style.list} >
            {elements}
          
    </ul>
  </section>;
};


Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
};

 

