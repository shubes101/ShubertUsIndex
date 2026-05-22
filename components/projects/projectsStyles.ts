import styled from "styled-components";
import { EntryMedia, Corner } from "@/components/subpages/chromeStyles";

const accent = "#1f4fd6"; // signal blue
const mono = "var(--font-mono), ui-monospace, monospace";

/* Project tile — signal-blue gradient stand-in for a screenshot. */
export const ProjectMedia = styled(EntryMedia)`
  background: linear-gradient(135deg, #eaf0fd 0%, #d6e0f3 50%, #c8d4ec 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectTile = styled.div`
  text-align: center;
  color: ${accent};
  font-family: ${mono};
`;

export const TileLabel = styled.div`
  font-size: 11px;
  letter-spacing: 0.18em;
  opacity: 0.6;
  margin-bottom: 4px;
`;

export const TileWordmark = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.005em;
`;

/* Project corner badge — signal blue instead of the default dark. */
export const ProjectCorner = styled(Corner)`
  background: ${accent};
  color: #fff;
`;
