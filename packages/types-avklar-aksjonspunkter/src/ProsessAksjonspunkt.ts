import type { BeregningAksjonspunktSubmitType } from '@navikt/ft-prosess-beregningsgrunnlag';

import type { AvklarOpptjeningsvilkaretAp } from './prosess/AvklarOpptjeningsvilkaretAp';
import type { BekreftSokersOpplysningspliktManuAp } from './prosess/BekreftSokersOpplysningspliktManuAp';
import type { BekreftSvangerskapspengervilkarAp } from './prosess/BekreftSvangerskapspengervilkarAp';
import type { Foreldreansvarsvilkar1Ap } from './prosess/Foreldreansvarsvilkar1Ap';
import type { Foreldreansvarsvilkar2Ap } from './prosess/Foreldreansvarsvilkar2Ap';
import type { ForeslaVedtakAp } from './prosess/ForeslaVedtakAp';
import type { ForeslaVedtakManueltAp } from './prosess/ForeslaVedtakManueltAp';
import type { KlageFormkravAp } from './prosess/KlageFormkravAp';
import type { KlageVurderingResultatAp } from './prosess/KlageVurderingResultatAp';
import type { KontrollAvManueltOpprettetRevurderingsbehandlingAp } from './prosess/KontrollAvManueltOpprettetRevurderingsbehandlingAp';
import type { KontrollerRevurderingsBehandlingAp } from './prosess/KontrollerRevurderingsBehandlingAp';
import type { OmsorgsvilkarAp } from './prosess/OmsorgsvilkarAp';
import type { OverstyringAp } from './prosess/OverstyringAp';
import type { OverstyringMedlemskapsvilkaretLopendeAp } from './prosess/OverstyringMedlemskapsvilkaretLopendeAp';
import type { OverstyringSokersOpplysingspliktAp } from './prosess/OverstyringSokersOpplysingspliktAp';
import type { SoknadsfristAp } from './prosess/SoknadsfristAp';
import type { UttakAp } from './prosess/UttakAp';
import type { VarselRevurderingAp } from './prosess/VarselRevurderingAp';
import type { VurdereAnnenYtelseForVedtakAp } from './prosess/VurdereAnnenYtelseForVedtakAp';
import type { VurdereDokumentForVedtakAp } from './prosess/VurdereDokumentForVedtakAp';
import type { VurdereInntektsmeldingKlageForVedtakAp } from './prosess/VurdereInntektsmeldingKlageForVedtakAp';
import type { VurdereYtelseSammeBarnSokerAp } from './prosess/VurdereYtelseSammeBarnSokerAp';
import type { VurderFeilutbetalingAp } from './prosess/VurderFeilutbetalingAp';
import type { VurderInnsynAp } from './prosess/VurderInnsynAp';
import type { VurderSoknadsfristAp } from './prosess/VurderSoknadsfristAp';
import type { VurderTilbaketrekkAp } from './prosess/VurderTilbaketrekkAp';

export type ProsessAksjonspunkt =
  | BekreftSvangerskapspengervilkarAp
  | SoknadsfristAp
  | BekreftSokersOpplysningspliktManuAp
  | OverstyringSokersOpplysingspliktAp
  | AvklarOpptjeningsvilkaretAp
  | OmsorgsvilkarAp
  | VurdereYtelseSammeBarnSokerAp
  | Foreldreansvarsvilkar1Ap
  | Foreldreansvarsvilkar2Ap
  | ForeslaVedtakAp
  | ForeslaVedtakManueltAp
  | VurderInnsynAp
  | VurderFeilutbetalingAp
  | KlageFormkravAp
  | KlageVurderingResultatAp
  | VurderSoknadsfristAp
  | VurderTilbaketrekkAp
  | OverstyringAp
  | KontrollerRevurderingsBehandlingAp
  | VarselRevurderingAp
  | KontrollAvManueltOpprettetRevurderingsbehandlingAp
  | OverstyringMedlemskapsvilkaretLopendeAp
  | VurdereAnnenYtelseForVedtakAp
  | UttakAp
  | Partial<BeregningAksjonspunktSubmitType>
  | VurdereDokumentForVedtakAp
  | VurdereInntektsmeldingKlageForVedtakAp;
