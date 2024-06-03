import React, { FunctionComponent, useCallback, useMemo, useState, MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import classNames from 'classnames';
import moment from 'moment';
import { Heading, Detail, BodyShort, Button } from '@navikt/ds-react';

import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { Form, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { behandlingType as BehandlingType, dokumentMalType, ugunstAarsakTyper, AksjonspunktCode, KodeverkType } from '@navikt/fp-kodeverk';
import { AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { hasValidText, minLength, maxLength, required } from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT, getLanguageFromSprakkode } from '@navikt/ft-utils';
import { FodselSammenligningIndex } from '@navikt/fp-prosess-fakta-fodsel-sammenligning';
import { SettPaVentModalIndex, FormValues as ModalFormValues } from '@navikt/fp-modal-sett-pa-vent';
import {
  Aksjonspunkt,
  FamilieHendelseSamling,
  Soknad,
  FamilieHendelse,
  AlleKodeverk,
  Behandling,
  KodeverkMedNavn,
} from '@navikt/fp-types';
import { VarselRevurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';

import styles from './varselOmRevurderingForm.module.css';

const minLength3 = minLength(3);
const maxLength10000 = maxLength(10000);

export type ForhandsvisData = {
  arsakskode: string;
  dokumentMal: string;
  fritekst: string;
};

type FormValues = {
  kode: AksjonspunktCode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktCode.VARSEL_REVURDERING_MANUELL;
  begrunnelse?: string;
  sendVarsel?: boolean;
  fritekst?: string;
};

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  kode: validerApKodeOgHentApEnum(
    aksjonspunkter[0].definisjon,
    AksjonspunktCode.VARSEL_REVURDERING_ETTERKONTROLL,
    AksjonspunktCode.VARSEL_REVURDERING_MANUELL,
  ),
  begrunnelse: aksjonspunkter[0].begrunnelse,
  sendVarsel: undefined,
});

const nullSafe = (value: FamilieHendelse): FamilieHendelse => value || ({} as FamilieHendelse);

const EMPTY_ARRAY = [] as KodeverkMedNavn[];

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
    formMethods.trigger().then(isValid => {
      if (isValid) {
        submitCallback({
          ...formVerdier,
          ...modalValues,
        });
      }
      settSkalVisePaVentModal(false);
    });
  };

  const forhåndsvisMelding = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      previewCallback({
        dokumentMal: dokumentMalType.VARSEL_OM_REVURDERING,
        arsakskode: ugunstAarsakTyper.ANNET,
        fritekst: formVerdier.fritekst || ' ',
      });
    },
    [formVerdier.fritekst],
  );

  const { avklartBarn } = nullSafe(familiehendelse.register);
  const { termindato } = nullSafe(familiehendelse.gjeldende);
  const { vedtaksDatoSomSvangerskapsuke } = nullSafe(familiehendelse.gjeldende);

  const erAutomatiskRevurdering = behandlingArsaker.reduce(
    (result, current) => result || current.erAutomatiskRevurdering,
    false,
  );
  const ventearsaker = alleKodeverk[KodeverkType.VENT_AARSAK] || EMPTY_ARRAY;
  const language = getLanguageFromSprakkode(sprakkode);

  return (
    <>
      <Form formMethods={formMethods} onSubmit={submitCallback} setDataOnUnmount={setFormData}>
        <Heading size="small">
          <FormattedMessage id="VarselOmRevurderingForm.VarselOmRevurdering" />
        </Heading>
        <VerticalSpacer eightPx />
        {!readOnly && aksjonspunkter[0].status === AksjonspunktStatus.OPPRETTET && (
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
              radios={[
                {
                  value: 'true',
                  label: intl.formatMessage({ id: 'VarselOmRevurderingForm.SendVarsel' }),
                },
                {
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
                    validate={[required, minLength3, maxLength10000, hasValidText]}
                    maxLength={10000}
                    // Må erstatte bindestrek kopiert inn fra Word med vanlig bindestrek
                    parse={value => value.toString().replaceAll(/\p{Dash_Punctuation}/gu, '-').replaceAll('\t', ' ')}
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
              type={formVerdier.sendVarsel ? 'button' : 'submit'}
            >
              <FormattedMessage id="VarselOmRevurderingForm.Bekreft" />
            </Button>
          </>
        )}
        {(readOnly || aksjonspunkter[0].status !== AksjonspunktStatus.OPPRETTET) && (
          <>
            <Detail>
              <FormattedMessage id="VarselOmRevurderingForm.Begrunnelse" />
            </Detail>
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
        erTilbakekreving={
          behandlingType === BehandlingType.TILBAKEKREVING ||
          behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING
        }
      />
    </>
  );
};

export default VarselOmRevurderingForm;
