import { alleKodeverk } from '../index';
import { expect } from 'vitest';
import {
  sivilstandType,
  KodeverkType,
  arbeidType,
  region,
  venteArsak,
  behandlingArsakType,
  VilkarType,
  adresseType,
  landkoder,
  relasjonsRolleType,
  foreldreType,
  fagsakYtelseType,
  fagsakStatus,
  personstatusType,
  overforingArsak,
  oppholdArsakType,
  utsettelseArsak,
  opptjeningAktivitetType,
  uttakPeriodeType,
  VergeType,
  innsynResultatType,
  ankeOmgjorArsak,
  virksomhetType,
  behandlingType,
  familieHendelseType,
  FagsakMarkeringKode,
  faktaOmBeregningTilfelle,
  StonadskontoType,
  uttakArbeidType,
  periodeResultatType,
  konsekvensForYtelsen,
  inntektskategorier,
  historikkAktor,
  beregningsgrunnlagAndeltyper,
  behandlingStatus,
  behandlingResultatType,
  aktivitetStatus,
  vurderPaNyttArsakType,
  tilbakekrevingVidereBehandling,
  arbeidsforholdHandlingType,
  arbeidskategori,
  medlemskapType,
  oppholdstillatelseType,
} from '@navikt/fp-kodeverk';
import historikkinnslagType from '@navikt/fp-sak-historikk/src/kodeverk/historikkinnslagType';
import { venteArsakFpsak } from '@navikt/fp-kodeverk/src/venteArsak';

function enumToRecord(e: any): Record<string, string> {
  return Object.keys(e).reduce(
    (acc, key) => {
      const value = e[key];
      if (typeof value === 'string') {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, string>,
  );
}

const kodeverkMap: [KodeverkType, Record<string, string>][] = [
  [KodeverkType.AKTIVITET_STATUS, aktivitetStatus],
  [KodeverkType.ANKE_OMGJOER_AARSAK, ankeOmgjorArsak],
  [KodeverkType.ARBEID_TYPE, arbeidType],
  [KodeverkType.ARBEIDSKATEGORI, arbeidskategori],
  [KodeverkType.ARBEIDSFORHOLD_HANDLING_TYPE, arbeidsforholdHandlingType],
  [KodeverkType.BEHANDLING_AARSAK, behandlingArsakType],
  [KodeverkType.BEHANDLING_RESULTAT_TYPE, behandlingResultatType],
  [KodeverkType.BEHANDLING_STATUS, behandlingStatus],
  [KodeverkType.BEHANDLING_TYPE, behandlingType],
  [KodeverkType.BEREGNINGSGRUNNLAG_ANDELTYPER, beregningsgrunnlagAndeltyper],
  [KodeverkType.FAGSAK_MARKERING, enumToRecord(FagsakMarkeringKode)],
  [KodeverkType.FAGSAK_STATUS, fagsakStatus],
  [KodeverkType.FAGSAK_YTELSE, fagsakYtelseType],
  [KodeverkType.FAKTA_OM_BEREGNING_TILFELLE, faktaOmBeregningTilfelle],
  [KodeverkType.FAMILIE_HENDELSE_TYPE, familieHendelseType],
  [KodeverkType.FORELDRE_TYPE, foreldreType],
  [KodeverkType.HISTORIKK_AKTOER, historikkAktor],
  [KodeverkType.HISTORIKKINNSLAG_TYPE, historikkinnslagType],
  [KodeverkType.INNTEKTSKATEGORI, inntektskategorier],
  [KodeverkType.INNSYN_RESULTAT_TYPE, innsynResultatType],
  [KodeverkType.KLAGE_MEDHOLD_ARSAK, ankeOmgjorArsak],
  [KodeverkType.KONSEKVENS_FOR_YTELSEN, konsekvensForYtelsen],
  [KodeverkType.LANDKODER, landkoder],
  [KodeverkType.MEDLEMSKAP_TYPE, medlemskapType],
  [KodeverkType.OPPHOLD_ARSAK, oppholdArsakType],
  [KodeverkType.OPPHOLDSTILLATELSE_TYPE, oppholdstillatelseType],
  [KodeverkType.OPPTJENING_AKTIVITET_TYPE, opptjeningAktivitetType],
  [KodeverkType.OVERFOERING_AARSAK_TYPE, overforingArsak],
  [KodeverkType.PERSONSTATUS_TYPE, personstatusType],
  [KodeverkType.REGION, region],
  [KodeverkType.RELASJONSROLLE_TYPE, relasjonsRolleType],
  [KodeverkType.SIVILSTAND_TYPE, sivilstandType],
  [KodeverkType.STOENADSKONTOTYPE, StonadskontoType],
  [KodeverkType.UTSETTELSE_AARSAK, utsettelseArsak],
  [KodeverkType.UTTAK_ARBEID_TYPE, uttakArbeidType],
  [KodeverkType.UTTAK_PERIODE_TYPE, uttakPeriodeType],
  [KodeverkType.VENT_AARSAK, venteArsakFpsak],
  [KodeverkType.VERGE_TYPE, VergeType],
  [KodeverkType.VILKAR_TYPE, enumToRecord(VilkarType)],
  [KodeverkType.VIRKSOMHET_TYPE, virksomhetType],
  [KodeverkType.VURDER_AARSAK, vurderPaNyttArsakType],
  [KodeverkType.TILBAKEKR_VIDERE_BEH, tilbakekrevingVidereBehandling],
];

/*const tilbakekrevingKodeverkMap: [TilbakekrevingKodeverkType, Record<string, string>][] = [
  [TilbakekrevingKodeverkType.VEDTAK_RESULTAT_TYPE, vedtakResultatType],
  [TilbakekrevingKodeverkType.TILBAKEKR_VIDERE_BEH, tilbakekrevingVidereBehandling],
];*/

describe('alleKodeverk', () => {
  it('should find kodeverktype i kodeverk', () => {
    const alleKodeverkTyper = Object.values(enumToRecord(KodeverkType));
    alleKodeverkTyper.forEach((kodeverkType: string) => {
      expect(alleKodeverk[kodeverkType as KodeverkType]).toBeDefined();
    });
  });

  it.each(kodeverkMap)('skal ha like mange elementer i %s som i kodeverk', (kodeverkType, kodeverkRef) => {
    const koder = Object.values(kodeverkRef);
    // @ts-ignore
    const kodeverkKoder: string[] = alleKodeverk[kodeverkType as KodeverkType].map(kode => kode.kode);
    expect(kodeverkKoder.sort()).toStrictEqual(koder.sort());
    expect(koder.length).toBeLessThanOrEqual(kodeverkKoder.length);
  });

  it.each(kodeverkMap)('skal finne alle %s i alleKodeverk', (kodeverkType, kodeverkRef) => {
    const koder = Object.values(kodeverkRef);
    // @ts-ignore
    const kodeverkKoder: string[] = alleKodeverk[kodeverkType as string].map(kode => kode.kode);

    koder.forEach(value => {
      expect(kodeverkKoder.find(kode => kode === value)).toBeDefined();
    });

    /*kodeverkKoder.forEach(kodeverkKode => {
      expect(koder.includes(kodeverkKode)).toBeDefined();
    });*/
  });

  it.each(kodeverkMap)('skal finne avvik %s i alleKodeverk', (kodeverkType, kodeverkRef) => {
    const koder = Object.values(kodeverkRef);
    // @ts-ignore
    const kodeverkKoder: string[] = alleKodeverk[kodeverkType as string].map(kode => kode.kode);

    const avvikIRefObjekt = koder.filter(value => !kodeverkKoder.includes(value));
    const avvikIKodeverk = kodeverkKoder.filter(value => !koder.includes(value));

    if (avvikIRefObjekt.length > 0 || avvikIKodeverk.length > 0) {
      console.log(`${kodeverkType}: Avvik i ref objekt`, avvikIRefObjekt);
      //console.log(`${kodeverkType}: Avvik i kodeverk`, avvikIKodeverk);

      console.log(`Ref objekt å legge til i ${kodeverkType}:`);
      avvikIKodeverk.sort().forEach(kode => {
        console.log(`${kode.replaceAll('-', '_')}: '${kode}',`);
      });
      console.log('-----------------------------------');

      avvikIRefObjekt.sort().forEach(kode => {
        console.log(`${kode.replaceAll('-', '_')}: '${kode}',`);
      });
      console.log('-----------------------------------');
    }

    expect(avvikIRefObjekt).toEqual([]);
    //expect(avvikIKodeverk).toEqual([]);
  });
});
