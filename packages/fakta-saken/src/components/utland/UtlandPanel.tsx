import React, { FunctionComponent, useState, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import {
  Normaltekst, Element, Undertittel,
} from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import editUtlandIcon from '@fpsak-frontend/assets/images/endre.svg';
import editUtlandDisabledIcon from '@fpsak-frontend/assets/images/endre_disablet.svg';
import { RadioGroupField, RadioOption, Form } from '@fpsak-frontend/form-hooks';
import { required } from '@navikt/ft-utils';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { OverstyringUtenlandssakMarkeringAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

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
    return aksjonspunkter.find((ap) => ap.definisjon === MANUELL_MARKERING_AV_UTLAND_SAKSTYPE).begrunnelse;
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

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submitCallback: (data: OverstyringUtenlandssakMarkeringAp) => Promise<void>;
}

const UtlandPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  aksjonspunkter,
  submitCallback,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      utlandSakstype: getUtlandSakstype(aksjonspunkter),
      gammelVerdi: getUtlandSakstype(aksjonspunkter),
    },
  });

  const [visEditeringsmodus, toggleEditUtland] = useState(false);
  const [visModal, toggleModal] = useState(false);
  const slaPaVisningAvModal = useCallback(() => toggleModal(true), []);
  const slaPaEditeringAvUtland = useCallback(() => toggleEditUtland(true), []);
  const slaAvEditeringAvUtland = useCallback(() => { formMethods.reset(); toggleEditUtland(false); }, []);

  const utlandSakstype = formMethods.watch('utlandSakstype') || UtlandSakstypeKode.NASJONAL;

  const handleSubmit = formMethods.handleSubmit((values) => submitCallback({
    kode: MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
    begrunnelse: values.utlandSakstype,
    gammelVerdi: values.gammelVerdi,
  }));

  const lagreOgLukk = (values) => {
    toggleModal(false);
    return handleSubmit(values);
  };

  return (
    <Form formMethods={formMethods}>
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
                  label={intl.formatMessage({ id: 'UtlandPanel.Nasjonal' })}
                  value={UtlandSakstypeKode.NASJONAL}
                />
                <RadioOption
                  label={intl.formatMessage({ id: 'UtlandPanel.EøsBosattNorge' })}
                  value={UtlandSakstypeKode.EØS_BOSATT_NORGE}
                />
                <RadioOption
                  label={intl.formatMessage({ id: 'UtlandPanel.BosattUtland' })}
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
                htmlType="button"
                onClick={slaPaVisningAvModal}
                disabled={!formMethods.formState.isDirty}
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
        lagreOgLukk={lagreOgLukk}
      />
    </Form>
  );
};

export default UtlandPanel;
