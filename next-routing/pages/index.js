import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog" legacyBehavior>
        <a>Blog </a>
      </Link>
      <Link href="/product" legacyBehavior>
        <a> Product</a>
      </Link>
      <button onClick={handleClick}> Place Order</button>
    </div>
  );
}
export default Home;
