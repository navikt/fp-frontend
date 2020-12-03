import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import TilbakekrevingVedtakUtdypendeTekstPanel from './TilbakekrevingVedtakUtdypendeTekstPanel';
import underavsnittType from '../../kodeverk/avsnittType';
import VedtaksbrevAvsnitt from '../../types/vedtaksbrevAvsnittTsType';

import styles from './tilbakekrevingEditerVedtaksbrevPanel.less';

type FormValues = Record<string, Record<string, string>>

interface OwnProps {
  vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[];
  formName: string;
  readOnly: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  perioderSomIkkeHarUtfyltObligatoriskVerdi: string[];
  fritekstOppsummeringPakrevdMenIkkeUtfylt?: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt?: boolean;
}

interface StaticFunctions {
  buildInitialValues?: (vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[]) => FormValues,
}

const TilbakekrevingEditerVedtaksbrevPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  vedtaksbrevAvsnitt,
  formName,
  readOnly,
  behandlingId,
  behandlingVersjon,
  perioderSomIkkeHarUtfyltObligatoriskVerdi,
  fritekstOppsummeringPakrevdMenIkkeUtfylt = false,
  erRevurderingTilbakekrevingFeilBeløpBortfalt,
}) => (
  <div className={styles.container}>
    <VerticalSpacer twentyPx />
    <Undertittel>
      <FormattedMessage id="TilbakekrevingVedtak.Vedtaksbrev" />
    </Undertittel>
    <VerticalSpacer eightPx />
    {vedtaksbrevAvsnitt.map((avsnitt) => {
      const underavsnitter = avsnitt.underavsnittsliste;
      const periode = `${avsnitt.fom}_${avsnitt.tom}`;
      const harPeriodeSomManglerObligatoriskVerdi = perioderSomIkkeHarUtfyltObligatoriskVerdi.some((p) => p === periode);
      const visApen = avsnitt.avsnittstype === underavsnittType.OPPSUMMERING && fritekstOppsummeringPakrevdMenIkkeUtfylt;
      return (
        <React.Fragment key={avsnitt.avsnittstype + avsnitt.fom}>
          <Ekspanderbartpanel
            className={harPeriodeSomManglerObligatoriskVerdi || visApen ? styles.panelMedGulmarkering : styles.panel}
            tittel={avsnitt.overskrift ? avsnitt.overskrift : ''}
            apen={harPeriodeSomManglerObligatoriskVerdi || visApen}
          >
            {underavsnitter.map((underavsnitt) => (
              <React.Fragment key={underavsnitt.underavsnittstype + underavsnitt.overskrift + underavsnitt.brødtekst}>
                {underavsnitt.overskrift && (
                  <Element>
                    {underavsnitt.overskrift}
                  </Element>
                )}
                {underavsnitt.brødtekst && (
                  <Normaltekst>
                    {underavsnitt.brødtekst}
                  </Normaltekst>
                )}
                {underavsnitt.fritekstTillatt && (
                  <>
                    <VerticalSpacer eightPx />
                    <TilbakekrevingVedtakUtdypendeTekstPanel
                      type={underavsnitt.underavsnittstype ? `${periode}.${underavsnitt.underavsnittstype}` : avsnitt.avsnittstype}
                      formName={formName}
                      readOnly={readOnly}
                      behandlingId={behandlingId}
                      behandlingVersjon={behandlingVersjon}
                      fritekstPakrevet={underavsnitt.fritekstPåkrevet}
                      maximumLength={erRevurderingTilbakekrevingFeilBeløpBortfalt ? 10000 : null}
                    />
                  </>
                )}
                <VerticalSpacer eightPx />
              </React.Fragment>
            ))}
          </Ekspanderbartpanel>
          <VerticalSpacer eightPx />
        </React.Fragment>
      );
    })}
  </div>
);

TilbakekrevingEditerVedtaksbrevPanel.buildInitialValues = (vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[]): FormValues => vedtaksbrevAvsnitt
  .filter((avsnitt) => avsnitt.underavsnittsliste.some((underavsnitt) => underavsnitt.fritekst))
  .reduce((acc, avsnitt) => {
    const underavsnitter = avsnitt.underavsnittsliste;
    const friteksterForUnderavsnitt = underavsnitter
      .filter((underavsnitt) => underavsnitt.fritekst)
      .reduce((underAcc, underavsnitt) => ({
        ...underAcc,
        [underavsnitt.underavsnittstype ? underavsnitt.underavsnittstype
          : avsnitt.avsnittstype]: decodeHtmlEntity(underavsnitt.fritekst),
      }), {});

    const nyeFritekster = avsnitt.fom
      ? { [`${avsnitt.fom}_${avsnitt.tom}`]: friteksterForUnderavsnitt }
      : friteksterForUnderavsnitt;

    return { ...acc, ...nyeFritekster };
  }, {});

export default TilbakekrevingEditerVedtaksbrevPanel;
