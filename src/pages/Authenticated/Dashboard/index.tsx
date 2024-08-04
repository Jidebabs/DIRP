import { Menu, Popover } from "@mantine/core";
import DateSelector from "./components/DateSelector";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import moment from "moment";

const Dashboard = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="page_title">Dcyber Admin Dashboard</div>
        <div className="flex gap-5 justify-end">
          <Popover trapFocus position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button className="flex p-2 gap-1 border items-center text-xs shadow-sm sm:text-sm rounded">
                <FaRegCalendarAlt />
                <div>
                  {moment(startDate).format("DD/MM/YY")} -{" "}
                  {moment(endDate).format("DD/MM/YY")}
                </div>
              </button>
            </Popover.Target>
            <Popover.Dropdown>
              <DateSelector
                endDate={endDate}
                setEndDate={setEndDate}
                setStartDate={setStartDate}
                startDate={startDate}
              />
            </Popover.Dropdown>
          </Popover>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <button className="border py-1 px-2 rounded text-sm shadow-sm">
                Service: All
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>All</Menu.Item>
              <Menu.Item>Some</Menu.Item>
              <Menu.Item>Evey</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
