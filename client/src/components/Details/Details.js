import styles from './Details.module.css';
import img from '../../demo.jpg';

const Details = () => {

    return (
        <section id={styles['details-section']}>
                <img src={img} alt="" />
            <div>
                <div>
                    <h2>Dead Space</h2>
                    <p>A massive deep-space mining ship goes dark after unearthing a strange artifact on a distant planet. Engineer Isaac Clarke embarks on the repair mission, only to uncover a nightmarish blood bath — the ship's crew horribly slaughtered and infected by alien scourge.</p>
                </div>
                <div>
                    <a href="">Edit</a>
                    <a href="">Delete</a>
                    <a href="">Like</a>
                    <a href="">Dislike</a>
                </div>
            </div>
        </section>
    );

};

export default Details;