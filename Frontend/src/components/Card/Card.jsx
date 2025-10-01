import styles from './Card.module.css'
import image from '../../assets/react.svg'

function Card()
{
    return(
        <div className={styles.card}>
            <img src={image} alt='profile picture'/>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet</p>
        </div>                    
    );
}

export default Card