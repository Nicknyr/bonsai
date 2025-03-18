import Image from "next/image";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <Footer />
      </main>
    </div>
  );
}
