import { init } from '@nais/apm';

export const initFaro = () => {
    if (import.meta.env.MODE === 'development') {
        return;
    }
    init();
};
