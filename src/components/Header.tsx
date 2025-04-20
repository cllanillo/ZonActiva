import { Button, Portal, Typography } from "@mui/material";
import { styled } from "@mui/material-pigment-css";
import { CustomLink } from "./CustomLink";

const StyledCustomLink = styled(CustomLink)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export function Header() {
  return (
    <>
      <header
        sx={{ width: 1, display: "flex", backgroundColor: "background.paper" }}
      >
        <Button>1314</Button> <Typography variant="h1">ZonActiva</Typography>
      </header>

      <Portal
        container={() => {
          if (!document) return null;

          return document.getElementById("main");
        }}
      >
        <div sx={{ maxWidth: 120, flexGrow: 1 }}>
          <Button>Index</Button>
          <Button>About</Button>
          <Button>unknown</Button>
        </div>
      </Portal>
    </>
  );
}
