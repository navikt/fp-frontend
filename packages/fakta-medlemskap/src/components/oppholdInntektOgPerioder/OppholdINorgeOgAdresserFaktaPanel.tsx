import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { required } from '@navikt/ft-form-validators';
import {
  PeriodLabel, VerticalSpacer, FaktaGruppe, Image,
} from '@navikt/ft-ui-komponenter';
import { Aksjonspunkt, AlleKodeverk } from '@navikt/ft-types';

import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  MedlemPeriode, Soknad, UtlandsoppholdPeriode,
} from '@fpsak-frontend/types';
import checkImage from '@fpsak-frontend/assets/images/check.svg';
import avslaattImage from '@fpsak-frontend/assets/images/avslaatt.svg';

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

const lagOppholdIUtland = (
  utlandsOpphold: UtlandsoppholdPeriode[],
): ReactElement[] | undefined => utlandsOpphold && utlandsOpphold.map((u) => (
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
  bosattVurdering?: boolean;
}

type TransformedValues = {
  kode: string;
  bosattVurdering: boolean;
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
  transformValues?: (values: FormValues) => TransformedValues;
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

  const isBosattAksjonspunktClosed = aksjonspunktKode ? !isAksjonspunktOpen(aksjonspunkt.status) : false;

  const { personopplysningBruker, personopplysningAnnenPart } = valgtPeriode;

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
            {sjekkOpphold(soknad?.oppgittTilknytning?.oppholdNorgeNa, intl)}
            <VerticalSpacer sixteenPx />
            <Undertekst>
              <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayLast12" />
            </Undertekst>
            <VerticalSpacer fourPx />
            {sjekkOpphold(soknad?.oppgittTilknytning?.oppholdSistePeriode, intl)}
            <VerticalSpacer eightPx />
            {lagOppholdIUtland(soknad?.oppgittTilknytning?.utlandsoppholdFor)}
            <VerticalSpacer sixteenPx />
            <Undertekst>
              <FormattedMessage id="OppholdINorgeOgAdresserFaktaPanel.StayingInNorwayNext12" />
            </Undertekst>
            <VerticalSpacer fourPx />
            {sjekkOpphold(soknad?.oppgittTilknytning?.oppholdNestePeriode, intl)}
            <VerticalSpacer eightPx />
            {lagOppholdIUtland(soknad?.oppgittTilknytning?.utlandsoppholdEtter)}
          </FaktaGruppe>
        </Column>
        <Column xs="6">
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
              <RadioGroupField
                name="bosattVurdering"
                validate={[required]}
                bredde="XXL"
                readOnly={readOnly}
                isEdited={isBosattAksjonspunktClosed}
                parse={(value: string) => value === 'true'}
              >
                <RadioOption label={intl.formatMessage({ id: 'OppholdINorgeOgAdresserFaktaPanel.ResidingInNorway' })} value="true" />
                <RadioOption
                  label={(
                    <FormattedMessage
                      id="OppholdINorgeOgAdresserFaktaPanel.NotResidingInNorway"
                      values={{
                        b: (chunks: any) => <b>{chunks}</b>,
                      }}
                    />
                  )}
                  value="false"
                />
              </RadioGroupField>
            </div>
          )}
        </Column>
      </Row>
    </FaktaGruppe>
  );
};

OppholdINorgeOgAdresserFaktaPanel.buildInitialValues = (periode) => ({
  bosattVurdering: periode.bosattVurdering || periode.bosattVurdering === false ? periode.bosattVurdering : undefined,
});

OppholdINorgeOgAdresserFaktaPanel.transformValues = (values) => ({
  kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
  bosattVurdering: values.bosattVurdering,
});

export default OppholdINorgeOgAdresserFaktaPanel;
