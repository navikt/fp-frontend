import React, { useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort, Link } from '@navikt/ds-react';

interface Props {
  linkTextClosed: React.ReactNode;
  linkTextExpanded: React.ReactNode;
  renderContent: (toggleState: boolean) => React.ReactNode;
}

export const ExpandableContent = ({ linkTextClosed, linkTextExpanded, renderContent }: Props) => {
  const [isExpanded, setisExpanded] = useState(false);
  return (
    <>
      {renderContent(isExpanded)}
      <Link
        onClick={e => {
          e.preventDefault();
          setisExpanded(v => !v);
        }}
        href=""
      >
        {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
        <BodyShort as="span">{isExpanded ? linkTextExpanded : linkTextClosed}</BodyShort>
      </Link>
    </>
  );
};
