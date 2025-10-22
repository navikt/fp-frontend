import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Button, Heading, HStack, Spacer, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, OverstyringKnapp } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import type { Aksjonspunkt, ArbeidOgInntektsmelding, BehandlingFpSak, ManueltArbeidsforhold } from '@navikt/fp-types';
import { AksjonspunktÅrsak } from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData } from '../types/arbeidsforholdOgInntekt';
import { MANUELT_ORG_NR, ManueltLagtTilArbeidsforholdForm } from './manuelt/ManueltLagtTilArbeidsforholdForm';

import styles from './arbeidsOgInntektOverstyrPanel.module.css';

interface Props {
  behandling: BehandlingFpSak;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  erOverstyrer: boolean;
  tabellData: ArbeidsforholdOgInntektRadData[];
  settÅpneRadIndexer: React.Dispatch<React.SetStateAction<number[]>>;
  setErOverstyrt: React.Dispatch<React.SetStateAction<boolean>>;
  oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void;
}

export const ArbeidsOgInntektOverstyrPanel = ({
  behandling,
  aksjonspunkt,
  readOnly,
  arbeidOgInntekt,
  registrerArbeidsforhold,
  erOverstyrer,
  tabellData,
  settÅpneRadIndexer,
  setErOverstyrt,
  oppdaterTabell,
}: Props) => {
  const intl = useIntl();
  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const [erLokaltOverstyrt, setErLokaltOverstyrt] = useState(false);
  const [skalToggleVisningAvLeggTilArbeidsforhold, toggleVisningAvLeggTilArbeidsforhold] = useState(false);

  const toggleOverstyring = () => {
    setErOverstyrt(true);
    setErLokaltOverstyrt(true);

    const indexForManueltLagtTil = tabellData.findIndex(
      t => t.avklaring?.saksbehandlersVurdering === 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER',
    );
    if (indexForManueltLagtTil !== -1) {
      settÅpneRadIndexer([indexForManueltLagtTil]);
    }
  };

  const aksjonspunktTekstKoder = finnAksjonspunktTekstKoder(tabellData, aksjonspunkt);

  const harIngenArbeidsforholdSomErManueltLagtTil = tabellData.every(data => data.arbeidsgiverIdent !== MANUELT_ORG_NR);

  const erAksjonspunktÅpent = aksjonspunkt?.status === 'OPPR';

  return (
    <VStack gap="space-32">
      <HStack gap="space-16">
        <Heading size="small" level="3">
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" />
        </Heading>
        {erOverstyrer && erAksjonspunktÅpent && !readOnly && <OverstyringKnapp onClick={toggleOverstyring} />}
        <Spacer />
        <BodyShort size="small">
          <FormattedMessage
            id="ArbeidOgInntektFaktaPanel.Skjaringstidspunkt"
            values={{ skjæringspunktDato: dateFormat(arbeidOgInntekt.skjæringstidspunkt) }}
          />
        </BodyShort>
      </HStack>
      <VStack gap="space-16">
        {aksjonspunktTekstKoder.length > 0 && (
          <AksjonspunktHelpTextHTML>
            {aksjonspunktTekstKoder.map(kode => intl.formatMessage({ id: kode })).join(' ')}
          </AksjonspunktHelpTextHTML>
        )}
        {arbeidsforhold.length === 0 && inntektsmeldinger.length === 0 && erOverstyrer && (
          <div className={styles['alertStripe']}>
            <Alert variant="info">
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.IngenArbeidsforhold" />
            </Alert>
          </div>
        )}
        {erLokaltOverstyrt &&
          harIngenArbeidsforholdSomErManueltLagtTil &&
          !skalToggleVisningAvLeggTilArbeidsforhold && (
            <div>
              <Button
                size="small"
                variant="tertiary"
                icon={<PlusCircleIcon aria-hidden />}
                onClick={() => toggleVisningAvLeggTilArbeidsforhold(true)}
              >
                <FormattedMessage id="ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold" />
              </Button>
            </div>
          )}
        {skalToggleVisningAvLeggTilArbeidsforhold && (
          <ManueltLagtTilArbeidsforholdForm
            behandlingUuid={behandling.uuid}
            behandlingVersjon={behandling.versjon}
            isReadOnly={false}
            registrerArbeidsforhold={registrerArbeidsforhold}
            lukkArbeidsforholdRad={() => toggleVisningAvLeggTilArbeidsforhold(false)}
            oppdaterTabell={oppdaterTabell}
            erOverstyrt
            erNyttArbeidsforhold
          />
        )}
      </VStack>
    </VStack>
  );
};

const finnAksjonspunktTekstKoder = (
  tabellData: ArbeidsforholdOgInntektRadData[],
  aksjonspunkt?: Aksjonspunkt,
): string[] => {
  const harManglendeInntektsmeldinger = tabellData.some(d => d.årsak === AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING);
  const harManglandeOpplysninger = tabellData.some(
    d => d.årsak === AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
  );
  const erApÅpent = aksjonspunkt?.status === 'OPPR';

  const koder = [];
  if (erApÅpent && harManglendeInntektsmeldinger) {
    koder.push('ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding');
  }
  if (erApÅpent && harManglandeOpplysninger) {
    koder.push('ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger');
  }
  return koder;
};
