import { Button, type ButtonProps } from '@mui/material';
import { useFormikContext } from 'formik';
import { useCallback, useRef } from 'react';

interface SubmitProps {
  sx?: ButtonProps['sx'];
}

export function FormikSubmit({ sx }: SubmitProps) {
  const formik = useFormikContext();
  const submitRef = useRef(formik.handleSubmit);

  const handleSubmit = useCallback(() => {
    submitRef.current();
  }, []);

  return (
    <Button onClick={handleSubmit} sx={sx}>
      Save
    </Button>
  );
}
