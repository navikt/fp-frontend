import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import {
  DateLabel, Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import { behandlingFormValueSelector } from '@fpsak-frontend/form';
import { MedlemPeriode } from '@fpsak-frontend/types';

const headerTextCodes = [
  'MedlemskapEndringerTabell.GjeldeneFom',
  'MedlemskapEndringerTabell.Opplysning',
];

type PeriodeMedId = MedlemPeriode & { id: number; }

interface OwnProps {
  selectedId?: number;
  velgPeriodeCallback: (_p, id: number, periode: MedlemPeriode) => void;
  perioder?: PeriodeMedId[];
}

const MedlemskapEndringerTabell: FunctionComponent<OwnProps> = ({
  perioder,
  velgPeriodeCallback,
  selectedId,
}) => (
  <Table headerTextCodes={headerTextCodes}>
    {perioder.map((periode: PeriodeMedId) => (
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

interface PureOwnProps {
  behandlingId: number,
  behandlingVersjon: number,
}

const mapStateToPropsFactory = (initialState: any, initialOwnProps: PureOwnProps) => {
  const { behandlingId, behandlingVersjon } = initialOwnProps;
  const perioder = (behandlingFormValueSelector('OppholdInntektOgPerioderForm', behandlingId, behandlingVersjon)(initialState, 'perioder') || [])
    .sort((a: PeriodeMedId, b: PeriodeMedId) => a.vurderingsdato.localeCompare(b.vurderingsdato));
  return () => ({
    perioder,
  });
};

export default connect(mapStateToPropsFactory)(MedlemskapEndringerTabell);
