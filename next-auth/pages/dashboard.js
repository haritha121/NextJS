// import { useSession, signIn } from "next-auth/react";

// function Dashboard({}) {
//   const { status } = useSession({
//     required: true,
//     onUnauthenticated() {
//       // The user is not authenticated, handle it here.
//       signIn();
//     },
//   });
//   return <h1>Dashboard</h1>;
// }

// export default Dashboard;

// Here is the beginner way, to protect pages for "Unauthenticated" user. next-auth Version 4 :

import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
export default function Dashboard() {
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);
  if (status !== "authenticated") {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {" "}
      <div>Dashboard</div>{" "}
    </>
  );
}
