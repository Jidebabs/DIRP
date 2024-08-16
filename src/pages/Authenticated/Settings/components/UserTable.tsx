import { Pagination, Select, Table } from "@mantine/core";
import DeleteIcon from "../../../../assets/svg/delete.svg";
import { Fragment, useState } from "react";
import Confirmation from "../../../../components/Authenticated/Confirmation";
import { useDisclosure } from "@mantine/hooks";

const UserTable = () => {
  const [totalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [opened, { close, open }] = useDisclosure();
  return (
    <Fragment>
      <Confirmation
        btnText="Delete account"
        close={close}
        handleClick={() => {}}
        opened={opened}
        text="Are you sure you want to delete account? this action is irreversible"
      />
      <div className="border rounded-b-xl bg-white overflow-auto">
        <Table>
          <Table.Thead className="bg-[#F9F9FB]">
            <Table.Tr>
              <Table.Th>Email</Table.Th>
              <Table.Th>User name</Table.Th>
              <Table.Th>Date active</Table.Th>
              <Table.Th>Last seen</Table.Th>
              <Table.Th>Delete</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(4)].map((_, i) => (
              <Table.Tr key={i}>
                <Table.Td>samsmith@gmail.com</Table.Td>
                <Table.Td>Smithymaster</Table.Td>
                <Table.Td>13 July 2024</Table.Td>
                <Table.Td>Online</Table.Td>
                <Table.Td>
                  <img
                    className="cursor-pointer"
                    src={DeleteIcon}
                    onClick={open}
                  />
                </Table.Td>
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
    </Fragment>
  );
};

export default UserTable;
