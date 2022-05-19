import Styles from "./About.module.css";
import IconBar from "../../components/IconBar/IconBar";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <section className={Styles.section}>
        <div className={Styles.containerHalf}>
          <h1 className={Styles.h1}>Media Pilot</h1>
          <p className={Styles.p}>
            Social Media is a powerful tool that can help you reach your
            audience; and Media pilot is here to help you get started. With
            scheduled posting, enguagement analysis, and more we make sure your
            social media is under control so you can focus on what matters.
          </p>
          <button className={Styles.button}>Login</button>
          <button className={Styles.button}>Sign Up</button>
          <IconBar />
        </div>
        <div className={Styles.containerHalf}>
          <img
            id={Styles.displayOne}
            src="./images/InstagramImg.png"
            alt="Instagram example"
          />
        </div>
      </section>
      <section className={Styles.section}>
        <h1 className={Styles.h2}>
          <h1 className={Styles.secondHeader}>
            We help you get the online presence your business deserves
          </h1>
        </h1>
        <div className={Styles.containerHalf}></div>
        <div className={Styles.containerHalf}>
          <h3 className={Styles.h3}>
            Media Management
            <br />
            made Easy
          </h3>
          <p className={Styles.p}>
            We stride to help businesses grow their online presence with the
            click of a button. Providing scheduled posting, post suggestions,
            and performance enhancing analytics is our job!
          </p>
          <Link className={Styles.button} to="/">
            Explore Plans
          </Link>
        </div>
      </section>
    </>
  );
}
