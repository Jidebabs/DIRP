import { Button, Modal } from "@mantine/core";

export type IProps = {
  opened: boolean;
  close: () => void;
  btnText: string;
  handleClick: () => void;
  callback?: () => void;
  text?: string;
};

const Confirmation = ({
  close,
  handleClick,
  opened,
  btnText,
  text,
}: IProps) => {
  return (
    <Modal
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered
      opened={opened}
      onClose={close}
      size="sm"
    >
      <div className="px-5">
        <div className="text-[32px] font-bold mt-6 text-center">{btnText}</div>

        <div className="mt-5 text-center">{text}</div>

        <div className="flex mx-auto gap-5  my-10 justify-center w-full">
          <Button
            size="md"
            color="black"
            className="max-w-[315px] mx-auto w-full"
            onClick={handleClick}
          >
            Resolve
          </Button>
          <Button
            size="md"
            color="black"
            
            className="max-w-[315px] w-full mx-auto bg-[#D43423]"
            onClick={close}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Confirmation;
