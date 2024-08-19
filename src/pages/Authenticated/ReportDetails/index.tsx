import getStatusColor from "../../../utils/getStatusColor";
import { SeverityEnumType } from "../../../types/severity_level";
import { ActionIcon, Button, Popover, Select } from "@mantine/core";
import { AiOutlineDownload } from "react-icons/ai";
import { IoMdMore } from "react-icons/io";
import ReportDocument from "./components/ReportDocument";
import ResolveModal from "../Report/components/ResolveModal";
import { useDisclosure } from "@mantine/hooks";
import EmailLogo from "../../../assets/svg/mail.svg"
import SupportingImage from "../../../assets/png/sample-image.svg"
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import DocumentDownload from "./components/DocumentDownload";


const ReportDetails = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const admin = true;


  const downloadPDF = async () => {
    const fileName = `Vulnerability report`;
    const blob = await pdf(<DocumentDownload/>).toBlob();
    saveAs(blob, fileName);
  };


  return (
    <div>
      <div className="md:flex items-center justify-between mb-[73px] gap-4">
        <div className="md:flex gap-[24px] items-center mb-4 md:mb-0">
          <p className="font-bold text-[24px] text-[#28282B] ">Data Leak on NAF Tentative Website</p>
          <p className={`max-w-[80px] w-[80px] text-center font-medium rounded text-[12px] h-[19px] ${getStatusColor(
            "MEDIUM".toLowerCase() as SeverityEnumType
          )}` }>
            Medium
          </p>
        </div>

        <div className="flex gap-[16px]">
          {admin ? 
            <div className="md:flex gap-[16px]">
              <Select
                clearable
                placeholder="Assign"
                data={['Admin1', 'Admin2', 'Admin3', 'Admin4']}
                // defaultValue='Admin1'
                className="w-[min-content] min-w-[114px]"
              />
              <Select
                clearable
                placeholder="Pending"
                data={['Pending', 'Acknowledged', 'Investigating', 'Updated']}
                // defaultValue='Pending'
                className="w-[min-content] min-w-[150px]"
              />
            </div> 
            : <Button color="#28282B" onClick={open}>Resolve</Button>}

            <Popover>
              <Popover.Target>
                <ActionIcon variant="outline" color="#28282B" className="w-[40px] h-[36px] border-[#E2E2E2]"
                > <IoMdMore style={{scale:'1.2'}}/>
                </ActionIcon>
              </Popover.Target>
              <Popover.Dropdown>
                <div className="text-[#28282B] ">
                  <button className="flex items-center p-2 gap-[8px] border-b"
                  onClick={() => downloadPDF()}
                  >Download report <AiOutlineDownload size={16} />
                  </button>

                  <button className="flex items-center p-2 gap-[8px]">Send as email <img src={EmailLogo} alt="email logo" /> </button>
                </div>
              </Popover.Dropdown>
            </Popover>
        </div>
      </div>
     
      <ReportDocument/>

      <p className="font-[600] text-[20px] pb-[24px] pt-[32px]">Supporting Image(s)</p>

      <img src={SupportingImage} alt="email logo" className="mb-5" />
      <img src={SupportingImage} alt="email logo" />

      <ResolveModal
      opened={opened}
      close={close}
      />
    </div>
  )
}
export default ReportDetails