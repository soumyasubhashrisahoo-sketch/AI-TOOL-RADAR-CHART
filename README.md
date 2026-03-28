
# AI-TOOL-RADAR-CHART
 
> A personal research experiment by Me - Soumya Subhashri Sahoo, a BTech CSE (AI & ML) student — visualising how ChatGPT, Claude, and Gemini compare across real engineering use-cases using a radar/spider chart.
 
---
 
## Why this project exists
 
As an AI & ML engineering student, I spent a week completely avoiding AI tools to test whether they were hurting my creativity. The result? I slowed down — not because I couldn't think, but because I was ignoring tools that are shaping the future of engineering.
 
This project documents that experiment visually. Instead of writing a blog post, I built an interactive radar chart that maps each tool's capabilities across 8 dimensions relevant to a software engineering workflow. The goal is simple: **stop using AI randomly, start using it intentionally.**
 
---
 
## Live demo
 
Open `index.html` in any browser — no build step, no dependencies to install beyond Chart.js (loaded via CDN).
 
---
 
## The three tools — research-based breakdown
 
### ChatGPT (OpenAI GPT-4o)
 
**Strengths**
- Best-in-class for structured thinking and breaking down complex problems into steps
- Strong creative ideation — useful for brainstorming project ideas, naming, and content generation
- Highly optimised for daily workflow tasks: drafting emails, summarising docs, writing outlines
- Broad general knowledge with strong instruction-following
 
**Limitations**
- Can be verbose; tends to over-explain when a concise answer is needed
- Less precise on deeply technical or low-level coding tasks compared to Claude
- Context window (128k tokens) is large but response quality can drift in very long conversations
- Occasionally "hallucinates" references or code snippets that look correct but aren't
 
**Best used for:** Planning, ideation, structured writing, and daily productivity tasks.
 
**Research reference:** OpenAI's GPT-4 technical report (2023) highlights its strength in instruction-following and multi-step reasoning benchmarks (MMLU, HumanEval). Studies such as *Bubeck et al., 2023 — "Sparks of AGI"* note GPT-4's versatility across domains.
 
---
 
### Claude (Anthropic Claude 3.5 / Claude 3 Opus)
 
**Strengths**
- Strongest among the three for coding, debugging, and logical structuring
- Exceptionally clear explanations — ideal for understanding complex concepts
- Large context window (up to 200k tokens) with strong coherence across long documents
- Trained with Constitutional AI (CAI) — tends to be more honest about uncertainty
- Excellent at refactoring code and explaining *why* something works, not just *how*
 
**Limitations**
- Slightly more conservative in creative tasks compared to ChatGPT
- Web access and real-time data capabilities are more limited in some configurations
- Can be overly cautious on edge-case prompts
 
**Best used for:** Coding, logical reasoning, long-document analysis, and technical explanations.
 
**Research reference:** Anthropic's Claude model card and *"Constitutional AI: Harmlessness from AI Feedback" (Bai et al., 2022)* document the RLHF + CAI training methodology. Independent benchmarks (LMSYS Chatbot Arena, 2024) consistently place Claude 3 Opus at or near the top for reasoning and coding tasks.
 
---
 
### Gemini (Google DeepMind Gemini 1.5 Pro)
 
**Strengths**
- Best-in-class for handling large files, long PDFs, codebases, and multimodal inputs (text + image + video)
- Natively multimodal — can reason across text, images, audio, and video in a single prompt
- Exceptional context window (up to 1 million tokens in Gemini 1.5 Pro)
- Strong multi-tasking across diverse simultaneous queries
- Deep integration with Google ecosystem (Docs, Sheets, Drive)
 
**Limitations**
- Explanation clarity and structured reasoning can lag behind Claude on purely text-based tasks
- Occasionally inconsistent on nuanced coding tasks
- Real-world performance sometimes underdelivers relative to benchmark numbers
 
**Best used for:** Large dataset analysis, multimodal tasks, file processing, and Google Workspace workflows.
 
**Research reference:** *"Gemini: A Family of Highly Capable Multimodal Models" (Google DeepMind, 2023)* introduces the architecture. Gemini 1.5 Pro's 1M token context window is documented in the 2024 technical report, demonstrating near-perfect recall on long-context benchmarks (NIAH — Needle in a Haystack).
 
---
 
## Radar chart — dimensions explained
 
| Dimension | What it measures |
|---|---|
| Structured thinking | Ability to break problems into logical, ordered steps |
| Creative ideation | Quality of brainstorming, novel ideas, and lateral thinking |
| Coding & logic | Accuracy, depth, and debugging ability on real code tasks |
| Large file handling | Performance on long documents, PDFs, large codebases |
| Daily workflow | Usefulness for everyday tasks: drafting, summarising, planning |
| Multi-tasking | Handling multiple diverse queries simultaneously |
| Explanation clarity | How clearly and accurately it explains complex concepts |
| Speed of response | Subjective response latency in standard usage |
 
> Scores (1–10) are based on personal assessment during one week of structured daily testing across engineering, writing, and data tasks. They are not scientific benchmarks — they reflect a student engineer's real-world experience.
 
---
 
## Project structure
 
```
AI-TOOL-RADAR-CHART/
├── index.html      # Main HTML shell and layout
├── script.js       # Chart.js radar chart initialisation and data
├── style.css       # Styling, dark mode support, typography
└── README.md       # This file
```
 
### Tech used
 
- **Chart.js 4.4.1** — open-source JavaScript charting library, loaded via CDN
- **Vanilla HTML / CSS / JS** — no framework, no build step
- **Dark mode** — automatic via `prefers-color-scheme` media query
 
---
 
## Key takeaway
 
No single tool wins across every dimension. The real skill for an engineer in 2025 is not picking the *best* AI tool — it's knowing *which* tool to reach for and *when*. That's the difference between using AI randomly and using it intentionally.
 
> "The question isn't 'Should I use AI?' — it's 'Am I using AI in a way that makes me better?'"
 
---
 
## References
 
1. OpenAI. (2023). *GPT-4 Technical Report.* https://openai.com/research/gpt-4
2. Bubeck, S. et al. (2023). *Sparks of Artificial General Intelligence: Early experiments with GPT-4.* arXiv:2303.12528
3. Bai, Y. et al. (2022). *Constitutional AI: Harmlessness from AI Feedback.* Anthropic. arXiv:2212.08073
4. Google DeepMind. (2023). *Gemini: A Family of Highly Capable Multimodal Models.* arXiv:2312.11805
5. Google DeepMind. (2024). *Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context.* arXiv:2403.05530
6. LMSYS Org. (2024). *Chatbot Arena Leaderboard.* https://chat.lmsys.org
 
---
 
## CREATED BY :
 
**Soumya Subhashri Sahoo** — BTech CSE (AI & ML) student  
Built as part of a personal experiment on intentional AI usage in engineering workflows.  
LinkedIn post: *"Is using AI making me less creative as an engineer?"*
