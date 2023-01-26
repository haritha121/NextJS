import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog" legacyBehavior>
        <a>Blog </a>
      </Link>
      <Link href="/product" legacyBehavior>
        <a> Product</a>
      </Link>
    </div>
  );
}
export default Home;
