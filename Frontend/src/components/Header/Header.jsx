import styles from './Header.module.css'
import icon from '../../assets/react.svg'

function Header(){

    return(
        <header className={styles.header}>
            <h1>CRUD<img src={icon} alt='icon'/></h1>
        </header>
    );
}

export default Header