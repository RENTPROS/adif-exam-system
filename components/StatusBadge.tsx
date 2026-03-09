import { SyllabusStatus } from "@/lib/types";

const labels: Record<SyllabusStatus, { text: string; className: string }> = {
  "verified-local": { text: "verified-local", className: "ok" },
  "missing-local": { text: "missing-local", className: "warn" },
  "searching-official": { text: "searching-official", className: "warn" },
  "verified-official": { text: "verified-official", className: "ok" },
  "blocked-unverified": { text: "blocked-unverified", className: "err" },
};

export function StatusBadge({ status }: { status: SyllabusStatus }) {
  const view = labels[status];
  return <span className={`badge ${view.className}`}>{view.text}</span>;
}
