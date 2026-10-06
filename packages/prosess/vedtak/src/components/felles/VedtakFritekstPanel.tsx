import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { LabeledValue } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity, formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import type { Behandlingsresultat } from '@navikt/fp-types';

import type { VedtakFormValues } from '../../types/VedtakFormValues';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

interface Props {
  behandlingsresultat?: Behandlingsresultat;
  språkkode: string;
  isReadOnly: boolean;
  labelTextCode: string;
}

export const VedtakFritekstPanel = ({ behandlingsresultat, språkkode, isReadOnly, labelTextCode }: Props) => {
  const { control } = useFormContext<VedtakFormValues>();

  return (
    <>
      {!isReadOnly && (
        <RhfTextarea
          name="begrunnelse"
          control={control}
          label={<FormattedMessage id={labelTextCode} />}
          validate={[minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
          parse={formaterFritekst}
          badges={[
            {
              type: 'info',
              titleText: getLanguageFromSprakkode(språkkode),
            },
          ]}
        />
      )}
      {isReadOnly && behandlingsresultat?.avslagsarsakFritekst && (
        <LabeledValue
          size="small"
          label={<FormattedMessage id={labelTextCode} />}
          value={
            <span className="whitespace-pre-wrap">{decodeHtmlEntity(behandlingsresultat.avslagsarsakFritekst)}</span>
          }
        />
      )}
    </>
  );
};
