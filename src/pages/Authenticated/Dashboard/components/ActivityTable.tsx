import { CheckIcon, Table, TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import { RiArrowUpDownLine } from "react-icons/ri";
import { SeverityEnumType } from "../../../../types/severity_level";

const ActivityTable = () => {
  const dummyData = [
    {
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnulrebilty_type: "Data exposure",
      severiy_level: "Medium",
      service: "NA",
      status: "Acknowledged",
    },
    {
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnulrebilty_type: "Malware",
      severiy_level: "Low",
      service: "NA",
      status: "Acknowledged",
    },
    {
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnulrebilty_type: "Phishing",
      severiy_level: "Critical",
      service: "NA",
      status: "Acknowledged",
    },
    {
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnulrebilty_type: "Data exposure",
      severiy_level: "Medium",
      service: "NA",
      status: "Acknowledged",
    },
    {
      title: "Data leak on NAF we... ",
      date_reported: "20/06/24",
      vulnulrebilty_type: "Misconfiguration",
      severiy_level: "High",
      service: "NA",
      status: "Acknowledged",
    },
  ];

  const getStatusColor = (status: SeverityEnumType): string => {
    switch (status) {
      case SeverityEnumType.CRITICAL:
        return "bg-[#000000] text-white";
      case SeverityEnumType.HIGH:
        return "bg-[#FCB7B7] text-white";
      case SeverityEnumType.LOW:
        return "bg-[#AFECC0] text-primary";
      default:
        return "bg-[#E1EDFF] text-[#28282B]";
    }
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10">
        <div>
          <div className="text-xl font-bold">Active Reports</div>
          <div className="text-sm text-[#9D9D9D]">
            Keep track of all reports currently active
          </div>
        </div>
        <div className="flex justify-end">

        <TextInput leftSection={<CiSearch />} className="!bg-transparent" />
        </div>
      </div>

      <div className="mt-5 bg-white bprder shadow rounded-md overflow-auto">
        <Table>
          <Table.Thead className="bg-[#F9F9FB]">
            <Table.Tr>
              <Table.Th>Title</Table.Th>
              <Table.Th>
                <div className="flex gap-1 items-center">
                  <div>Date Reported</div>
                  <RiArrowUpDownLine />
                </div>
              </Table.Th>
              <Table.Th>
                <div className="flex gap-1 items-center">
                  <div>Vulnerability Type</div>
                  <RiArrowUpDownLine />
                </div>
              </Table.Th>
              <Table.Th>
                <div className="flex gap-1 items-center">
                  <div>Severity Level</div>
                  <RiArrowUpDownLine />
                </div>
              </Table.Th>
              <Table.Th>
                <div className="flex gap-1 items-center">
                  <div>Service</div>
                  <RiArrowUpDownLine />
                </div>
              </Table.Th>
              <Table.Th>
                <div className="flex gap-1 items-center">
                  <div>Status</div>
                  <RiArrowUpDownLine />
                </div>
              </Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {dummyData.map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">{item.title}</Table.Td>
                <Table.Td>{item.date_reported}</Table.Td>
                <Table.Td>{item.vulnulrebilty_type}</Table.Td>
                <Table.Td>
                  <div
                    className={`max-w-[80px] text-center font-medium rounded p-1 ${getStatusColor(
                      item.severiy_level.toLowerCase() as SeverityEnumType
                    )}`}
                  >
                    {item.severiy_level}
                  </div>
                </Table.Td>
                <Table.Td>{item.service}</Table.Td>
                <Table.Td>{item.status}</Table.Td>
                <Table.Td>
                  <div className="border p-1 flex justify-center rounded gap-2 items-center">
                    <div>Resolved</div>
                    <CheckIcon />
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export default ActivityTable;
