import React, { FunctionComponent, ReactElement, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, HStack, VStack } from '@navikt/ds-react';

import { RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { ArrowBox, VerticalSpacer, Tooltip } from '@navikt/ft-ui-komponenter';
import { getLanguageFromSprakkode } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { fagsakYtelseType, AksjonspunktCode, tilbakekrevingVidereBehandling } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Fagsak, TilbakekrevingValg } from '@navikt/fp-types';
import { VurderFeilutbetalingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { QuestionmarkDiamondIcon } from '@navikt/aksel-icons';

import styles from './tilbakekrevSøkerForm.module.css';
import FormValues, { FeilutbetalingFormValues } from '../../types/FormValues';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const IKKE_SEND = 'IKKE_SEND';

const lagHjelpetekstTooltip = (isForeldrepenger: boolean): ReactElement => (
  <FormattedMessage
    id={isForeldrepenger ? 'Simulering.HjelpetekstForeldrepenger' : 'Simulering.HjelpetekstEngangsstonad'}
  />
);

export const transformValues = (values: FormValues): VurderFeilutbetalingAp => {
  const { videreBehandling, varseltekst, begrunnelse } = values;
  if (videreBehandling && videreBehandling.endsWith(IKKE_SEND)) {
    return {
      kode: AksjonspunktCode.VURDER_FEILUTBETALING,
      begrunnelse,
      videreBehandling: tilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT,
    };
  }

  return {
    kode: AksjonspunktCode.VURDER_FEILUTBETALING,
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
    !tilbakekrevingvalg.varseltekst && tilbakekrevingvalg.videreBehandling === tilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT;

  return {
    videreBehandling: harTypeIkkeSendt
      ? tilbakekrevingvalg.videreBehandling + IKKE_SEND
      : tilbakekrevingvalg.videreBehandling,
    varseltekst: tilbakekrevingvalg.varseltekst,
    begrunnelse: aksjonspunkt.begrunnelse,
  };
};

interface OwnProps {
  fagsak: Fagsak;
  sprakkode: string;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  previewCallback: (mottaker: string, fritekst: string) => Promise<any>;
}

const TilbakekrevSøkerForm: FunctionComponent<OwnProps> = ({
  readOnly,
  sprakkode,
  previewCallback,
  aksjonspunkt,
  fagsak,
}) => {
  const intl = useIntl();

  const { watch } = useFormContext<FormValues>();

  const varseltekst = watch('varseltekst');

  const isForeldrepenger = fagsak.fagsakYtelseType === fagsakYtelseType.FORELDREPENGER;

  const previewMessage = useCallback(
    (e: React.MouseEvent): void => {
      previewCallback('', varseltekst || ' ');
      e.preventDefault();
    },
    [varseltekst],
  );

  if (!aksjonspunkt || aksjonspunkt.definisjon !== AksjonspunktCode.VURDER_FEILUTBETALING) {
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
            value: tilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT,
            label: <FormattedMessage id="Simulering.gjennomfør" />,
            element: (
              <div className={styles.varsel}>
                <VerticalSpacer eightPx />
                <ArrowBox alignOffset={20}>
                  <VStack gap="4">
                    <HStack gap="2">
                      <BodyShort size="small" className={styles.bold}>
                        <FormattedMessage id="Simulering.varseltekst" />
                      </BodyShort>
                      <Tooltip content={lagHjelpetekstTooltip(isForeldrepenger)}>
                        <QuestionmarkDiamondIcon className={styles.helpTextImage} />
                      </Tooltip>
                    </HStack>
                    <TextAreaField
                      name="varseltekst"
                      label={intl.formatMessage({ id: 'Simulering.fritekst' })}
                      validate={[required, minLength3, maxLength1500, hasValidText]}
                      maxLength={1500}
                      readOnly={readOnly}
                      // Må erstatte bindestrek kopiert inn fra Word med vanlig bindestrek
                      parse={value => value.toString().replaceAll(/\p{Dash_Punctuation}/gu, '-').replaceAll('\t', ' ')}
                      badges={[
                        {
                          type: 'info',
                          titleText: getLanguageFromSprakkode(sprakkode),
                        },
                      ]}
                    />
                    {!readOnly && (
                      <a href="" onClick={previewMessage} className={styles.previewLink}>
                        <FormattedMessage id="Messages.PreviewText" />
                      </a>
                    )}
                  </VStack>
                </ArrowBox>
              </div>
            ),
          },
          {
            value: `${tilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT}${IKKE_SEND}`,
            label: <FormattedMessage id="Simulering.OpprettMenIkkeSendVarsel" />,
          },
          {
            value: tilbakekrevingVidereBehandling.TILBAKEKR_IGNORER,
            label: <FormattedMessage id="Simulering.avvent" />,
          },
        ]}
      />
    </VStack>
  );
};

export default TilbakekrevSøkerForm;
