export class URL {
  static readonly HOSTNAME = '';
  static readonly API_URL = URL.HOSTNAME + '/api';

///////////////////////////////////////////////////////////////////////////////////

  static readonly CLASA_ZBOR_URL_WH = URL.API_URL + '/clase-zbor/WH';
  static readonly CLASA_ZBOR_URL_OLTP = URL.API_URL + '/clase-zbor/OLTP';

///////////////////////////////////////////////////////////////////////////////////

  static readonly METODA_PLATA_URL_WH = URL.API_URL + '/metode-plata/WH';
  static readonly METODA_PLATA_URL_OLTP = URL.API_URL + '/metode-plata/OLTP';

  ///////////////////////////////////////////////////////////////////////////////////

  static readonly OPERATOR_ZBOR_URL_WH = URL.API_URL + '/operatori-zbor/WH';
  static readonly OPERATOR_ZBOR_URL_OLTP = URL.API_URL + '/operatori-zbor/OLTP';

  ///////////////////////////////////////////////////////////////////////////////////

  static readonly DESTINATIE_URL_WH = URL.API_URL + '/destinatii/WH';
  static readonly DESTINATIE_URL_OLTP = URL.API_URL + '/destinatii/OLTP';

  ///////////////////////////////////////////////////////////////////////////////////

  static readonly CLIENT_URL_WH = URL.API_URL + '/clienti/WH';
  static readonly CLIENT_URL_OLTP = URL.API_URL + '/clienti/OLTP';

  ///////////////////////////////////////////////////////////////////////////////////

  static readonly ZBOR_URL_WH = URL.API_URL + '/zboruri/WH';
  static readonly ZBOR_URL_OLTP = URL.API_URL + '/zboruri/OLTP';

  ///////////////////////////////////////////////////////////////////////////////////

  static readonly REZERVARE_URL_WH = URL.API_URL + '/rezervari/WH';
  static readonly REZERVARE_URL_OLTP = URL.API_URL + '/rezervari/OLTP';

  ///////////////////////////////////////////////////////////////////////////////////

  static readonly TIMP_URL_WH = URL.API_URL + '/timpi/WH';
}
