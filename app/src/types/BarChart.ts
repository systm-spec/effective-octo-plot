export interface Bar_Chart {
  summary: Summary;
  payload: Data[];
}

export type Data = {
  test_products: string;
  test_sales: number;
};
export type Summary = {
  avg: number;
  total: number;
};
