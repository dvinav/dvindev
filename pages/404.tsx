import { FormattedMessage } from 'react-intl'

import Text from 'components/Text'

export default function _404() {
  return (
    <Text className="text-center rtl:text-xl" type="h2">
      <FormattedMessage id="error.404" />
    </Text>
  )
}
