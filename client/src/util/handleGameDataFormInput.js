const handleGameDataFormInput = (formData) => {

    const title = formData.get('title').trim();

    const description = formData.get('description').trim();

    const imageURL = formData.get('image-url').trim();

    if (!title || !description || !imageURL) {

        throw new Error('All fields are required!');

    } else if (title.length < 3 || title.length > 15) {

        throw new Error('Title must be between 3 and 15 characters long!');

    } else if (description.length < 10 || description.length > 600) {

        throw new Error('Description must be between 10 and 600 characters long!');

    } else if (!/^https?:\/\//.test(imageURL)) {

        throw new Error('Image URL must be a valid one!');

    } else if (/[ ~`!@#$%^&*\(\)_\-+=\{\}\[\]|\\:;<>,\.\?\/]/.test(username)) {

        throw new Error('Username must contain only latin characters!');

    } else if (username.length < 3 || username.length > 5) {

        throw new Error('Username must be between 3 and 5 characters long!');

    } else if (password.length < 3) {

        throw new Error('Password must be at least 3 characters long!');

    } else if (password != rePass) {

        throw new Error('Passwords must match!');

    }

    return { title, description, imageURL };

};

export default handleGameDataFormInput;