import { getSession, useSession } from "next-auth/react";
function Blog({ blogsdata }) {
  const { data: session } = useSession(); //if we use session like this then if session is sent as props useSession will make use of session from props else it will use the session from it.
  console.log(session);
  return <h1>Blog {blogsdata}</h1>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      blogsdata: session
        ? "List of 100 personalizedblogs"
        : "List of free blogs",
    },
  };
}
