import React, { FunctionComponent, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';
import {
  Normaltekst, Element, Undertittel,
} from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import editUtlandIcon from '@fpsak-frontend/assets/images/endre.svg';
import editUtlandDisabledIcon from '@fpsak-frontend/assets/images/endre_disablet.svg';
import {
  RadioGroupField, RadioOption, behandlingForm, behandlingFormValueSelector,
} from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import UtlandSakstypeKode from './utlandSakstypeKode';
import UtlandEndretModal from './UtlandEndretModal';

import styles from './utlandPanel.less';

const {
  AUTOMATISK_MARKERING_AV_UTENLANDSSAK, MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
} = aksjonspunktCodes;

const getUtlandSakstype = (aksjonspunkter: Aksjonspunkt[]): string => {
  if (hasAksjonspunkt(AUTOMATISK_MARKERING_AV_UTENLANDSSAK, aksjonspunkter)) {
    return UtlandSakstypeKode.EØS_BOSATT_NORGE;
  }
  if (hasAksjonspunkt(MANUELL_MARKERING_AV_UTLAND_SAKSTYPE, aksjonspunkter)) {
    return aksjonspunkter.find((ap) => ap.definisjon.kode === MANUELL_MARKERING_AV_UTLAND_SAKSTYPE).begrunnelse;
  }
  return UtlandSakstypeKode.NASJONAL;
};

const getSakstypeId = (vurdering: string): string => {
  switch (vurdering) {
    case UtlandSakstypeKode.EØS_BOSATT_NORGE:
      return 'UtlandPanel.EøsBosattNorge';
    case UtlandSakstypeKode.BOSATT_UTLAND:
      return 'UtlandPanel.BosattUtland';
    default:
      return 'UtlandPanel.Nasjonal';
  }
};

type FormValues = {
  utlandSakstype?: string;
  gammelVerdi?: string;
}

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submitCallback: (data: any) => void;
}

interface MappedOwnProps {
  utlandSakstype?: string;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

export const UtlandPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  readOnly,
  dirty,
  handleSubmit,
  reset,
  utlandSakstype = UtlandSakstypeKode.NASJONAL,
}) => {
  const [visEditeringsmodus, toggleEditUtland] = useState(false);
  const [visModal, toggleModal] = useState(false);
  const slaPaVisningAvModal = useCallback(() => toggleModal(true), []);
  const slaPaEditeringAvUtland = useCallback(() => toggleEditUtland(true), []);
  const slaAvEditeringAvUtland = useCallback(() => { reset(); toggleEditUtland(false); }, []);

  return (
    <>
      <Undertittel>
        <FormattedMessage id="UtlandPanel.utland" />
      </Undertittel>
      <VerticalSpacer sixteenPx />
      {!visEditeringsmodus && (
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Normaltekst>
                <FormattedMessage id="UtlandPanel.SakenSattTil" />
              </Normaltekst>
            </FlexColumn>
            <FlexColumn>
              <Element>
                <FormattedMessage id={getSakstypeId(utlandSakstype)} />
              </Element>
            </FlexColumn>
            <FlexColumn>
              <Image
                className={styles.editIcon}
                src={readOnly ? editUtlandDisabledIcon : editUtlandIcon}
                onClick={readOnly ? undefined : slaPaEditeringAvUtland}
                alt={intl.formatMessage({ id: 'UtlandPanel.EndrePerioden' })}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      )}
      {visEditeringsmodus && (
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <RadioGroupField
                direction="vertical"
                name="utlandSakstype"
                bredde="M"
                validate={[required]}
              >
                <RadioOption
                  label={{ id: 'UtlandPanel.Nasjonal' }}
                  value={UtlandSakstypeKode.NASJONAL}
                />
                <RadioOption
                  label={{ id: 'UtlandPanel.EøsBosattNorge' }}
                  value={UtlandSakstypeKode.EØS_BOSATT_NORGE}
                />
                <RadioOption
                  label={{ id: 'UtlandPanel.BosattUtland' }}
                  value={UtlandSakstypeKode.BOSATT_UTLAND}
                />
              </RadioGroupField>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <Hovedknapp
                mini
                onClick={slaPaVisningAvModal}
                disabled={!dirty}
              >
                <FormattedMessage id="UtlandPanel.lagre" />
              </Hovedknapp>
            </FlexColumn>
            <Knapp
              htmlType="button"
              mini
              onClick={slaAvEditeringAvUtland}
            >
              <FormattedMessage id="UtlandPanel.avbryt" />
            </Knapp>
            <FlexColumn />
          </FlexRow>
        </FlexContainer>
      )}
      <UtlandEndretModal
        visModal={visModal}
        lagreOgLukk={handleSubmit}
      />
    </>
  );
};

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues): any => submitCallback([{
  kode: MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
  begrunnelse: values.utlandSakstype,
  gammelVerdi: values.gammelVerdi,
}]));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: {
    utlandSakstype: getUtlandSakstype(ownProps.aksjonspunkter),
    gammelVerdi: getUtlandSakstype(ownProps.aksjonspunkter),
  },
  utlandSakstype: behandlingFormValueSelector('UtlandPanel', ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'utlandSakstype'),
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(behandlingForm({ form: 'UtlandPanel' })(injectIntl(UtlandPanelImpl)));
