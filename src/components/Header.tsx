import { useAuth0 } from '@auth0/auth0-react';
import MenuOpenIcon from '@mui/icons-material/MenuOpenRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import { Avatar, TextField, Typography } from '@mui/material';
import { type RefObject, useReducer } from 'react';

interface HeaderProps {
  expandableRefs?: Array<RefObject<HTMLElement>>;
}

export function Header({ expandableRefs }: HeaderProps) {
  const [expand, updateExpand] = useReducer((p) => {
    if (p) {
      expandableRefs?.forEach((ref) => ref.current?.classList.remove(Header.expandClassName));
      return false;
    }

    expandableRefs?.forEach((ref) => ref.current?.classList.add(Header.expandClassName));
    return true;
  }, false);

  const { loginWithPopup, user } = useAuth0();
  console.log('🚀 ~ Header ~ user:', user);

  return (
    <header sx={{ width: 1, px: 2, py: 1.5, display: 'flex', justifyContent: 'space-between', backdropFilter: 'blur(2px)', position: 'sticky', top: 0, gap: 1.5 }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: 1,
          color: 'primary.main',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
        onClick={updateExpand}
      >
        {expand ? <MenuOpenIcon /> : <MenuIcon />} ZonActiva
      </Typography>

      <TextField label={'Search'} />

      <Avatar
        onClick={(event) => {
          loginWithPopup();
        }}
      ></Avatar>
    </header>
  );
}
Header.expandClassName = 'Header-expand' as const;
