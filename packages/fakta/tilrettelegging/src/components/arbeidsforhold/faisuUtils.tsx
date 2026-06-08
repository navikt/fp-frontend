import type { ReactNode } from 'react';
import type { FieldArray, FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { PlusIcon } from '@navikt/aksel-icons';
import { Button, Tag } from '@navikt/ds-react';

import type { Arbeidsforhold } from '@navikt/fp-types';

import type { Tilrettelegging, TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';

export type FAISUProps = {
  type: 'splittet' | 'kanSplittes';
  action: ReactNode | undefined;
  tag: ReactNode | undefined;
};

export const getFAISUProps = (
  arbeidsforhold: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  index: number,
  append: UseFieldArrayAppend<TilretteleggingFormValues, 'arbeidsforhold'>,
  remove: UseFieldArrayRemove,
  alleArbeidsforhold: Tilrettelegging[],
  aoiArbeidsforhold: Arbeidsforhold[],
): FAISUProps | undefined => {
  if (!arbeidsforhold.skalVurdereSplittAvArbeidsforholdet && !arbeidsforhold.arbeidsforholdetErSplittet) {
    return undefined;
  }

  const tilretteleggingHosSammeAG = alleArbeidsforhold.filter(
    af => af.arbeidsgiverReferanse === arbeidsforhold.arbeidsgiverReferanse,
  );

  return {
    type: tilretteleggingHosSammeAG.length === 1 ? 'kanSplittes' : 'splittet',
    action: getAction(arbeidsforhold, index, append, remove, tilretteleggingHosSammeAG, aoiArbeidsforhold),
    tag: (
      <Tag data-color="warning" size="xsmall">
        {tilretteleggingHosSammeAG.length > 1 ? (
          <FormattedMessage id="FAISU.SplittTag" />
        ) : (
          <FormattedMessage id="FAISU.HarFlereArbeidsforhold" />
        )}
      </Tag>
    ),
  };
};

const getAction = (
  arbeidsforhold: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  index: number,
  append: UseFieldArrayAppend<TilretteleggingFormValues, 'arbeidsforhold'>,
  remove: UseFieldArrayRemove,
  tilretteleggingHosSammeAG: Tilrettelegging[],
  aoiArbeidsforhold: Arbeidsforhold[],
) => {
  const finnesSplitt = tilretteleggingHosSammeAG.length > 1;
  if (finnesSplitt) {
    return undefined;
  }
  const arbeidsforholdHosSammeAG = aoiArbeidsforhold.filter(
    a => a.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverReferanse,
  );
  return (
    <Button
      size="small"
      variant="secondary"
      type="button"
      data-color="accent"
      icon={<PlusIcon aria-hidden />}
      onClick={() => {
        append(kopierArbeidsforhold(arbeidsforhold, arbeidsforholdHosSammeAG));
        remove(index);
      }}
    >
      <FormattedMessage id="FAISU.SplittArbeidsforhold" values={{ antall: arbeidsforholdHosSammeAG.length }} />
    </Button>
  );
};

const kopierArbeidsforhold = (
  arbeidsforhold: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  arbeidsforholdHosSammeAG: Arbeidsforhold[],
): FieldArray<TilretteleggingFormValues, 'arbeidsforhold'>[] =>
  arbeidsforholdHosSammeAG.map(a => ({
    ...arbeidsforhold,
    tilretteleggingId: undefined,
    stillingsprosentStartTilrettelegging: a.stillingsprosent,
    internArbeidsforholdReferanse: a.internArbeidsforholdId,
    skalVurdereSplittAvArbeidsforholdet: false,
    arbeidsforholdetErSplittet: true,
    // TODO: velferdspermisjoner må filtreres på noe vis
    velferdspermisjoner: arbeidsforhold.velferdspermisjoner,
  }));
