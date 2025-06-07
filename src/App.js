import "./App.css";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Interest from "./Components/Interest";
import Nav from "./Components/Nav";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <Nav />
      <Experience />
      <Interest />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
