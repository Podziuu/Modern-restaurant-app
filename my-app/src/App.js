import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Chef from "./components/Chef";
import Film from "./components/Film";
import Awards from "./components/Awards";
import Galery from "./components/Galery";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth font-body">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Film />
      <Awards />
      <Galery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
