import { Button } from "@mantine/core";

const Report = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="page_title">Report</div>
        <div className="flex gap-3">
          <Button color="black">Export CSV</Button>
        </div>
      </div>
    </div>
  );
};

export default Report;
