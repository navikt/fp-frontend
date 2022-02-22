import React, {
  FunctionComponent, useState, useCallback, useEffect,
} from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { Image, Tooltip } from '@navikt/fp-react-components';

import {
  DateTimeLabel, Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import sendDokumentImageUrl from '@fpsak-frontend/assets/images/send_dokument.svg';
import mottaDokumentImageUrl from '@fpsak-frontend/assets/images/motta_dokument.svg';
import internDokumentImageUrl from '@fpsak-frontend/assets/images/intern_dokument.svg';
import erIBrukImageUrl from '@fpsak-frontend/assets/images/stjerne.svg';
import { Dokument } from '@fpsak-frontend/types';

import styles from './documentList.less';

const headerTextCodes = [
  'DocumentList.Direction',
  'DocumentList.DocumentType',
  'DocumentList.Gjelder',
  'DocumentList.DateTime',
];

const isTextMoreThan25char = (text: string): boolean => !!text && text.length > 25;
const trimText = (text: string): string => `${text.substring(0, 24)}...`;

const getDirectionImage = (document: Dokument): string => {
  if (document.kommunikasjonsretning === kommunikasjonsretning.INN) {
    return mottaDokumentImageUrl;
  }
  if (document.kommunikasjonsretning === kommunikasjonsretning.UT) {
    return sendDokumentImageUrl;
  }
  return internDokumentImageUrl;
};
const getDirectionText = (document: Dokument): string => {
  if (document.kommunikasjonsretning === kommunikasjonsretning.INN) {
    return 'DocumentList.Motta';
  }
  if (document.kommunikasjonsretning === kommunikasjonsretning.UT) {
    return 'DocumentList.Send';
  }
  return 'DocumentList.Intern';
};

const markerSomValgtEllerÅpneDokumenter = (
  event: React.SyntheticEvent,
  setValgteDokumentIder: (ider: any) => void,
  erIMarkeringsmodus: boolean,
  id: string,
  valgteDokumentIder: string[],
  selectDocumentCallback: (e: React.SyntheticEvent, id?: number | string, dokument?: Dokument) => void,
  documents: Dokument[],
): void => {
  setValgteDokumentIder((ider: string[]) => {
    if (erIMarkeringsmodus) {
      return ider.includes(id) ? ider.filter((i) => i !== id) : ider.concat([id]);
    }
    return ider.includes(id) ? ider : [id];
  });
  if (!erIMarkeringsmodus) {
    const dokumentIderSomSkalÅpnes = valgteDokumentIder.includes(id) ? valgteDokumentIder : [id];
    dokumentIderSomSkalÅpnes.forEach((dId) => selectDocumentCallback(event, dId, documents.find((d) => d.dokumentId === dId)));
  }
};

interface OwnProps {
  documents: Dokument[];
  behandlingUuid?: string;
  selectDocumentCallback: (e: React.SyntheticEvent, id?: number | string, dokument?: Dokument) => void;
}

type Timeout = ReturnType<typeof setTimeout>;

/**
 * DocumentList
 *
 * Presentasjonskomponent. Viser dokumenter i en liste. Tar også inn en callback-funksjon som blir
 * trigget når saksbehandler velger et dokument. Finnes ingen dokumenter blir det kun vist en label
 * som viser at ingen dokumenter finnes på fagsak.
 */
const DocumentList: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  documents,
  behandlingUuid,
  selectDocumentCallback,
}) => {
  const [isShiftPressed, setShiftPressed] = useState(false);
  const [valgteDokumentIder, setValgteDokumentIder] = useState<string[]>([]);
  const timeoutMapRef = React.useRef<Record<string, Timeout | undefined>>({});

  useEffect(() => () => Object.values(timeoutMapRef).forEach((timeout?: Timeout) => (timeout && clearTimeout(timeout))), [timeoutMapRef]);

  const dokumentKeyHandler = useCallback((event: React.KeyboardEvent, id?: string) => {
    if (id === undefined) {
      return;
    }
    const isShiftKey = event.key === 'Shift';
    if (isShiftKey) {
      setShiftPressed(event.type === 'keydown');
    }

    if (!isShiftKey) {
      markerSomValgtEllerÅpneDokumenter(event, setValgteDokumentIder, isShiftPressed, id, valgteDokumentIder, selectDocumentCallback, documents);
    }
  }, [valgteDokumentIder, isShiftPressed]);

  const dokumentMouseHandler = useCallback((event: React.MouseEvent, id?: string) => {
    if (id === undefined) {
      return;
    }
    const currentTimeout = timeoutMapRef.current[id];
    if (currentTimeout) {
      clearTimeout(currentTimeout);
      timeoutMapRef.current = { [id]: undefined };
      markerSomValgtEllerÅpneDokumenter(event, setValgteDokumentIder, false, id, valgteDokumentIder, selectDocumentCallback, documents);
    } else {
      const callback = () => {
        const cTimeout = timeoutMapRef.current[id];
        if (cTimeout) {
          clearTimeout(cTimeout);
        }
        timeoutMapRef.current = { [id]: undefined };
        markerSomValgtEllerÅpneDokumenter(event, setValgteDokumentIder, true, id, valgteDokumentIder, selectDocumentCallback, documents);
      };
      timeoutMapRef.current = { [id]: setTimeout(callback, 500) };
    }
  }, [valgteDokumentIder]);

  if (documents.length === 0) {
    return <Normaltekst className={styles.noDocuments}><FormattedMessage id="DocumentList.NoDocuments" /></Normaltekst>;
  }
  return (
    <Table headerTextCodes={headerTextCodes}>
      {documents.map((document) => {
        const directionImage = getDirectionImage(document);
        const directionTextCode = getDirectionText(document);
        return (
          <TableRow<string>
            key={document.dokumentId}
            id={document.dokumentId}
            onMouseDown={dokumentMouseHandler}
            onKeyDown={dokumentKeyHandler}
            isSelected={valgteDokumentIder.some((dokId) => dokId === document.dokumentId)}
            useMultiselect
          >
            <TableColumn>
              <Image
                className={styles.image}
                src={directionImage}
                alt={intl.formatMessage({ id: directionTextCode })}
                tooltip={intl.formatMessage({ id: directionTextCode })}
              />
            </TableColumn>
            <TableColumn>
              {document.tittel}
              {document.behandlingUuidList && behandlingUuid && document.behandlingUuidList.includes(behandlingUuid) && (
                <Image
                  className={styles.image}
                  src={erIBrukImageUrl}
                  tooltip={<FormattedMessage id="DocumentList.IBruk" />}
                />
              )}
            </TableColumn>
            <TableColumn>
              {document.gjelderFor && isTextMoreThan25char(document.gjelderFor) && (
                <Tooltip content={<Normaltekst>{document.gjelderFor}</Normaltekst>} alignLeft>
                  {trimText(document.gjelderFor)}
                </Tooltip>
              )}
              {document.gjelderFor && !isTextMoreThan25char(document.gjelderFor) && document.gjelderFor}
            </TableColumn>
            <TableColumn>
              {document.tidspunkt
                ? <DateTimeLabel dateTimeString={document.tidspunkt} />
                : <Normaltekst><FormattedMessage id="DocumentList.IProduksjon" /></Normaltekst>}
            </TableColumn>
          </TableRow>
        );
      })}
    </Table>
  );
};

export default injectIntl(DocumentList);
