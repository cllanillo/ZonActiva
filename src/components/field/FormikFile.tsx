import { useEffect } from 'react';
import type { FormikInputProps } from './FormikInputTypes';
import ButtonBase from '@mui/material/ButtonBase';
import { useField } from 'formik';

export function FormikFile({ name }: FormikInputProps) {
  const [input, meta, helper] = useField<File>(name);
  useEffect(() => {
    if (true) return;

    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      event.dataTransfer && event.type === 'drop' && input.onChange({ dataTransfer: event.dataTransfer });
    };

    window.addEventListener('drop', handleDrop);
    window.addEventListener('dragover', handleDrop);
    return () => {
      window.removeEventListener('drop', handleDrop);
      window.removeEventListener('dragover', handleDrop);
    };
  }, []);

  return (
    <ButtonBase focusRipple>
      <input
        value=""
        type="file"
        multiple
        onDragEnter={(event) => {
          event.currentTarget.parentElement!.classList.add(FormikFile.draggingOverClass);
        }}
        onDragLeave={(event) => {
          event.currentTarget.parentElement!.classList.remove(FormikFile.draggingOverClass);
        }}
        onChange={(event) => {
          console.log('🚀 ~ FormikFile ~ event:', event.target.value);

          input.onChange(event);
        }}
      />
    </ButtonBase>
  );
}
FormikFile.draggingOverClass = 'dragOver';
