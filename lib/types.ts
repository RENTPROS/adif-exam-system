export type Term = "First_Term" | "Second_Term" | "Third_Term";
export type SyllabusStatus =
  | "verified-local"
  | "missing-local"
  | "searching-official"
  | "verified-official"
  | "blocked-unverified";

export type LookupInput = {
  className: string;
  term: Term;
  subject: string;
};
