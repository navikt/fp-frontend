import React, { FC, ReactElement } from 'react';
import { MedlemskapAvvik, Soknad, UtlandsoppholdPeriode } from '@navikt/fp-types';
import { BodyShort, Label } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import { FaktaKilde } from '../../faktaKilde';
import { toTitleCapitalization } from '../../utils/stringUtils';
import { relevantForUtenlandsopphold } from '../ekspansjonsKort/medlemsAvvik';
import EkspansjonsKort from '../ekspansjonsKort/EkspansjonsKort';
import { TIDENES_ENDE } from '@navikt/ft-utils';

const UtenlandsoppholdListe: FC<{ utlandsopphold: UtlandsoppholdPeriode[]; label: ReactElement }> = ({
  utlandsopphold,
  label,
}) => {
  return (
    <div>
      <Label size="small">{label}</Label>
      <ul style={{ marginBlock: 0 }}>
        {utlandsopphold.map(({ fom, tom, landNavn }) => (
          <li key={fom}>
            <BodyShort size="small">
              <PeriodLabel
                size="small"
                dateStringFom={fom}
                dateStringTom={tom === null || tom === TIDENES_ENDE ? undefined : tom}
              />{' '}
              <FormattedMessage
                id="OpplysningerOmUtenlandsopphold.iLand"
                values={{ land: toTitleCapitalization(landNavn) }}
              />
            </BodyShort>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Props {
  soknad: Soknad;
  avvik: MedlemskapAvvik[];
  readOnly: boolean;
}

const OpplysningerOmUtenlandsopphold: FC<Props> = ({ avvik = [], soknad: { oppgittTilknytning }, readOnly }) => {
  const intl = useIntl();

  const { oppholdSistePeriode, oppholdNestePeriode, utlandsoppholdFor, utlandsoppholdEtter } = oppgittTilknytning;

  return (
    <EkspansjonsKort
      readOnly={readOnly}
      tittel={intl.formatMessage({ id: 'OpplysningsKort.UtenlandsoppholdTittel' })}
      kilde={FaktaKilde.SOKNAD}
      relevanteAvvik={avvik.filter(a => relevantForUtenlandsopphold.includes(a))}
    >
      <div>
        <Label size="small">
          <FormattedMessage id="OpplysningerOmUtenlandsopphold.BoddForegaaende12.Sporsmaal" />
        </Label>
        <BodyShort size="small">
          <FormattedMessage
            id="OpplysningerOmUtenlandsopphold.BoddForegaaende12.Svar"
            values={{ iNorge: oppholdSistePeriode }}
          />
        </BodyShort>
      </div>

      {utlandsoppholdFor.length > 0 && (
        <UtenlandsoppholdListe
          label={<FormattedMessage id="OpplysningerOmUtenlandsopphold.BoddForegaaende12.HvilkeLand" />}
          utlandsopphold={utlandsoppholdFor}
        />
      )}

      <div>
        <Label size="small">
          <FormattedMessage id="OpplysningerOmUtenlandsopphold.BoNeste12.Sporsmaal" />
        </Label>
        <BodyShort size="small">
          <FormattedMessage
            id="OpplysningerOmUtenlandsopphold.BoNeste12.Svar"
            values={{ iNorge: oppholdNestePeriode }}
          />
        </BodyShort>
      </div>

      {utlandsoppholdEtter.length > 0 && (
        <UtenlandsoppholdListe
          label={<FormattedMessage id="OpplysningerOmUtenlandsopphold.BoNeste12.HvilkeLand" />}
          utlandsopphold={utlandsoppholdEtter}
        />
      )}
    </EkspansjonsKort>
  );
};

export default OpplysningerOmUtenlandsopphold;
