import { type MouseEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Button, Heading, HStack, Link, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, ArrowBox, LabeledValue } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type FormValues as ModalFormValues, SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, BrevOverstyring, DokumentMalType, RevurderingVarslingÅrsak } from '@navikt/fp-types';
import type { VarselRevurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { BrevRedigeringModal, utledDelerFraBrev, utledRedigerbartInnhold } from '@navikt/fp-prosess-brev-editor';

const minLength3 = minLength(3);

export type ForhandsvisData = {
  årsakskode?: RevurderingVarslingÅrsak;
  dokumentMal: DokumentMalType;
  fritekst?: string;
};

type FormValues = {
  kode: AksjonspunktKode.UTGÅTT_5025 | AksjonspunktKode.VARSEL_REVURDERING_MANUELL;
  begrunnelse?: string;
  sendVarsel?: boolean;
};

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  kode: validerApKodeOgHentApEnum(
    aksjonspunkter[0]?.definisjon,
    AksjonspunktKode.UTGÅTT_5025,
    AksjonspunktKode.VARSEL_REVURDERING_MANUELL,
  ),
  begrunnelse: aksjonspunkter[0]?.begrunnelse ?? '',
  sendVarsel: undefined,
});

interface Props {
  previewCallback: (data: ForhandsvisData) => void;
  hentVarselHtml?: () => Promise<BrevOverstyring>;
  mellomlagreBrev?: (html: string | null) => Promise<void>;
}

/**
 * VarselOmRevurderingForm
 *
 * Setter opp aksjonspunktet for avklaring av varsel om revurdering i søknad.
 */
export const VarselOmRevurderingForm = ({ previewCallback, hentVarselHtml, mellomlagreBrev }: Props) => {
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
  const [brevData, setBrevData] = useState<{ opprinneligHtml: string; redigertHtml: string | null } | null>(null);
  const [visRedigeringModal, setVisRedigeringModal] = useState(false);

  const erÅpentAksjonspunkt = !isReadOnly && aksjonspunkterForPanel[0]?.status === 'OPPR';

  useEffect(() => {
    if (!hentVarselHtml || !erÅpentAksjonspunkt || !formVerdier.sendVarsel || brevData !== null) return;
    let ignore = false;
    void hentVarselHtml().then(result => {
      if (ignore) return;
      setBrevData({ opprinneligHtml: result.opprinneligHtml, redigertHtml: result.redigertHtml });
    });
    return () => {
      ignore = true;
    };
  }, [formVerdier.sendVarsel]); // eslint-disable-line react-hooks/exhaustive-deps
  const lukkModal = () => settSkalVisePåVentModal(false);
  const åpneModal = () => settSkalVisePåVentModal(true);

  const håndterSubmitFraModal = (modalValues: ModalFormValues) => {
    void formMethods.trigger().then(isValid => {
      if (isValid) {
        void submitCallback({
          ...formVerdier,
          ...modalValues,
        });
      }
      settSkalVisePåVentModal(false);
    });
  };

  const forhåndsvisMelding = (e: MouseEvent) => {
    e.preventDefault();
    if (brevData?.redigertHtml) {
      previewCallback({
        dokumentMal: 'FRIHTM',
        årsakskode: 'ANNET',
        fritekst: brevData.redigertHtml,
      });
    } else {
      previewCallback({
        dokumentMal: 'VARREV',
      });
    }
  };
  const ventearsaker = alleKodeverk['Venteårsak'];

  const varselBrevRedigeringVerdier =
    brevData && visRedigeringModal
      ? {
          footer: utledDelerFraBrev(brevData.opprinneligHtml).footer,
          redigerbartInnhold: utledRedigerbartInnhold(brevData.redigertHtml ?? brevData.opprinneligHtml, false),
          opprinneligRedigerbartInnhold: utledRedigerbartInnhold(brevData.opprinneligHtml, false),
        }
      : null;

  return (
    <>
      <RhfForm formMethods={formMethods} onSubmit={submitCallback} setDataOnUnmount={setMellomlagretFormData}>
        <VStack gap="space-16">
          <Heading size="small" level="2">
            <FormattedMessage id="VarselOmRevurderingForm.VarselOmRevurdering" />
          </Heading>
          {erÅpentAksjonspunkt && (
            <>
              <AksjonspunktHelpTextHTML>
                <FormattedMessage id="VarselOmRevurderingForm.VarselOmRevurderingVurder" />
              </AksjonspunktHelpTextHTML>
              <VStack gap="space-12">
                <RhfRadioGroup
                  name="sendVarsel"
                  control={formMethods.control}
                  legend=""
                  hideLegend
                  validate={[required]}
                >
                  <HStack gap="space-16">
                    <Radio value={true} size="small">
                      <FormattedMessage id="VarselOmRevurderingForm.SendVarsel" />
                    </Radio>
                    <Radio value={false} size="small">
                      <FormattedMessage id="VarselOmRevurderingForm.IkkeSendVarsel" />
                    </Radio>
                  </HStack>
                </RhfRadioGroup>
                {formVerdier.sendVarsel && (
                  <ArrowBox>
                    <VStack gap="space-8">
                      <div>
                        <Link href="#" onClick={forhåndsvisMelding}>
                          <FormattedMessage id="VarselOmRevurderingForm.Preview" />
                        </Link>
                      </div>
                      {hentVarselHtml && (
                        <div>
                          <Button
                            variant="secondary"
                            size="small"
                            type="button"
                            onClick={async () => {
                              if (!brevData) {
                                const result = await hentVarselHtml();
                                setBrevData({ opprinneligHtml: result.opprinneligHtml, redigertHtml: result.redigertHtml });
                              }
                              setVisRedigeringModal(true);
                            }}
                          >
                            <FormattedMessage id="VarselOmRevurderingForm.RedigerBrev" />
                          </Button>
                        </div>
                      )}
                      {brevData?.redigertHtml && (
                        <Alert variant="success" size="small">
                          <FormattedMessage id="VarselOmRevurderingForm.BrevErRedigert" />
                        </Alert>
                      )}
                    </VStack>
                  </ArrowBox>
                )}
              </VStack>
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
          {!erÅpentAksjonspunkt && (
            <LabeledValue
              size="small"
              label={<FormattedMessage id="VarselOmRevurderingForm.Begrunnelse" />}
              value={formVerdier.begrunnelse ?? ''}
            />
          )}
        </VStack>
      </RhfForm>
      {varselBrevRedigeringVerdier && brevData && visRedigeringModal && (
        <BrevRedigeringModal
          opprinneligHtml={brevData.opprinneligHtml}
          redigerbartInnhold={varselBrevRedigeringVerdier.redigerbartInnhold}
          opprinneligRedigerbartInnhold={varselBrevRedigeringVerdier.opprinneligRedigerbartInnhold}
          footer={varselBrevRedigeringVerdier.footer}
          mellomlagreOgHentPåNytt={async html => {
            if (mellomlagreBrev) {
              await mellomlagreBrev(html);
            }
            setBrevData(prev => (prev ? { ...prev, redigertHtml: html } : null));
          }}
          forhåndsvisBrev={html =>
            previewCallback({ dokumentMal: 'FRIHTM', årsakskode: 'ANNET', fritekst: html })
          }
          setVisRedigeringModal={setVisRedigeringModal}
        />
      )}
      <SettPaVentModalIndex
        showModal={skalVisePåVentModal}
        frist={dayjs().add(28, 'days').format(ISO_DATE_FORMAT)}
        cancelEvent={lukkModal}
        submitCallback={håndterSubmitFraModal}
        ventearsaker={ventearsaker}
        visBrevErBestilt
        hasManualPaVent
        erTilbakekreving={behandling.type === 'BT-007' || behandling.type === 'BT-009'}
      />
    </>
  );
};
