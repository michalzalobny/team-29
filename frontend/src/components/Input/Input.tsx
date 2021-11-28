import React from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';

import { useInput } from 'hooks/useInput';

import * as S from './Input.styles';

interface Props {
  label: string;
  fieldName: string;
  inputType?: 'text' | 'password' | 'email';
  hookForm: UseFormReturn<FieldValues, object>;
  inputAutoComplete?:
    | 'current-password'
    | 'new-password'
    | 'cc-number'
    | 'email';
}

export const Input = (props: Props) => {
  const {
    inputAutoComplete,
    label,
    fieldName,
    hookForm,
    inputType = 'text',
  } = props;

  const { watch, register, formState } = hookForm;

  const { errors } = formState;

  const { onFocus, isFocused, onBlur } = useInput({
    watch,
    fieldName,
  });

  return (
    <>
      <S.Wrapper>
        <S.InputWrapper>
          <S.Label isFocused={isFocused} htmlFor={fieldName}>
            {label}
          </S.Label>
          <S.Input
            autoComplete={inputAutoComplete && inputAutoComplete}
            isError={errors[fieldName]}
            {...register(fieldName, { onBlur })}
            id={fieldName}
            type={inputType}
            onFocus={onFocus}
          />
        </S.InputWrapper>
        {errors[fieldName]?.message && (
          <S.InputError>{errors[fieldName]?.message}</S.InputError>
        )}
      </S.Wrapper>
    </>
  );
};
