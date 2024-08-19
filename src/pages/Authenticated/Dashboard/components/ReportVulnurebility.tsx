import { Button, Drawer, Select, Textarea, TextInput } from "@mantine/core";
import { useRef, useState } from "react";
import { RiUploadCloudLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

interface IProps {
  opened: boolean;
  close: () => void;
}

const ReportVulnurebility = ({ close, opened }: IProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(Array.from(files)); // Updated to handle multiple files
    }
  };

  const openFilePicker = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  console.log(selectedFiles);

  const handleRemove = (name: string) => {
    if (selectedFiles) {
      setSelectedFiles((prevFiles) =>
        prevFiles!.filter((item) => item.name !== name)
      );
    } else {
      setSelectedFiles([]);
    }
  };

  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={close}
      title="Report vulnerability"
    >
      <Select
        size="md"
        label="Service"
        placeholder="Select Service"
        data={[
          { value: "service1", label: "service1" },
          { value: "service2", label: "service2" },
          { value: "service3", label: "service3" },
          { value: "data exposure", label: "Data Exposure" },
        ]}
      />
      <TextInput mt={16} size="md" label="Title" placeholder="Enter Title" />
      <Textarea
        mt={16}
        size="md"
        minRows={6}
        label="Description"
        placeholder="Enter description"
      />
      <Select
        mt={16}
        size="md"
        label="Vulnerability type"
        placeholder="Choose vulnerability type"
        data={[
          { value: "malware", label: "Malware" },
          { value: "phishing", label: "Phishing" },
          { value: "misconfiguration", label: "Misconfiguration" },
          { value: "data exposure", label: "Data Exposure" },
        ]}
      />
      <Select
        mt={16}
        size="md"
        label="Severity level"
        placeholder="Choose Severity level"
        data={[
          { value: "low", label: "Low" },
          { value: "medium", label: "Medium" },
          { value: "high", label: "High" },
          { value: "critical", label: "Critical" },
        ]}
      />
      <Textarea
        mt={16}
        size="md"
        minRows={6}
        label="Recommendations"
        placeholder="Enter Recommendations"
      />

      <div className="mt-4">
        <div className="text-sm text-gray-500">Supporting Image(s)</div>
        <div className="border p-2 mt-1 rounded-md">
          <div className="font-medium text-sm text-gray-400">
            Upload an image to better illustrate the vulnerability
          </div>
          {selectedFiles.length === 0 && (
            <div
              className="flex flex-col items-center mt-10 cursor-pointer"
              onClick={openFilePicker}
            >
              <RiUploadCloudLine size={30} />
              <div className="text-center text-sm">
                Drag and drop or browse{" "}
              </div>
            </div>
          )}

          <div className="mt-10 mb-3 text-center flex gap-5">
            {selectedFiles.length !== 0 &&
              selectedFiles?.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-center gap-2"
                >
                  <div>{file.name}</div>
                  <button
                    className="text-sm text-gray-500"
                    onClick={() => handleRemove(file.name)}
                  >
                    <IoCloseOutline size={24} />
                  </button>
                </div>
              ))}
            {selectedFiles && selectedFiles.length >= 5 && (
              <div className="text-sm text-gray-500">
                You can only upload a maximum of 5 files.
              </div>
            )}
          </div>
        </div>
        <input
          ref={inputRef}
          hidden
          type="file"
          multiple
          onChange={handleFileChange}
        />
      </div>

      <Button size="md" mt={20} color="black" className="w-full">
        Submit report
      </Button>
    </Drawer>
  );
};

export default ReportVulnurebility;
