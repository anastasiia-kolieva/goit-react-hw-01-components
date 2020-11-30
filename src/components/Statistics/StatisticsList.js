import List from './List';

export default function StatisticsList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(item => {
        return (
          <List key={item.id} label={item.label} percentage={item.percentage} />
        );
      })}
    </ul>
  );
}
