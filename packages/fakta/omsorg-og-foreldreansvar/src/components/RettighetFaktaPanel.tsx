import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';
import { DateLabel, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, RelatertTilgrensedYtelse, Soknad } from '@navikt/fp-types';

import styles from './rettighetFaktaPanel.module.css';

const getLopendeOrAvsluttetYtelser = (
  ytelse: RelatertTilgrensedYtelse,
): RelatertTilgrensedYtelse['tilgrensendeYtelserListe'] =>
  ytelse.tilgrensendeYtelserListe.filter(y => y.statusNavn !== 'Åpen');

export type FormValues = {
  ytelser: RelatertTilgrensedYtelse[];
  farSokerType?: string;
};

interface Props {
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

/**
 * RettighetFaktaPanel
 */
export const RettighetFaktaPanel = ({ alleMerknaderFraBeslutter }: Props) => {
  const intl = useIntl();
  const { watch } = useFormContext<FormValues>();

  const farSokerType = watch('farSokerType');
  const ytelser = watch('ytelser');

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.Rettighet' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OMSORGSOVERTAKELSE]}
    >
      <VStack gap="4">
        <BodyShort size="small">{farSokerType || '-'}</BodyShort>
        <div>
          <FaktaGruppe
            withoutBorder
            title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.AndreYtelseTilMor' })}
          >
            {ytelser.map(ytelse =>
              getLopendeOrAvsluttetYtelser(ytelse).map(y => (
                <div className={styles.wrapper} key={`${ytelse.relatertYtelseNavn}-${y.periodeFraDato}`}>
                  <BodyShort size="small" className={styles.iverksatt}>
                    <FormattedMessage
                      id="OmsorgOgForeldreansvarFaktaForm.YtelseIverksatt"
                      values={{ ytelseType: ytelse.relatertYtelseNavn }}
                    />
                    <DateLabel dateString={y.periodeFraDato} />
                  </BodyShort>
                </div>
              )),
            )}
            {!ytelser.some(y => getLopendeOrAvsluttetYtelser(y).length > 0) && '-'}
          </FaktaGruppe>
        </div>
      </VStack>
    </FaktaGruppe>
  );
};

RettighetFaktaPanel.buildInitialValues = (
  soknad: Soknad,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
  alleKodeverk: AlleKodeverk,
): FormValues => ({
  ytelser: innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
  farSokerType: soknad.farSokerType
    ? (alleKodeverk['FarSøkerType'].find(k => k.kode === soknad.farSokerType)?.navn ?? '')
    : undefined,
});
