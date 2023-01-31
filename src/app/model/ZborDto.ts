export interface ZborDto {
  id: number;
  operatorId: string;
  aeronavaId: string;
  durata: number;
  distanta: number;
  totalLocuri: number;
  anulat: boolean;
  dataPlecare: Date;
  dataSosire: Date;
  locatiePlecareId: string;
  locateSosireId: string;
}
