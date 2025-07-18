export interface TaxDataModel {
  filingType: string| undefined;
  month: string| undefined;
  year: number | null | undefined
  saleAmount: number| undefined;
  taxAmount: number;
  surcharge: number;
  penalty: number;
  totalPayable: number;
}