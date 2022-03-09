import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export function AppWrapper({children}) {
  const [postNid, setPostNid] = useState('');

  const getPost = () => {
    return postNid;
  }

  const setPost = (id) => {
    setPostNid(id);
  }

  return (
    <AppContext.Provider value={{getPost, setPost}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}
