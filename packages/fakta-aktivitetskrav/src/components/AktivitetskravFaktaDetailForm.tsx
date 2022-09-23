import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import {
  Button, Label, BodyShort, Heading,
} from '@navikt/ds-react';

import { FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import { RadioGroupPanel, Form } from '@navikt/ft-form-hooks';
import {
  PeriodLabel, VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { required } from '@navikt/ft-form-validators';

type FormValues = UttakKontrollerAktivitetskrav;

interface OwnProps {
  valgtAktivitetskrav: UttakKontrollerAktivitetskrav;
  readOnly: boolean;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  oppdaterAktivitetskrav: (aktivitetskrav: UttakKontrollerAktivitetskrav) => void;
  avbrytEditeringAvAktivitetskrav: () => void;
  morsAktiviteter: KodeverkMedNavn[];
}

export const AktivitetskravFaktaDetailForm: FunctionComponent<OwnProps> = ({
  valgtAktivitetskrav,
  readOnly,
  aktivitetskravAvklaringer,
  avbrytEditeringAvAktivitetskrav,
  morsAktiviteter,
  oppdaterAktivitetskrav,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      ...valgtAktivitetskrav,
    },
  });

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => oppdaterAktivitetskrav(values)}>
      <Heading size="small"><FormattedMessage id="AktivitetskravFaktaDetailForm.Header" /></Heading>
      <VerticalSpacer fourPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="AktivitetskravFaktaDetailForm.Periode" />
            </Label>
            <VerticalSpacer fourPx />
            <BodyShort size="small">
              <PeriodLabel
                dateStringFom={valgtAktivitetskrav.fom}
                dateStringTom={valgtAktivitetskrav.tom}
              />
            </BodyShort>
          </FlexColumn>
          {valgtAktivitetskrav.morsAktivitet && (
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="AktivitetskravFaktaDetailForm.MorsAktivitet" />
              </Label>
              <VerticalSpacer fourPx />
              <BodyShort size="small">
                {morsAktiviteter.find((ma) => ma.kode === valgtAktivitetskrav.morsAktivitet)?.navn}
              </BodyShort>
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="avklaring"
        label={<FormattedMessage id="AktivitetskravFaktaDetailForm.Avklaring" />}
        validate={[required]}
        isReadOnly={readOnly}
        isHorizontal
        radios={[...aktivitetskravAvklaringer].sort(((a1, a2) => a1.navn.localeCompare(a2.navn))).map((avklaring) => ({
          value: avklaring.kode,
          label: avklaring.navn,
        }))}
      />
      <VerticalSpacer sixteenPx />
      <FaktaBegrunnelseTextFieldNew
        name="begrunnelse"
        isSubmittable
        isReadOnly={readOnly}
        hasBegrunnelse
      />
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Button size="small" variant="primary" loading={false} disabled={!formMethods.formState.isDirty || readOnly}>
              <FormattedMessage id="AktivitetskravFaktaDetailForm.Oppdater" />
            </Button>
          </FlexColumn>
          <FlexColumn>
            <Button
              size="small"
              variant="secondary"
              onClick={avbrytEditeringAvAktivitetskrav}
              disabled={readOnly}
              type="button"
            >
              <FormattedMessage id="AktivitetskravFaktaDetailForm.Avbryt" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Form>
  );
};

export default AktivitetskravFaktaDetailForm;
