import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Heading } from '@navikt/ds-react';

import { Form } from '@navikt/ft-form-hooks';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import {
  AksjonspunktHelpTextTemp, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@fpsak-frontend/prosess-felles';
import { KlageVurdering, AlleKodeverk, KlageVurderingResultat } from '@fpsak-frontend/types';
import { KlageVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import KlageFormType from '@fpsak-frontend/prosess-klagevurdering/src/types/klageFormType';

import KlageVurderingRadioOptionsNfp from './KlageVurderingRadioOptionsNfp';
import FritekstBrevTextField from './FritekstKlageBrevTextField';
import PreviewKlageLink, { BrevData } from './PreviewKlageLink';
import TempsaveKlageButton, { TransformedValues } from './TempsaveKlageButton';

import styles from './behandleKlageFormNfp.less';

const transformValues = (values: KlageFormType): KlageVurderingResultatAp => ({
  klageMedholdArsak: values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageMedholdArsak : null,
  klageVurderingOmgjoer: values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : null,
  klageHjemmel: values.klageHjemmel,
  klageVurdering: values.klageVurdering,
  fritekstTilBrev: values.fritekstTilBrev,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
});

const buildInitialValues = (klageVurderingResultat?: KlageVurderingResultat): KlageFormType => ({
  klageMedholdArsak: klageVurderingResultat ? klageVurderingResultat.klageMedholdArsak : '',
  klageVurderingOmgjoer: klageVurderingResultat ? klageVurderingResultat.klageVurderingOmgjoer : null,
  klageHjemmel: klageVurderingResultat ? klageVurderingResultat.klageHjemmel : '',
  klageVurdering: klageVurderingResultat ? klageVurderingResultat.klageVurdering : null,
  begrunnelse: klageVurderingResultat ? klageVurderingResultat.begrunnelse : null,
  fritekstTilBrev: klageVurderingResultat ? klageVurderingResultat.fritekstTilBrev : null,
});

interface OwnProps {
  previewCallback: (data: BrevData) => Promise<any>;
  saveKlage: (data: TransformedValues) => Promise<any>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  sprakkode: string;
  alleKodeverk: AlleKodeverk;
  klageVurdering: KlageVurdering;
  alleAktuelleHjemler: string[];
  submitCallback: (data: KlageVurderingResultatAp) => Promise<void>;
  formData?: KlageFormType;
  setFormData: (data: KlageFormType) => void;
}

/**
 * BehandleklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (NFP).
 */
export const BehandleKlageFormNfp: FunctionComponent<OwnProps> = ({
  readOnly,
  klageVurdering,
  previewCallback,
  saveKlage,
  readOnlySubmitButton,
  sprakkode,
  alleAktuelleHjemler,
  alleKodeverk,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();
  const initialValues = useMemo(() => buildInitialValues(klageVurdering.klageVurderingResultatNFP), [klageVurdering]);
  const formMethods = useForm<KlageFormType>({
    defaultValues: formData || initialValues,
  });

  const formValues = formMethods.watch();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: KlageFormType) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <Heading size="small">{intl.formatMessage({ id: 'Klage.ResolveKlage.Title' })}</Heading>
      <VerticalSpacer fourPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
        {[<FormattedMessage id="Klage.ResolveKlage.HelpText" key={aksjonspunktCodes.BEHANDLE_KLAGE_NFP} />]}
      </AksjonspunktHelpTextTemp>
      <KlageVurderingRadioOptionsNfp
        readOnly={readOnly}
        klageVurdering={formValues.klageVurdering}
        medholdReasons={alleKodeverk[kodeverkTyper.KLAGE_MEDHOLD_ARSAK]}
        alleHjemler={alleKodeverk[kodeverkTyper.KLAGE_HJEMMEL]}
        alleAktuelleHjemler={alleAktuelleHjemler}
      />
      <div className={styles.confirmVilkarForm}>
        <ProsessStegBegrunnelseTextFieldNew
          readOnly={readOnly}
          text={intl.formatMessage({ id: 'BehandleKlageFormNfp.BegrunnelseForKlage' })}
        />
        <VerticalSpacer sixteenPx />
        <FritekstBrevTextField
          sprakkode={sprakkode}
          readOnly={readOnly}
        />
        <VerticalSpacer sixteenPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <ProsessStegSubmitButtonNew
                isReadOnly={readOnly}
                isSubmittable={!readOnlySubmitButton}
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
              />
              {!readOnly && formValues.klageVurdering && formValues.fritekstTilBrev && (formValues.fritekstTilBrev.length > 2) && (
                <PreviewKlageLink
                  previewCallback={previewCallback}
                  fritekstTilBrev={formValues.fritekstTilBrev}
                  klageVurdering={formValues.klageVurdering}
                />
              )}
            </FlexColumn>
            <FlexColumn>
              <TempsaveKlageButton
                saveKlage={saveKlage}
                handleSubmit={formMethods.handleSubmit}
                readOnly={readOnly}
                aksjonspunktCode={aksjonspunktCodes.BEHANDLE_KLAGE_NFP}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </div>
    </Form>
  );
};

export default BehandleKlageFormNfp;
