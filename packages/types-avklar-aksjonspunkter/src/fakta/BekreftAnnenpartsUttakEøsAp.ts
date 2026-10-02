import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type BekreftAnnenpartsUttakEøsAp = AksjonspunktFraBackend<
  'AVKLAR_UTTAK_I_EØS_FOR_ANNENPART' | 'OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART'
>;
