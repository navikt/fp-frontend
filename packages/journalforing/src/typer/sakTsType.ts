type Sak = Readonly<{
    saksnummer: string;
    førsteUttaksdato: string,
    status: string,
    ytelsetype: string;
    søknadDato?: string;
}>
export default Sak;
