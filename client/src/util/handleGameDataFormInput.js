const handleGameDataFormInput = (formData) => {

    const title = formData.get('title').trim();

    const description = formData.get('description').trim();

    const imageURL = formData.get('image-url').trim();

    if (!title || !description || !imageURL) {

        throw new Error('All fields are required!');

    } else if (title.length < 3 || title.length > 20) {

        throw new Error('Title must be between 3 and 20 characters long!');

    } else if (description.length < 10 || description.length > 600) {

        throw new Error('Description must be between 10 and 600 characters long!');

    } else if (!/^https?:\/\//.test(imageURL)) {

        throw new Error('Image URL must be a valid one!');

    } 

    return { title, description, imageURL };

};

export default handleGameDataFormInput;