import Image from "next/image";
import Navbar from './components/Navbar.jsx';
import BusinessCard from './components/BusinessCard.jsx';
import PlanCard from './components/PlanCard.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <PlanCard 
          name="Starter"
          description="Ideal for freelancers and contractors just starting out"
          price="27"
          features="List goes here"
        />
        <BusinessCard />
        <Footer />
      </main>
    </div>
  );
}
