import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Table } from '@navikt/ds-react';
import { DokumentasjonVurderingBehov, UttakType } from '@navikt/fp-types';
import { dateFormat, calcDaysAndWeeks } from '@navikt/ft-utils';
import UttakDokumentasjonFaktaDetailForm from '../UttakDokumentasjonFaktaDetailForm';
import styles from './uttakDokumentasjonFaktaTable.module.css';
import UttakVurderingStatus from './UttakVurderingStatus';
import getUttakÅrsakTekst from './uttakÅrsak';

const finnType = (type: UttakType) => {
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
  'UttakDokumentasjonFaktaTable.Lengde',
  'UttakDokumentasjonFaktaTable.AvklaringBehov',
  'UttakDokumentasjonFaktaTable.Arsak',
  'UttakDokumentasjonFaktaTable.Vurdering',
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
      if (fom) {
        if (valgtDokBehovFomDatoer.includes(fom)) {
          setDokBehovFomDatoer(foms => foms.filter(f => f !== fom));
        } else {
          setDokBehovFomDatoer(foms => foms.concat(fom));
        }
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
    <Table>
      <Table.Header>
        <Table.Row>
          {HEADER_TEXT_CODES.map(headerId => (
            <Table.HeaderCell key={headerId} scope="col">
              <FormattedMessage id={headerId} />
            </Table.HeaderCell>
          ))}
          <Table.HeaderCell key="empty-header-cell" />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {dokumentasjonVurderingBehov.map(behov => {
          const kolonner = (
            <>
              <Table.DataCell>
                <BodyShort weight="semibold">{`${dateFormat(behov.fom)} - ${dateFormat(behov.tom)}`}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort>{calcDaysAndWeeks(behov.fom, behov.tom).formattedString}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>{finnType(behov.type)}</Table.DataCell>
              <Table.DataCell>
                <FormattedMessage id={getUttakÅrsakTekst(behov.årsak)} />
              </Table.DataCell>
              <Table.DataCell>
                {behov.vurdering && (
                  <UttakVurderingStatus vurdering={behov.vurdering} morsStillingsprosent={behov.morsStillingsprosent} />
                )}
              </Table.DataCell>
            </>
          );

          if (harAksjonspunkt) {
            return (
              <Table.ExpandableRow
                key={behov.fom + behov.tom}
                open={valgtDokBehovFomDatoer.includes(behov.fom)}
                onOpenChange={() => velgDokBehovFomDato(behov.fom)}
                expandOnRowClick
                shadeOnHover
                togglePlacement="right"
                className={styles.expansionContentOuter}
                content={
                  valgtDokBehovFomDatoer.includes(behov.fom) && (
                    <div className={`${styles.expansionContentInner} ${!behov.vurdering && styles.leftBorder}`}>
                      <UttakDokumentasjonFaktaDetailForm
                        key={behov.fom}
                        valgtDokBehov={behov}
                        readOnly={readOnly}
                        oppdaterDokBehov={oppdaterPeriode}
                        avbrytEditeringAvAktivitetskrav={() => velgDokBehovFomDato(behov.fom)}
                      />
                    </div>
                  )
                }
              >
                {kolonner}
              </Table.ExpandableRow>
            );
          }
          return <Table.Row key={behov.fom + behov.tom}>{kolonner}</Table.Row>;
        })}
      </Table.Body>
    </Table>
  );
};

export default UttakDokumentasjonFaktaTable;
