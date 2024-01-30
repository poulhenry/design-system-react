import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { TooltipContent } from './styles'
import { Button } from '../Button'

export interface TooltipProps {
  children: React.ReactNode
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <Button>Teste</Button>
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipContent sideOffset={5}>
            {children}
            <TooltipPrimitive.Arrow />
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
