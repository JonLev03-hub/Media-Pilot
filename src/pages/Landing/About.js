import Styles from "./About.module.css";
export default function About() {
  return (
    <>
      <section className={Styles.section}>
        <div className={Styles.textContainer}>
          <h1 className={Styles.mainHeader}>Media Pilot</h1>
          <p className={Styles.p}>
            Social Media is a powerful tool that can help you reach your
            audience; and Media pilot is here to help you get started. With
            scheduled posting, enguagement analysis, and more we make sure your
            social media is under control so you can focus on what matters.
          </p>
          <button className={Styles.buttonInvert}>Login</button>
          <button className={Styles.button}>Sign Up</button>
        </div>
      </section>
    </>
  );
}
