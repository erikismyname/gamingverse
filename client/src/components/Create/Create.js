import styles from './Create.module.css';

const Create = () => {

    return (
        <section id={styles['create-section']}>
            <form>
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