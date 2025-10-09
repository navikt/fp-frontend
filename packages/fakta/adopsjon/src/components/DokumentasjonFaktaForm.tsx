import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { HStack, Label, VStack } from '@navikt/ds-react';
import { ReadOnlyField, RhfDatepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { diff } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { isNotEqual } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AdopsjonFamilieHendelse, SøknadAdopsjon } from '@navikt/fp-types';
import type { BekreftDokumentertDatoAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

import styles from './dokumentasjonFaktaForm.module.css';

dayjs.extend(isSameOrBefore);

export type FormValues = {
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  fodselsdatoer?: Record<string, string>;
};

interface Props {
  readOnly: boolean;
  erForeldrepengerFagsak: boolean;
  hasEktefellesBarnAksjonspunkt: boolean;
  adopsjon: AdopsjonFamilieHendelse;
  soknad: SøknadAdopsjon;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export const DokumentasjonFaktaForm = ({
  readOnly,
  soknad,
  adopsjon,
  erForeldrepengerFagsak,
  hasEktefellesBarnAksjonspunkt,
  alleMerknaderFraBeslutter,
}: Props) => {
  const intl = useIntl();

  const { watch, control } = useFormContext<FormValues>();
  const fodselsdatoer = watch('fodselsdatoer') ?? {};
  const omsorgsovertakelseDato = watch('omsorgsovertakelseDato');
  const barnetsAnkomstTilNorgeDato = watch('barnetsAnkomstTilNorgeDato');

  const getAdopsjonsdatoEditedStatusForId = isAdopsjonFodelsedatoerEdited(soknad, adopsjon);

  const fødselsdatoer = Object.keys(fodselsdatoer);
  return (
    <FaktaKort
      label={intl.formatMessage({ id: 'DokumentasjonFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON]}
    >
      <VStack gap="space-16">
        <RhfDatepicker
          name="omsorgsovertakelseDato"
          control={control}
          label={
            erForeldrepengerFagsak && hasEktefellesBarnAksjonspunkt ? (
              <FormattedMessage id="DokumentasjonFaktaForm.Stebarnsadopsjon" />
            ) : (
              <FormattedMessage id="DokumentasjonFaktaForm.Omsorgsovertakelsesdato" />
            )
          }
          size="small"
          validate={[required, hasValidDate]}
          isReadOnly={readOnly}
          isEdited={isNotEqual(soknad.omsorgsovertakelseDato, adopsjon.omsorgsovertakelseDato)}
        />
        {erForeldrepengerFagsak && barnetsAnkomstTilNorgeDato && (
          <RhfDatepicker
            name="barnetsAnkomstTilNorgeDato"
            control={control}
            label={<FormattedMessage id="DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge.Label" />}
            description={<FormattedMessage id="DokumentasjonFaktaForm.DatoForBarnetsAnkomstTilNorge.Description" />}
            size="small"
            validate={[hasValidDate]}
            isReadOnly={readOnly}
            isEdited={isNotEqual(soknad.barnetsAnkomstTilNorgeDato, adopsjon.ankomstNorge)}
          />
        )}
        {fødselsdatoer.map((id, i) => (
          <HStack gap="space-16" key={`div-${AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON}-${id}`}>
            {fødselsdatoer.length > 1 && (
              <Label size="small" className={i === 0 ? styles['topMarginFirstRow'] : styles['topMargin']}>
                <FormattedMessage id="DokumentasjonFaktaForm.BarnNr" values={{ nummer: i + 1 }} />
              </Label>
            )}
            <RhfDatepicker
              name={`fodselsdatoer.${id}`}
              control={control}
              label={<FormattedMessage id="DokumentasjonFaktaForm.Fodselsdato" />}
              hideLabel={i > 0}
              size="small"
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
              isEdited={getAdopsjonsdatoEditedStatusForId(id)}
            />
            {!readOnly && isAgeAbove15(fodselsdatoer, Number.parseInt(id, 10), omsorgsovertakelseDato) && (
              <ExclamationmarkTriangleFillIcon
                title={intl.formatMessage({ id: 'DokumentasjonFaktaForm.BarnErOver15Ar' })}
                className={i === 0 ? styles['topMarginFirstRow'] : styles['topMargin']}
                color="var(--ax-warning-700)"
                height={24}
                width={24}
              />
            )}
          </HStack>
        ))}
        <ReadOnlyField
          size="small"
          label={<FormattedMessage id="DokumentasjonFaktaForm.AntallBarnSomFyllerVilkaret" />}
          value={findAntallBarnUnder15(fodselsdatoer, omsorgsovertakelseDato)}
        />
      </VStack>
    </FaktaKort>
  );
};

const findAntallBarnUnder15 = (
  fodselsdatoer: Record<number, string>,
  omsorgsovertakelseDato?: string,
): number | string => {
  const nrOfNotNullFodselsdatoer = Object.keys(fodselsdatoer).filter(
    id => fodselsdatoer[Number.parseInt(id, 10)],
  ).length;
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

DokumentasjonFaktaForm.initialValues = (adopsjon: AdopsjonFamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: adopsjon.omsorgsovertakelseDato,
  barnetsAnkomstTilNorgeDato: adopsjon.ankomstNorge ?? undefined,
  fodselsdatoer: adopsjon.fødselsdatoer,
});

DokumentasjonFaktaForm.transformValues = (values: FormValues): BekreftDokumentertDatoAksjonspunktAp => ({
  kode: AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON,
  // Desse to variablane skal alltid ha verdi - fix i typescript og fjern ''
  omsorgsovertakelseDato: values.omsorgsovertakelseDato ?? '',
  fodselsdatoer: values.fodselsdatoer ?? '',
});

const isAdopsjonFodelsedatoerEdited =
  (soknad: SøknadAdopsjon, adopsjon: AdopsjonFamilieHendelse) =>
  (id: string): boolean => {
    const editedStatus = diff(soknad.adopsjonFodelsedatoer, adopsjon.fødselsdatoer);
    // @ts-expect-error -- usikker hva denne går ut på
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return editedStatus ? editedStatus[id] : false;
  };
