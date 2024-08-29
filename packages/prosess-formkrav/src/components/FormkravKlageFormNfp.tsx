import React, { FunctionComponent, useMemo, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { Form, RadioGroupPanel, SelectField, TextAreaField } from '@navikt/ft-form-hooks';
import { AksjonspunktCode, KodeverkType, getKodeverknavnFn } from '@navikt/fp-kodeverk';
import { KlageVurdering, AlleKodeverk } from '@navikt/fp-types';
import { KlageFormkravAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import moment from 'moment';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { Detail, HStack, Heading, VStack } from '@navikt/ds-react';

import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DATE_TIME_FORMAT, formaterFritekst } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';

import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';

import styles from './formkravKlageFormNfp.module.css';
import TempsaveKlageButton, {
  IKKE_PA_KLAGD_VEDTAK,
  erTilbakekreving,
  påklagdTilbakekrevingInfo,
  skalLagreFritekstfelt,
} from './TempsaveKlageButton';
import FormkravMellomlagretDataType from '../types/FormkravMellomlagretDataType';

export const getPaKlagdVedtak = (klageFormkavResultat?: KlageVurdering['klageFormkravResultatKA']): string =>
  klageFormkavResultat?.paKlagdBehandlingUuid ? `${klageFormkavResultat.paKlagdBehandlingUuid}` : IKKE_PA_KLAGD_VEDTAK;

const getKlagBareVedtak = (
  avsluttedeBehandlinger: AvsluttetBehandling[],
  intl: IntlShape,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): ReactElement[] => {
  const klagBareVedtak = [
    <option key="formkrav" value={IKKE_PA_KLAGD_VEDTAK}>
      {intl.formatMessage({ id: 'Klage.Formkrav.IkkePåklagdVedtak' })}
    </option>,
  ];
  return klagBareVedtak.concat(
    [...avsluttedeBehandlinger]
      .sort((b1, b2) => moment(b1.avsluttet).diff(moment(b2.avsluttet)))
      .map(behandling => (
        <option key={behandling.uuid} value={`${behandling.uuid}`}>
          {`${getKodeverknavn(behandling.type, KodeverkType.BEHANDLING_TYPE)} ${moment(behandling.avsluttet).format(
            DATE_TIME_FORMAT,
          )}`}
        </option>
      )),
  );
};

const getLovHjemmeler = (aksjonspunktCode: string): string =>
  aksjonspunktCode === AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP ? 'Klage.LovhjemmelNFP' : 'Klage.LovhjemmelKA';

type FormValues = {
  erKlagerPart?: boolean;
  erFristOverholdt?: boolean;
  erKonkret?: boolean;
  erSignert?: boolean;
  begrunnelse?: string;
  vedtak?: string;
  fritekstTilBrev?: string;
};

const buildInitialValues = (klageVurdering: KlageVurdering): FormValues => {
  const klageFormkavResultatNfp = klageVurdering ? klageVurdering.klageFormkravResultatNFP : null;
  const klageVurderingResultatNFP = klageVurdering ? klageVurdering.klageVurderingResultatNFP : null;
  return {
    vedtak: klageFormkavResultatNfp ? getPaKlagdVedtak(klageFormkavResultatNfp) : '',
    begrunnelse: klageFormkavResultatNfp ? klageFormkavResultatNfp.begrunnelse : undefined,
    erKlagerPart: klageFormkavResultatNfp ? klageFormkavResultatNfp.erKlagerPart : undefined,
    erKonkret: klageFormkavResultatNfp ? klageFormkavResultatNfp.erKlageKonkret : undefined,
    erFristOverholdt: klageFormkavResultatNfp ? klageFormkavResultatNfp.erKlagefirstOverholdt : undefined,
    erSignert: klageFormkavResultatNfp ? klageFormkavResultatNfp.erSignert : undefined,
    fritekstTilBrev: klageVurderingResultatNFP ? klageVurderingResultatNFP.fritekstTilBrev : undefined,
  };
};

const transformValues = (values: FormValues, avsluttedeBehandlinger: AvsluttetBehandling[]): KlageFormkravAp => ({
  erKlagerPart: values.erKlagerPart!,
  erFristOverholdt: values.erFristOverholdt!,
  erKonkret: values.erKonkret!,
  erSignert: values.erSignert!,
  begrunnelse: values.begrunnelse,
  kode: AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP,
  vedtakBehandlingUuid: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? undefined : values.vedtak,
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak!),
  tilbakekrevingInfo: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak!),
  fritekstTilBrev: skalLagreFritekstfelt(values) ? values.fritekstTilBrev : undefined,
});

interface OwnProps {
  behandlingUuid: string;
  klageVurdering: KlageVurdering;
  submitCallback: (data: KlageFormkravAp) => Promise<void>;
  readOnlySubmitButton?: boolean;
  alleKodeverk: AlleKodeverk;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  readOnly: boolean;
  lagreFormkravVurdering: (data: FormkravMellomlagretDataType) => Promise<any>;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * FormkravklageformNfp
 *
 * Setter opp aksjonspunktet for formkrav klage (NFP).
 */
const FormkravKlageFormNfp: FunctionComponent<OwnProps> = ({
  behandlingUuid,
  readOnly,
  klageVurdering,
  readOnlySubmitButton,
  alleKodeverk,
  avsluttedeBehandlinger,
  submitCallback,
  lagreFormkravVurdering,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const klageBareVedtakOptions = getKlagBareVedtak(avsluttedeBehandlinger, intl, getKodeverknavn);

  const initialValues = useMemo(() => buildInitialValues(klageVurdering), [klageVurdering]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const formVerdier = formMethods.watch();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, avsluttedeBehandlinger))}
      setDataOnUnmount={setFormData}
    >
      <Heading size="small">{intl.formatMessage({ id: 'Klage.Formkrav.Title' })}</Heading>
      <VerticalSpacer fourPx />
      <Detail>{intl.formatMessage({ id: getLovHjemmeler(AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP) })}</Detail>
      <VerticalSpacer sixteenPx />
      <VStack gap="6">
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
          {[<FormattedMessage id="Klage.Formkrav.HelpText" key={AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP} />]}
        </AksjonspunktHelpTextTemp>
        <VStack gap="6">
          <HStack gap="10">
            <div>
              <SelectField
                readOnly={readOnly}
                validate={[required]}
                name="vedtak"
                label={intl.formatMessage({ id: 'Klage.Formkrav.VelgVedtak' })}
                selectValues={klageBareVedtakOptions}
                className={styles.selectBredde}
              />
            </div>
            <VStack gap="5">
              <HStack gap="4">
                <RadioGroupPanel
                  name="erKlagerPart"
                  label={intl.formatMessage({ id: 'Klage.Formkrav.ErKlagerPart' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                  isHorizontal
                  isTrueOrFalseSelection
                  radios={[
                    {
                      value: 'true',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Ja' }),
                    },
                    {
                      value: 'false',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Nei' }),
                    },
                  ]}
                />
                <RadioGroupPanel
                  name="erKonkret"
                  label={intl.formatMessage({ id: 'Klage.Formkrav.ErKonkret' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                  isHorizontal
                  isTrueOrFalseSelection
                  radios={[
                    {
                      value: 'true',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Ja' }),
                    },
                    {
                      value: 'false',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Nei' }),
                    },
                  ]}
                />
              </HStack>
              <HStack gap="4">
                <RadioGroupPanel
                  name="erFristOverholdt"
                  label={intl.formatMessage({ id: 'Klage.Formkrav.ErFristOverholdt' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                  isHorizontal
                  isTrueOrFalseSelection
                  radios={[
                    {
                      value: 'true',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Ja' }),
                    },
                    {
                      value: 'false',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Nei' }),
                    },
                  ]}
                />
                <RadioGroupPanel
                  name="erSignert"
                  label={intl.formatMessage({ id: 'Klage.Formkrav.ErSignert' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                  isHorizontal
                  isTrueOrFalseSelection
                  radios={[
                    {
                      value: 'true',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Ja' }),
                    },
                    {
                      value: 'false',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Nei' }),
                    },
                  ]}
                />
              </HStack>
            </VStack>
          </HStack>
        </VStack>
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
        {skalLagreFritekstfelt(formVerdier) && (
          <TextAreaField
            name="fritekstTilBrev"
            label={intl.formatMessage({ id: 'FormkravKlageFormNfp.Fritekst' })}
            maxLength={100000}
            readOnly={readOnly}
            parse={formaterFritekst}
          />
        )}
        <HStack justify="space-between">
          <ProsessStegSubmitButtonNew
            isReadOnly={readOnly}
            isSubmittable={!readOnlySubmitButton}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
          />
          <TempsaveKlageButton
            behandlingUuid={behandlingUuid}
            saveKlage={lagreFormkravVurdering}
            avsluttedeBehandlinger={avsluttedeBehandlinger}
            handleSubmit={formMethods.handleSubmit}
            readOnly={readOnly}
            aksjonspunktCode={AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP}
          />
        </HStack>
      </VStack>
    </Form>
  );
};

export default FormkravKlageFormNfp;
