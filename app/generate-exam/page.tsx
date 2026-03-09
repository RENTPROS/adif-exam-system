"use client";

import { useState } from "react";
import { StatusBadge } from "@/components/StatusBadge";
import { SyllabusStatus, Term } from "@/lib/types";

const classes = ["Primary_1", "Primary_2", "Primary_3", "Primary_4", "Primary_5", "Primary_6"];
const terms: Term[] = ["First_Term", "Second_Term", "Third_Term"];

export default function GenerateExamPage() {
  const [className, setClassName] = useState("Primary_1");
  const [subject, setSubject] = useState("Mathematics");
  const [term, setTerm] = useState<Term>("First_Term");
  const [difficulty, setDifficulty] = useState("easy");
  const [outputFormat, setOutputFormat] = useState("pptx");
  const [status, setStatus] = useState<SyllabusStatus>("missing-local");
  const [message, setMessage] = useState("Run syllabus check before generation.");

  async function checkSyllabus() {
    setStatus("searching-official");
    const response = await fetch("/api/syllabus/check", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ className, subject, term }),
    });
    const data = await response.json();
    setStatus(data.status);
    setMessage(data.reason ?? data.filePath ?? "Syllabus check completed.");
  }

  async function generateExam() {
    const response = await fetch("/api/exams/submit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ className, subject, term, difficulty, outputFormat }),
    });
    const data = await response.json();
    setStatus(data.status ?? status);
    setMessage(data.reason ?? `Exam job queued: ${data.jobId}`);
  }

  return (
    <section className="panel">
      <h2>Generate Exam</h2>
      <div className="grid grid-2">
        <div>
          <label>Class</label>
          <select value={className} onChange={(e) => setClassName(e.target.value)}>
            {classes.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Subject</label>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div>
          <label>Term</label>
          <select value={term} onChange={(e) => setTerm(e.target.value as Term)}>
            {terms.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Difficulty</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy (2/5)</option>
            <option value="moderate">Moderate</option>
          </select>
        </div>
        <div>
          <label>Output Format</label>
          <select value={outputFormat} onChange={(e) => setOutputFormat(e.target.value)}>
            <option value="pptx">PowerPoint (.pptx)</option>
          </select>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <button type="button" onClick={checkSyllabus}>Check Syllabus</button>
        <button type="button" onClick={generateExam}>Generate Exam</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <strong>Status: </strong>
        <StatusBadge status={status} />
        <p>{message}</p>
      </div>
    </section>
  );
}
