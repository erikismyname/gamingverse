import { Redirect } from 'react-router-dom';

import useUserContext from '../hooks/useUserContext.js';

const isUser = (WrappedComponent) => {

    const WrapperComponent = (props) => {

        const { validateUser } = useUserContext();

        return (!validateUser()
            ? <Redirect to="/login" />
            : <WrappedComponent {...props} />
        );

    };

    return WrapperComponent;

};

export default isUser;