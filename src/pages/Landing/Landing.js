import Navbar from "../../components/Navbar/Navbar";
import Styles from "./Landing.module.css";
import { Outlet } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <Navbar />
      <main className={Styles.main}>
        <Outlet />
      </main>
    </>
  );
}
