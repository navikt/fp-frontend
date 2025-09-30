import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { BehandlingType, KodeverkMedNavn, KodeverkMedNavnTilbakekreving } from '@navikt/fp-types';

import { type BehandlingOppretting, type FormValues, NyBehandlingModal } from './components/NyBehandlingModal';

import messages from '../i18n/nb_NO.json';

const TILBAKEKREVING_BEHANDLINGSTYPER = ['BT-007', 'BT-009'] satisfies BehandlingType[];

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyNyBehandlingIndex.NyForstegangsbehandling' });

interface Props {
  ytelseType: string;
  saksnummer: string;
  behandlingUuid?: string;
  lagNyBehandling: (values: {
    isTilbakekreving: boolean;
    params: {
      saksnummer: string;
      behandlingUuid?: string;
    } & FormValues;
  }) => void;
  behandlingstyper: KodeverkMedNavn<'BehandlingType'>[];
  tilbakekrevingRevurderingArsaker?: KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[];
  revurderingArsaker?: KodeverkMedNavn<'BehandlingÅrsakType'>[];
  behandlingOppretting: BehandlingOppretting[];
  kanTilbakekrevingOpprettes: {
    kanBehandlingOpprettes: boolean;
    kanRevurderingOpprettes: boolean;
  };
  uuidForSistLukkede?: string;
  lukkModal: () => void;
}

export const MenyNyBehandlingIndex = ({ saksnummer, behandlingUuid, lagNyBehandling, lukkModal, ...rest }: Props) => {
  const submit = (formValues: FormValues) => {
    const isTilbakekreving =
      !!formValues.behandlingType && TILBAKEKREVING_BEHANDLINGSTYPER.some(bt => bt === formValues.behandlingType);
    const tilbakekrevingBehandlingUuid = behandlingUuid && isTilbakekreving ? { behandlingUuid } : {};
    const params = {
      saksnummer,
      ...tilbakekrevingBehandlingUuid,
      ...formValues,
    };

    lagNyBehandling({ isTilbakekreving, params });

    lukkModal();
  };
  return (
    <RawIntlProvider value={intl}>
      <NyBehandlingModal cancelEvent={lukkModal} submitCallback={submit} {...rest} />
    </RawIntlProvider>
  );
};
