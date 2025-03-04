import { createContext, useState } from "react";

const postContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPosts] = useState([]);

  return (
    <postContext.Provider value={{ post, setPosts }}>
      {children}
    </postContext.Provider>
  );
};

export default postContext;
