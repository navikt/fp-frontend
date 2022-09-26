import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { CheckboxField, Form, SelectField } from '@navikt/ft-form-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AlleKodeverk, KlageVurdering, KodeverkMedNavn } from '@fpsak-frontend/types';
import { Heading } from '@navikt/ds-react';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { KlageFormkravKaAp } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/prosess/KlageFormkravAp';
import { FormattedMessage, useIntl } from 'react-intl';
import { required } from '@navikt/ft-form-validators';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { ProsessStegSubmitButtonNew } from '@fpsak-frontend/prosess-felles';
import styles from './formkravKlageForm.less';
import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';
import { erTilbakekreving, påklagdTilbakekrevingInfo } from './FormkravKlageFormNfp';
import FormkravKlageForm, { getPaKlagdVedtak, IKKE_PA_KLAGD_VEDTAK } from './FormkravKlageForm';

type FormValues = {
  erKlagerPart?: boolean;
  erFristOverholdt?: boolean;
  erKonkret?: boolean;
  erSignert?: boolean;
  begrunnelse?: string;
  vedtak?: string;
  sendTilKabal?: boolean;
  klageHjemmel?: string;
}

const buildInitialValues = (klageVurdering: KlageVurdering): FormValues => {
  const klageFormkavResultatKa = klageVurdering ? klageVurdering.klageFormkravResultatKA : null;
  const hjemmelNFP = klageVurdering && klageVurdering.klageVurderingResultatNFP && klageVurdering.klageVurderingResultatNFP.klageHjemmel !== '-'
    ? klageVurdering.klageVurderingResultatNFP.klageHjemmel : null;
  return {
    vedtak: klageFormkavResultatKa ? getPaKlagdVedtak(klageFormkavResultatKa) : '',
    begrunnelse: klageFormkavResultatKa ? klageFormkavResultatKa.begrunnelse : null,
    erKlagerPart: klageFormkavResultatKa ? klageFormkavResultatKa.erKlagerPart : null,
    erKonkret: klageFormkavResultatKa ? klageFormkavResultatKa.erKlageKonkret : null,
    erFristOverholdt: klageFormkavResultatKa ? klageFormkavResultatKa.erKlagefirstOverholdt : null,
    erSignert: klageFormkavResultatKa ? klageFormkavResultatKa.erSignert : null,
    klageHjemmel: hjemmelNFP,
    sendTilKabal: false,
  };
};

export const transformValues = (values: FormValues, avsluttedeBehandlinger: AvsluttetBehandling[]): KlageFormkravKaAp => ({
  erKlagerPart: values.erKlagerPart || values.sendTilKabal,
  erFristOverholdt: values.erFristOverholdt || values.sendTilKabal,
  erKonkret: values.erKonkret || values.sendTilKabal,
  erSignert: values.erSignert || values.sendTilKabal,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA,
  vedtakBehandlingUuid: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? null : values.vedtak,
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak),
  tilbakekrevingInfo: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak),
  sendTilKabal: values.sendTilKabal,
  klageHjemmel: values.klageHjemmel,
});

interface OwnProps {
  klageVurdering: KlageVurdering;
  submitCallback: (data: KlageFormkravKaAp) => Promise<void>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  alleKodeverk: AlleKodeverk;
  alleAktuelleHjemler: string[];
  avsluttedeBehandlinger: AvsluttetBehandling[];
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

const lagHjemler = (kodeverkNavn: KodeverkMedNavn[], kodeverkVerdier: string[]): KodeverkMedNavn[] => kodeverkNavn
  .filter(({ kode }) => kodeverkVerdier.includes(kode))
  .sort((a, b) => a.kode.localeCompare(b.kode));
const lagHjemmelsKoder = (kodeverkVerdier: string[]): string[] => kodeverkVerdier.map((kode) => kode);

/**
 * FormkravKlageFormKA
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for formkrav klage (KA).
 */
export const FormkravKlageFormKa: FunctionComponent<OwnProps> = ({
  readOnly,
  klageVurdering,
  readOnlySubmitButton,
  alleKodeverk,
  alleAktuelleHjemler,
  avsluttedeBehandlinger,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();
  const initialValues = useMemo(() => buildInitialValues(klageVurdering), [klageVurdering]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });
  const formValues = formMethods.watch();
  const alleHjemler = alleKodeverk[kodeverkTyper.KLAGE_HJEMMEL];
  const hjemmelOptions = lagHjemler(alleHjemler, lagHjemmelsKoder(alleAktuelleHjemler))
    .map((mo: KodeverkMedNavn) => <option key={mo.kode} value={mo.kode}>{mo.navn}</option>);
  const kabalEnabled = klageVurdering.enableKabal;
  const behandlesKabal = klageVurdering.underBehandlingKabal;
  const behandletKabal = klageVurdering.behandletAvKabal;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, avsluttedeBehandlinger))}
      setDataOnUnmount={setFormData}
    >
      <FlexContainer>
        {behandlesKabal && readOnly && (
          <FlexRow>
            <FlexColumn>
              <Heading size="small">{intl.formatMessage({ id: 'Klage.Formkrav.SeKabalText' })}</Heading>
              <VerticalSpacer sixteenPx />
            </FlexColumn>
          </FlexRow>
        )}
        {kabalEnabled && !readOnly && (
          <FlexRow>
            <FlexColumn>
              <Heading size="small">{intl.formatMessage({ id: 'Klage.Formkrav.SendTilKabal' })}</Heading>
              <VerticalSpacer fourPx />
              <CheckboxField name="sendTilKabal" label={<FormattedMessage id="Klage.Formkrav.KabalText" />} />
              <VerticalSpacer sixteenPx />
            </FlexColumn>
          </FlexRow>
        )}
        {kabalEnabled && !readOnly && formValues.sendTilKabal && (
          <FlexRow>
            <FlexColumn>
              <SelectField
                readOnly={readOnly}
                name="klageHjemmel"
                selectValues={hjemmelOptions}
                className={readOnly ? styles.selectReadOnly : null}
                label={intl.formatMessage({ id: 'Klage.Formkrav.Hjemmel' })}
                validate={[required]}
              />
              <VerticalSpacer sixteenPx />
            </FlexColumn>
          </FlexRow>
        )}
      </FlexContainer>
      {kabalEnabled && !readOnly && formValues.sendTilKabal && (
        <div className={styles.confirmVilkarForm}>
          <ProsessStegSubmitButtonNew
            isReadOnly={readOnly}
            isSubmittable={!readOnlySubmitButton}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
            hasEmptyRequiredFields={false}
            text={intl.formatMessage({ id: 'Klage.Formkrav.SendTilKabal' })}
          />
        </div>
      )}
      {!formValues.sendTilKabal && !behandlesKabal && !behandletKabal && (
        <FormkravKlageForm
          readOnly={readOnly}
          readOnlySubmitButton={readOnlySubmitButton}
          aksjonspunktCode={aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA}
          alleKodeverk={alleKodeverk}
          avsluttedeBehandlinger={avsluttedeBehandlinger}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
        />
      )}
    </Form>
  );
};

export default FormkravKlageFormKa;
