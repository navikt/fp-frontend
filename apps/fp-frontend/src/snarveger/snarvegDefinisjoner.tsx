import { type ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

export type SnarvegGruppe = 'global' | 'behandling';

export interface SnarvegDefinisjon {
  /** Unik id som koplar definisjonen til ein registrert handler eller ein innebygd handling. */
  id: string;
  gruppe: SnarvegGruppe;
  /** Tastane som må trykkast. Fleire element = sekvens (t.d. ['G', 'O'] = trykk G, så O). */
  taster: string[];
  /** Beskrivelsen som visast i oversikta. */
  beskrivelse: ReactNode;
  /** Settast når snarvegen berre er aktiv i visse situasjonar (visast med ein merknad). */
  kunNårTilgjengelig?: boolean;
}

export const GLOBALE_SNARVEG_IDER = {
  HJELP: 'hjelp',
  OPPGAVELISTE: 'oppgaveliste',
  INFOTRYGD: 'infotrygd',
  AVDELINGSLEDER: 'avdelingsleder',
  JOURNALFØRING: 'journalføring',
} as const;

export const BEHANDLING_SNARVEG_IDER = {
  STØTTE_HISTORIKK: 'støtte-historikk',
  STØTTE_MELDINGER: 'støtte-meldinger',
  STØTTE_DOKUMENTER: 'støtte-dokumenter',
  STØTTE_NOTATER: 'støtte-notater',
  STØTTE_TIL_BESLUTTER: 'støtte-til-beslutter',
  STØTTE_FRA_BESLUTTER: 'støtte-fra-beslutter',
  UTVID_DETALJER: 'utvid-detaljer',
  ÅPNE_BEHANDLINGSMENY: 'åpne-behandlingsmeny',
  FOKUSER_BEHANDLINGSVELGER: 'fokuser-behandlingsvelger',
  FORRIGE_PROSESS: 'forrige-prosess',
  NESTE_PROSESS: 'neste-prosess',
  FORRIGE_FAKTA: 'forrige-fakta',
  NESTE_FAKTA: 'neste-fakta',
} as const;

export const snarvegDefinisjoner: SnarvegDefinisjon[] = [
  {
    id: GLOBALE_SNARVEG_IDER.HJELP,
    gruppe: 'global',
    taster: ['?'],
    beskrivelse: <FormattedMessage id="Snarveger.Hjelp" />,
  },
  {
    id: GLOBALE_SNARVEG_IDER.OPPGAVELISTE,
    gruppe: 'global',
    taster: ['G', 'O'],
    beskrivelse: <FormattedMessage id="Snarveger.Oppgaveliste" />,
  },
  {
    id: GLOBALE_SNARVEG_IDER.INFOTRYGD,
    gruppe: 'global',
    taster: ['G', 'I'],
    beskrivelse: <FormattedMessage id="Snarveger.Infotrygd" />,
  },
  {
    id: GLOBALE_SNARVEG_IDER.AVDELINGSLEDER,
    gruppe: 'global',
    taster: ['G', 'A'],
    beskrivelse: <FormattedMessage id="Snarveger.Avdelingsleder" />,
    kunNårTilgjengelig: true,
  },
  {
    id: GLOBALE_SNARVEG_IDER.JOURNALFØRING,
    gruppe: 'global',
    taster: ['G', 'J'],
    beskrivelse: <FormattedMessage id="Snarveger.Journalføring" />,
    kunNårTilgjengelig: true,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STØTTE_HISTORIKK,
    gruppe: 'behandling',
    taster: ['1'],
    beskrivelse: <FormattedMessage id="Snarveger.StøtteHistorikk" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STØTTE_MELDINGER,
    gruppe: 'behandling',
    taster: ['2'],
    beskrivelse: <FormattedMessage id="Snarveger.StøtteMeldinger" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STØTTE_DOKUMENTER,
    gruppe: 'behandling',
    taster: ['3'],
    beskrivelse: <FormattedMessage id="Snarveger.StøtteDokumenter" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STØTTE_NOTATER,
    gruppe: 'behandling',
    taster: ['4'],
    beskrivelse: <FormattedMessage id="Snarveger.StøtteNotater" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STØTTE_TIL_BESLUTTER,
    gruppe: 'behandling',
    taster: ['5'],
    beskrivelse: <FormattedMessage id="Snarveger.StøtteTilBeslutter" />,
    kunNårTilgjengelig: true,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STØTTE_FRA_BESLUTTER,
    gruppe: 'behandling',
    taster: ['6'],
    beskrivelse: <FormattedMessage id="Snarveger.StøtteFraBeslutter" />,
    kunNårTilgjengelig: true,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.UTVID_DETALJER,
    gruppe: 'behandling',
    taster: ['E'],
    beskrivelse: <FormattedMessage id="Snarveger.UtvidDetaljer" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.ÅPNE_BEHANDLINGSMENY,
    gruppe: 'behandling',
    taster: ['M'],
    beskrivelse: <FormattedMessage id="Snarveger.ÅpneBehandlingsmeny" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.FOKUSER_BEHANDLINGSVELGER,
    gruppe: 'behandling',
    taster: ['B'],
    beskrivelse: <FormattedMessage id="Snarveger.FokuserBehandlingsvelger" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.FORRIGE_PROSESS,
    gruppe: 'behandling',
    taster: [','],
    beskrivelse: <FormattedMessage id="Snarveger.ForrigeProsess" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.NESTE_PROSESS,
    gruppe: 'behandling',
    taster: ['.'],
    beskrivelse: <FormattedMessage id="Snarveger.NesteProsess" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.FORRIGE_FAKTA,
    gruppe: 'behandling',
    taster: [';'],
    beskrivelse: <FormattedMessage id="Snarveger.ForrigeFakta" />,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.NESTE_FAKTA,
    gruppe: 'behandling',
    taster: [':'],
    beskrivelse: <FormattedMessage id="Snarveger.NesteFakta" />,
  },
];

export const finnSekvensDefinisjon = (førsteTast: string, andreTast: string): SnarvegDefinisjon | undefined =>
  snarvegDefinisjoner.find(
    def => def.taster.length === 2 && def.taster[0] === førsteTast && def.taster[1] === andreTast,
  );

export const finnEnkelttastDefinisjon = (tast: string): SnarvegDefinisjon | undefined =>
  snarvegDefinisjoner.find(def => def.taster.length === 1 && def.taster[0] === tast);

export const erSekvensStart = (tast: string): boolean =>
  snarvegDefinisjoner.some(def => erSekvensDefinisjon(def) && def.taster[0] === tast);

const erSekvensDefinisjon = (def: SnarvegDefinisjon): boolean => def.taster.length > 1;
