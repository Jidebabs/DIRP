import { Button, Modal, PasswordInput } from "@mantine/core";

interface IProps {
  opened: boolean;
  close: () => void;
}

const ChangePassword = ({ close, opened }: IProps) => {
  return (
    <Modal
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered
      opened={opened}
      onClose={close}
      title="Change Password"
    >
      <div className="grid gap-2">
        <PasswordInput label="Old Password" placeholder="********" />
        <PasswordInput label="New Password" placeholder="********" />
        <PasswordInput label="Comfirm new Password" placeholder="********" />
        <Button mt={16} color="black" className="w-full">
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default ChangePassword;
