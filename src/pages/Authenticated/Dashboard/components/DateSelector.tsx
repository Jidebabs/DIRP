import { DatePicker, DateValue } from "@mantine/dates";

interface IProps {
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  startDate: Date | null;
  endDate: Date | null;
}

const DateSelector = ({
  setEndDate,
  setStartDate,
  endDate,
  startDate,
}: IProps) => {
  const handleStartDateChange = (date: DateValue) => {
    setStartDate(date);
    if (endDate && date)
      if (date > endDate) {
        setEndDate(null);
      }
  };

  const handleEndDateChange = (date: DateValue) => {
    setEndDate(date);
  };

  return (
    <div className="flex bg-white">
      <div className="border-r">
        <label>Start Date:</label>
        <DatePicker
          value={startDate}
          onChange={handleStartDateChange}
          minDate={new Date()}
        />
      </div>

      <div className="pl-2">
        <label>End Date:</label>
        <DatePicker
          value={endDate}
          onChange={handleEndDateChange}
          minDate={new Date()}
        />
      </div>
    </div>
  );
};

export default DateSelector;
