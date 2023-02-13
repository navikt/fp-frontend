import React, { FunctionComponent } from 'react';
import { BodyShort, Button } from '@navikt/ds-react';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import JournalFagsak from '../typer/journalFagsakTsType';
import VelgSakLenke from './SakDetaljer';

type OwnProps = Readonly<{
  saksliste: JournalFagsak[];
  avbrytCallback: () => void;
}>;

/**
 * VelgSakForm - Inneholder formen som lar saksbehandler velge en sak og journalføre dokumentet på, evt opprette ny sak.
 */
const VelgSakForm: FunctionComponent<OwnProps> = ({
  saksliste,
  avbrytCallback,
}) => {
  const finnesSaker = saksliste && saksliste.length > 0;
  return (
    <>
      {!finnesSaker && (
        <BodyShort><FormattedMessage id="Journal.Sak.Ingen" /></BodyShort>
      )}
      {finnesSaker && (
        <>
          {saksliste.map((sak) => (
            <FlexRow>
              <FlexColumn>
                <VelgSakLenke sak={sak} />
              </FlexColumn>
            </FlexRow>
          ))}
        </>
      )}
      <>
        <VerticalSpacer eightPx />
        <FlexRow>
          <FlexColumn>
            <Button
              size="small"
              variant="secondary"
              onClick={avbrytCallback}
              disabled={false}
              type="button"
            >
              <FormattedMessage id="ValgtOppgave.Avbryt" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </>
    </>
  );
};
export default VelgSakForm;
