// 4. Hämta posts från API (3p)
// Hämta posts från: https://jsonplaceholder.typicode.com/posts
// Spara posts i context.
// Skapa en länk till sidan /posts och visa listan med posts där.
// för varje post ska `title`och `body` visas.

import Link from "next/link";
import { useContext, useEffect } from "react";
import postContext from "./contexts/postContext";

export default function Question4({ postData }) {
  const { posts, setPosts } = useContext(postContext);

  useEffect(() => {
    setPosts(postData);
    console.log(posts);
  }, []);

  return (
    <div>
      <h1>Question 4</h1>
      <Link href={"/posts"}>To posts!</Link>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: { postData: data },
  };
}
