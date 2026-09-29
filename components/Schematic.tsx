export function Schematic({ kind, compact = false }: { kind: "runtime" | "sql" | "docs"; compact?: boolean }) {
  const diagrams = {
    runtime: [
      ["input", "Jobs"], ["control", "Scheduler"], ["execute", "Workers"], ["observe", "Metrics"],
    ],
    sql: [
      ["request", "SQL"], ["route", "Coordinator"], ["execute", "Storage"], ["return", "Rows"],
    ],
    docs: [
      ["event", "Git diff"], ["analyze", "Context"], ["draft", "README"], ["review", "Pull request"],
    ],
  };

  return (
    <div className={`schematic schematic-${kind}${compact ? " schematic-compact" : ""}`} aria-label={`${kind === "runtime" ? "Job execution" : kind === "sql" ? "Distributed SQL query" : "DocumentGen"} process diagram`} role="img">
      <div className="schematic-flow">
        {diagrams[kind].map(([label, value], index) => (
          <div className="schematic-item" key={label}>
            <div className="schematic-node"><span>{label}</span><strong>{value}</strong></div>
            {index < 3 && <span className="schematic-edge" aria-hidden="true"><i /></span>}
          </div>
        ))}
      </div>
      {!compact && <div className="schematic-baseline"><span>01 / INPUT</span><span>02 / CONTROL</span><span>03 / EXECUTION</span><span>04 / RESULT</span></div>}
    </div>
  );
}
