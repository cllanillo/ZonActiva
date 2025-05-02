import MuiTextField, { type FilledTextFieldProps } from '@mui/material/TextField';
import { useField } from 'formik';

interface FormikTextProps extends Omit<FilledTextFieldProps, 'variant'> {
  name: string;
}

export function FormikText({ name, ...props }: FormikTextProps) {
  const [input, meta, helper] = useField<string>(name);

  return <MuiTextField key={name} name={name} defaultValue={meta.initialValue} {...props} onChange={input.onChange} onBlur={input.onBlur} />;
}
