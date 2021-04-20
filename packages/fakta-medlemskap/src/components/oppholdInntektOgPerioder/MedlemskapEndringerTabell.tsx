import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import {
  DateLabel, Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import { MedlemPeriode } from '@fpsak-frontend/types';
import { formValueSelector } from 'redux-form';

const headerTextCodes = [
  'MedlemskapEndringerTabell.GjeldeneFom',
  'MedlemskapEndringerTabell.Opplysning',
];

type PeriodeMedId = MedlemPeriode & { id: string; }

interface PureOwnProps {
  selectedId?: string;
  velgPeriodeCallback: (_p, id: string, periode: MedlemPeriode) => void;
}

interface MappedOwnProps {
  perioder?: PeriodeMedId[];
}

const MedlemskapEndringerTabell: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  perioder,
  velgPeriodeCallback,
  selectedId,
}) => (
  <Table headerTextCodes={headerTextCodes}>
    {perioder.map((periode) => (
      <TableRow
        key={periode.id}
        id={periode.id}
        onMouseDown={velgPeriodeCallback}
        onKeyDown={velgPeriodeCallback}
        isSelected={periode.id === selectedId}
        model={periode}
        isApLeftBorder={periode.begrunnelse === null && periode.aksjonspunkter.length > 0}
      >
        <TableColumn>
          <DateLabel dateString={periode.vurderingsdato} />
        </TableColumn>
        <TableColumn>
          {periode.årsaker.join()}
        </TableColumn>
      </TableRow>
    ))}
  </Table>
);

MedlemskapEndringerTabell.defaultProps = {
  perioder: [],
};

const mapStateToPropsFactory = (initialState: any) => {
  const perioder = (formValueSelector('OppholdInntektOgPerioderForm')(initialState, 'perioder') || [])
    .sort((a: PeriodeMedId, b: PeriodeMedId) => a.vurderingsdato.localeCompare(b.vurderingsdato));
  return (): MappedOwnProps => ({
    perioder,
  });
};

export default connect(mapStateToPropsFactory)(MedlemskapEndringerTabell);
