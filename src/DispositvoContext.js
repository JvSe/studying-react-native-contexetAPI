import React from 'react';

const UserContext = React.createContext('claro');

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;