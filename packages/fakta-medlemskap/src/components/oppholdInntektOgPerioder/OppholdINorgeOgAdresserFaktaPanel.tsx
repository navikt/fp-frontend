import React, { FunctionComponent, ReactElement } from 'react';
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
  Aksjonspunkt, KodeverkMedNavn, MedlemPeriode, Soknad, UtlandsoppholdPeriode,
} from '@fpsak-frontend/types';
import checkImage from '@fpsak-frontend/assets/images/check.svg';
import avslaattImage from '@fpsak-frontend/assets/images/avslaatt.svg';

import useIntl from '../../useIntl';

import styles from './oppholdINorgeOgAdresserFaktaPanel.less';

export type PeriodeMedId = MedlemPeriode & { id: string; }

const capitalizeFirstLetter = (landNavn: string): string => {
  const string = landNavn.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const sjekkOpphold = (opphold: boolean, intl: IntlShape): ReactElement | undefined => (
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

const lagOppholdIUtland = (utlandsOpphold: UtlandsoppholdPeriode[]): ReactElement[] | undefined => utlandsOpphold && utlandsOpphold.map((u) => (
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

export type FormValues = {
  opphold?: Soknad['oppgittTilknytning'];
  foreldre?: {
    isApplicant: boolean;
    personopplysning: MedlemPeriode['personopplysninger'];
  }[];
  hasBosattAksjonspunkt?: boolean;
  isBosattAksjonspunktClosed?: boolean;
  bosattVurdering?: boolean;
}

type TransformedValues = {
  kode: string;
  bosattVurdering: boolean;
}

interface PureOwnProps {
  id: string;
  behandlingId: number;
  behandlingVersjon: number;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  opphold?: Soknad['oppgittTilknytning'];
  foreldre?: {
    isApplicant: boolean;
    personopplysning: MedlemPeriode['personopplysninger'];
  }[];
  hasBosattAksjonspunkt: boolean;
  isBosattAksjonspunktClosed: boolean;
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, periode: PeriodeMedId, aksjonspunkter: Aksjonspunkt[]) => FormValues;
  transformValues?: (values: FormValues) => TransformedValues;
}

/**
 * OppholdINorgeOgAdresserFaktaPanel
 *
 * Presentasjonskomponent. Er tilknyttet faktapanelet for medlemskap.
 * Viser opphold i innland og utland som er relevante for søker. ReadOnly.
 */
const OppholdINorgeOgAdresserFaktaPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  readOnly,
  hasBosattAksjonspunkt,
  isBosattAksjonspunktClosed,
  opphold = {} as Soknad['oppgittTilknytning'],
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
          <FaktaGruppe withoutBorder title={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.OppholdINorge' })}>
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
          <FaktaGruppe withoutBorder title={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.BosattAdresser' })}>
            {foreldre.map((f) => (
              <div key={f.personopplysning.navn}>
                {f.isApplicant && (
                  <BostedSokerFaktaIndex personopplysninger={f.personopplysning} alleKodeverk={alleKodeverk} />
                )}
                {!f.isApplicant && (
                  <BostedSokerFaktaIndex
                    sokerTypeText={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.Parent' })}
                    personopplysninger={f.personopplysning}
                    alleKodeverk={alleKodeverk}
                  />
                )}
              </div>
            ))}
          </FaktaGruppe>
          {hasBosattAksjonspunkt && (
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

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
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

const createParent = (isApplicant: boolean, personopplysning: MedlemPeriode['personopplysninger']): any => ({
  isApplicant,
  personopplysning,
});

OppholdINorgeOgAdresserFaktaPanel.buildInitialValues = (soknad: Soknad, periode: PeriodeMedId, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  let opphold = {} as Soknad['oppgittTilknytning'];

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
    .filter((ap) => periode.aksjonspunkter.includes(aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT)
      || (periode.aksjonspunkter.length > 0
        && periode.aksjonspunkter.includes(aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT)
        && ap.definisjon.kode === aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP));

  return {
    opphold,
    hasBosattAksjonspunkt: filteredAp.length > 0,
    isBosattAksjonspunktClosed: filteredAp.some((ap) => !isAksjonspunktOpen(ap.status.kode)),
    foreldre: parents,
    bosattVurdering: periode.bosattVurdering || periode.bosattVurdering === false
      ? periode.bosattVurdering : undefined,
  };
};

OppholdINorgeOgAdresserFaktaPanel.transformValues = (values: FormValues): TransformedValues => ({
  kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
  bosattVurdering: values.bosattVurdering,
});

export default OppholdINorgeOgAdresserFaktaPanel;
