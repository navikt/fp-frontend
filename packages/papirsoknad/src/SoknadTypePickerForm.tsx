import React, {
  useCallback, FunctionComponent, useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Detail, Heading, Button } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
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
        <Heading size="small">
          <FormattedMessage id="Registrering.Omsoknaden.Title" />
        </Heading>
        <VerticalSpacer sixteenPx />
        <Row>
          <Column xs="4">
            <Detail size="small"><FormattedMessage id="Registrering.Omsoknaden.soknadstype" /></Detail>
            <VerticalSpacer fourPx />
            <RadioGroupPanel
              name="fagsakYtelseType"
              validate={[required]}
              radios={fagsakYtelseTyper.map((fyt) => ({
                label: fyt.navn,
                value: fyt.kode,
                disabled: !!fagsakYtelseType,
              }))}
            />
          </Column>
          <Column xs="4">
            <Detail size="small"><FormattedMessage id="Registrering.Omsoknaden.Tema" /></Detail>
            <VerticalSpacer fourPx />
            <RadioGroupPanel
              name="familieHendelseType"
              validate={selectedFagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER ? [] : [required]}
              radios={familieHendelseTyper.filter(({ kode }) => SøknadTyper.includes(kode)).map((bmt) => ({
                label: bmt.navn,
                value: bmt.kode,
                disabled: selectedFagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER,
              }))}
            />
          </Column>
          <Column xs="4">
            <Detail size="small">
              <FormattedMessage id="Registrering.Omsoknaden.Soker" />
            </Detail>
            <VerticalSpacer fourPx />
            <RadioGroupPanel
              name="foreldreType"
              validate={[required]}
              radios={foreldreTyper.map((ft) => ({
                label: ft.navn,
                value: ft.kode,
              }))}
            />
          </Column>
        </Row>
        <Row>
          <Column xs="12">
            <div className={styles.right}>
              <Button
                size="small"
                variant="primary"
                onClick={ariaCheck}
                disabled={formMethods.formState.isSubmitting || formMethods.formState.isSubmitted}
              >
                <FormattedMessage id="Registrering.Omsoknaden.VisSkjema" />
              </Button>
            </div>
          </Column>
        </Row>
      </BorderBox>
    </Form>
  );
};

export default SoknadTypePickerForm;
