import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  AksjonspunktHelpTextHTML,
  EditedIcon, FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { TimeLineButton } from '@navikt/ft-tidslinje';
import { Label } from '@navikt/ds-react';

import splitPeriodImageHoverUrl from '@fpsak-frontend/assets/images/splitt_hover.svg';
import splitPeriodImageUrl from '@fpsak-frontend/assets/images/splitt.svg';

import styles from './uttakPeriodeDetaljer.less';
import SplittPeriodeModal from './splitt/SplittPeriodeModal';

interface OwnProps {
  isEdited: boolean;
  isReadOnly: boolean;
}

const UttakPeriodeDetaljer: FunctionComponent<OwnProps> = ({
  isEdited,
  isReadOnly,
}) => {
  const intl = useIntl();

  const [visModal, setVisModal] = useState(false);
  const toggleVisningAvModal = useCallback(() => setVisModal((verdi) => !verdi), []);

  return (
    <>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
              {isEdited && <EditedIcon />}
            </Label>
          </FlexColumn>
          <FlexColumn>
            {!isReadOnly && (
              <span className={styles.splitPeriodPosition}>
                <Image
                  tabIndex={0}
                  className={styles.splitPeriodImage}
                  src={splitPeriodImageUrl}
                  srcHover={splitPeriodImageHoverUrl}
                  alt={intl.formatMessage({ id: 'UttakTimeLineData.PeriodeData.DelOppPerioden' })}
                  onMouseDown={toggleVisningAvModal}
                  onKeyDown={(e) => (e.key === 'Enter' ? toggleVisningAvModal() : null)}
                />
                <FormattedMessage id="UttakTimeLineData.PeriodeData.DelOppPerioden" />
              </span>
            )}
            {visModal && (
              <SplittPeriodeModal
                cancel={this.hideModal}
                fomDato={selectedItemData}
                tomDato={selectedItemData}
                submit={this.splitPeriod}
              />
            )}
          </FlexColumn>
          <FlexColumn>
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={callbackBackward} />
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={callbackForward} />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer sixteenPx />
      {selectedItemData.manuellBehandlingÅrsak && selectedItemData.manuellBehandlingÅrsak !== '-' && (
        <>
          <AksjonspunktHelpTextHTML isAksjonspunktOpen={selectedItemData.manuellBehandlingÅrsak !== null}>
            {selectedItemData.periodeType
              ? hentApTekst(selectedItemData.manuellBehandlingÅrsak, getKodeverknavn, arbeidsgiverOpplysningerPerId, stonadskonto,
                selectedItemData.periodeType)
              : hentApTekst(selectedItemData.manuellBehandlingÅrsak, getKodeverknavn, arbeidsgiverOpplysningerPerId, stonadskonto)}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer twentyPx />
        </>
      )}
    </>
  );
};

export default UttakPeriodeDetaljer;
