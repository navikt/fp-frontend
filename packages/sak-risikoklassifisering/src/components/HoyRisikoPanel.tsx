import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Panel } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, KodeverkMedNavn,Risikoklassifisering } from '@navikt/fp-types';

import { AvklartRisikoklassifiseringAp } from '../types/AvklartRisikoklassifiseringAp';
import { AvklarFaresignalerForm } from './AvklarFaresignalerForm';
import { Faresignaler } from './Faresignaler';

interface Props {
  risikoklassifisering: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  submitCallback: (data: AvklartRisikoklassifiseringAp) => Promise<void>;
  faresignalVurderinger: KodeverkMedNavn[];
}

/**
 * AvklarFaresignaler
 *
 * Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
export const HoyRisikoPanel = ({
  risikoklassifisering,
  aksjonspunkt,
  readOnly,
  submitCallback,
  faresignalVurderinger,
}: Props) => (
  <Panel>
    {aksjonspunkt && aksjonspunkt.status === AksjonspunktStatus.OPPRETTET && (
      <>
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="Risikopanel.Panel.Tittel" />
        </AksjonspunktHelpTextHTML>
        <VerticalSpacer sixteenPx />
      </>
    )}
    <Faresignaler risikoklassifisering={risikoklassifisering} />
    {!!aksjonspunkt && (
      <AvklarFaresignalerForm
        aksjonspunkt={aksjonspunkt}
        readOnly={readOnly}
        submitCallback={submitCallback}
        risikoklassifisering={risikoklassifisering}
        faresignalVurderinger={faresignalVurderinger}
      />
    )}
  </Panel>
);
