export type SnarvegGruppe = 'global' | 'behandling';

export interface SnarvegDefinisjon {
  /** Unik id som koplar definisjonen til ein registrert handler eller ein innebygd handling. */
  id: string;
  gruppe: SnarvegGruppe;
  /** Tastane som må trykkast. Fleire element = sekvens (t.d. ['G', 'O'] = trykk G, så O). */
  taster: string[];
  /** i18n-nøkkel for beskrivelsen som visast i oversikta. */
  beskrivelseId: string;
  /** Settast når snarvegen berre er aktiv i visse situasjonar (visast med ein merknad). */
  kunNarTilgjengelig?: boolean;
}

export const GLOBALE_SNARVEG_IDER = {
  HJELP: 'hjelp',
  GAA_OPPGAVELISTE: 'gaa-oppgaveliste',
  GAA_INFOTRYGD: 'gaa-infotrygd',
  GAA_AVDELINGSLEDER: 'gaa-avdelingsleder',
  GAA_JOURNALFORING: 'gaa-journalforing',
} as const;

export const BEHANDLING_SNARVEG_IDER = {
  STOTTE_HISTORIKK: 'stotte-historikk',
  STOTTE_MELDINGER: 'stotte-meldinger',
  STOTTE_DOKUMENTER: 'stotte-dokumenter',
  STOTTE_NOTATER: 'stotte-notater',
  STOTTE_TIL_BESLUTTER: 'stotte-til-beslutter',
  STOTTE_FRA_BESLUTTER: 'stotte-fra-beslutter',
  UTVID_DETALJER: 'utvid-detaljer',
  AAPNE_BEHANDLINGSMENY: 'aapne-behandlingsmeny',
  FOKUSER_BEHANDLINGSVELGER: 'fokuser-behandlingsvelger',
  FORRIGE_PROSESS: 'forrige-prosess',
  NESTE_PROSESS: 'neste-prosess',
  FORRIGE_FAKTA: 'forrige-fakta',
  NESTE_FAKTA: 'neste-fakta',
} as const;

const erSekvensDefinisjon = (def: SnarvegDefinisjon): boolean => def.taster.length > 1;

export const snarvegDefinisjoner: SnarvegDefinisjon[] = [
  {
    id: GLOBALE_SNARVEG_IDER.HJELP,
    gruppe: 'global',
    taster: ['?'],
    beskrivelseId: 'Snarveger.Hjelp',
  },
  {
    id: GLOBALE_SNARVEG_IDER.GAA_OPPGAVELISTE,
    gruppe: 'global',
    taster: ['G', 'O'],
    beskrivelseId: 'Snarveger.GaaOppgaveliste',
  },
  {
    id: GLOBALE_SNARVEG_IDER.GAA_INFOTRYGD,
    gruppe: 'global',
    taster: ['G', 'I'],
    beskrivelseId: 'Snarveger.GaaInfotrygd',
  },
  {
    id: GLOBALE_SNARVEG_IDER.GAA_AVDELINGSLEDER,
    gruppe: 'global',
    taster: ['G', 'A'],
    beskrivelseId: 'Snarveger.GaaAvdelingsleder',
    kunNarTilgjengelig: true,
  },
  {
    id: GLOBALE_SNARVEG_IDER.GAA_JOURNALFORING,
    gruppe: 'global',
    taster: ['G', 'J'],
    beskrivelseId: 'Snarveger.GaaJournalforing',
    kunNarTilgjengelig: true,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STOTTE_HISTORIKK,
    gruppe: 'behandling',
    taster: ['1'],
    beskrivelseId: 'Snarveger.StotteHistorikk',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STOTTE_MELDINGER,
    gruppe: 'behandling',
    taster: ['2'],
    beskrivelseId: 'Snarveger.StotteMeldinger',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STOTTE_DOKUMENTER,
    gruppe: 'behandling',
    taster: ['3'],
    beskrivelseId: 'Snarveger.StotteDokumenter',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STOTTE_NOTATER,
    gruppe: 'behandling',
    taster: ['4'],
    beskrivelseId: 'Snarveger.StotteNotater',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STOTTE_TIL_BESLUTTER,
    gruppe: 'behandling',
    taster: ['5'],
    beskrivelseId: 'Snarveger.StotteTilBeslutter',
    kunNarTilgjengelig: true,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.STOTTE_FRA_BESLUTTER,
    gruppe: 'behandling',
    taster: ['6'],
    beskrivelseId: 'Snarveger.StotteFraBeslutter',
    kunNarTilgjengelig: true,
  },
  {
    id: BEHANDLING_SNARVEG_IDER.UTVID_DETALJER,
    gruppe: 'behandling',
    taster: ['E'],
    beskrivelseId: 'Snarveger.UtvidDetaljer',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.AAPNE_BEHANDLINGSMENY,
    gruppe: 'behandling',
    taster: ['M'],
    beskrivelseId: 'Snarveger.AapneBehandlingsmeny',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.FOKUSER_BEHANDLINGSVELGER,
    gruppe: 'behandling',
    taster: ['B'],
    beskrivelseId: 'Snarveger.FokuserBehandlingsvelger',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.FORRIGE_PROSESS,
    gruppe: 'behandling',
    taster: [','],
    beskrivelseId: 'Snarveger.ForrigeProsess',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.NESTE_PROSESS,
    gruppe: 'behandling',
    taster: ['.'],
    beskrivelseId: 'Snarveger.NesteProsess',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.FORRIGE_FAKTA,
    gruppe: 'behandling',
    taster: [';'],
    beskrivelseId: 'Snarveger.ForrigeFakta',
  },
  {
    id: BEHANDLING_SNARVEG_IDER.NESTE_FAKTA,
    gruppe: 'behandling',
    taster: [':'],
    beskrivelseId: 'Snarveger.NesteFakta',
  },
];

export const finnSekvensDefinisjon = (forsteTast: string, andreTast: string): SnarvegDefinisjon | undefined =>
  snarvegDefinisjoner.find(
    def => def.taster.length === 2 && def.taster[0] === forsteTast && def.taster[1] === andreTast,
  );

export const finnEnkelttastDefinisjon = (tast: string): SnarvegDefinisjon | undefined =>
  snarvegDefinisjoner.find(def => def.taster.length === 1 && def.taster[0] === tast);

export const erSekvensStart = (tast: string): boolean =>
  snarvegDefinisjoner.some(def => erSekvensDefinisjon(def) && def.taster[0] === tast);
