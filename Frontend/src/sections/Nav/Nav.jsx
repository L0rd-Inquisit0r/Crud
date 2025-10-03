import styles from './Nav.module.css'

function Nav(){

    return(
        <nav className={styles.nav}>
            <ul>
                <li><a>Tab 1</a></li>
                <li><a>Tab 2</a></li>
                <li><a>Tab 3</a></li>
                <li><a>Tab 4</a></li>
            </ul>
        </nav>
    );
}

export default Nav;