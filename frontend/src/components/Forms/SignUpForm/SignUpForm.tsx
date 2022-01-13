// https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { toast } from 'react-toastify';

import { useLoggerContext } from 'context/LoggerContext';
import { springMedium } from 'components/Animations/framerTransitions';
import { sharedValues } from 'utils/sharedValues';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { Input } from 'components/Input/Input';
import { signUpPOST, yupSignUpSchema } from 'utils/apiQueries/user';

import { WrapperV } from './SignUpForm.motion';
import * as S from './SignUpForm.styles';

interface Props {
  initial: string;
  animate: string;
  resizeFn: () => void; //Used to update modal's height
}

export const SignUpForm = (props: Props) => {
  const { resizeFn, ...rest } = props;
  const hookForm = useForm({ resolver: yupResolver(yupSignUpSchema) });
  const { setError, handleSubmit, formState } = hookForm;
  const { errors, isSubmitting } = formState;
  const { setActiveLoggerMode } = useLoggerContext();

  const onSubmitHandler = React.useCallback(
    async data => {
      try {
        const res = await signUpPOST(data);

        if (res.status !== 200) {
          setError('apiError', { message: 'Something went wrong' });
        } else {
          setActiveLoggerMode('signin');
          toast.success('User registered!');
        }
      } catch (error) {
        //Error message from server
        setError('apiError', { message: 'Something went wrong' });
      }
    },
    [setActiveLoggerMode, setError]
  );

  //It is used only to update modal height
  useEffect(() => {
    resizeFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors?.username, errors?.password, errors?.email, errors?.apiError]);

  return (
    <>
      <S.Wrapper {...rest} variants={WrapperV} transition={springMedium}>
        <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
          {errors.apiError?.message && <S.ApiError>{errors.apiError?.message}</S.ApiError>}

          <Input fieldName="username" hookForm={hookForm} label="Username" inputType="text" />

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

          <S.Center>
            <S.SubmitWrapper isSubmitting={isSubmitting} disabled={isSubmitting} type="submit">
              <BlobButton
                extraSidePadding={true}
                backgroundColor={
                  isSubmitting ? sharedValues.colors.brown : sharedValues.colors.brownDark
                }
                label={'Sign up'}
              />
            </S.SubmitWrapper>
          </S.Center>
        </S.Form>
      </S.Wrapper>
    </>
  );
};
