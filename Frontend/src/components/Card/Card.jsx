import styles from './Card.module.css'

function Card()
{
    return(
        <div className={styles.card}>
            <img src='' alt='profile picture'></img>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet</p>
        </div>                    
    );
}

export default Card