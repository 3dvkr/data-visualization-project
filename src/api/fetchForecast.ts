import { ForecastData, getFluxQueryOptions } from "../types";
import axios from 'axios'
export async function fetchForecast(options:getFluxQueryOptions):Promise<ForecastData>{
    const {data} = await axios.post('http://localhost:8080/forecast',{options})
    return data as ForecastData
}