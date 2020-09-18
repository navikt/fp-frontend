import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Normaltekst } from 'nav-frontend-typografi';
import moment from 'moment';

import { RadioGroupField, RadioOption, behandlingFormValueSelector } from '@fpsak-frontend/form';
import {
  DateLabel, FlexColumn, FlexContainer, FlexRow, PeriodLabel, Table, TableColumn, TableRow, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { DDMMYYYY_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Aksjonspunkt, Kodeverk, KodeverkMedNavn, MedlemPeriode, Medlemskap, Soknad,
} from '@fpsak-frontend/types';

const headerTextCodes = [
  'PerioderMedMedlemskapFaktaPanel.Period',
  'PerioderMedMedlemskapFaktaPanel.Coverage',
  'PerioderMedMedlemskapFaktaPanel.Status',
  'PerioderMedMedlemskapFaktaPanel.Date',
];

export type PeriodeMedId = MedlemPeriode & { id: number; }

type FixedMedlemskapPeriode = {
  fom: string;
  tom: string;
  dekning: string;
  status: string;
  beslutningsdato: string;
}

interface OwnProps {
  readOnly: boolean;
  fixedMedlemskapPerioder?: FixedMedlemskapPeriode[];
  fodselsdato?: string;
  termindato?: string;
  omsorgsovertakelseDato?: string;
  vurderingTypes: KodeverkMedNavn[];
  hasPeriodeAksjonspunkt: boolean;
  isPeriodAksjonspunktClosed: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface StaticFunctions {
  buildInitialValues?: (periode: PeriodeMedId, medlemskapPerioder: Medlemskap['medlemskapPerioder'], soknad: Soknad,
  aksjonspunkter: Aksjonspunkt[], getKodeverknavn: (kodeverk: Kodeverk) => string) => any,
  transformValues?: (values: any, manuellVurderingTyper: Kodeverk[]) => {
    kode: string;
    medlemskapManuellVurderingType: Kodeverk;
  }
}

/**
 * PerioderMedMedlemskapFaktaPanel
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av perioder (Medlemskapsvilkåret).
 */
export const PerioderMedMedlemskapFaktaPanelImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  hasPeriodeAksjonspunkt,
  isPeriodAksjonspunktClosed,
  fixedMedlemskapPerioder,
  fodselsdato,
  termindato,
  omsorgsovertakelseDato,
  vurderingTypes,
  alleMerknaderFraBeslutter,
}) => {
  const sorterteVurderingstyper = useMemo(() => vurderingTypes.sort((a: any, b: any) => a.navn.localeCompare(b.navn)), [vurderingTypes]);

  if (!fixedMedlemskapPerioder || fixedMedlemskapPerioder.length === 0) {
    return (
      <FaktaGruppe titleCode="PerioderMedMedlemskapFaktaPanel.ApplicationInformation">
        <Normaltekst>
          <FormattedMessage id="PerioderMedMedlemskapFaktaPanel.NoInformation" />
        </Normaltekst>
      </FaktaGruppe>
    );
  }

  return (
    <FaktaGruppe
      titleCode="PerioderMedMedlemskapFaktaPanel.ApplicationInformation"
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE]}
    >
      <Table headerTextCodes={headerTextCodes}>
        {fixedMedlemskapPerioder.map((periode: any) => {
          const key = periode.fom + periode.tom + periode.dekning + periode.status + periode.beslutningsdato;
          return (
            <TableRow key={key} id={key}>
              <TableColumn>
                <PeriodLabel showTodayString dateStringFom={periode.fom} dateStringTom={periode.tom} />
              </TableColumn>
              <TableColumn>
                {periode.dekning}
              </TableColumn>
              <TableColumn>
                {periode.status}
              </TableColumn>
              <TableColumn>
                {periode.beslutningsdato ? <DateLabel dateString={periode.beslutningsdato} /> : null}
              </TableColumn>
            </TableRow>
          );
        })}
      </Table>
      <FlexContainer>
        {hasPeriodeAksjonspunkt
      && (
      <FlexRow>
        <FlexColumn>
          <RadioGroupField name="medlemskapManuellVurderingType.kode" validate={[required]} readOnly={readOnly} isEdited={isPeriodAksjonspunktClosed}>
            {sorterteVurderingstyper.map((type: any) => <RadioOption key={type.kode} value={type.kode} label={type.navn} />)}
          </RadioGroupField>
        </FlexColumn>
      </FlexRow>
      )}
        <VerticalSpacer sixteenPx />
        <FlexRow className="justifyItemsToFlexEnd">
          <FlexColumn>
            {fodselsdato
          && (
          <FormattedMessage
            id="PerioderMedMedlemskapFaktaPanel.Fodselsdato"
            values={{ dato: moment(fodselsdato).format(DDMMYYYY_DATE_FORMAT) }}
          />
          )}
            {termindato
          && (
          <FormattedMessage
            id="PerioderMedMedlemskapFaktaPanel.Termindato"
            values={{ dato: moment(termindato).format(DDMMYYYY_DATE_FORMAT) }}
          />
          )}
            {omsorgsovertakelseDato
          && (
          <FormattedMessage
            id="PerioderMedMedlemskapFaktaPanel.Omsorgsovertakelse"
            values={{ dato: moment(omsorgsovertakelseDato).format(DDMMYYYY_DATE_FORMAT) }}
          />
          )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </FaktaGruppe>
  );
};

PerioderMedMedlemskapFaktaPanelImpl.defaultProps = {
  fixedMedlemskapPerioder: [],
};

interface PureOwnProps {
  id: number;
  behandlingId: number;
  behandlingVersjon: number;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const mapStateToProps = (state: any, ownProps: PureOwnProps) => ({
  ...behandlingFormValueSelector(`OppholdInntektOgPeriodeForm-${ownProps.id}`, ownProps.behandlingId, ownProps.behandlingVersjon)(
    state, 'fixedMedlemskapPerioder', 'fodselsdato', 'termindato',
    'omsorgsovertakelseDato', 'hasPeriodeAksjonspunkt', 'isPeriodAksjonspunktClosed',
  ),
  vurderingTypes: ownProps.alleKodeverk[kodeverkTyper.MEDLEMSKAP_MANUELL_VURDERING_TYPE],
});

const PerioderMedMedlemskapFaktaPanel = connect(mapStateToProps)(PerioderMedMedlemskapFaktaPanelImpl);

PerioderMedMedlemskapFaktaPanel.buildInitialValues = (periode: PeriodeMedId, medlemskapPerioder: Medlemskap['medlemskapPerioder'], soknad: Soknad,
  aksjonspunkter: Aksjonspunkt[], getKodeverknavn: (kodeverk: Kodeverk) => string) => {
  if (medlemskapPerioder === null) {
    return [];
  }

  const fixedMedlemskapPerioder = medlemskapPerioder.map((i) => ({
    fom: i.fom,
    tom: i.tom,
    dekning: getKodeverknavn(i.dekningType),
    status: getKodeverknavn(i.medlemskapType),
    beslutningsdato: i.beslutningsdato,
  }))
    .sort((p1: any, p2: any) => new Date(p1.fom).getTime() - new Date(p2.fom).getTime());
  const filteredAp = aksjonspunkter.filter((ap: any) => periode.aksjonspunkter.includes(ap.definisjon.kode)
      || (periode.aksjonspunkter.length > 0
        && periode.aksjonspunkter.includes(aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE)
        && ap.definisjon.kode === aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP));

  return {
    fixedMedlemskapPerioder,
    medlemskapManuellVurderingType: periode.medlemskapManuellVurderingType,
    fodselsdato: soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined,
    termindato: soknad.termindato,
    omsorgsovertakelseDato: soknad.omsorgsovertakelseDato,
    hasPeriodeAksjonspunkt: filteredAp.length > 0,
    isPeriodAksjonspunktClosed: filteredAp.some((ap: any) => !isAksjonspunktOpen(ap.status.kode)),
  };
};

PerioderMedMedlemskapFaktaPanel.transformValues = (values: any, manuellVurderingTyper: Kodeverk[]) => ({
  kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  medlemskapManuellVurderingType: manuellVurderingTyper.find((m: Kodeverk) => m.kode === values.medlemskapManuellVurderingType.kode),
});

export default PerioderMedMedlemskapFaktaPanel;
