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

const getRequest = async (url) => request(url, getRequestOptions());

const postRequest = async (url, body) => request(url, getRequestOptions('POST', body));

const putRequest = async (url, body) => request(url, getRequestOptions('PUT', body));

const deleteRequest = async (url) => request(url, getRequestOptions('DELETE'));

export { getRequest, postRequest, putRequest, deleteRequest };