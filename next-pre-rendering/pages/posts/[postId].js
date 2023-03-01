import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;
export async function getStaticProps(context) {
  const { params } = context; //to get hold of params in the url getstaticprops will have context keyword from which we can extract the required parameter entered in the url.
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /posts/${params.postId}`);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();
  // const paths = data.map((post) => {
  //   return {
  //     params: { postId: `${post.id}` }, //dynamic way of rendering path
  //   };
  // });
  return {
    paths: [
      { params: { postId: "1" } }, //here we informed next js to generate the postId with postId=1;
      { params: { postId: "2" } }, //postId paramter value is a string
      { params: { postId: "3" } }, //we are only passing three posts so we are generating 3 paths
    ],
    fallback: true,
  };
}
