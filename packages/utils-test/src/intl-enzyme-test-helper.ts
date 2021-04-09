/**
 * https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl
 *
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that.
 */

import React, { ReactElement } from 'react';
import { createIntl, createIntlCache, IntlProvider } from 'react-intl';
import { mount, shallow, ShallowRendererProps } from 'enzyme';

// Create the IntlProvider to retrieve context for wrapping around.
const cache = createIntlCache();

const getIntlObject = (moduleMessages: Record<string, string>) => {
  const selectedMessages = moduleMessages;

  return createIntl({
    locale: 'nb-NO',
    defaultLocale: 'nb-NO',
    messages: selectedMessages,
  }, cache);
};

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node: ReactElement, moduleMessages: Record<string, string>): ReactElement {
  return React.cloneElement(node, { intl: getIntlObject(moduleMessages) });
}

const getOptions = (moduleMessages: Record<string, string>): ShallowRendererProps => {
  const selectedMessages = moduleMessages;

  return {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale: 'nb-NO',
      defaultLocale: 'nb-NO',
      messages: selectedMessages,
    },
  };
};

export function shallowWithIntl(node: ReactElement, intlMessages: Record<string, string>, options?: ShallowRendererProps) {
  return shallow(nodeWithIntlProp(node, intlMessages), { ...getOptions(intlMessages), ...options });
}

export function mountWithIntl(node: ReactElement, intlMessages: Record<string, string>, options?: ShallowRendererProps) {
  return mount(nodeWithIntlProp(node, intlMessages), { ...getOptions(intlMessages), ...options });
}

export const getIntlMock = (customMessages: Record<string, string>) => getIntlObject(customMessages);
