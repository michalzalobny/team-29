// https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { toast } from 'react-toastify';

import { useAuthContext } from 'context/AuthContext';
import { sharedValues } from 'utils/sharedValues';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { Input } from 'components/Input/Input';
import { SelectInput } from 'components/Input/SelectInput';
import {
  addAnimalPOST,
  yupAddAnimalSchema,
  animalsCategories,
  animalsCategoriesNormal,
} from 'utils/apiQueries/animal';

import * as S from './AddAnimalForm.styles';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  refetchAnimals: () => void;
}

export const AddAnimalForm = (props: Props) => {
  const { refetchAnimals, setShowModal } = props;
  const hookForm = useForm({ resolver: yupResolver(yupAddAnimalSchema) });
  const { setError, handleSubmit, formState } = hookForm;
  const { errors, isSubmitting } = formState;
  const { user } = useAuthContext();

  const onSubmitHandler = React.useCallback(
    async data => {
      try {
        const res = await addAnimalPOST(data, user.accessToken);

        if (res.status !== 200) {
          setError('apiError', { message: 'Something went wrong' });
        } else {
          toast.success('New animal has been added!');
          setShowModal(false);
          refetchAnimals();
        }
      } catch (error) {
        //Error message from server
        setError('apiError', { message: 'Something went wrong' });
      }
    },
    [refetchAnimals, setError, setShowModal]
  );

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        {errors.apiError?.message && <S.ApiError>{errors.apiError?.message}</S.ApiError>}

        <Input fieldName="name" hookForm={hookForm} label="Name" inputType="text" />

        <Input
          fieldName="scientific_name"
          hookForm={hookForm}
          label="Scientific name"
          inputType="text"
        />

        <Input
          fieldName="description"
          hookForm={hookForm}
          label="Description"
          inputType="textarea"
        />

        <SelectInput
          fieldName="category"
          options={[
            {
              value: animalsCategories.LEAST_CONCERN,
              label: animalsCategoriesNormal.LEAST_CONCERN,
            },
            {
              value: animalsCategories.NEAR_THREATENED,
              label: animalsCategoriesNormal.NEAR_THREATENED,
            },
            {
              value: animalsCategories.VULNERABLE,
              label: animalsCategoriesNormal.VULNERABLE,
            },
            {
              value: animalsCategories.ENDANGERED,
              label: animalsCategoriesNormal.ENDANGERED,
            },
            {
              value: animalsCategories.CRITICALLY_ENDANGERED,
              label: animalsCategoriesNormal.CRITICALLY_ENDANGERED,
            },
            {
              value: animalsCategories.EXTINCT_IN_WILD,
              label: animalsCategoriesNormal.EXTINCT_IN_WILD,
            },
            {
              value: animalsCategories.EXTINCT,
              label: animalsCategoriesNormal.EXTINCT,
            },
          ]}
          hookForm={hookForm}
          label="category"
        />

        <Input fieldName="population" hookForm={hookForm} label="Population" inputType="number" />

        <S.Center>
          <S.SubmitWrapper isSubmitting={isSubmitting} disabled={isSubmitting} type="submit">
            <BlobButton
              extraSidePadding={true}
              backgroundColor={
                isSubmitting ? sharedValues.colors.lightBlueDark : sharedValues.colors.lightBlue
              }
              label={'Add animal'}
            />
          </S.SubmitWrapper>
        </S.Center>
      </S.Form>
    </>
  );
};
