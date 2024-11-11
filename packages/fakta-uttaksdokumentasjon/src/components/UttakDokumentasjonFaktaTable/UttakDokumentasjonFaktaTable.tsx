import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Table } from '@navikt/ds-react';
import { DokumentasjonVurderingBehov, UttakType } from '@navikt/fp-types';
import { calcDaysAndWeeks } from '@navikt/ft-utils';
import UttakDokumentasjonFaktaDetailForm from '../UttakDokumentasjonFaktaDetailForm';
import styles from './uttakDokumentasjonFaktaTable.module.css';
import UttakVurderingStatus from './UttakVurderingStatus';
import getUttakÅrsakTekst from './uttakÅrsak';
import { getFormatertPeriode } from '../../utils/periodeUtils';

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
  const [valgtDokBehovFomDatoer, setValgtDokBehovFomDatoer] = useState<string[]>([]);

  const velgDokBehovFomDato = useCallback(
    (fom?: string) => {
      if (fom) {
        if (valgtDokBehovFomDatoer.includes(fom)) {
          setValgtDokBehovFomDatoer(foms => foms.filter(f => f !== fom));
        } else {
          setValgtDokBehovFomDatoer(foms => foms.concat(fom));
        }
      }
    },
    [valgtDokBehovFomDatoer, setValgtDokBehovFomDatoer],
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

      setValgtDokBehovFomDatoer(fomDatoer => {
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
                <BodyShort weight="semibold">{getFormatertPeriode(behov)}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort>{calcDaysAndWeeks(behov.fom, behov.tom).formattedString}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>{finnType(behov.type)}</Table.DataCell>
              <Table.DataCell>
                <FormattedMessage id={getUttakÅrsakTekst(behov.årsak)} />
              </Table.DataCell>
              <Table.DataCell>
                <UttakVurderingStatus vurdering={behov.vurdering} morsStillingsprosent={behov.morsStillingsprosent} />
              </Table.DataCell>
            </>
          );

          if (harAksjonspunkt && (!readOnly || !behov.vurdering)) {
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
                    <div className={styles.expansionContentInner}>
                      <UttakDokumentasjonFaktaDetailForm
                        key={behov.fom}
                        behov={behov}
                        readOnly={readOnly}
                        submit={oppdaterPeriode}
                        cancel={() => velgDokBehovFomDato(behov.fom)}
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
