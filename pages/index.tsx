import Head from 'next/head';
import Image from 'next/image';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FormEvent) => {
    console.log(data);
  };

  return (
    <>
      <h1>プログラミングに関するアンケート</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='name'>Q1. 名前を入力してください。</label>
          <input id='name' />
          <input id='name' {...register('name')} />
        </div>

        <div>
          <label htmlFor='birth'>Q2. 生年月日を入力してください。</label>
          <input id='birth' />
          <input id='birth' {...register('birth')} />
        </div>

        <div>
          <span>Q3. 現在プログラミングを学習していますか？</span>
          <input
            id='isLearning1'
            {...register('isLearning')}
            name='isLearning'
            type='radio'
          />
          <label htmlFor='isLeaning1'>はい</label>
          <input
            id='isLearning2'
            {...register('isLearning')}
            name='isLearning'
            type='radio'
          />
          <label htmlFor='isLeaning2'>いいえ</label>
          <input
            id='isLearning1'
            {...register('isLearning')}
            name='isLearning'
            type='radio'
          />
          <label htmlFor='isLeaning1'>はい</label>
          <input
            id='isLearning2'
            {...register('isLearning')}
            name='isLearning'
            type='radio'
          />
          <label htmlFor='isLeaning2'>いいえ</label>
        </div>

        <input type='submit' value='アンケートを提出する' />
      </form>
    </>
  );
}
