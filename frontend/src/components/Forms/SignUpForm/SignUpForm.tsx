// https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { springMedium } from 'components/Animations/framerTransitions';
import { sharedValues } from 'utils/sharedValues';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { Input } from 'components/Input/Input';
import { SignUpPOST, yupSignUpSchema } from 'utils/apiQueries/user';

import { WrapperV } from './SignUpForm.motion';
import * as S from './SignUpForm.styles';

interface Props {}

export const SignUpForm = (props: Props) => {
  const hookForm = useForm({ resolver: yupResolver(yupSignUpSchema) });

  const { setError, handleSubmit, formState } = hookForm;

  const { errors, isSubmitting } = formState;

  const onSubmitHandler = React.useCallback(async (data) => {
    try {
      const res = await SignUpPOST(data);
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
              fieldName="name"
              hookForm={hookForm}
              label="Name"
              inputType="text"
            />

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
                label="Sign up"
              />
            </S.SubmitWrapper>
          </S.Center>
        </S.Form>
      </S.Wrapper>
    </>
  );
};
