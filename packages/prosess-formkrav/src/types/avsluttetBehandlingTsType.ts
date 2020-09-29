import { Kodeverk } from '@fpsak-frontend/types';

type AvsluttetBehandling = {
  id: number;
  type: Kodeverk;
  avsluttet?: string;
  uuid?: string;
};

export default AvsluttetBehandling;
