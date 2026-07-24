import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Heading, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroup, RhfTextField } from '@navikt/ft-form-hooks';
import {
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidInteger,
  isDatesEqual,
  maxValue,
  minValue,
  required,
} from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { removeSpacesFromNumber } from '@navikt/ft-utils';

import type { FamilieHendelseType } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

const OMSORG_NAME_PREFIX = 'omsorg';
const MAX_ANTALL_BARN = 10;

const getValideringMotAnnenFødselsdato = (index: number, fødselsdato: string | undefined) => (fDato?: string) => {
  if (index === 0 && fødselsdato && fDato) {
    return isDatesEqual(fDato, fødselsdato);
  }
  return undefined;
};

type OmsorgOgAdopsjonFormValues = {
  [OMSORG_NAME_PREFIX]: {
    erEktefellesBarn?: boolean;
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    fødselsdato?: { dato?: string }[];
  };
};

interface Props {
  familieHendelseType: FamilieHendelseType;
  readOnly: boolean;
  isForeldrepengerFagsak: boolean;
  fødselsdato: string | undefined;
}

/**
 * OmsorgOgAdopsjonPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
export const OmsorgOgAdopsjonPanel = ({
  readOnly,
  familieHendelseType,
  isForeldrepengerFagsak,
  fødselsdato,
}: Props) => {
  const erAdopsjon = familieHendelseType === 'ADPSJN';

  const { control } = useFormContext<OmsorgOgAdopsjonFormValues>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `${OMSORG_NAME_PREFIX}.fødselsdato`,
  });

  const oppdaterAntallBarn = (antallBarn: number | undefined) => {
    if (antallBarn === undefined || antallBarn <= 0) {
      return undefined;
    }
    const ønsketAntall = Math.min(Math.max(antallBarn, 0), MAX_ANTALL_BARN);
    if (fields.length > ønsketAntall) {
      remove(Array.from({ length: fields.length - ønsketAntall }, (_, i) => ønsketAntall + i));
    } else if (fields.length < ønsketAntall) {
      append(Array.from({ length: ønsketAntall - fields.length }, () => ({ dato: undefined })));
    }
  };

  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
          {erAdopsjon ? (
            <FormattedMessage id="Registrering.Adopsjon.Title" />
          ) : (
            <FormattedMessage id="Registrering.Adopsjon.OmsorgTitle" />
          )}
        </Heading>

        {isForeldrepengerFagsak && erAdopsjon && (
          <RhfRadioGroup
            name={`${OMSORG_NAME_PREFIX}.erEktefellesBarn`}
            control={control}
            legend={<FormattedMessage id="Registrering.Adopsjon.GjelderEktefellesBarn" />}
            validate={[required]}
            readOnly={readOnly}
          >
            <HStack gap="space-16">
              <Radio value={true} size="small">
                <FormattedMessage id="Registrering.Adopsjon.Ja" />
              </Radio>
              <Radio value={false} size="small">
                <FormattedMessage id="Registrering.Adopsjon.Nei" />
              </Radio>
            </HStack>
          </RhfRadioGroup>
        )}

        <RhfDatepicker
          name={`${OMSORG_NAME_PREFIX}.omsorgsovertakelsesdato`}
          control={control}
          label={
            erAdopsjon ? (
              <FormattedMessage id="Registrering.Adopsjon.DatoForOvertakelsenStebarn" />
            ) : (
              <FormattedMessage id="Registrering.Adopsjon.DatoForOvertakelsen" />
            )
          }
          readOnly={readOnly}
          validate={erAdopsjon ? [required, hasValidDate] : [hasValidDate]}
        />

        <RhfTextField
          name={`${OMSORG_NAME_PREFIX}.antallBarn`}
          control={control}
          label={<FormattedMessage id="Registrering.Adopsjon.AntallBarn" />}
          readOnly={readOnly}
          htmlSize={8}
          parse={value => removeSpacesFromNumber(value)}
          validate={[...(erAdopsjon ? [required] : []), hasValidInteger, minValue(1), maxValue(10)]}
          onChange={oppdaterAntallBarn}
        />

        {fields.map((field, index) => (
          <RhfDatepicker
            key={field.id}
            name={`${OMSORG_NAME_PREFIX}.fødselsdato.${index}.dato`}
            control={control}
            readOnly={readOnly}
            validate={[
              required,
              hasValidDate,
              dateBeforeOrEqualToToday,
              getValideringMotAnnenFødselsdato(index, fødselsdato),
            ]}
            label={<FormattedMessage id="Registrering.Adopsjon.FodselsdatoBarnN" values={{ n: index + 1 }} />}
          />
        ))}
      </VStack>
    </BorderBox>
  );
};

OmsorgOgAdopsjonPanel.initialValues = (): OmsorgOgAdopsjonFormValues => ({ [OMSORG_NAME_PREFIX]: {} });

OmsorgOgAdopsjonPanel.transformValues = ({ omsorg }: OmsorgOgAdopsjonFormValues) => ({
  [OMSORG_NAME_PREFIX]: {
    ...omsorg,
    fødselsdato:
      omsorg.fødselsdato && omsorg.fødselsdato.length > 0 ? omsorg.fødselsdato.map(f => notEmpty(f.dato)) : undefined,
  },
});
