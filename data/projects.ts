export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  status: string;
  summary: string;
  lead: string;
  stack: string[];
  problem: string;
  approach: string;
  details: { title: string; body: string }[];
  note: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "job-execution-runtime",
    number: "01",
    title: "C++ Job Execution Runtime",
    eyebrow: "C++20 / LINUX / CONCURRENCY",
    status: "Feature complete",
    summary: "A bounded, observable runtime for scheduling jobs and supervising processes on Linux.",
    lead: "The difficult parts of a runtime are rarely the happy path. This project explores what happens when work piles up, cancellation races a worker, a child process times out, or shutdown begins while threads are blocked.",
    stack: ["C++20", "Linux / POSIX", "CMake", "GCC / Clang"],
    problem: "A concurrent runtime has to stay predictable under overload and interruption. Unbounded queues hide pressure, vague cancellation semantics create races, and process ownership becomes easy to lose when timeouts or shutdown occur.",
    approach: "I built persistent workers behind one bounded admission contract, with selectable global-queue and work-stealing schedulers. Jobs can run as in-process callables or supervised POSIX child processes. Explicit state transitions and ownership rules keep cancellation, timeout, and shutdown behavior inspectable.",
    details: [
      { title: "Bounded by design", body: "Blocking producer backpressure limits waiting work. The same capacity contract applies to both scheduler modes, making their behavior comparable under load." },
      { title: "Cancellation with clear limits", body: "Queued jobs are physically removed. Running callables receive a cooperative cancellation request; supervised processes use process-group signals and escalation when needed." },
      { title: "Evidence over slogans", body: "Snapshots report worker activity, throughput, and rolling latency. The repository documents stress tests, sanitizer runs, benchmark repetitions, and profiling samples alongside the implementation." },
    ],
    note: "The runtime is local to Linux/POSIX environments. Running callable cancellation depends on the callable observing its token.",
  },
  {
    slug: "distributed-sql",
    number: "02",
    title: "Distributed SQL DB",
    eyebrow: "GO / DATABASES / DISTRIBUTED SYSTEMS",
    status: "In development",
    summary: "A learning-driven SQL system that routes queries from a coordinator to sharded SQLite-backed storage nodes.",
    lead: "A database is a useful place to study distributed systems because every abstraction eventually meets routing, state, and failure. This project makes those boundaries explicit in Go.",
    stack: ["Go", "gRPC", "SQLite", "SQL parsing"],
    problem: "A client should be able to send a SQL request without knowing which storage node holds the relevant shard. The coordinator has to parse enough of the query to route it, while storage nodes execute locally and return a consistent result shape.",
    approach: "The current design has a stateless HTTP coordinator, an in-memory registry for node and shard metadata, and gRPC storage nodes wrapping local SQLite databases. For keyed queries, the coordinator extracts a shard key, chooses a shard, and forwards execution to its registered leader.",
    details: [
      { title: "A visible request path", body: "Client request → SQL parsing → shard selection → leader lookup → gRPC execution → JSON response. Keeping this path legible makes incorrect routing easier to reason about." },
      { title: "Node liveness", body: "Storage nodes send periodic heartbeats to the coordinator. The metadata layer tracks node health and shard placement for routing decisions." },
      { title: "Honest scope", body: "The current architecture document explicitly does not claim an integrated write-ahead log, replication, or recovery layer. Those are separate problems, not hidden behind a ‘distributed’ label." },
    ],
    note: "This project is in development. The architecture shown here reflects the current repository documentation rather than a production database guarantee.",
  },
  {
    slug: "documentgen",
    number: "03",
    title: "DocumentGen",
    eyebrow: "GITHUB APP / TYPESCRIPT / AI",
    status: "Built and deployed",
    summary: "A GitHub-connected documentation workflow that proposes README updates when a repository changes.",
    lead: "Documentation drifts because updating it competes with shipping code. DocumentGen turns repository changes into a reviewable documentation proposal, so the README can evolve with the project.",
    stack: ["TypeScript", "Express", "GitHub App", "BullMQ / Redis", "Gemini"],
    problem: "Regenerating documentation from an entire repository after every change wastes context and can overwrite useful human writing. The update path should focus on meaningful changes and leave a review step before anything lands.",
    approach: "GitHub webhooks trigger repository analysis and queue work for background processing. The service inspects structure and dependencies, drafts or updates README content with AI, can generate Mermaid diagrams, and opens a pull request for review.",
    details: [
      { title: "Change-aware updates", body: "The workflow supports initial generation and incremental updates that preserve existing custom content and structure." },
      { title: "Work off the request path", body: "Redis and BullMQ queue documentation tasks for asynchronous processing, with an admin path for monitoring and retrying jobs." },
      { title: "Review before merge", body: "Changes are proposed through GitHub rather than silently rewriting repository documentation." },
    ],
    note: "The project uses an AI model for drafting; the generated documentation still benefits from human review for correctness and tone.",
    links: [{ label: "Website source", href: "https://github.com/Devesh326/Document-Gen-Website" }],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
