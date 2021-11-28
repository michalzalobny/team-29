import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { springMedium } from 'components/Animations/framerTransitions';
import { useInput } from 'hooks/useInput';
import { sharedValues } from 'utils/sharedValues';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import axios from 'utils/axiosInstance';

import { WrapperV } from './SignInForm.motion';
import * as S from './SignInForm.styles';

interface Props {}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const SignInForm = (props: Props) => {
  const { watch, register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    onFocus: onFocusEmail,
    isFocused: isFocusedEmail,
    onBlur: onBlurEmail,
  } = useInput({
    watch,
    fieldName: 'email',
  });

  const {
    onFocus: onFocusPassword,
    isFocused: isFocusedPassword,
    onBlur: onBlurPassword,
  } = useInput({
    watch,
    fieldName: 'password',
  });

  const [serverErrors, setServerErrors] = useState([]);

  const { errors, isSubmitting } = formState;

  const onSubmitHandler = React.useCallback(async (data) => {
    setServerErrors([]);

    try {
      const res = await axios.post('/users/auth/local', {
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
      setServerErrors([]);
    }

    reset();
  }, []);

  return (
    <>
      <S.Wrapper variants={WrapperV} transition={springMedium}>
        <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
          {serverErrors && (
            <ul>
              {serverErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <S.InputsContainer>
            <S.InputContainer>
              <S.InputWrapper>
                <S.Label isFocused={isFocusedEmail} htmlFor="email">
                  Email
                </S.Label>
                <S.Input
                  isError={errors.email}
                  {...register('email', { onBlur: onBlurEmail })}
                  id="email"
                  type="email"
                  onFocus={onFocusEmail}
                />
              </S.InputWrapper>
              {errors.email?.message && (
                <S.InputError>{errors.email?.message}</S.InputError>
              )}
            </S.InputContainer>

            <S.InputContainer>
              <S.InputWrapper>
                <S.Label isFocused={isFocusedPassword} htmlFor="password">
                  Password
                </S.Label>
                <S.Input
                  isError={errors.password}
                  type="password"
                  id="password"
                  onFocus={onFocusPassword}
                  {...register('password', { onBlur: onBlurPassword })}
                />
              </S.InputWrapper>
              {errors.password?.message && (
                <S.InputError>{errors.password?.message}</S.InputError>
              )}
            </S.InputContainer>
          </S.InputsContainer>

          <S.Center>
            <S.SubmitWrapper disabled={isSubmitting} type="submit">
              <BlobButton
                extraSidePadding={true}
                backgroundColor={sharedValues.colors.brownDark}
                label="Sign in"
              />
            </S.SubmitWrapper>
          </S.Center>
        </S.Form>
      </S.Wrapper>
    </>
  );
};
