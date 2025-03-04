import postContext from "./contexts/postContext";
import { useContext } from "react";

export default function Posts() {
  const { posts, setPosts } = useContext(postContext);
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.title + " "}
            {post.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
