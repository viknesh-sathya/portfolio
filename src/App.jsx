import styles from './App.module.css';
import { About } from './components/About/About';
import { Expirence } from './components/Expirence/Expirence';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Project } from './components/Projects/Projects';

export default function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Expirence />
      <Project />
      <Footer />
    </div>
  );
}
