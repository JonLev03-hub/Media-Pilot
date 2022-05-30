import Styles from "./Pricing.module.css";
import { Link } from "react-router-dom";
export default function Pricing() {
  const tableData = [
    ["", "Beginner", "Online Novice", "Web Pro"],
    ["Price", "$15", "$35", "$70"],
    ["Accounts per platform", "1", "3", "5"],
    ["Users", "1", "4", "Unlimited"],
    ["Posts Per Month", "50", "150", "Unlimited"],
    ["Post Scheduling", "Yes", "Yes", "Yes"],
    ["Auto Repost", "No", "Yes", "Yes"],
    ["Post Analytics", "No", "Basic", "Advanced"],
    ["Ad Management", "No", "No", "Yes"],
  ];
  return (
    <div className={Styles.container}>
      <section className={Styles.header}>
        <h1>Simple Transparent Pricing</h1>
        <p>
          All packages come with a free one month trial so you can try out our
          services worry free
        </p>
      </section>
      <section className={Styles.pricing}>
        <div className={Styles.card}>
          <h1>Beginner</h1>
          <p>
            For individuals or businesses that want to start getting better
            enguagement.
          </p>
          <h2>
            <sup>$</sup>15<sub>/Mo</sub>
          </h2>
          <p className={Styles.miniText}>Billed Monthly</p>
          <h3>Includes :</h3>
          <ul>
            <li>1 Account per platform</li>
            <li>1 User</li>
            <li>Post Scheduling</li>
            <li>50 posts per month</li>
          </ul>
          <Link to="/pricing">Start Free Trial</Link>
        </div>
        <div className={Styles.card}>
          <h1>Online Novice</h1>
          <p>
            For small businesses that Want to grow their online presence to
            drive sales and build a following online.
          </p>
          <h2>
            <sup>$</sup>35<sub>/Mo</sub>
          </h2>
          <p className={Styles.miniText}>Billed Monthly</p>
          <h3>Includes :</h3>
          <ul>
            <li>3 Account per platform</li>
            <li>4 Users</li>
            <li>Auto Reposting</li>
            <li>Basic Post Analysis</li>
            <li>150 posts per month</li>
          </ul>
          <Link to="/pricing">Start Free Trial</Link>
        </div>
        <div className={Styles.card}>
          <h1>Web Pro</h1>
          <p>
            For any business that wants to maximize the reach of their online
            enguagement and grow their business to its full potential.
          </p>
          <h2>
            <sup>$</sup>70<sub>/Mo</sub>
          </h2>
          <p className={Styles.miniText}>Billed Monthly</p>
          <h3>Includes :</h3>
          <ul>
            <li>5 Account per platform</li>
            <li>Unlimited Users</li>
            <li>Ad Management</li>
            <li>Advanced Post Analysis</li>
            <li>Unlimited posts per month</li>
          </ul>
          <Link to="/pricing">Start Free Trial</Link>
        </div>
      </section>
      <div className={Styles.microText}>
        <p>
          If you have any questions check out our{" "}
          <Link to="/resources">frequently Asked Questions</Link>
        </p>
      </div>
      <section className={Styles.features}>
        <h1>Features</h1>
        <table className={Styles.table}>
          <thead>
            {tableData[0].map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </thead>
          <tbody>
            {tableData.slice(1).map((row, index) => (
              <tr key={index}>
                {row.map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
