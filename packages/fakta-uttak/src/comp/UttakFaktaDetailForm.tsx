import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import {
  Datepicker, RadioGroupPanel, Form, SelectField, InputField,
} from '@navikt/ft-form-hooks';
import {
  FlexColumn, FlexContainer, FlexRow, OkAvbrytModal, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Delete } from '@navikt/ds-icons';

import { UttakKontrollerFaktaPerioder } from '@fpsak-frontend/types';
import { Button } from '@navikt/ds-react';

import styles from './uttakFaktaDetailForm.less';

type FormValues = {
  perioder: UttakKontrollerFaktaPerioder[];
}

interface OwnProps {
  valgtPeriode?: UttakKontrollerFaktaPerioder;
  slettPeriode?: () => void;
  avbrytEditering: () => void;
  readOnly: boolean;
  oppdaterPerioder: (uttaksperioder: { perioder: UttakKontrollerFaktaPerioder[] }) => void;
}

const UttakFaktaDetailForm: FunctionComponent<OwnProps> = ({
  valgtPeriode,
  slettPeriode,
  avbrytEditering,
  oppdaterPerioder,
  readOnly,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      perioder: valgtPeriode ? [valgtPeriode] : [],
    },
  });

  const [visSletteDialog, settVisSletteDialog] = useState(false);
  const slettUttaksperiode = useCallback(() => {
    settVisSletteDialog(false);
    slettPeriode();
  }, []);

  return (
    <>
      {visSletteDialog && (
        <OkAvbrytModal
          text={intl.formatMessage({ id: 'UttakFaktaDetailForm.VilDuSlette' })}
          submit={slettUttaksperiode}
          cancel={() => settVisSletteDialog(false)}
          showModal
        />
      )}
      <Form
        formMethods={formMethods}
        onSubmit={(values) => oppdaterPerioder({
          perioder: values.perioder.map((p) => ({
            ...p,
            bekreftet: true,
          })),
        })}
      >
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Datepicker
                name={`perioder.${0}.fom`}
                label={<FormattedMessage id="UttakFaktaDetailForm.Fom" />}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
            <FlexColumn>
              <Datepicker
                name={`perioder.${0}.tom`}
                label={<FormattedMessage id="UttakFaktaDetailForm.Tom" />}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
            {slettPeriode && (
              <FlexColumn className={styles.marginBtn}>
                <Button
                  size="small"
                  variant="tertiary"
                  type="button"
                  icon={<Delete />}
                  onClick={() => settVisSletteDialog(true)}
                  disabled={readOnly}
                >
                  <FormattedMessage id="UttakFaktaDetailForm.Slett" />
                </Button>
              </FlexColumn>
            )}
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <RadioGroupPanel
                name={`perioder.${0}.periodetype`}
                label={<FormattedMessage id="UttakFaktaDetailForm.Periodetype" />}
                validate={[required]}
                isReadOnly={readOnly}
                isHorizontal
                radios={['Uttak', 'Overføring'].map((avklaring) => ({
                  value: avklaring,
                  label: avklaring,
                }))}
              />
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <SelectField
                name={`perioder.${0}.stonadskonto`}
                label={<FormattedMessage id="UttakFaktaDetailForm.Stonadskonto" />}
                validate={[required]}
                selectValues={[{ kode: 'Fedrekvote', navn: 'fedre' }].map((vt) => <option key={vt.kode} value={vt.kode}>{vt.navn}</option>)}
                readOnly={readOnly}
              />
            </FlexColumn>
            <FlexColumn>
              <InputField
                name={`perioder.${0}.gradering`}
                label={<FormattedMessage id="UttakFaktaDetailForm.Gradering" />}
                validate={[required]}
                readOnly={readOnly}
              />
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer thirtyTwoPx />
          <FlexRow>
            <FlexColumn>
              <Button
                size="small"
                variant="secondary"
                loading={false}
                disabled={!formMethods.formState.isDirty || readOnly}
              >
                <FormattedMessage id="UttakFaktaDetailForm.Oppdater" />
              </Button>
            </FlexColumn>
            <FlexColumn>
              <Button
                size="small"
                variant="tertiary"
                onClick={avbrytEditering}
                disabled={readOnly}
                type="button"
              >
                <FormattedMessage id="UttakFaktaDetailForm.Avbryt" />
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer thirtyTwoPx />
      </Form>
    </>
  );
};

export default UttakFaktaDetailForm;
