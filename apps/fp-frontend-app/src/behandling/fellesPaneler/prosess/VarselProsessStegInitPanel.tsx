import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VarselOmRevurderingProsessIndex } from '@navikt/fp-prosess-varsel-om-revurdering';
import { Fagsak, ForhåndsvisMeldingParams } from '@navikt/fp-types';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const getLagringSideeffekter =
  (setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void, opneSokeside: () => void) => () => {
    setSkalOppdatereEtterBekreftelseAvAp(false);

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt
    return () => {
      opneSokeside();
    };
  };

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VARSEL_REVURDERING_MANUELL,
  AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL,
];

interface Props {
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  fagsak: Fagsak;
  opneSokeside: () => void;
}

export const VarselProsessStegInitPanel = ({
  setSkalOppdatereEtterBekreftelseAvAp,
  fagsak,
  opneSokeside,
  ...props
}: Props & ProsessPanelInitProps) => {
  const intl = useIntl();

  const lagringSideEffekter = getLagringSideeffekter(setSkalOppdatereEtterBekreftelseAvAp, opneSokeside);
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const api = useBehandlingApi(props.behandling);

  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(props.behandling));
  const { data: søknad } = useQuery(api.søknadOptions(props.behandling));
  const { data: familiehendelseOrigninalBehandling } = useQuery(
    api.familiehendelseOrigninalBehandlingOptions(props.behandling),
  );
  const { data: søknadOriginalBehandling } = useQuery(api.søknadOriginalBehandlingOptions(props.behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: ForhåndsvisMeldingParams) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: props.behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
      }),
    onSuccess: forhandsvisDokument,
  });

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.VARSEL}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.CheckVarselRevurdering' })}
      skalPanelVisesIMeny={skalViseProsessPanel(standardPanelProps.aksjonspunkter)}
    >
      {familiehendelse && søknad && familiehendelseOrigninalBehandling && søknadOriginalBehandling ? (
        <VarselOmRevurderingProsessIndex
          familiehendelse={familiehendelse}
          soknad={søknad}
          familiehendelseOriginalBehandling={familiehendelseOrigninalBehandling}
          soknadOriginalBehandling={søknadOriginalBehandling}
          previewCallback={forhåndsvis}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
