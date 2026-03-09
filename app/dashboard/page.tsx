import { listAvailableSyllabusStats } from "@/lib/syllabus";

export default async function DashboardPage() {
  const stats = await listAvailableSyllabusStats();

  return (
    <div className="grid grid-2">
      <section className="panel">
        <h2>System Status</h2>
        <p>Source of truth: <code>source-materials/NERDC_Scheme_of_Work_2025_2026/</code></p>
        <p className="badge ok">Verification mode enforced</p>
      </section>
      <section className="panel">
        <h2>Syllabus Coverage Snapshot</h2>
        <p>Total syllabus files detected: <strong>{stats.totalFiles}</strong></p>
        <p>Classes detected: <strong>{stats.classes.join(", ") || "None"}</strong></p>
        <p>Terms detected: <strong>{stats.terms.join(", ") || "None"}</strong></p>
      </section>
    </div>
  );
}
