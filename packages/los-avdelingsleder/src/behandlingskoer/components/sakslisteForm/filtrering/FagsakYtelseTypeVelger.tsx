import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { KodeverkType } from '@navikt/ft-kodeverk';

import { restApiHooks, RestApiPathsKeys } from '../../../../data/fplosRestApi';
import useLosKodeverk from '../../../../data/useLosKodeverk';

const finnFagsakYtelseTypeNavn = (fagsakYtelseTyper: KodeverkMedNavn[], valgtFagsakYtelseType: string) => {
  const type = fagsakYtelseTyper.find((fyt) => fyt.kode === valgtFagsakYtelseType);
  return type ? type.navn : '';
};

interface OwnProps {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
  hentAvdelingensSakslister: (params: {avdelingEnhet: string}) => void;
  hentAntallOppgaver: (sakslisteId: number, avdelingEnhet: string) => void;
}

/**
 * FagsakYtelseTypeVelger
 */
const FagsakYtelseTypeVelger: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
  hentAvdelingensSakslister,
  hentAntallOppgaver,
}) => {
  const { startRequest: lagreSakslisteFagsakYtelseType } = restApiHooks.useRestApiRunner(RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE);
  const alleFagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);
  return (
    <>
      <Label size="small">
        <FormattedMessage id="FagsakYtelseTypeVelger.Stonadstype" />
      </Label>
      <VerticalSpacer eightPx />
      {alleFagsakYtelseTyper.map((fyt) => (
        <React.Fragment key={fyt.kode}>
          <VerticalSpacer fourPx />
          <CheckboxField
            name={fyt.kode}
            label={finnFagsakYtelseTypeNavn(alleFagsakYtelseTyper, fyt.kode)}
            onChange={(isChecked) => lagreSakslisteFagsakYtelseType({
              sakslisteId: valgtSakslisteId,
              avdelingEnhet: valgtAvdelingEnhet,
              fagsakYtelseType: fyt.kode,
              checked: isChecked,
            }).then(() => {
              hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
              hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
            })}
          />
        </React.Fragment>
      ))}
      <VerticalSpacer eightPx />
    </>
  );
};

export default FagsakYtelseTypeVelger;
