import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import UserInput from '../Components/UserInput';

export default function Home() {
  return (
    <div>
      <h1>Hello World!!!</h1>
      <UserInput />
    </div>
  )
};
