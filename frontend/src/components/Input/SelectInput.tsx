import React from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';

import * as S from './Input.styles';

interface Props {
  label: string;
  fieldName: string;
  customId?: string;
  hookForm: UseFormReturn<FieldValues, object>;
  options: Option[];
}

interface Option {
  label: string;
  value: string;
}

export const SelectInput = (props: Props) => {
  const { options, customId = '', label, fieldName, hookForm } = props;
  const { register, formState } = hookForm;
  const { errors } = formState;

  return (
    <>
      <S.Wrapper>
        <S.InputWrapper>
          <S.Label isFocused={true} htmlFor={fieldName}>
            {label}
          </S.Label>

          <S.Select id={fieldName + customId} {...register(fieldName)}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.Select>
        </S.InputWrapper>
        {errors[fieldName]?.message && <S.InputError>{errors[fieldName]?.message}</S.InputError>}
      </S.Wrapper>
    </>
  );
};
