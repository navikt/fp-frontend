import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, HStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, KlageVurdering as klageVurderingType, KodeverkType } from '@navikt/fp-kodeverk';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import { KlageVurdering, KlageVurderingResultat, KodeverkMedNavn } from '@navikt/fp-types';
import { KlageVurderingResultatAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelContext } from '@navikt/fp-utils';

import KlageFormType from '../../types/klageFormType';
import BekreftOgSubmitKlageModal from './BekreftOgSubmitKlageModal';
import FritekstBrevTextField from './FritekstKlageBrevTextField';
import KlageVurderingRadioOptionsNfp from './KlageVurderingRadioOptionsNfp';
import { BrevData, PreviewKlageLink } from './PreviewKlageLink';
import TempsaveKlageButton, { TransformedValues } from './TempsaveKlageButton';

import styles from './behandleKlageFormNfp.module.css';

const transformValues = (values: KlageFormType): KlageVurderingResultatAp => ({
  klageMedholdArsak:
    values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageMedholdArsak : undefined,
  klageVurderingOmgjoer:
    values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : undefined,
  klageHjemmel: values.klageHjemmel,
  klageVurdering: values.klageVurdering!,
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

const lagHjemlerMedNavn = (kodeverkNavn: KodeverkMedNavn[], kodeverkVerdier: string[]): KodeverkMedNavn[] =>
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
  previewCallback: (data: BrevData) => void;
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
  const { behandling, alleKodeverk, submitCallback, isReadOnly } = usePanelContext<KlageVurderingResultatAp>();

  const hjemmlerMedNavn = lagHjemlerMedNavn(
    alleKodeverk[KodeverkType.KLAGE_HJEMMEL],
    lagHjemmelsKoder(alleAktuelleHjemler),
  );
  const intl = useIntl();
  const [visSubmitModal, setVisSubmitModal] = useState<boolean>(false);
  const initialValues = useMemo(() => buildInitialValues(klageVurdering.klageVurderingResultatNFP), [klageVurdering]);

  const { formData, setFormData } = useFormData<KlageFormType>();

  const formMethods = useForm<KlageFormType>({
    defaultValues: formData || initialValues,
  });
  const formValues = formMethods.watch();

  const lukkModal = useCallback(() => {
    setVisSubmitModal(false);
  }, []);

  const åpneModal = useCallback(() => {
    setVisSubmitModal(true);
  }, []);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: KlageFormType) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <Heading size="small">{intl.formatMessage({ id: 'Klage.ResolveKlage.Title' })}</Heading>
      <VerticalSpacer fourPx />
      {!readOnlySubmitButton && (
        <AksjonspunktHelpTextHTML>
          {[<FormattedMessage id="Klage.ResolveKlage.HelpText" key={AksjonspunktKode.BEHANDLE_KLAGE_NFP} />]}
        </AksjonspunktHelpTextHTML>
      )}
      <KlageVurderingRadioOptionsNfp
        readOnly={isReadOnly}
        klageVurdering={formValues.klageVurdering}
        medholdReasons={alleKodeverk[KodeverkType.KLAGE_MEDHOLD_ARSAK]}
        alleHjemmlerMedNavn={hjemmlerMedNavn}
      />
      <div className={styles.confirmVilkarForm}>
        <ProsessStegBegrunnelseTextFieldNew
          readOnly={isReadOnly}
          text={intl.formatMessage({ id: 'BehandleKlageFormNfp.BegrunnelseForKlage' })}
        />
        <VerticalSpacer sixteenPx />
        <FritekstBrevTextField sprakkode={behandling.sprakkode} readOnly={isReadOnly} />
        <VerticalSpacer sixteenPx />
        <HStack justify="space-between">
          <HStack gap="4">
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
          <TempsaveKlageButton
            saveKlage={saveKlage}
            handleSubmit={formMethods.handleSubmit}
            readOnly={isReadOnly}
            aksjonspunktCode={AksjonspunktKode.BEHANDLE_KLAGE_NFP}
          />
        </HStack>
      </div>
    </Form>
  );
};
