import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, VStack } from '@navikt/ds-react';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { hasValidDate, hasValidInteger, required, hasValidText } from '@navikt/ft-form-validators';
import { CheckboxPanel, Datepicker, InputField, TextAreaField } from '@navikt/ft-form-hooks';

import styles from './virksomhetStartetEndretPanel.module.css';
import { StartedEndretFormValues } from '../types';
import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import { TrueFalseInput } from '../../felles/TrueFalseInput';

interface Props {
  readOnly: boolean;
  index: number;
}

const aarsaker = ({ readOnly, index }: Props) => [
  {
    value: 'harVarigEndring',
    label: <FormattedMessage id="Registrering.VirksomhetStartetPanel.HarVarigEndring" />,
    element: (
      <ArrowBox marginTop={8}>
        <Datepicker
          name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.varigEndringGjeldendeFom`}
          isReadOnly={readOnly}
          validate={[hasValidDate, required]}
          label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.GjeldendeFom" />}
        />
      </ArrowBox>
    ),
  },
  { value: 'erNyoppstartet', label: <FormattedMessage id="Registrering.VirksomhetStartetPanel.ErNyoppstartet" /> },
  {
    value: 'erNyIArbeidslivet',
    label: <FormattedMessage id="Registrering.VirksomhetStartetPanel.NyIArbeidslivet" />,
    element: (
      <ArrowBox marginTop={8}>
        <Datepicker
          name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.nyIArbeidslivetFom`}
          isReadOnly={readOnly}
          validate={[hasValidDate, required]}
          label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.GjeldendeFom" />}
        />
      </ArrowBox>
    ),
  },
];

/**
 * VirksomhetStartetEndretPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
export const VirksomhetStartetEndretPanel = ({ readOnly, index }: Props) => {
  return (
    <TrueFalseInput
      name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.varigEndretEllerStartetSisteFireAr`}
      label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged" />}
      readOnly={readOnly}
      trueContent={
        <ArrowBox marginTop={8}>
          <VStack gap="4">
            <Label size="small">
              <FormattedMessage id="Registrering.VirksomhetStartetPanel.Reason" />
            </Label>
            <CheckboxPanel
              validate={[required]}
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.varigEndretEllerStartetSisteFireArArsak`}
              checkboxes={aarsaker({ readOnly, index })}
            />

            <TextAreaField
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.beskrivelseAvEndring`}
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse" />}
              validate={[hasValidText]}
            />
            <InputField
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.inntekt`}
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.Inntekt" />}
              readOnly={readOnly}
              validate={[hasValidInteger, required]}
              className={styles.inntektBredde}
              parse={value => {
                const parsedValue = parseInt(value.toString(), 10);
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
