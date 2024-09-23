import { PersonstatusPeriode } from '@navikt/fp-types';
import { getKodeverknavnFn, KodeverkType, personstatusType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

export const getPersonstatuserSomIkkeErBosatt = (personstatuser: PersonstatusPeriode[]) => {
  return personstatuser
    .map(ps => ps.type)
    .filter(ps => ps !== personstatusType.BOSATT)
    .map(type => getKodeverknavnFn(alleKodeverk)(type, KodeverkType.PERSONSTATUS_TYPE))
    .join('/')
    .toLowerCase();
};
