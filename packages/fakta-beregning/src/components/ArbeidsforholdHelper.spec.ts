import { createVisningsnavnFakta } from './ArbeidsforholdHelper';

const lagAgopplysning = (identifikator: string, navn: string, fødselsdato?: string) => {
  if (fødselsdato) {
    return {
      erPrivatPerson: true,
      identifikator,
      navn,
      fødselsdato,
    };
  }
  return {
    erPrivatPerson: false,
    identifikator,
    navn,
  };
};

describe('<ArbeidsforholdHelper>', () => {
  it('Skal lage arbeidsgivernavn for virksomhet', () => {
    const agOpp = lagAgopplysning('999999999', 'REMA 1000');
    const navn = createVisningsnavnFakta(agOpp, undefined);
    expect(navn).toBe('REMA 1000 (999999999)');
  });
  it('Skal lage arbeidsgivernavn for virksomhet med arbeidsforholdId', () => {
    const agOpp = lagAgopplysning('999999999', 'REMA 1000');
    const navn = createVisningsnavnFakta(agOpp, 'oidsajfgoidafjga123');
    expect(navn).toBe('REMA 1000 (999999999)...a123');
  });
  it('Skal lage arbeidsgivernavn for privatperson', () => {
    const agOpp = lagAgopplysning('1111111111111', 'Knut Knutsen', '1960-01-01');
    const navn = createVisningsnavnFakta(agOpp, undefined);
    expect(navn).toBe('Knut Knutsen (01.01.1960)');
  });
});
