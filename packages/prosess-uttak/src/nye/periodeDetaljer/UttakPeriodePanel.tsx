import React, {
  ReactElement, FunctionComponent, useCallback, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  AksjonspunktHelpTextHTML,
  EditedIcon, FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { TimeLineButton } from '@navikt/ft-tidslinje';
import { Label } from '@navikt/ds-react';
import { KodeverkType } from '@navikt/ft-kodeverk';

import splitPeriodImageHoverUrl from '@fpsak-frontend/assets/images/splitt_hover.svg';
import splitPeriodImageUrl from '@fpsak-frontend/assets/images/splitt.svg';
import {
  AlleKodeverk, ArbeidsgiverOpplysningerPerId, PeriodeSoker, UttaksresultatPeriode, UttakStonadskontoer,
} from '@fpsak-frontend/types';

import SplittPeriodeModal from './splitt/SplittPeriodeModal';
import UttakPeriodeForm from './UttakPeriodeForm';

import styles from './uttakPeriodePanel.less';

const getCorrectEmptyArbeidsForhold = (
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  periodeTypeKode?: string,
  stonadskonto?: UttakStonadskontoer,
): string[] => {
  const arbeidsForholdMedNullDagerIgjenArray: string[] = [];

  let arbeidsforholdMedPositivSaldoFinnes = false;

  if (stonadskonto?.stonadskontoer[periodeTypeKode]?.aktivitetSaldoDtoList) {
    stonadskonto.stonadskontoer[periodeTypeKode].aktivitetSaldoDtoList.forEach((item) => {
      if (item.saldo === 0) {
        if (item.aktivitetIdentifikator.arbeidsgiverReferanse) {
          const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[item.aktivitetIdentifikator.arbeidsgiverReferanse];
          arbeidsForholdMedNullDagerIgjenArray.push(arbeidsgiverOpplysninger.navn);
        } else {
          const navn = alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE].find((k) => k.kode === item.aktivitetIdentifikator.uttakArbeidType)?.navn;
          arbeidsForholdMedNullDagerIgjenArray.push(navn);
        }
      } else {
        arbeidsforholdMedPositivSaldoFinnes = true;
      }
    });
  }

  return arbeidsforholdMedPositivSaldoFinnes ? arbeidsForholdMedNullDagerIgjenArray : [];
};

const hentApTekst = (
  manuellBehandlingÅrsak: string,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  stonadskonto?: UttakStonadskontoer,
  periodeTypeKode?: string,
): ReactElement[] => {
  const aksjonspunktTekster = [];

  // Fix - ta bort 5001 med verdi fra kodeverk
  if (manuellBehandlingÅrsak === '5001') {
    const arbeidsForhold = getCorrectEmptyArbeidsForhold(alleKodeverk, arbeidsgiverOpplysningerPerId, periodeTypeKode, stonadskonto);
    const arbeidsForholdMedNullDagerIgjen = arbeidsForhold.join();
    if (arbeidsForhold.length > 1) {
      aksjonspunktTekster.push(
        <FormattedMessage
          key="manuellÅrsak"
          id="UttakPanel.manuellBehandlingÅrsakArbeidsforhold"
          values={{ arbeidsforhold: arbeidsForholdMedNullDagerIgjen }}
        />,
      );
    } else if (arbeidsForhold.length === 1) {
      aksjonspunktTekster.push(
        <FormattedMessage
          key="manuellÅrsak"
          id="UttakPanel.manuellBehandlingÅrsakEnskiltArbeidsforhold"
          values={{ arbeidsforhold: arbeidsForhold }}
        />,
      );
    } else {
      aksjonspunktTekster.push(
        <React.Fragment key={`kode-${manuellBehandlingÅrsak}`}>
          {alleKodeverk[KodeverkType.MANUELL_BEHANDLING_AARSAK].find((k) => k.kode === manuellBehandlingÅrsak)?.navn}
        </React.Fragment>,
      );
    }
  } else {
    aksjonspunktTekster.push(
      <React.Fragment key={`kode-${manuellBehandlingÅrsak}`}>
        {alleKodeverk[KodeverkType.MANUELL_BEHANDLING_AARSAK].find((k) => k.kode === manuellBehandlingÅrsak)?.navn}
      </React.Fragment>);
  }

  return aksjonspunktTekster;
};

interface OwnProps {
  perioderSøker: PeriodeSoker[];
  uttaksresultatPeriode: UttaksresultatPeriode;
  valgtPeriodeIndex: number | undefined;
  oppdaterPeriode: (oppdatertPeriode: PeriodeSoker) => void;
  isEdited: boolean;
  isReadOnly: boolean;
  visForrigePeriode: () => void;
  visNestePeriode: () => void;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakStonadskontoer: UttakStonadskontoer;
  setValgtPeriodeIndex: (index: number) => void;
  erTilknyttetStortinget: boolean;
}

const UttakPeriodePanel: FunctionComponent<OwnProps> = ({
  perioderSøker,
  uttaksresultatPeriode,
  valgtPeriodeIndex,
  oppdaterPeriode,
  isEdited,
  isReadOnly,
  visForrigePeriode,
  visNestePeriode,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  uttakStonadskontoer,
  setValgtPeriodeIndex,
  erTilknyttetStortinget,
}) => {
  const intl = useIntl();

  const [visModal, setVisModal] = useState(false);
  const toggleVisningAvModal = useCallback(() => setVisModal((verdi) => !verdi), []);

  const allePerioder = uttaksresultatPeriode.perioderAnnenpart.concat(perioderSøker);
  const valgtPeriode = allePerioder[valgtPeriodeIndex];

  const splittPeriode = useCallback((dato: string) => {

  }, []);

  const lukkPeriode = useCallback(() => setValgtPeriodeIndex(undefined), []);

  const harSoktOmFlerbarnsdager = perioderSøker.some((p) => p.flerbarnsdager === true);

  return (
    <div className={styles.panel}>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
              {isEdited && <EditedIcon />}
            </Label>
          </FlexColumn>
          <FlexColumn>
            {!isReadOnly && (
              <span className={styles.splitPeriodPosition}>
                <Image
                  tabIndex={0}
                  className={styles.splitPeriodImage}
                  src={splitPeriodImageUrl}
                  srcHover={splitPeriodImageHoverUrl}
                  alt={intl.formatMessage({ id: 'UttakTimeLineData.PeriodeData.DelOppPerioden' })}
                  onMouseDown={toggleVisningAvModal}
                  onKeyDown={(e) => (e.key === 'Enter' ? toggleVisningAvModal() : null)}
                />
                <FormattedMessage id="UttakTimeLineData.PeriodeData.DelOppPerioden" />
              </span>
            )}
            {visModal && (
              <SplittPeriodeModal
                cancel={toggleVisningAvModal}
                fomDato={valgtPeriode.fom}
                tomDato={valgtPeriode.tom}
                submit={splittPeriode}
              />
            )}
          </FlexColumn>
          <FlexColumn>
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={visForrigePeriode} />
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={visNestePeriode} />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer sixteenPx />
      {valgtPeriode.manuellBehandlingÅrsak && valgtPeriode.manuellBehandlingÅrsak !== '-' && (
        <>
          <AksjonspunktHelpTextHTML>
            {hentApTekst(
              valgtPeriode.manuellBehandlingÅrsak,
              alleKodeverk,
              arbeidsgiverOpplysningerPerId,
              uttakStonadskontoer,
              valgtPeriode.periodeType)}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer twentyPx />
        </>
      )}
      <UttakPeriodeForm
        valgtPeriode={valgtPeriode}
        oppdaterPeriode={oppdaterPeriode}
        isReadOnly={isReadOnly}
        lukkPeriodeVisning={lukkPeriode}
        alleKodeverk={alleKodeverk}
        årsakFilter={uttaksresultatPeriode.årsakFilter}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
        erTilknyttetStortinget={erTilknyttetStortinget}
      />
    </div>
  );
};

export default UttakPeriodePanel;
