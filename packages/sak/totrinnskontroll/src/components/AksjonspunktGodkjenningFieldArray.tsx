import { useFieldArray, useFormContext } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { BodyShort, VStack } from '@navikt/ds-react';
import { type Location } from 'history';

import type { SkjermlenkeType } from '@navikt/fp-kodeverk';
import type {
  BehandlingAppKontekst,
  KodeverkMedNavn,
  KodeverkMedNavnTilbakekreving,
  TotrinnskontrollSkjermlenkeContext,
} from '@navikt/fp-types';

import { getAksjonspunkttekst } from './aksjonspunktTekster/aksjonspunktTekstUtleder';
import { GodkjenningPanel } from './GodkjenningPanel';

import styles from './aksjonspunktGodkjenningFieldArray.module.css';

const FIELD_ARRAY_NAME = 'aksjonspunktGodkjenning';

export type AksjonspunktGodkjenningData = {
  aksjonspunktKode: string;
  totrinnskontrollGodkjent?: boolean;
  besluttersBegrunnelse?: string;
  feilFakta?: boolean;
  feilLov?: boolean;
  feilSkjønn?: boolean;
  feilUtredning?: boolean;
  feilSaksflyt?: boolean;
  feilBegrunnelse?: boolean;
};

type Props = {
  behandling: BehandlingAppKontekst;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  readOnly: boolean;
  erForeldrepengerFagsak: boolean;
  erTilbakekreving: boolean;
  skjemalenkeTyper: KodeverkMedNavn<'SkjermlenkeType'>[] | KodeverkMedNavnTilbakekreving<'SkjermlenkeType'>[];
  faktaOmBeregningTilfeller: KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[];
  lagLenke: (skjermlenkeCode: SkjermlenkeType) => Location | undefined;
};

export const AksjonspunktGodkjenningFieldArray = ({
  behandling,
  totrinnskontrollSkjermlenkeContext,
  readOnly,
  erForeldrepengerFagsak,
  erTilbakekreving,
  skjemalenkeTyper,
  faktaOmBeregningTilfeller,
  lagLenke,
}: Props) => {
  const { control, watch } = useFormContext<{
    aksjonspunktGodkjenning: AksjonspunktGodkjenningData[];
  }>();
  const { fields } = useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  const aksjonspunktGodkjenning = watch('aksjonspunktGodkjenning');

  return (
    <VStack gap="space-24">
      {fields.map((field, index) => {
        const { aksjonspunktKode } = aksjonspunktGodkjenning[index];
        const context = totrinnskontrollSkjermlenkeContext.find(c =>
          c.totrinnskontrollAksjonspunkter.some(ta => ta.aksjonspunktKode === aksjonspunktKode),
        );
        const totrinnskontrollAksjonspunkt = context?.totrinnskontrollAksjonspunkter.find(
          c => c.aksjonspunktKode === aksjonspunktKode,
        );

        if (!context || !totrinnskontrollAksjonspunkt) {
          return null;
        }

        const aksjonspunktText = getAksjonspunkttekst(
          erForeldrepengerFagsak,
          behandling.status,
          faktaOmBeregningTilfeller,
          erTilbakekreving,
          totrinnskontrollAksjonspunkt,
          behandling.behandlingsresultat,
        );

        const skjermlenkeTypeKodeverk = skjemalenkeTyper.find(
          skjemalenkeType => skjemalenkeType.kode === context.skjermlenkeType,
        );

        const lenke = lagLenke(context.skjermlenkeType);

        return (
          <div key={field.id}>
            {lenke && skjermlenkeTypeKodeverk && (
              <NavLink to={lenke} onClick={() => window.scroll(0, 0)} className={styles.lenke}>
                {skjermlenkeTypeKodeverk.navn}
              </NavLink>
            )}
            {aksjonspunktText.map((formattedMessage, i) => (
              <div key={aksjonspunktKode.concat('_'.concat(i.toString()))} className={styles.aksjonspunktTextContainer}>
                <BodyShort size="small">{formattedMessage}</BodyShort>
              </div>
            ))}
            <GodkjenningPanel
              index={index}
              totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
              readOnly={readOnly}
            />
          </div>
        );
      })}
    </VStack>
  );
};
