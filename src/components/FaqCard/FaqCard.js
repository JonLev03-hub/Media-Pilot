import Styles from "./FaqCard.module.css";
export default function FaqCard(props) {
  const { faq } = props;
  return (
    <div className={Styles.faqCard}>
      <div className={Styles.faqCardQuestion} tabindex="0">
        <p>{faq.q}</p>
      </div>
      <div className={Styles.faqCardAnswer}>
        <p>{faq.a}</p>
      </div>
    </div>
  );
}
