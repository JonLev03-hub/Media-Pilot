import Styles from "./IconBar.module.css";
export default function IconBar() {
  return (
    <div className={Styles.container}>
      <p>We Support: </p>
      <ul className={Styles.list}>
        <li>
          <img src="./icons/instagram.png"></img>
        </li>
        <li>
          <img src="./icons/facebook.png"></img>
        </li>
        <li>
          <img src="./icons/pintrest.png"></img>
        </li>
        <li>
          <img src="./icons/twitter.png"></img>
        </li>
        <li>
          <img src="./icons/linkedin.png"></img>
        </li>
      </ul>
    </div>
  );
}
