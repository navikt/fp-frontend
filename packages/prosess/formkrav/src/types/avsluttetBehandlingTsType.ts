import type { BehandlingType } from '@navikt/fp-types';

export type AvsluttetBehandling = {
  type: BehandlingType;
  avsluttet?: string;
  uuid: string;
};
