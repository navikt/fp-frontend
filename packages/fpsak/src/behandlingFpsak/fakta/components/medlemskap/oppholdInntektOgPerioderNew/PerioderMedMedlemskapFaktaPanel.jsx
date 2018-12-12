import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Row, Column } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import moment from 'moment';

import { behandlingFormValueSelector } from 'behandlingFpsak/behandlingForm';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import FaktaGruppe from 'behandlingFpsak/fakta/components/FaktaGruppe';
import {
  Table, TableRow, TableColumn, DateLabel, PeriodLabel, VerticalSpacer,
} from '@fpsak-frontend/shared-components';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { getKodeverk } from 'kodeverk/duck';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { required, DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';

const headerTextCodes = [
  'PerioderMedMedlemskapFaktaPanel.Period',
  'PerioderMedMedlemskapFaktaPanel.Coverage',
  'PerioderMedMedlemskapFaktaPanel.Status',
  'PerioderMedMedlemskapFaktaPanel.Date',
];

/**
 * PerioderMedMedlemskapFaktaPanel
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av perioder (Medlemskapsvilkåret).
 */
export const PerioderMedMedlemskapFaktaPanelImpl = ({
  readOnly,
  hasPeriodeAksjonspunkt,
  isPeriodAksjonspunktClosed,
  fixedMedlemskapPerioder,
  fodselsdato,
  termindato,
  omsorgsovertakelseDato,
  vurderingTypes,
}) => {
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
    <FaktaGruppe aksjonspunktCode={aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE} titleCode="PerioderMedMedlemskapFaktaPanel.ApplicationInformation">
      <Table headerTextCodes={headerTextCodes}>
        {fixedMedlemskapPerioder.map((periode) => {
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
        })
        }
      </Table>
      {hasPeriodeAksjonspunkt
      && (
      <Row>
        <Column xs="12">
          <RadioGroupField name="medlemskapManuellVurderingType.kode" validate={[required]} readOnly={readOnly} isEdited={isPeriodAksjonspunktClosed}>
            {vurderingTypes.map(type => <RadioOption key={type.kode} value={type.kode} label={type.navn} />)}
          </RadioGroupField>
        </Column>
      </Row>
      )
      }
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="8" />
        <Column xs="4">
          {fodselsdato
          && (
          <FormattedMessage
            id="PerioderMedMedlemskapFaktaPanel.Fodselsdato"
            values={{ dato: moment(fodselsdato).format(DDMMYYYY_DATE_FORMAT) }}
          />
          )
          }
          {termindato
          && (
          <FormattedMessage
            id="PerioderMedMedlemskapFaktaPanel.Termindato"
            values={{ dato: moment(termindato).format(DDMMYYYY_DATE_FORMAT) }}
          />
          )
          }
          {omsorgsovertakelseDato
          && (
          <FormattedMessage
            id="PerioderMedMedlemskapFaktaPanel.Omsorgsovertakelse"
            values={{ dato: moment(omsorgsovertakelseDato).format(DDMMYYYY_DATE_FORMAT) }}
          />
          )
          }
        </Column>
      </Row>
    </FaktaGruppe>
  );
};

PerioderMedMedlemskapFaktaPanelImpl.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  fixedMedlemskapPerioder: PropTypes.arrayOf(PropTypes.shape()),
  fodselsdato: PropTypes.string,
  termindato: PropTypes.string,
  omsorgsovertakelseDato: PropTypes.string,
  vurderingTypes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  hasPeriodeAksjonspunkt: PropTypes.bool.isRequired,
  isPeriodAksjonspunktClosed: PropTypes.bool.isRequired,
};

PerioderMedMedlemskapFaktaPanelImpl.defaultProps = {
  fodselsdato: undefined,
  termindato: undefined,
  omsorgsovertakelseDato: undefined,
  fixedMedlemskapPerioder: [],
};

const mapStateToProps = (state, ownProps) => ({
  ...behandlingFormValueSelector(`OppholdInntektOgPeriodeForm-${ownProps.id}`)(
    state, 'fixedMedlemskapPerioder', 'fodselsdato', 'termindato',
    'omsorgsovertakelseDato', 'hasPeriodeAksjonspunkt', 'isPeriodAksjonspunktClosed',
  ),
  vurderingTypes: getKodeverk(kodeverkTyper.MEDLEMSKAP_MANUELL_VURDERING_TYPE)(state),
});

const PerioderMedMedlemskapFaktaPanel = connect(mapStateToProps)(PerioderMedMedlemskapFaktaPanelImpl);

PerioderMedMedlemskapFaktaPanel.buildInitialValues = (periode, medlemskapPerioder, soknad, aksjonspunkter) => {
  if (medlemskapPerioder === null) {
    return [];
  }

  const fixedMedlemskapPerioder = medlemskapPerioder
    .map(i => ({
      fom: i.fom,
      tom: i.tom,
      dekning: i.dekningType.navn,
      status: i.medlemskapType.navn,
      beslutningsdato: i.beslutningsdato,
    }))
    .sort((p1, p2) => moment(p1.fom).isSameOrBefore(p2.fom));

  const filteredAp = aksjonspunkter
    .filter(ap => periode.aksjonspunkter.includes(ap.definisjon.kode)
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
    isPeriodAksjonspunktClosed: filteredAp.some(ap => !isAksjonspunktOpen(ap.status.kode)),
  };
};

PerioderMedMedlemskapFaktaPanel.transformValues = (values, manuellVurderingTyper) => ({
  kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  medlemskapManuellVurderingType: manuellVurderingTyper.find(m => m.kode === values.medlemskapManuellVurderingType.kode),
});

export default PerioderMedMedlemskapFaktaPanel;
