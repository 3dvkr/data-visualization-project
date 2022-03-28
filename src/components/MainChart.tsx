import { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ForecastData,
  getFluxQueryOptions,
  GraphData,
  TimeSeriesData,
} from "../types";
import { Typography } from "@mui/material";

interface MainChartProps {
  data?: TimeSeriesData;
  window: Array<number>;
  forecast?: ForecastData;
  isFetching: boolean;
  isForecasting: boolean;
  chart: getFluxQueryOptions;
}

type RechartData = {
  time_value: number;
  yValue: number;
}[][];

export function MainChart({
  data: fetchData,
  window,
  forecast,
  isFetching,
  isForecasting,
  chart,
}: MainChartProps) {
  const [data, setData] = useState([] as RechartData);
  // const [visibleData, setVisibleData] = useState([] as GraphData);
  const [visibleData, setVisibleData] = useState([] as RechartData);
  // const [xScale, setXScale] = useState("day");

  useEffect(() => {
    const slice = data.map((e, i) => {
      if (i === 1) {
        const potentialLastVisibleTime=data[0][window[0]].time_value + 1000 * 60 * window[1];
        const firstForecastTime = data[1][0].time_value
        // console.log("FORECAST DATA IN WINDOW? \n window end time: ", potentialLastVisibleTime, "\n First forecast time", firstForecastTime )
        if (
          potentialLastVisibleTime >
          firstForecastTime
        ) {
          return e.slice(window[0], window[1]);
        } else {
          return null
        }
      } else {
        return e.slice(window[0], window[1]);
      }
    });
    slice[1] === null && slice.pop()
    setVisibleData(slice as RechartData);
    // console.log("visible data: ", visibleData);
    return () => {};
  }, [data, window]);

  useEffect(() => {
    // console.log("ENV: ", process.env.REACT_APP_ENV);
    // console.log("fetchData: ", fetchData);
    if (fetchData) {
      const timeSeriesData: GraphData = fetchData[0]
        .map((d) => ({
          time_value: new Date(d.timestamp_field_0.value).valueOf(),
          yValue: d.double_field_1,
        }))
        .sort(
          (a, b) =>
            new Date(a.time_value).valueOf() - new Date(b.time_value).valueOf()
        );
      let forecastData: GraphData;
      if (forecast) {
        forecastData = forecast[0].map((d) => ({
          time_value: new Date(d.forecast_timestamp.value).valueOf(),
          yValue: d.forecast_value,
        }));
        setData(
          forecastData ? [timeSeriesData, forecastData] : [timeSeriesData]
        );
      } else {
        setData([timeSeriesData]);
      }
    }
  }, [isFetching, isForecasting]);

  return (
    <Grid container sx={{ marginTop: "calc(100px + 3vw)" }}>
      <Grid item sm={2} />
      <Grid item xs={12} sm={8}>
        <Paper>
          <Typography>
            {chart.measurement} {chart.moid}
          </Typography>
          <ResponsiveContainer height={300}>
            <LineChart
              width={500}
              height={300}
              margin={{
                top: 50,
                right: 30,
                left: 100,
                bottom: 30,
              }}
              
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
              tickFormatter={(date)=>{
                const dateObj = new Date(date)
                const day = dateObj.getDay()
                const hour = dateObj.getHours().toString().padStart(2, "0")
                const minute = dateObj.getMinutes().toString().padStart(2, "0")
                return`${day}—${hour}:${minute}`}}
                type="number"
                domain={["auto", "auto"]}
                dataKey="time_value"
                label={{ value: "Time", position: "bottom" }}
              />
              <YAxis
                unit={chart.field.includes("mhz") ? "mhz" : "%"}
                dataKey="yValue"
                domain={["auto", "auto"]}
                label={{
                  value: chart.field,
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Legend layout="vertical" verticalAlign="middle" align="right" />

              {visibleData.map((series, index) => (
                <Line
                  dataKey="yValue"
                  data={series}
                  name={index % 2 === 0 ? "data" : "forecast"}
                  key={index}
                  stroke={index % 2 === 0 ? "green" : "red"}
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}

function formatDate(dateString: string, timeScale: string = "day") {
  const date = new Date(dateString);
  if (timeScale === "hour") {
    return `${date.getUTCHours()}:00`;
  } else if (timeScale === "day") {
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
  } else if (timeScale === "month") {
    return `${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
  } else if (timeScale === "year") {
    return `${date.getUTCFullYear()}`;
  }
}
