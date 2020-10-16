import { useIntl as useIntlOrig } from 'react-intl';

// TODO Dette er kun ein wrapper for å kunne mocka useIntl. Fjern når ein finn bedre måte

const useIntl = () => {
  const intl = useIntlOrig();
  return intl;
};

export default useIntl;
