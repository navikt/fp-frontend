import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk } from '@navikt/fp-types';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { type FormValues as FormValuesFieldArray, UtenlandsOppholdField } from './UtenlandsOppholdField';

export type OppholdINorgeFormValues = {
  oppholdINorge?: boolean;
  oppholdSisteTolvINorge?: boolean;
  oppholdNesteTolvINorge?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
};

type TranformFormValues = {
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
};

interface Props {
  erAdopsjon: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  mottattDato?: string;
}

/**
 * OppholdINorgePanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 * Inneholder delen av skjemaet som omhandler informasjon om utenlandsopphold.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
export const OppholdINorgePanel = ({ readOnly = true, alleKodeverk, mottattDato, erAdopsjon }: Props) => {
  const { formatMessage } = useIntl();
  const sortedCountriesByName = alleKodeverk['Landkoder'].slice().sort((a, b) => a.navn.localeCompare(b.navn));

  const { watch, control } = useFormContext<OppholdINorgeFormValues>();
  const skalViseTidligereOppholdInput = !watch('oppholdSisteTolvINorge', true);
  const skalViseFremtidigeOppholdInput = !watch('oppholdNesteTolvINorge', true);

  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage id="Registrering.Opphold" />
        </Heading>

        <TrueFalseInput
          name="oppholdINorge"
          control={control}
          label={formatMessage({
            id: erAdopsjon ? 'Registrering.OppholdVedAdopsjon' : 'Registrering.OppholdVedFodsel',
          })}
          readOnly={readOnly}
        />

        <VStack gap="2">
          <TrueFalseInput
            name="oppholdSisteTolvINorge"
            control={control}
            label={<FormattedMessage id="Registrering.OppholdSisteTolv" />}
            readOnly={readOnly}
          />
          {skalViseTidligereOppholdInput && (
            <ArrowBox alignOffset={58}>
              <UtenlandsOppholdField
                erTidligereOpphold
                mottattDato={mottattDato}
                countryCodes={sortedCountriesByName}
                readOnly={readOnly}
              />
            </ArrowBox>
          )}
        </VStack>

        <VStack gap="2">
          <TrueFalseInput
            name="oppholdNesteTolvINorge"
            control={control}
            label={<FormattedMessage id="Registrering.OppholdNesteTolv" />}
            readOnly={readOnly}
          />
          {skalViseFremtidigeOppholdInput && (
            <ArrowBox alignOffset={58}>
              <UtenlandsOppholdField
                mottattDato={mottattDato}
                countryCodes={sortedCountriesByName}
                readOnly={readOnly}
              />
            </ArrowBox>
          )}
        </VStack>
      </VStack>
    </BorderBox>
  );
};

OppholdINorgePanel.initialValues = (): OppholdINorgeFormValues => ({
  tidligereOppholdUtenlands: [{ periodeFom: undefined, periodeTom: undefined }],
  fremtidigeOppholdUtenlands: [{ periodeFom: undefined, periodeTom: undefined }],
});

OppholdINorgePanel.transformValues = ({
  oppholdINorge,
  oppholdSisteTolvINorge,
  oppholdNesteTolvINorge,
  tidligereOppholdUtenlands,
  fremtidigeOppholdUtenlands,
}: OppholdINorgeFormValues): TranformFormValues => ({
  oppholdINorge,
  harTidligereOppholdUtenlands: !oppholdSisteTolvINorge,
  harFremtidigeOppholdUtenlands: !oppholdNesteTolvINorge,
  tidligereOppholdUtenlands: oppholdSisteTolvINorge ? undefined : tidligereOppholdUtenlands,
  fremtidigeOppholdUtenlands: oppholdNesteTolvINorge ? undefined : fremtidigeOppholdUtenlands,
});
