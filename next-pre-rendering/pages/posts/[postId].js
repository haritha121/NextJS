function Post({ post }) {
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
export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } }, //here we informed next js to generate the postId with postId=1;
      { params: { postId: "2" } }, //postId paramter value is a string
      { params: { postId: "3" } }, //we are only passing three posts so we are generating 3 paths
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context; //to get hold of params in the url getstaticprops will have context keyword from which we can extract the required parameter entered in the url.
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
