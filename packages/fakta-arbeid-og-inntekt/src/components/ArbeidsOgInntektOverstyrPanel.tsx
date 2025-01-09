import React, { useCallback, useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Button, Heading, HStack, Spacer, VStack } from '@navikt/ds-react';
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
import { AksjonspunktVisning } from './Aksjonspunkt';
import { MANUELT_ORG_NR, ManueltLagtTilArbeidsforholdForm } from './manuelt/ManueltLagtTilArbeidsforholdForm';

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
  erAksjonspunktApent: boolean;
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
  erAksjonspunktApent,
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

  const harIngenArbeidsforholdSomErManueltLagtTil = tabellData.every(data => data.arbeidsgiverIdent !== MANUELT_ORG_NR);

  return (
    <>
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" />
        </Heading>
        {erOverstyrer && erAksjonspunktApent && !readOnly && <OverstyringKnapp onClick={toggleOverstyring} />}
        <Spacer />
        <BodyShort>
          <FormattedMessage
            id="ArbeidOgInntektFaktaPanel.Skjaringstidspunkt"
            values={{ skjæringspunktDato: dateFormat(arbeidOgInntekt.skjæringstidspunkt) }}
          />
        </BodyShort>
      </HStack>

      <AksjonspunktVisning behandling={behandling} tabellData={tabellData} aksjonspunkt={aksjonspunkt} />

      {arbeidsforhold.length === 0 && inntektsmeldinger.length === 0 && erOverstyrer && (
        <Alert variant="info" size="small">
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.IngenArbeidsforhold" />
        </Alert>
      )}
      {erOverstyrt && harIngenArbeidsforholdSomErManueltLagtTil && !skalVisePanelForÅLeggeTilArbeidsforhold && (
        <Button
          size="small"
          variant="tertiary"
          icon={<PlusCircleIcon aria-hidden />}
          onClick={() => toggleVisningAvLeggTilArbeidsforhold(true)}
        >
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold" />
        </Button>
      )}

      {skalVisePanelForÅLeggeTilArbeidsforhold && (
        <ManueltLagtTilArbeidsforholdForm
          behandlingUuid={behandling.uuid}
          behandlingVersjon={behandling.versjon}
          isReadOnly={false}
          registrerArbeidsforhold={registrerArbeidsforhold}
          lukkArbeidsforholdRad={() => toggleVisningAvLeggTilArbeidsforhold(false)}
          oppdaterTabell={oppdaterTabell}
          erOverstyrt={erOverstyrt}
          erNyttArbeidsforhold
        />
      )}
    </>
  );
};
