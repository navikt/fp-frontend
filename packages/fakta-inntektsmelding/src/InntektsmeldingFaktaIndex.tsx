/* eslint-disable @typescript-eslint/no-use-before-define */        // TODO
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  BehandlingAppKontekst,
  Fagsak,
  Inntektsmelding,
} from '@navikt/fp-types';
import { InntektsmeldingInnsendingsårsak, NaturalytelseType } from '@navikt/fp-types/src/arbeidOgInntektsmeldingTsType';
import { hentDokumentLenke } from '@navikt/fp-konstanter';
import React, { useRef, useState } from 'react';
import {
  BodyLong,
  Button,
  CopyButton,
  Heading,
  HGrid,
  HStack,
  Label,
  List,
  Modal,
  SortState,
  Table,
  VStack,
} from '@navikt/ds-react';
import { DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { createIntl, formatCurrencyWithKr } from '@navikt/ft-utils';
import { CircleFillIcon, DownloadIcon } from '@navikt/aksel-icons';

import messages from '../i18n/nb_NO.json';
import { RawIntlProvider } from 'react-intl';

const intl = createIntl(messages);

export type OwnProps = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  behandling: Behandling;
  alleBehandlinger: BehandlingAppKontekst[];
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
};

type TableHeaders = keyof Pick<
  Inntektsmelding,
  | 'innsendingsårsak'
  | 'innsendingstidspunkt'
  | 'arbeidsgiverIdent'
  | 'startDatoPermisjon'
  | 'inntektPrMnd'
  | 'behandlingsIdeer'
>;

export const InntektsmeldingFaktaIndex = ({
                                         arbeidsgiverOpplysningerPerId,
                                         fagsak,
                                         alleBehandlinger,
                                         behandling,
  alleKodeverk,
                                         inntektsmeldinger,
                                       }: { inntektsmeldinger: Inntektsmelding[] } & OwnProps) => {
  console.log(inntektsmeldinger);
  // Logikk for å sortere tabell tilpasset fra Aksel-eksempel: https://aksel.nav.no/komponenter/core/table#tabledemo-sortable
  const [sort, setSort] = useState<SortState | undefined>({ orderBy: 'tidspunkt', direction: 'ascending' });
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
  const ims = sort?.direction === 'ascending' ? sorterteInntektsmeldinger : sorterteInntektsmeldinger.reverse();

  return (
    <RawIntlProvider value={intl}>
    <Table sort={sort} onSortChange={sortKey => handleSort(sortKey as TableHeaders)}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader sortKey="innsendingsårsak" sortable>
            Type
          </Table.ColumnHeader>
          <Table.ColumnHeader sortKey="innsendingstidspunkt" sortable>
            Innsendt
          </Table.ColumnHeader>
          <Table.ColumnHeader sortKey="arbeidsgiverIdent" sortable>
            Arbeidsgiver
          </Table.ColumnHeader>
          <Table.ColumnHeader sortKey="startDatoPermisjon" sortable>
            Skjæringst.
          </Table.ColumnHeader>
          <Table.ColumnHeader sortKey="inntektPrMnd" sortable>
            Månedsi.
          </Table.ColumnHeader>
          <Table.ColumnHeader sortKey="behandlingsIdeer" sortable>
            Behandling
          </Table.ColumnHeader>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {ims.map((inntektsmelding, index) => {
          return (
            <Table.ExpandableRow
              expandOnRowClick
              togglePlacement="right"
              key={index}
              content={
                <InntektsmeldingContent
                  alleKodeverk={alleKodeverk}
                  fagsak={fagsak}
                  behandling={behandling}
                  alleBehandlinger={alleBehandlinger}
                  arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                  inntektsmelding={inntektsmelding}
                />
              }
            >
              <Table.DataCell>{InntektsmeldingInnsendingsårsak[inntektsmelding.innsendingsårsak]}</Table.DataCell>
              <Table.DataCell>
                <DateTimeLabel dateTimeString={inntektsmelding.innsendingstidspunkt} />
              </Table.DataCell>
              <Table.DataCell>{arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent]?.navn ?? "-"}</Table.DataCell>
              <Table.DataCell>
                {inntektsmelding.startDatoPermisjon ? (
                  <DateLabel dateString={inntektsmelding.startDatoPermisjon} />
                ) : (
                  '-'
                )}
              </Table.DataCell>
              <Table.DataCell>{formatCurrencyWithKr(inntektsmelding.inntektPrMnd)}</Table.DataCell>
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

const LastNedPdfKnapp = ({ inntektsmelding, fagsak }: { fagsak: Fagsak; inntektsmelding: Inntektsmelding }) => {

  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div className="py-16">
      <Button icon={<DownloadIcon />} variant="secondary" size="small" onClick={() => ref.current?.showModal()}>Last ned PDF</Button>

      <Modal ref={ref} header={{ heading: "All informasjon fra PDF’en er tilgjengelig i faktapanelet" }}>
        <Modal.Body>
          <BodyLong>
            PDF’en du skal laste ned inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel laste ned hvis du ønsker det.
          </BodyLong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            onClick={() => {
              window.open(hentDokumentLenke(fagsak.saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId), '_blank');
              ref.current?.close();
            }}
            variant="primary"
          >
            Last ned som PDF
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => ref.current?.close()}
          >
            Avbryt
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const BehandlingsOversikt = ({
                               inntektsmelding,
                               behandling,
                               alleBehandlinger,
  alleKodeverk,
                             }: {
  inntektsmelding: Inntektsmelding;
  behandling: Behandling
  alleBehandlinger: BehandlingAppKontekst[];
  alleKodeverk: AlleKodeverk,
}) => {
  const bruktIDenneBehandlingen = inntektsmelding.behandlingsIdeer.includes(behandling.uuid);

  const gjeldendeBehandlinger = alleBehandlinger.filter(b =>
    inntektsmelding.behandlingsIdeer.includes(b.uuid),
  );

  const infoTekst = (()=>{
    const antallBehandlinger = gjeldendeBehandlinger.length;
    if (bruktIDenneBehandlingen && antallBehandlinger > 1) {
      return `Brukt i denne og tidligere behandlinger (${antallBehandlinger})`;
    }
    if (bruktIDenneBehandlingen) {
      return "Brukt i denne behandlingen"
    }
    if (antallBehandlinger === 0) {
      return "Ikke brukt i noen behandlinger"
    }

    return `Brukt i andre behandlinger (${antallBehandlinger})`
  })();

  return (
    <InntektsmeldingInfoBlokk tittel={'Behandling'}>
      {infoTekst}
      <List>
        {gjeldendeBehandlinger.map(b => (
          <List.Item key={b.uuid}>
            <VStack>
              <span>{alleKodeverk.BehandlingType.find(({kode}) => kode === b.type)?.navn}</span>
              <span>Opprettet <DateTimeLabel dateTimeString={b.opprettet} /></span>
              {b.avsluttet ? <span>Avsluttet <DateTimeLabel dateTimeString={b.avsluttet} /></span> : null}
            </VStack></List.Item>
        ))}

      </List>
    </InntektsmeldingInfoBlokk>
  )
}

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

  if (sortKey === 'behandlingsIdeer') {
    return inntektsmeldinger.slice().sort((a, b) => {
      const AinnegårIBehandling = a.behandlingsIdeer.includes(behandling.uuid);
      const BinnegårIBehandling = b.behandlingsIdeer.includes(behandling.uuid);

      if (AinnegårIBehandling && BinnegårIBehandling) {
        return 0;
      }
      return AinnegårIBehandling ? 1 : -1;
    });
  }

  return inntektsmeldinger.slice().sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    // TODO: fungerer. Hadde vanligvis brukt Lodash, gode tips for uten Lodash?
    return sorterStreng(aValue, bValue);
  });
};

const sorterStreng = (a: string, b: string) => {
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
  console.log(behandling);
  if (inntektsmelding.behandlingsIdeer.includes(behandling.uuid)) {
    return (
      <HStack gap="1" align="center">
        <CircleFillIcon style={{ color: 'var(--a-green-400)' }} /> Denne
      </HStack>
    );
  }
  if (inntektsmelding.behandlingsIdeer.length > 0) {
    return (
      <HStack gap="1" align="center">
        <CircleFillIcon style={{ color: 'var(--a-border-subtle)' }} /> Tidligere
      </HStack>
    );
  }

  return (
    <HStack gap="1" align="center">
      <CircleFillIcon style={{ color: 'var(--a-border-subtle)' }} /> Ingen
    </HStack>
  );
};

const InntektsmeldingContent = ({
                                  inntektsmelding,
                                  arbeidsgiverOpplysningerPerId,
                                  fagsak,
                                  alleBehandlinger,
                                  behandling,
                                  alleKodeverk
                                }: { inntektsmelding: Inntektsmelding } & OwnProps) => {
  return (
    <VStack
      gap="4"
      style={{ background: 'rgba(18, 43, 68, 0.08)', padding: '1.5rem 1rem', marginLeft: '-3rem', borderRadius: '4px' }}
    >
      <HStack gap="4" justify="space-between" align="start">
        <Heading level="3" size="small">
          Inntektsmelding sendt <DateTimeLabel dateTimeString={inntektsmelding.innsendingstidspunkt} />
        </Heading>
        <LastNedPdfKnapp fagsak={fagsak} inntektsmelding={inntektsmelding} />
      </HStack>
      <HGrid columns={{ md: 3, '2xl': 4 }} gap="8">
        <InntektsmeldingInfoBlokk tittel={'Arbeidsgiver'}>
          <span>Virksomhetsnavn: {arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent]?.navn ?? "-"}</span>
          <span>Org.nr. for underenhet: {inntektsmelding.arbeidsgiverIdent} </span>
        </InntektsmeldingInfoBlokk>

        <InntektsmeldingInfoBlokk tittel={'Kontaktperson fra arbeidsgiver'}>
          <span>Navn: {inntektsmelding.kontaktpersonNavn}</span>
          <HStack align="start" gap="2">
            <span>Telefonnummer {inntektsmelding.kontaktpersonNummer}</span>{' '}
            <CopyButton size="xsmall" copyText={inntektsmelding.kontaktpersonNummer} />{' '}
          </HStack>
        </InntektsmeldingInfoBlokk>


        <InntektsmeldingInfoBlokk tittel={'Månedsinntekt'}>
          <span>{formatCurrencyWithKr(inntektsmelding.inntektPrMnd)}</span>
          {/*TODO: Få inn endringsgrunn*/}
        </InntektsmeldingInfoBlokk>

        <InntektsmeldingInfoBlokk tittel={'Første dag med foreldrepenger'}>
          <span>
            {inntektsmelding.startDatoPermisjon ? <DateLabel dateString={inntektsmelding.startDatoPermisjon} /> : '-'}
          </span>
          <span>Oppgitt av arbeidsgiver</span>
        </InntektsmeldingInfoBlokk>

        <InntektsmeldingInfoBlokk tittel={'Kilde'}>
          <KildeSystem inntektsmelding={inntektsmelding} />
        </InntektsmeldingInfoBlokk>

        <InntektsmeldingInfoBlokk tittel={'Refusjon'}>
          <Refusjon inntektsmelding={inntektsmelding} />
        </InntektsmeldingInfoBlokk>
        <BortfalteNaturalYtelser inntektsmelding={inntektsmelding} />
        <BehandlingsOversikt alleKodeverk={alleKodeverk} inntektsmelding={inntektsmelding} alleBehandlinger={alleBehandlinger} behandling={behandling} />

      </HGrid>
    </VStack>
  );
};

const KildeSystem = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  if (inntektsmelding.kildeSystem.toUpperCase() === "NAV_NO") {
    return "NAV";
  }
  if (inntektsmelding.kildeSystem.toUpperCase() === "ALTINN") {
    return "Altinn";
  }

  return "LPS";
}

const Refusjon = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  if (inntektsmelding.refusjonsperioder.length === 0) {
    return (
      <span>
        {inntektsmelding.refusjonPrMnd ? formatCurrencyWithKr(inntektsmelding.refusjonPrMnd) : 'Ingen refusjon'}
      </span>
    );
  }

  const perioderStigende = [...inntektsmelding.refusjonsperioder].sort(
    (a, b) => new Date(a.fom).getTime() - new Date(b.fom).getTime(),
  );
  console.log(perioderStigende);
  return (
    <VStack gap="2">
      {perioderStigende.map((refusjon, index, array) => {
        const forrigePeriode = array[index + 1];

        return (
          <VStack key={refusjon.indexKey}>
            <span>
              Krever refusjon fra <DateLabel dateString={refusjon.fom} />
            </span>
            <span>Refusjonsbeløp: {formatCurrencyWithKr(refusjon.refusjonsbeløp.verdi)}</span>
            {forrigePeriode?.fom ? (
              <span>
                Opphører <DateLabel dateString={forrigePeriode.fom} />
              </span>
            ) : null}
          </VStack>
        );
      })}
    </VStack>
  );
};

const BortfalteNaturalYtelser = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  return (
    <InntektsmeldingInfoBlokk tittel={'Naturalytelser som faller bort'}>
      {inntektsmelding.bortfalteNaturalytelser.length === 0 ? (
        <span>Ingen</span>
      ) : (
        <VStack>
          {inntektsmelding.bortfalteNaturalytelser.map(({ type, periode, beloepPerMnd, indexKey }) => (
            <VStack key={indexKey}>
              <span>{NaturalytelseType[type]}</span>
              <ul style={{ margin: 0 }}>
                <li>
                  Fra og med <DateLabel dateString={periode.fomDato} />
                </li>
                <li>Verdi pr måned: {formatCurrencyWithKr(beloepPerMnd.verdi)}</li>
              </ul>
            </VStack>
          ))}
        </VStack>
      )}
    </InntektsmeldingInfoBlokk>
  );
};

const InntektsmeldingInfoBlokk = ({ tittel, children }: { tittel: string; children: React.ReactNode }) => {
  return (
    <VStack>
      <Label size="medium">{tittel}</Label>
      {children}
    </VStack>
  );
};
