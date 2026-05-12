import type { ReactNode } from 'react';
import type { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { PlusIcon } from '@navikt/aksel-icons';
import { Button, Tag } from '@navikt/ds-react';

import type { TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';

export type FAISUProps = {
  erHovedArbeidsforhold: boolean;
  action: ReactNode;
  tag: ReactNode | undefined;
};
export const getFAISUProps = (
  arbeidsforhold: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>,
  index: number,
  append: UseFieldArrayAppend<TilretteleggingFormValues, 'arbeidsforhold'>,
  remove: UseFieldArrayRemove,
): FAISUProps | undefined => {
  if (!arbeidsforhold.harFlereArbeidsforholdUnderSammeVirksomhet) {
    return undefined;
  }

  const erHovedArbeidsforhold = !arbeidsforhold.representererFAISU;

  return {
    erHovedArbeidsforhold,
    action: erHovedArbeidsforhold ? (
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
    ) : (
      <Button size="small" variant="secondary" type="button" data-color="accent" onClick={() => remove(index)}>
        <FormattedMessage id="FAISU.FjernSplitt" />
      </Button>
    ),
    tag: erHovedArbeidsforhold ? (
      <Tag data-color="warning" size="small">
        <FormattedMessage id="FAISU.HarFlereArbeidsforhold" />
      </Tag>
    ) : (
      <Tag data-color="warning" size="small">
        <FormattedMessage id="FAISU.SplittTag" />
      </Tag>
    ),
  };
};

const kopierArbeidsforhold = (arbeidsforhold: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>) => ({
  ...arbeidsforhold,
  eksternArbeidsforholdReferanse: undefined,
  internArbeidsforholdReferanse: undefined,
  representererFAISU: true,
  velferdspermisjoner: [],
});
