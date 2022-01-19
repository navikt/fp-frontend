import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftetSvpArbeidsforhold = {
  tilretteleggingId: number;
  tilretteleggingBehovFom: string;
  tilretteleggingDatoer: {
    fom: string;
    type: string;
    stillingsprosent: number;
    overstyrtUtbetalingsgrad: number;
  }[];
  uttakArbeidType: string;
  arbeidsgiverReferanse: string;
  opplysningerOmRisiko: string;
  opplysningerOmTilrettelegging: string;
  kopiertFraTidligereBehandling: boolean;
  mottattTidspunkt: string;
  internArbeidsforholdReferanse: string;
  eksternArbeidsforholdReferanse: string;
  skalBrukes: boolean;
  velferdspermisjoner: {
    permisjonFom: string;
    permisjonTom: string;
    permisjonsprosent: number;
    type: string;
    erGyldig: boolean;
  }[];
}

type BekreftSvangerskapspengerAp = {
  termindato: string;
  fødselsdato: string;
  bekreftetSvpArbeidsforholdList: BekreftetSvpArbeidsforhold[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.FODSELTILRETTELEGGING>;

export default BekreftSvangerskapspengerAp;
