import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';
import { Datepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import moment from 'moment';

import { type FieldEditedInfo } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { FamilieHendelse, Soknad } from '@navikt/fp-types';
import type { BekreftDokumentertDatoAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './dokumentasjonFaktaForm.module.css';

export type FormValues = {
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  fodselsdatoer?: Record<number, string>;
};

interface Props {
  readOnly: boolean;
  erForeldrepengerFagsak: boolean;
  hasEktefellesBarnAksjonspunkt: boolean;
  editedStatus: FieldEditedInfo;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

/**
 * DokumentasjonFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av adopsjonsopplysninger i søknaden.
 */
export const DokumentasjonFaktaForm = ({
  readOnly,
  editedStatus,
  erForeldrepengerFagsak,
  hasEktefellesBarnAksjonspunkt,
  alleMerknaderFraBeslutter,
}: Props) => {
  const intl = useIntl();

  const { watch } = useFormContext<FormValues>();
  const fodselsdatoer = watch('fodselsdatoer') || {};
  const omsorgsovertakelseDato = watch('omsorgsovertakelseDato');
  const barnetsAnkomstTilNorgeDato = watch('barnetsAnkomstTilNorgeDato');

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'DokumentasjonFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.ADOPSJONSDOKUMENTAJON]}
    >
      <VStack gap="4" className={styles.container}>
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
          <Datepicker
            name="barnetsAnkomstTilNorgeDato"
            label={intl.formatMessage({ id: 'DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge' })}
            validate={[hasValidDate]}
            isReadOnly={readOnly}
            isEdited={editedStatus.barnetsAnkomstTilNorgeDato}
          />
        )}
        {Object.keys(fodselsdatoer).map((id, i) => (
          <HStack gap="4" key={`div-${AksjonspunktKode.ADOPSJONSDOKUMENTAJON}-${id}`}>
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
        ))}
        <div>
          <Label size="small">{intl.formatMessage({ id: 'DokumentasjonFaktaForm.AntallBarnSomFyllerVilkaret' })}</Label>
          <BodyShort size="small">{findAntallBarnUnder15(fodselsdatoer, omsorgsovertakelseDato)}</BodyShort>
        </div>
      </VStack>
    </FaktaGruppe>
  );
};

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

DokumentasjonFaktaForm.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: familiehendelse?.omsorgsovertakelseDato
    ? familiehendelse.omsorgsovertakelseDato
    : soknad.omsorgsovertakelseDato,
  barnetsAnkomstTilNorgeDato: familiehendelse?.ankomstNorge
    ? familiehendelse.ankomstNorge
    : soknad.barnetsAnkomstTilNorgeDato,
  fodselsdatoer: familiehendelse?.adopsjonFodelsedatoer
    ? familiehendelse.adopsjonFodelsedatoer
    : soknad.adopsjonFodelsedatoer,
});

DokumentasjonFaktaForm.transformValues = (values: FormValues): BekreftDokumentertDatoAksjonspunktAp => ({
  kode: AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
  // Desse to variablane skal alltid ha verdi - fix i typescript og fjern ''
  omsorgsovertakelseDato: values.omsorgsovertakelseDato ?? '',
  fodselsdatoer: values.fodselsdatoer ?? '',
});
