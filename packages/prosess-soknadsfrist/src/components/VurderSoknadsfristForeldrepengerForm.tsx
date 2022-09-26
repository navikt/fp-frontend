import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import {
  Label, BodyShort, Detail, Heading, Panel,
} from '@navikt/ds-react';

import { Form, Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import {
  AksjonspunktHelpTextTemp, ArrowBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@fpsak-frontend/prosess-felles';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { VurderSoknadsfristAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { Søknadsfrist } from '@fpsak-frontend/types/src/soknadTsType';
import styles from './vurderSoknadsfristForeldrepengerForm.less';

const isEdited = (hasAksjonspunkt: boolean, gyldigSenFremsetting?: boolean): boolean => hasAksjonspunkt && gyldigSenFremsetting !== undefined;

type FormValues = {
  gyldigSenFremsetting?: boolean;
  ansesMottatt?: string;
  begrunnelse?: string;
}

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  mottattDato: string,
  søknadsfrist?: Søknadsfrist,
): FormValues => {
  const upgMottattDato = søknadsfrist?.mottattDato;
  return {
    gyldigSenFremsetting: isAksjonspunktOpen(aksjonspunkter[0].status) ? undefined : upgMottattDato !== mottattDato,
    ansesMottatt: upgMottattDato,
    ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
  };
};

const transformValues = (values: FormValues): VurderSoknadsfristAp => ({
  harGyldigGrunn: values.gyldigSenFremsetting,
  ansesMottattDato: values.ansesMottatt,
  kode: AksjonspunktCode.VURDER_SOKNADSFRIST_FORELDREPENGER,
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
});

interface OwnProps {
  mottattDato: string;
  søknadsfrist?: Søknadsfrist
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: VurderSoknadsfristAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * VurderSoknadsfristForeldrepengerForm
 *
 * Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.
 */
const VurderSoknadsfristForeldrepengerForm: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  readOnly,
  readOnlySubmitButton,
  mottattDato,
  søknadsfrist,
  isApOpen,
  submitCallback,
  formData,
  setFormData,
}) => {
  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter, mottattDato, søknadsfrist), [aksjonspunkter, mottattDato, søknadsfrist]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const gyldigSenFremsetting = formMethods.watch('gyldigSenFremsetting');

  const soknadsperiodeStart = søknadsfrist?.søknadsperiodeStart;
  const soknadsperiodeSlutt = søknadsfrist?.søknadsperiodeSlutt;
  const soknadsfristdato = søknadsfrist?.utledetSøknadsfrist;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(formValues: FormValues) => submitCallback(transformValues(formValues))}
      setDataOnUnmount={setFormData}
    >
      <Heading size="small"><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Soknadsfrist" /></Heading>
      <VerticalSpacer twentyPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
        {[<FormattedMessage
          key="VurderSoknadsfristForeldrepengerForm"
          id="VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText"
          values={{
            numberOfDays: søknadsfrist?.dagerOversittetFrist,
            soknadsfristdato: soknadsfristdato ? moment(soknadsfristdato).format(DDMMYYYY_DATE_FORMAT) : '',
          }}
        />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer twentyPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.colWidth}>
            <Panel className={styles.panel}>
              <Label size="small"><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Vurder" /></Label>
              <ul className={styles.hyphen}>
                <li><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt1" /></li>
                <li><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt2" /></li>
                <li><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt3" /></li>
              </ul>
            </Panel>
          </FlexColumn>
          <FlexColumn className={styles.colWidth}>
            <FlexContainer>
              <FlexRow className={styles.marginBottom}>
                <FlexColumn className={styles.colWidth}>
                  <Detail size="small"><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadMottatt" /></Detail>
                  {mottattDato
                    && <BodyShort size="small">{moment(mottattDato).format(DDMMYYYY_DATE_FORMAT)}</BodyShort>}
                </FlexColumn>
                {soknadsperiodeStart && soknadsperiodeSlutt && (
                  <FlexColumn className={styles.colWidth}>
                    <Detail size="small"><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadPeriode" /></Detail>
                    <BodyShort size="small">
                      {`${moment(soknadsperiodeStart).format(DDMMYYYY_DATE_FORMAT)} - ${moment(soknadsperiodeSlutt).format(DDMMYYYY_DATE_FORMAT)}`}
                    </BodyShort>
                  </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <div className={styles.marginTop}>
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
        <VerticalSpacer sixteenPx />
        <RadioGroupPanel
          name="gyldigSenFremsetting"
          validate={[required]}
          isReadOnly={readOnly}
          isHorizontal
          isEdited={isEdited(aksjonspunkter.length > 0, gyldigSenFremsetting)}
          isTrueOrFalseSelection
          radios={[{
            value: 'true',
            label: <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.GyldigGrunn" />,
          }, {
            value: 'false',
            label: <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn" />,
          },
          ]}
        />
        {gyldigSenFremsetting && (
          <>
            <VerticalSpacer sixteenPx />
            <ArrowBox>
              <Datepicker
                name="ansesMottatt"
                isReadOnly={readOnly}
                label={<FormattedMessage id="VurderSoknadsfristForeldrepengerForm.NyMottattDato" />}
                validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
              />
            </ArrowBox>
          </>
        )}
        <VerticalSpacer twentyPx />
        <ProsessStegSubmitButtonNew
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
        />
      </div>
    </Form>
  );
};

export default VurderSoknadsfristForeldrepengerForm;
