import { StatusFilter } from '../StatusFilter/StatusFilter';
import  TaskCounter  from '../TaskCounter/TaskCounter';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={css.appBar}>
      <section className={css.appBarSection}>
        <h2 className={css.appBarTitle}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.appBarSection}>
        <h2 className={css.appBarTitle}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
export default AppBar;