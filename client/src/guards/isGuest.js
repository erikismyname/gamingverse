import { Redirect } from 'react-router-dom';

import useUserContext from '../hooks/useUserContext.js';

const isGuest = (WrappedComponent) => {

    const WrapperComponent = (props) => {

        const { validateUser } = useUserContext();

        return (validateUser()
            ? <Redirect to="/catalog" />
            : <WrappedComponent {...props} />
        );

    };

    return WrapperComponent;

};

export default isGuest;