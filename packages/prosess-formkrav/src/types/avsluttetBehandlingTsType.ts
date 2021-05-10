import { Kodeverk } from '@fpsak-frontend/types';

type AvsluttetBehandling = {
  type: Kodeverk;
  avsluttet?: string;
  uuid: string;
};

export default AvsluttetBehandling;
