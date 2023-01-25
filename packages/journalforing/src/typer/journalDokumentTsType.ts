import JournalVariant from '../kodeverk/journalVariant';

type JournalDokument = Readonly <{
    dokumentId: string;
    tittel: string;
    varianter: JournalVariant[],
    lenke: string;
}>

export default JournalDokument;
