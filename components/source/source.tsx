import { Git } from "react-bootstrap-icons";
import { SourceContainer } from "@/components/source/sourceStyles";

export default function Source() {
  return (
    <SourceContainer
      href="https://github.com/shubes101"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Git size={24} />
    </SourceContainer>
  );
}
