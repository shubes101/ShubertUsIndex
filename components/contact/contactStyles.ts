import styled from "styled-components";

const bg = "#f6f4ef";
const ink = "#1c1f24";
const dim = "#6b6f76";
const dim2 = "#9aa0a6";
const cardb = "rgba(28,31,36,0.08)";
const accent = "#1f4fd6";
const green = "#1f8a5b";
const danger = "#b4322f";

const sans =
  "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
const mono = "var(--font-mono), ui-monospace, monospace";

export const VerifyCard = styled.div`
  background: #ffffff;
  border: 1px solid ${cardb};
  border-radius: 12px;
  padding: 24px;
  font-family: ${sans};
  max-width: 460px;
`;

export const ContactName = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${ink};
`;

export const ContactRole = styled.div`
  font-family: ${mono};
  font-size: 11.5px;
  color: ${dim};
  margin-top: 4px;
`;

export const VerifyHint = styled.p`
  color: ${dim};
  font-size: 13.5px;
  line-height: 1.5;
  margin: 16px 0 14px;
`;

/* Where the Turnstile widget mounts. Reserve height so layout doesn't jump. */
export const WidgetSlot = styled.div`
  min-height: 65px;
  margin-bottom: 14px;
`;

export const DownloadBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${sans};
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 11px 18px;
  border-radius: 10px;
  background: ${accent};
  color: #fff;
  border: 1px solid ${accent};
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px -14px rgba(31, 79, 214, 0.6);
  }

  &:disabled {
    background: #e7e4dd;
    color: ${dim2};
    border-color: ${cardb};
    cursor: not-allowed;
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const Status = styled.p<{ $kind: "ok" | "err" | "info" }>`
  font-family: ${mono};
  font-size: 11.5px;
  letter-spacing: 0.02em;
  margin: 14px 0 0;
  color: ${({ $kind }) =>
    $kind === "ok" ? green : $kind === "err" ? danger : dim2};
  display: flex;
  align-items: center;
  gap: 7px;
`;
