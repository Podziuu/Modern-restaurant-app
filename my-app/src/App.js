import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Menu from './components/Menu';
import Chef from './components/Chef'
import Film from './components/Film'

function App() {
  return (
    <div className="scroll-smooth font-body">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Film />
    </div>
  );
}

export default App;
