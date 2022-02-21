import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UserInput from "../component/UserInput";
import Feed from "../component/Feed";

export default function Dashboard() {
  return (
    <div>
      <h1>Hello World!!!</h1>
      <UserInput />
      <Feed />
    </div>
  );
}
