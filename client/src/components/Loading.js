import React from 'react'
import styled from 'styled-components/macro'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  color: ${props => props.color}
`

export default props => {
  const icon = props.icon || 'spinner'
  const size = props.size || '10x'

  return (
    <IconWrapper {...props}>
      <Icon spin icon={icon} size={size} />
    </IconWrapper>
  )
}
