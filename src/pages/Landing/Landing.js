import Navbar from "../../components/Navbar/Navbar";
import Styles from "./Landing.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
export default function Landing() {
  return (
    <>
      <Navbar />
      <main className={Styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
