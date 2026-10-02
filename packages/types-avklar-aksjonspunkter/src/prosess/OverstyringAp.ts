import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type OverstyringAp = AksjonspunktFraBackend<
  | 'OVERSTYRING_AV_SØKNADSFRISTVILKÅRET'
  | 'OVERSTYRING_AV_FØDSELSVILKÅRET'
  | 'OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET'
  | 'OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR'
  | 'OVERSTYRING_AV_OPPTJENINGSVILKÅRET'
>;
