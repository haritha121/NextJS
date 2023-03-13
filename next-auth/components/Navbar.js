import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul
        className={`main-nav ${
          !session && status === "loading" ? "loading" : "loaded"
        }`}
      >
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" legacyBehavior>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog" legacyBehavior>
            <a>Blog</a>
          </Link>
        </li>

        {!session && status !== "authenticated" && (
          <li>
            <Link legacyBehavior href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github"); //here we passed github. So that we can automatically signin without navigating to signin ui everytime.
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && status !== "unauthenticated" && (
          <li>
            <Link legacyBehavior href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
