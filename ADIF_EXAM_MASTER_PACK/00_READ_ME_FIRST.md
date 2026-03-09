# ADIF Exam Master Pack

This pack is designed to help any new AI or new chat generate ADIF School examination papers with minimal confusion.

## Project goal
Generate primary school examination papers for ADIF School using the uploaded official scheme of work only.

## Non-negotiable rules
- Use only the provided scheme of work / syllabus files.
- Do not search online for topics or add outside content.
- Generate one class + one subject + one term at a time.
- Output the exam as a **slide deck**.
- Each subject paper is **2 slides = 2 pages**.
- Slide 1 carries the full school header.
- Slide 2 is a continuation of the same paper and **must not repeat the header**.
- Section A = 20 objective questions.
- Section B = 5 fill-in-the-gap questions.
- Section C = 5 theory questions.
- Pupils answer **any THREE (3)** questions in Section C.
- Every theory question must contain subparts **(a)** and **(b)**.
- Difficulty target is easy: about **2/5**.
- Diagrams must be placed **inside the exact question** where they are needed.
- Do not use a diagram bank.
- Flexible spacing is allowed when a question needs a diagram.

## What to read first
1. `01_MASTER_PROMPT.txt`
2. `02_TEMPLATE_SPEC.md`
3. `03_SUBJECT_RULES.md`
4. `04_WORKFLOW_CHECKLIST.md`
5. The files inside `05_REFERENCE_SAMPLES/`
6. The files inside `06_SOURCE_MATERIALS/`
7. The current job brief inside `07_TASK_INPUTS/current_job_request.txt`

## Expected workflow
- Read the current job request.
- Read the relevant scheme of work for that class, subject, and term.
- Map the exam questions only to the listed topics.
- Generate the paper in slide format.
- Self-check the paper against the checklist before output.

## Slide-first decision
Slide output is intentional because it makes diagram-heavy papers easier to build and edit, especially for Mathematics, Quantitative Reasoning, Verbal Reasoning, Health Education, and similar subjects.
