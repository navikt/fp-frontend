import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { Detail, BodyShort } from '@navikt/ds-react';
import { required } from '@navikt/ft-form-validators';
import {
  PeriodLabel, VerticalSpacer, FaktaGruppe, Image, FlexContainer, FlexRow, FlexColumn,
} from '@navikt/ft-ui-komponenter';
import { Aksjonspunkt, AlleKodeverk } from '@navikt/ft-types';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';

import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@navikt/fp-kodeverk/src/kodeverkTyper';
import {
  MedlemPeriode, Soknad, UtlandsoppholdPeriode,
} from '@navikt/fp-types';
import checkImage from '@navikt/fp-assets/images/check.svg';
import avslaattImage from '@navikt/fp-assets/images/avslaatt.svg';

import MedlemskapBostedSokerView from './MedlemskapBostedSokerView';

import styles from './oppholdINorgeOgAdresserFaktaPanel.less';

const capitalizeFirstLetter = (landNavn: string): string => {
  const string = landNavn.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const sjekkOpphold = (
  opphold: boolean,
  intl: IntlShape,
): ReactElement | undefined => (
  opphold !== undefined && (
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Image
            className={styles.imageWidth}
            src={opphold === true ? checkImage : avslaattImage}
            alt={intl.formatMessage({ id: opphold === true ? 'OppholdINorgeOgAdresserFaktaPanel.Opphold' : 'OppholdINorgeOgAdresserFaktaPanel.IkkeOpphold' })}
          />
        </FlexColumn>
        <FlexColumn>
          <BodyShort size="small">
            <FormattedMessage id={opphold === true ? 'OppholdINorgeOgAdresserFaktaPanel.Yes' : 'OppholdINorgeOgAdresserFaktaPanel.No'} />
          </BodyShort>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  )
);

const lagOppholdIUtland = (
  utlandsOpphold: UtlandsoppholdPeriode[],
): ReactElement[] | undefined => utlandsOpphold && utlandsOpphold.map((u) => (
  <div key={`${u.landNavn}${u.fom}${u.tom}`}>
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <BodyShort size="small">
            {capitalizeFirstLetter(u.landNavn)}
          </BodyShort>
        </FlexColumn>
        <FlexColumn>
          <BodyShort size="small">
            <PeriodLabel showTodayString dateStringFom={u.fom} dateStringTom={u.tom} />
          </BodyShort>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </div>
));

export type FormValues = {
  bosattVurdering?: boolean;
}

interface OwnProps {
  valgtPeriode: MedlemPeriode
  soknad: Soknad,
  aksjonspunkter: Aksjonspunkt[],
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  buildInitialValues?: (periode: MedlemPeriode) => FormValues;
}

/**
 * OppholdINorgeOgAdresserFaktaPanel
 *
 * Er tilknyttet faktapanelet for medlemskap.
 * Viser opphold i innland og utland som er relevante for søker. ReadOnly.
 */
const OppholdINorgeOgAdresserFaktaPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  soknad,
  valgtPeriode,
  aksjonspunkter,
  readOnly,
  alleKodeverk,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();

  const aksjonspunktKode = valgtPeriode.aksjonspunkter.find((apKode) => apKode === aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT);
  const aksjonspunkt = aksjonspunkter.find((ap) => aksjonspunktKode === ap.definisjon);

  const isBosattAksjonspunktClosed = aksjonspunktKode && aksjonspunkt ? !isAksjonspunktOpen(aksjonspunkt.status) : false;

  const { personopplysningBruker, personopplysningAnnenPart } = valgtPeriode;

  return (
    <FaktaGruppe
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT]}
    >
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.col}>
            <FaktaGruppe withoutBorder title={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.OppholdINorge' })}>
              <Detail size="small">
                <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.StayingInNorway" />
              </Detail>
              <VerticalSpacer fourPx />
              {sjekkOpphold(soknad?.oppgittTilknytning?.oppholdNorgeNa, intl)}
              <VerticalSpacer sixteenPx />
              <Detail size="small">
                <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayLast12" />
              </Detail>
              <VerticalSpacer fourPx />
              {sjekkOpphold(soknad?.oppgittTilknytning?.oppholdSistePeriode, intl)}
              <VerticalSpacer eightPx />
              {lagOppholdIUtland(soknad?.oppgittTilknytning?.utlandsoppholdFor)}
              <VerticalSpacer sixteenPx />
              <Detail size="small">
                <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayNext12" />
              </Detail>
              <VerticalSpacer fourPx />
              {sjekkOpphold(soknad?.oppgittTilknytning?.oppholdNestePeriode, intl)}
              <VerticalSpacer eightPx />
              {lagOppholdIUtland(soknad?.oppgittTilknytning?.utlandsoppholdEtter)}
            </FaktaGruppe>
          </FlexColumn>
          <FlexColumn className={styles.col}>
            <FaktaGruppe withoutBorder title={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.BosattAdresser' })}>
              <MedlemskapBostedSokerView
                sokerTypeText={intl.formatMessage({ id: 'BostedSokerFaktaIndex.Soker' })}
                personopplysninger={personopplysningBruker}
                regionTypes={alleKodeverk[kodeverkTyper.REGION]}
                personstatusTypes={alleKodeverk[kodeverkTyper.PERSONSTATUS_TYPE]}
              />
              {personopplysningAnnenPart && (
                <MedlemskapBostedSokerView
                  sokerTypeText={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.Parent' })}
                  personopplysninger={personopplysningAnnenPart}
                  regionTypes={alleKodeverk[kodeverkTyper.REGION]}
                  personstatusTypes={alleKodeverk[kodeverkTyper.PERSONSTATUS_TYPE]}
                />
              )}
            </FaktaGruppe>
            {aksjonspunktKode && (
              <div className={styles.ieFlex}>
                <RadioGroupPanel
                  name="bosattVurdering"
                  hideLegend
                  validate={[required]}
                  isReadOnly={readOnly}
                  isHorizontal
                  isEdited={isBosattAksjonspunktClosed}
                  isTrueOrFalseSelection
                  radios={[{
                    label: intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.ResidingInNorway' }),
                    value: 'true',
                  }, {
                    label: <FormattedMessage
                      id="OppholdINorgeOgAdresserFaktaPanel.NotResidingInNorway"
                      values={{
                        b: (chunks: any) => <b>{chunks}</b>,
                      }}
                    />,
                    value: 'false',
                  }]}
                />
              </div>
            )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </FaktaGruppe>
  );
};

OppholdINorgeOgAdresserFaktaPanel.buildInitialValues = (periode) => ({
  bosattVurdering: periode.bosattVurdering || periode.bosattVurdering === false ? periode.bosattVurdering : undefined,
});

export default OppholdINorgeOgAdresserFaktaPanel;
