import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import {
  DateLabel, PeriodLabel, Table, TableColumn, TableRow, Image,
} from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import erIBrukImageUrl from '@fpsak-frontend/assets/images/stjerne.svg';
import { ArbeidsgiverOpplysningerPerId, Arbeidsforhold } from '@fpsak-frontend/types';

import IngenArbeidsforholdRegistrert from './IngenArbeidsforholdRegistrert';

import styles from './personArbeidsforholdTable.less';

const headerColumnContent = [
  <FormattedMessage key={1} id="PersonArbeidsforholdTable.Arbeidsforhold" values={{ br: <br /> }} />,
  <FormattedMessage key={2} id="PersonArbeidsforholdTable.Periode" values={{ br: <br /> }} />,
  <FormattedMessage key={3} id="PersonArbeidsforholdTable.Kilde" values={{ br: <br /> }} />,
  <FormattedMessage key={4} id="PersonArbeidsforholdTable.Stillingsprosent" values={{ br: <br /> }} />,
  <FormattedMessage key={5} id="PersonArbeidsforholdTable.MottattDato" values={{ br: <br /> }} />,
  <div />,
];

const getEndCharFromId = (id?: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const utledNavn = (
  arbeidsforhold: Arbeidsforhold,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
  const navn = arbeidsgiverOpplysninger?.navn;
  if (arbeidsforhold.lagtTilAvSaksbehandler) {
    return navn;
  }
  return arbeidsforhold.arbeidsforholdId
    ? `${navn}(${arbeidsgiverOpplysninger.identifikator})${getEndCharFromId(arbeidsforhold.eksternArbeidsforholdId)}`
    : `${navn}(${arbeidsgiverOpplysninger.identifikator})`;
};

export const utledNøkkel = (arbeidsforhold: Arbeidsforhold, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
  const navn = arbeidsgiverOpplysninger?.navn;
  if (arbeidsforhold.lagtTilAvSaksbehandler) {
    return navn;
  }
  return `${arbeidsforhold.eksternArbeidsforholdId}${arbeidsforhold.arbeidsforholdId}${arbeidsgiverOpplysninger.identifikator}`;
};

interface OwnProps {
  alleArbeidsforhold: Arbeidsforhold[];
  selectedId?: string;
  selectArbeidsforholdCallback: (event: React.MouseEvent | React.KeyboardEvent, id: void, model: Arbeidsforhold) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const PersonArbeidsforholdTable: FunctionComponent<OwnProps> = ({
  alleArbeidsforhold,
  selectedId,
  selectArbeidsforholdCallback,
  arbeidsgiverOpplysningerPerId,
}) => {
  const intl = useIntl();

  if (alleArbeidsforhold.length === 0) {
    return <IngenArbeidsforholdRegistrert headerColumnContent={headerColumnContent} />;
  }

  return (
    <Table headerColumnContent={headerColumnContent}>
      {alleArbeidsforhold && alleArbeidsforhold.map((a) => {
        const stillingsprosent = a.stillingsprosent !== undefined && a.stillingsprosent !== null ? `${a.stillingsprosent.toFixed(2)} %` : '';
        const navn = utledNavn(a, arbeidsgiverOpplysningerPerId);
        return (
          <TableRow<void, Arbeidsforhold>
            key={utledNøkkel(a, arbeidsgiverOpplysningerPerId)}
            model={a}
            onMouseDown={selectArbeidsforholdCallback}
            onKeyDown={selectArbeidsforholdCallback}
            isSelected={a.id === selectedId}
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
              {a.brukArbeidsforholdet && (
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
