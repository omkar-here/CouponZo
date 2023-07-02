import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loginId, setLoginId] = useState(null);

  const setUserId = (id) => {
    setLoginId(id);
  };

  return (
    <UserContext.Provider value={{ loginId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
