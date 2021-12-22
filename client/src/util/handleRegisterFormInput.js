const handleRegisterFormInput = (formData) => {

    const email = formData.get('email').trim();

    const username = formData.get('username').trim();

    const password = formData.get('password').trim();

    const rePass = formData.get('repeat-password').trim();

    if (!email || !username || !password) {

        throw new Error('All fields are required!');

    } else if (!email.includes('@') || !email.includes('.')) {

        throw new Error('Email must be a valid one!');

    } else if (/[ ~`!@#$%^&*\(\)_\-+=\{\}\[\]|\\:;<>,\.\?\/]/.test(username)) {

        throw new Error('Username must contain only latin characters!');

    } else if (username.length < 3 || username.length > 5) {

        throw new Error('Username must be between 3 and 5 characters long!');

    } else if (password.length < 3) {

        throw new Error('Password must be at least 3 characters long!');

    } else if (password != rePass) {

        throw new Error('Passwords must match!');

    }

    return { email, username, password };

};

export default handleRegisterFormInput;