import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { QuestionmarkDiamondIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Link, Radio, Tooltip, VStack } from '@navikt/ds-react';
import { RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import { AksjonspunktKode, TilbakekrevingVidereBehandling } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Fagsak, TilbakekrevingValg } from '@navikt/fp-types';
import type { VurderFeilutbetalingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import type { FeilutbetalingFormValues } from '../types/FormValues';

import styles from './tilbakekrevSøkerForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const IKKE_SEND = 'IKKE_SEND';

interface Props {
  fagsak: Fagsak;
  språkkode: string;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  previewCallback: (params: { mottaker: string; fritekst: string }) => void;
}

export const TilbakekrevSøkerForm = ({ readOnly, språkkode, previewCallback, aksjonspunkt, fagsak }: Props) => {
  const intl = useIntl();

  const { watch, control } = useFormContext<FeilutbetalingFormValues>();

  const varseltekst = watch('varseltekst');
  const videreBehandling = watch('videreBehandling');

  const isForeldrepenger = fagsak.fagsakYtelseType === 'FP';

  const previewMessage = (e: React.MouseEvent): void => {
    previewCallback({ mottaker: '', fritekst: varseltekst ?? ' ' });
    e.preventDefault();
  };

  if (!aksjonspunkt || aksjonspunkt.definisjon !== AksjonspunktKode.VURDER_FEILUTBETALING) {
    return null;
  }

  return (
    <VStack gap="space-40" align="start">
      <RhfTextarea
        name="begrunnelse"
        control={control}
        label={intl.formatMessage({ id: 'Simulering.vurdering' })}
        validate={[required, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        readOnly={readOnly}
      />
      <RhfRadioGroup
        name="videreBehandling"
        control={control}
        label={<FormattedMessage id="Simulering.videreBehandling" />}
        validate={[required]}
        isReadOnly={readOnly}
      >
        <VStack gap="space-2">
          <Radio value={TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT} size="small">
            <FormattedMessage id="Simulering.gjennomfør" />
          </Radio>
          {videreBehandling === TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT && (
            <div className={styles.varsel}>
              <ArrowBox alignOffset={20}>
                <VStack gap="space-16">
                  <HStack gap="space-8">
                    <BodyShort size="small" className={styles.bold}>
                      <FormattedMessage id="Simulering.varseltekst" />
                    </BodyShort>
                    <Tooltip
                      content={
                        isForeldrepenger
                          ? intl.formatMessage({ id: 'Simulering.HjelpetekstForeldrepenger' })
                          : intl.formatMessage({ id: 'Simulering.HjelpetekstEngangsstonad' })
                      }
                    >
                      <QuestionmarkDiamondIcon className={styles.helpTextImage} />
                    </Tooltip>
                  </HStack>
                  <RhfTextarea
                    name="varseltekst"
                    control={control}
                    label={intl.formatMessage({ id: 'Simulering.fritekst' })}
                    validate={[required, minLength3, maxLength1500, hasValidText]}
                    maxLength={1500}
                    readOnly={readOnly}
                    parse={formaterFritekst}
                    badges={[
                      {
                        type: 'info',
                        titleText: getLanguageFromSprakkode(språkkode),
                      },
                    ]}
                  />
                  {!readOnly && (
                    <Link href="#" onClick={previewMessage}>
                      <FormattedMessage id="Messages.PreviewText" />
                    </Link>
                  )}
                </VStack>
              </ArrowBox>
            </div>
          )}
          <Radio value={`${TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT}${IKKE_SEND}`} size="small">
            <FormattedMessage id="Simulering.OpprettMenIkkeSendVarsel" />
          </Radio>
          <Radio value={TilbakekrevingVidereBehandling.TILBAKEKR_IGNORER} size="small">
            <FormattedMessage id="Simulering.avvent" />
          </Radio>
        </VStack>
      </RhfRadioGroup>
    </VStack>
  );
};

TilbakekrevSøkerForm.initialValues = (
  aksjonspunkt?: Aksjonspunkt,
  tilbakekrevingvalg?: TilbakekrevingValg,
): FeilutbetalingFormValues | undefined => {
  if (!aksjonspunkt || !tilbakekrevingvalg) {
    return undefined;
  }

  const harTypeIkkeSendt =
    !tilbakekrevingvalg.varseltekst &&
    tilbakekrevingvalg.videreBehandling === TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT;

  return {
    videreBehandling: harTypeIkkeSendt
      ? tilbakekrevingvalg.videreBehandling + IKKE_SEND
      : tilbakekrevingvalg.videreBehandling,
    varseltekst: tilbakekrevingvalg.varseltekst,
    begrunnelse: aksjonspunkt.begrunnelse ?? '',
  };
};

TilbakekrevSøkerForm.transformValues = (values: FeilutbetalingFormValues): VurderFeilutbetalingAp => {
  const { videreBehandling, varseltekst, begrunnelse } = values;
  if (videreBehandling.endsWith(IKKE_SEND)) {
    return {
      kode: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse,
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT,
    };
  }

  return {
    kode: AksjonspunktKode.VURDER_FEILUTBETALING,
    begrunnelse,
    videreBehandling,
    varseltekst,
  };
};
