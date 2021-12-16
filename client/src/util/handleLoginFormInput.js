const handleLoginFormInput = (formData) => {

    const username = formData.get('username').trim();

    const password = formData.get('password').trim();

    if (!username || !password) throw new Error('All fields are required!');

    return { username, password };

};

export default handleLoginFormInput;