import Head from "next/head";
import Footer from "@/components/Footer";

function About() {
  return (
    <>
      <Head>
        <title>About Page Head Component Implementation</title>
        <meta
          name="description"
          content="Learning next js from Code evolution"
        />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;
About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
