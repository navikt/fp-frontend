import type { BehandlingType } from '@navikt/fp-kodeverk';

export type AvsluttetBehandling = {
  type: BehandlingType;
  avsluttet?: string;
  uuid: string;
};
