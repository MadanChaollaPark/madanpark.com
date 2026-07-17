export type ProjectProof = {
  id: string;
  name: string;
  short: string;
  detail: string;
  signal: string;
  output: string;
  tags: string[];
  status: "public" | "shipped" | "private" | "in progress";
  url?: string;
};

export const lenses = [
  {
    slug: "operator",
    number: "01",
    title: "The Unreasonable Operator",
    audience: "Founders, investors & senior operators",
    style: "Brutalist deal memo",
    promise: "A hard-edged case for backing the person who enters markets other builders ignore.",
  },
  {
    slug: "playground",
    number: "02",
    title: "Tiny Useful Machines",
    audience: "Creative technologists & collaborators",
    style: "Japanese kawaii playground",
    promise: "A warm, playful tour of humane prototypes, odd experiments, and fast collaboration.",
  },
  {
    slug: "institutions",
    number: "03",
    title: "The Evidence Brief",
    audience: "Policy leaders, foundations & institutions",
    style: "Swiss diplomatic editorial",
    promise: "A sober briefing on turning difficult rules, archives, and public data into usable systems.",
  },
  {
    slug: "story",
    number: "04",
    title: "Pasta Water",
    audience: "Editors, journalists, hosts & readers",
    style: "Midnight cinema / analog memoir",
    promise: "The human story underneath the products: countries, paperwork, ambition, and a new language of power.",
  },
  {
    slug: "lab",
    number: "05",
    title: "Inspectable Systems",
    audience: "AI labs, engineering & product teams",
    style: "Threat-intel query workspace",
    promise: "Inputs, outputs, trust boundaries, and proof of work for teams that want to inspect the machinery.",
  },
] as const;

export const projects: ProjectProof[] = [
  {
    id: "gptandme",
    name: "GPTandme",
    short: "A local-first counter for everyday AI use.",
    detail:
      "A Chrome extension that tracks prompt counts and model breakdowns across supported AI chat products while keeping usage data in the browser.",
    signal: "Browser interactions",
    output: "Local counts, model mix, CSV backup",
    tags: ["local-first", "ai-tools", "shipped"],
    status: "shipped",
    url: "https://github.com/MadanChaollaPark/gptandme",
  },
  {
    id: "lobbyear",
    name: "LobbyEar",
    short: "Policy video search that keeps the evidence clip attached.",
    detail:
      "An agentic mention scanner that plans search angles, checks transcript windows, and returns playable source evidence instead of an unsupported summary.",
    signal: "Policy video, speech, transcripts",
    output: "Searchable mentions and evidence clips",
    tags: ["public-data", "multimodal", "agents"],
    status: "public",
    url: "https://github.com/MadanChaollaPark/lobbyear",
  },
  {
    id: "eujobs",
    name: "EUJobs.co",
    short: "A niche job-market product for the Brussels policy world.",
    detail:
      "A specialized job-board line shaped around EU institutions, NGOs, think tanks, public affairs, and the fields generic job sites flatten.",
    signal: "Messy jobs and employer data",
    output: "Search, structured listings, employer workflow",
    tags: ["marketplace", "public-affairs", "founder"],
    status: "shipped",
  },
  {
    id: "vanipedia",
    name: "Vanipedia + Veda MCP",
    short: "Modernizing a large religious knowledge ecosystem without losing its sources.",
    detail:
      "MediaWiki, search, corpus, bot, and retrieval work for a mission-driven archive where provenance and continuity matter more than AI theater.",
    signal: "Legacy wikis, texts, glossary, media",
    output: "Search, corpus tools, cited retrieval",
    tags: ["archives", "knowledge", "institutions"],
    status: "private",
  },
  {
    id: "signchat",
    name: "Sign Chat",
    short: "A webcam fingerspelling experiment that turns gestures into a conversation.",
    detail:
      "A limited ASL-letter recognition prototype using local webcam processing, ChatGPT prompts, and spoken responses—presented as an experiment, not a general translator.",
    signal: "Webcam gestures and letters",
    output: "Prompt text and spoken response",
    tags: ["multimodal", "accessibility", "prototype"],
    status: "public",
    url: "https://github.com/MadanChaollaPark/sign-chat",
  },
  {
    id: "piano",
    name: "Piano Atlas",
    short: "A map-first directory for finding public pianos.",
    detail:
      "A searchable public-piano locator with map/list modes, source confidence, reporting flows, OpenStreetMap data, and five deliberately compared interface directions.",
    signal: "OpenStreetMap public-piano records",
    output: "Searchable map, list, source confidence",
    tags: ["public-data", "maps", "design"],
    status: "public",
    url: "https://github.com/MadanChaollaPark/piano-atlas",
  },
  {
    id: "learnhermes",
    name: "LearnHermes",
    short: "A staged course for building a persistent agent runtime.",
    detail:
      "Twelve TypeScript stages move from a chat loop toward memory, queues, skills, subagents, permissions, and the operational pieces demos usually skip.",
    signal: "Model APIs, state, jobs, tools",
    output: "A test-driven persistent agent runtime",
    tags: ["agents", "education", "typescript"],
    status: "public",
    url: "https://github.com/MadanChaollaPark/learnhermes",
  },
  {
    id: "whatremains",
    name: "What Remains",
    short: "A one-minute world made of irreversible choices.",
    detail:
      "An experimental browser story in which six decisions shape a final inscription, using local memory and constraint rather than an endless content feed.",
    signal: "Six choices and sixty seconds",
    output: "A personal final inscription",
    tags: ["creative-code", "narrative", "experiment"],
    status: "public",
    url: "https://github.com/MadanChaollaPark/what-remains",
  },
  {
    id: "argus",
    name: "Argus + agent runtimes",
    short: "Agents designed around state, permission, and handoff.",
    detail:
      "Terminal, Telegram, and coding-agent experiments that treat approval gates, memory, queues, and recoverability as product features rather than plumbing.",
    signal: "Requests, tools, queues, approvals",
    output: "Persistent workflows with explicit control",
    tags: ["agents", "systems", "local-first"],
    status: "private",
  },
];

export const history = [
  {
    place: "Bologna",
    label: "Politics & belonging",
    text: "Learned institutions from the inside: campaigns, party rooms, public language, and the class codes behind access.",
  },
  {
    place: "Brussels",
    label: "Public affairs & markets",
    text: "Worked around European policy and communications, then built products for the workflows the EU bubble handles badly.",
  },
  {
    place: "Seoul",
    label: "Building & recombination",
    text: "Now combining product, AI, public data, archives, and experimental interfaces from a new vantage point.",
  },
];

export const publicLinks = {
  email: "mailto:chaollapark@gmail.com",
  github: "https://github.com/MadanChaollaPark",
  linkedin: "https://www.linkedin.com/in/madanpark",
};

export function project(id: string) {
  const match = projects.find((item) => item.id === id);
  if (!match) throw new Error(`Unknown project: ${id}`);
  return match;
}
