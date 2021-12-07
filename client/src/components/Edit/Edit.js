import styles from './Edit.module.css';

const Edit = () => {

    return (
        <section>
            <form className={styles['edit-form']}>
                <h1 className={styles['edit-form-heading']}>Edit</h1>
                <input type="text" name="title" placeholder="Title" defaultValue="" />
                <input type="text" name="image-url" placeholder="Image URL" defaultValue="" />
                <textarea type="text" name="description" placeholder="Description" defaultValue="" />
                <input type="submit" value="Edit" />
            </form>
        </section>
    );

};

export default Edit;