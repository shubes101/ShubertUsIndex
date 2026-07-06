import styled from "styled-components";
import { EntryMedia, Corner } from "@/components/subpages/chromeStyles";

const ink = "#1c1f24";
const graphite = "#3a4048"; // document ink
const mono = "var(--font-mono), ui-monospace, monospace";

/* Report tile — warm-paper gradient stand-in for a document cover. */
export const ReportMedia = styled(EntryMedia)`
  background: linear-gradient(135deg, #f4efe4 0%, #ece5d5 55%, #e2d9c5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReportTile = styled.div`
  text-align: center;
  color: ${graphite};
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

/* Report corner badge — solid ink for a document feel. */
export const ReportCorner = styled(Corner)`
  background: ${ink};
  color: #fff;
`;
