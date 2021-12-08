import styles from './Create.module.css';

const Create = () => {

    return (
        <section>
            <form className={styles['create-form']}>
                <h1 className={styles['create-form-heading']}>Create</h1>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="image-url" placeholder="Image URL" />
                <textarea name="description" placeholder="Description" />
                <input type="submit" value="Create" />
            </form>
        </section>
    );

};

export default Create;