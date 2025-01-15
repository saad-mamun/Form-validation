import React, { createContext } from "react";
export const DataContext = createContext();
const UserContext = ({ children }) => {
  const userData = {
    username:"Mamun",
    age:69,
    city:"Rajshahi"

  }

  return (
    <div>
      <DataContext.Provider value={userData}>{children}</DataContext.Provider>
    </div>
  );
};

export default UserContext;
