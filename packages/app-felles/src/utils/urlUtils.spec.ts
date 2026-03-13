import { formatQueryString, parseQueryString, updateQueryParams } from './urlUtils';

describe('urlUtils', () => {
  describe('parseQueryString', () => {
    it('skal parse url parametere', () => {
      const queryString = '?melding=Hei+verden%21&s%C3%B8knadsDato=19.05.2025';
      expect(parseQueryString(queryString)).toEqual({ melding: 'Hei verden!', søknadsDato: '19.05.2025' });
    });
  });

  describe('formatQueryString', () => {
    it('skal formatere parametre som er string, boolean og som inneholder spesialtegn', () => {
      expect(formatQueryString({ foo: 'bar', active: true, søknadsDato: '19.05.2025' })).toEqual(
        '?foo=bar&active=true&s%C3%B8knadsDato=19.05.2025',
      );
    });

    it('skal filtrere bort tomme verdier', () => {
      expect(formatQueryString({ foo: 'bar', empty: '' })).toEqual('?foo=bar');
      expect(formatQueryString({ empty: '' })).toEqual('');
      expect(formatQueryString()).toEqual('');
      expect(formatQueryString({})).toEqual('');
    });
  });

  describe('updateQueryParams', () => {
    it('skal oppdatere eksisterende parametre og legge til nye', () => {
      const result = updateQueryParams('?foo=bar&baz=qux', { foo: 'ny', lagtTil: 'verdi' });
      expect(result).toEqual('?foo=ny&baz=qux&lagtTil=verdi');
    });

    it('skal fjerne parametre satt til undefined', () => {
      const result = updateQueryParams('?foo=bar&skalFjernes=ja', { skalFjernes: undefined });
      expect(result).toEqual('?foo=bar');
    });
  });
});
