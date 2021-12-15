import handleGameDataFormInput from '../../util/handleGameDataFormInput.js';

import { createGame } from '../../services/gameService.js';

import styles from './Create.module.css';

const Create = ({ history }) => {

    const onCreateFormSubmitHandler = async (ev) => {

        ev.preventDefault();

        try {

            const gameData = handleGameDataFormInput(new FormData(ev.target));

            await createGame(gameData);

            history.push('/catalog');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id={styles['create-section']}>
            <form onSubmit={onCreateFormSubmitHandler}>
                <h1>Create</h1>
                <input type="text" name="title" placeholder="Title" />
                <textarea name="description" placeholder="Description" />
                <input type="text" name="image-url" placeholder="Image URL" />
                <input type="submit" value="Create" />
            </form>
        </section>
    );

};

export default Create;