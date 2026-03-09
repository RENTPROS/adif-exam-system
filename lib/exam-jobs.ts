import { LookupInput } from "./types";

type ExamRequest = LookupInput & {
  difficulty: string;
  outputFormat: string;
};

export async function submitExamJob(request: ExamRequest) {
  return {
    accepted: true,
    jobId: `job_${Date.now()}`,
    mode: "verified-syllabus-only",
    constraints: {
      template: "2-slide-powerpoint",
      sections: ["A:20 objective", "B:5 fill-in", "C:5 theory answer any 3 with (a)(b)"],
    },
    request,
  };
}
