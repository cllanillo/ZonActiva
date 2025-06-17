import ClearIcon from '@mui/icons-material/Clear';
import { ButtonBase, IconButton } from '@mui/material';
import { useField } from 'formik';
import { type ChangeEvent, useCallback, useEffect } from 'react';
import type { FormikInputProps } from './FormikInputTypes';
import { getB64 } from '~/api/getB64';

export function FormikFile({ name, sx = null }: FormikInputProps) {
  const [input, , helper] = useField<string | null | undefined>(name);

  const handleChange = useCallback(
    (event: DragEvent | ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const selectFiles = Array.from((event instanceof DragEvent ? event.dataTransfer : event.currentTarget)?.files ?? []);
      if (!selectFiles?.[0]) return;

      getB64(selectFiles[0]).then((b64) => helper.setValue(b64 as string));
    },
    [helper.setValue],
  );
  // useEffect(() => {
  //   window.addEventListener('drop', handleChange);
  //   return () => {
  //     window.removeEventListener('drop', handleChange);
  //   };
  // }, [handleChange]);

  return (
    <ButtonBase
      focusRipple
      sx={[
        {
          boxShadow: 'inset 0 0 20px rgb(0,0,0)',
          borderRadius: 1,
          flexGrow: 1,
          overflow: 'hidden',
          '&>img': { p: 0.5, borderRadius: 1, maxWidth: '55vw', maxHeight: '25svh' },
        },
        !!input.value && { maxWidth: 'fit-content', maxHeight: 'fit-content' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
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
      {input.value && <img src={input.value} />}

      {input.value && (
        <IconButton
          sx={(theme) => ({ position: 'absolute', bottom: 0, right: 0, bgcolor: 'background.paperGlass', '--IconButton-hoverBg': theme.palette.background.paperGlass })}
          onMouseDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            helper.setValue(undefined);
          }}
        >
          <ClearIcon />
        </IconButton>
      )}
    </ButtonBase>
  );
}
FormikFile.draggingOverClass = 'dragOver';
