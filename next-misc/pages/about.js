import Footer from "@/components/Footer";

function About() {
  return <div className="content">About</div>;
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
