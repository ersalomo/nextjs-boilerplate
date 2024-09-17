/* eslint-disable react-hooks/rules-of-hooks */
import { ChangeEvent, useState } from 'react';

export const useForm = <T>(dataForm: T) => {
  const [form, useForm] = useState<T>(dataForm);

  const onChangeValue = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    console.log(name, value);
    useForm((prev: T) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const resetForm = () => useForm(dataForm);

  return {
    form,
    onChangeValue,
    resetForm,
  };
};
