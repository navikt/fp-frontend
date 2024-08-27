import React, { FunctionComponent } from 'react';
import { DateLabel, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';

import { MedlemPeriode } from '@navikt/fp-types';
import { Aksjonspunkt } from '@navikt/ft-types';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

const headerTextCodes = ['MedlemskapEndringerTabell.GjeldeneFom', 'MedlemskapEndringerTabell.Opplysning'];

interface OwnProps {
  perioder: MedlemPeriode[];
  valgtPeriodeVurderingsdato?: string;
  velgPeriodeCallback: (_p: React.KeyboardEvent | React.MouseEvent, id?: string, periode?: MedlemPeriode) => void;
  aksjonspunkter: Aksjonspunkt[];
}

const MedlemskapEndringerTabell: FunctionComponent<OwnProps> = ({
  perioder,
  velgPeriodeCallback,
  valgtPeriodeVurderingsdato,
  aksjonspunkter,
}) => (
  <Table headerTextCodes={headerTextCodes}>
    {perioder.map(periode => (
      <TableRow<string, MedlemPeriode>
        key={periode.vurderingsdato}
        id={periode.vurderingsdato}
        onMouseDown={velgPeriodeCallback}
        onKeyDown={velgPeriodeCallback}
        isSelected={periode.vurderingsdato === valgtPeriodeVurderingsdato}
        model={periode}
        isApLeftBorder={
          periode.aksjonspunkter.some(periodeAp =>
            aksjonspunkter.some(ap => ap.definisjon === periodeAp && ap.status === AksjonspunktStatus.OPPRETTET),
          ) && periode.begrunnelse === undefined
        }
      >
        <TableColumn>
          <DateLabel dateString={periode.vurderingsdato} />
        </TableColumn>
        <TableColumn>{periode.årsaker.join()}</TableColumn>
      </TableRow>
    ))}
  </Table>
);

export default MedlemskapEndringerTabell;
