import { Pagination, Select } from "@mantine/core"
import { useState } from "react";

const NotificationsTable = () => {

  const dummyData = [
    {
      initiator: "Rukayyah",
      action:"changed status of Data Leak on NAF Tenetative website to updated",
      time: "3d ago"
    },
    {
      initiator: "Hafsah",
      action:"changed status of Misconfiguration on NA Tentative Website to acknowledged ",
      time: "12d ago"
    },
    {
      initiator: "Rukahafsah",
      action:"You reported a new vulnerability Data Leak on NAF Tentative Website",
      time: "3d ago"
    },
    {
      initiator: "Rukayyah",
      action:"changed status of Data Leak on NAF Tenetative website to updated",
      time: "3d ago"
    },
    {
      initiator: "Hafsah",
      action:"changed status of Misconfiguration on NA Tentative Website to acknowledged  ",
      time: "24m ago"
    },
    {
      initiator: "Rukahafsah",
      action:"You reported a new vulnerability Data Leak on NAF Tentative Website",
      time: "3d ago"
    },
    {
      initiator: "Rukayyah",
      action:"changed status of Data Leak on NAF Tenetative website to updated",
      time: "3d ago"
    },
  ]

  const [totalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  return (
    <div className="mt-[48px] ">
      <div className="min-h-[60vh] h-[60vh] overflow-auto">
        {dummyData.map(item => (
          <div className="flex items-center justify-between text-[#28282B] xl:text-[16px] text-[14px] py-[15px] px-[16px] border-b border-[#E2E2E2] ">
            <p>{item?.initiator} {item?.action}</p>
            <span>{item?.time}</span>
          </div>
        ))}
      </div>

        <div className="mt-1 flex-col sm:flex-row flex justify-between gap-5 px-5 py-2 bg-[#FFFFFF] rounded">
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
  )
}
export default NotificationsTable