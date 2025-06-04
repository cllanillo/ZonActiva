import { debounce, TextField as MuiTextField, type FilledTextFieldProps } from '@mui/material';
import { useField } from 'formik';
import { useMemo } from 'react';

interface FormikTextProps extends Omit<FilledTextFieldProps, 'variant'> {
  name: string;
}

export function FormikText({ name, ...props }: FormikTextProps) {
  const [input, meta, helper] = useField<string>(name);

  const handleChange = useMemo(() => debounce(input.onChange, 250), []);

  return <MuiTextField key={name} name={name} defaultValue={meta.initialValue} {...props} onChange={handleChange} onBlur={input.onBlur} />;
}
