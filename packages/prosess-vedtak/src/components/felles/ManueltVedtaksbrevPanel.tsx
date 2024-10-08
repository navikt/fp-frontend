import React, { FunctionComponent, MouseEvent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, Label, Alert, Link, Detail } from '@navikt/ds-react';
import { ArrowForwardIcon } from '@navikt/aksel-icons';
import {
  FlexContainer,
  FlexRow,
  FlexColumn,
  EditedIcon,
  AvsnittSkiller,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import styles from './manueltVedtaksbrevPanel.module.css';

const maxLength200 = maxLength(200);
const maxLength10000 = maxLength(10000);
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
            <Label size="small" className={styles.avsnittOverskrift}>
              <FormattedMessage id="FritekstBrevPanel.ManueltVedtaksbrev" />
            </Label>
          </FlexColumn>
          <FlexColumn className={styles.space}>
            <Detail>{getLanguageFromSprakkode(språkKode)}</Detail>
          </FlexColumn>
          <FlexColumn>
            {!isReadOnly && skalViseLink && (
              <Link href="#" onClick={forhåndsvisOverstyrtBrev}>
                <span>
                  <FormattedMessage id="FritekstBrevPanel.ForhandsvisManueltVedtaksbrev" />
                </span>
                <ArrowForwardIcon className={styles.pil} />
              </Link>
            )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <hr className={styles.line} />
      <VerticalSpacer twentyPx />
      {!isReadOnly && (
        <Alert variant="info" size="small">
          <Label size="small">
            <FormattedMessage id="VedtakFellesPanel.Forklaring" />
          </Label>
        </Alert>
      )}
      <VerticalSpacer sixteenPx />
      <TextAreaField
        name="overskrift"
        label={intl.formatMessage({ id: 'VedtakForm.Overskrift' })}
        validate={[required, minLength3, maxLength200, hasValidText]}
        maxLength={200}
        readOnly={isReadOnly}
        parse={formaterFritekst}
        className={styles.smallTextArea}
      />
      <VerticalSpacer thirtyTwoPx />
      <TextAreaField
        name="brødtekst"
        label={intl.formatMessage({ id: 'VedtakForm.Innhold' })}
        validate={[required, minLength3, maxLength10000, hasValidText]}
        maxLength={10000}
        readOnly={isReadOnly}
        parse={formaterFritekst}
      />
      {isReadOnly && (
        <>
          <VerticalSpacer sixteenPx />
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <EditedIcon />
              </FlexColumn>
              <FlexColumn>
                <BodyShort size="small">
                  <FormattedMessage id="FritekstBrevPanel.Endret" />
                </BodyShort>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </>
      )}
    </>
  );
};

export default ManueltVedtaksbrevPanel;
