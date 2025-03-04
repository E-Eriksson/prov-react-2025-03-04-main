import "@/styles/globals.css";
import { PostProvider } from "./contexts/postContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PostProvider>
        <Component {...pageProps} />
      </PostProvider>
    </>
  );
}
