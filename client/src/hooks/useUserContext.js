import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext.js';

const useUserContext = () => useContext(UserContext);

export default useUserContext;