import type { ModalSettPaVentMessageId } from '@navikt/fp-modal-sett-pa-vent';
import type { UiKomponenterMessageId } from '@navikt/fp-ui-komponenter';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type FaktaArbeidOgInntektMessageId =
  keyof typeof nb | ModalSettPaVentMessageId | UiKomponenterMessageId | UtilsMessageId;
