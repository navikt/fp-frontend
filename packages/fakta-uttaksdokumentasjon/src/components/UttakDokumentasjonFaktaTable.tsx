import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { dateFormat } from '@navikt/ft-utils';
import { SuccessStroke, Error, FileError } from '@navikt/ds-icons';
import { ExpandableTableRow, Table, TableColumn } from '@navikt/ft-ui-komponenter';

import {
  DokumentasjonVurderingBehov, UttakVurdering, UttakÅrsak, UttakType,
} from '@fpsak-frontend/types';

import UttakDokumentasjonFaktaDetailForm from './UttakDokumentasjonFaktaDetailForm';

import styles from './uttakDokumentasjonFaktaTable.less';

const finnType = (type) => {
  if (type === UttakType.UTSETTELSE) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.Utsettelse" />;
  }
  if (type === UttakType.OVERFØRING) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.Overforing" />;
  }
  return <FormattedMessage id="UttakDokumentasjonFaktaTable.Uttak" />;
};

const finnÅrsak = (årsak) => {
  if (årsak === UttakÅrsak.INNLEGGELSE_SØKER) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.InnleggelseSoker" />;
  }
  if (årsak === UttakÅrsak.INNLEGGELSE_BARN) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.InnleggelseBarn" />;
  }
  if (årsak === UttakÅrsak.HV_ØVELSE) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.HvOvelse" />;
  }
  if (årsak === UttakÅrsak.NAV_TILTAK) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.NavTiltak" />;
  }
  if (årsak === UttakÅrsak.SYKDOM_SØKER) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.SykdomSoker" />;
  }
  if (årsak === UttakÅrsak.SYKDOM_ANNEN_FORELDER) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.SykdomAnnenForelder" />;
  }
  if (årsak === UttakÅrsak.INNLEGGELSE_ANNEN_FORELDER) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.InnleggelseAnnenForelder" />;
  }
  if (årsak === UttakÅrsak.BARE_SØKER_RETT) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.BareSokerRett" />;
  }
  if (årsak === UttakÅrsak.ALENEOMSORG) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.Aleneomsorg" />;
  }
  if (årsak === UttakÅrsak.AKTIVITETSKRAV_ARBEID) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.AktivitetskravArbeid" />;
  }
  if (årsak === UttakÅrsak.AKTIVITETSKRAV_UTDANNING) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.AktivitetskravUtdanning" />;
  }
  if (årsak === UttakÅrsak.AKTIVITETSKRAV_KVALPROG) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.AktivitetskravKvalprog" />;
  }
  if (årsak === UttakÅrsak.AKTIVITETSKRAV_INTROPROG) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.AktivitetskravIntroprog" />;
  }
  if (årsak === UttakÅrsak.AKTIVITETSKRAV_TRENGER_HJELP) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.AktivitetskravTrengerHjelp" />;
  }
  if (årsak === UttakÅrsak.AKTIVITETSKRAV_INNLAGT) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.AktivitetskravInnlagt" />;
  }
  if (årsak === UttakÅrsak.AKTIVITETSKRAV_ARBEID_OG_UTDANNING) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.AktivitetskravArbeidUtdanning" />;
  }
  if (årsak === UttakÅrsak.AKTIVITETSKRAV_IKKE_OPPGITT) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.AktivitetskravIkkeOppgitt" />;
  }
  if (årsak === UttakÅrsak.TIDLIG_OPPSTART_FAR) {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.TidligOppstartFar" />;
  }

  return '';
};

const HEADER_TEXT_CODES = [
  'UttakDokumentasjonFaktaTable.Periode',
  'UttakDokumentasjonFaktaTable.AvklaringBehov',
  'UttakDokumentasjonFaktaTable.Arsak',
  'UttakDokumentasjonFaktaTable.Vurdering',
  'EMPTY1',
];

interface PureOwnProps {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  oppdaterDokBehov: (dokBehov: DokumentasjonVurderingBehov[]) => void;
  readOnly: boolean;
  setDirty: (isDirty: boolean) => void;
}

const UttakDokumentasjonFaktaTable: FunctionComponent<PureOwnProps> = ({
  dokumentasjonVurderingBehov,
  oppdaterDokBehov,
  readOnly,
  setDirty,
}) => {
  const [valgtDokBehovFomDatoer, setDokBehovFomDatoer] = useState<string[]>([]);

  const velgDokBehovFomDato = useCallback((fom?: string, lukkAlleAndre = false) => {
    if (valgtDokBehovFomDatoer.includes(fom)) {
      setDokBehovFomDatoer((foms) => foms.filter((f) => f !== fom));
    } else {
      const nye = fom ? [fom] : [];
      setDokBehovFomDatoer((foms) => (lukkAlleAndre ? nye : foms.concat(fom)));
    }
  }, [valgtDokBehovFomDatoer, setDokBehovFomDatoer]);

  useEffect(() => velgDokBehovFomDato(dokumentasjonVurderingBehov?.find((oa) => !oa.vurdering)?.fom), []);

  const oppdaterPeriode = useCallback((oppdatertKrav: { perioder: DokumentasjonVurderingBehov[] }) => {
    const { perioder } = oppdatertKrav;
    const oppdaterteDokBehov = dokumentasjonVurderingBehov
      .filter((aKrav) => aKrav.fom !== perioder[0].fom)
      .concat(perioder)
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    oppdaterDokBehov(oppdaterteDokBehov);
    velgDokBehovFomDato(oppdaterteDokBehov.find((oa) => !oa.vurdering)?.fom, true);
    setDirty(true);
  }, [dokumentasjonVurderingBehov]);

  return (
    <Table headerTextCodes={HEADER_TEXT_CODES} noHover hasGrayHeader>
      {dokumentasjonVurderingBehov.map((behov) => (
        <ExpandableTableRow
          key={behov.fom + behov.tom}
          isApLeftBorder={!behov.vurdering}
          showContent={valgtDokBehovFomDatoer.includes(behov.fom)}
          toggleContent={() => velgDokBehovFomDato(behov.fom)}
          content={((valgtDokBehovFomDatoer.includes(behov.fom)
            && (
              <UttakDokumentasjonFaktaDetailForm
                key={behov.fom}
                valgtDokBehov={behov}
                readOnly={readOnly}
                oppdaterDokBehov={oppdaterPeriode}
                avbrytEditeringAvAktivitetskrav={() => velgDokBehovFomDato(behov.fom)}
              />
            )
          ))}
        >
          <TableColumn>{`${dateFormat(behov.fom)} - ${dateFormat(behov.tom)}`}</TableColumn>
          <TableColumn>{finnType(behov.type)}</TableColumn>
          <TableColumn>{finnÅrsak(behov.årsak)}</TableColumn>
          <TableColumn>
            {behov.vurdering === UttakVurdering.GODKJENT && (
              <>
                <SuccessStroke />
                <div className={styles.ikon}><FormattedMessage id="UttakDokumentasjonFaktaTable.Godkjent" /></div>
              </>
            )}
            {behov.vurdering === UttakVurdering.IKKE_GODKJENT && (
              <>
                <Error />
                <div className={styles.ikon}><FormattedMessage id="UttakDokumentasjonFaktaTable.IkkeGodkjent" /></div>
              </>
            )}
            {behov.vurdering === UttakVurdering.IKKE_DOKUMENTERT && (
              <>
                <FileError />
                <div className={styles.ikon}><FormattedMessage id="UttakDokumentasjonFaktaTable.ManglerDok" /></div>
              </>
            )}
          </TableColumn>
        </ExpandableTableRow>
      ))}
    </Table>
  );
};

export default UttakDokumentasjonFaktaTable;
