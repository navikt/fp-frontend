import React, { FunctionComponent, MouseEvent, useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, Detail, Heading } from '@navikt/ds-react';
import { Form, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formaterFritekst, getLanguageFromSprakkode, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import classNames from 'classnames';
import moment from 'moment';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingType,
  DokumentMalType,
  KodeverkType,
  UgunstAarsakType,
} from '@navikt/fp-kodeverk';
import { FormValues as ModalFormValues, SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import { FodselSammenligningIndex } from '@navikt/fp-prosess-fakta-fodsel-sammenligning';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import {
  Aksjonspunkt,
  AlleKodeverk,
  Behandling,
  FamilieHendelse,
  FamilieHendelseSamling,
  KodeverkMedNavn,
  Soknad,
} from '@navikt/fp-types';
import { VarselRevurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

import styles from './varselOmRevurderingForm.module.css';

const minLength3 = minLength(3);
const maxLength10000 = maxLength(10000);

export type ForhandsvisData = {
  arsakskode: string;
  dokumentMal: string;
  fritekst: string;
};

type FormValues = {
  kode: AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL | AksjonspunktKode.VARSEL_REVURDERING_MANUELL;
  begrunnelse?: string;
  sendVarsel?: boolean;
  fritekst?: string;
};

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  kode: validerApKodeOgHentApEnum(
    aksjonspunkter[0].definisjon,
    AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL,
    AksjonspunktKode.VARSEL_REVURDERING_MANUELL,
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
  previewCallback: (data: ForhandsvisData) => void;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
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
}) => {
  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter), [aksjonspunkter]);

  const { formData, setFormData } = useFormData<FormValues>();

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
        dokumentMal: DokumentMalType.VARSEL_OM_REVURDERING,
        arsakskode: UgunstAarsakType.ANNET,
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
            <AksjonspunktHelpTextHTML>
              <FormattedMessage id="VarselOmRevurderingForm.VarselOmRevurderingVurder" />
            </AksjonspunktHelpTextHTML>
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
                    parse={formaterFritekst}
                  />
                  <VerticalSpacer fourPx />
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
