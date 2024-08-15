import getStatusColor from "../../../utils/getStatusColor";
import { SeverityEnumType } from "../../../types/severity_level";
import { ActionIcon, Button } from "@mantine/core";
import { IoMdMore } from "react-icons/io";
import ReportDocument from "./components/ReportDocument";
import ResolveModal from "../Report/components/ResolveModal";
import { useDisclosure } from "@mantine/hooks";

const ReportDetails = () => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <div>
      <div className="md:flex items-center justify-between mb-[73px]">
        <div className="md:flex gap-[24px] items-center mb-4 md:mb-0">
          <p className="font-bold text-[24px] text-[#28282B] ">Data Leak on NAF Tentative Website</p>
          <p className={`max-w-[80px] w-[80px] text-center font-medium rounded text-[12px] h-[19px] ${getStatusColor(
            "MEDIUM".toLowerCase() as SeverityEnumType
          )}` }>
            Medium
          </p>
        </div>

        <div className="flex gap-[16px]">
          <Button color="#28282B" onClick={open}>Resolve</Button>
            <ActionIcon variant="outline" color="#28282B" className="w-[40px] h-[36px]">
            <IoMdMore style={{scale:'1.2'}}/>
          </ActionIcon>
        </div>
      </div>
     
      <ReportDocument/>

      <ResolveModal
      opened={opened}
      close={close}
      />
    </div>
  )
}
export default ReportDetails