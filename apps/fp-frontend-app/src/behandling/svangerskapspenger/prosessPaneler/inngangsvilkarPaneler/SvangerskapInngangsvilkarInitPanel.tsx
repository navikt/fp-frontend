import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { SvangerskapVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-svangerskap';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.SVANGERSKAPSVILKARET];

const VILKAR_KODER = [VilkarType.SVANGERSKAPVILKARET];

export const SvangerskapInngangsvilkarInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(standardPanelProps.behandling);

  const { data: svangerskapspengerTilrettelegging } = useQuery(
    api.svp.svangerskapspengerTilretteleggingOptions(standardPanelProps.behandling),
  );

  return (
    <InngangsvilkarDefaultInitPanel
      vilkarKoder={VILKAR_KODER}
      standardPanelProps={standardPanelProps}
      inngangsvilkarPanelKode="SVANGERSKAP"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'SvangerskapVilkarForm.FyllerVilkår' })}
    >
      <>
        {svangerskapspengerTilrettelegging && (
          <SvangerskapVilkarProsessIndex
            svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
            status={standardPanelProps.status}
            readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
          />
        )}
        {!svangerskapspengerTilrettelegging && <LoadingPanel />}
      </>
    </InngangsvilkarDefaultInitPanel>
  );
};
