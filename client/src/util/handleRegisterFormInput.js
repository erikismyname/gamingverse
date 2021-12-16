const handleRegisterFormInput = (formData) => {

    const email = formData.get('email').trim();

    const username = formData.get('username').trim();

    const password = formData.get('password').trim();

    const rePass = formData.get('repeat-password').trim();

    if (!email || !username || !password) {

        throw new Error('All fields are required!');

    } else if (password != rePass) {

        throw new Error('Passwords must match!');

    }

    return { email, username, password };

};

export default handleRegisterFormInput;