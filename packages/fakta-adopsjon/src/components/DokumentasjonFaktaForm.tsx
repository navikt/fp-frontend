import React, { FunctionComponent } from 'react';
import { Column, Container, Row } from 'nav-frontend-grid';
import { connect } from 'react-redux';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import moment from 'moment';

import { FieldEditedInfo } from '@fpsak-frontend/fakta-felles';
import { DatepickerField, behandlingFormValueSelector } from '@fpsak-frontend/form';
import { hasValidDate, required } from '@fpsak-frontend/utils';
import { Image, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import advarselImageUrl from '@fpsak-frontend/assets/images/advarsel.svg';
import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';

import useIntl from '../useIntl';

import styles from './dokumentasjonFaktaForm.less';

const findAntallBarnUnder15 = (fodselsdatoer: Record<number, string>, omsorgsovertakelseDato: string): number | string => {
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

const isAgeAbove15 = (fodselsdatoer: Record<number, string>, omsorgsovertakelseDato: string, id: string): boolean => fodselsdatoer[id]
  && omsorgsovertakelseDato
  && moment(fodselsdatoer[id])
    .isSameOrBefore(moment(omsorgsovertakelseDato)
      .subtract(15, 'years'));

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  readOnly: boolean;
  erForeldrepengerFagsak: boolean;
  hasEktefellesBarnAksjonspunkt: boolean;
  editedStatus: FieldEditedInfo;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
}

export type FormValues = {
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  fodselsdatoer?: Record<number, string>;
}

export type TransformedValues = {
  kode: string;
  omsorgsovertakelseDato: string;
  barnetsAnkomstTilNorgeDato: string;
  fodselsdatoer: Record<number, string>;
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, familiehendelse: FamilieHendelse) => FormValues;
  transformValues?: (values: FormValues) => TransformedValues;
}

/**
 * DokumentasjonFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av adopsjonsopplysninger i søknaden.
 */
const DokumentasjonFaktaFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
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
      title={intl.formatMessage({ id: 'DokumentasjonFaktaForm.ApplicationInformation' })}
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
        {erForeldrepengerFagsak && barnetsAnkomstTilNorgeDato && (
          <DatepickerField
            name="barnetsAnkomstTilNorgeDato"
            label={{ id: 'DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge' }}
            validate={[hasValidDate]}
            readOnly={readOnly}
            isEdited={editedStatus.barnetsAnkomstTilNorgeDato}
          />
        )}

        {Object.keys(fodselsdatoer).map((id, i) => (
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
                {(!readOnly && isAgeAbove15(fodselsdatoer, omsorgsovertakelseDato, id)) && (
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

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  ...behandlingFormValueSelector(FORM_NAME, ownProps.behandlingId, ownProps.behandlingVersjon)(
    state, 'fodselsdatoer', 'omsorgsovertakelseDato', 'barnetsAnkomstTilNorgeDato',
  ),
});

const DokumentasjonFaktaForm = connect(mapStateToProps)(DokumentasjonFaktaFormImpl);

DokumentasjonFaktaForm.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: familiehendelse && familiehendelse.omsorgsovertakelseDato ? familiehendelse.omsorgsovertakelseDato : soknad.omsorgsovertakelseDato,
  barnetsAnkomstTilNorgeDato: familiehendelse && familiehendelse.ankomstNorge
    ? familiehendelse.ankomstNorge
    : soknad.barnetsAnkomstTilNorgeDato,
  fodselsdatoer: familiehendelse && familiehendelse.adopsjonFodelsedatoer ? familiehendelse.adopsjonFodelsedatoer : soknad.adopsjonFodelsedatoer,
});

DokumentasjonFaktaForm.transformValues = (values: FormValues): TransformedValues => ({
  kode: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
  omsorgsovertakelseDato: values.omsorgsovertakelseDato,
  barnetsAnkomstTilNorgeDato: values.barnetsAnkomstTilNorgeDato,
  fodselsdatoer: values.fodselsdatoer,
});

export default DokumentasjonFaktaForm;
