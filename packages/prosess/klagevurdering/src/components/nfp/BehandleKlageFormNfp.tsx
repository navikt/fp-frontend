import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegBegrunnelseTextField, ProsessStegSubmitButton } from '@navikt/fp-prosess-felles';
import type {
  KlageHjemmel,
  KlageVurdering,
  KlageVurderingOmgjørType,
  KlageVurderingResultat,
  KlageVurderingType,
  KodeverkMedNavn,
} from '@navikt/fp-types';
import type { KlageVurderingResultatAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import type { KlageFormType } from '../../types/klageFormType';
import { BekreftOgSubmitKlageModal } from './BekreftOgSubmitKlageModal';
import { FritekstBrevTextField } from './FritekstKlageBrevTextField';
import { KlageVurderingRadioOptionsNfp } from './KlageVurderingRadioOptionsNfp';
import { type KlagevurderingForhåndsvisData, PreviewKlageLink } from './PreviewKlageLink';

export type TransformedValues = {
  kode: string;
  klageMedholdÅrsak?: string;
  klageVurderingOmgjør?: KlageVurderingOmgjørType;
  klageHjemmel?: KlageHjemmel;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: KlageVurderingType;
};

const transformValues = (values: KlageFormType): KlageVurderingResultatAp => ({
  klageMedholdÅrsak: values.klageVurdering === 'MEDHOLD_I_KLAGE' ? values.klageMedholdÅrsak : undefined,
  klageVurderingOmgjør: values.klageVurdering === 'MEDHOLD_I_KLAGE' ? values.klageVurderingOmgjør : undefined,
  klageHjemmel: values.klageHjemmel,
  klageVurdering: notEmpty(values.klageVurdering),
  fritekstTilBrev: values.fritekstTilBrev,
  begrunnelse: values.begrunnelse,
  kode: AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP,
});

const definertKodeverdiEllerUndefined = <T,>(kode: T | undefined): T | undefined => {
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
  klageMedholdÅrsak: definertKodeverdiEllerUndefined(klageVurderingResultat?.klageMedholdÅrsak ?? undefined),
  klageVurderingOmgjør: definertKodeverdiEllerUndefined(klageVurderingResultat?.klageVurderingOmgjør ?? undefined),
  klageHjemmel: definertKodeverdiEllerUndefined(klageVurderingResultat?.klageHjemmel ?? undefined),
  klageVurdering: definertKodeverdiEllerUndefined(klageVurderingResultat?.klageVurdering ?? undefined),
  begrunnelse: klageVurderingResultat?.begrunnelse ?? undefined,
  fritekstTilBrev: klageVurderingResultat?.fritekstTilBrev ?? undefined,
});

interface Props {
  previewCallback: (data: KlagevurderingForhåndsvisData) => void;
  saveKlage: (data: TransformedValues) => void;
  klageVurdering: KlageVurdering;
  alleAktuelleHjemler: string[];
}

/**
 * BehandleklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (NFP).
 */
export const BehandleKlageFormNfp = ({ klageVurdering, previewCallback, saveKlage, alleAktuelleHjemler }: Props) => {
  const { behandling, alleKodeverk, submitCallback, isReadOnly, isSubmittable } =
    usePanelDataContext<KlageVurderingResultatAp>();

  const hjemmlerMedNavn = lagHjemlerMedNavn(alleKodeverk['KlageHjemmel'], lagHjemmelsKoder(alleAktuelleHjemler));
  const intl = useIntl();
  const [visSubmitModal, setVisSubmitModal] = useState<boolean>(false);

  const defaultValues = buildInitialValues(klageVurdering.klageVurderingResultatNFP ?? undefined);

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
    <RhfForm formMethods={formMethods} setDataOnUnmount={setMellomlagretFormData}>
      <VStack gap="space-16">
        <Heading size="small" level="2">
          {intl.formatMessage({ id: 'Klage.ResolveKlage.Title' })}
        </Heading>
        {isSubmittable && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage id="Klage.ResolveKlage.HelpText" />
          </AksjonspunktHelpTextHTML>
        )}
        <KlageVurderingRadioOptionsNfp
          readOnly={isReadOnly}
          klageVurdering={formValues.klageVurdering}
          medholdReasons={alleKodeverk['KlageMedholdÅrsak']}
          alleHjemmlerMedNavn={hjemmlerMedNavn}
        />
        <ProsessStegBegrunnelseTextField
          readOnly={isReadOnly}
          text={intl.formatMessage({ id: 'BehandleKlageFormNfp.BegrunnelseForKlage' })}
        />
        <FritekstBrevTextField språkkode={behandling.språkkode} readOnly={isReadOnly} />
        <HStack justify="space-between">
          <HStack gap="space-16">
            {formValues.klageVurdering === 'STADFESTE_YTELSESVEDTAK' && (
              <>
                <Button variant="primary" type="button" size="small" onClick={() => åpneModal()} disabled={isReadOnly}>
                  <FormattedMessage id="Klage.Behandle.Bekreft" />
                </Button>
                <BekreftOgSubmitKlageModal
                  erModalÅpen={visSubmitModal}
                  lukkModal={lukkModal}
                  valgtHjemmel={hjemmlerMedNavn.find(hj => hj.kode === formValues.klageHjemmel)?.navn}
                  readOnly={isReadOnly}
                  isSubmittable={isSubmittable}
                  isSubmitting={formMethods.formState.isSubmitting}
                  isDirty={formMethods.formState.isValid}
                  submitCallback={formMethods.handleSubmit(values => submitCallback(transformValues(values)))}
                />
              </>
            )}
            {formValues.klageVurdering !== 'STADFESTE_YTELSESVEDTAK' && (
              <ProsessStegSubmitButton
                isReadOnly={isReadOnly}
                isSubmittable={isSubmittable}
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
                saveKlage(transformValuesTempSave(values, AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP)),
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
  klageMedholdÅrsak:
    values.klageVurdering === 'MEDHOLD_I_KLAGE' || values.klageVurdering === 'OPPHEVE_YTELSESVEDTAK'
      ? values.klageMedholdÅrsak
      : undefined,
  klageVurderingOmgjør: values.klageVurdering === 'MEDHOLD_I_KLAGE' ? values.klageVurderingOmgjør : undefined,
  klageHjemmel: values.klageHjemmel,
  fritekstTilBrev: notEmpty(values.fritekstTilBrev),
  begrunnelse: notEmpty(values.begrunnelse),
  klageVurdering: notEmpty(values.klageVurdering),
});
