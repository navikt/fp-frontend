import { type FagsakStatus, type FagsakYtelseType, FamilieHendelseType } from '@navikt/fp-kodeverk';

export type FamilieHendelse = Readonly<{
  familiehHendelseDato?: string;
  familihendelseType?: FamilieHendelseType;
}>;

export type JournalFagsak = Readonly<{
  saksnummer: string;
  ytelseType: FagsakYtelseType;
  opprettetDato: string;
  førsteUttaksdato?: string;
  status: FagsakStatus;
  familieHendelseJf?: FamilieHendelse;
}>;
