import type { ReactNode } from 'react';
import type { FieldArray, FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { PlusIcon } from '@navikt/aksel-icons';
import { Button, Tag } from '@navikt/ds-react';

import type { Tilrettelegging, TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';

export type FAISUProps = {
  type: 'splittet' | 'hoved';
  action: ReactNode | undefined;
  tag: ReactNode | undefined;
};

export const getFAISUProps = (
  arbeidsforhold: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  index: number,
  append: UseFieldArrayAppend<TilretteleggingFormValues, 'arbeidsforhold'>,
  remove: UseFieldArrayRemove,
  alleArbeidsforhold: Tilrettelegging[],
): FAISUProps | undefined => {
  if (!arbeidsforhold.skalVurdereSplittAvArbeidsforholdet && !arbeidsforhold.arbeidsforholdetErSplittet) {
    return undefined;
  }

  return {
    type: arbeidsforhold.arbeidsforholdetErSplittet ? 'splittet' : 'hoved',
    action: getAction(arbeidsforhold, index, append, remove, alleArbeidsforhold),
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
  arbeidsforhold: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  index: number,
  append: UseFieldArrayAppend<TilretteleggingFormValues, 'arbeidsforhold'>,
  remove: UseFieldArrayRemove,
  alleArbeidsforhold: Tilrettelegging[],
) => {
  if (arbeidsforhold.arbeidsforholdetErSplittet) {
    return (
      <Button size="small" variant="secondary" type="button" data-color="accent" onClick={() => remove(index)}>
        <FormattedMessage id="FAISU.FjernSplitt" />
      </Button>
    );
  }
  const finnesSplitt = alleArbeidsforhold.some(
    af => af.arbeidsgiverReferanse === arbeidsforhold.arbeidsgiverReferanse && af.arbeidsforholdetErSplittet,
  );
  if (!finnesSplitt && arbeidsforhold.skalVurdereSplittAvArbeidsforholdet) {
    return (
      <Button
        size="small"
        variant="secondary"
        type="button"
        data-color="accent"
        icon={<PlusIcon aria-hidden />}
        onClick={() => append(kopierArbeidsforhold(arbeidsforhold))}
      >
        <FormattedMessage id="FAISU.SplittArbeidsforhold" />
      </Button>
    );
  }
  return undefined;
};

const kopierArbeidsforhold = (
  arbeidsforhold: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
): FieldArray<TilretteleggingFormValues, 'arbeidsforhold'> => ({
  ...arbeidsforhold,
  tilretteleggingId: undefined,
  eksternArbeidsforholdReferanse: undefined,
  internArbeidsforholdReferanse: undefined,
  skalVurdereSplittAvArbeidsforholdet: false,
  arbeidsforholdetErSplittet: true,
  velferdspermisjoner: [],
  stillingsprosentStartTilrettelegging: undefined,
});
