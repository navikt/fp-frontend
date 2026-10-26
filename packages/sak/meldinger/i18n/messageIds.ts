import type { BrevEditorMessageId } from '@navikt/fp-brev-editor';
import type { SakUkjentAdresseMessageId } from '@navikt/fp-sak-ukjent-adresse';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type SakMeldingerMessageId = keyof typeof nb | BrevEditorMessageId | SakUkjentAdresseMessageId | UtilsMessageId;
