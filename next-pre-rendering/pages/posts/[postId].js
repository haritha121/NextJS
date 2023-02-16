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
export async function getStaticProps(context) {
  const { params } = context; //to get hold of params in the url getstaticprops will have context keyword from which we can extract the required parameter entered in the url.
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = response.json();
  return {
    props: {
      post: data,
    },
  };
}
