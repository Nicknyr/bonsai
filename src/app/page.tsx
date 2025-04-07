import Image from "next/image";
import Navbar from './components/Navbar.jsx';
import BusinessCard from './components/BusinessCard.jsx';
import PlanCard from './components/PlanCard.jsx';
import Questions from './components/Questions.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import styles from "./page.module.css";
import planSectionStyles from './styles/PlanSection.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <section className={planSectionStyles.container}>
          <PlanCard 
            name="Starter"
            description="Ideal for freelancers and contractors just starting out"
            price="27"
            features={[
              "All Template",
              "Unlimited Clients & Projects",
              "Invoicing & Payments",
              "Proposals & Contracts",
              "Tasks & Time Tracking",
              "Client CRM",
              "Expense Tracking",
              "Up to 5 Project Collaborators"
            ]}
          />
          <PlanCard 
            name="Professional"
            description="Everything a growing independent business needs to thrive."
            price="39"
            features={[
              "Everything in Starter plus...",
              "Custom Branding",
              "Forms & Questionnaires",
              "Workflow Automations",
              "Client Portal",
              "QuickBooks Integration",
              "Calendly Integration",
              "Zapier Integration",
              "Up to 15 Project Collaborators"
            ]}
          />
          <PlanCard 
            name="Business"
            description="The perfect package for small businesses and agencies."
            price="79"
            features={[
              "Everything in Starter and Professional plus...",
              "Subcontractor Management",
              "Hiring Agreement Templates (1099 contracts)",
              "Subcontractor Onboarding",
              "Talent Pool",
              "3 Team Seats (additional seats $9/month)",
              "Accountant Access",
              "Connect Multiple Bank Accounts",
              "Unlimited Subcontractors",
              "Unlimited Project Collaborators"
            ]}
          />
        </section>
        <BusinessCard />
        <Questions />
        <Footer />
      </main>
    </div>
  );
}
