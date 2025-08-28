import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Table } from '@navikt/ds-react';
import { calcDaysAndWeeks } from '@navikt/ft-utils';

import { type DokumentasjonVurderingBehov, type UttakType } from '@navikt/fp-types';

import { getFormatertPeriode } from '../../utils/periodeUtils';
import { UttakDokumentasjonFaktaDetailForm } from '../UttakDokumentasjonFaktaDetailForm';
import { getUttakÅrsakTekst } from './uttakÅrsak';
import { UttakVurderingStatus } from './UttakVurderingStatus';

import styles from './uttakDokumentasjonFaktaTable.module.css';

const finnType = (type: UttakType) => {
  if (type === 'UTSETTELSE') {
    return <FormattedMessage id="UttakDokumentasjonFaktaTable.Utsettelse" />;
  }
  if (type === 'OVERFØRING') {
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

interface Props {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  oppdaterDokBehov: (dokBehov: DokumentasjonVurderingBehov[]) => void;
  readOnly: boolean;
  setDirty: (isDirty: boolean) => void;
}

export const UttakDokumentasjonFaktaTable = ({
  dokumentasjonVurderingBehov,
  oppdaterDokBehov,
  readOnly,
  setDirty,
}: Props) => {
  const [valgtDokBehovFomDatoer, setValgtDokBehovFomDatoer] = useState<string[]>([]);

  const velgDokBehovFomDato = (fom?: string) => {
    if (fom) {
      if (valgtDokBehovFomDatoer.includes(fom)) {
        setValgtDokBehovFomDatoer(foms => foms.filter(f => f !== fom));
      } else {
        setValgtDokBehovFomDatoer(foms => foms.concat(fom));
      }
    }
  };

  useEffect(() => velgDokBehovFomDato(dokumentasjonVurderingBehov?.find(oa => !oa.vurdering)?.fom), []);

  const oppdaterPeriode = (oppdatertKrav: { perioder: DokumentasjonVurderingBehov[] }) => {
    const { perioder } = oppdatertKrav;
    const oppdaterteDokBehov = dokumentasjonVurderingBehov
      .filter(aKrav => aKrav.fom !== perioder[0].fom)
      .concat(perioder)
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    oppdaterDokBehov(oppdaterteDokBehov);

    setValgtDokBehovFomDatoer(fomDatoer => {
      const åpneRaderMinusDenSomErOppdatert = fomDatoer.filter(fom => fom !== perioder[0].fom);
      const nySomSkalÅpnes = oppdaterteDokBehov.find(oa => !oa.vurdering)?.fom;
      return nySomSkalÅpnes ? åpneRaderMinusDenSomErOppdatert.concat(nySomSkalÅpnes) : åpneRaderMinusDenSomErOppdatert;
    });
    setDirty(true);
  };

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
        })}
      </Table.Body>
    </Table>
  );
};
