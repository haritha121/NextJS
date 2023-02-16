import Link from "next/link";
function PostList({ posts }) {
  return (
    <>
      <h1> Lists of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              {/* //We will use passHref in Link tag when the child for the Link tag is not an anchor tag */}
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}

export default PostList;
