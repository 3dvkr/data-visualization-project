export type TimeSeriesData = {
  timestamp_field_0: { value: string };
  double_field_1: number;
}[][];

export type GraphData = {
  yValue: number;
  time_value: number;
}[];

export type ForecastData = {
  forecast_timestamp: {
    value: string;
  };
  forecast_value: number;
  standard_error: number;
  confidence_level: number;
  prediction_interval_lower_bound: number;
  prediction_interval_upper_bound: number;
  confidence_interval_lower_bound: number;
  confidence_interval_upper_bound: number;
}[][];
