import { TimeSeriesData, getFluxQueryOptions } from "../types";
import {mockQueryData as data} from '../mock'
// import axios from 'axios'
export async function fetchRaw(options:getFluxQueryOptions):Promise<TimeSeriesData>{
    // const {data} = await axios.post('http://localhost:8080/fetch',{options})
    return data as TimeSeriesData
}