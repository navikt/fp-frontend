import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { Label, BodyShort, VStack, HStack } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import { FieldEditedInfo } from '@navikt/fp-fakta-felles';
import { Datepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { FamilieHendelse, Soknad } from '@navikt/fp-types';
import { BekreftDokumentertDatoAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { useFormContext } from 'react-hook-form';
import styles from './dokumentasjonFaktaForm.module.css';

const findAntallBarnUnder15 = (
  fodselsdatoer: Record<number, string>,
  omsorgsovertakelseDato?: string,
): number | string => {
  const nrOfNotNullFodselsdatoer = Object.keys(fodselsdatoer).filter(id => fodselsdatoer[parseInt(id, 10)]).length;
  if (nrOfNotNullFodselsdatoer === 0 || !omsorgsovertakelseDato) {
    return '-';
  }
  const omsorgsdato = moment(omsorgsovertakelseDato).subtract(15, 'years');
  return Object.values(fodselsdatoer)
    .map(fodselsdato => (moment(fodselsdato).isAfter(omsorgsdato) ? 1 : 0))
    .reduce<number>((a, b) => a + b, 0);
};

const isAgeAbove15 = (fodselsdatoer: Record<number, string>, id: number, omsorgsovertakelseDato?: string): boolean =>
  !!fodselsdatoer[id] &&
  !!omsorgsovertakelseDato &&
  moment(fodselsdatoer[id]).isSameOrBefore(moment(omsorgsovertakelseDato).subtract(15, 'years'));

interface OwnProps {
  readOnly: boolean;
  erForeldrepengerFagsak: boolean;
  hasEktefellesBarnAksjonspunkt: boolean;
  editedStatus: FieldEditedInfo;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export type FormValues = {
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  fodselsdatoer?: Record<number, string>;
};

interface StaticFunctions {
  buildInitialValues: (soknad: Soknad, familiehendelse: FamilieHendelse) => FormValues;
  transformValues: (values: FormValues) => BekreftDokumentertDatoAksjonspunktAp;
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

  const { watch } = useFormContext<FormValues>();
  const fodselsdatoer = watch('fodselsdatoer') || {};
  const omsorgsovertakelseDato = watch('omsorgsovertakelseDato');
  const barnetsAnkomstTilNorgeDato = watch('barnetsAnkomstTilNorgeDato');

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'DokumentasjonFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.ADOPSJONSDOKUMENTAJON]}
    >
      <div className={styles.container}>
        <Datepicker
          name="omsorgsovertakelseDato"
          label={
            erForeldrepengerFagsak && hasEktefellesBarnAksjonspunkt
              ? intl.formatMessage({ id: 'DokumentasjonFaktaForm.Stebarnsadopsjon' })
              : intl.formatMessage({ id: 'DokumentasjonFaktaForm.Omsorgsovertakelsesdato' })
          }
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
        <VStack>
          {Object.keys(fodselsdatoer).map((id, i) => (
            <div key={`div-${AksjonspunktCode.ADOPSJONSDOKUMENTAJON}-${id}`}>
              <VerticalSpacer sixteenPx />
              <HStack gap="4">
                <Datepicker
                  name={`fodselsdatoer.${id}`}
                  label={intl.formatMessage(
                    {
                      id: 'DokumentasjonFaktaForm.Fodselsdato',
                    },
                    { number: i + 1 },
                  )}
                  validate={[required, hasValidDate]}
                  isReadOnly={readOnly}
                  isEdited={editedStatus.adopsjonFodelsedatoer ? editedStatus.adopsjonFodelsedatoer[id] : false}
                />
                {!readOnly && isAgeAbove15(fodselsdatoer, parseInt(id, 10), omsorgsovertakelseDato) && (
                  <ExclamationmarkTriangleFillIcon
                    className={styles.image}
                    title={intl.formatMessage({ id: 'DokumentasjonFaktaForm.BarnErOver15Ar' })}
                  />
                )}
              </HStack>
            </div>
          ))}
        </VStack>
        <VerticalSpacer twentyPx />
        <Label size="small">{intl.formatMessage({ id: 'DokumentasjonFaktaForm.AntallBarnSomFyllerVilkaret' })}</Label>
        <BodyShort size="small">{findAntallBarnUnder15(fodselsdatoer, omsorgsovertakelseDato)}</BodyShort>
      </div>
    </FaktaGruppe>
  );
};

DokumentasjonFaktaForm.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse): FormValues => ({
  omsorgsovertakelseDato:
    familiehendelse && familiehendelse.omsorgsovertakelseDato
      ? familiehendelse.omsorgsovertakelseDato
      : soknad.omsorgsovertakelseDato,
  barnetsAnkomstTilNorgeDato:
    familiehendelse && familiehendelse.ankomstNorge ? familiehendelse.ankomstNorge : soknad.barnetsAnkomstTilNorgeDato,
  fodselsdatoer:
    familiehendelse && familiehendelse.adopsjonFodelsedatoer
      ? familiehendelse.adopsjonFodelsedatoer
      : soknad.adopsjonFodelsedatoer,
});

DokumentasjonFaktaForm.transformValues = (values: FormValues): BekreftDokumentertDatoAksjonspunktAp => ({
  kode: AksjonspunktCode.ADOPSJONSDOKUMENTAJON,
  // Desse to variablane skal alltid ha verdi - fix i typescript og fjern ''
  omsorgsovertakelseDato: values.omsorgsovertakelseDato || '',
  fodselsdatoer: values.fodselsdatoer || '',
});

export default DokumentasjonFaktaForm;
