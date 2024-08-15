import { useState } from "react";
import { Button, Pagination, Select, Table, TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";
// import { useState } from "react";
// import Confirmation from "../../../../components/Authenticated/Confirmation";
import { useDisclosure } from "@mantine/hooks";
import ResolveModal from "./ResolveModal";
import { useNavigate } from "react-router-dom";
import getStatusColor from "../../../../utils/getStatusColor";
import { SeverityEnumType } from "../../../../types/severity_level";

const ReportsTable = () => {
  const [totalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [opened, { close, open }] = useDisclosure(false);
  const navigate = useNavigate();

  const dummyData = [
    {
      id:"0",
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnerability_type: "Data exposure",
      severiy_level: "Medium",
      service: "NA",
      status: "Acknowledged",
      Resolved_by:"Dcyber Admin1",
      resolved:false
    },
    {
      id:"1",
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnerability_type: "Malware",
      severiy_level: "Low",
      service: "NA",
      status: "Acknowledged",
      Resolved_by:"Dcyber Admin0",
      resolved:true
    },
    {
      id:"2",
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnerability_type: "Phishing",
      severiy_level: "Critical",
      service: "NA",
      status: "Acknowledged",
      Resolved_by:"Dcyber Admin1",
      resolved:false
    },
    {
      id:"3",
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnerability_type: "Data exposure",
      severiy_level: "Medium",
      service: "NA",
      status: "Acknowledged",
      Resolved_by:"Dcyber Admin2",
      resolved:true
    },
    {
      id:"4",
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnerability_type: "Misconfiguration",
      severiy_level: "High",
      service: "NA",
      status: "Acknowledged",
      Resolved_by:null,
      resolved:false
    },
  ];

  const columnTitle = (title:string) => (
    <p className="cursor-pointer flex gap-1 items-center text-[#28282B] font-[500]">
      <span>{title}</span>
      <RiArrowUpDownLine/>
    </p>
  )

  return (
    <div>
      <div className="w-full flex justify-end mt-[24px] mb-[32px]">
        <TextInput
        leftSection={<CiSearch />} className="w-[285px] max-w-[285px]"  placeholder="Search"
        />
      </div>

      <div className="mt-5 bg-white bprder shadow rounded-md overflow-auto">
        <Table>
          <Table.Thead className="bg-[#F9F9FB]">
            <Table.Tr>
              <Table.Th className="text-[#28282B] font-[500]">Title</Table.Th>
              <Table.Th>{columnTitle("Date Reported")}</Table.Th>
              <Table.Th>{columnTitle("Vulnerability Type")}</Table.Th>
              <Table.Th>{columnTitle("Severity Level")}</Table.Th>
              <Table.Th>{columnTitle("Service")}</Table.Th>
              <Table.Th>{columnTitle("Status")}</Table.Th>
              <Table.Th></Table.Th>
              <Table.Th>{columnTitle("Resolved By ")}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {dummyData.map((item, index) => (
              <Table.Tr key={index} className="cursor-pointer">
                <Table.Td  onClick={() => navigate(`${item?.id}`)} className="whitespace-nowrap">{item.title}</Table.Td>
                <Table.Td onClick={() => navigate(`${item?.id}`)} >{item.date_reported}</Table.Td>
                <Table.Td onClick={() => navigate(`${item?.id}`)} >{item.vulnerability_type}</Table.Td>
                <Table.Td onClick={() => navigate(`${item?.id}`)} >
                  <p className={`max-w-[80px] w-[80px] text-center font-medium rounded p-1 ${getStatusColor(
                      item.severiy_level.toLowerCase() as SeverityEnumType
                    )}` }>{item.severiy_level}</p>
                </Table.Td>
                <Table.Td onClick={() => navigate(`${item?.id}`)} >{item.service}</Table.Td>
                <Table.Td onClick={() => navigate(`${item?.id}`)} >{item.status}</Table.Td>
                <Table.Td>
                  <Button 
                  name="resolve"
                  onClick={open}
                  variant="outline" 
                  size="xs" 
                  color="rgba(40, 41, 43)" 
                  radius='sm' 
                  rightSection={item?.resolved ? "" : <IoMdCheckmark size={16} className="ml-[-7px]"/>}
                  style={{border:'1px solid #e2e2e2',}}
                  disabled={item?.resolved}
                  className="w-[90px] flex justify-start"
                  >
                    {item?.resolved ? "Resolved" : "Resolve" }
                  </Button>
                </Table.Td>
                <Table.Td  onClick={() => navigate(`${item?.id}`)} style={{textAlign:'center'}}>{item.Resolved_by || "-"}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        
        <div className="mt-1 border-t flex-col sm:flex-row flex justify-between gap-5 px-5 py-2">
          <Pagination
            total={totalPages}
            siblings={1}
            value={limit}
            onChange={setPage}
            className="text-primary"
          />
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div>Rows per page: 5</div>
              <Select
                className="w-[100px]"
                placeholder={limit.toString()}
                data={[
                  { label: "5", value: "5" },
                  { label: "10", value: "10" },
                  { label: "15", value: "15" },
                  { label: "25", value: "25" },
                  { label: "50", value: "50" },
                  { label: "75", value: "75" },
                  { label: "100", value: "100" },
                ]}
                value={limit.toString()}
                // @ts-ignore
                onChange={setLimit}
                defaultValue={limit.toString()}
              />
            </div>
            <div className="text-sm">
              {page} - {limit} out of 15
            </div>
          </div>
        </div>
      </div>

      <ResolveModal
      opened={opened}
      close={close}
      />
    </div>
  )
}
export default ReportsTable