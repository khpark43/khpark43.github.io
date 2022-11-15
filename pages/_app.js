import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="mt-12">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
