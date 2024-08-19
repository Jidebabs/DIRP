import { Button, TextInput } from "@mantine/core";
import UserTable from "./components/UserTable";
import PCIcon from "../../../assets/svg/pc.svg";
import MobileIcon from "../../../assets/svg/mobile.svg";
import { useDisclosure } from "@mantine/hooks";
import ChangePassword from "./components/ChangePassword";

const Settings = () => {
  const [opened, { close, open }] = useDisclosure();
  return (
    <div>
      <ChangePassword close={close} opened={opened} />
      <div className="flex items-center justify-between">
        <div className="page_title">Settings & Security</div>
        <Button color="black">Edit</Button>
      </div>

      <div className="mt-5 text-sm">
        <div className="font-semibold">Email address</div>
        <div className="text-[#828282] font-medium">samsmith@gmail.com</div>
      </div>
      <div className="mt-5 text-sm">
        <div className="font-semibold">User name</div>
        <div className="inline-flex mt-2">
          <TextInput size="md" value="Purplehafsah" />
        </div>
      </div>

      <Button mt={24} color="black" onClick={open}>
        Change password
      </Button>

      <div className="mt-7 text-sm flex flex-col md:flex-row justify-between gap-5">
        <div>
          <div className="font-bold text-xl">Your Accounts</div>
          <div className="text-[#828282] font-medium mt-2">
            You have created 3 out of 10 accounts
          </div>
        </div>
        <div className="flex gap-5 justify-end">
          <Button color="black" variant="outline">
            Invite user
          </Button>
          <Button color="black">Create new user account</Button>
        </div>
      </div>

      <div className="mt-5">
        <UserTable />
      </div>

      <div className="mt-10 text-sm">
        <div className="font-bold text-xl">Your Devices</div>
        <div className="text-[#828282] font-medium mt-2">
          You are signed in into 3 session(s)
        </div>
      </div>

      <div className="mt-5 flex gap-5 justify-between max-w-[600px]">
        <div>
          <div className="font-bold sm:text-xl">This Devices</div>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium">
            <img src={PCIcon} alt="PC Icon" />
            <div>Mac OS</div>
          </div>
        </div>
        <Button color="black" variant="outline">
          Logout this device
        </Button>
      </div>

      <div className="mt-10 flex gap-5 justify-between max-w-[600px]">
        <div>
          <div className="font-bold sm:text-xl">Other Devices</div>

          <div className="grid mt-3 gap-5">
            <div className="flex items-center gap-2 text-sm font-medium">
              <img src={MobileIcon} alt="PC Icon" />
              <div>Samsung A30</div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <img src={MobileIcon} alt="PC Icon" />
              <div>ios Apple/iPhone</div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <img src={PCIcon} alt="PC Icon" />
              <div>Desktop</div>
            </div>
          </div>
        </div>
        <Button color="black" variant="outline">
          Logout other device(s)
        </Button>
      </div>
    </div>
  );
};

export default Settings;
