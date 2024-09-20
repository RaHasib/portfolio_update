
import React, { useRef, useState, useEffect } from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import Header from "../../components/Header";
import ContentSection from "../../components/ContentSection";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import BlogEditor from "../../components/BlogEditor";
import { useRouter } from "next/router";
import data from "../../data/portfolio.json";

const BlogPost = ({ post }) => {
  const [showEditor, setShowEditor] = useState(false);
  const textOne = useRef();
  const textTwo = useRef();
  const router = useRouter();

  useEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
      <>
        <Head>
          <title>{"Blog - " + post.title}</title>
          <meta name="description" content={post.preview} />
        </Head>
        <div
            className={`container mx-auto mt-10`}
        >
          <Header isBlog={true}/>
          <div className="relative">
            <img className="w-full h-96 rounded-lg object-cover" src={post.image} alt={post.title}></img>
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2">
              <h1 ref={textOne} className="text-2xl sm:text-4xl laptop:text-6xl">{post.title}</h1>
              <h2 ref={textTwo} className="text-md sm:text-xl laptop:text-2xl">{post.tagline}</h2>
            </div>
          </div>
          <ContentSection content={post.content}></ContentSection>
          <Footer/>
        </div>
        {process.env.NODE_ENV === "development" && (
            <div className="fixed bottom-6 right-6">
              <Button onClick={() => setShowEditor(true)} type={"primary"}>
                Edit this blog
              </Button>
            </div>
        )}
        {showEditor && (
            <BlogEditor
                post={post}
                close={() => setShowEditor(false)}
                refresh={() => router.reload(window.location.pathname)}
            />
        )}
      </>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "date",
    "slug",
    "title",
    "tagline",
    "preview",
    "image",
    "content",
  ]);
  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPost;