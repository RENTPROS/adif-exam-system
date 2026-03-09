import { submitExamJob } from "@/lib/exam-jobs";
import { lookupLocalSyllabus } from "@/lib/syllabus";
import { Term } from "@/lib/types";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    className: string;
    subject: string;
    term: Term;
    difficulty: string;
    outputFormat: string;
  };

  const local = await lookupLocalSyllabus(body);
  if (local.status !== "verified-local") {
    return Response.json(
      {
        status: "blocked-unverified",
        reason: `Cannot generate exam: syllabus is not verified for ${body.subject} ${body.className} ${body.term}.`,
      },
      { status: 400 },
    );
  }

  const job = await submitExamJob(body);
  return Response.json({ ...job, status: "verified-local", syllabusFile: local.filePath });
}
