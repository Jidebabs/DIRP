import { Popover } from "@mantine/core";
import moment from "moment";
import { FaRegCalendarAlt } from "react-icons/fa";
import DateSelector from "../../../components/Authenticated/DateSelector";
import { useState } from "react";
import NotificationsTable from "./components/NotificationsTable";

const Notification = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="page_title">Notifications</div>
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
        </div>
      </div>

      <NotificationsTable/>
    </div>
  );
};

export default Notification;
