export default function SyllabusStatusPage() {
  return (
    <section className="panel">
      <h2>Syllabus Status</h2>
      <p>Use <code>/api/syllabus/check</code> to validate local syllabus presence before generation.</p>
      <ul>
        <li>verified-local: syllabus file exists in <code>source-materials/</code>.</li>
        <li>missing-local: not found locally.</li>
        <li>searching-official: discovery workflow in progress.</li>
        <li>verified-official: discovered and verified from an official source.</li>
        <li>blocked-unverified: generation blocked until verified source is provided.</li>
      </ul>
    </section>
  );
}
