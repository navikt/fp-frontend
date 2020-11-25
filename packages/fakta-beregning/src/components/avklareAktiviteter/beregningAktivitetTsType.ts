import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';

type BeregningAktivitetPropType = {
    arbeidsgiverNavn?: string;
    arbeidsgiverId?: string;
    fom?: string;
    tom?: string;
    arbeidsforholdId?: string;
    aktørIdString?: string;
    arbeidsforholdType?: Kodeverk;
    skalBrukes?: boolean;
};

export default BeregningAktivitetPropType;
