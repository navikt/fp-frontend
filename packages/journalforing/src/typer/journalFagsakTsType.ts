import { FagsakYtelseType, FagsakStatus, FamilieHendelseType } from '@navikt/ft-kodeverk';

export type FamilieHendelse = Readonly<{
  familiehHendelseDato?: string;
  familihendelseType?: FamilieHendelseType;
}>;

type JournalFagsak = Readonly<{
  saksnummer: string;
  ytelseType: FagsakYtelseType;
  opprettetDato: string;
  førsteUttaksdato?: string;
  status: FagsakStatus;
  familieHendelseJf?: FamilieHendelse;
}>;

export default JournalFagsak;
