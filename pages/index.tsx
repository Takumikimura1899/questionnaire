import Head from 'next/head';
import Image from 'next/image';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FormEvent) => {
    console.log(data);
  };

  return (
    <>
      <h1>プログラミングに関するアンケート</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='name'>Q1. 名前を入力してください。</label>
          <input id='name' {...register('name', { required: true })} />
          {errors.name && <span>このフィールドは回答必須です。</span>}
        </div>

        <div>
          <label htmlFor='birth'>Q2. 生年月日を入力してください。</label>
          <input
            id='birth'
            {...register('birth', { required: true, pattern: /^[0-9]{8}$/ })}
          />
          {errors.birth && <span>このフィールドは回答必須です。</span>}
        </div>

        <div>
          <span>Q3. 現在プログラミングを学習していますか？</span>
          <input
            id='isLearning1'
            {...register('isLearning', { required: true })}
            name='isLearning'
            type='radio'
            value='true'
          />
          <label htmlFor='isLeaning1'>はい</label>
          <input
            id='isLearning2'
            {...register('isLearning', { required: true })}
            name='isLearning'
            type='radio'
            value='false'
          />
          <label htmlFor='isLeaning2'>いいえ</label>
          {errors.isLearning && <span>このフィールドは回答必須です。</span>}
        </div>

        <div>
          <span>Q4. これまでにプログラミングを学習したことがありますか?</span>
          <input
            id='wasLearning1'
            {...register('wasLearning', { required: true })}
            name='wasLearning'
            type='radio'
            value='true'
          />
          <label htmlFor='wasLeaning1'>はい</label>
          <input
            id='wasLearning2'
            {...register('wasLearning', { required: true })}
            name='wasLearning'
            type='radio'
            value='false'
          />
          <label htmlFor='wasLeaning2'>いいえ</label>
          {errors.wasLearning && <span>このフィールドは回答必須です。</span>}
        </div>

        <input type='submit' value='アンケートを提出する' />
      </form>
    </>
  );
}
