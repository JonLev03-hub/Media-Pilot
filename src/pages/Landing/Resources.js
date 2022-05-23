import Styles from "./Resources.module.css";
import FaqCard from "../../components/FaqCard/FaqCard";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
export default function Resources() {
  const FAQ = [
    {
      q: "What is the purpose of this website?",
      a: "We provide services to manage media platofrms",
    },
    {
      q: "How can I contact you?",
      a: "You can contact us through the contact forum below",
    },
    {
      q: "What platforms do we work with",
      a: "Our services are based off of whats allowed on each platform. We offer services on Instagram, facebook, pinerest, twitter and linkedin. Each platform has different services but you can view a list of our services here. ",
    },
    {
      q: "What is the cost of our services?",
      a: "Our services are offered at different pricing tiers depending on the platform you are working with. You can view the pricing tiers here. ",
    },
  ];
  return (
    <>
      <div className={Styles.faq} id="FAQ">
        <ImageBanner>
          <h1>Frequently Asked Questions</h1>
        </ImageBanner>
        <div className={Styles.faqContainer}>
          {FAQ.map((faq, index) => (
            <FaqCard faq={faq} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
