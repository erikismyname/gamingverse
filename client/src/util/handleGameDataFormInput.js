const handleGameDataFormInput = (formData) => {

    const title = formData.get('title').trim();

    const description = formData.get('description').trim();

    const imageURL = formData.get('image-url').trim();

    if (!title || !description || !imageURL) throw new Error('All fields are required!');

    return { title, description, imageURL };

};

export default handleGameDataFormInput;