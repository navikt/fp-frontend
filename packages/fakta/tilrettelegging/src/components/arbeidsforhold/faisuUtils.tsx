import type { ReactNode } from 'react';
import type { UseFieldArrayReplace } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { Button, Tag } from '@navikt/ds-react';
import { sortPeriodsBy } from '@navikt/ft-utils';

import type { Arbeidsforhold, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import type { Tilrettelegging, TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { alfabetiskArbeidsforhold, finnStillingsprosent } from '../arbeidsforholdUtils';

/**
 * FAISU = «Flere Arbeidsforhold I Samme Underenhet».
 *
 * En søker kan ha flere stillinger (arbeidsforhold) hos samme arbeidsgiver/underenhet.
 * Disse kommer som ett samlet arbeidsforhold i søknaden, men kan ha ulik utbetalingsgrad
 * for hver stilling. Saksbehandler må da kunne splitte det samlede arbeidsforholdet i ett
 * arbeidsforhold per underliggende stilling (fra arbeid og inntekt / AOI), slik at hver
 * stilling kan vurderes for seg.
 *
 * - `getFAISUProps` gir en knapp (`action`) og en merkelapp (`tag`) for arbeidsforhold som
 *   enten kan vurderes splittet eller allerede er splittet. For øvrige arbeidsforhold
 *   returneres `undefined`.
 * - Splitt: erstatter det samlede arbeidsforholdet med én kopi per AOI-arbeidsforhold hos
 *   samme arbeidsgiver (`kopierArbeidsforhold`), der hver kopi får sin egen stillingsprosent
 *   og interne arbeidsforholdreferanse.
 * - Reversering: slår de splittede arbeidsforholdene sammen igjen til ett normalisert
 *   arbeidsforhold (`reverterSplitt`), der perioder og permisjoner flettes og dupliserte
 *   innslag fjernes.
 */
export type FAISUProps = {
  action: ReactNode | undefined;
  tag: ReactNode | undefined;
};

export const getFAISUProps = (
  index: number,
  hentTilrettelegginger: () => Tilrettelegging[],
  aoiArbeidsforhold: Arbeidsforhold[],
  replace: UseFieldArrayReplace<TilretteleggingFormValues, 'arbeidsforhold'>,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FAISUProps | undefined => {
  const alleTilrettelegginger = hentTilrettelegginger();
  const tilrettelegging = alleTilrettelegginger[index];
  if (
    !tilrettelegging ||
    (!tilrettelegging.skalVurdereSplittAvArbeidsforholdet && !tilrettelegging.arbeidsforholdetErSplittet)
  ) {
    return undefined;
  }

  const alleArbeidsforholdHosSammeAG = aoiArbeidsforhold.filter(
    iaya => iaya.arbeidsgiverIdent === tilrettelegging.arbeidsgiverReferanse,
  );
  const antallTilretteleggingerHosSammeAG = alleTilrettelegginger.filter(
    af => af.arbeidsgiverReferanse === tilrettelegging.arbeidsgiverReferanse,
  ).length;

  const splittEllerReverter = () => {
    const gjeldendeTilrettelegginger = hentTilrettelegginger();
    replace(
      lagNyeTilrettelegginger(
        notEmpty(gjeldendeTilrettelegginger[index], `Fant ikke tilrettelegging for index ${index}`),
        gjeldendeTilrettelegginger,
        alleArbeidsforholdHosSammeAG,
        arbeidsgiverOpplysningerPerId,
      ),
    );
  };

  return {
    action:
      antallTilretteleggingerHosSammeAG > 1 ? (
        <Button
          size="small"
          variant="secondary"
          type="button"
          data-color="accent"
          icon={<MinusIcon aria-hidden />}
          onClick={splittEllerReverter}
        >
          <FormattedMessage
            id="FAISU.FjernSplittArbeidsforhold"
            values={{ antall: antallTilretteleggingerHosSammeAG }}
          />
        </Button>
      ) : (
        <Button
          size="small"
          variant="secondary"
          type="button"
          data-color="accent"
          icon={<PlusIcon aria-hidden />}
          onClick={splittEllerReverter}
        >
          <FormattedMessage id="FAISU.SplittArbeidsforhold" values={{ antall: alleArbeidsforholdHosSammeAG.length }} />
        </Button>
      ),
    tag: (
      <Tag data-color="warning" size="xsmall">
        {tilrettelegging.arbeidsforholdetErSplittet ? (
          <FormattedMessage id="FAISU.SplittTag" />
        ) : (
          <FormattedMessage id="FAISU.HarFlereArbeidsforhold" />
        )}
      </Tag>
    ),
  };
};

const lagNyeTilrettelegginger = (
  tilrettelegging: Tilrettelegging,
  alleTilrettelegginger: Tilrettelegging[],
  alleArbeidsforholdHosSammeAG: Arbeidsforhold[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): Tilrettelegging[] => {
  const erHosSammeAG = (af: Tilrettelegging) => af.arbeidsgiverReferanse === tilrettelegging.arbeidsgiverReferanse;
  const tilretteleggingerHosSammeAG = alleTilrettelegginger.filter(erHosSammeAG);
  const uberørteTilrettelegginger = alleTilrettelegginger.filter(af => !erHosSammeAG(af)).map(tilTilretteleggingVerdi);

  const nyeTilretteleggingerHosSammeAG =
    tilretteleggingerHosSammeAG.length > 1
      ? [reverterSplitt(tilretteleggingerHosSammeAG, alleArbeidsforholdHosSammeAG)]
      : kopierArbeidsforhold(tilrettelegging, alleArbeidsforholdHosSammeAG);

  return [...uberørteTilrettelegginger, ...nyeTilretteleggingerHosSammeAG].sort(
    alfabetiskArbeidsforhold(arbeidsgiverOpplysningerPerId),
  );
};

const kopierArbeidsforhold = (tilrettelegging: Tilrettelegging, alleArbeidsforholdHosSammeAG: Arbeidsforhold[]) => {
  return alleArbeidsforholdHosSammeAG.map<Tilrettelegging>(a => ({
    ...tilTilretteleggingVerdi(tilrettelegging),
    tilretteleggingId: undefined,
    stillingsprosentStartTilrettelegging: a.stillingsprosent,
    internArbeidsforholdReferanse: a.internArbeidsforholdId,
    eksternArbeidsforholdReferanse: a.eksternArbeidsforholdId,
    skalVurdereSplittAvArbeidsforholdet: false,
    arbeidsforholdetErSplittet: true,
    velferdspermisjoner: tilrettelegging.velferdspermisjoner.filter(vp =>
      a.permisjoner.some(
        permisjon =>
          vp.permisjonFom === permisjon.fom &&
          vp.permisjonTom === permisjon.tom &&
          vp.type === permisjon.type &&
          vp.permisjonsprosent === permisjon.permisjonsprosent,
      ),
    ),
  }));
};

const reverterSplitt = (
  tilretteleggingerHosSammeAG: Tilrettelegging[],
  alleArbeidsforholdHosSammeAG: Arbeidsforhold[],
) => {
  const alleVelferdspermisjoner = tilretteleggingerHosSammeAG.flatMap(af => af.velferdspermisjoner);
  const alleTilretteleggingDatoer = tilretteleggingerHosSammeAG.flatMap(af => af.tilretteleggingDatoer);
  const alleOpphold = tilretteleggingerHosSammeAG.flatMap(af => af.avklarteOppholdPerioder);
  const tidligsteBehovFom =
    tilretteleggingerHosSammeAG
      .toSorted(sortPeriodsBy('tilretteleggingBehovFom'))
      .map(af => af.tilretteleggingBehovFom)[0] ?? '';

  const sammenslåttTilrettelegging: Tilrettelegging = {
    arbeidsgiverReferanse: tilretteleggingerHosSammeAG[0]!.arbeidsgiverReferanse,
    internArbeidsforholdReferanse: undefined,
    eksternArbeidsforholdReferanse: undefined,
    kanTilrettelegges: false,
    skalBrukes: true,
    uttakArbeidType: 'ORDINÆRT_ARBEID',
    skalVurdereSplittAvArbeidsforholdet: true,
    arbeidsforholdetErSplittet: false,
    tilretteleggingBehovFom: tidligsteBehovFom,
    velferdspermisjoner: alleVelferdspermisjoner,
    avklarteOppholdPerioder: fjernDuplikateOppholdPerioder(alleOpphold),
    tilretteleggingDatoer: fjernDuplikateTilretteleggingDatoer(alleTilretteleggingDatoer),
    stillingsprosentStartTilrettelegging: finnStillingsprosent(alleArbeidsforholdHosSammeAG, tidligsteBehovFom),
  };

  return sammenslåttTilrettelegging;
};

const fjernDuplikateTilretteleggingDatoer = (
  datoer: Tilrettelegging['tilretteleggingDatoer'],
): Tilrettelegging['tilretteleggingDatoer'] => {
  return datoer.filter(
    (dato, index, self) =>
      self.findIndex(
        d => d.fom === dato.fom && d.type === dato.type && d.stillingsprosent === dato.stillingsprosent,
      ) === index,
  );
};

const fjernDuplikateOppholdPerioder = (
  perioder: Tilrettelegging['avklarteOppholdPerioder'],
): Tilrettelegging['avklarteOppholdPerioder'] => {
  return perioder.filter(
    (opphold, index, self) =>
      self.findIndex(
        d =>
          d.fom === opphold.fom &&
          d.tom === opphold.tom &&
          d.oppholdÅrsak === opphold.oppholdÅrsak &&
          d.oppholdKilde === opphold.oppholdKilde,
      ) === index,
  );
};

const tilTilretteleggingVerdi = (tilrettelegging: Tilrettelegging): Tilrettelegging => ({
  arbeidsgiverReferanse: tilrettelegging.arbeidsgiverReferanse,
  avklarteOppholdPerioder: tilrettelegging.avklarteOppholdPerioder,
  begrunnelse: tilrettelegging.begrunnelse,
  eksternArbeidsforholdReferanse: tilrettelegging.eksternArbeidsforholdReferanse,
  internArbeidsforholdReferanse: tilrettelegging.internArbeidsforholdReferanse,
  kanTilrettelegges: tilrettelegging.kanTilrettelegges,
  skalBrukes: tilrettelegging.skalBrukes,
  stillingsprosentStartTilrettelegging: tilrettelegging.stillingsprosentStartTilrettelegging,
  tilretteleggingBehovFom: tilrettelegging.tilretteleggingBehovFom,
  tilretteleggingDatoer: tilrettelegging.tilretteleggingDatoer,
  tilretteleggingId: tilrettelegging.tilretteleggingId,
  uttakArbeidType: tilrettelegging.uttakArbeidType,
  velferdspermisjoner: tilrettelegging.velferdspermisjoner,
  skalVurdereSplittAvArbeidsforholdet: tilrettelegging.skalVurdereSplittAvArbeidsforholdet,
  arbeidsforholdetErSplittet: tilrettelegging.arbeidsforholdetErSplittet,
});
