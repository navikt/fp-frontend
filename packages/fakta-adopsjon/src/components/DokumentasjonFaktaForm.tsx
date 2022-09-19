import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { Column, Container, Row } from 'nav-frontend-grid';
import { Label, BodyShort } from '@navikt/ds-react';

import { FieldEditedInfo } from '@fpsak-frontend/fakta-felles';
import { Datepicker, formHooks } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { VerticalSpacer, FaktaGruppe, Image } from '@navikt/ft-ui-komponenter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';
import { BekreftDokumentertDatoAksjonspunktAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import advarselImageUrl from '@fpsak-frontend/assets/images/advarsel.svg';

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

interface OwnProps {
  readOnly: boolean;
  erForeldrepengerFagsak: boolean;
  hasEktefellesBarnAksjonspunkt: boolean;
  editedStatus: FieldEditedInfo;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

export type FormValues = {
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  fodselsdatoer?: Record<number, string>;
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, familiehendelse: FamilieHendelse) => FormValues;
  transformValues?: (values: FormValues) => BekreftDokumentertDatoAksjonspunktAp;
}

/**
 * DokumentasjonFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av adopsjonsopplysninger i søknaden.
 */
const DokumentasjonFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  editedStatus,
  erForeldrepengerFagsak,
  hasEktefellesBarnAksjonspunkt,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();

  const { watch } = formHooks.useFormContext<FormValues>();
  const fodselsdatoer = watch('fodselsdatoer') || {};
  const omsorgsovertakelseDato = watch('omsorgsovertakelseDato');
  const barnetsAnkomstTilNorgeDato = watch('barnetsAnkomstTilNorgeDato');

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'DokumentasjonFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.ADOPSJONSDOKUMENTAJON]}
    >
      <Container className={styles.container}>
        <Datepicker
          name="omsorgsovertakelseDato"
          label={intl.formatMessage({
            id: erForeldrepengerFagsak && hasEktefellesBarnAksjonspunkt
              ? 'DokumentasjonFaktaForm.Stebarnsadopsjon' : 'DokumentasjonFaktaForm.Omsorgsovertakelsesdato',
          })}
          validate={[required, hasValidDate]}
          isReadOnly={readOnly}
          isEdited={editedStatus.omsorgsovertakelseDato}
        />
        {erForeldrepengerFagsak && barnetsAnkomstTilNorgeDato && (
          <>
            <VerticalSpacer sixteenPx />
            <Datepicker
              name="barnetsAnkomstTilNorgeDato"
              label={intl.formatMessage({ id: 'DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge' })}
              validate={[hasValidDate]}
              isReadOnly={readOnly}
              isEdited={editedStatus.barnetsAnkomstTilNorgeDato}
            />
          </>
        )}
        {Object.keys(fodselsdatoer).map((id, i) => (
          <div key={`div-${aksjonspunktCodes.ADOPSJONSDOKUMENTAJON}-${id}`}>
            <VerticalSpacer sixteenPx />
            <Row>
              <Column xs="6">
                <Datepicker
                  name={`fodselsdatoer.${id}`}
                  label={intl.formatMessage({
                    id: 'DokumentasjonFaktaForm.Fodselsdato',
                  }, { number: i + 1 })}
                  validate={[required, hasValidDate]}
                  isReadOnly={readOnly}
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
        <Label size="small">{intl.formatMessage({ id: 'DokumentasjonFaktaForm.AntallBarnSomFyllerVilkaret' })}</Label>
        <BodyShort size="small">{findAntallBarnUnder15(fodselsdatoer, omsorgsovertakelseDato)}</BodyShort>
      </Container>
    </FaktaGruppe>
  );
};

DokumentasjonFaktaForm.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: familiehendelse && familiehendelse.omsorgsovertakelseDato ? familiehendelse.omsorgsovertakelseDato : soknad.omsorgsovertakelseDato,
  barnetsAnkomstTilNorgeDato: familiehendelse && familiehendelse.ankomstNorge
    ? familiehendelse.ankomstNorge
    : soknad.barnetsAnkomstTilNorgeDato,
  fodselsdatoer: familiehendelse && familiehendelse.adopsjonFodelsedatoer ? familiehendelse.adopsjonFodelsedatoer : soknad.adopsjonFodelsedatoer,
});

DokumentasjonFaktaForm.transformValues = (values: FormValues): BekreftDokumentertDatoAksjonspunktAp => ({
  kode: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
  omsorgsovertakelseDato: values.omsorgsovertakelseDato,
  fodselsdatoer: values.fodselsdatoer,
});

export default DokumentasjonFaktaForm;
