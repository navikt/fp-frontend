import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import moment from 'moment';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import {
  DateLabel, PeriodLabel, Table, TableColumn, TableRow, VerticalSpacer, FaktaGruppe, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, getKodeverknavnFn } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';
import { Aksjonspunkt, AlleKodeverk } from '@navikt/ft-types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { MedlemPeriode, Medlemskap, Soknad } from '@fpsak-frontend/types';

const headerTextCodes = [
  'PerioderMedMedlemskapFaktaPanel.Period',
  'PerioderMedMedlemskapFaktaPanel.Coverage',
  'PerioderMedMedlemskapFaktaPanel.Status',
  'PerioderMedMedlemskapFaktaPanel.Date',
];

export type FormValues = {
  medlemskapManuellVurderingType?: string;
}

type TransformedValues = {
  kode: string;
  medlemskapManuellVurderingType: string;
}

interface OwnProps {
  valgtPeriode: MedlemPeriode;
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  medlemskap: Medlemskap;
  soknad: Soknad;
  aksjonspunkter: Aksjonspunkt[]
}

interface StaticFunctions {
  buildInitialValues?: (periode: MedlemPeriode, medlemskapPerioder: Medlemskap['medlemskapPerioder']) => FormValues;
  transformValues?: (values: FormValues, manuellVurderingTyper: string[]) => TransformedValues;
}

/**
 * PerioderMedMedlemskapFaktaPanel
 *
 * Setter opp aksjonspunktet for avklaring av perioder (Medlemskapsvilkåret).
 */
const PerioderMedMedlemskapFaktaPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  valgtPeriode,
  readOnly,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  medlemskap,
  soknad,
  aksjonspunkter,
}) => {
  const intl = useIntl();

  const vurderingstyper = alleKodeverk[KodeverkType.MEDLEMSKAP_MANUELL_VURDERING_TYPE];
  const sorterteVurderingstyper = useMemo(() => [...vurderingstyper].sort((a, b) => a.navn.localeCompare(b.navn)), []);

  const sortertePerioder = useMemo(() => [...medlemskap.medlemskapPerioder].sort((p1, p2) => new Date(p1.fom).getTime() - new Date(p2.fom).getTime()),
    [medlemskap.medlemskapPerioder]);

  if (!sortertePerioder || sortertePerioder.length === 0) {
    return (
      <FaktaGruppe title={intl.formatMessage({ id: 'PerioderMedMedlemskapFaktaPanel.ApplicationInformation' })}>
        <Normaltekst>
          <FormattedMessage id="PerioderMedMedlemskapFaktaPanel.NoInformation" />
        </Normaltekst>
      </FaktaGruppe>
    );
  }

  const aksjonspunktKode = valgtPeriode.aksjonspunkter.find((apKode) => apKode === aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE);
  const aksjonspunkt = aksjonspunkter.find((ap) => aksjonspunktKode === ap.definisjon);

  const erAksjonspunktLukket = aksjonspunktKode ? !isAksjonspunktOpen(aksjonspunkt.status) : false;

  const getKodeverk = getKodeverknavnFn(alleKodeverk);

  const fodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
  const { omsorgsovertakelseDato, termindato } = soknad;

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'PerioderMedMedlemskapFaktaPanel.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE]}
    >
      <Table headerTextCodes={headerTextCodes} noHover>
        {sortertePerioder.map((periode) => {
          const dekning = getKodeverk(periode.dekningType, KodeverkType.MEDLEMSKAP_DEKNING);
          const status = getKodeverk(periode.medlemskapType, KodeverkType.MEDLEMSKAP_TYPE);
          const key = periode.fom + periode.tom + dekning + status + periode.beslutningsdato;
          return (
            <TableRow key={key} id={key}>
              <TableColumn>
                <PeriodLabel showTodayString dateStringFom={periode.fom} dateStringTom={periode.tom} />
              </TableColumn>
              <TableColumn>
                {dekning}
              </TableColumn>
              <TableColumn>
                {status}
              </TableColumn>
              <TableColumn>
                {periode.beslutningsdato ? <DateLabel dateString={periode.beslutningsdato} /> : null}
              </TableColumn>
            </TableRow>
          );
        })}
      </Table>
      <FlexContainer>
        {aksjonspunkt && (
          <FlexRow>
            <FlexColumn>
              <RadioGroupField name="medlemskapManuellVurderingType" validate={[required]} readOnly={readOnly} isEdited={erAksjonspunktLukket}>
                {sorterteVurderingstyper.map((type) => <RadioOption key={type.kode} value={type.kode} label={type.navn} />)}
              </RadioGroupField>
            </FlexColumn>
          </FlexRow>
        )}
        <VerticalSpacer sixteenPx />
        <FlexRow className="justifyItemsToFlexEnd">
          <FlexColumn>
            {fodselsdato && (
              <FormattedMessage
                id="PerioderMedMedlemskapFaktaPanel.Fodselsdato"
                values={{ dato: moment(fodselsdato).format(DDMMYYYY_DATE_FORMAT) }}
              />
            )}
            {termindato && (
              <FormattedMessage
                id="PerioderMedMedlemskapFaktaPanel.Termindato"
                values={{ dato: moment(termindato).format(DDMMYYYY_DATE_FORMAT) }}
              />
            )}
            {omsorgsovertakelseDato && (
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

PerioderMedMedlemskapFaktaPanel.buildInitialValues = (periode, medlemskapPerioder) => (medlemskapPerioder !== null ? {
  medlemskapManuellVurderingType: periode.medlemskapManuellVurderingType,
} : {});

PerioderMedMedlemskapFaktaPanel.transformValues = (values, manuellVurderingTyper) => ({
  kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  medlemskapManuellVurderingType: manuellVurderingTyper.find((m) => m === values.medlemskapManuellVurderingType),
});

export default PerioderMedMedlemskapFaktaPanel;
