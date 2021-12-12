import styles from './Dialog.module.css';

const Notification = () => {

    return (
        <div id={styles.dialog}>
            <p>Are you sure?</p>
            <button>Yes</button>
            <button>No</button>
        </div>
    );

};

export default Notification;