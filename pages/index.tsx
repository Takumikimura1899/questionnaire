import Head from 'next/head';
import Image from 'next/image';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { register } = useForm();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submitted!');
  };

  return (
    <>
      <h1>プログラミングに関するアンケート</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Q1. 名前を入力してください。</label>
          <input id="name" />
          <input id="name" {...register('name')} />
        </div>
        <input type="submit" value="アンケートを提出する" />
      </form>
    </>
  );
}
