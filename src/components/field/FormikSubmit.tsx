import Button, { ButtonProps } from '@mui/material/Button';
import { useFormikContext } from 'formik';
import { useCallback, useRef } from 'react';

interface SubmitProps {
  sx?: ButtonProps['sx'];
}

export function Submit({ sx }: SubmitProps) {
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
