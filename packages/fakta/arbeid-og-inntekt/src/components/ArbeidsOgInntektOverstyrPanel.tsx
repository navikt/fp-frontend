import { type Dispatch, type ReactNode, type SetStateAction, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Button, Heading, HStack, Spacer } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, OverstyringKnapp } from '@navikt/ft-ui-komponenter';
import { dateFormat, isAksjonspunktOpen } from '@navikt/ft-utils';

import type { Aksjonspunkt, ArbeidOgInntektsmelding, BehandlingFpSak, ManueltArbeidsforhold } from '@navikt/fp-types';
import { erAksjonspunktÅpent, ReadOnlyProvider, useReadOnly } from '@navikt/fp-utils';

import type { ArbeidsforholdOgInntektRadData } from '../types/arbeidsforholdOgInntekt';
import { MANUELT_ORG_NR, ManueltLagtTilArbeidsforholdForm } from './ManueltLagtTilArbeidsforholdForm';

interface Props {
  behandling: BehandlingFpSak;
  aksjonspunkt?: Aksjonspunkt;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  erOverstyrer: boolean;
  tabellData: ArbeidsforholdOgInntektRadData[];
  settÅpneRadIndexer: Dispatch<SetStateAction<number[]>>;
  setErOverstyrt: Dispatch<SetStateAction<boolean>>;
  oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void;
}

export const ArbeidsOgInntektOverstyrPanel = ({
  behandling,
  aksjonspunkt,
  arbeidOgInntekt: { arbeidsforhold, inntektsmeldinger, skjæringstidspunkt },
  registrerArbeidsforhold,
  erOverstyrer,
  tabellData,
  settÅpneRadIndexer,
  setErOverstyrt,
  oppdaterTabell,
}: Props) => {
  const readOnly = useReadOnly();

  const [erLokaltOverstyrt, setErLokaltOverstyrt] = useState(false);
  const [skalToggleVisningAvLeggTilArbeidsforhold, setSkalToggleVisningAvLeggTilArbeidsforhold] = useState(false);

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

  const harIngenArbeidsforholdSomErManueltLagtTil = tabellData.every(data => data.arbeidsgiverIdent !== MANUELT_ORG_NR);

  return (
    <>
      <HStack gap="space-16">
        <Heading size="small" level="2">
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" />
        </Heading>
        {erOverstyrer && isAksjonspunktOpen(aksjonspunkt) && !readOnly && (
          <OverstyringKnapp onClick={toggleOverstyring} />
        )}
        <Spacer />
        <BodyShort size="small">
          <FormattedMessage
            id="ArbeidOgInntektFaktaPanel.Skjaringstidspunkt"
            values={{ skjæringspunktDato: dateFormat(skjæringstidspunkt) }}
          />
        </BodyShort>
      </HStack>

      {aksjonspunkt && erAksjonspunktÅpent(aksjonspunkt) && (
        <AksjonspunktHelpTextHTML>{finnAksjonspunktTekster(tabellData)}</AksjonspunktHelpTextHTML>
      )}

      {arbeidsforhold.length === 0 && inntektsmeldinger.length === 0 && erOverstyrer && (
        <Alert variant="info" size="small" className="self-start">
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.IngenArbeidsforhold" />
        </Alert>
      )}
      {erLokaltOverstyrt && harIngenArbeidsforholdSomErManueltLagtTil && !skalToggleVisningAvLeggTilArbeidsforhold && (
        <Button
          size="small"
          variant="tertiary"
          className="self-start"
          icon={<PlusCircleIcon aria-hidden />}
          onClick={() => setSkalToggleVisningAvLeggTilArbeidsforhold(true)}
        >
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold" />
        </Button>
      )}
      {skalToggleVisningAvLeggTilArbeidsforhold && (
        <ReadOnlyProvider readOnly={false}>
          <ManueltLagtTilArbeidsforholdForm
            behandlingUuid={behandling.uuid}
            behandlingVersjon={behandling.versjon}
            registrerArbeidsforhold={registrerArbeidsforhold}
            lukkArbeidsforholdRad={() => setSkalToggleVisningAvLeggTilArbeidsforhold(false)}
            oppdaterTabell={oppdaterTabell}
            erOverstyrt
            erNyttArbeidsforhold
          />
        </ReadOnlyProvider>
      )}
    </>
  );
};

const finnAksjonspunktTekster = (tabellData: ArbeidsforholdOgInntektRadData[]): ReactNode[] => {
  const koder = [];
  if (tabellData.some(d => d.årsak === 'MANGLENDE_INNTEKTSMELDING')) {
    koder.push(<FormattedMessage id="ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding" />);
  }
  if (tabellData.some(d => d.årsak === 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD')) {
    koder.push(<FormattedMessage id="ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger" />);
  }
  return koder;
};
