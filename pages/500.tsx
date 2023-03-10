import { FormattedMessage } from 'react-intl'

import Text from 'components/Text'

export default function _500() {
  return (
    <Text className="text-center rtl:text-xl" type="h2">
      <FormattedMessage id="error.500" />
    </Text>
  )
}
