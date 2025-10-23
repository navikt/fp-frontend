import { type MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, HStack, Link, Radio, VStack } from '@navikt/ds-react';
import { ReadOnlyField, RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, ArrowBox } from '@navikt/ft-ui-komponenter';
import { formaterFritekst, getLanguageFromSprakkode, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type FormValues as ModalFormValues, SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, DokumentMalType, RevurderingVarslingÅrsak } from '@navikt/fp-types';
import type { VarselRevurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

const minLength3 = minLength(3);
const maxLength10000 = maxLength(10000);

export type ForhandsvisData = {
  arsakskode: RevurderingVarslingÅrsak;
  dokumentMal: DokumentMalType;
  fritekst: string;
};

type FormValues = {
  kode: AksjonspunktKode.UTGÅTT_5025 | AksjonspunktKode.VARSEL_REVURDERING_MANUELL;
  begrunnelse?: string;
  sendVarsel?: boolean;
  fritekst?: string;
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
}

/**
 * VarselOmRevurderingForm
 *
 * Setter opp aksjonspunktet for avklaring av varsel om revurdering i søknad.
 */
export const VarselOmRevurderingForm = ({ previewCallback }: Props) => {
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
    previewCallback({
      dokumentMal: 'VARREV',
      arsakskode: 'ANNET',
      fritekst: formVerdier.fritekst ?? ' ',
    });
  };
  const ventearsaker = alleKodeverk['Venteårsak'];
  const language = getLanguageFromSprakkode(behandling.språkkode);
  return (
    <>
      <RhfForm formMethods={formMethods} onSubmit={submitCallback} setDataOnUnmount={setMellomlagretFormData}>
        <VStack gap="space-16">
          <Heading size="small" level="2">
            <FormattedMessage id="VarselOmRevurderingForm.VarselOmRevurdering" />
          </Heading>
          {!isReadOnly && aksjonspunkterForPanel[0]?.status === 'OPPR' && (
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
          {(isReadOnly || aksjonspunkterForPanel[0]?.status !== 'OPPR') && (
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
        erTilbakekreving={behandling.type === 'BT-007' || behandling.type === 'BT-009'}
      />
    </>
  );
};
