import React, { useState, createContext, useCallback } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const triggerRefresh = useCallback(() => {
    setRefreshFlag((prev) => !prev);
  }, []);

  return (
    <AppContext.Provider value={{ refreshFlag, triggerRefresh }}>
      {children}
    </AppContext.Provider>
  );
};

const App = () => (
  <div>
    <h1>App Component</h1>
  </div>
);

export default App;
