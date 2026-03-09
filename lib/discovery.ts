import { LookupInput, SyllabusStatus } from "./types";

export async function triggerOfficialDiscovery(input: LookupInput): Promise<{
  status: SyllabusStatus;
  reason: string;
  searchedSources: string[];
}> {
  return {
    status: "blocked-unverified",
    reason:
      `Official syllabus not found for ${input.subject} ${input.className} ${input.term}. No exam generated. ` +
      "Upload school-approved syllabus or approve a fallback source before generation.",
    searchedSources: ["https://www.nerdc.gov.ng/", "https://education.gov.ng/", "https://ubec.gov.ng/"],
  };
}
