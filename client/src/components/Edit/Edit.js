import styles from './Edit.module.css';

const Edit = () => {

    return (
        <section id={styles['edit-section']}>
            <form>
                <h1>Edit</h1>
                <input type="text" name="title" placeholder="Title" defaultValue="" />
                <textarea type="text" name="description" placeholder="Description" defaultValue="" />
                <input type="text" name="image-url" placeholder="Image URL" defaultValue="" />
                <input type="submit" value="Edit" />
            </form>
        </section>
    );

};

export default Edit;