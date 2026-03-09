# adif-exam-system

AI-native repository for generating ADIF School primary exam papers from approved schemes of work.

## Core files
- `MASTER_PROMPT.txt`
- `TEMPLATE_SPEC.md`
- `SUBJECT_RULES.md`
- `WORKFLOW_CHECKLIST.md`
- `AI_INSTRUCTIONS.md`
- `REQUEST_TEMPLATE.txt`
- `SYLLABUS_DISCOVERY_PROMPT.txt`
- `SUBJECT_NAME_MAPPINGS.md`
- `CODEX_VERCEL_NEXTJS_PROMPT.txt`

## Data folders
- `assets/`
- `samples/`
- `source-materials/NERDC_Scheme_of_Work_2025_2026/`
- `source-materials/NERDC_Scheme_of_Work_2025_2026/SYLLABUS_DISCOVERY_LOG.md`

## Archive
- `archive/ADIF_EXAM_MASTER_PACK/`

## 10 production enhancements to wire in next
1. **Request parser + validator**: Parse user prompts like `Primary 3 | Mathematics | Second Term` and validate class, subject, and term before generation.
2. **Topic coverage mapper**: Build automatic mapping from scheme topics to generated questions with coverage checks.
3. **Question difficulty balancer**: Score each question and enforce target difficulty distribution (easy/medium/hard profile).
4. **Diagram generation pipeline**: Add reusable diagram templates (number lines, shapes, labeled science sketches) auto-inserted inside relevant questions.
5. **Question bank with deduplication**: Store approved questions and prevent near-duplicate reuse with similarity checks.
6. **Exam QA engine**: Run rules to verify section counts, theory subparts `(a)/(b)`, header usage, and slide constraints.
7. **PPTX auto-render service**: Convert structured JSON output directly to branded 2-slide `.pptx` files.
8. **Versioned syllabus index**: Keep all syllabus files indexed with metadata and support yearly roll-forward updates.
9. **Teacher review workflow**: Add draft → review → approve states with comments and revision history.
10. **Audit and analytics dashboard**: Track generation jobs, failure reasons, approval turnaround, and subject coverage trends.

## 3 webpage-style interfaces for always-on engine communication
1. **Teacher Portal (Web App)**: Authenticated dashboard where staff submit exam requests and download generated slides.
2. **Admin Control Panel (Web App)**: Manage syllabus uploads, templates, prompt rules, and approval workflows.
3. **Job Monitor + Chat Console (Web App)**: Real-time page showing queue status, generation logs, and a chat input for engine commands.


## Vercel frontend bootstrap
Use `CODEX_VERCEL_NEXTJS_PROMPT.txt` as the production prompt to scaffold a Vercel-ready Next.js teacher/admin interface inside this repository.
