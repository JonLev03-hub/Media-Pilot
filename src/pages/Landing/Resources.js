import Styles from "./Resources.module.css";
import FaqCard from "../../components/FaqCard/FaqCard";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
export default function Resources() {
  const FAQ = [
    {
      q: "What is the purpose of this website?",
      a: "We give businesses an easy to use interface to work with their social media",
    },
    {
      q: "How can I contact you?",
      a: "You can contact us through the contact forum at the bottom of the page",
    },
    {
      q: "What platforms do we work with",
      a: "Our services are based off of whats allowed on each platform. We offer services on Instagram, facebook, pinerest, twitter and linkedin. Each platform has different services but you can view a full list on the services page. ",
    },
    {
      q: "What is the cost of our services?",
      a: "Our services are offered at different pricing tiers depending on the platform you are working with. View our pricing tiers inside of the pricing page in teh website",
    },
    {
      q: "How do I get started?",
      a: "You can sign up for an account here. Once you have signed up you can start using our services. ",
    },
  ];
  return (
    <>
      <section className={Styles.faq} id="FAQ">
        <ImageBanner>
          <h1>Frequently Asked Questions</h1>
        </ImageBanner>
        <div className={Styles.faqContainer}>
          {FAQ.map((faq, index) => (
            <FaqCard faq={faq} key={index} />
          ))}
        </div>
      </section>
      <section className={Styles.contactContainer}>
        <img src="./images/Mail.svg"></img>
        <form className={Styles.contactForum}>
          <h1>Contact Us</h1>
          <p>
            If you have any questions or concerns please contact us through the
            contact form below.
          </p>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </section>
    </>
  );
}
