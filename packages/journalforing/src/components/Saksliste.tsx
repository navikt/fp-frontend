import React, { FunctionComponent, useCallback } from 'react';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';

import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import {
  Table, TableRow, TableColumn,
} from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import Sak from '../typer/sakTsType';
import styles from './journalforingPanel.less';

type OwnProps = Readonly<{
  saksliste: Sak[];
  journalpostId: string;
}>;

type FormValues = {
  saksnummer: string;
  journalpostId: string;
}

const headerTextCodes = [
  'Saksliste.VelgBoks',
  'Saksliste.Saksnummer',
  'Saksliste.Ytelsetype',
  'Saksliste.FørsteUttaksdag',
  'Saksliste.Søknadsdato',
  'Saksliste.Status',
];

/**
 * Saksliste - Viser liste over saker som kan være relevant for en valgt oppgave
 */
const Saksliste: FunctionComponent<OwnProps> = ({
  saksliste,
  journalpostId,
}) => {
  const formMethods = useForm<FormValues>();

  const submitJournalføringsvalg = (saksnummer: string) => {
    console.log(`Journalført på saksnummer ${saksnummer}`);
  };

  const fieldName = 'journalforPaSakForm';
  const avbrytVisning = () => {
    console.log('Avbryt');
  };

  const journalførPåEksisterende = useCallback((saksnummer: string) => submitJournalføringsvalg(saksnummer),
    [journalpostId]);

  if (saksliste.length < 1) {
    return null;
  }

  const lagFeltNavn = (saksnummer: string): string => `journalfør_eksisterende_${saksnummer}`;

  return (
    <Form<FormValues> formMethods={formMethods} onSubmit={(values) => journalførPåEksisterende(values[fieldName])}>
      <div className={styles.saksliste}>
        <Table headerTextCodes={headerTextCodes}>
          {saksliste.map((sak) => (
            <TableRow key={sak.saksnummer}>
              <TableColumn>
                <RadioGroupPanel
                  name={fieldName}
                  hideLegend
                  validate={[required]}
                  isReadOnly={false}
                  isHorizontal
                  isTrueOrFalseSelection
                  radios={[{
                    label: '',
                    value: sak.saksnummer,
                  }]}
                />
              </TableColumn>
              <TableColumn>{sak.saksnummer}</TableColumn>
              <TableColumn>{sak.ytelsetype}</TableColumn>
              <TableColumn>{dayjs(sak.førsteUttaksdato).format(DDMMYYYY_DATE_FORMAT)}</TableColumn>
              <TableColumn>{sak.førsteUttaksdato ? sak.førsteUttaksdato : <FormattedMessage id="Saksliste.IngenSøknad" />}</TableColumn>
              <TableColumn>{sak.status}</TableColumn>
            </TableRow>
          ))}
        </Table>
      </div>
    </Form>
  );
};
export default Saksliste;
