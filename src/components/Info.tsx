import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function Info() {
  return (
    <Grid
      container
      sx={{
        padding: "calc(1rem + 2vw) calc(1rem + 5vw)",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sm={6}>
        <Paper sx={{ padding: "1rem" }}>
          <Typography variant="h4" component="h2">
            Project info
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" component="h2">
                Original project scope
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography align="left" paragraph={true}>
                This project is a prototype to consume and transform raw data
                into meaningful insights and forecasting.
              </Typography>
              <Typography align="left" paragraph={true}>
                The original project included a form to request datasets from an
                Express API for different sensors. Each dataset included one
                data series from measurements, and second data series that was
                forecasted through machine learning. This added a new chart
                component to the page to display the new dataset.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" component="h2">
                Current demo features
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography align="left" paragraph={true}>
                This demo displays a set of mock measurement and forecasted data
                on one chart for three time windows. The chart component has
                data-aware axes labels and scales that programmatically adjust
                the minima and maxima.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" component="h2">
                Technology Used
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography align="left" paragraph={true}>
                React, Recharts, Material/Emotion.js, Express API
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Grid>
    </Grid>
  );
}
