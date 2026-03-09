import fs from "node:fs/promises";
import path from "node:path";
import { LookupInput, SyllabusStatus } from "./types";

const ROOT = path.join(process.cwd(), "source-materials", "NERDC_Scheme_of_Work_2025_2026", "Primary_School");
const MAPPINGS_FILE = path.join(process.cwd(), "SUBJECT_NAME_MAPPINGS.md");

type MappingMap = Record<string, string[]>;

function normalizeSubject(s: string): string {
  return s.toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
}

async function loadMappings(): Promise<MappingMap> {
  try {
    const raw = await fs.readFile(MAPPINGS_FILE, "utf8");
    const map: MappingMap = {};
    for (const line of raw.split("\n")) {
      const cleaned = line.replace(/^[-*]\s*/, "").trim();
      if (!cleaned.includes("=")) continue;
      const [left, right] = cleaned.split("=").map((x) => x.trim());
      if (!left || !right) continue;
      map[normalizeSubject(left)] = right.split("/").map((x) => normalizeSubject(x));
    }
    return map;
  } catch {
    return {};
  }
}

function toFilenameSubject(s: string): string {
  return s.replace(/\s+/g, "_");
}

export async function lookupLocalSyllabus(input: LookupInput): Promise<{
  status: SyllabusStatus;
  filePath?: string;
  mappedFrom?: string;
  reason?: string;
}> {
  const classDir = path.join(ROOT, input.className, input.term);
  const mappings = await loadMappings();
  const normalized = normalizeSubject(input.subject);

  const candidates = [input.subject];
  const mapped = mappings[normalized] ?? [];
  for (const m of mapped) candidates.push(m);

  for (const subject of candidates) {
    const fileName = `${toFilenameSubject(subject)}_${input.term}.pdf`;
    const fp = path.join(classDir, fileName);
    try {
      await fs.access(fp);
      return {
        status: "verified-local",
        filePath: fp,
        mappedFrom: subject === input.subject ? undefined : input.subject,
      };
    } catch {
      // Continue
    }
  }

  return { status: "missing-local", reason: "Syllabus file not found locally for class/term/subject." };
}

export async function listAvailableSyllabusStats() {
  let totalFiles = 0;
  const classes = new Set<string>();
  const terms = new Set<string>();

  async function walk(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name.startsWith("Primary_")) classes.add(entry.name);
        if (entry.name.endsWith("_Term")) terms.add(entry.name);
        await walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".pdf")) {
        totalFiles += 1;
      }
    }
  }

  try {
    await walk(ROOT);
  } catch {
    // Ignore and return empty stats.
  }

  return {
    totalFiles,
    classes: [...classes].sort(),
    terms: [...terms].sort(),
  };
}
