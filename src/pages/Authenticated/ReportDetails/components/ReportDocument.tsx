import { useParams } from "react-router-dom";

const ReportDocument = () => {
  let {reportId} = useParams();

  const reportData = (title:string, detail:string) => (
    <div className="flex mb-[8px]">
      <p className="font-[600] text-[14px] text-[#28282B] min-w-[160px] ">{title}</p>
      <p className="text-[#28282B] text-[14px]">{detail}</p>
    </div>
  )

  return (
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
  )
}
export default ReportDocument