import {
  Container,
  Input,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import styles from '../styles/Home.module.css';

interface IFormInputs {
  name: string;
  birth: number | null | '';
  isLearning: string;
  wasLearning: string;
  language: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm<IFormInputs>({
    defaultValues: {
      name: '',
      birth: '',
      isLearning: '',
      wasLearning: '',
      language: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Container>
        <h1>プログラミングに関するアンケート</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='name'>Q1. 名前を入力してください。</label>
            <Controller
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input onChange={onChange} value={value} />
              )}
            />
            {errors.name && <span>このフィールドは回答必須です。</span>}
          </div>

          <div>
            <label htmlFor='birth'>Q2. 生年月日を入力してください。</label>
            <Controller
              name='birth'
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { onChange, value } }) => (
                <Input type='number' onChange={onChange} value={value} />
              )}
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

          {(watch('isLearning') === 'true' ||
            watch('wasLearning') === 'true') && (
            <div>
              <label htmlFor='language'>
                Q5 *Q3・Q4ではいと答えた方へ
                これまでに学んだことのある言語を入力してください。
              </label>
              <Controller
                name='language'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input onChange={onChange} value={value} />
                )}
              />
              {errors.birth && <span>このフィールドは回答必須です。</span>}
            </div>
          )}

          <input type='submit' value='アンケートを提出する' />
        </form>
      </Container>
    </>
  );
}
