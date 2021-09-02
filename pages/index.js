import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!');
  };

  return (
    <>
      <h1>プログラミングに関するアンケート</h1>
      <form onSubmit={onSubmit}>
        <input type="submit" value="アンケートを提出する" />
      </form>
    </>
  );
}
