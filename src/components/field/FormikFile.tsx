import { type ChangeEvent, useCallback, useEffect } from 'react';
import type { FormikInputProps } from './FormikInputTypes';
import ButtonBase from '@mui/material/ButtonBase';
import { useField } from 'formik';

export function FormikFile({ name }: FormikInputProps) {
  const [input, meta, helper] = useField<File>(name);

  const handleChange = useCallback(
    (event: DragEvent | ChangeEvent<HTMLInputElement>) => {
      const selectFiles = Array.from((event instanceof DragEvent ? event.dataTransfer : event.currentTarget)?.files ?? []);
      if (!selectFiles?.[0]) return;

      helper.setValue(selectFiles[0]);
    },
    [helper.setValue],
  );
  useEffect(() => {
    // const handleDrop = (event: DragEvent) => {
    //   event.preventDefault();
    //   event.dataTransfer && event.type === 'drop' && handleChange(event);
    // };

    window.addEventListener('drop', handleChange);
    // window.addEventListener('dragover', handleDrop);
    return () => {
      window.removeEventListener('drop', handleChange);
    //   window.removeEventListener('dragover', handleDrop);
    };
  }, []);

  return (
    <ButtonBase focusRipple sx={{ border: 1, borderStyle: 'dashed', flexGrow: 1 }}>
      <input
        name={name}
        type="file"
        accept="image/*"
        onDragEnter={(event) => {
          event.currentTarget.parentElement!.classList.add(FormikFile.draggingOverClass);
        }}
        onDragLeave={(event) => {
          event.currentTarget.parentElement!.classList.remove(FormikFile.draggingOverClass);
        }}
        onChange={handleChange}
        sx={{ opacity: 0, position: 'absolute', inset: 0 }}
      />
    </ButtonBase>
  );
}
FormikFile.draggingOverClass = 'dragOver';
