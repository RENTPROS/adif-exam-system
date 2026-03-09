# ADIF Exam System (Repo-Only Workflow)

This repository is now a **repo-only exam generation system**.

## What changed
- No Vercel deployment
- No Next.js application
- No frontend or web interface
- No API routes
- No multi-branch workflow

## Source of truth
The **GitHub repository** is the only source of truth for generating exams.

## Branch policy
- Work directly on `main` only.
- Do not create feature branches for exam-generation tasks.

## Core workflow
1. Read and follow the instruction files in this repository (`MASTER_PROMPT.txt`, `TEMPLATE_SPEC.md`, `SUBJECT_RULES.md`, and related docs).
2. Use the source materials and assets in this repository.
3. Generate the requested exam slides as a PPTX file.
4. Save every generated PPTX into `generated-papers/`.

## Required folders
- `assets/`
- `archive/`
- `samples/`
- `source-materials/`
- `generated-papers/`

## How to generate an exam with AI
Example prompt:

> Use this repo to generate Basic 1 Mathematics First Term exam and save it to generated-papers/Basic_1_Mathematics_First_Term.pptx.

## Notes for AI sessions
- Treat this repo as the complete working environment.
- Follow repository instruction files exactly.
- Keep output artifacts (PPTX files) in `generated-papers/`.
