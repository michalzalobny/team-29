// https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { springMedium } from 'components/Animations/framerTransitions';
import { sharedValues } from 'utils/sharedValues';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { Input } from 'components/Input/Input';
import { postLogin } from 'utils/apiQueries/user';

import { WrapperV } from './SignInForm.motion';
import * as S from './SignInForm.styles';

interface Props {}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

export const SignInForm = (props: Props) => {
  const hookForm = useForm({ resolver: yupResolver(schema) });

  const { setError, handleSubmit, formState } = hookForm;

  const { errors, isSubmitting } = formState;

  const onSubmitHandler = React.useCallback(async (data) => {
    try {
      const res = await postLogin(data);
    } catch (error) {
      //Error message from server
      setError('apiError', { message: 'Something went wrong' });
    }
  }, []);

  return (
    <>
      <S.Wrapper variants={WrapperV} transition={springMedium}>
        <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
          <S.InputsContainer>
            {errors.apiError?.message && (
              <S.ApiError>{errors.apiError?.message}</S.ApiError>
            )}

            <Input
              inputAutoComplete="email"
              fieldName="email"
              hookForm={hookForm}
              label="Email"
              inputType="email"
            />

            <Input
              inputAutoComplete="current-password"
              fieldName="password"
              hookForm={hookForm}
              label="Password"
              inputType="password"
            />
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
