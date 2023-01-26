import Link from "next/link";
function ProductList({ productID = 100 }) {
  return (
    <>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <h2>
        <Link href="/product/1" legacyBehavior>
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/2" legacyBehavior>
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/3" legacyBehavior replace>
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productID}`} legacyBehavior>
          <a> Product {productID}</a>
        </Link>
      </h2>
    </>
  );
}
export default ProductList;
