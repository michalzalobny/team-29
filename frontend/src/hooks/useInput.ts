import { useState, useCallback } from 'react';
import { UseFormWatch, FieldValues } from 'react-hook-form';

interface UseInput {
  watch: UseFormWatch<FieldValues>;
  fieldName: string;
}

export const useInput = ({ watch, fieldName }: UseInput) => {
  const watchField = watch(fieldName);

  const [isFocused, setIsFocused] = useState(false);

  const onBlur = useCallback(() => {
    if (watchField === '') {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  }, [watchField]);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return {
    isFocused,
    onBlur,
    onFocus,
  };
};
