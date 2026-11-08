import React, { useEffect, useRef, useState } from "react";
import "./assets/styles/terminal.css";

const email = "raghavananth02@gmail.com";
const linkedin = "https://www.linkedin.com/in/ananth-raghav-2151a9200/";
const resume = "/Resume.pdf";

const experience = [
  {
    role: "SDE 2",
    company: "Amazon",
    period: "March 2026 — Current",
    bullets: [
      "Worked in the financial systems for selling partners that powered reporting for all sellers.",
      "Worked heavily on developing a new system that ensure real time data processing of all financial transactions of all sellers with a SLA of minutes across petabytes of data.",
      "To maintain SOX compliance, was also part of the team that developed reconciliation of the financial transactions as part of the new system.",
       "Ideated a cross cutting technical strategy for enabling promotional support on cross currency purchases of digital products within a marketplace. Collaborated with multiple orgs and principal engineers for finalising on the tech approach",
      "Mentored multiple SDE-1(s) and conducted close to 25 interviews for hiring ",
    ],
  },
  {
    role: "SDE 1",
    company: "Amazon",
    period: "August 2024 — March 2026",
    bullets: [
      "Worked in the Digital Promotions team where we oversaw pricing and sales promotions across all digital products in Amazon across all marketplaces including Kindle, Prime Video and Audible.",
      "Worked on delivering prime exclusive deals for Digital products which involved cross cutting work, across deal creation, pricing, and reporting for the same.",
      "Worked on enabling coupon support for purchasing Kindle books in the JP ecosystem.",
      "Also worked on migrating an internal legacy workflow orchestration system to a newer orchestration paradigm that impacted around 9M workflow executions a month.",
      "Mentored multiple SDE-1(s) and interns in the team",
    ],
  },
  {
    role: "Member of Technical Staff",
    company: "Clearfeed",
    period: "June 2024 — July 2024",
    bullets: [
      "Post conversion from the internal role, expanded the internal architecture behind the ticketing systems offered along with external ticketing systems such as Freshdesk, Zendesk, JIRA, Hubspot and support for ticketing forms around the same",
      "Leveraged SQL queries via Cube to deliver accurate measures on ticket resolution and response metrics."
    ],
  },
  {
    role: "SDE Intern",
    company: "Clearfeed",
    period: "Jan 2024 — May 2024",
    bullets: [
      "Proven ability as a full-stack developer, contributing to frontend and backend components within the organization.",
      "Worked on enabling new features for the external ticketing integrations the platform supported along with the internal system",
    ],
  },
  {
    role: "SDE Intern",
    company: "Amazon",
    period: "Jul 2023 — Dec 2023",
    bullets: [
      "Worked on developing a new stop-gap solution for ensuring no drop in transactions within a new financial system",
      "Implemented Cloudwatch dashboards for monitoring across micro services under our org",
      "Mentored and helped a few other interns into understanding and completing their respective workstreams",
    ],
  },
];

const projects = [
  {
    name: "CSA Times",
    description:
      "Campus app with food ordering, events, notices, exam schedules and timetables. Around 2,000 users and 8,000 lines of code; added Jest tests and CI.",
    url: "https://play.google.com/store/apps/details?id=club.devsoc.csaapp",
  },
  {
    name: "Melange",
    description:
      "Alumni yearbook platform for sharing messages. Approximately 4,000 lines of code and 900+ users.",
    url: "https://www.instagram.com/p/CgEBvArvTPL/",
  },
  {
    name: "Cab Joint",
    description:
      "University-focused cab-pooling concept that helped students identify others arriving on the same day.",
    url: "https://github.com/ananth243/Cab-Joint",
  },
  {
    name: "Code Share",
    description:
      "A URL shortener for code snippets, with a daily cleanup job for one-time links.",
    url: "https://github.com/ananth243/Code-Share",
  },
];

const commandNames = [
  "help",
  "whoami",
  "experience",
  "education",
  "contact",
  "resume",
  "clear",
  "date",
];

function Output({ command, onRun }) {
  if (command === "clear") return null;

  if (command === "help") {
    return (
      <div className="help-grid">
        {commandNames.map((name) => (
          <button
            key={name}
            className="command-link"
            onClick={() => onRun(name)}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }

  if (command === "whoami") {
    return (
      <div className="output-copy">
        <p>
          <strong>Ananth Raghav</strong> — software engineer with 3 years of
          experience focused on distributed backend systems and infrastructure.
        </p>
        <p className="muted">
          I enjoy solving engineering problems across distributed systems, data
          stores and real time processing. My hobbies include watching sports,
          reading a book when I can and doing the occasional biking.
        </p>
      </div>
    );
  }

  if (command === "experience") {
    return (
      <div className="record-list">
        {experience.map((job) => (
          <article className="record" key={job.company}>
            <div className="record-heading">
              <strong>
                {job.role} <span className="muted">@ {job.company}</span>
              </strong>
              <span className="date">{job.period}</span>
            </div>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    );
  }

  if (command === "education") {
    return (
      <div className="output-copy">
        <p>
          <strong>BITS Pilani, K. K. Birla Goa Campus 2020-2024</strong>
        </p>
        <p className="muted">
          Graduated with B.E. (Hons) in Electronics and Instrumentation and a 8.1 CGPA.
          <br />
          Had the privilege of being part of the university basketball team too.
        </p>
      </div>
    );
  }

  if (command === "contact") {
    return (
      <div className="output-copy contact-lines">
        <p>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href={linkedin} target="_blank" rel="noreferrer">
            ananth-raghav ↗
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/ananth243"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ananth243 ↗
          </a>
        </p>
      </div>
    );
  }

  if (command === "resume") {
    return (
      <div className="output-copy">
        Download the latest resume:{" "}
        <a href={resume} target="_blank" rel="noreferrer">
          Resume.pdf ↗
        </a>
      </div>
    );
  }

  if (command === "date") {
    return <div className="output-copy">{new Date().toLocaleString()}</div>;
  }

  return (
    <div className="error">
      command not found: {command}. Type{" "}
      <button className="inline-command" onClick={() => onRun("help")}>
        help
      </button>{" "}
      to see available commands.
    </div>
  );
}

export default function App() {
  const [history, setHistory] = useState([{ command: "welcome", id: 0 }]);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "green"
  );
  const [cursor, setCursor] = useState(
    () => localStorage.getItem("portfolio-cursor") || "thin"
  );
  const [value, setValue] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-cursor", cursor);
  }, [cursor]);

  const runCommand = (raw) => {
    const command = raw.trim().toLowerCase().split(/\s+/)[0];
    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setValue("");
      setHistoryIndex(-1);
      return;
    }

    setHistory((items) => [...items, { command, id: Date.now() }]);
    setValue("");
    setHistoryIndex(-1);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [history]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runCommand(value);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const commands = history
        .filter((item) => item.command !== "welcome")
        .map((item) => item.command);
      const next = Math.min(historyIndex + 1, commands.length - 1);
      setHistoryIndex(next);
      if (commands.length) setValue(commands[commands.length - 1 - next]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = historyIndex - 1;
      setHistoryIndex(next);
      const commands = history
        .filter((item) => item.command !== "welcome")
        .map((item) => item.command);
      setValue(next < 0 ? "" : commands[commands.length - 1 - next] || "");
    } else if (event.key === "Tab") {
      event.preventDefault();
      const match = commandNames.find((name) =>
        name.startsWith(value.toLowerCase())
      );
      if (match) setValue(match);
    }
  };

  return (
    <main
      className={`terminal-shell theme-${theme} cursor-${cursor}`}
      onClick={() => inputRef.current?.focus()}
    >
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Ananth Raghav home">
          <span className="brand-mark">AR</span>
          <span>ANANTH RAGHAV</span>
        </a>
        <nav className="top-links" aria-label="Display settings and resume">
          <label className="setting-control">
            <span>theme</span>
            <select
              aria-label="Choose theme"
              value={theme}
              onClick={(event) => event.stopPropagation()}
              onChange={(event) => setTheme(event.target.value)}
            >
              <option value="green">green</option>
              <option value="amber">amber</option>
              <option value="blue">blue</option>
              <option value="light">light</option>
            </select>
          </label>
          <label className="setting-control cursor-setting">
            <span>cursor</span>
            <select
              aria-label="Choose cursor style"
              value={cursor}
              onClick={(event) => event.stopPropagation()}
              onChange={(event) => setCursor(event.target.value)}
            >
              <option value="thin">thin</option>
              <option value="thick">thick</option>
              <option value="smooth">smooth</option>
            </select>
          </label>
          <a href={resume} target="_blank" rel="noreferrer">
            resume ↗
          </a>
        </nav>
      </header>

      <section
        className="terminal-window"
        id="top"
        aria-label="Interactive portfolio terminal"
      >
        <div className="window-bar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>ananth243@portfolio: ~</span>
          <span className="window-status">
            <b /> ONLINE
          </span>
        </div>

        <div className="terminal-body">
          <div className="intro-block">
            <div className="eyebrow">
              SDE 2<span>·</span> DISTRIBUTED BACKEND SYSTEMS
            </div>
            <h1>
              Building things<em> that work.</em>
            </h1>
            <p className="intro-copy">
              Hi, I&apos;m Ananth. I build backend systems that scale for real
              world problems.
            </p>
            <div className="intro-meta">
              <span>
                <i className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
              </span>
              <span>INDIA / REMOTE</span>
            </div>
          </div>

          <div className="terminal-divider">
            <span>INTERACTIVE SHELL</span>
            <span>
              TYPE <b>help</b> TO EXPLORE
            </span>
          </div>

          <div className="console" onClick={(event) => event.stopPropagation()}>
            <div className="console-history">
              {history.map((item) =>
                item.command === "welcome" ? (
                  <div className="welcome" key="welcome">
                    <p>Welcome to my little corner of the internet.</p>
                    <p className="muted">
                      This portfolio is a terminal. Try{" "}
                      <button
                        className="inline-command"
                        onClick={() => runCommand("help")}
                      >
                        help
                      </button>
                      , or pick a command below.
                    </p>
                  </div>
                ) : (
                  <div className="command-entry" key={item.id}>
                    <div className="command-line">
                      <span className="prompt">➜</span>
                      <span className="path">~</span>
                      <span>{item.command}</span>
                    </div>
                    <Output command={item.command} onRun={runCommand} />
                  </div>
                )
              )}
              <div ref={bottomRef} />
            </div>

            <form
              className="input-line"
              onSubmit={(event) => {
                event.preventDefault();
                runCommand(value);
              }}
            >
              <span className="prompt">➜</span>
              <span className="path">~</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Terminal command"
                autoComplete="off"
                spellCheck="false"
                placeholder="type a command..."
              />
              <span className="input-hint">↵</span>
            </form>
          </div>

          <div className="quick-commands">
            <span>QUICK ACCESS</span>
            {["whoami", "experience", "contact"].map((cmd) => (
              <button key={cmd} onClick={() => runCommand(cmd)}>
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} ANANTH RAGHAV</span>
        <span>
          BUILT WITH CURIOSITY <b>↗</b>
        </span>
        <a href={linkedin} target="_blank" rel="noreferrer">
          LINKEDIN ↗
        </a>
      </footer>
    </main>
  );
}
