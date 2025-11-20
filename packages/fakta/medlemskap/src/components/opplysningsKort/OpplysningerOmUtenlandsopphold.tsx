import { type ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';
import { LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';

import { type Medlemskap, type UtlandsoppholdPeriode } from '@navikt/fp-types';

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
              <PeriodLabel dateStringFom={fom} dateStringTom={tom} />{' '}
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
  medlemskap: Medlemskap;
  skalViseAvvik: boolean;
}

export const OpplysningerOmUtenlandsopphold = ({ medlemskap, skalViseAvvik }: Props) => {
  const intl = useIntl();

  const { oppholdSistePeriode, oppholdNestePeriode, utlandsoppholdFør, utlandsoppholdEtter } =
    medlemskap.oppgittUtlandsopphold;

  return (
    <EkspansjonsKort
      skalViseAvvik={skalViseAvvik}
      tittel={intl.formatMessage({ id: 'OpplysningsKort.UtenlandsoppholdTittel' })}
      kilde="SØKNAD"
      relevanteAvvik={medlemskap.avvik.filter(a => relevantForUtenlandsopphold.includes(a))}
    >
      <LabeledValue
        size="small"
        label={<FormattedMessage id="OpplysningerOmUtenlandsopphold.BoddForegaaende12.Sporsmaal" />}
        value={
          <FormattedMessage
            id="OpplysningerOmUtenlandsopphold.BoddForegaaende12.Svar"
            values={{ iNorge: oppholdSistePeriode }}
          />
        }
      />

      {utlandsoppholdFør.length > 0 && (
        <UtenlandsoppholdListe
          label={<FormattedMessage id="OpplysningerOmUtenlandsopphold.BoddForegaaende12.HvilkeLand" />}
          utlandsopphold={utlandsoppholdFør}
        />
      )}

      <LabeledValue
        size="small"
        label={<FormattedMessage id="OpplysningerOmUtenlandsopphold.BoNeste12.Sporsmaal" />}
        value={
          <FormattedMessage
            id="OpplysningerOmUtenlandsopphold.BoNeste12.Svar"
            values={{ iNorge: oppholdNestePeriode }}
          />
        }
      />

      {utlandsoppholdEtter.length > 0 && (
        <UtenlandsoppholdListe
          label={<FormattedMessage id="OpplysningerOmUtenlandsopphold.BoNeste12.HvilkeLand" />}
          utlandsopphold={utlandsoppholdEtter}
        />
      )}
    </EkspansjonsKort>
  );
};
