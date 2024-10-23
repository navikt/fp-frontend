import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { List, VStack } from '@navikt/ds-react';
import { AlleKodeverk, Behandling, BehandlingAppKontekst, Inntektsmelding } from '@navikt/fp-types';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

export const BehandlingsOversikt = ({
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
  const bruktIDenneBehandlingen = inntektsmelding.tilknyttedeBehandlingIder.includes(behandling.uuid);
  const gjeldendeBehandlinger = alleBehandlinger.filter(b =>
    inntektsmelding.tilknyttedeBehandlingIder.includes(b.uuid),
  );

  const infoTekst = (() => {
    const antallBehandlinger = gjeldendeBehandlinger.length;
    if (bruktIDenneBehandlingen && antallBehandlinger > 1) {
      return <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere" />;
    }
    if (bruktIDenneBehandlingen) {
      return <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.bruktKunIDenne" />;
    }
    if (antallBehandlinger === 0) {
      return <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen" />;
    }

    return <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.bruktIAndre" />;
  })();

  const sorterteBehandlinger = [...gjeldendeBehandlinger].sort((a, b) => {
    return new Date(a.opprettet).getTime() - new Date(b.opprettet).getTime();
  });

  return (
    <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.behandling.heading' })}>
      {infoTekst}
      <List>
        {sorterteBehandlinger.map(b => (
          <List.Item key={b.uuid}>
            <VStack>
              <span>{alleKodeverk.BehandlingType.find(({ kode }) => kode === b.type)?.navn}</span>
              <span>
                <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.opprettet" />{' '}
                <DateTimeLabel dateTimeString={b.opprettet} separator="kl" />
              </span>
              {b.avsluttet ? (
                <span>
                  <FormattedMessage id="InntektsmeldingFaktaPanel.behandling.avsluttet" />{' '}
                  <DateTimeLabel dateTimeString={b.avsluttet} separator="kl" />
                </span>
              ) : null}
            </VStack>
          </List.Item>
        ))}
      </List>
    </InntektsmeldingInfoBlokk>
  );
};
