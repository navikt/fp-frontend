import type { ReactNode } from 'react';
import type { FieldArray, FieldArrayWithId, UseFieldArrayReplace } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { Button, Tag } from '@navikt/ds-react';
import { sortPeriodsBy } from '@navikt/ft-utils';

import type { Arbeidsforhold, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

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
  arbeidsforhold: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  fields: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>[],
  aoiArbeidsforhold: Arbeidsforhold[],
  replace: UseFieldArrayReplace<TilretteleggingFormValues, 'arbeidsforhold'>,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FAISUProps | undefined => {
  if (!arbeidsforhold.skalVurdereSplittAvArbeidsforholdet && !arbeidsforhold.arbeidsforholdetErSplittet) {
    return undefined;
  }

  const alleArbeidsforholdHosSammeAG = aoiArbeidsforhold.filter(
    iaya => iaya.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverReferanse,
  );

  return {
    action: getAction(arbeidsforhold, fields, alleArbeidsforholdHosSammeAG, replace, arbeidsgiverOpplysningerPerId),
    tag: (
      <Tag data-color="warning" size="xsmall">
        {arbeidsforhold.arbeidsforholdetErSplittet ? (
          <FormattedMessage id="FAISU.SplittTag" />
        ) : (
          <FormattedMessage id="FAISU.HarFlereArbeidsforhold" />
        )}
      </Tag>
    ),
  };
};

const getAction = (
  tilrettelegging: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  fields: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>[],
  alleArbeidsforholdHosSammeAG: Arbeidsforhold[],
  replace: UseFieldArrayReplace<TilretteleggingFormValues, 'arbeidsforhold'>,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  const { tilretteleggingerSomSkalSlettes, tilretteleggingerHosSammeAG } = getTilretteleggingerSomPåvirkes(
    tilrettelegging,
    fields,
  );

  const uberørteArbeidsforhold = fields
    .filter((_, index) => !tilretteleggingerSomSkalSlettes.includes(index))
    .map(tilTilretteleggingVerdi);

  if (tilretteleggingerHosSammeAG.length > 1) {
    const nyeTilrettelegginger = [
      ...uberørteArbeidsforhold,
      reverterSplitt(tilretteleggingerHosSammeAG, alleArbeidsforholdHosSammeAG),
    ].sort(alfabetiskArbeidsforhold(arbeidsgiverOpplysningerPerId));
    return (
      <Button
        size="small"
        variant="secondary"
        type="button"
        data-color="accent"
        icon={<MinusIcon aria-hidden />}
        onClick={() => {
          replace(nyeTilrettelegginger);
        }}
      >
        <FormattedMessage
          id="FAISU.FjernSplittArbeidsforhold"
          values={{ antall: tilretteleggingerHosSammeAG.length }}
        />
      </Button>
    );
  }

  const nyeTilrettelegginger = [
    ...uberørteArbeidsforhold,
    ...kopierArbeidsforhold(tilrettelegging, alleArbeidsforholdHosSammeAG),
  ].sort(alfabetiskArbeidsforhold(arbeidsgiverOpplysningerPerId));

  return (
    <Button
      size="small"
      variant="secondary"
      type="button"
      data-color="accent"
      icon={<PlusIcon aria-hidden />}
      onClick={() => {
        replace(nyeTilrettelegginger);
      }}
    >
      <FormattedMessage id="FAISU.SplittArbeidsforhold" values={{ antall: alleArbeidsforholdHosSammeAG.length }} />
    </Button>
  );
};

const getTilretteleggingerSomPåvirkes = (
  tilrettelegging: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  fields: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>[],
) => {
  const tilretteleggingerSomSkalSlettes: number[] = [];
  const tilretteleggingerHosSammeAG: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>[] = [];

  fields.forEach((af, index) => {
    if (af.arbeidsgiverReferanse === tilrettelegging.arbeidsgiverReferanse) {
      tilretteleggingerSomSkalSlettes.push(index);
      tilretteleggingerHosSammeAG.push(af);
    }
  });
  return { tilretteleggingerSomSkalSlettes, tilretteleggingerHosSammeAG };
};

const kopierArbeidsforhold = (
  tilrettelegging: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  alleArbeidsforholdHosSammeAG: Arbeidsforhold[],
) => {
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
  tilretteleggingerHosSammeAG: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>[],
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

const tilTilretteleggingVerdi = (
  tilrettelegging: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
): FieldArray<TilretteleggingFormValues, 'arbeidsforhold'> => ({
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
