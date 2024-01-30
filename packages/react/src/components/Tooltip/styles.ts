import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  color: '$gray100',
  fontSize: '$sm',
  lineHeight: '$shorter',
  fontFamily: '$default',
  textAlign: 'center',
})
