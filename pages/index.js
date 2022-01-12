import Layout from "compnents/Layout";
import { getPost } from "lib/posts";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="container px-8">
        {posts.events.map((p) => (
          <div className="grid grid-cols-3" key={p.id}>
            <div>{p.name}</div>
            <div>{p.slug}</div>
            <div>{p.venue}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export const getStaticProps = () => {
  const posts = getPost();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};
