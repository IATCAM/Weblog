import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout({children}) {
  return (
    <div>
      <Navbar title="Article" />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
