import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';

import { BehandlingType } from '@navikt/fp-kodeverk';

import { restApiHooks, RestApiPathsKeys } from '../../../../data/fplosRestApi';
import useLosKodeverk from '../../../../data/useLosKodeverk';
import KoSorteringType from '../../../../typer/koSorteringTsType';
import BelopSorteringValg from './BelopSorteringValg';
import DatoSorteringValg from './DatoSorteringValg';

interface OwnProps {
  valgtSakslisteId: number;
  valgteBehandlingtyper?: string[];
  valgtAvdelingEnhet: string;
  erDynamiskPeriode: boolean;
  hentAvdelingensSakslister: (params: { avdelingEnhet: string }) => void;
  hentAntallOppgaver: (sakslisteId: number, avdelingEnhet: string) => void;
}

const bareTilbakekrevingValgt = (valgteBehandlingtyper?: string[]) =>
  valgteBehandlingtyper &&
  valgteBehandlingtyper.some(
    type => type === BehandlingType.TILBAKEKREVING || type === BehandlingType.TILBAKEKREVING_REVURDERING,
  ) &&
  !valgteBehandlingtyper.some(
    type => type !== BehandlingType.TILBAKEKREVING && type !== BehandlingType.TILBAKEKREVING_REVURDERING,
  );

/**
 * SorteringVelger
 */
const SorteringVelger: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  valgteBehandlingtyper,
  valgtAvdelingEnhet,
  erDynamiskPeriode,
  hentAvdelingensSakslister,
  hentAntallOppgaver,
}) => {
  const { resetField } = useFormContext();

  const { startRequest: lagreSakslisteSortering } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING,
  );
  const { startRequest: lagreSakslisteSorteringNumeriskIntervall } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL,
  );
  const koSorteringer = useLosKodeverk<KoSorteringType>('KøSortering');

  return (
    <RadioGroupPanel
      name="sortering"
      label={<FormattedMessage id="SorteringVelger.Sortering" />}
      onChange={sorteringType => {
        resetField('fra', { defaultValue: '' });
        resetField('til', { defaultValue: '' });
        resetField('fomDato', { defaultValue: '' });
        resetField('tomDato', { defaultValue: '' });
        resetField('erDynamiskPeriode', { defaultValue: '' });

        return lagreSakslisteSortering({
          sakslisteId: valgtSakslisteId,
          sakslisteSorteringValg: sorteringType,
          avdelingEnhet: valgtAvdelingEnhet,
        }).then(() => {
          hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
          hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
        });
      }}
      radios={koSorteringer
        .filter(
          koSortering =>
            koSortering.feltkategori !== 'TILBAKEKREVING' || bareTilbakekrevingValgt(valgteBehandlingtyper),
        )
        .map(koSortering => ({
          value: koSortering.kode,
          label: koSortering.navn,
          element: (
            <>
              {koSortering.felttype === 'DATO' && (
                <DatoSorteringValg
                  valgtSakslisteId={valgtSakslisteId}
                  lagreSakslisteSorteringTidsintervallDager={lagreSakslisteSorteringNumeriskIntervall}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                  erDynamiskPeriode={erDynamiskPeriode}
                  hentAvdelingensSakslister={hentAvdelingensSakslister}
                  hentAntallOppgaver={hentAntallOppgaver}
                />
              )}
              {koSortering.felttype === 'HELTALL' && (
                <BelopSorteringValg
                  valgtSakslisteId={valgtSakslisteId}
                  lagreSakslisteSorteringNumerisk={lagreSakslisteSorteringNumeriskIntervall}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                  hentAvdelingensSakslister={hentAvdelingensSakslister}
                  hentAntallOppgaver={hentAntallOppgaver}
                />
              )}
            </>
          ),
        }))}
    />
  );
};

export default SorteringVelger;
