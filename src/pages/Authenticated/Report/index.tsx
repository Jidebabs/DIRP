import { Button, Popover } from "@mantine/core";
import DateSelector from "../../../components/Authenticated/DateSelector";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";
import ReportsTable from "./components/ReportsTable";

const Report = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  
  return (
    <div>
      <div className="flex justify-between">
        <div className="page_title">Reports</div>

        <div className="flex gap-5 justify-end">
          <div className="flex gap-3">
            <Button color="black">Export CSV</Button>
          </div>
          
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
      </div>

      <ReportsTable/>
    </div>
  );
};

export default Report;
