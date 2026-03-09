import Link from "next/link";

const links = [
  ["/dashboard", "Dashboard"],
  ["/generate-exam", "Generate Exam"],
  ["/syllabus-status", "Syllabus Status"],
  ["/generated-papers", "Generated Papers"],
  ["/admin-settings", "Admin Settings"],
] as const;

export function Nav() {
  return (
    <nav className="nav">
      {links.map(([href, text]) => (
        <Link key={href} href={href}>
          {text}
        </Link>
      ))}
    </nav>
  );
}
