import React, { FunctionComponent, MouseEvent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import Alertstripe from 'nav-frontend-alertstriper';
import {
  EditedIcon, Image, FlexContainer, FlexRow, FlexColumn,
} from '@navikt/fp-react-components';

import popOutPilSvg from '@fpsak-frontend/assets/images/pop-out-pil.svg';
import { TextAreaField } from '@fpsak-frontend/form-hooks';
import { AvsnittSkiller, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  getLanguageFromSprakkode, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';

import styles from './manueltVedtaksbrevPanel.less';

const maxLength200 = maxLength(200);
const maxLength5000 = maxLength(5000);
const minLength3 = minLength(3);

interface OwnProps {
  forhåndsvisOverstyrtBrev: (e: MouseEvent) => void;
  isReadOnly: boolean;
  språkKode: string;
  skalViseLink: boolean;
}

const ManueltVedtaksbrevPanel: FunctionComponent<OwnProps> = ({
  forhåndsvisOverstyrtBrev,
  isReadOnly,
  språkKode,
  skalViseLink,
}) => {
  const intl = useIntl();
  return (
    <>
      <VerticalSpacer thirtyTwoPx />
      <AvsnittSkiller />
      <VerticalSpacer thirtyTwoPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.space}>
            <Element className={styles.avsnittOverskrift}>
              <FormattedMessage id="FritekstBrevPanel.ManueltVedtaksbrev" />
            </Element>
          </FlexColumn>
          <FlexColumn className={styles.space}>
            <Undertekst>
              {getLanguageFromSprakkode(språkKode)}
            </Undertekst>
          </FlexColumn>
          <FlexColumn>
            {!isReadOnly && skalViseLink && (
            <Lenke href="#" onClick={forhåndsvisOverstyrtBrev}>
              <span>
                <FormattedMessage id="FritekstBrevPanel.ForhandsvisManueltVedtaksbrev" />
              </span>
              <Image src={popOutPilSvg} className={styles.pil} />
            </Lenke>
            )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <hr className={styles.line} />
      <VerticalSpacer twentyPx />
      {!isReadOnly && (
        <Alertstripe type="info" form="inline">
          <Element>
            <FormattedMessage id="VedtakFellesPanel.Forklaring" />
          </Element>
        </Alertstripe>
      )}
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="8">
          <TextAreaField
            name="overskrift"
            label={intl.formatMessage({ id: 'VedtakForm.Overskrift' })}
            validate={[required, minLength3, maxLength200, hasValidText]}
            maxLength={200}
            readOnly={isReadOnly}
            textareaClass={styles.smallTextArea}
          />
        </Column>
      </Row>
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="8">
          <TextAreaField
            name="brødtekst"
            label={intl.formatMessage({ id: 'VedtakForm.Innhold' })}
            validate={[required, minLength3, maxLength5000, hasValidText]}
            maxLength={5000}
            readOnly={isReadOnly}
            textareaClass={styles.bigTextArea}
            // Må erstatte bindestrek kopiert inn fra Word med vanlig bindestrek
            parse={(value: string) => value.replaceAll('‑', '-')}
          />
        </Column>
      </Row>
      {isReadOnly && (
        <>
          <VerticalSpacer sixteenPx />
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <EditedIcon />
              </FlexColumn>
              <FlexColumn>
                <Normaltekst><FormattedMessage id="FritekstBrevPanel.Endret" /></Normaltekst>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </>
      )}
    </>
  );
};

export default ManueltVedtaksbrevPanel;
