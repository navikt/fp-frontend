import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, KlageVurdering as klageVurderingType } from '@navikt/fp-kodeverk';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import type { KlageVurdering, KlageVurderingResultat, KodeverkMedNavn } from '@navikt/fp-types';
import type { KlageVurderingResultatAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import type { KlageFormType } from '../../types/klageFormType';
import { BekreftOgSubmitKlageModal } from './BekreftOgSubmitKlageModal';
import { FritekstBrevTextField } from './FritekstKlageBrevTextField';
import { KlageVurderingRadioOptionsNfp } from './KlageVurderingRadioOptionsNfp';
import { type KlagevurderingForhåndsvisData, PreviewKlageLink } from './PreviewKlageLink';

export type TransformedValues = {
  kode: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: string;
};

const transformValues = (values: KlageFormType): KlageVurderingResultatAp => ({
  klageMedholdArsak:
    values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageMedholdArsak : undefined,
  klageVurderingOmgjoer:
    values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : undefined,
  klageHjemmel: values.klageHjemmel,
  klageVurdering: notEmpty(values.klageVurdering),
  fritekstTilBrev: values.fritekstTilBrev,
  begrunnelse: values.begrunnelse,
  kode: AksjonspunktKode.BEHANDLE_KLAGE_NFP,
});

const definertKodeverdiEllerUndefined = (kode: string | undefined): string | undefined => {
  if (kode && kode !== '-') {
    return kode;
  }
  return undefined;
};

const lagHjemlerMedNavn = (
  kodeverkNavn: KodeverkMedNavn<'KlageHjemmel'>[],
  kodeverkVerdier: string[],
): KodeverkMedNavn<'KlageHjemmel'>[] =>
  kodeverkNavn.filter(({ kode }) => kodeverkVerdier.includes(kode)).sort((a, b) => a.kode.localeCompare(b.kode));
const lagHjemmelsKoder = (kodeverkVerdier: string[]): string[] => kodeverkVerdier.map(kode => kode);

const buildInitialValues = (klageVurderingResultat?: KlageVurderingResultat): KlageFormType => ({
  klageMedholdArsak: definertKodeverdiEllerUndefined(klageVurderingResultat?.klageMedholdArsak),
  klageVurderingOmgjoer: definertKodeverdiEllerUndefined(klageVurderingResultat?.klageVurderingOmgjoer),
  klageHjemmel: definertKodeverdiEllerUndefined(klageVurderingResultat?.klageHjemmel),
  klageVurdering: definertKodeverdiEllerUndefined(klageVurderingResultat?.klageVurdering),
  begrunnelse: klageVurderingResultat ? klageVurderingResultat.begrunnelse : undefined,
  fritekstTilBrev: klageVurderingResultat ? klageVurderingResultat.fritekstTilBrev : undefined,
});

interface Props {
  previewCallback: (data: KlagevurderingForhåndsvisData) => void;
  saveKlage: (data: TransformedValues) => void;
  readOnlySubmitButton?: boolean;
  klageVurdering: KlageVurdering;
  alleAktuelleHjemler: string[];
}

/**
 * BehandleklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (NFP).
 */
export const BehandleKlageFormNfp = ({
  klageVurdering,
  previewCallback,
  saveKlage,
  readOnlySubmitButton,
  alleAktuelleHjemler,
}: Props) => {
  const { behandling, alleKodeverk, submitCallback, isReadOnly } = usePanelDataContext<KlageVurderingResultatAp>();

  const hjemmlerMedNavn = lagHjemlerMedNavn(alleKodeverk['KlageHjemmel'], lagHjemmelsKoder(alleAktuelleHjemler));
  const intl = useIntl();
  const [visSubmitModal, setVisSubmitModal] = useState<boolean>(false);

  const defaultValues = buildInitialValues(klageVurdering.klageVurderingResultatNFP);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<KlageFormType>();

  const formMethods = useForm<KlageFormType>({
    defaultValues: mellomlagretFormData ?? defaultValues,
  });
  const formValues = formMethods.watch();

  const lukkModal = () => {
    setVisSubmitModal(false);
  };

  const åpneModal = () => {
    setVisSubmitModal(true);
  };

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: KlageFormType) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-16">
        <Heading size="small" level="2">
          {intl.formatMessage({ id: 'Klage.ResolveKlage.Title' })}
        </Heading>
        {!readOnlySubmitButton && (
          <AksjonspunktHelpTextHTML>
            {[<FormattedMessage id="Klage.ResolveKlage.HelpText" key={AksjonspunktKode.BEHANDLE_KLAGE_NFP} />]}
          </AksjonspunktHelpTextHTML>
        )}
        <KlageVurderingRadioOptionsNfp
          readOnly={isReadOnly}
          klageVurdering={formValues.klageVurdering}
          medholdReasons={alleKodeverk['KlageMedholdÅrsak']}
          alleHjemmlerMedNavn={hjemmlerMedNavn}
        />
        <ProsessStegBegrunnelseTextFieldNew
          readOnly={isReadOnly}
          text={intl.formatMessage({ id: 'BehandleKlageFormNfp.BegrunnelseForKlage' })}
        />
        <FritekstBrevTextField språkkode={behandling.språkkode} readOnly={isReadOnly} />
        <HStack justify="space-between">
          <HStack gap="space-16">
            {formValues.klageVurdering === klageVurderingType.STADFESTE_YTELSESVEDTAK && (
              <>
                <Button variant="primary" type="button" size="small" onClick={() => åpneModal()} disabled={isReadOnly}>
                  <FormattedMessage id="Klage.Behandle.Bekreft" />
                </Button>
                <BekreftOgSubmitKlageModal
                  erModalÅpen={visSubmitModal}
                  lukkModal={lukkModal}
                  valgtHjemmel={hjemmlerMedNavn.find(hj => hj.kode === formValues.klageHjemmel)?.navn}
                  readOnly={isReadOnly}
                  isSubmittable={!readOnlySubmitButton}
                  isSubmitting={formMethods.formState.isSubmitting}
                  isDirty={formMethods.formState.isValid}
                />
              </>
            )}
            {formValues.klageVurdering !== klageVurderingType.STADFESTE_YTELSESVEDTAK && (
              <ProsessStegSubmitButtonNew
                isReadOnly={isReadOnly}
                isSubmittable={!readOnlySubmitButton}
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
              />
            )}
            {!isReadOnly &&
              formValues.klageVurdering &&
              formValues.fritekstTilBrev &&
              formValues.fritekstTilBrev.length > 2 && (
                <PreviewKlageLink
                  previewCallback={previewCallback}
                  fritekstTilBrev={formValues.fritekstTilBrev}
                  klageVurdering={formValues.klageVurdering}
                />
              )}
          </HStack>
          {!isReadOnly && (
            <Button
              size="small"
              variant="primary"
              onClick={formMethods.handleSubmit((values: KlageFormType) =>
                saveKlage(transformValuesTempSave(values, AksjonspunktKode.BEHANDLE_KLAGE_NFP)),
              )}
              type="button"
            >
              <FormattedMessage id="Klage.ResolveKlage.TempSaveButton" />
            </Button>
          )}
        </HStack>
      </VStack>
    </RhfForm>
  );
};

const transformValuesTempSave = (values: KlageFormType, aksjonspunktCode: string): TransformedValues => ({
  kode: aksjonspunktCode,
  klageMedholdArsak:
    values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ||
    values.klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK
      ? values.klageMedholdArsak
      : undefined,
  klageVurderingOmgjoer:
    values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : undefined,
  klageHjemmel: values.klageHjemmel,
  fritekstTilBrev: notEmpty(values.fritekstTilBrev),
  begrunnelse: notEmpty(values.begrunnelse),
  klageVurdering: notEmpty(values.klageVurdering),
});
