import { Toast, ToastProps, Button } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

const DemoToast = ({ ...props }: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Abrir Toast</Button>

      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamentos Realizado',
    description: 'Quarta feira, 22 de Outubro às 16:00h',
  },

  // argTypes: {
  //   children: {
  //     control: {
  //       type: null,
  //     },
  //   },
  // },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
