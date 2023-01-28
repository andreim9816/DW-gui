export interface ZborDto {
  id: number;
  operatorId: string;
  aeronavaId: string;
  durata: number;
  distanta: number;
  total_locuri: number;
  anulat: boolean;
  dataPlecare: Date;
  dataSosire: Date;
  locatiePlecareId: string;
  locateSosireId: string;
}
