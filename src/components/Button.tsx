import { Button } from "@mantine/core";

interface IProps {
  text: string;
  onclick?: () => void;
}
const ButtonComp = ({ text, onclick }: IProps) => {
  return (
    <Button
      onClick={onclick}
      size="lg"
      className="bg-primary px-12 rounded-full font-extralight hover:scale-105 duration-300"
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
