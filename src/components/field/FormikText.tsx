import MuiTextField, { type FilledTextFieldProps } from '@mui/material/TextField';
import { useField } from 'formik';

interface TextFieldProps extends Omit<FilledTextFieldProps, 'variant'> {
  name: string;
}

export function TextField({ name, ...props }: TextFieldProps) {
  const [input, meta, helper] = useField<string>(name);

  return <MuiTextField key={name} defaultValue={meta.initialValue} {...props} onChange={input.onChange} onBlur={input.onBlur} />;
}
