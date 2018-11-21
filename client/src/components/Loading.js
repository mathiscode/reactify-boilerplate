import React from 'react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

export default props => {
  const icon = props.icon || 'spinner'
  const size = props.size || '10x'

  return (
    <Icon spin icon={icon} size={size} {...props} />
  )
}
