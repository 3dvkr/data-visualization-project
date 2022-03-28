import { useQuery } from "react-query";
import { getFluxQueryOptions, ForecastData } from "../types";
import { mockForecast } from "../mock";
import { fetchForecast } from "../api";

export const useForecast = (options: getFluxQueryOptions) => {
  // console.log(options);
  const obj = useQuery("forecast", () => fetchForecast(options).catch(), {
    retry: false,
    initialData: undefined,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    optimisticResults: false,
    enabled: false,
  });
  obj.data as ForecastData;
  // if (process.env.REACT_APP_ENV === "test") 
  obj.data = mockForecast;
  return obj;
};
