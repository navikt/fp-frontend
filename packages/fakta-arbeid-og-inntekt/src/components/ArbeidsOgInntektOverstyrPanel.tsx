import React, { useCallback, useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Button, Heading, HStack, Spacer } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, OverstyringKnapp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { AksjonspunktStatus, ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  AksjonspunktÅrsak,
  ArbeidOgInntektsmelding,
  Behandling,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';

import { ArbeidsforholdOgInntektRadData } from '../types/arbeidsforholdOgInntekt';
import { MANUELT_ORG_NR, ManueltLagtTilArbeidsforholdForm } from './manuelt/ManueltLagtTilArbeidsforholdForm';

import styles from './arbeidsOgInntektOverstyrPanel.module.css';

const finnAksjonspunktTekstKoder = (
  tabellData: ArbeidsforholdOgInntektRadData[],
  aksjonspunkt?: Aksjonspunkt,
): string[] => {
  const harManglendeInntektsmeldinger = tabellData.some(d => d.årsak === AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING);
  const harManglandeOpplysninger = tabellData.some(
    d => d.årsak === AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
  );
  const erApÅpent = aksjonspunkt?.status === AksjonspunktStatus.OPPRETTET;

  const koder = [];
  if (erApÅpent && harManglendeInntektsmeldinger) {
    koder.push('ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding');
  }
  if (erApÅpent && harManglandeOpplysninger) {
    koder.push('ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger');
  }
  return koder;
};

interface Props {
  behandling: Behandling;
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

  const [erOverstyrt, setLokalErOverstyrt] = useState(false);
  const [skalVisePanelForÅLeggeTilArbeidsforhold, toggleVisningAvLeggTilArbeidsforhold] = useState(false);

  const toggleOverstyring = useCallback(() => {
    setErOverstyrt(true);
    setLokalErOverstyrt(true);

    const indexForManueltLagtTil = tabellData.findIndex(
      t =>
        t.avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
    );
    if (indexForManueltLagtTil !== -1) {
      settÅpneRadIndexer([indexForManueltLagtTil]);
    }
  }, [tabellData, settÅpneRadIndexer]);

  const aksjonspunktTekstKoder = useMemo(
    () => finnAksjonspunktTekstKoder(tabellData, aksjonspunkt),
    [behandling.versjon],
  );

  const harIngenArbeidsforholdSomErManueltLagtTil = tabellData.every(data => data.arbeidsgiverIdent !== MANUELT_ORG_NR);

  const erAksjonspunktÅpent = aksjonspunkt?.status === AksjonspunktStatus.OPPRETTET;

  return (
    <>
      <HStack gap="4">
        <Heading size="small">
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
      <VerticalSpacer thirtyTwoPx />
      {aksjonspunktTekstKoder.length > 0 && (
        <AksjonspunktHelpTextHTML>
          {aksjonspunktTekstKoder.map(kode => intl.formatMessage({ id: kode })).join(' ')}
        </AksjonspunktHelpTextHTML>
      )}
      {arbeidsforhold.length === 0 && inntektsmeldinger.length === 0 && erOverstyrer && (
        <Alert variant="info">
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.IngenArbeidsforhold" />
        </Alert>
      )}
      <VerticalSpacer sixteenPx />
      {erOverstyrt && harIngenArbeidsforholdSomErManueltLagtTil && !skalVisePanelForÅLeggeTilArbeidsforhold && (
        <>
          <VerticalSpacer twentyPx />
          <Button
            size="small"
            variant="tertiary"
            icon={<PlusCircleIcon aria-hidden />}
            onClick={() => toggleVisningAvLeggTilArbeidsforhold(true)}
          >
            <FormattedMessage id="ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold" />
          </Button>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <VerticalSpacer thirtyTwoPx />
      {skalVisePanelForÅLeggeTilArbeidsforhold && (
        <>
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
          <VerticalSpacer fourtyPx />
        </>
      )}
    </>
  );
};
