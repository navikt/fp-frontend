export const beregningsgrunnlag = {
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
        arbeidsgiverId: {
          arbeidsgiverOrgnr: '999999999',
        },
        arbeidsgiverNavn: 'JENS OLE KÅRES FRANSKE BAKEVARER',
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
