const request = async (url, options) => {

    const response = await fetch(url, options);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(err.message);

    }

    try {

        const data = await response.json();

        return data;

    } catch (err) {

        return response;

    }

};

const getRequestOptions = (method = 'GET', body) => {

    const options = {
        method,
        headers: {},
    };

    const token = sessionStorage.getItem('token');

    if (token) options.headers['X-Authorization'] = token;

    if (body) {

        options.headers['Content-Type'] = 'application/json';

        options.body = JSON.stringify(body);

    }

    return options;

};