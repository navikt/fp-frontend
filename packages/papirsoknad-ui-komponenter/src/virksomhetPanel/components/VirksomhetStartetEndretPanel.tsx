import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Checkbox, VStack } from '@navikt/ds-react';
import { RhfCheckboxGroup, RhfDatepicker, RhfTextarea, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidInteger, hasValidText, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import type { StartedEndretFormValues, VirksomhetFormValues } from '../types';

import styles from './virksomhetStartetEndretPanel.module.css';

interface Props {
  readOnly: boolean;
  index: number;
}

/**
 * VirksomhetStartetEndretPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
export const VirksomhetStartetEndretPanel = ({ readOnly, index }: Props) => {
  const { control } = useFormContext<VirksomhetFormValues>();
  const intl = useIntl();
  return (
    <TrueFalseInput
      name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.varigEndretEllerStartetSisteFireAr`}
      control={control}
      label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged" />}
      readOnly={readOnly}
      trueContent={
        <ArrowBox>
          <VStack gap="space-16">
            <RhfCheckboxGroup
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.Årsak.Tittel" />}
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.varigEndretEllerStartetSisteFireArArsak`}
              control={control}
              validate={[
                checked =>
                  checked.length > 0
                    ? undefined
                    : intl.formatMessage({ id: 'Registrering.VirksomhetStartetPanel.Årsak.Required' }),
              ]}
            >
              <CheckboxWithInfo
                value="harVarigEndring"
                label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.HarVarigEndring" />}
                readOnly={readOnly}
                index={index}
              />
              <Checkbox value="erNyoppstartet" readOnly={readOnly}>
                <FormattedMessage id="Registrering.VirksomhetStartetPanel.ErNyoppstartet" />
              </Checkbox>
              <CheckboxWithInfo
                value="erNyIArbeidslivet"
                label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.NyIArbeidslivet" />}
                readOnly={readOnly}
                index={index}
              />
            </RhfCheckboxGroup>

            <RhfTextarea
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.beskrivelseAvEndring`}
              control={control}
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse" />}
              validate={[hasValidText]}
            />
            <RhfTextField
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.inntekt`}
              control={control}
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.Inntekt" />}
              readOnly={readOnly}
              validate={[hasValidInteger, required]}
              className={styles['inntektBredde']}
              parse={value => {
                const parsedValue = Number.parseInt(value.toString(), 10);
                return Number.isNaN(parsedValue) ? value : parsedValue;
              }}
            />
          </VStack>
        </ArrowBox>
      }
    />
  );
};

VirksomhetStartetEndretPanel.transformValues = ({
  varigEndretEllerStartetSisteFireAr,
  varigEndretEllerStartetSisteFireArArsak,
  varigEndringGjeldendeFom,
  nyIArbeidslivetFom,
  beskrivelseAvEndring,
  inntekt,
}: StartedEndretFormValues) => {
  const harVarigEndring = varigEndretEllerStartetSisteFireArArsak.includes('harVarigEndring');
  const erNyoppstartet = varigEndretEllerStartetSisteFireArArsak.includes('erNyoppstartet');
  const erNyIArbeidslivet = varigEndretEllerStartetSisteFireArArsak.includes('erNyIArbeidslivet');

  return {
    varigEndretEllerStartetSisteFireAr,
    ...(varigEndretEllerStartetSisteFireAr
      ? {
          harVarigEndring,
          ...(harVarigEndring ? { varigEndringGjeldendeFom } : {}),
          erNyoppstartet,
          erNyIArbeidslivet,
          ...(erNyIArbeidslivet ? { nyIArbeidslivetFom } : {}),
          beskrivelseAvEndring,
          inntekt,
        }
      : {}),
  };
};

const CheckboxWithInfo = ({
  value,
  label,
  readOnly,
  index,
}: {
  value: 'harVarigEndring' | 'erNyIArbeidslivet';
  label: React.ReactNode;
  readOnly: boolean;
  index: number;
}) => {
  const { watch, control } = useFormContext<VirksomhetFormValues>();
  const valgteÅrsaker = watch(`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.varigEndretEllerStartetSisteFireArArsak`);

  const [visPerioder, setVisPerioder] = useState(valgteÅrsaker.includes(value));

  return (
    <VStack gap="space-12">
      <Checkbox value={value} onClick={() => setVisPerioder(!visPerioder)} disabled={readOnly}>
        {label}
      </Checkbox>
      {visPerioder && (
        <ArrowBox>
          <RhfDatepicker
            name={
              value === 'harVarigEndring'
                ? `${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.varigEndringGjeldendeFom`
                : `${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.nyIArbeidslivetFom`
            }
            control={control}
            isReadOnly={readOnly}
            validate={[hasValidDate, required]}
            label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.GjeldendeFom" />}
          />
        </ArrowBox>
      )}
    </VStack>
  );
};
