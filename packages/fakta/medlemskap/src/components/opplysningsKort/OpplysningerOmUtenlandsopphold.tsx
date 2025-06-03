import { type ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import { MedlemskapAvvik, type Soknad, type UtlandsoppholdPeriode } from '@navikt/fp-types';

import { toTitleCapitalization } from '../../utils/stringUtils';
import { EkspansjonsKort } from '../ekspansjonsKort/EkspansjonsKort';
import { relevantForUtenlandsopphold } from '../ekspansjonsKort/medlemsAvvik';

const UtenlandsoppholdListe = ({
  utlandsopphold,
  label,
}: {
  utlandsopphold: UtlandsoppholdPeriode[];
  label: ReactElement;
}) => {
  return (
    <div>
      <Label size="small">{label}</Label>
      <ul style={{ marginBlock: 0 }}>
        {utlandsopphold.map(({ fom, tom, landNavn }) => (
          <li key={fom}>
            <BodyShort size="small">
              <PeriodLabel dateStringFom={fom} dateStringTom={tom ?? undefined} />{' '}
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
  skalViseAvvik: boolean;
}

export const OpplysningerOmUtenlandsopphold = ({
  avvik = [],
  soknad: { oppgittTilknytning },
  skalViseAvvik,
}: Props) => {
  const intl = useIntl();

  const { oppholdSistePeriode, oppholdNestePeriode, utlandsoppholdFor, utlandsoppholdEtter } = oppgittTilknytning;

  return (
    <EkspansjonsKort
      skalViseAvvik={skalViseAvvik}
      tittel={intl.formatMessage({ id: 'OpplysningsKort.UtenlandsoppholdTittel' })}
      kilde="SØKNAD"
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
