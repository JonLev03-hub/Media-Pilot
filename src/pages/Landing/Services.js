import Styles from "./Services.module.css";
import IconBar from "../../components/IconBar/IconBar";
export default function Services() {
  return (
    <>
      <section className={Styles.section}>
        <div className={Styles.containerHalf}>
          <h3 className={Styles.h3}>Post Scheduling</h3>
          <p className={Styles.p}>
            Your time matters, and you wont always have the ability to wait
            around to post at the best time for your business. We make sure your
            posts go out on time so you don't need to.
          </p>
          <IconBar supportedBy={["facebook", "twitter", "instagram"]} />
        </div>
        <div className={Styles.containerHalfImg}></div>
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
        <div className={Styles.containerHalfImg}></div>
        <div className={Styles.containerHalf}>
          <h3 className={Styles.h3}>Post Time Suggestions</h3>
          <p className={Styles.p}>
            Picking the best time can be difficult. To make sure you can get the
            most for the media you put online we are able to track your users
            and suggest the best time to post.
          </p>
          <IconBar supportedBy={["facebook", "twitter", "instagram"]} />
        </div>
      </section>
      <section className={Styles.section}>
        <div className={Styles.containerHalf}>
          <h3 className={Styles.h3}>Hashtag suggestion</h3>
          <p className={Styles.p}>
            Making sure your posts are getting to the correct audience takes a
            lot of trial and error, but thankfully Media Pilot can take control
            for you and find new hashtags to use to ensure people get what they
            are searching for.
          </p>
          <IconBar />
        </div>
        <div className={Styles.containerHalfImg}></div>
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
        <div className={Styles.containerHalfImg}></div>
        <div className={Styles.containerHalf}>
          <h3 className={Styles.h3}>Repost Suggestions</h3>
          <p className={Styles.p}>
            Online posts are made every second and to make sure that you are
            able to keep up to date on the most recent ads related to your
            business we can track other accounts and send you a feed of posts
            that you may be interested in putting on your page aswell.
          </p>
          <IconBar
            supportedBy={["facebook", "twitter", "instagram", "pintrest"]}
          />
        </div>
      </section>
      <section className={Styles.section}>
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
          <IconBar />
        </div>
        <div className={Styles.containerHalfImg}></div>
      </section>
      <section className={Styles.section}>
        <div className={Styles.containerHalfImg}></div>
        <div className={Styles.containerHalf}>
          <h3 className={Styles.h3}>Ad Management for your media</h3>
          <p className={Styles.p}>
            Managing ads across multiple platforms and tracking performance
            takes time that youshouldnt need to spend. Media Pilot can guide
            your ad campaigns and help you make the most of your paid ads.
          </p>
          <IconBar supportedBy={["facebook", "instagram"]} />
        </div>
      </section>
    </>
  );
}
