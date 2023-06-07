import React, { FunctionComponent, ReactElement, useCallback } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { Detail, BodyShort } from '@navikt/ds-react';
import { required } from '@navikt/ft-form-validators';
import {
  PeriodLabel,
  VerticalSpacer,
  FaktaGruppe,
  FlexContainer,
  FlexRow,
  FlexColumn,
} from '@navikt/ft-ui-komponenter';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { CheckmarkIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import { KodeverkType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { MedlemPeriode, Soknad, UtlandsoppholdPeriode, Aksjonspunkt, AlleKodeverk } from '@navikt/fp-types';

import MedlemskapBostedSokerView from './MedlemskapBostedSokerView';

import styles from './oppholdINorgeOgAdresserFaktaPanel.module.css';

const capitalizeFirstLetter = (landNavn: string): string => {
  const string = landNavn.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const sjekkOpphold = (opphold: boolean, intl: IntlShape): ReactElement | undefined =>
  opphold !== undefined && (
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          {opphold === true && (
            <CheckmarkIcon
              className={styles.checkmarkIcon}
              title={intl.formatMessage({
                id: 'OppholdINorgeOgAdresserFaktaPanel.Opphold',
              })}
            />
          )}
          {opphold !== true && (
            <ExclamationmarkTriangleFillIcon
              className={styles.exclamationmarkIcon}
              title={intl.formatMessage({
                id: 'OppholdINorgeOgAdresserFaktaPanel.IkkeOpphold',
              })}
            />
          )}
        </FlexColumn>
        <FlexColumn>
          <BodyShort size="small">
            <FormattedMessage
              id={opphold === true ? 'OppholdINorgeOgAdresserFaktaPanel.Yes' : 'OppholdINorgeOgAdresserFaktaPanel.No'}
            />
          </BodyShort>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  );

const lagOppholdIUtland = (utlandsOpphold: UtlandsoppholdPeriode[]): ReactElement[] | undefined =>
  utlandsOpphold &&
  utlandsOpphold.map(u => (
    <div key={`${u.landNavn}${u.fom}${u.tom}`}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <BodyShort size="small">{capitalizeFirstLetter(u.landNavn)}</BodyShort>
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
};

interface OwnProps {
  valgtPeriode: MedlemPeriode;
  soknad: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
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

  const aksjonspunktKode = valgtPeriode.aksjonspunkter.find(
    apKode => apKode === AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT,
  );
  const aksjonspunkt = aksjonspunkter.find(ap => aksjonspunktKode === ap.definisjon);

  const isBosattAksjonspunktClosed =
    aksjonspunktKode && aksjonspunkt ? aksjonspunkt.status !== AksjonspunktStatus.OPPRETTET : false;

  const { personopplysningBruker, personopplysningAnnenPart } = valgtPeriode;

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <FaktaGruppe merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT]}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.col}>
            <FaktaGruppe
              withoutBorder
              title={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.OppholdINorge' })}
            >
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
            <FaktaGruppe
              withoutBorder
              title={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.BosattAdresser' })}
            >
              <MedlemskapBostedSokerView
                sokerTypeText={intl.formatMessage({ id: 'BostedSokerFaktaIndex.Soker' })}
                personopplysninger={personopplysningBruker}
                regionTypes={alleKodeverk[KodeverkType.REGION]}
                personstatusTypes={alleKodeverk[KodeverkType.PERSONSTATUS_TYPE]}
              />
              {personopplysningAnnenPart && (
                <MedlemskapBostedSokerView
                  sokerTypeText={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.Parent' })}
                  personopplysninger={personopplysningAnnenPart}
                  regionTypes={alleKodeverk[KodeverkType.REGION]}
                  personstatusTypes={alleKodeverk[KodeverkType.PERSONSTATUS_TYPE]}
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
                  radios={[
                    {
                      label: intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.ResidingInNorway' }),
                      value: 'true',
                    },
                    {
                      label: (
                        <FormattedMessage
                          id="OppholdINorgeOgAdresserFaktaPanel.NotResidingInNorway"
                          values={{ b: bTag }}
                        />
                      ),
                      value: 'false',
                    },
                  ]}
                />
              </div>
            )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </FaktaGruppe>
  );
};

OppholdINorgeOgAdresserFaktaPanel.buildInitialValues = periode => ({
  bosattVurdering: periode.bosattVurdering || periode.bosattVurdering === false ? periode.bosattVurdering : undefined,
});

export default OppholdINorgeOgAdresserFaktaPanel;
