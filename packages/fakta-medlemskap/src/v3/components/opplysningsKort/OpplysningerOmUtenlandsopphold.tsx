import React, { FC, ReactElement } from 'react';
import { MedlemskapAvvik, Soknad, UtlandsoppholdPeriode } from '@navikt/fp-types';
import { BodyShort, Label } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import { FaktaKilde } from '../../faktaKilde';
import { toTitleCapitalization } from '../../utils/stringUtils';
import { relevantForUtenlandsopphold } from '../ekspansjonsKort/medlemsAvvik';
import EkspansjonsKort from '../ekspansjonsKort/EkspansjonsKort';

const UtenlandsoppholdListe: FC<{ utlandsopphold: UtlandsoppholdPeriode[]; label: ReactElement }> = ({
  utlandsopphold,
  label,
}) => {
  return (
    <div>
      <Label size="small">{label}</Label>
      <ul style={{ marginBlock: 0 }}>
        {utlandsopphold.map(utenlandsopphold => (
          <li key={utenlandsopphold.fom}>
            <BodyShort size="small">
              <PeriodLabel size="small" dateStringFom={utenlandsopphold.fom} dateStringTom={utenlandsopphold.tom} />{' '}
              <FormattedMessage
                id="OpplysningerOmUtenlandsopphold.iLand"
                values={{ land: toTitleCapitalization(utenlandsopphold.landNavn) }}
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
  avvik: MedlemskapAvvik[] | undefined;
}

const OpplysningerOmUtenlandsopphold: FC<Props> = ({ avvik = [], soknad: { oppgittTilknytning } }) => {
  const intl = useIntl();

  const { oppholdSistePeriode, oppholdNestePeriode, utlandsoppholdFor, utlandsoppholdEtter } = oppgittTilknytning;

  return (
    <EkspansjonsKort
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

      {utlandsoppholdFor.length && (
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

      {utlandsoppholdEtter.length && (
        <UtenlandsoppholdListe
          label={<FormattedMessage id="OpplysningerOmUtenlandsopphold.BoNeste12.HvilkeLand" />}
          utlandsopphold={utlandsoppholdEtter}
        />
      )}
    </EkspansjonsKort>
  );
};

export default OpplysningerOmUtenlandsopphold;
