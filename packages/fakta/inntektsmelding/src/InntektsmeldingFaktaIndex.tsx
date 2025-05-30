import { useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { CircleFillIcon, CoffeeIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, type SortState, Table } from '@navikt/ds-react';
import { BeløpLabel, DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import type {
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  BehandlingAppKontekst,
  Inntektsmelding,
} from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { InntektsmeldingInnhold } from './components/InntektsmeldingInnhold';

import styles from './inntektsmeldingFakta.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export type InntektsmeldingFaktaProps = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  alleBehandlinger: BehandlingAppKontekst[];
};

type TableHeaders = keyof Pick<
  Inntektsmelding,
  'innsendingstidspunkt' | 'arbeidsgiverIdent' | 'startDatoPermisjon' | 'inntektPrMnd' | 'tilknyttedeBehandlingIder'
>;

export const InntektsmeldingFaktaIndex = ({
  arbeidsgiverOpplysningerPerId,
  alleBehandlinger,
  inntektsmeldinger,
}: { inntektsmeldinger: Inntektsmelding[] } & InntektsmeldingFaktaProps) => {
  const { behandling } = usePanelDataContext();

  // Logikk for å sortere tabell tilpasset fra Aksel-eksempel: https://aksel.nav.no/komponenter/core/table#tabledemo-sortable
  const [sort, setSort] = useState<SortState | undefined>({ orderBy: 'innsendingstidspunkt', direction: 'descending' });
  const handleSort = (sortKey: TableHeaders) => {
    setSort(
      sort && sortKey === sort.orderBy && sort.direction === 'descending'
        ? undefined
        : {
            orderBy: sortKey,
            direction: sort && sortKey === sort.orderBy && sort.direction === 'ascending' ? 'descending' : 'ascending',
          },
    );
  };

  const sorterteInntektsmeldinger = sort
    ? sorterInntektsmeldinger({
        inntektsmeldinger,
        arbeidsgiverOpplysningerPerId,
        sortKey: sort.orderBy as TableHeaders,
        behandling,
      })
    : inntektsmeldinger;
  const ims = sort?.direction === 'ascending' ? sorterteInntektsmeldinger : sorterteInntektsmeldinger.toReversed();

  if (ims.length === 0) {
    return (
      <RawIntlProvider value={intl}>
        <HStack gap="2" justify="center" align="center" className={styles.ingenInntektsmeldinger}>
          <BodyShort>
            <FormattedMessage id="InntektsmeldingFaktaPanel.ingen" />
          </BodyShort>
          <CoffeeIcon />
        </HStack>
      </RawIntlProvider>
    );
  }

  return (
    <RawIntlProvider value={intl}>
      <Table sort={sort} onSortChange={sortKey => handleSort(sortKey as TableHeaders)}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader sortKey="innsendingstidspunkt" sortable>
              <FormattedMessage id="InntektsmeldingFaktaPanel.tabell.header.innsendt" />
            </Table.ColumnHeader>
            <Table.ColumnHeader sortKey="arbeidsgiverIdent" sortable>
              <FormattedMessage id="InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver" />
            </Table.ColumnHeader>
            <Table.ColumnHeader sortKey="startDatoPermisjon" sortable>
              <FormattedMessage id="InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt" />
            </Table.ColumnHeader>
            <Table.ColumnHeader sortKey="inntektPrMnd" sortable>
              <FormattedMessage id="InntektsmeldingFaktaPanel.tabell.header.månedsinntekt" />
            </Table.ColumnHeader>
            <Table.ColumnHeader sortKey="tilknyttedeBehandlingIder" sortable>
              <FormattedMessage id="InntektsmeldingFaktaPanel.tabell.header.behandling" />
            </Table.ColumnHeader>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ims.map(inntektsmelding => {
            return (
              <Table.ExpandableRow
                expandOnRowClick
                contentGutter="none"
                togglePlacement="right"
                key={`${inntektsmelding.journalpostId}-${inntektsmelding.internArbeidsforholdId}`}
                content={
                  <InntektsmeldingInnhold
                    alleBehandlinger={alleBehandlinger}
                    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                    inntektsmelding={inntektsmelding}
                  />
                }
              >
                <Table.DataCell>
                  <DateTimeLabel dateTimeString={inntektsmelding.innsendingstidspunkt} separator="kl" />
                </Table.DataCell>
                <Table.DataCell>
                  {arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent]?.navn ?? '-'}
                </Table.DataCell>
                <Table.DataCell>
                  {inntektsmelding.startDatoPermisjon ? (
                    <DateLabel dateString={inntektsmelding.startDatoPermisjon} />
                  ) : (
                    '-'
                  )}
                </Table.DataCell>
                <Table.DataCell>
                  <BeløpLabel beløp={inntektsmelding.inntektPrMnd} />
                </Table.DataCell>
                <Table.DataCell>
                  <InntektsmeldingStatus behandling={behandling} inntektsmelding={inntektsmelding} />
                </Table.DataCell>
              </Table.ExpandableRow>
            );
          })}
        </Table.Body>
      </Table>
    </RawIntlProvider>
  );
};

const sorterInntektsmeldinger = ({
  inntektsmeldinger,
  arbeidsgiverOpplysningerPerId,
  sortKey,
  behandling,
}: {
  inntektsmeldinger: Inntektsmelding[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  sortKey: TableHeaders;
  behandling: Behandling;
}) => {
  if (sortKey === 'arbeidsgiverIdent') {
    return inntektsmeldinger.slice().sort((a, b) => {
      const navnA = arbeidsgiverOpplysningerPerId[a.arbeidsgiverIdent]?.navn;
      const navnB = arbeidsgiverOpplysningerPerId[b.arbeidsgiverIdent]?.navn;

      return sorterStreng(navnA, navnB);
    });
  }

  if (sortKey === 'tilknyttedeBehandlingIder') {
    return inntektsmeldinger.slice().sort((a, b) => {
      const IMStatusA = hentBehandlingIMStatus({ behandling, inntektsmelding: a });
      const IMStatusB = hentBehandlingIMStatus({ behandling, inntektsmelding: b });

      return sorterStreng(IMStatusA, IMStatusB);
    });
  }

  return inntektsmeldinger.slice().sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    return sorterStreng(aValue, bValue);
  });
};

const sorterStreng = (a: string | undefined | number, b: string | undefined | number) => {
  if (a === undefined) {
    return -1;
  }
  if (b === undefined) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const InntektsmeldingStatus = ({
  behandling,
  inntektsmelding,
}: {
  behandling: Behandling;
  inntektsmelding: Inntektsmelding;
}) => {
  const behandlingIMStatus = hentBehandlingIMStatus({ behandling, inntektsmelding });
  if (behandlingIMStatus === 'DENNE') {
    return (
      <HStack gap="1" align="center">
        <CircleFillIcon className={styles.behandlingCircleDenne} />
        <FormattedMessage id="InntektsmeldingFaktaPanel.tabell.cell.behandling.denne" />
      </HStack>
    );
  }
  if (behandlingIMStatus === 'ANDRE') {
    return (
      <HStack gap="1" align="center">
        <CircleFillIcon className={styles.behandlingCircleAndre} />
        <FormattedMessage id="InntektsmeldingFaktaPanel.tabell.cell.behandling.andre" />
      </HStack>
    );
  }

  return (
    <HStack gap="1" align="center">
      <CircleFillIcon className={styles.behandlingCircleIngen} />
      <FormattedMessage id="InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen" />
    </HStack>
  );
};

const hentBehandlingIMStatus = ({
  behandling,
  inntektsmelding,
}: {
  behandling: Behandling;
  inntektsmelding: Inntektsmelding;
}) => {
  if (inntektsmelding.tilknyttedeBehandlingIder.includes(behandling.uuid)) {
    return 'DENNE';
  }
  if (inntektsmelding.tilknyttedeBehandlingIder.length > 0) {
    return 'ANDRE';
  }

  return 'INGEN';
};
