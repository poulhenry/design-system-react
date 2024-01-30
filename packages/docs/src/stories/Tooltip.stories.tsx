import { Tooltip, TooltipProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,

  args: {
    children: <Text>Testando element Tooltip</Text>,
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
