import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import Panel from 'nav-frontend-paneler';
import { Column, Row } from 'nav-frontend-grid';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';

import { Form, RadioGroupField, RadioOption } from '@fpsak-frontend/form-hooks';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { ISO_DATE_FORMAT, required, getKodeverknavnFn } from '@fpsak-frontend/utils';
import { DateLabel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import {
  ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew,
} from '@fpsak-frontend/prosess-felles';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, FamilieHendelse, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SoknadsfristAp from '@fpsak-frontend/types-avklar-aksjonspunkter/src/prosess/SoknadsfristAp';

import styles from './erSoknadsfristVilkaretOppfyltForm.less';

const findRadioButtonTextCode = (erVilkarOk?: boolean): string => (erVilkarOk
  ? 'ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt' : 'ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt');

const findSoknadsfristDate = (mottattDato: string, antallDagerSoknadLevertForSent?: string): string => (
  moment(mottattDato)
    .subtract(antallDagerSoknadLevertForSent, 'days')
    .format(ISO_DATE_FORMAT)
);

const isEdited = (hasAksjonspunkt: boolean, erVilkarOk?: boolean): boolean => hasAksjonspunkt && erVilkarOk !== undefined;

type FormValues = {
  erVilkarOk?: boolean;
  begrunnelse?: string;
}

const findTextCode = (
  soknad: Soknad,
  familiehendelse: FamilieHendelse,
): string => {
  if (soknad.soknadType === soknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato = familiehendelse && familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0
      ? familiehendelse.avklartBarn[0].fodselsdato : soknadFodselsdato;
    return fodselsdato ? 'ErSoknadsfristVilkaretOppfyltForm.Fodselsdato' : 'ErSoknadsfristVilkaretOppfyltForm.Termindato';
  }
  return 'ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato';
};

const findDate = (
  soknad: Soknad,
  familiehendelse: FamilieHendelse,
): string | undefined => {
  if (soknad.soknadType === soknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato = familiehendelse && familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0
      ? familiehendelse.avklartBarn[0].fodselsdato : soknadFodselsdato;
    const termindato = familiehendelse && familiehendelse.termindato ? familiehendelse.termindato : soknad.termindato;
    return fodselsdato || termindato;
  }
  return familiehendelse && familiehendelse.omsorgsovertakelseDato ? familiehendelse.omsorgsovertakelseDato : soknad.omsorgsovertakelseDato;
};

export const buildInitialValues = (aksjonspunkter: Aksjonspunkt[], status: string): FormValues => ({
  erVilkarOk: isAksjonspunktOpen(aksjonspunkter[0].status) ? undefined : vilkarUtfallType.OPPFYLT === status,
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: Required<FormValues>): SoknadsfristAp => ({
  erVilkarOk: values.erVilkarOk,
  kode: AksjonspunktKode.SOKNADSFRISTVILKARET,
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
});

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  vilkar: Vilkar[];
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
  vilkar,
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

  const erVilkarOk = formMethods.watch('erVilkarOk');

  const vilkarCodes = aksjonspunkter.flatMap((a) => (a.vilkarType ? [a.vilkarType] : []));
  const funnetVilkar = vilkar.find((v) => vilkarCodes.includes(v.vilkarType));
  const antallDagerSoknadLevertForSent = funnetVilkar?.merknadParametere.antallDagerSoeknadLevertForSent;

  const hasAksjonspunkt = aksjonspunkter.length > 0;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: Required<FormValues>) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <Undertittel>{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist' })}</Undertittel>
      <span className="typo-normal">
        <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1" />
        <span className={styles.days}>
          <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2" values={{ numberOfDays: antallDagerSoknadLevertForSent }} />
        </span>
        <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3" />
        {soknad.mottattDato && antallDagerSoknadLevertForSent && (
          <DateLabel dateString={findSoknadsfristDate(soknad.mottattDato, antallDagerSoknadLevertForSent)} />
        )}
      </span>
      <Row>
        <Column xs="6">
          <Panel className={styles.panel}>
            <SkjemaGruppe legend={intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Consider' })}>
              <ul className={styles.hyphen}>
                <li><FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question1" /></li>
                <li><FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question2" /></li>
                <li><FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question3" /></li>
              </ul>
            </SkjemaGruppe>
          </Panel>
        </Column>
        <Column xs="6">
          <Panel className={styles.panelDates}>
            <Row>
              <Column xs="6">
                <Undertekst>{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.MottattDato' })}</Undertekst>
                <span className="typo-normal">
                  {soknad.mottattDato && <DateLabel dateString={soknad.mottattDato} />}
                </span>
              </Column>
              <Column xs="6">
                {textCode && <Undertekst>{intl.formatMessage({ id: textCode })}</Undertekst>}
                <span className="typo-normal">
                  {dato && <DateLabel dateString={dato} />}
                </span>
              </Column>
            </Row>
            <VerticalSpacer twentyPx />
            <Row>
              <Column xs="11">
                <Undertekst>{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication' })}</Undertekst>
                <span className="typo-normal">
                  {soknad.begrunnelseForSenInnsending || '-'}
                </span>
              </Column>
            </Row>
          </Panel>
        </Column>
      </Row>
      <VerticalSpacer sixteenPx />
      {!readOnly && (
        <Row>
          <Column xs="6">
            <RadioGroupField name="erVilkarOk" validate={[required]} parse={(value) => value === 'true'}>
              <RadioOption
                label={(
                  <FormattedMessage
                    id={findRadioButtonTextCode(true)}
                    values={{
                      b: (chunks: any) => <b>{chunks}</b>,
                    }}
                  />
                )}
                value="true"
              />
              <RadioOption
                label={(
                  <FormattedMessage
                    id={findRadioButtonTextCode(false)}
                    values={{
                      b: (chunks: any) => <b>{chunks}</b>,
                    }}
                  />
                )}
                value="false"
              />
            </RadioGroupField>
          </Column>
        </Row>
      )}
      {readOnly && (
        <>
          <RadioGroupField name="dummy" className={styles.text} readOnly={readOnly} isEdited={isEdited(hasAksjonspunkt, erVilkarOk)}>
            {[<RadioOption
              key="dummy"
              label={(
                <FormattedMessage
                  id={findRadioButtonTextCode(erVilkarOk)}
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
                    )}
              value=""
            />]}
          </RadioGroupField>
          {erVilkarOk === false && !!behandlingsresultat?.avslagsarsak && (
            <Normaltekst>{getKodeverknavn(behandlingsresultat.avslagsarsak, KodeverkType.AVSLAGSARSAK, vilkarType.SOKNADFRISTVILKARET)}</Normaltekst>
          )}
        </>
      )}
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
