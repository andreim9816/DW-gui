export interface RezervareDtoWH {
  nrPasageri: number;
  nrPasageriFemei: number;
  nrPasageriBarbati: number;
  sumaTotala: number;
  clientId: number;
  dataRezervareId: Date;
  dataPlecareId: Date;
  dataSosireId: Date;
  locatiePlecareId: string;
  locatieSosireId: string;
  operatorZborId: string;
  zborId: number;
  clasaZborId: number;
  metodaPlataId: number;
}
