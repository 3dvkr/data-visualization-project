export type getFluxQueryOptions = {
    bucket: string;
    measurement: string;
    moid: string;
    field: string;
    fn?: "mean";
    minutes?: number
    tableId:string
    datasetId:string

  };