import './App.css';
import Browser from './components/browser/Browser';
import Navbar from './components/navbar/Navbar';
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div className="app"
      initial={{y: "-100vw", opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.3}}
    >
      <Navbar/>
      <Browser/>
    </motion.div>
  );
}

export default App;
