import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfDatepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { diff } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { isNotEqual } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { FamilieHendelse, Soknad } from '@navikt/fp-types';
import type { BekreftDokumentertDatoAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './dokumentasjonFaktaForm.module.css';

dayjs.extend(isSameOrBefore);

export type FormValues = {
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  fodselsdatoer?: Record<number, string>;
};

interface Props {
  readOnly: boolean;
  erForeldrepengerFagsak: boolean;
  hasEktefellesBarnAksjonspunkt: boolean;
  gjeldendeFamiliehendelse: FamilieHendelse;
  soknad: Soknad;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

/**
 * DokumentasjonFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av adopsjonsopplysninger i søknaden.
 */
export const DokumentasjonFaktaForm = ({
  readOnly,
  soknad,
  gjeldendeFamiliehendelse,
  erForeldrepengerFagsak,
  hasEktefellesBarnAksjonspunkt,
  alleMerknaderFraBeslutter,
}: Props) => {
  const intl = useIntl();

  const { watch, control } = useFormContext<FormValues>();
  const fodselsdatoer = watch('fodselsdatoer') ?? {};
  const omsorgsovertakelseDato = watch('omsorgsovertakelseDato');
  const barnetsAnkomstTilNorgeDato = watch('barnetsAnkomstTilNorgeDato');

  const getAdopsjonsdatoEditedStatusForId = isAdopsjonFodelsedatoerEdited(soknad, gjeldendeFamiliehendelse);

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'DokumentasjonFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.ADOPSJONSDOKUMENTAJON]}
    >
      <VStack gap="4" className={styles.container}>
        <RhfDatepicker
          name="omsorgsovertakelseDato"
          control={control}
          label={
            erForeldrepengerFagsak && hasEktefellesBarnAksjonspunkt
              ? intl.formatMessage({ id: 'DokumentasjonFaktaForm.Stebarnsadopsjon' })
              : intl.formatMessage({ id: 'DokumentasjonFaktaForm.Omsorgsovertakelsesdato' })
          }
          validate={[required, hasValidDate]}
          isReadOnly={readOnly}
          isEdited={isNotEqual(soknad.omsorgsovertakelseDato, gjeldendeFamiliehendelse.omsorgsovertakelseDato)}
        />
        {erForeldrepengerFagsak && barnetsAnkomstTilNorgeDato && (
          <RhfDatepicker
            name="barnetsAnkomstTilNorgeDato"
            control={control}
            label={intl.formatMessage({ id: 'DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge' })}
            validate={[hasValidDate]}
            isReadOnly={readOnly}
            isEdited={isNotEqual(soknad.barnetsAnkomstTilNorgeDato, gjeldendeFamiliehendelse.ankomstNorge)}
          />
        )}
        {Object.keys(fodselsdatoer).map((id, i) => (
          <HStack gap="4" key={`div-${AksjonspunktKode.ADOPSJONSDOKUMENTAJON}-${id}`}>
            <RhfDatepicker
              name={`fodselsdatoer.${id}`}
              control={control}
              label={intl.formatMessage(
                {
                  id: 'DokumentasjonFaktaForm.Fodselsdato',
                },
                { number: i + 1 },
              )}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
              isEdited={getAdopsjonsdatoEditedStatusForId(id)}
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
  const omsorgsdato = dayjs(omsorgsovertakelseDato).subtract(15, 'years');
  return Object.values(fodselsdatoer)
    .map(fodselsdato => (dayjs(fodselsdato).isAfter(omsorgsdato) ? 1 : 0))
    .reduce<number>((a, b) => a + b, 0);
};

const isAgeAbove15 = (fodselsdatoer: Record<number, string>, id: number, omsorgsovertakelseDato?: string): boolean =>
  !!fodselsdatoer[id] &&
  !!omsorgsovertakelseDato &&
  dayjs(fodselsdatoer[id]).isSameOrBefore(dayjs(omsorgsovertakelseDato).subtract(15, 'years'));

DokumentasjonFaktaForm.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: familiehendelse?.omsorgsovertakelseDato ?? soknad.omsorgsovertakelseDato,
  barnetsAnkomstTilNorgeDato: familiehendelse?.ankomstNorge ?? soknad.barnetsAnkomstTilNorgeDato,
  fodselsdatoer: familiehendelse?.adopsjonFodelsedatoer ?? soknad.adopsjonFodelsedatoer,
});

DokumentasjonFaktaForm.transformValues = (values: FormValues): BekreftDokumentertDatoAksjonspunktAp => ({
  kode: AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
  // Desse to variablane skal alltid ha verdi - fix i typescript og fjern ''
  omsorgsovertakelseDato: values.omsorgsovertakelseDato ?? '',
  fodselsdatoer: values.fodselsdatoer ?? '',
});

export const isAdopsjonFodelsedatoerEdited =
  (soknad: Soknad, familiehendelse: FamilieHendelse) =>
  (id: string): boolean => {
    const editedStatus = diff(soknad.adopsjonFodelsedatoer, familiehendelse.adopsjonFodelsedatoer);
    // @ts-expect-error diff bør endrast så den gir ein meir forutsigbar output
    return editedStatus ? editedStatus[id] : false;
  };
