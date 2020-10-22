import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import {
  DateLabel, Image, PeriodLabel, Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import erIBrukImageUrl from '@fpsak-frontend/assets/images/stjerne.svg';
import { Arbeidsforhold } from '@fpsak-frontend/types';

import IngenArbeidsforholdRegistrert from './IngenArbeidsforholdRegistrert';

import styles from './personArbeidsforholdTable.less';

const headerColumnContent = [
  <FormattedMessage key={1} id="PersonArbeidsforholdTable.Arbeidsforhold" values={{ br: <br /> }} />,
  <FormattedMessage key={2} id="PersonArbeidsforholdTable.Periode" values={{ br: <br /> }} />,
  <FormattedMessage key={3} id="PersonArbeidsforholdTable.Kilde" values={{ br: <br /> }} />,
  <FormattedMessage key={4} id="PersonArbeidsforholdTable.Stillingsprosent" values={{ br: <br /> }} />,
  <FormattedMessage key={5} id="PersonArbeidsforholdTable.MottattDato" values={{ br: <br /> }} />,
  <></>,
];

const getEndCharFromId = (id?: string) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const utledNavn = (arbeidsforhold: Arbeidsforhold) => {
  if (arbeidsforhold.lagtTilAvSaksbehandler) {
    return arbeidsforhold.navn;
  }
  return arbeidsforhold.arbeidsforholdId
    ? `${arbeidsforhold.navn}(${arbeidsforhold.arbeidsgiverIdentifiktorGUI})${getEndCharFromId(arbeidsforhold.eksternArbeidsforholdId)}`
    : `${arbeidsforhold.navn}(${arbeidsforhold.arbeidsgiverIdentifiktorGUI})`;
};

export const utledNøkkel = (arbeidsforhold: Arbeidsforhold) => {
  if (arbeidsforhold.lagtTilAvSaksbehandler) {
    return arbeidsforhold.navn;
  }
  return `${arbeidsforhold.eksternArbeidsforholdId}${arbeidsforhold.arbeidsforholdId}${arbeidsforhold.arbeidsgiverIdentifiktorGUI}`;
};

interface OwnProps {
  alleArbeidsforhold: Arbeidsforhold[];
  selectedId?: string;
  selectArbeidsforholdCallback: (...args: any[]) => any;
}

const PersonArbeidsforholdTable: FunctionComponent<OwnProps> = ({
  alleArbeidsforhold,
  selectedId,
  selectArbeidsforholdCallback,
}) => {
  if (alleArbeidsforhold.length === 0) {
    return (
      <IngenArbeidsforholdRegistrert
        headerColumnContent={headerColumnContent}
      />
    );
  }
  const intl = useIntl();
  return (
    <Table headerColumnContent={headerColumnContent}>
      {alleArbeidsforhold && alleArbeidsforhold.map((a) => {
        const stillingsprosent = a.stillingsprosent !== undefined && a.stillingsprosent !== null ? `${a.stillingsprosent.toFixed(2)} %` : '';
        const navn = utledNavn(a);
        return (
          <TableRow
            key={utledNøkkel(a)}
            model={a}
            onMouseDown={selectArbeidsforholdCallback}
            onKeyDown={selectArbeidsforholdCallback}
            isSelected={a.id === selectedId}
            isApLeftBorder={a.tilVurdering}
          >
            <TableColumn><Normaltekst>{decodeHtmlEntity(navn)}</Normaltekst></TableColumn>
            <TableColumn>
              <Normaltekst>
                <PeriodLabel dateStringFom={a.fomDato} dateStringTom={a.overstyrtTom ? a.overstyrtTom : a.tomDato} />
              </Normaltekst>
            </TableColumn>
            <TableColumn><Normaltekst>{a.kilde.navn}</Normaltekst></TableColumn>
            <TableColumn><Normaltekst>{stillingsprosent}</Normaltekst></TableColumn>
            <TableColumn>
              {a.mottattDatoInntektsmelding
              && <Normaltekst><DateLabel dateString={a.mottattDatoInntektsmelding} /></Normaltekst>}
            </TableColumn>
            <TableColumn>
              { a.brukArbeidsforholdet
            && (
            <Image
              className={styles.image}
              src={erIBrukImageUrl}
              alt={intl.formatMessage({ id: 'PersonArbeidsforholdTable.ErIBruk' })}
              tooltip={<FormattedMessage id="PersonArbeidsforholdTable.ErIBruk" />}
              tabIndex={0}
              alignTooltipLeft
            />
            )}
            </TableColumn>
          </TableRow>
        );
      })}
    </Table>
  );
};

export default PersonArbeidsforholdTable;
