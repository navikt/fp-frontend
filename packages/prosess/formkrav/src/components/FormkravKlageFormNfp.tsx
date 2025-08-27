import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Detail, Heading, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker,RhfForm, RhfRadioGroupNew, RhfSelect, RhfTextarea } from '@navikt/ft-form-hooks';
import { dateBeforeOrEqualToToday, hasValidDate, hasValidText, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { dateTimeFormat, formaterFritekst } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import type { AlleKodeverk, KlageVurdering } from '@navikt/fp-types';
import type { KlageFormkravAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import type { AvsluttetBehandling } from '../types/avsluttetBehandlingTsType';
import type { FormkravMellomlagretDataType } from '../types/FormkravMellomlagretDataType';
import {
  erTilbakekreving,
  type FormValues,
  IKKE_PA_KLAGD_VEDTAK,
  påklagdTilbakekrevingInfo,
  skalLagreFritekstfelt,
  TempsaveKlageButton,
} from './TempsaveKlageButton';

import styles from './formkravKlageFormNfp.module.css';

const getPaKlagdVedtak = (klageFormkavResultat?: KlageVurdering['klageFormkravResultatKA']): string =>
  klageFormkavResultat?.paKlagdBehandlingUuid ? `${klageFormkavResultat.paKlagdBehandlingUuid}` : IKKE_PA_KLAGD_VEDTAK;

const getKlagBareVedtak = (
  avsluttedeBehandlinger: AvsluttetBehandling[],
  intl: IntlShape,
  alleKodeverk: AlleKodeverk,
): ReactElement[] => {
  const klagBareVedtak = [
    <option key="formkrav" value={IKKE_PA_KLAGD_VEDTAK}>
      {intl.formatMessage({ id: 'Klage.Formkrav.IkkePåklagdVedtak' })}
    </option>,
  ];
  return klagBareVedtak.concat(
    [...avsluttedeBehandlinger]
      .sort((b1, b2) => dayjs(b1.avsluttet).diff(dayjs(b2.avsluttet)))
      .map(({ uuid, type, avsluttet }) => (
        <option key={uuid} value={`${uuid}`}>
          {`${alleKodeverk['BehandlingType'].find(({ kode }) => kode === type)?.navn ?? ''} ${avsluttet ? dateTimeFormat(avsluttet) : ''}`}
        </option>
      )),
  );
};

const getLovHjemmeler = (aksjonspunktCode: string): string =>
  aksjonspunktCode === AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP ? 'Klage.LovhjemmelNFP' : 'Klage.LovhjemmelKA';

const buildInitialValues = (klageVurdering: KlageVurdering): FormValues | undefined => {
  const klageFormkavResultatNfp = klageVurdering ? klageVurdering.klageFormkravResultatNFP : null;
  const klageVurderingResultatNFP = klageVurdering ? klageVurdering.klageVurderingResultatNFP : null;

  if (!klageFormkavResultatNfp) {
    return  {
      mottattDato: klageVurdering ? klageVurdering.mottattDato : undefined,
    };
  }

  return {
    vedtak: getPaKlagdVedtak(klageFormkavResultatNfp),
    begrunnelse: klageFormkavResultatNfp.begrunnelse,
    erKlagerPart: klageFormkavResultatNfp.erKlagerPart,
    erKonkret: klageFormkavResultatNfp.erKlageKonkret,
    erFristOverholdt: klageFormkavResultatNfp.erKlagefirstOverholdt,
    erSignert: klageFormkavResultatNfp.erSignert,
    fritekstTilBrev: klageVurderingResultatNFP ? klageVurderingResultatNFP.fritekstTilBrev : undefined,
    mottattDato: klageVurdering ? klageVurdering.mottattDato : undefined,
  };
};

const transformValues = (values: FormValues, avsluttedeBehandlinger: AvsluttetBehandling[]): KlageFormkravAp => ({
  erKlagerPart: !!values.erKlagerPart,
  erFristOverholdt: !!values.erFristOverholdt,
  erKonkret: !!values.erKonkret,
  erSignert: !!values.erSignert,
  begrunnelse: values.begrunnelse,
  kode: AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP,
  vedtakBehandlingUuid: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? undefined : values.vedtak,
  mottattDato: values.mottattDato,
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak),
  tilbakekrevingInfo: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak),
  fritekstTilBrev: skalLagreFritekstfelt(values) ? values.fritekstTilBrev : undefined,
});

interface Props {
  klageVurdering: KlageVurdering;
  readOnlySubmitButton?: boolean;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  lagreFormkravVurdering: (data: FormkravMellomlagretDataType) => void;
}

/**
 * FormkravklageformNfp
 *
 * Setter opp aksjonspunktet for formkrav klage (NFP).
 */
export const FormkravKlageFormNfp = ({
  klageVurdering,
  readOnlySubmitButton,
  avsluttedeBehandlinger,
  lagreFormkravVurdering,
}: Props) => {
  const intl = useIntl();

  const { behandling, alleKodeverk, submitCallback, isReadOnly } = usePanelDataContext<KlageFormkravAp>();

  const klageBareVedtakOptions = getKlagBareVedtak(avsluttedeBehandlinger, intl, alleKodeverk);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const initialValues = buildInitialValues(klageVurdering);
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const formVerdier = formMethods.watch();

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, avsluttedeBehandlinger))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-16">
        <VStack gap="space-4">
          <Heading size="small" level="3">
            {intl.formatMessage({ id: 'Klage.Formkrav.Title' })}
          </Heading>
          <Detail>
            {intl.formatMessage({ id: getLovHjemmeler(AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP) })}
          </Detail>
        </VStack>
        <VStack gap="space-24">
          {!readOnlySubmitButton && (
            <AksjonspunktHelpTextHTML>
              <FormattedMessage id="Klage.Formkrav.HelpText" />
            </AksjonspunktHelpTextHTML>
          )}
          <VStack gap="space-24">
            <HStack gap="space-40">
              <VStack gap="space-16">
                <RhfSelect
                  name="vedtak"
                  control={formMethods.control}
                  readOnly={isReadOnly}
                  validate={[required]}
                  label={intl.formatMessage({ id: 'Klage.Formkrav.VelgVedtak' })}
                  selectValues={klageBareVedtakOptions}
                  className={styles.selectBredde}
                />
                <RhfDatepicker
                  control={formMethods.control}
                  name="mottattDato"
                  label={intl.formatMessage({ id: 'Klage.Formkrav.MottattDato' })}
                  validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                  isReadOnly={isReadOnly}
                />
              </VStack>
              <VStack gap="space-20">
                <HStack gap="space-16">
                  <RhfRadioGroupNew
                    name="erKlagerPart"
                    control={formMethods.control}
                    label={intl.formatMessage({ id: 'Klage.Formkrav.ErKlagerPart' })}
                    validate={[required]}
                    isReadOnly={isReadOnly}
                  >
                    <HStack gap="space-16">
                      <Radio value={true} size="small">
                        <FormattedMessage id="Klage.Formkrav.Ja" />
                      </Radio>
                      <Radio value={false} size="small">
                        <FormattedMessage id="Klage.Formkrav.Nei" />
                      </Radio>
                    </HStack>
                  </RhfRadioGroupNew>
                  <RhfRadioGroupNew
                    name="erKonkret"
                    control={formMethods.control}
                    label={intl.formatMessage({ id: 'Klage.Formkrav.ErKonkret' })}
                    validate={[required]}
                    isReadOnly={isReadOnly}
                  >
                    <HStack gap="space-16">
                      <Radio value={true} size="small">
                        <FormattedMessage id="Klage.Formkrav.Ja" />
                      </Radio>
                      <Radio value={false} size="small">
                        <FormattedMessage id="Klage.Formkrav.Nei" />
                      </Radio>
                    </HStack>
                  </RhfRadioGroupNew>
                </HStack>
                <HStack gap="space-16">
                  <RhfRadioGroupNew
                    name="erFristOverholdt"
                    control={formMethods.control}
                    label={intl.formatMessage({ id: 'Klage.Formkrav.ErFristOverholdt' })}
                    validate={[required]}
                    isReadOnly={isReadOnly}
                  >
                    <HStack gap="space-16">
                      <Radio value={true} size="small">
                        <FormattedMessage id="Klage.Formkrav.Ja" />
                      </Radio>
                      <Radio value={false} size="small">
                        <FormattedMessage id="Klage.Formkrav.Nei" />
                      </Radio>
                    </HStack>
                  </RhfRadioGroupNew>
                  <RhfRadioGroupNew
                    name="erSignert"
                    control={formMethods.control}
                    label={intl.formatMessage({ id: 'Klage.Formkrav.ErSignert' })}
                    validate={[required]}
                    isReadOnly={isReadOnly}
                  >
                    <HStack gap="space-16">
                      <Radio value={true} size="small">
                        <FormattedMessage id="Klage.Formkrav.Ja" />
                      </Radio>
                      <Radio value={false} size="small">
                        <FormattedMessage id="Klage.Formkrav.Nei" />
                      </Radio>
                    </HStack>
                  </RhfRadioGroupNew>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
          <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
          {skalLagreFritekstfelt(formVerdier) && (
            <RhfTextarea
              name="fritekstTilBrev"
              control={formMethods.control}
              label={intl.formatMessage({ id: 'FormkravKlageFormNfp.Fritekst' })}
              maxLength={100000}
              validate={[required, hasValidText]}
              readOnly={isReadOnly}
              parse={formaterFritekst}
            />
          )}
          <HStack justify="space-between">
            <ProsessStegSubmitButtonNew
              isReadOnly={isReadOnly}
              isSubmittable={!readOnlySubmitButton}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
            <TempsaveKlageButton
              behandlingUuid={behandling.uuid}
              saveKlage={lagreFormkravVurdering}
              avsluttedeBehandlinger={avsluttedeBehandlinger}
              handleSubmit={formMethods.handleSubmit}
              readOnly={isReadOnly}
              aksjonspunktCode={AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP}
            />
          </HStack>
        </VStack>
      </VStack>
    </RhfForm>
  );
};
