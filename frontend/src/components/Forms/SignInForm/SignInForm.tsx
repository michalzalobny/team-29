// https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { useLoggerContext } from 'context/LoggerContext';
import { springMedium } from 'components/Animations/framerTransitions';
import { sharedValues } from 'utils/sharedValues';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { Input } from 'components/Input/Input';
import { signInPOST, yupSignInSchema } from 'utils/apiQueries/user';
import { useAuthContext } from 'context/AuthContext';

import { WrapperV } from './SignInForm.motion';
import * as S from './SignInForm.styles';

interface Props {
  initial: string;
  animate: string;
  resizeFn: () => void; //Used to update modal's height
}

export const SignInForm = (props: Props) => {
  const { resizeFn, ...rest } = props;
  const hookForm = useForm({ resolver: yupResolver(yupSignInSchema) });
  const { setError, handleSubmit, formState } = hookForm;
  const { errors, isSubmitting } = formState;
  const { setIsLoggerOpen } = useLoggerContext();
  const { serializeUser } = useAuthContext();

  const onSubmitHandler = React.useCallback(
    async data => {
      try {
        const res = await signInPOST(data);

        if (res.status !== 200) {
          setError('apiError', { message: 'Something went wrong' });
        } else {
          setIsLoggerOpen(false);
          serializeUser(res.data.access_token);
        }
      } catch (error) {
        //Error message from server
        setError('apiError', { message: 'Incorrect username or password' });
      }
    },
    [serializeUser, setError, setIsLoggerOpen]
  );

  //It is used only to update modal height
  useEffect(() => {
    resizeFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors?.password, errors?.username, errors?.apiError]);

  return (
    <>
      <S.Wrapper {...rest} variants={WrapperV} transition={springMedium}>
        <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
          {errors.apiError?.message && <S.ApiError>{errors.apiError?.message}</S.ApiError>}

          <Input
            customId="usernamelogin"
            fieldName="username"
            hookForm={hookForm}
            label="Username"
          />

          <Input
            customId="usernamepassword"
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
                label={'Sign in'}
              />
            </S.SubmitWrapper>
          </S.Center>
        </S.Form>
      </S.Wrapper>
    </>
  );
};
