import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'utils/axiosInstance';
import * as S from './SignInForm.styles';

interface Props {}

interface FormData {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

export const SignInForm = (props: Props) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: 'Leigh',
      email: 'email@email.com',
      password: 'P@ssw0rd!',
      terms: true,
    },
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Array<string>>([]);

  const onSubmit = React.useCallback(async (formData) => {
    if (submitting) return;

    setSubmitting(true);
    setServerErrors([]);

    try {
      const res = await axios.post('/users/auth/local', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        terms: formData.terms,
      });
    } catch (error) {
      console.log(error);
      setServerErrors([]);
    }

    setSubmitting(false);
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Form>
          {serverErrors && (
            <ul>
              {serverErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}

          <S.InputWrapper>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input type="email" id="email" {...register('email')} />
          </S.InputWrapper>
        </S.Form>
      </S.Wrapper>
    </>
  );
};
