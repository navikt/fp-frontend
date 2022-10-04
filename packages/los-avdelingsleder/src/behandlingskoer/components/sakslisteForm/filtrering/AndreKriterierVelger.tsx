import React, { Fragment, FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { VerticalSpacer, ArrowBox } from '@navikt/ft-ui-komponenter';
import { CheckboxField, RadioGroupPanel } from '@navikt/ft-form-hooks';

import { restApiHooks, RestApiPathsKeys } from '../../../../data/fplosRestApi';
import useLosKodeverk from '../../../../data/useLosKodeverk';

import styles from './andreKriterierVelger.less';

interface OwnProps {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
  values: any;
  hentAvdelingensSakslister: (params: {avdelingEnhet: string}) => void;
  hentAntallOppgaver: (sakslisteId: number, avdelingEnhet: string) => void;
}

/**
 * AndreKriterierVelger
 */
const AndreKriterierVelger: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
  values,
  hentAvdelingensSakslister,
  hentAntallOppgaver,
}) => {
  const andreKriterierTyper = useLosKodeverk('AndreKriterierType');
  const { startRequest: lagreSakslisteAndreKriterier } = restApiHooks.useRestApiRunner(RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER);

  return (
    <>
      <Label size="small">
        <FormattedMessage id="AndreKriterierVelger.AndreKriterier" />
      </Label>
      <VerticalSpacer eightPx />
      {andreKriterierTyper.map((akt) => (
        <Fragment key={akt.kode}>
          <VerticalSpacer fourPx />
          <CheckboxField
            key={akt.kode}
            name={akt.kode}
            label={akt.navn}
            onChange={(isChecked) => lagreSakslisteAndreKriterier({
              sakslisteId: valgtSakslisteId,
              avdelingEnhet: valgtAvdelingEnhet,
              andreKriterierType: akt.kode,
              checked: isChecked,
              inkluder: true,
            }).then(() => {
              hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
              hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
            })}
          />
          {values[akt.kode] && (
            <>
              <VerticalSpacer sixteenPx />
              <div className={styles.arrowbox}>
                <ArrowBox alignOffset={30}>
                  <RadioGroupPanel
                    name={`${akt.kode}_inkluder`}
                    isHorizontal
                    isTrueOrFalseSelection
                    onChange={(skalInkludere) => lagreSakslisteAndreKriterier({
                      sakslisteId: valgtSakslisteId,
                      avdelingEnhet: valgtAvdelingEnhet,
                      andreKriterierType: akt.kode,
                      checked: true,
                      inkluder: skalInkludere,
                    }).then(() => {
                      hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
                      hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
                    })}
                    radios={[{
                      value: 'true',
                      label: <FormattedMessage id="AndreKriterierVelger.TaMed" />,
                    }, {
                      value: 'false',
                      label: <FormattedMessage id="AndreKriterierVelger.Fjern" />,
                    }]}
                  />
                </ArrowBox>
              </div>
            </>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default AndreKriterierVelger;
