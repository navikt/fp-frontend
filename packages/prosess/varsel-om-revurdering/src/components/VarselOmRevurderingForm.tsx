import { type MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, Link, VStack } from '@navikt/ds-react';
import { ReadOnlyField, RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, ArrowBox } from '@navikt/ft-ui-komponenter';
import { formaterFritekst, getLanguageFromSprakkode, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingType,
  DokumentMalType,
  RevurderingVarslingÅrsak,
} from '@navikt/fp-kodeverk';
import { type FormValues as ModalFormValues, SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';
import type { VarselRevurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { FodselSammenligningPanel } from './FodselSammenligningPanel';

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
  begrunnelse: aksjonspunkter[0].begrunnelse ?? '',
  sendVarsel: undefined,
});

const nullSafe = (value: FamilieHendelse | null): FamilieHendelse => value ?? ({} as FamilieHendelse);

interface Props {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  previewCallback: (data: ForhandsvisData) => void;
}

/**
 * VarselOmRevurderingForm
 *
 * Setter opp aksjonspunktet for avklaring av varsel om revurdering i søknad.
 */
export const VarselOmRevurderingForm = ({
  familiehendelse,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  previewCallback,
}: Props) => {
  const intl = useIntl();

  const { isReadOnly, alleKodeverk, behandling, submitCallback, aksjonspunkterForPanel } =
    usePanelDataContext<VarselRevurderingAp>();

  const initialValues = buildInitialValues(aksjonspunkterForPanel);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const formVerdier = formMethods.watch();

  const [skalVisePåVentModal, settSkalVisePåVentModal] = useState(false);
  const lukkModal = () => settSkalVisePåVentModal(false);
  const åpneModal = () => settSkalVisePåVentModal(true);

  const håndterSubmitFraModal = (modalValues: ModalFormValues) => {
    formMethods.trigger().then(isValid => {
      if (isValid) {
        submitCallback({
          ...formVerdier,
          ...modalValues,
        });
      }
      settSkalVisePåVentModal(false);
    });
  };

  const forhåndsvisMelding = (e: MouseEvent) => {
    e.preventDefault();
    previewCallback({
      dokumentMal: DokumentMalType.VARSEL_OM_REVURDERING,
      arsakskode: RevurderingVarslingÅrsak.ANNET,
      fritekst: formVerdier.fritekst ?? ' ',
    });
  };

  const { avklartBarn } = nullSafe(familiehendelse.register);
  const { termindato } = nullSafe(familiehendelse.gjeldende);
  const { vedtaksDatoSomSvangerskapsuke } = nullSafe(familiehendelse.gjeldende);

  const erAutomatiskRevurdering = behandling.behandlingÅrsaker.reduce(
    (result, current) => result || current.erAutomatiskRevurdering,
    false,
  );
  const ventearsaker = alleKodeverk['Venteårsak'] ?? [];
  const language = getLanguageFromSprakkode(behandling.språkkode);
  return (
    <>
      <RhfForm formMethods={formMethods} onSubmit={submitCallback} setDataOnUnmount={setMellomlagretFormData}>
        <VStack gap="4">
          <Heading size="small">
            <FormattedMessage id="VarselOmRevurderingForm.VarselOmRevurdering" />
          </Heading>
          {!isReadOnly && aksjonspunkterForPanel[0].status === AksjonspunktStatus.OPPRETTET && (
            <>
              <AksjonspunktHelpTextHTML>
                <FormattedMessage id="VarselOmRevurderingForm.VarselOmRevurderingVurder" />
              </AksjonspunktHelpTextHTML>
              {erAutomatiskRevurdering && (
                <FodselSammenligningPanel
                  behandlingsType={behandling.type}
                  avklartBarn={avklartBarn}
                  termindato={termindato}
                  vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
                  soknad={soknad}
                  soknadOriginalBehandling={soknadOriginalBehandling}
                  familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
                />
              )}
              <RhfRadioGroup
                name="sendVarsel"
                control={formMethods.control}
                validate={[required]}
                isHorizontal
                isTrueOrFalseSelection
                radios={[
                  {
                    value: 'true',
                    label: intl.formatMessage({ id: 'VarselOmRevurderingForm.SendVarsel' }),
                    element: (
                      <ArrowBox marginTop={6}>
                        <VStack gap="2">
                          <RhfTextarea
                            name="fritekst"
                            control={formMethods.control}
                            badges={[{ type: 'info', titleText: language }]}
                            label={intl.formatMessage({ id: 'VarselOmRevurderingForm.FritekstIBrev' })}
                            validate={[required, minLength3, maxLength10000, hasValidText]}
                            maxLength={10000}
                            parse={formaterFritekst}
                          />
                          <div>
                            <Link href="#" onClick={forhåndsvisMelding}>
                              <FormattedMessage id="VarselOmRevurderingForm.Preview" />
                            </Link>
                          </div>
                        </VStack>
                      </ArrowBox>
                    ),
                  },
                  {
                    value: 'false',
                    label: intl.formatMessage({ id: 'VarselOmRevurderingForm.IkkeSendVarsel' }),
                  },
                ]}
              />
              <RhfTextarea
                name="begrunnelse"
                control={formMethods.control}
                label={intl.formatMessage({ id: 'VarselOmRevurderingForm.BegrunnelseForSvar' })}
                validate={[required, minLength3, hasValidText]}
              />
              <div>
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
              </div>
            </>
          )}
          {(isReadOnly || aksjonspunkterForPanel[0].status !== AksjonspunktStatus.OPPRETTET) && (
            <ReadOnlyField
              size="small"
              label={<FormattedMessage id="VarselOmRevurderingForm.Begrunnelse" />}
              value={formVerdier.begrunnelse}
              type="textarea"
            />
          )}
        </VStack>
      </RhfForm>
      <SettPaVentModalIndex
        showModal={skalVisePåVentModal}
        frist={dayjs().add(28, 'days').format(ISO_DATE_FORMAT)}
        cancelEvent={lukkModal}
        submitCallback={håndterSubmitFraModal}
        ventearsaker={ventearsaker}
        visBrevErBestilt
        hasManualPaVent
        ventearsak={null}
        erTilbakekreving={
          behandling.type === BehandlingType.TILBAKEKREVING ||
          behandling.type === BehandlingType.TILBAKEKREVING_REVURDERING
        }
      />
    </>
  );
};
