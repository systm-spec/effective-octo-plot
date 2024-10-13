export interface BarData {
  summary: Summary;
  payload: Data[];
  isPayload: boolean;
}
export type Data = {
  test_products: string;
  test_sales: number;
};
export type Summary = {
  avg: number;
  total: number;
};
