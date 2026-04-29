import { createFileRoute } from "@tanstack/react-router";
import emailjs from "@emailjs/browser";
import { useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronDown,
  Dna,
  Download,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Network,
  Phone,
  Send,
  Sparkles,
  TestTubeDiagonal,
  Users,
} from "lucide-react";

import hriddhiProfile from "@/assets/hriddhi-profile-apron.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hriddhi Sarker — Bioinformatics Researcher" },
      {
        name: "description",
        content:
          "Dark biotech portfolio for Hriddhi Sarker, focused on computational drug design, molecular biology, and systems biology.",
      },
      { property: "og:title", content: "Hriddhi Sarker — Bioinformatics Researcher" },
      {
        property: "og:description",
        content:
          "Computational drug design, molecular biology, bioinformatics, and AI-driven biomedical research portfolio.",
      },
    ],
  }),
  component: Index,
});

const highlights = [
  "Research Assistant at University of Dhaka",
  "Research Associate & Instructor at Panacea Research Center",
  "Published researcher in RSC Advances and Elsevier",
];

const profileLinks = {
  linkedin:
    "https://www.linkedin.com/in/hriddhi-sarker-b79503389?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  googleScholar:
    "https://scholar.google.com/citations?hl=en&user=0Uexc3UAAAAJ&view_op=list_works&gmla=AIfU4H5fKX-qI05JOqU10OL_o7u2q2DQV3XA2Ecaw4hj2b-3_HLFuL6xxqhbO6tZKuSVaF3cTmuGCxXebdNtwFiE",
  researchGate: "https://www.researchgate.net/profile/Hriddhi-Sarker?ev=hdr_xprf",
};

const emailJsConfig = {
  publicKey: "WaTwgha82oiDscpk7",
  serviceId: "service_euk2eij",
  templateId: "template_4q4ompm",
};

const education = [
  {
    label: "Master of Science (M.Sc.) in Biotechnology",
    place: "BRAC University, Bangladesh",
    time: "June 2026–Present",
    detail: "Biotechnology graduate program",
  },
  {
    label: "Bachelor of Science (B.Sc.) in Biochemistry and Molecular Biology",
    place: "University of Rajshahi, Bangladesh",
    time: "2019–2024",
    detail: "CGPA: 3.73/4.00",
  },
  {
    label: "Higher Secondary Certificate (HSC) in Science",
    place: "Govt. Azizul Haque College, Bogura",
    time: "2016–2018",
    detail: "GPA: 4.83/5.00",
  },
  {
    label: "Secondary School Certificate (SSC) in Science",
    place: "A.P.B.N Public School and College, Bogura",
    time: "2016",
    detail: "GPA: 5.00/5.00",
  },
];

const experiences = [
  {
    role: "Research Associate & Instructor",
    org: "Panacea Research Center",
    time: "2025–Present",
    icon: FlaskConical,
    points: [
      "Computer-aided drug design (CADD) projects",
      "Teaching, mentoring, and research training",
      "Molecular docking, molecular dynamics simulation, and publication workflows",
    ],
  },
  {
    role: "Research Assistant",
    org: "University of Dhaka",
    time: "June 2024–2025",
    icon: Microscope,
    points: [
      "Bioinformatics and Differentially Expressed Gene (DEG) analysis",
      "Microarray dataset analysis using GEO2R",
      "Tools and skills: R, Python, Cytoscape, STRING",
    ],
  },
];

const internships = [
  "BioLab Bangladesh",
  "CHIRAL Bangladesh",
  "INMAS Rajshahi",
  "Panacea Research Center",
];

const skillGroups = [
  {
    title: "Technical Skills",
    icon: BrainCircuit,
    skills: [
      { name: "R / Python", value: 88 },
      { name: "DAVID / STRING / Cytoscape", value: 84 },
      { name: "PyMOL / GROMACS / Discovery Studio", value: 82 },
    ],
  },
  {
    title: "Research Domains",
    icon: Network,
    skills: [
      { name: "Genomics / Proteomics / Transcriptomics", value: 86 },
      { name: "Network Biology", value: 82 },
      { name: "Machine Learning in Biology", value: 30 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem solving", value: 92 },
      { name: "Communication / Teamwork", value: 88 },
      { name: "Project management", value: 80 },
    ],
  },
];

const publications = [
  {
    badge: "RSC Advances · IF 4.6 · CiteScore 7.6",
    title:
      "Multi-Omics Pan-Cancer Profiling of CDK2 and In Silico Identification of Plant-Derived Inhibitors Using Machine Learning Approaches",
    authors:
      "Md Ahad Ali, Hriddhi Sarker, Tania Khan, Humaira Sheikh, Ahmed Saif, Farhad Bin Farid, Sadia Afrin, Most. Asha Khatun, Neeraj Kumar",
    journal: "RSC Advances, 15, 36938–36968",
    summary:
      "Multi-omics pan-cancer profiling and in silico plant-derived inhibitor identification using machine learning approaches.",
    doi: "https://doi.org/10.1039/d5ra05535k",
  },
  {
    badge: "Elsevier · IF 3.1 · CiteScore 4.3",
    title:
      "Microbial biomolecule-driven identification of next-gen GSK-3β inhibitors for brain disorders",
    authors:
      "Lamia Islam, Hriddhi Sarker, Md Al Amin, Rahnuma Tabassum, Arpita Nandi, Tarikul Islam, Md Azad Patwary, Fairooz Ibnat, Firoz Ahmed*, Noimul Hasan Siddiquee*",
    journal: "Computational Biology and Chemistry, 121, 108860 (2026)",
    summary:
      "Publisher: Elsevier. Equal contribution as first author in a computational study identifying next-generation GSK-3β inhibitor candidates for brain disorders.",
    doi: "https://doi.org/10.1016/j.compbiolchem.2025.108860",
  },
];

const projects = [
  {
    title: "Computational Drug Design",
    tools: "PyMOL, Discovery Studio, AutoDock",
    icon: Dna,
    text: "Ligand screening, docking interpretation, and target-driven therapeutic exploration.",
  },
  {
    title: "Pan-Cancer Analysis",
    tools: "R, Python, TCGA workflows",
    icon: Network,
    text: "Expression signatures, survival insight, immune association, and biomarker prioritization.",
  },
  {
    title: "Molecular Docking & Simulation",
    tools: "GROMACS, PyMOL, Cytoscape",
    icon: TestTubeDiagonal,
    text: "Protein-ligand stability, interaction mapping, and structure-guided validation.",
  },
  {
    title: "Machine Learning in Drug Discovery",
    tools: "Python, scikit-learn, network features",
    icon: BrainCircuit,
    text: "Predictive pipelines that connect biological features with candidate prioritization.",
  },
];

const conferences = [
  {
    event:
      "2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025)",
    role: "Poster Presentation, Presenter",
    title:
      "Identification of Prognostic Regulators and Novel Therapeutic Targets in Lung Cancer via Bioinformatics and Machine Learning",
    authors:
      "Hriddhi Sarker, Md Ahad Ali, Humaira Sheikh, Tarikul Islam, Sujoy Banik, Md. Nurul Haque Mollah",
    doi: "https://doi.org/10.13140/RG.2.2.19541.69605",
  },
  {
    event: "International Conference on Applied Statistics and Data Science (ICASDS 2025)",
    role: "Poster Presentation, Co-author",
    title:
      "Investigating the bioactivity of natural compounds targeting hMPV infection causing viral (F) proteins: A network pharmacology approach",
    authors:
      "Humaira Sheikh, Md. Ahad Ali, Nur Mohammad, Hriddhi Sarker, Neeraj Kumar, Md. Nurul Haque Mollah",
  },
];

const services = [
  "Bioinformatics Data Analysis",
  "Computer-Aided Drug Design",
  "Research Mentorship & Training",
  "Academic Writing Support",
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-bio-cyan">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-foreground md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-muted-foreground">{text}</p>}
    </div>
  );
}

function MolecularBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute right-0 top-10 h-[34rem] w-[34rem] opacity-30 animate-bio-float"
        viewBox="0 0 520 520"
        fill="none"
      >
        <path
          d="M80 210C170 88 303 85 438 164M86 315c106 94 235 93 354 4"
          stroke="currentColor"
          className="text-bio-cyan"
          strokeWidth="2"
          strokeDasharray="10 12"
        />
        {Array.from({ length: 13 }).map((_, index) => (
          <circle
            key={index}
            cx={80 + index * 30}
            cy={210 + Math.sin(index) * 92}
            r="5"
            className="fill-bio-teal"
          />
        ))}
        {Array.from({ length: 13 }).map((_, index) => (
          <line
            key={`line-${index}`}
            x1={80 + index * 30}
            y1={210 + Math.sin(index) * 92}
            x2={86 + index * 30}
            y2={315 + Math.cos(index) * 74}
            stroke="currentColor"
            className="text-primary"
            strokeWidth="1"
            opacity=".65"
          />
        ))}
      </svg>
      <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-bio-cyan animate-bio-pulse" />
      <div className="absolute left-[18%] top-[52%] h-3 w-3 rounded-full bg-bio-green animate-bio-pulse" />
      <div className="absolute right-[18%] top-[58%] h-2 w-2 rounded-full bg-bio-amber animate-bio-pulse" />
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card-bio p-6 shadow-bio backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/45 ${className}`}
    >
      {children}
    </div>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    setStatus("sending");

    try {
      emailjs.init({ publicKey: emailJsConfig.publicKey });
      await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formRef.current,
        emailJsConfig.publicKey,
      );
      formRef.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          aria-label="Name"
          name="from_name"
          placeholder="Name"
          required
          className="h-12 w-full rounded-xl border border-input bg-background/40 px-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
        <input
          aria-label="Email"
          name="from_email"
          type="email"
          placeholder="Email"
          required
          className="h-12 w-full rounded-xl border border-input bg-background/40 px-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
      </div>
      <input
        aria-label="Subject"
        name="subject"
        placeholder="Subject"
        required
        className="h-12 w-full rounded-xl border border-input bg-background/40 px-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
      <textarea
        aria-label="Message"
        name="message"
        placeholder="Message"
        required
        rows={6}
        className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
      {status === "success" && (
        <p className="rounded-xl border border-primary/25 bg-secondary px-4 py-3 text-sm text-primary">
          Your message has been sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl border border-destructive/40 bg-background/40 px-4 py-3 text-sm text-destructive">
          Message could not be sent. Please try again.
        </p>
      )}
      <Button type="submit" variant="bio" size="xl" className="w-full" disabled={status === "sending"}>
        <Send className="h-4 w-4" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section id="home" className="relative bg-hero-bio">
        <MolecularBackdrop />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <a href="#home" className="flex items-center gap-3 font-display text-lg font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-bio text-primary-foreground shadow-bio">
              <Dna className="h-5 w-5" />
            </span>
            Hriddhi Sarker
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {["About", "Research", "Skills", "Publications", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
          <Button asChild variant="bioOutline" size="sm">
            <a href="mailto:hriddhisarkerborno@gmail.com">Collaborate</a>
          </Button>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-5 pb-16 pt-6 md:grid-cols-[1.05fr_.95fr] md:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface px-4 py-2 text-sm text-bio-cyan backdrop-blur">
              <Sparkles className="h-4 w-4" /> Bioinformatics Researcher | Computational Drug Design
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] md:text-7xl">
              Hriddhi Sarker
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold text-primary">
              Integrating Biology, Computation, and Discovery
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              I am based in Bogura, Bangladesh, and I am a research-focused bioinformatics
              enthusiast with a strong foundation in biochemistry and molecular biology. I approach
              my work with a detail-oriented and analytical mindset, actively advancing my expertise
              in computational biology while preparing for postgraduate studies to further specialize
              in this field.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="bio" size="xl">
                <a href="#research">
                  <BookOpen className="h-4 w-4" />
                  View Research
                </a>
              </Button>
              <Button asChild variant="bioOutline" size="xl">
                <a href="/Hriddhi-Sarker-CV.pdf" download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="bioOutline" size="xl">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-xl border border-border bg-surface p-4 text-sm text-muted-foreground backdrop-blur hover:border-primary/45"
                >
                  <Award className="mb-3 h-5 w-5 text-bio-green" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[30rem]">
            <div className="absolute -inset-5 rounded-full bg-accent-bio opacity-20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-surface-elevated p-4 shadow-bio-strong">
              <img
                src={hriddhiProfile}
                alt="Professional profile portrait of Hriddhi Sarker"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-8 left-8 rounded-2xl border border-border bg-background/70 p-4 backdrop-blur-xl">
                <p className="text-3xl font-black text-primary">2+</p>
                <p className="text-xs text-muted-foreground">Research roles</p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#about"
          aria-label="Scroll to about"
          className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full border border-border bg-surface p-3 text-primary animate-bio-float"
        >
          <ChevronDown className="h-5 w-5" />
        </a>
      </section>

      <section id="about" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About Me"
            title="Multidisciplinary biology, computation, and discovery."
            text="I am based in Bogura, Bangladesh, and I am a research-focused bioinformatics enthusiast with a strong foundation in biochemistry and molecular biology."
          />
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <GlassCard>
              <MapPin className="mb-5 h-8 w-8 text-bio-cyan" />
              <h3 className="mb-4 text-2xl font-bold">Research objective</h3>
              <p className="leading-8 text-muted-foreground">
                My goal is to contribute to biomedical innovation by integrating biochemistry,
                molecular biology, bioinformatics, and AI-driven drug discovery. I aim to grow as a
                globally competent computational biology researcher and contribute to impactful,
                interdisciplinary research that addresses real-world health challenges.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Detail-oriented", "Research-driven", "Multidisciplinary thinker"].map(
                  (trait) => (
                    <span
                      key={trait}
                      className="rounded-full border border-primary/25 bg-surface px-3 py-1 text-xs text-primary"
                    >
                      {trait}
                    </span>
                  ),
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="education" className="bg-surface px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Education" title="Academic foundation in life sciences." />
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <GlassCard key={item.label} className="relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-accent-bio" />
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-bio-green">
                      {item.time}
                    </p>
                    <h3 className="mt-1 text-xl font-bold">{item.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.place} — {item.detail}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Experience"
            title="Applied Bioinformatics with Translational Focus"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <GlassCard key={exp.role}>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-bio-cyan">{exp.time}</p>
                      <h3 className="mt-1 text-2xl font-bold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.org}</p>
                    </div>
                    <Icon className="h-9 w-9 text-primary" />
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-bio-green" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {internships.map((name) => (
              <details
                key={name}
                className="group rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  <span>{name}</span>
                  <ChevronDown className="h-4 w-4 text-primary transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Hands-on exposure to research methods, biological analysis, and professional
                  laboratory or computational workflows.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Skills & Expertise"
            title="A toolkit built for biology at scale."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <GlassCard key={group.title}>
                  <Icon className="mb-5 h-8 w-8 text-bio-cyan" />
                  <h3 className="mb-6 text-2xl font-bold">{group.title}</h3>
                  <div className="space-y-5">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="text-primary">{skill.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-accent-bio"
                            style={{ width: `${skill.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section id="publications" className="bg-surface px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Publications" title="Peer-reviewed research work." />
          <div className="grid gap-6 lg:grid-cols-2">
            {publications.map((paper) => (
              <GlassCard key={paper.title}>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-bio-cyan">
                  {paper.badge}
                </span>
                <h3 className="mt-5 text-2xl font-bold">{paper.title}</h3>
                <p className="mt-3 text-sm text-primary">
                  {paper.authors} · {paper.journal}
                </p>
                <p className="mt-4 leading-7 text-muted-foreground">{paper.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="bioOutline" size="sm">
                    <a href={paper.doi} target="_blank" rel="noreferrer">
                      DOI <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                  <Button asChild variant="bioOutline" size="sm">
                    <a href={profileLinks.googleScholar} target="_blank" rel="noreferrer">
                      Google Scholar
                    </a>
                  </Button>
                  <Button asChild variant="bioOutline" size="sm">
                    <a href={profileLinks.researchGate} target="_blank" rel="noreferrer">
                      ResearchGate
                    </a>
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects / Research Focus"
            title="Where computation meets therapeutic biology."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <GlassCard key={project.title}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.text}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-bio-green">
                    {project.tools}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <SectionHeading eyebrow="Conferences" title="Presentations and academic engagement." />
            <div className="grid gap-4">
              {conferences.map((conference) => (
                <GlassCard key={conference.title}>
                  <Award className="mb-4 h-7 w-7 text-bio-amber" />
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-bio-green">
                    {conference.role}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug">{conference.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-primary">{conference.authors}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{conference.event}</p>
                  {conference.doi && (
                    <Button asChild variant="bioOutline" size="sm" className="mt-5">
                      <a href={conference.doi} target="_blank" rel="noreferrer">
                        DOI <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </GlassCard>
              ))}
            </div>
          </div>
          <GlassCard className="self-center">
            <BriefcaseBusiness className="mb-5 h-8 w-8 text-bio-cyan" />
            <h2 className="text-3xl font-bold">Services</h2>
            <div className="mt-6 grid gap-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-xl border border-border bg-background/35 p-4 text-sm text-muted-foreground"
                >
                  {service}
                </div>
              ))}
            </div>
            <Button asChild variant="bio" size="xl" className="mt-7">
              <a href="#contact">Request Collaboration</a>
            </Button>
          </GlassCard>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-bio-cyan">
              Contact
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Let’s discuss research, mentorship, or collaboration.
            </h2>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                hriddhisarkerborno@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                +8801533502861
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                Bogura, Bangladesh
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="bioOutline" size="sm">
                <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="bioOutline" size="sm">
                <a href={profileLinks.googleScholar} target="_blank" rel="noreferrer">
                  <GraduationCap className="h-4 w-4" />
                  Google Scholar
                </a>
              </Button>
              <Button asChild variant="bioOutline" size="sm">
                <a href={profileLinks.researchGate} target="_blank" rel="noreferrer">
                  <Network className="h-4 w-4" />
                  ResearchGate
                </a>
              </Button>
            </div>
          </div>
          <GlassCard>
            <ContactForm />
          </GlassCard>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 Hriddhi Sarker. Computational biology portfolio.</p>
          <div className="flex gap-5">
            <a href="#home" className="hover:text-primary">
              Home
            </a>
            <a href="#research" className="hover:text-primary">
              Research
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
