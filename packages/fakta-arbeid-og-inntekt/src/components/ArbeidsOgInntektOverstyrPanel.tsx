import React, {
  FunctionComponent, useState, useCallback, useMemo,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  Alert, Link, BodyShort, Heading,
} from '@navikt/ds-react';

import { dateFormat } from '@navikt/ft-utils';
import {
  Aksjonspunkt, ArbeidOgInntektsmelding, Behandling, ManueltArbeidsforhold, AksjonspunktÅrsak,
} from '@navikt/fp-types';
import {
  VerticalSpacer, AksjonspunktHelpTextHTML, FloatRight, OverstyringKnapp, Image, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import aksjonspunktStatus from '@navikt/fp-kodeverk/src/aksjonspunktStatus';

import ManueltLagtTilArbeidsforholdForm, { MANUELT_ORG_NR } from './manuelt/ManueltLagtTilArbeidsforholdForm';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';
import addCircleIcon from '../images/add-circle.svg';

import styles from './arbeidsOgInntektOverstyrPanel.less';

const finnAksjonspunktTekstKoder = (
  tabellData: ArbeidsforholdOgInntekt[],
  aksjonspunkt?: Aksjonspunkt,
): string[] => {
  const harManglendeInntektsmeldinger = tabellData.some((d) => d.årsak === AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING);
  const harManglandeOpplysninger = tabellData.some((d) => d.årsak === AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD);
  const erApÅpent = aksjonspunkt?.status === aksjonspunktStatus.OPPRETTET;

  const koder = [];
  if (erApÅpent && harManglendeInntektsmeldinger) {
    koder.push('ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding');
  }
  if (erApÅpent && harManglandeOpplysninger) {
    koder.push('ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger');
  }
  return koder;
};

interface OwnProps {
  behandling: Behandling;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  erOverstyrer: boolean;
  tabellData: ArbeidsforholdOgInntekt[];
  settÅpneRadIndexer: React.Dispatch<React.SetStateAction<number[]>>
  setErOverstyrt: React.Dispatch<React.SetStateAction<boolean>>
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
}

const ArbeidsOgInntektOverstyrPanel: FunctionComponent<OwnProps> = ({
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
}) => {
  const intl = useIntl();
  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const [erOverstyrt, setLokalErOverstyrt] = useState(false);
  const [skalVisePanelForÅLeggeTilArbeidsforhold, toggleVisningAvLeggTilArbeidsforhold] = useState(false);

  const toggleOverstyring = useCallback(() => {
    setErOverstyrt(true);
    setLokalErOverstyrt(true);

    const indexForManueltLagtTil = tabellData
      .findIndex((t) => t.avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER);
    if (indexForManueltLagtTil !== -1) {
      settÅpneRadIndexer([indexForManueltLagtTil]);
    }
  }, [tabellData, settÅpneRadIndexer]);

  const aksjonspunktTekstKoder = useMemo(() => finnAksjonspunktTekstKoder(tabellData, aksjonspunkt), [behandling.versjon]);

  const harIngenArbeidsforholdSomErManueltLagtTil = tabellData.every((data) => data.arbeidsgiverIdent !== MANUELT_ORG_NR);

  const erAksjonspunktÅpent = aksjonspunkt?.status === aksjonspunktStatus.OPPRETTET;

  return (
    <>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Heading size="small"><FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" /></Heading>
                </FlexColumn>
                {erOverstyrer && erAksjonspunktÅpent && !readOnly && (
                  <FlexColumn>
                    <OverstyringKnapp onClick={toggleOverstyring} />
                  </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
          </FlexColumn>
          <FlexColumn>
            <FloatRight>
              <BodyShort size="small">
                <FormattedMessage
                  id="ArbeidOgInntektFaktaPanel.Skjaringstidspunkt"
                  values={{ skjæringspunktDato: dateFormat(arbeidOgInntekt.skjæringstidspunkt) }}
                />
              </BodyShort>
            </FloatRight>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer thirtyTwoPx />
      {aksjonspunktTekstKoder.length > 0 && (
        <AksjonspunktHelpTextHTML>
          {aksjonspunktTekstKoder.map((kode) => intl.formatMessage({ id: kode })).join(' ')}
        </AksjonspunktHelpTextHTML>
      )}
      {arbeidsforhold.length === 0 && inntektsmeldinger.length === 0 && erOverstyrer && (
        <div className={styles.alertStripe}>
          <Alert variant="info">
            <FormattedMessage id="ArbeidOgInntektFaktaPanel.IngenArbeidsforhold" />
          </Alert>
        </div>
      )}
      <VerticalSpacer sixteenPx />
      {erOverstyrt && harIngenArbeidsforholdSomErManueltLagtTil && !skalVisePanelForÅLeggeTilArbeidsforhold && (
        <>
          <VerticalSpacer thirtyTwoPx />
          <Link
            onClick={(e) => {
              e.preventDefault();
              toggleVisningAvLeggTilArbeidsforhold(true);
            }}
            href=""
          >
            <Image src={addCircleIcon} className={styles.leggTilImage} />
            <span>
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold" />
            </span>
          </Link>
          <VerticalSpacer fourtyPx />
        </>
      )}
      <VerticalSpacer thirtyTwoPx />
      {skalVisePanelForÅLeggeTilArbeidsforhold && (
        <>
          <ManueltLagtTilArbeidsforholdForm
            behandlingUuid={behandling.uuid}
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

export default ArbeidsOgInntektOverstyrPanel;
