import {
  Container,
  Input,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  FormHelperText,
  TextField,
} from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from 'react-hook-form';
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
      <Container maxWidth='lg'>
        <h1>プログラミングに関するアンケート</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <FormControl>
                <FormLabel htmlFor='name'>
                  Q1. 名前を入力してください。
                </FormLabel>
                {errors.name ? (
                  <TextField
                    error
                    id='name'
                    type='text'
                    label='例:田中 太郎'
                    onChange={onChange}
                    value={value}
                    helperText='Incorrect entry.'
                  />
                ) : (
                  <TextField
                    id='name'
                    type='text'
                    label='例:田中 太郎'
                    onChange={onChange}
                    value={value}
                  />
                )}
              </FormControl>
            )}
          />

          <div>
            <Controller
              name='birth'
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FormControl>
                  <FormLabel htmlFor='birth'>
                    Q2. 生年月日を入力してください。
                  </FormLabel>
                  {errors.birth ? (
                    <TextField
                      error
                      type='number'
                      id='birth'
                      label='例:19990106(8桁の数字)'
                      onChange={onChange}
                      value={value}
                      helperText='Incorrect entry.'
                    />
                  ) : (
                    <TextField
                      type='number'
                      id='birth'
                      label='例:19990106(8桁の数字)'
                      onChange={onChange}
                      value={value}
                    />
                  )}
                </FormControl>
              )}
            />
          </div>

          <div>
            <Controller
              name='isLearning'
              control={control}
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FormControl component='fieldset'>
                  <FormLabel component='legend'>
                    Q3. 現在プログラミングを学習していますか？
                    {errors.isLearning && <p>このフィールドは回答必須です。</p>}
                  </FormLabel>
                  <RadioGroup
                    aria-label='isLearning'
                    value={value}
                    onChange={onChange}
                  >
                    <FormControlLabel
                      value='true'
                      control={<Radio />}
                      label='はい'
                    />
                    <FormControlLabel
                      value='false'
                      control={<Radio />}
                      label='いいえ'
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>

          <div>
            <Controller
              name='wasLearning'
              control={control}
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FormControl component='fieldset'>
                  <FormLabel component='legend'>
                    Q4. これまでにプログラミングを学習したことがありますか?
                    {errors.wasLearning && (
                      <p>このフィールドは回答必須です。</p>
                    )}
                  </FormLabel>
                  <RadioGroup
                    aria-label='wasLearning'
                    value={value}
                    onChange={onChange}
                  >
                    <FormControlLabel
                      value='true'
                      control={<Radio />}
                      label='はい'
                    />
                    <FormControlLabel
                      value='false'
                      control={<Radio />}
                      label='いいえ'
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>

          {(watch('isLearning') === 'true' ||
            watch('wasLearning') === 'true') && (
            <div>
              <Controller
                name='language'
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <FormControl component='fieldset'>
                    <FormLabel htmlFor='language'>
                      Q5. (Q3 または Q4ではいと答えた方へ)
                      <br />
                      これまでに学んだことのある言語を入力してください。
                      {errors.language && <p>このフィールドは回答必須です。</p>}
                    </FormLabel>
                    <TextField
                      id='language'
                      label='これまでに学んだ事のある言語'
                      onChange={onChange}
                      value={value}
                    />
                  </FormControl>
                )}
              />
            </div>
          )}

          <Input type='submit' value='アンケートを提出する' />
        </form>
      </Container>
    </>
  );
}
