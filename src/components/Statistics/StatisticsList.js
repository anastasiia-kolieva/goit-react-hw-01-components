import List from './List';
import s from './StatisticsList.module.css';

export default function StatisticsList({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map(item => {
        return (
          <List key={item.id} label={item.label} percentage={item.percentage} />
        );
      })}
    </ul>
  );
}
