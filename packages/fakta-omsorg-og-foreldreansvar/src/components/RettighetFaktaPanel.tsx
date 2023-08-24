import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { AksjonspunktCode, relatertYtelseTilstand, KodeverkType } from '@navikt/fp-kodeverk';
import { DateLabel, VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn, RelatertTilgrensedYtelse, Soknad } from '@navikt/fp-types';

import { useFormContext } from 'react-hook-form';
import styles from './rettighetFaktaPanel.module.css';

const getLopendeOrAvsluttetYtelser = (
  ytelse: RelatertTilgrensedYtelse,
): RelatertTilgrensedYtelse['tilgrensendeYtelserListe'] =>
  ytelse.tilgrensendeYtelserListe.filter(y => y.status !== relatertYtelseTilstand.APEN);

export type FormValues = {
  ytelser: RelatertTilgrensedYtelse[];
  farSokerType?: string;
};

interface PureOwnProps {
  relatertYtelseTypes: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

interface StaticFunctions {
  buildInitialValues: (
    soknad: Soknad,
    innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
    getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string,
  ) => FormValues;
}

/**
 * RettighetFaktaPanel
 */
const RettighetFaktaPanel: FunctionComponent<PureOwnProps> & StaticFunctions = ({
  relatertYtelseTypes,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  const { watch } = useFormContext<FormValues>();

  const farSokerType = watch('farSokerType');
  const ytelser = watch('ytelser');

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.Rettighet' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.OMSORGSOVERTAKELSE]}
    >
      <BodyShort size="small">{farSokerType || '-'}</BodyShort>
      <VerticalSpacer sixteenPx />
      <FaktaGruppe
        withoutBorder
        title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.AndreYtelseTilMor' })}
      >
        {ytelser.map(ytelse =>
          getLopendeOrAvsluttetYtelser(ytelse).map(y => (
            <div className={styles.wrapper} key={`${ytelse.relatertYtelseType}-${y.periodeFraDato}`}>
              <BodyShort size="small" className={styles.iverksatt}>
                <FormattedMessage
                  id="OmsorgOgForeldreansvarFaktaForm.YtelseIverksatt"
                  values={{ ytelseType: relatertYtelseTypes.find(r => r.kode === ytelse.relatertYtelseType)?.navn }}
                />
                <DateLabel dateString={y.periodeFraDato} />
              </BodyShort>
            </div>
          )),
        )}
        {!ytelser.some(y => getLopendeOrAvsluttetYtelser(y).length > 0) && '-'}
      </FaktaGruppe>
    </FaktaGruppe>
  );
};

RettighetFaktaPanel.buildInitialValues = (
  soknad: Soknad,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string,
): FormValues => ({
  ytelser: innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
  farSokerType: soknad.farSokerType ? getKodeverknavn(soknad.farSokerType, KodeverkType.FAR_SOEKER_TYPE) : undefined,
});

export default RettighetFaktaPanel;
