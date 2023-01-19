import "./App.css";
import { Home } from "./pages";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
