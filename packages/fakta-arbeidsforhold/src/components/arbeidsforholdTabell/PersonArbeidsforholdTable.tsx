import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import {
  DateLabel, Image, PeriodLabel, Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import erIBrukImageUrl from '@fpsak-frontend/assets/images/stjerne.svg';
import { ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import CustomArbeidsforhold from '../../typer/CustomArbeidsforholdTsType';

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

const utledNavn = (arbeidsforhold: CustomArbeidsforhold, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
  const navn = arbeidsforhold.navn ? arbeidsforhold.navn : arbeidsgiverOpplysninger?.navn;
  if (arbeidsforhold.lagtTilAvSaksbehandler) {
    return navn;
  }
  return arbeidsforhold.arbeidsforholdId
    ? `${navn}(${arbeidsgiverOpplysninger.identifikator})${getEndCharFromId(arbeidsforhold.eksternArbeidsforholdId)}`
    : `${navn}(${arbeidsgiverOpplysninger.identifikator})`;
};

export const utledNøkkel = (arbeidsforhold: CustomArbeidsforhold, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
  if (arbeidsforhold.lagtTilAvSaksbehandler) {
    return arbeidsforhold.navn ? arbeidsforhold.navn : arbeidsgiverOpplysninger?.navn;
  }
  return `${arbeidsforhold.eksternArbeidsforholdId}${arbeidsforhold.arbeidsforholdId}${arbeidsgiverOpplysninger.identifikator}`;
};

interface OwnProps {
  alleArbeidsforhold: CustomArbeidsforhold[];
  selectedId?: string;
  selectArbeidsforholdCallback: (event: React.MouseEvent | React.KeyboardEvent, id: void, model: CustomArbeidsforhold) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const PersonArbeidsforholdTable: FunctionComponent<OwnProps> = ({
  alleArbeidsforhold,
  selectedId,
  selectArbeidsforholdCallback,
  arbeidsgiverOpplysningerPerId,
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
        const navn = utledNavn(a, arbeidsgiverOpplysningerPerId);
        return (
          <TableRow<void, CustomArbeidsforhold>
            key={utledNøkkel(a, arbeidsgiverOpplysningerPerId)}
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
