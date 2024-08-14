import { SeverityEnumType } from "../types/severity_level"; 

const getStatusColor = (status: SeverityEnumType): string => {
  switch (status) {
    case SeverityEnumType.CRITICAL:
      return "bg-[#000000] text-white hover:bg-[#000000]";
    case SeverityEnumType.HIGH:
      return "bg-[#FCB7B7] text-[#28282B] hover:bg-[#FCB7B7] hover:text-[#28282B]";
    case SeverityEnumType.LOW:
      return "bg-[#AFECC0] text-[#28282B] hover:bg-[#AFECC0] hover:text-[#28282B]";
    default:
      return "bg-[#E1EDFF] hover:bg-[#E1EDFF] text-[#28282B] hover:text-[#28282B]";
  }
};

export default getStatusColor;