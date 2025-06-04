// import { INITIAL_DATE } from '../../Mocks/Mocks';
import MainText from '../../components/MainText/MainText';
import styles from './Favorites.module.css'

export function Favorites () {
  // const data = INITIAL_DATE;

  

  return (
    <div className={styles["card"]}>
      <MainText title={'Избранное'} text={''}/>
    </div>
  );
}