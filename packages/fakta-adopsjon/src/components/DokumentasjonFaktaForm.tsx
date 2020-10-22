import React, { FunctionComponent } from 'react';
import { Column, Container, Row } from 'nav-frontend-grid';
import { connect } from 'react-redux';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import moment from 'moment';

import { DatepickerField, behandlingFormValueSelector } from '@fpsak-frontend/form';
import { hasValidDate, required } from '@fpsak-frontend/utils';
import { Image, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import advarselImageUrl from '@fpsak-frontend/assets/images/advarsel.svg';
import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';

import useIntl from '../useIntl';

import styles from './dokumentasjonFaktaForm.less';

const findAntallBarnUnder15 = (fodselsdatoer: { [key: number ]: string }, omsorgsovertakelseDato: string) => {
  const nrOfNotNullFodselsdatoer = Object.keys(fodselsdatoer)
    .filter((id) => fodselsdatoer[id]).length;
  if (nrOfNotNullFodselsdatoer === 0 || !omsorgsovertakelseDato) {
    return '-';
  }
  const omsorgsdato = moment(omsorgsovertakelseDato)
    .subtract(15, 'years');
  return Object.values(fodselsdatoer)
    .map((fodselsdato) => (moment(fodselsdato)
      .isAfter(omsorgsdato) ? 1 : 0))
    .reduce((a, b) => a + b, 0);
};

const isAgeAbove15 = (fodselsdatoer: { [key: number ]: string }, omsorgsovertakelseDato: string, id: string) => fodselsdatoer[id]
  && omsorgsovertakelseDato
  && moment(fodselsdatoer[id])
    .isSameOrBefore(moment(omsorgsovertakelseDato)
      .subtract(15, 'years'));

interface OwnProps {
  fodselsdatoer?: { [key: number ]: string };
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  readOnly: boolean;
  erForeldrepengerFagsak: boolean;
  hasEktefellesBarnAksjonspunkt: boolean;
  editedStatus: {
    adopsjonFodelsedatoer: { [key: number ]: string };
    omsorgsovertakelseDato: boolean;
    barnetsAnkomstTilNorgeDato: boolean;
  };
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, familiehendelse: FamilieHendelse) => {
    omsorgsovertakelseDato: string;
    barnetsAnkomstTilNorgeDato: string;
    fodselsdatoer: { [key: number ]: string };
  },
  transformValues?: (values: { omsorgsovertakelseDato: string, barnetsAnkomstTilNorgeDato: string, fodselsdatoer: { [key: number ]: string } }) => {
    kode: string;
    omsorgsovertakelseDato: string;
    barnetsAnkomstTilNorgeDato: string;
    fodselsdatoer: { [key: number ]: string };
  },
}

/**
 * DokumentasjonFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av adopsjonsopplysninger i søknaden.
 */
const DokumentasjonFaktaFormImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  fodselsdatoer,
  omsorgsovertakelseDato,
  editedStatus,
  barnetsAnkomstTilNorgeDato,
  erForeldrepengerFagsak,
  hasEktefellesBarnAksjonspunkt,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      titleCode="DokumentasjonFaktaForm.ApplicationInformation"
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.ADOPSJONSDOKUMENTAJON]}
    >
      <Container className={styles.container}>
        <DatepickerField
          name="omsorgsovertakelseDato"
          label={{
            id: erForeldrepengerFagsak && hasEktefellesBarnAksjonspunkt
              ? 'DokumentasjonFaktaForm.Stebarnsadopsjon' : 'DokumentasjonFaktaForm.Omsorgsovertakelsesdato',
          }}
          validate={[required, hasValidDate]}
          readOnly={readOnly}
          isEdited={editedStatus.omsorgsovertakelseDato}
        />
        {erForeldrepengerFagsak && barnetsAnkomstTilNorgeDato
      && (
        <DatepickerField
          name="barnetsAnkomstTilNorgeDato"
          label={{ id: 'DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge' }}
          validate={[hasValidDate]}
          readOnly={readOnly}
          isEdited={editedStatus.barnetsAnkomstTilNorgeDato}
        />
      )}

        {Object.keys(fodselsdatoer)
          .map((id, i) => (
            <div key={`div-${aksjonspunktCodes.ADOPSJONSDOKUMENTAJON}-${id}`}>
              <VerticalSpacer eightPx />
              <Row>
                <Column xs="6">
                  <DatepickerField
                    name={`fodselsdatoer.${id}`}
                    label={{
                      id: 'DokumentasjonFaktaForm.Fodselsdato',
                      args: { number: i + 1 },
                    }}
                    validate={[required, hasValidDate]}
                    readOnly={readOnly}
                    isEdited={editedStatus.adopsjonFodelsedatoer[id]}
                  />
                </Column>
                <Column xs="6">
                  {(!readOnly && isAgeAbove15(fodselsdatoer, omsorgsovertakelseDato, id))
                && (
                  <Image
                    className={styles.image}
                    alt={intl.formatMessage({ id: 'DokumentasjonFaktaForm.BarnErOver15Ar' })}
                    tooltip={intl.formatMessage({ id: 'DokumentasjonFaktaForm.BarnErOver15Ar' })}
                    src={advarselImageUrl}
                  />
                )}

                </Column>
              </Row>
            </div>
          ))}
        <VerticalSpacer twentyPx />
        <Undertekst>{intl.formatMessage({ id: 'DokumentasjonFaktaForm.AntallBarnSomFyllerVilkaret' })}</Undertekst>
        <Normaltekst>{findAntallBarnUnder15(fodselsdatoer, omsorgsovertakelseDato)}</Normaltekst>
      </Container>
    </FaktaGruppe>
  );
};

DokumentasjonFaktaFormImpl.defaultProps = {
  fodselsdatoer: {},
};

const FORM_NAME = 'AdopsjonInfoPanel';

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
}

const mapStateToProps = (state: any, ownProps: PureOwnProps) => ({
  ...behandlingFormValueSelector(FORM_NAME, ownProps.behandlingId, ownProps.behandlingVersjon)(
    state, 'fodselsdatoer', 'omsorgsovertakelseDato', 'barnetsAnkomstTilNorgeDato',
  ),
});

const DokumentasjonFaktaForm = connect(mapStateToProps)(DokumentasjonFaktaFormImpl);

DokumentasjonFaktaForm.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse) => ({
  omsorgsovertakelseDato: familiehendelse && familiehendelse.omsorgsovertakelseDato ? familiehendelse.omsorgsovertakelseDato : soknad.omsorgsovertakelseDato,
  barnetsAnkomstTilNorgeDato: familiehendelse && familiehendelse.ankomstNorge
    ? familiehendelse.ankomstNorge
    : soknad.barnetsAnkomstTilNorgeDato,
  fodselsdatoer: familiehendelse && familiehendelse.adopsjonFodelsedatoer ? familiehendelse.adopsjonFodelsedatoer : soknad.adopsjonFodelsedatoer,
});

DokumentasjonFaktaForm.transformValues = (values: { omsorgsovertakelseDato: string, barnetsAnkomstTilNorgeDato: string, fodselsdatoer: string[] }) => ({
  kode: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
  omsorgsovertakelseDato: values.omsorgsovertakelseDato,
  barnetsAnkomstTilNorgeDato: values.barnetsAnkomstTilNorgeDato,
  fodselsdatoer: values.fodselsdatoer,
});

export default DokumentasjonFaktaForm;
