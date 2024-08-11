import { Drawer, Textarea } from '@mantine/core'

interface IProps {
    opened: boolean;
    close: () => void;
}

const CreateReport = ({close, opened}: IProps) => {
  return (
    <Drawer position='right' opened={opened} onClose={close} title="Report vulnerability">
    <Textarea resize="vertical" minRows={20} label="Description" placeholder='Enter description' className='h-[450px]' />
  </Drawer>
  )
}

export default CreateReport
