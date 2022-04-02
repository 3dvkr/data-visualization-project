import AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export function Header() {
  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography component="h1">
            Prototype
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}
