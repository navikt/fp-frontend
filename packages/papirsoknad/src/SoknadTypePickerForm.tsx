import React, {
  useCallback, FunctionComponent, useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Form, RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { FagsakYtelseType, KodeverkType } from '@navikt/ft-kodeverk';
import { ariaCheck, required } from '@navikt/ft-form-validators';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/ft-types';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { SoknadData } from '@fpsak-frontend/papirsoknad-ui-komponenter';

import styles from './soknadTypePickerForm.less';

export const SøknadTyper = [
  familieHendelseType.ADOPSJON,
  familieHendelseType.FODSEL,
];

interface FormValues {
  fagsakYtelseType?: string;
  familieHendelseType?: string;
  foreldreType?: string;
}

interface OwnProps {
  setSoknadData: (soknadData: SoknadData) => void;
  fagsakYtelseType: string;
  alleKodeverk: AlleKodeverk;
}

/**
 * SoknadTypePickerForm
 *
 * Toppkomponent for registrering av papirsøknad der søknadstype, tema og søker/foreldretype blir valgt.
 */
const SoknadTypePickerForm: FunctionComponent<OwnProps> = ({
  setSoknadData,
  fagsakYtelseType,
  alleKodeverk,
}) => {
  const defaultValues = useMemo<FormValues>(() => ({
    fagsakYtelseType,
    familieHendelseType: undefined,
    foreldreType: undefined,
  }), [fagsakYtelseType]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const selectedFagsakYtelseType = formMethods.watch('fagsakYtelseType');

  const onSubmit = useCallback((
    values: Required<FormValues>,
  ) => setSoknadData(new SoknadData(values.fagsakYtelseType, values.familieHendelseType, values.foreldreType)), [setSoknadData]);

  const fagsakYtelseTyper = alleKodeverk[KodeverkType.FAGSAK_YTELSE];
  const familieHendelseTyper = alleKodeverk[KodeverkType.FAMILIE_HENDELSE_TYPE];
  const foreldreTyper = alleKodeverk[KodeverkType.FORELDRE_TYPE];

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <BorderBox className={styles.container}>
        <Undertittel>
          <FormattedMessage id="Registrering.Omsoknaden.Title" />
        </Undertittel>
        <VerticalSpacer sixteenPx />
        <Row>
          <Column xs="4">
            <Undertekst><FormattedMessage id="Registrering.Omsoknaden.soknadstype" /></Undertekst>
            <VerticalSpacer fourPx />
            <RadioGroupField name="fagsakYtelseType" validate={[required]} direction="vertical">
              { fagsakYtelseTyper.map((fyt) => <RadioOption disabled={!!fagsakYtelseType} key={fyt.kode} label={fyt.navn} value={fyt.kode} />) }
            </RadioGroupField>
          </Column>
          <Column xs="4">
            <Undertekst><FormattedMessage id="Registrering.Omsoknaden.Tema" /></Undertekst>
            <VerticalSpacer fourPx />
            <RadioGroupField
              name="familieHendelseType"
              validate={selectedFagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER ? [] : [required]}
              direction="vertical"
            >
              { familieHendelseTyper.filter(({ kode }) => SøknadTyper.includes(kode)).map((bmt) => (
                <RadioOption
                  key={bmt.kode}
                  label={bmt.navn}
                  value={bmt.kode}
                  disabled={selectedFagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER}
                />
              ))}
            </RadioGroupField>
          </Column>
          <Column xs="4">
            <Undertekst>
              <FormattedMessage id="Registrering.Omsoknaden.Soker" />
            </Undertekst>
            <VerticalSpacer fourPx />
            <RadioGroupField
              name="foreldreType"
              validate={[required]}
              direction="vertical"
            >
              { foreldreTyper.map((ft) => (
                <RadioOption
                  key={ft.kode}
                  label={ft.navn}
                  value={ft.kode}
                />
              ))}
            </RadioGroupField>
          </Column>
        </Row>
        <Row>
          <Column xs="12">
            <div className={styles.right}>
              <Hovedknapp
                mini
                onClick={ariaCheck}
                disabled={formMethods.formState.isSubmitting || formMethods.formState.isSubmitted}
              >
                <FormattedMessage id="Registrering.Omsoknaden.VisSkjema" />
              </Hovedknapp>
            </div>
          </Column>
        </Row>
      </BorderBox>
    </Form>
  );
};

export default SoknadTypePickerForm;
