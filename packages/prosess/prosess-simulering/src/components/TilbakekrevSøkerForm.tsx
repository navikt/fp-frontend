import React, { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { QuestionmarkDiamondIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Link, Tooltip, VStack } from '@navikt/ds-react';
import { RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import { AksjonspunktKode, FagsakYtelseType, TilbakekrevingVidereBehandling } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Fagsak, TilbakekrevingValg } from '@navikt/fp-types';
import type { VurderFeilutbetalingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import type { FeilutbetalingFormValues, FormValues } from '../types/FormValues';

import styles from './tilbakekrevSøkerForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const IKKE_SEND = 'IKKE_SEND';

export const transformValues = (values: FormValues): VurderFeilutbetalingAp => {
  const { videreBehandling, varseltekst, begrunnelse } = values;
  if (videreBehandling?.endsWith(IKKE_SEND)) {
    return {
      kode: AksjonspunktKode.VURDER_FEILUTBETALING,
      begrunnelse,
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT,
    };
  }

  return {
    kode: AksjonspunktKode.VURDER_FEILUTBETALING,
    begrunnelse,
    videreBehandling: videreBehandling!,
    varseltekst,
  };
};

export const buildInitialValues = (
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

interface Props {
  fagsak: Fagsak;
  sprakkode: string;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  previewCallback: (params: { mottaker: string; fritekst: string }) => void;
}

export const TilbakekrevSøkerForm = ({ readOnly, sprakkode, previewCallback, aksjonspunkt, fagsak }: Props) => {
  const intl = useIntl();

  const { watch } = useFormContext<FormValues>();

  const varseltekst = watch('varseltekst');

  const isForeldrepenger = fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER;

  const previewMessage = useCallback(
    (e: React.MouseEvent): void => {
      previewCallback({ mottaker: '', fritekst: varseltekst ?? ' ' });
      e.preventDefault();
    },
    [varseltekst],
  );

  if (!aksjonspunkt || aksjonspunkt.definisjon !== AksjonspunktKode.VURDER_FEILUTBETALING) {
    return null;
  }

  return (
    <VStack gap="10" align="start">
      <TextAreaField
        name="begrunnelse"
        label={intl.formatMessage({ id: 'Simulering.vurdering' })}
        validate={[required, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        readOnly={readOnly}
      />
      <RadioGroupPanel
        name="videreBehandling"
        label={<FormattedMessage id="Simulering.videreBehandling" />}
        validate={[required]}
        isReadOnly={readOnly}
        radios={[
          {
            value: TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT,
            label: <FormattedMessage id="Simulering.gjennomfør" />,
            element: (
              <div className={styles.varsel}>
                <ArrowBox alignOffset={20}>
                  <VStack gap="4">
                    <HStack gap="2">
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
                    <TextAreaField
                      name="varseltekst"
                      label={intl.formatMessage({ id: 'Simulering.fritekst' })}
                      validate={[required, minLength3, maxLength1500, hasValidText]}
                      maxLength={1500}
                      readOnly={readOnly}
                      parse={formaterFritekst}
                      badges={[
                        {
                          type: 'info',
                          titleText: getLanguageFromSprakkode(sprakkode),
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
            ),
          },
          {
            value: `${TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT}${IKKE_SEND}`,
            label: <FormattedMessage id="Simulering.OpprettMenIkkeSendVarsel" />,
          },
          {
            value: TilbakekrevingVidereBehandling.TILBAKEKR_IGNORER,
            label: <FormattedMessage id="Simulering.avvent" />,
          },
        ]}
      />
    </VStack>
  );
};
