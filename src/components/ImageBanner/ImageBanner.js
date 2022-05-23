import Styles from "./ImageBanner.module.css";
export default function ImageBanner(props) {
  return <div className={Styles.ImgBanner}>{props.children}</div>;
}
