import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

import GitHubIcon from "@mui/icons-material/GitHub";

export function Header() {
  return (
      <AppBar>
        <Toolbar>
          <Typography
            component="h1"
            variant="h4"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            Prototype
          </Typography>
          <Typography component="h2" variant="h3" sx={{alignSelf: "flex-start"}}>
            <Link href="https://google.com" target="_blank" sx={{color: "white"}}><GitHubIcon  /></Link>
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
