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
        <div className={Styles.containerHalfImg}>
          <img
            id={Styles.displayOne}
            src="./images/InstagramImg.png"
            alt="Instagram example"
          />
        </div>
      </section>
      <section className={Styles.section}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={Styles.sectionTopWave}
        >
          <path
            fill="#fdd4d4"
            fill-opacity="1"
            d="M0,192L80,213.3C160,235,320,277,480,261.3C640,245,800,171,960,149.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className={Styles.containerHalfImg}>
          <img
            src="./images/schedule.png"
            alt="Calendar with images to display our auto posting features"
          />
        </div>
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
          <Link className={Styles.button} to="/pricing">
            Explore Plans
          </Link>
        </div>
      </section>
      <section className={Styles.section}>
        <div className={Styles.containerHalf}>
          <h3 className={Styles.h3}>Staying up to date</h3>
          <p className={Styles.p}>
            Keeping your business up to date with all of the newest products is
            a hassle, we help you find and post relevant material from others in
            your network and automatically post it on your account.
          </p>
        </div>
        <div className={Styles.containerHalfImg}>
          <img
            src="./images/repost.png"
            alt="iphone with multiple imaes sround it"
          />
        </div>
      </section>
      <section className={Styles.section}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={Styles.sectionBottomWave}
        >
          <path
            fill="#FFFFFF"
            fill-opacity="1"
            d="M0,192L80,213.3C160,235,320,277,480,261.3C640,245,800,171,960,149.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className={Styles.containerHalfImg}>
          <img src="./images/analytics.png" alt="Chart with images below" />
        </div>
        <div className={Styles.containerHalf}>
          <h3 className={Styles.h3}>
            Reliable Analytics for
            <br />
            your business
          </h3>
          <p className={Styles.p}>
            As your business grows your media will need to grow with it. That's
            why we provide insights to what posts are making your business
            known.
          </p>
          <Link className={Styles.button} to="/services">
            See what we offer
          </Link>
        </div>
      </section>
    </>
  );
}
