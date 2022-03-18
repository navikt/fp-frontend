import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { AvsnittSkiller, VerticalSpacer, EditedIcon } from '@fpsak-frontend/shared-components';
import styles from './graderingUtenBGReadOnly.less';

type OwnProps = {
    aksjonspunkt: Aksjonspunkt;
};

/**
 * Visning av begrunnelse for aksjonspunkt 5050 som ble avviklet i 2019.
 * Vil ikke lenger oppstå men vi må kunne vise begrunnelsen som ble
 * oppgitt av saksbehandler og en kort beskrivelse av aksjonspunktet.
 */
const GraderingUtenBGReadOnly: FunctionComponent<OwnProps> = ({
  aksjonspunkt,
}) => {
  if (!aksjonspunkt || !aksjonspunkt.begrunnelse) {
    return null;
  }
  return (
    <>
      <AvsnittSkiller spaceAbove spaceUnder leftPanel />
      <Element>
        <FormattedMessage id="Beregningsgrunnlag.Gradering.Beskrivelse" />
      </Element>
      <VerticalSpacer sixteenPx />
      <Normaltekst className={styles.readOnlyBlokk}>
        {aksjonspunkt.begrunnelse}
        {' '}
        <EditedIcon />
      </Normaltekst>
    </>
  );
};

export default GraderingUtenBGReadOnly;
