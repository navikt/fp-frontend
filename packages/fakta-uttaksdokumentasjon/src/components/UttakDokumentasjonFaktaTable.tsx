import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { dateFormat } from '@navikt/ft-utils';
import { SuccessStroke, Error, FileError } from '@navikt/ds-icons';
import { ExpandableTableRow, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';

import { DokumentasjonVurderingBehov, UttakVurdering, UttakÅrsak, UttakType } from '@navikt/fp-types';

import UttakDokumentasjonFaktaDetailForm from './UttakDokumentasjonFaktaDetailForm';

import styles from './uttakDokumentasjonFaktaTable.module.css';

const UTTAK_ÅRSAK_TEKSTER = {
  [UttakÅrsak.INNLEGGELSE_SØKER]: 'UttakDokumentasjonFaktaTable.InnleggelseSoker',
  [UttakÅrsak.INNLEGGELSE_BARN]: 'UttakDokumentasjonFaktaTable.InnleggelseBarn',
  [UttakÅrsak.HV_ØVELSE]: 'UttakDokumentasjonFaktaTable.HvOvelse',
  [UttakÅrsak.NAV_TILTAK]: 'UttakDokumentasjonFaktaTable.NavTiltak',
  [UttakÅrsak.SYKDOM_SØKER]: 'UttakDokumentasjonFaktaTable.SykdomSoker',
  [UttakÅrsak.SYKDOM_ANNEN_FORELDER]: 'UttakDokumentasjonFaktaTable.SykdomAnnenForelder',
  [UttakÅrsak.INNLEGGELSE_ANNEN_FORELDER]: 'UttakDokumentasjonFaktaTable.InnleggelseAnnenForelder',
  [UttakÅrsak.BARE_SØKER_RETT]: 'UttakDokumentasjonFaktaTable.BareSokerRett',
  [UttakÅrsak.ALENEOMSORG]: 'UttakDokumentasjonFaktaTable.Aleneomsorg',
  [UttakÅrsak.AKTIVITETSKRAV_ARBEID]: 'UttakDokumentasjonFaktaTable.AktivitetskravArbeid',
  [UttakÅrsak.AKTIVITETSKRAV_UTDANNING]: 'UttakDokumentasjonFaktaTable.AktivitetskravUtdanning',
  [UttakÅrsak.AKTIVITETSKRAV_KVALPROG]: 'UttakDokumentasjonFaktaTable.AktivitetskravKvalprog',
  [UttakÅrsak.AKTIVITETSKRAV_INTROPROG]: 'UttakDokumentasjonFaktaTable.AktivitetskravIntroprog',
  [UttakÅrsak.AKTIVITETSKRAV_TRENGER_HJELP]: 'UttakDokumentasjonFaktaTable.AktivitetskravTrengerHjelp',
  [UttakÅrsak.AKTIVITETSKRAV_INNLAGT]: 'UttakDokumentasjonFaktaTable.AktivitetskravInnlagt',
  [UttakÅrsak.AKTIVITETSKRAV_ARBEID_OG_UTDANNING]: 'UttakDokumentasjonFaktaTable.AktivitetskravArbeidUtdanning',
  [UttakÅrsak.AKTIVITETSKRAV_IKKE_OPPGITT]: 'UttakDokumentasjonFaktaTable.AktivitetskravIkkeOppgitt',
  [UttakÅrsak.TIDLIG_OPPSTART_FAR]: 'UttakDokumentasjonFaktaTable.TidligOppstartFar',
};

const finnType = type => {
  if (type === UttakType.UTSETTELSE) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.Utsettelse" />;
  }
  if (type === UttakType.OVERFØRING) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.Overforing" />;
  }
  return <FormattedMessage id="UttakDokumentasjonFaktaTable.Uttak" />;
};

const HEADER_TEXT_CODES = [
  'UttakDokumentasjonFaktaTable.Periode',
  'UttakDokumentasjonFaktaTable.AvklaringBehov',
  'UttakDokumentasjonFaktaTable.Arsak',
  'UttakDokumentasjonFaktaTable.Vurdering',
  'EMPTY1',
];

interface OwnProps {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  oppdaterDokBehov: (dokBehov: DokumentasjonVurderingBehov[]) => void;
  readOnly: boolean;
  setDirty: (isDirty: boolean) => void;
  harAksjonspunkt: boolean;
}

const UttakDokumentasjonFaktaTable: FunctionComponent<OwnProps> = ({
  dokumentasjonVurderingBehov,
  oppdaterDokBehov,
  readOnly,
  setDirty,
  harAksjonspunkt,
}) => {
  const [valgtDokBehovFomDatoer, setDokBehovFomDatoer] = useState<string[]>([]);

  const velgDokBehovFomDato = useCallback(
    (fom?: string) => {
      if (valgtDokBehovFomDatoer.includes(fom)) {
        setDokBehovFomDatoer(foms => foms.filter(f => f !== fom));
      } else {
        setDokBehovFomDatoer(foms => foms.concat(fom));
      }
    },
    [valgtDokBehovFomDatoer, setDokBehovFomDatoer],
  );

  useEffect(() => velgDokBehovFomDato(dokumentasjonVurderingBehov?.find(oa => !oa.vurdering)?.fom), []);

  const oppdaterPeriode = useCallback(
    (oppdatertKrav: { perioder: DokumentasjonVurderingBehov[] }) => {
      const { perioder } = oppdatertKrav;
      const oppdaterteDokBehov = dokumentasjonVurderingBehov
        .filter(aKrav => aKrav.fom !== perioder[0].fom)
        .concat(perioder)
        .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

      oppdaterDokBehov(oppdaterteDokBehov);

      setDokBehovFomDatoer(fomDatoer => {
        const åpneRaderMinusDenSomErOppdatert = fomDatoer.filter(fom => fom !== perioder[0].fom);
        const nySomSkalÅpnes = oppdaterteDokBehov.find(oa => !oa.vurdering)?.fom;
        return nySomSkalÅpnes
          ? åpneRaderMinusDenSomErOppdatert.concat(nySomSkalÅpnes)
          : åpneRaderMinusDenSomErOppdatert;
      });
      setDirty(true);
    },
    [dokumentasjonVurderingBehov],
  );

  return (
    <Table headerTextCodes={HEADER_TEXT_CODES} noHover hasGrayHeader>
      {dokumentasjonVurderingBehov.map(behov => {
        const kolonner = (
          <>
            <TableColumn>{`${dateFormat(behov.fom)} - ${dateFormat(behov.tom)}`}</TableColumn>
            <TableColumn>{finnType(behov.type)}</TableColumn>
            <TableColumn>
              {UTTAK_ÅRSAK_TEKSTER[behov.årsak] ? <FormattedMessage id={UTTAK_ÅRSAK_TEKSTER[behov.årsak]} /> : ''}
            </TableColumn>
            <TableColumn>
              {behov.vurdering === UttakVurdering.GODKJENT && (
                <>
                  <SuccessStroke />
                  <div className={styles.ikon}>
                    <FormattedMessage id="UttakDokumentasjonFaktaTable.Godkjent" />
                  </div>
                </>
              )}
              {behov.vurdering === UttakVurdering.IKKE_GODKJENT && (
                <>
                  <Error />
                  <div className={styles.ikon}>
                    <FormattedMessage id="UttakDokumentasjonFaktaTable.IkkeGodkjent" />
                  </div>
                </>
              )}
              {behov.vurdering === UttakVurdering.IKKE_DOKUMENTERT && (
                <>
                  <FileError />
                  <div className={styles.ikon}>
                    <FormattedMessage id="UttakDokumentasjonFaktaTable.ManglerDok" />
                  </div>
                </>
              )}
            </TableColumn>
          </>
        );

        if (harAksjonspunkt) {
          return (
            <ExpandableTableRow
              key={behov.fom + behov.tom}
              isApLeftBorder={!behov.vurdering}
              showContent={valgtDokBehovFomDatoer.includes(behov.fom)}
              toggleContent={() => velgDokBehovFomDato(behov.fom)}
              content={
                valgtDokBehovFomDatoer.includes(behov.fom) && (
                  <UttakDokumentasjonFaktaDetailForm
                    key={behov.fom}
                    valgtDokBehov={behov}
                    readOnly={readOnly}
                    oppdaterDokBehov={oppdaterPeriode}
                    avbrytEditeringAvAktivitetskrav={() => velgDokBehovFomDato(behov.fom)}
                  />
                )
              }
            >
              {kolonner}
            </ExpandableTableRow>
          );
        }
        return <TableRow key={behov.fom + behov.tom}>{kolonner}</TableRow>;
      })}
    </Table>
  );
};

export default UttakDokumentasjonFaktaTable;
