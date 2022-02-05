import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Menu from './components/Menu';

function App() {
  return (
    <div className="scroll-smooth font-body">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
    </div>
  );
}

export default App;
