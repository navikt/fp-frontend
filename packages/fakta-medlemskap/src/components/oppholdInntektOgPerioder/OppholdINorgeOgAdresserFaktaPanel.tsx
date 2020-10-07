import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape } from 'react-intl';
import { connect } from 'react-redux';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { RadioGroupField, RadioOption, behandlingFormValueSelector } from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { required } from '@fpsak-frontend/utils';
import BostedSokerFaktaIndex from '@fpsak-frontend/fakta-bosted-soker';
import {
  Image, PeriodLabel, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, KodeverkMedNavn, MedlemPeriode, Soknad,
} from '@fpsak-frontend/types';
import checkImage from '@fpsak-frontend/assets/images/check.svg';
import avslaattImage from '@fpsak-frontend/assets/images/avslaatt.svg';

import useIntl from '../../useIntl';

import styles from './oppholdINorgeOgAdresserFaktaPanel.less';

export type PeriodeMedId = MedlemPeriode & { id: number; }

const capitalizeFirstLetter = (landNavn: string) => {
  const string = landNavn.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const sjekkOpphold = (opphold: boolean, intl: IntlShape) => (
  opphold !== undefined && (
    <Row>
      <Column xs="1">
        <Image
          className={styles.imageWidth}
          src={opphold === true ? checkImage : avslaattImage}
          alt={intl.formatMessage({ id: opphold === true ? 'OppholdINorgeOgAdresserFaktaPanel.Opphold' : 'OppholdINorgeOgAdresserFaktaPanel.IkkeOpphold' })}
        />
      </Column>
      <Column xs="11">
        <Normaltekst>
          <FormattedMessage id={opphold === true ? 'OppholdINorgeOgAdresserFaktaPanel.Yes' : 'OppholdINorgeOgAdresserFaktaPanel.No'} />
        </Normaltekst>
      </Column>
    </Row>
  )
);

const lagOppholdIUtland = (utlandsOpphold: any) => utlandsOpphold && utlandsOpphold.map((u: any) => (
  <div key={`${u.landNavn}${u.fom}${u.tom}`}>
    <Row>
      <Column xs="4">
        <Normaltekst>
          {capitalizeFirstLetter(u.landNavn)}
        </Normaltekst>
      </Column>
      <Column xs="8">
        <Normaltekst>
          <PeriodLabel showTodayString dateStringFom={u.fom} dateStringTom={u.tom} />
        </Normaltekst>
      </Column>
    </Row>
  </div>
));

interface OwnProps {
  readOnly: boolean;
  hasBosattAksjonspunkt: boolean;
  isBosattAksjonspunktClosed: boolean;
  opphold?: Soknad['oppgittTilknytning'];
  foreldre?: {
    isApplicant: boolean;
    personopplysning: MedlemPeriode['personopplysninger'];
  }[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, periode: PeriodeMedId, aksjonspunkter: Aksjonspunkt[]) => any,
  transformValues?: (values: { bosattVurdering: boolean }) => {
    kode: string;
    bosattVurdering: boolean;
  }
}

/**
 * OppholdINorgeOgAdresserFaktaPanel
 *
 * Presentasjonskomponent. Er tilknyttet faktapanelet for medlemskap.
 * Viser opphold i innland og utland som er relevante for søker. ReadOnly.
 */
const OppholdINorgeOgAdresserFaktaPanelImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  hasBosattAksjonspunkt,
  isBosattAksjonspunktClosed,
  opphold = {},
  foreldre = [],
  alleKodeverk,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT]}
    >
      <Row>
        <Column xs="6">
          <FaktaGruppe withoutBorder titleCode="OppholdINorgeOgAdresserFaktaPanel.OppholdINorge">
            <Undertekst>
              <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.StayingInNorway" />
            </Undertekst>
            <VerticalSpacer fourPx />
            {sjekkOpphold(opphold.oppholdNorgeNa, intl)}
            <VerticalSpacer sixteenPx />
            <Undertekst>
              <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayLast12" />
            </Undertekst>
            <VerticalSpacer fourPx />
            {sjekkOpphold(opphold.oppholdSistePeriode, intl)}
            <VerticalSpacer eightPx />
            {lagOppholdIUtland(opphold.utlandsoppholdFor)}
            <VerticalSpacer sixteenPx />
            <Undertekst>
              <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayNext12" />
            </Undertekst>
            <VerticalSpacer fourPx />
            {sjekkOpphold(opphold.oppholdNestePeriode, intl)}
            <VerticalSpacer eightPx />
            {lagOppholdIUtland(opphold.utlandsoppholdEtter)}
          </FaktaGruppe>
        </Column>
        <Column xs="6">
          <FaktaGruppe withoutBorder titleCode="OppholdINorgeOgAdresserFaktaPanel.BosattAdresser">
            {foreldre.map((f: any) => (
              <div key={f.personopplysning.navn}>
                {f.isApplicant && (
                  <BostedSokerFaktaIndex personopplysninger={f.personopplysning} alleKodeverk={alleKodeverk} />
                )}
                {!f.isApplicant && (
                  <BostedSokerFaktaIndex
                    sokerTypeTextId="OppholdINorgeOgAdresserFaktaPanel.Parent"
                    personopplysninger={f.personopplysning}
                    alleKodeverk={alleKodeverk}
                  />
                )}
              </div>
            ))}
          </FaktaGruppe>
          {hasBosattAksjonspunkt
            && (
              <div className={styles.ieFlex}>
                <RadioGroupField name="bosattVurdering" validate={[required]} bredde="XXL" readOnly={readOnly} isEdited={isBosattAksjonspunktClosed}>
                  <RadioOption label={{ id: 'OppholdINorgeOgAdresserFaktaPanel.ResidingInNorway' }} value />
                  <RadioOption
                    label={(
                      <FormattedMessage
                        id="OppholdINorgeOgAdresserFaktaPanel.NotResidingInNorway"
                        values={{
                          b: (chunks: any) => <b>{chunks}</b>,
                        }}
                      />
                    )}
                    value={false}
                  />
                </RadioGroupField>
              </div>
            )}
        </Column>
      </Row>
    </FaktaGruppe>
  );
};

interface PureOwnProps {
  id: number;
  behandlingId: number;
  behandlingVersjon: number;
}

const mapStateToProps = (state: any, ownProps: PureOwnProps) => {
  const { behandlingId, behandlingVersjon } = ownProps;
  const formName = `OppholdInntektOgPeriodeForm-${ownProps.id}`;
  return {
    opphold: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'opphold'),
    foreldre: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'foreldre'),
    hasBosattAksjonspunkt: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'hasBosattAksjonspunkt'),
    isBosattAksjonspunktClosed: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'isBosattAksjonspunktClosed'),
  };
};

const OppholdINorgeOgAdresserFaktaPanel = connect(mapStateToProps)(OppholdINorgeOgAdresserFaktaPanelImpl);

const createParent = (isApplicant: boolean, personopplysning: MedlemPeriode['personopplysninger']) => ({
  isApplicant,
  personopplysning,
});

OppholdINorgeOgAdresserFaktaPanel.buildInitialValues = (soknad: Soknad, periode: PeriodeMedId, aksjonspunkter: Aksjonspunkt[]) => {
  let opphold = {};

  if (soknad !== null && soknad.oppgittTilknytning !== null) {
    const { oppgittTilknytning } = soknad;
    opphold = {
      oppholdNorgeNa: oppgittTilknytning.oppholdNorgeNa,
      oppholdNestePeriode: oppgittTilknytning.oppholdNestePeriode,
      oppholdSistePeriode: oppgittTilknytning.oppholdSistePeriode,
      utlandsoppholdFor: oppgittTilknytning.utlandsoppholdFor,
      utlandsoppholdEtter: oppgittTilknytning.utlandsoppholdEtter,
    };
  }

  const { personopplysninger } = periode;
  const parents = [createParent(true, personopplysninger)];
  if (personopplysninger.annenPart) {
    parents.push(createParent(false, personopplysninger.annenPart));
  }

  const filteredAp = aksjonspunkter
    .filter((ap: any) => periode.aksjonspunkter.includes(aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT)
      || (periode.aksjonspunkter.length > 0
        && periode.aksjonspunkter.includes(aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT)
        && ap.definisjon.kode === aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP));

  return {
    opphold,
    hasBosattAksjonspunkt: filteredAp.length > 0,
    isBosattAksjonspunktClosed: filteredAp.some((ap: any) => !isAksjonspunktOpen(ap.status.kode)),
    foreldre: parents,
    bosattVurdering: periode.bosattVurdering || periode.bosattVurdering === false
      ? periode.bosattVurdering : undefined,
  };
};

OppholdINorgeOgAdresserFaktaPanel.transformValues = (values: { bosattVurdering: boolean }) => ({
  kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
  bosattVurdering: values.bosattVurdering,
});

export default OppholdINorgeOgAdresserFaktaPanel;
