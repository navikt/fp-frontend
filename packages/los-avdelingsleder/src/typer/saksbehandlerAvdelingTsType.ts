import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

type SaksbehandlerAvdeling =Readonly<Pick<SaksbehandlerProfil, 'brukerIdent' | 'navn'>>;

export default SaksbehandlerAvdeling;
