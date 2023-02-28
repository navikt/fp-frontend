import { FagsakYtelseType, FagsakStatus } from '@navikt/ft-kodeverk';

type JournalFagsak = Readonly<{
    saksnummer: string;
    ytelseType: FagsakYtelseType;
    datoOpprettet: string;
    sistEndret?: string;
    status: FagsakStatus;
}>

export default JournalFagsak;
