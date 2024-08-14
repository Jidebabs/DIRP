import { useParams } from "react-router-dom"
import getStatusColor from "../../../utils/getStatusColor";
import { SeverityEnumType } from "../../../types/severity_level";
import { ActionIcon, Button } from "@mantine/core";
import { IoMdMore } from "react-icons/io";

const ReportDetails = () => {
  let {reportId} = useParams();

  const reportData = (title:string, detail:string) => (
    <div className="flex mb-[8px]">
      <p className="font-[600] text-[14px] text-[#28282B] min-w-[160px] ">{title}</p>
      <p className="text-[#28282B] text-[14px]">{detail}</p>
    </div>
  )


  return (
    <div>
      <div className="md:flex items-center justify-between mb-[73px]">
        <div className="flex gap-[24px] items-center">
          <p className="font-bold text-[24px] text-[#28282B] ">Data Leak on NAF Tentative Website</p>
          <p className={`max-w-[80px] w-[80px] text-center font-medium rounded text-[12px] h-[19px] ${getStatusColor(
            "MEDIUM".toLowerCase() as SeverityEnumType
          )}` }>
            Medium
          </p>
        </div>

        <div className="flex gap-[16px]">
          <Button color="#28282B">Resolve</Button>
            <ActionIcon variant="outline" color="#28282B" className="w-[40px] h-[36px]">
            <IoMdMore style={{scale:'1.2'}}/>
          </ActionIcon>
        </div>
      </div>
     
      <div className="bg-[#ffffff] p-[32px] max-w-[595px] h-[729px] ">
        {reportData("Title:", "Data Leak on NAF Tentative Website")}
        {reportData("Report number:", `DIRP/00${reportId}`)}
        {reportData("Date reported:", "08-10-2023")}
        {reportData("Service:", "Nigerian Army")}
        {reportData("Vulnerability type:", "Malware")}
        {reportData("Severity level:", "Medium")}
        {reportData("Status:", "Acknowledged")}

        {reportData("Description:", "Lorem ipsum dolor sit amet consectetur. Sed malesuada sollicitudin posuere non pretium aliquet eu ultrices. Semper ac sagittis ac porta. Nec id at eros est dignissim.")}

        {reportData("Recommendations:", "Lorem ipsum dolor sit amet consectetur. Sed malesuada sollicitudin posuere non pretium aliquet eu ultrices. Semper ac sagittis ac porta. Nec id at eros est dignissim. Quis quis enim odio orci. ")}

        {reportData("Additional Information:", "Lorem ipsum dolor sit amet consectetur. Sed malesuada sollicitudin posuere non pretium aliquet eu ultrices. Semper ac sagittis ac porta. Nec id at eros est dignissim. Quis quis enim odio orci.")}
      </div>
    </div>
  )
}
export default ReportDetails