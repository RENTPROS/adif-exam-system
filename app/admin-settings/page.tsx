export default function AdminSettingsPage() {
  return (
    <section className="panel">
      <h2>Admin Settings</h2>
      <ul>
        <li>Configure approval policy for fallback syllabus uploads.</li>
        <li>Review <code>SUBJECT_NAME_MAPPINGS.md</code> for subject equivalence.</li>
        <li>Audit <code>SYLLABUS_DISCOVERY_LOG.md</code> for provenance.</li>
      </ul>
    </section>
  );
}
