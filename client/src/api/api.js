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