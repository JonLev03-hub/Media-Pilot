import Styles from "./DropDown.module.css";
export default function DropDown(props) {
  const list = props.children[1].props.children;
  return (
    <div className={Styles.container}>
      {props.children[0]}
      {/* <div className={Styles.arrowDown} /> */}
      <ul className={Styles.dropDown}>{list}</ul>
    </div>
  );
}
