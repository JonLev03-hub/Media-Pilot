import Styles from "./IconBar.module.css";
export default function IconBar(props) {
  if (!props.supportedBy) {
    var supportedBy = [
      "Facebook",
      "Twitter",
      "Instagram",
      "linkedin",
      "pintrest",
    ];
  } else {
    var supportedBy = props.supportedBy;
  }
  return (
    <div className={Styles.container}>
      <p>Supported by: </p>
      <ul className={Styles.list}>
        {supportedBy.map((item) => {
          return (
            <li>
              <img alt={item} key={item} src={`./icons/${item}.png`}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
