import AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Typography";
import Typography from "@mui/material/Toolbar";

export function Header() {
  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography component="h2">
            Prototype
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}
