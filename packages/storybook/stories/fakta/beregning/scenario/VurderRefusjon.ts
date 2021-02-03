export const bgUtenDelvisRefusjon = {
  skjaeringstidspunktBeregning: '2020-05-15',
  skjæringstidspunkt: '2020-05-15',
  refusjonTilVurdering: {
    andeler: [
      {
        aktivitetStatus: {
          kodeverk: 'AKTIVITET_STATUS',
          kode: 'AT',
        },
        tidligereUtbetalinger: [
          {
            fom: '2020-05-15',
            tom: '9999-12-31',
            erTildeltRefusjon: false,
          },
        ],
        nyttRefusjonskravFom: '2020-06-01',
        tidligsteMuligeRefusjonsdato: '2020-06-01',
        skalKunneFastsetteDelvisRefusjon: false,
        arbeidsgiver: {
          arbeidsgiverAktørId: '999999998',
        },
      },
    ],
  },
};

export const bgMedDelvisRefusjon = {
  skjaeringstidspunktBeregning: '2020-06-01',
  skjæringstidspunkt: '2020-06-01',
  refusjonTilVurdering: {
    andeler: [
      {
        aktivitetStatus: {
          kodeverk: 'AKTIVITET_STATUS',
          kode: 'AT',
        },
        tidligereUtbetalinger: [
          {
            fom: '2020-05-15',
            tom: '9999-12-31',
            erTildeltRefusjon: true,
          },
        ],
        nyttRefusjonskravFom: '2020-06-01',
        tidligsteMuligeRefusjonsdato: '2020-06-01',
        skalKunneFastsetteDelvisRefusjon: true,
        maksTillattDelvisRefusjonPrMnd: 12000,
        arbeidsgiver: {
          arbeidsgiverOrgnr: '999999999',
        },
      },
    ],
  },
};

export const aksjonspunkt = [
  {
    definisjon: { kode: '5059', kodeverk: 'AKSJONSPUNKT_DEF' },
    status: { kode: 'OPPR', kodeverk: 'AKSJONSPUNKT_STATUS' },
    begrunnelse: null,
    vilkarType: null,
    toTrinnsBehandling: true,
    toTrinnsBehandlingGodkjent: null,
    vurderPaNyttArsaker: null,
    besluttersBegrunnelse: null,
    aksjonspunktType: { kode: 'MANU', kodeverk: 'AKSJONSPUNKT_TYPE' },
    kanLoses: true,
    erAktivt: true,
    fristTid: null,
    endretTidspunkt: null,
    endretAv: null,
  }];
