/* eslint-disable @typescript-eslint/no-use-before-define */
import { AlleKodeverk, Behandling, BehandlingAppKontekst, Fagsak, Inntektsmelding } from '@navikt/fp-types';
import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import React, { useRef } from 'react';
import { InntektsmeldingFaktaProps } from './InntektsmeldingFaktaIndex';
import { BodyLong, Button, CopyButton, Heading, HGrid, HStack, Label, List, Modal, VStack } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import { NaturalytelseType } from '@navikt/fp-types/src/arbeidOgInntektsmeldingTsType';
import { hentDokumentLenke } from '@navikt/fp-konstanter';
import { DownloadIcon } from '@navikt/aksel-icons';
import styles from './inntektsmeldingFakta.module.css';
export const InntektsmeldingInnhold = ({
  inntektsmelding,
  arbeidsgiverOpplysningerPerId,
  fagsak,
  alleBehandlinger,
  behandling,
  alleKodeverk,
}: { inntektsmelding: Inntektsmelding } & InntektsmeldingFaktaProps) => {
  const intl = useIntl();

  return (
    <VStack gap="4" className={styles.container}>
      <HStack gap="4" justify="space-between" align="start">
        <Heading level="3" size="small">
          <FormattedMessage id="InntektsmeldingFaktaPanel.innsendingstidspunkt" />{' '}
          <DateTimeLabel dateTimeString={inntektsmelding.innsendingstidspunkt} />
        </Heading>
        <LastNedPdfKnapp fagsak={fagsak} inntektsmelding={inntektsmelding} />
      </HStack>
      <HGrid columns={{ "xl": 3, '2xl': 3 }} gap="8">
        <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.arbeidsgiver.heading' })}>
          <span>
            <FormattedMessage id="InntektsmeldingFaktaPanel.arbeidsgiver.navn" />:{' '}
            {arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent]?.navn ?? '-'}
          </span>
          <span>
            <FormattedMessage id="InntektsmeldingFaktaPanel.arbeidsgiver.underenhet" />:{' '}
            {inntektsmelding.arbeidsgiverIdent}
          </span>
        </InntektsmeldingInfoBlokk>

        <InntektsmeldingInfoBlokk
          tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kontaktperson.heading' })}
        >
          <span>
            <FormattedMessage id="InntektsmeldingFaktaPanel.kontaktperson.navn" />: {inntektsmelding.kontaktpersonNavn}
          </span>
          <HStack align="start" gap="2">
            <span>
              <FormattedMessage id="InntektsmeldingFaktaPanel.kontaktperson.telefon" />:{' '}
              {inntektsmelding.kontaktpersonNummer}
            </span>
            <CopyButton size="xsmall" copyText={inntektsmelding.kontaktpersonNummer} />
          </HStack>
        </InntektsmeldingInfoBlokk>

        <InntektsmeldingInfoBlokk
          tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.månedsinntekt.heading' })}
        >
          <span>{formatCurrencyWithKr(inntektsmelding.inntektPrMnd)}</span>
          {/*TODO: Få inn endringsgrunn når dette er med i data-modellen*/}
        </InntektsmeldingInfoBlokk>

        <BehandlingsOversikt
          alleKodeverk={alleKodeverk}
          inntektsmelding={inntektsmelding}
          alleBehandlinger={alleBehandlinger}
          behandling={behandling}
        />





        <Startdato
          ytelse={getKodeverknavnFraKode(alleKodeverk, KodeverkType.FAGSAK_YTELSE, fagsak.fagsakYtelseType)}
          startDatoPermisjon={inntektsmelding.startDatoPermisjon}
        />

        <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.heading' })}>
          <KildeSystem inntektsmelding={inntektsmelding} />
        </InntektsmeldingInfoBlokk>

        <BortfalteNaturalYtelser inntektsmelding={inntektsmelding} />
        <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.refusjon.heading' })}>
          <Refusjon inntektsmelding={inntektsmelding} />
        </InntektsmeldingInfoBlokk>

      </HGrid>
    </VStack>
  );
};

const Startdato = ({ startDatoPermisjon, ytelse }: { startDatoPermisjon?: string; ytelse: string }) => {
  const intl = useIntl();
  if (!startDatoPermisjon) {
    return null;
  }

  return (
    <InntektsmeldingInfoBlokk
      tittel={intl.formatMessage(
        { id: 'InntektsmeldingFaktaPanel.startDato.heading' },
        {
          ytelse: ytelse.toLowerCase(),
        },
      )}
    >
      <span>{startDatoPermisjon ? <DateLabel dateString={startDatoPermisjon} /> : '-'}</span>
      <span>
        <FormattedMessage id="InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver" />
      </span>
    </InntektsmeldingInfoBlokk>
  );
};

const KildeSystem = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  if (inntektsmelding.kildeSystem.toUpperCase() === 'NAV_NO') {
    return <FormattedMessage id="InntektsmeldingFaktaPanel.kilde.nav" />;
  }
  if (inntektsmelding.kildeSystem.toUpperCase().includes('ALTINN')) {
    return <FormattedMessage id="InntektsmeldingFaktaPanel.kilde.altinn" />;
  }

  return <FormattedMessage id="InntektsmeldingFaktaPanel.kilde.lps" />;
};

const Refusjon = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  if (inntektsmelding.refusjonsperioder.length === 0) {
    return (
      <span>
        {inntektsmelding.refusjonPrMnd ? (
          formatCurrencyWithKr(inntektsmelding.refusjonPrMnd)
        ) : (
          <FormattedMessage id="InntektsmeldingFaktaPanel.refusjon.ingen" />
        )}
      </span>
    );
  }

  const perioderStigende = [...inntektsmelding.refusjonsperioder].sort(
    (a, b) => new Date(a.fom).getTime() - new Date(b.fom).getTime(),
  );
  return (
    <VStack gap="2">
      {perioderStigende.map((refusjon, index, array) => {
        const forrigePeriode = array[index + 1];

        return (
          <VStack key={refusjon.indexKey}>
            <span>
              <FormattedMessage id="InntektsmeldingFaktaPanel.refusjon.fom" /> <DateLabel dateString={refusjon.fom} />
            </span>
            <span>
              <FormattedMessage id="InntektsmeldingFaktaPanel.refusjon.beløp" />:{' '}
              {formatCurrencyWithKr(refusjon.refusjonsbeløp.verdi)}
            </span>
            {forrigePeriode?.fom ? (
              <span>
                <FormattedMessage id="InntektsmeldingFaktaPanel.refusjon.opphører" />{' '}
                <DateLabel dateString={forrigePeriode.fom} />
              </span>
            ) : null}
          </VStack>
        );
      })}
    </VStack>
  );
};

const BortfalteNaturalYtelser = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  const intl = useIntl();
  return (
    <InntektsmeldingInfoBlokk
      tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading' })}
    >
      {inntektsmelding.bortfalteNaturalytelser.length === 0 ? (
        <span>
          <FormattedMessage id="InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen" />
        </span>
      ) : (
        <VStack>
          {inntektsmelding.bortfalteNaturalytelser.map(({ type, periode, beloepPerMnd, indexKey }) => (
            <VStack key={indexKey}>
              <span>{NaturalytelseType[type]}</span>
              <ul>
                <li>
                  <FormattedMessage id="InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom" />{' '}
                  <DateLabel dateString={periode.fomDato} />
                </li>
                <li>
                  <FormattedMessage id="InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi" />:{' '}
                  {formatCurrencyWithKr(beloepPerMnd.verdi)}
                </li>
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

const LastNedPdfKnapp = ({ inntektsmelding, fagsak }: { fagsak: Fagsak; inntektsmelding: Inntektsmelding }) => {
  return (
    <Button
      type="button"
      onClick={() => {
        window.open(
          hentDokumentLenke(fagsak.saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId),
          '_blank',
        );
      }}
      variant="secondary"
      size={'small'}
      icon={<DownloadIcon />}
    >
      <FormattedMessage id="InntektsmeldingFaktaPanel.modal.trigger" />
    </Button>
  );
};

// TODO: denne skal taes i bruk når all info fra PDF er tilgjengelig i GUI.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LastNedPdfModalKnapp = ({ inntektsmelding, fagsak }: { fagsak: Fagsak; inntektsmelding: Inntektsmelding }) => {
  const ref = useRef<HTMLDialogElement>(null);
  const intl = useIntl();

  return (
    <>
      <Button icon={<DownloadIcon />} variant="secondary" size="small" onClick={() => ref.current?.showModal()}>
        <FormattedMessage id="InntektsmeldingFaktaPanel.modal.trigger" />
      </Button>

      <Modal ref={ref} header={{ heading: intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.modal.heading' }) }}>
        <Modal.Body>
          <BodyLong>
            <FormattedMessage id="InntektsmeldingFaktaPanel.modal.body" />
          </BodyLong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            onClick={() => {
              window.open(
                hentDokumentLenke(fagsak.saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId),
                '_blank',
              );
              ref.current?.close();
            }}
            variant="primary"
          >
            <FormattedMessage id="InntektsmeldingFaktaPanel.modal.button.primary" />
          </Button>
          <Button type="button" variant="secondary" onClick={() => ref.current?.close()}>
            <FormattedMessage id="InntektsmeldingFaktaPanel.modal.button.secondary" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const BehandlingsOversikt = ({
  inntektsmelding,
  behandling,
  alleBehandlinger,
  alleKodeverk,
}: {
  inntektsmelding: Inntektsmelding;
  behandling: Behandling;
  alleBehandlinger: BehandlingAppKontekst[];
  alleKodeverk: AlleKodeverk;
}) => {
  const intl = useIntl();
  const bruktIDenneBehandlingen = inntektsmelding.behandlingsIdeer.includes(behandling.uuid);
  const gjeldendeBehandlinger = alleBehandlinger.filter(b => inntektsmelding.behandlingsIdeer.includes(b.uuid));

  const infoTekst = (() => {
    const antallBehandlinger = gjeldendeBehandlinger.length;
    if (bruktIDenneBehandlingen && antallBehandlinger > 1) {
      return (
        <FormattedMessage
          id="InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"
          values={{ antallBehandlinger: antallBehandlinger - 1 }}
        />
      );
    }
    if (bruktIDenneBehandlingen) {
      return <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.bruktKunIDenne" />;
    }
    if (antallBehandlinger === 0) {
      return <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen" />;
    }

    return <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.bruktIAndre" values={{ antallBehandlinger }} />;
  })();

  return (
    <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.behandling.heading' })}>
      {infoTekst}
      <List>
        {gjeldendeBehandlinger.map(b => (
          <List.Item key={b.uuid}>
            <VStack>
              <span>{alleKodeverk.BehandlingType.find(({ kode }) => kode === b.type)?.navn}</span>
              <span>
                <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.opprettet" />{' '}
                <DateTimeLabel dateTimeString={b.opprettet} />
              </span>
              {b.avsluttet ? (
                <span>
                  <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.avsluttet" />{' '}
                  <DateTimeLabel dateTimeString={b.avsluttet} />
                </span>
              ) : null}
            </VStack>
          </List.Item>
        ))}
      </List>
    </InntektsmeldingInfoBlokk>
  );
};
