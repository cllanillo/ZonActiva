import MuiTextField, { type FilledTextFieldProps } from '@mui/material/TextField';
import { DateRangePicker, DateRangePickerProps } from '@mui/x-date-pickers-pro/DateRangePicker';
import type { Dayjs } from 'dayjs';
import { useField } from 'formik';
import { useCallback, useEffect, useMemo } from 'react';
import { object } from 'zod';

interface FormikDateRangeProps extends Omit<DateRangePickerProps, 'onChange'> {
  name: string;
}

export function FormikDateRange({ name, ...props }: FormikDateRangeProps) {
  const [input, meta, helper] = useField<DateRangePickerProps['defaultValue']>(name);
  const slotProps = useMemo(() => {
    const aux = { field: { onBlur: input.onBlur } };

    if (!props.slotProps) return aux;
    else if (typeof props.slotProps.field !== 'object') props.slotProps.field = aux.field;
    else props.slotProps.field.onBlur = aux.field.onBlur;

    return { ...props.slotProps };
  }, [props.slotProps, input.onBlur]);

  const handleChange: DateRangePickerProps['onChange'] = useCallback(
    (value) => {
      helper.setValue(value);
    },
    [helper.setValue],
  );

  return <DateRangePicker key={name} name={name} defaultValue={meta.initialValue} {...props} onChange={handleChange} slotProps={slotProps} />;
}
