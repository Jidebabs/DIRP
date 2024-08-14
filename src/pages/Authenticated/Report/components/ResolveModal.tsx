import { Button, Modal } from "@mantine/core";

interface Props {
  opened: boolean;
  close: ()=> void;
}

const ResolveModal = ({opened, close}: Props) => {

  return (
    <Modal opened={opened} onClose={close} centered withCloseButton={false}>
      <div className="text-center h-[280px] flex flex-col align-center justify-center">
        <p className="text-[32px] font-bold text-[#28282B] ">Resolve Report</p>
        <p className="mt-[20px] mb-[32px] text-[#28282B]">Marking this report as resolved signifies that
       the vulnerability no longer exists  </p>

       <div className="flex gap-[24px] justify-center">
          <Button color="#28282B">Resolve</Button>
          <Button color="#D43423" onClick={close}>Cancel</Button>
       </div>
      </div>
    </Modal>
  )
}
export default ResolveModal