import { expect } from 'chai';
import createVisningsnavnForAktivitet from './visningsnavnHelper';

const andelUtenArbeidsforholdId = {
  arbeidsforholdType: {
    kode: 'A',
  },
  arbeidsgiverId: '321',
};

const andelMedAlt = {
  arbeidsforholdType: {
    kode: 'A',
  },
  arbeidsgiverId: '321',
  arbeidsforholdId: '999888777',
  eksternArbeidsforholdId: '56789',
};

const arbeidsgiverOpplysningerPerId = {
  321: {
    erPrivatPerson: false,
    identifikator: '321',
    referanse: '123',
    navn: 'Andeby bank',
  },
};

describe('visningsnavnHelper', () => {
  it('skal lage visningsnavn når vi mangler arbeidsforholdId', () => {
    const arbeidsgiverNavnOrgnr = createVisningsnavnForAktivitet(arbeidsgiverOpplysningerPerId[andelUtenArbeidsforholdId.arbeidsgiverId],
      undefined);
    expect(arbeidsgiverNavnOrgnr).to.equal('Andeby bank (321)');
  });

  it('skal lage visningsnavn når vi ikke mangler noe', () => {
    const arbeidsgiverNavnOrgnr = createVisningsnavnForAktivitet(arbeidsgiverOpplysningerPerId[andelMedAlt.arbeidsgiverId],
      andelMedAlt.eksternArbeidsforholdId);
    expect(arbeidsgiverNavnOrgnr).to.equal('Andeby bank (321)...6789');
  });
});
