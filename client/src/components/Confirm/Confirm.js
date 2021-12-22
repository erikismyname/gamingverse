import styles from './Confirm.module.css';

const Confirm = ({ onCancelBtnClickHandlerCb, onConfirmBtnClickHandlerCb }) => {

    return (
        <div id={styles.background}>
            <div id={styles.confirm}>
                <p>Are you sure?</p>
                <a onClick={onConfirmBtnClickHandlerCb}>OK</a>
                <a onClick={onCancelBtnClickHandlerCb}>Cancel</a>
            </div>
        </div>
    );

};

export default Confirm;