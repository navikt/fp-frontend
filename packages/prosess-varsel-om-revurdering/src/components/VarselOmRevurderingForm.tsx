import React, {
  FunctionComponent, useCallback, useMemo, useState, MouseEvent,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import classNames from 'classnames';
import moment from 'moment';
import {
  Heading, Detail, BodyShort, Button,
} from '@navikt/ds-react';

import {
  Form, RadioGroupPanel, TextAreaField,
} from '@navikt/ft-form-hooks';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  hasValidText, minLength, maxLength, required,
} from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT, getLanguageFromSprakkode } from '@navikt/ft-utils';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import SettPaVentModalIndex, { FormValues as ModalFormValues } from '@fpsak-frontend/modal-sett-pa-vent';
import Behandling from '@fpsak-frontend/types/src/behandlingTsType';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import {
  Aksjonspunkt, FamilieHendelseSamling, Soknad, FamilieHendelse, AlleKodeverk,
} from '@fpsak-frontend/types';
import { VarselRevurderingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { validerApKodeOgHentApEnum } from '@fpsak-frontend/prosess-felles';

import styles from './varselOmRevurderingForm.less';

const minLength3 = minLength(3);
const maxLength6000 = maxLength(6000);

export type ForhandsvisData = {
  mottaker: string;
  dokumentMal: string;
  fritekst: string;
}

type FormValues = {
  kode: AksjonspunktCode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktCode.VARSEL_REVURDERING_MANUELL;
  begrunnelse?: string;
  sendVarsel?: boolean;
  fritekst?: string;
}

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  kode: validerApKodeOgHentApEnum(aksjonspunkter[0].definisjon,
    AksjonspunktCode.VARSEL_REVURDERING_ETTERKONTROLL, AksjonspunktCode.VARSEL_REVURDERING_MANUELL),
  begrunnelse: aksjonspunkter[0].begrunnelse,
  sendVarsel: undefined,
});

const nullSafe = (value: FamilieHendelse): FamilieHendelse => value || {} as FamilieHendelse;

const EMPTY_ARRAY = [];

interface OwnProps {
  behandlingArsaker: Behandling['behandlingÅrsaker'];
  sprakkode: string;
  behandlingType: string;
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: VarselRevurderingAp) => Promise<void>;
  previewCallback: (data: ForhandsvisData) => Promise<any>;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * VarselOmRevurderingForm
 *
 * Setter opp aksjonspunktet for avklaring av varsel om revurdering i søknad.
 */
const VarselOmRevurderingForm: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  familiehendelse,
  behandlingArsaker,
  readOnly,
  behandlingType,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  alleKodeverk,
  sprakkode,
  submitCallback,
  previewCallback,
  setFormData,
  formData,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter), [aksjonspunkter]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const formVerdier = formMethods.watch();

  const [skalVisePaVentModal, settSkalVisePaVentModal] = useState(false);
  const lukkModal = useCallback(() => settSkalVisePaVentModal(false), [settSkalVisePaVentModal]);
  const åpneModal = useCallback(() => settSkalVisePaVentModal(true), [settSkalVisePaVentModal]);

  const håndterSubmitFraModal = (modalValues: ModalFormValues) => {
    formMethods.trigger().then((isValid) => {
      if (isValid) {
        submitCallback({
          ...formVerdier,
          ...modalValues,
        });
      }
      settSkalVisePaVentModal(false);
    });
  };

  const forhåndsvisMelding = useCallback((e: MouseEvent) => {
    e.preventDefault();
    previewCallback({
      mottaker: '',
      dokumentMal: dokumentMalType.VARSEL_OM_REVURDERING,
      fritekst: formVerdier.fritekst || ' ',
    });
  }, [formVerdier.fritekst]);

  const { avklartBarn } = nullSafe(familiehendelse.register);
  const { termindato } = nullSafe(familiehendelse.gjeldende);
  const { vedtaksDatoSomSvangerskapsuke } = nullSafe(familiehendelse.gjeldende);

  const erAutomatiskRevurdering = behandlingArsaker.reduce((result, current) => (result || current.erAutomatiskRevurdering), false);
  const ventearsaker = alleKodeverk[kodeverkTyper.VENT_AARSAK] || EMPTY_ARRAY;
  const language = getLanguageFromSprakkode(sprakkode);

  return (
    <>
      <Form
        formMethods={formMethods}
        onSubmit={submitCallback}
        setDataOnUnmount={setFormData}
      >
        <Heading size="small"><FormattedMessage id="VarselOmRevurderingForm.VarselOmRevurdering" /></Heading>
        <VerticalSpacer eightPx />
        {(!readOnly && isAksjonspunktOpen(aksjonspunkter[0].status)) && (
        <>
          <AksjonspunktHelpTextTemp isAksjonspunktOpen>
            {[<FormattedMessage key="1" id="VarselOmRevurderingForm.VarselOmRevurderingVurder" />]}
          </AksjonspunktHelpTextTemp>
          <VerticalSpacer twentyPx />
          {erAutomatiskRevurdering && (
            <>
              <FodselSammenligningIndex
                behandlingsTypeKode={behandlingType}
                avklartBarn={avklartBarn}
                termindato={termindato}
                vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
                soknad={soknad}
                soknadOriginalBehandling={soknadOriginalBehandling}
                familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
              />
              <VerticalSpacer sixteenPx />
            </>
          )}
          <RadioGroupPanel
            name="sendVarsel"
            validate={[required]}
            isHorizontal
            isTrueOrFalseSelection
            radios={[{
              value: 'true',
              label: intl.formatMessage({ id: 'VarselOmRevurderingForm.SendVarsel' }),
            }, {
              value: 'false',
              label: intl.formatMessage({ id: 'VarselOmRevurderingForm.IkkeSendVarsel' }),
            },
            ]}
          />
          {formVerdier.sendVarsel && (
            <>
              <VerticalSpacer sixteenPx />
              <ArrowBox>
                <TextAreaField
                  badges={[{ type: 'info', titleText: language }]}
                  name="fritekst"
                  label={intl.formatMessage({ id: 'VarselOmRevurderingForm.FritekstIBrev' })}
                  validate={[required, minLength3, maxLength6000, hasValidText]}
                  maxLength={6000}
                />
                <VerticalSpacer fourPx />
                <a
                  href=""
                  onClick={forhåndsvisMelding}
                  className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
                >
                  <FormattedMessage id="VarselOmRevurderingForm.Preview" />
                </a>
              </ArrowBox>
            </>
          )}
          <div className={styles.flexContainer}>
            <TextAreaField
              name="begrunnelse"
              label={intl.formatMessage({ id: 'VarselOmRevurderingForm.BegrunnelseForSvar' })}
              validate={[required, minLength3, hasValidText]}
            />
          </div>
          <VerticalSpacer sixteenPx />
          <Button
            variant="primary"
            size="small"
            onClick={formVerdier.sendVarsel ? åpneModal : undefined}
            loading={formMethods.formState.isSubmitting}
            disabled={formMethods.formState.isSubmitting}
            type="button"
          >
            <FormattedMessage id="VarselOmRevurderingForm.Bekreft" />
          </Button>
        </>
        )}
        {(readOnly || !isAksjonspunktOpen(aksjonspunkter[0].status)) && (
        <>
          <Detail size="small"><FormattedMessage id="VarselOmRevurderingForm.Begrunnelse" /></Detail>
          <BodyShort size="small">{formVerdier.begrunnelse}</BodyShort>
        </>
        )}
      </Form>
      <SettPaVentModalIndex
        showModal={skalVisePaVentModal}
        frist={moment().add(28, 'days').format(ISO_DATE_FORMAT)}
        cancelEvent={lukkModal}
        submitCallback={håndterSubmitFraModal}
        ventearsaker={ventearsaker}
        visBrevErBestilt
        hasManualPaVent
        erTilbakekreving={behandlingType === BehandlingType.TILBAKEKREVING || behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING}
      />
    </>
  );
};

export default VarselOmRevurderingForm;
