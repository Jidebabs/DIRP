import { useState } from "react";
import { Menu, Pagination, Select, Table, TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import { RiArrowUpDownLine } from "react-icons/ri";
import { SeverityEnumType } from "../../../../types/severity_level";
import { GoChevronRight } from "react-icons/go";

const AFNActivityTable = () => {
  const [totalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [status] = useState("Acknowledged");

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
        return "bg-[#FCB7B7] text-[#28282B]";
      case SeverityEnumType.LOW:
        return "bg-[#AFECC0] text-[#28282B]";
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
              <Table.Th>
                <div className="flex gap-1 items-center">
                  <div>Date Reported</div>
                  <RiArrowUpDownLine />
                </div>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {dummyData.map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">{item.title}</Table.Td>
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
                <Table.Td>
                  <Menu>
                    <Menu.Target>
                      <button className="min-w-[122px] px-2 py-1 border rounded-md flex items-center gap-1 text-sm">
                        <div>{status}</div>
                        <GoChevronRight size={12} />
                      </button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item>Acknowledged</Menu.Item>
                      <Menu.Item>Pending</Menu.Item>
                      <Menu.Item>Investigating</Menu.Item>
                      <Menu.Item>Updated</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                  {/* {item.status} */}
                </Table.Td>
                <Table.Td>{item.date_reported}</Table.Td>
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
    </div>
  );
};

export default AFNActivityTable;
