import type { JSX } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Field } from 'ui';

import { formSchema, INITIAL_VALUES, INPUT_NAME, LABEL_EMAIL, LABEL_PASSWORD } from './constants';

type FormSchemaType = z.infer<typeof formSchema>;

interface IForm {
  onSubmit: SubmitHandler<FormSchemaType>;
}

function UserNewForm({ onSubmit }: IForm): JSX.Element {
  const { t } = useTranslation();
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    control,
    watch
  } = useForm<FormSchemaType>({
    defaultValues: useMemo(
      () => ({
        ...INITIAL_VALUES,
      }),
      [],
    ),
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="pt-[50px]">
      <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
        <Field
          className="_:mb-4"
          label={t('field.email')}
          name={INPUT_NAME.EMAIL}
          type="email"
          {...{ errors, register, control, watch }}
        />
        <Field
          className="_:mb-4"
          label={t('field.password')}
          name={INPUT_NAME.PASSWORD}
          type="password"
          {...{ errors, register, control, watch }}
        />
        <Button
          className="_:bg-white _:font-normal _:text-black w-full"
          disabled={!isValid}
          type="submit"
          variant="primary">
          {t('form.save')}
        </Button>
      </form>
    </div>
  );
}

export default UserNewForm;
