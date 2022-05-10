import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';

import { FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import { RadioGroupField, RadioOption, Form } from '@navikt/ft-form-hooks';
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
      <Element><FormattedMessage id="AktivitetskravFaktaDetailForm.Header" /></Element>
      <VerticalSpacer fourPx />
      <Row className="">
        <Column xs="4">
          <Undertekst>
            <FormattedMessage id="AktivitetskravFaktaDetailForm.Periode" />
          </Undertekst>
          <VerticalSpacer fourPx />
          <Normaltekst>
            <PeriodLabel
              dateStringFom={valgtAktivitetskrav.fom}
              dateStringTom={valgtAktivitetskrav.tom}
            />
          </Normaltekst>
        </Column>
        {valgtAktivitetskrav.morsAktivitet && (
          <Column xs="4">
            <Undertekst>
              <FormattedMessage id="AktivitetskravFaktaDetailForm.MorsAktivitet" />
            </Undertekst>
            <VerticalSpacer fourPx />
            <Normaltekst>
              {morsAktiviteter.find((ma) => ma.kode === valgtAktivitetskrav.morsAktivitet)?.navn}
            </Normaltekst>
          </Column>
        )}
      </Row>
      <VerticalSpacer sixteenPx />
      <RadioGroupField
        name="avklaring"
        label={<FormattedMessage id="AktivitetskravFaktaDetailForm.Avklaring" />}
        validate={[required]}
        readOnly={readOnly}
        isEdited={valgtAktivitetskrav.endret}
      >
        {[...aktivitetskravAvklaringer].sort(((a1, a2) => a1.navn.localeCompare(a2.navn))).map((avklaring) => (
          <RadioOption
            key={avklaring.kode}
            label={avklaring.navn}
            value={avklaring.kode}
          />
        ))}
      </RadioGroupField>
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
            <Hovedknapp mini spinner={false} disabled={!formMethods.formState.isDirty || readOnly}>
              <FormattedMessage id="AktivitetskravFaktaDetailForm.Oppdater" />
            </Hovedknapp>
          </FlexColumn>
          <FlexColumn>
            <Knapp mini htmlType="button" onClick={avbrytEditeringAvAktivitetskrav} disabled={readOnly}>
              <FormattedMessage id="AktivitetskravFaktaDetailForm.Avbryt" />
            </Knapp>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Form>
  );
};

export default AktivitetskravFaktaDetailForm;
