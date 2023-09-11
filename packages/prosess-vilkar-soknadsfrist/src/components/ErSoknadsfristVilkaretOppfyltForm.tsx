import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Detail, Heading, Panel, BodyShort } from '@navikt/ds-react';

import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import {
  KodeverkType,
  soknadType,
  vilkarUtfallType,
  getKodeverknavnFn,
  AksjonspunktCode,
  aksjonspunktStatus,
  VilkarType,
} from '@navikt/fp-kodeverk';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';
import { DateLabel, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import { Aksjonspunkt, AlleKodeverk, Behandling, FamilieHendelse, Soknad } from '@navikt/fp-types';
import { SoknadsfristAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './erSoknadsfristVilkaretOppfyltForm.module.css';

const findRadioButtonTextCode = (erVilkarOk?: boolean): string =>
  erVilkarOk
    ? 'ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt'
    : 'ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt';

const findSoknadsfristDate = (mottattDato: string, antallDagerSoknadLevertForSent?: number): string =>
  moment(mottattDato).subtract(antallDagerSoknadLevertForSent, 'days').format(ISO_DATE_FORMAT);

type FormValues = {
  erVilkarOk?: boolean;
  begrunnelse?: string;
};

const findTextCode = (soknad: Soknad, familiehendelse: FamilieHendelse): string => {
  if (soknad.soknadType === soknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato =
      familiehendelse && familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0
        ? familiehendelse.avklartBarn[0].fodselsdato
        : soknadFodselsdato;
    return fodselsdato
      ? 'ErSoknadsfristVilkaretOppfyltForm.Fodselsdato'
      : 'ErSoknadsfristVilkaretOppfyltForm.Termindato';
  }
  return 'ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato';
};

const findDate = (soknad: Soknad, familiehendelse: FamilieHendelse): string | undefined => {
  if (soknad.soknadType === soknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato =
      familiehendelse && familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0
        ? familiehendelse.avklartBarn[0].fodselsdato
        : soknadFodselsdato;
    const termindato = familiehendelse && familiehendelse.termindato ? familiehendelse.termindato : soknad.termindato;
    return fodselsdato || termindato;
  }
  return familiehendelse && familiehendelse.omsorgsovertakelseDato
    ? familiehendelse.omsorgsovertakelseDato
    : soknad.omsorgsovertakelseDato;
};

export const buildInitialValues = (aksjonspunkter: Aksjonspunkt[], status: string): FormValues => ({
  erVilkarOk:
    aksjonspunkter[0].status === aksjonspunktStatus.OPPRETTET ? undefined : vilkarUtfallType.OPPFYLT === status,
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues): SoknadsfristAp => ({
  erVilkarOk: values.erVilkarOk || false,
  kode: AksjonspunktCode.SOKNADSFRISTVILKARET,
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
});

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: SoknadsfristAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: AlleKodeverk;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * ErSoknadsfristVilkaretOppfyltForm
 *
 * Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.
 */
const ErSoknadsfristVilkaretOppfyltForm: FunctionComponent<OwnProps> = ({
  readOnly,
  readOnlySubmitButton,
  soknad,
  gjeldendeFamiliehendelse,
  behandlingsresultat,
  alleKodeverk,
  aksjonspunkter,
  status,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter, status), [aksjonspunkter, status]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const dato = useMemo(() => findDate(soknad, gjeldendeFamiliehendelse), [soknad, gjeldendeFamiliehendelse]);
  const textCode = useMemo(() => findTextCode(soknad, gjeldendeFamiliehendelse), [soknad, gjeldendeFamiliehendelse]);

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  const erVilkarOk = formMethods.watch('erVilkarOk');

  const antallDagerSoknadLevertForSent = soknad?.søknadsfrist?.dagerOversittetFrist;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <Heading size="small">{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist' })}</Heading>
      <span className="typo-normal">
        <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1" />
        <span className={styles.days}>
          <FormattedMessage
            id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2"
            values={{ numberOfDays: antallDagerSoknadLevertForSent }}
          />
        </span>
        <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3" />
        {soknad.mottattDato && antallDagerSoknadLevertForSent && (
          <DateLabel dateString={findSoknadsfristDate(soknad.mottattDato, antallDagerSoknadLevertForSent)} />
        )}
      </span>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.col}>
            <Panel className={styles.panel}>
              <Heading size="small">{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Consider' })}</Heading>
              <ul className={styles.hyphen}>
                <li>
                  <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question1" />
                </li>
                <li>
                  <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question2" />
                </li>
                <li>
                  <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question3" />
                </li>
              </ul>
            </Panel>
          </FlexColumn>
          <FlexColumn className={styles.col}>
            <Panel className={styles.panelDates}>
              <FlexContainer>
                <FlexRow>
                  <FlexColumn className={styles.col}>
                    <Detail>{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.MottattDato' })}</Detail>
                    <span className="typo-normal">
                      {soknad.mottattDato && <DateLabel dateString={soknad.mottattDato} />}
                    </span>
                  </FlexColumn>
                  <FlexColumn className={styles.col}>
                    {textCode && <Detail>{intl.formatMessage({ id: textCode })}</Detail>}
                    <span className="typo-normal">{dato && <DateLabel dateString={dato} />}</span>
                  </FlexColumn>
                </FlexRow>
                <VerticalSpacer twentyPx />
                <Detail>
                  {intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication' })}
                </Detail>
                <span className="typo-normal">{soknad.begrunnelseForSenInnsending || '-'}</span>
              </FlexContainer>
            </Panel>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn className={styles.col}>
            <RadioGroupPanel
              name="erVilkarOk"
              validate={[required]}
              isReadOnly={readOnly}
              isHorizontal
              isTrueOrFalseSelection
              radios={[
                {
                  value: 'true',
                  label: <FormattedMessage id={findRadioButtonTextCode(true)} values={{ b: bTag }} />,
                },
                {
                  value: 'false',
                  label: <FormattedMessage id={findRadioButtonTextCode(false)} values={{ b: bTag }} />,
                },
              ]}
            />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      {readOnly && erVilkarOk === false && !!behandlingsresultat?.avslagsarsak && (
        <BodyShort size="small">
          {getKodeverknavn(behandlingsresultat.avslagsarsak, KodeverkType.AVSLAGSARSAK, VilkarType.SOKNADFRISTVILKARET)}
        </BodyShort>
      )}
      <VerticalSpacer sixteenPx />
      <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
      <VerticalSpacer sixteenPx />
      <ProsessStegSubmitButtonNew
        isReadOnly={readOnly}
        isSubmittable={!readOnlySubmitButton}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
      />
    </Form>
  );
};

export default ErSoknadsfristVilkaretOppfyltForm;
