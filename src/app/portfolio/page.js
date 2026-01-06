"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- SUB-COMPONENT: The Interactive Terminal ---
const Terminal = ({ command, logs, isHovered }) => {
  const [lines, setLines] = useState([]);
  const [activeText, setActiveText] = useState("");
  const [step, setStep] = useState(0); // 0=Idle, 1=TypingCommand, 2=TypingLogs

  // EFFECT 1: Handle Reset when Mouse Leaves
  useEffect(() => {
    if (!isHovered) {
      setLines([]);
      setActiveText("");
      setStep(0);
    } else {
      // Trigger start of animation
      setStep(1);
    }
  }, [isHovered]);

  // EFFECT 2: Handle Animation Sequence
  useEffect(() => {
    if (!isHovered) return;

    let timeout;

    if (step === 1) {
        // Type the command line char by char
        if (activeText.length < command.length) {
            timeout = setTimeout(() => {
                setActiveText(command.slice(0, activeText.length + 1));
            }, 50); 
        } else {
            // Command finished, move to logs
            timeout = setTimeout(() => {
                setLines((prev) => [...prev, `root@matrix:~# ${command}`]);
                setActiveText("");
                setStep(2);
            }, 400);
        }
    } 
    else if (step === 2) {
        // Type the logs line by line
        // Calculate how many logs we have already printed (minus the command line)
        const printedLogsCount = lines.length - 1; 
        
        if (printedLogsCount < logs.length) {
            timeout = setTimeout(() => {
                setLines((prev) => [...prev, logs[printedLogsCount]]);
            }, 300);
        }
    }

    return () => clearTimeout(timeout);
  }, [step, activeText, isHovered, command, logs, lines]);

  return (
    <div className="bg-black border border-green-900 p-4 text-[10px] md:text-xs font-mono opacity-90 flex flex-col justify-end min-h-[160px] shadow-inner h-full">
      {/* Render processed lines */}
      {lines.map((line, i) => (
        <div key={i} className="text-green-400 break-all leading-tight mb-1">
          {line}
        </div>
      ))}

      {/* Render active typing line or idle cursor */}
      <div className="text-green-400 break-all leading-tight">
        {step === 0 && (
            <span>root@matrix:~# <span className="animate-pulse">_</span></span>
        )}
        {step === 1 && (
            <span>root@matrix:~# {activeText}<span className="bg-green-500 w-2 h-4 inline-block align-middle ml-1"></span></span>
        )}
        {step === 2 && lines.length - 1 < logs.length && (
             <span className="animate-pulse">_</span>
        )}
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: Project Card ---
const ProjectCard = ({ p }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="border border-[#0F0] bg-black bg-opacity-90 p-6 hover:shadow-[0_0_20px_#0F0] hover:border-green-400 transition-all duration-300 group flex flex-col h-full relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b border-[#0F0] border-dashed pb-2">
                <div className="flex items-baseline gap-2">
                    <span className="text-xs opacity-50">[{p.id}]</span>
                    <h2 className="text-xl md:text-2xl font-bold group-hover:translate-x-2 transition-transform">{p.name}</h2>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                    <span className="text-xs border border-[#0F0] px-2 py-1 opacity-80 bg-green-900/20">{p.role}</span>
                    <span className={`text-xs px-2 py-1 ${p.status === 'ACTIVE' ? 'bg-[#0F0] text-black animate-pulse' : 'border border-[#0F0]'}`}>
                        {p.status}
                    </span>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 flex-grow">
                {/* Description Column */}
                <div className="md:col-span-2 flex flex-col">
                    <h3 className="text-green-400 text-sm tracking-widest mb-4 font-bold">{p.subtitle}</h3>

                    <div className="mb-6 space-y-3 flex-grow">
                        <p className="text-sm md:text-base opacity-90 leading-relaxed">
                            <span className="font-bold text-white bg-green-900/30 px-1">THE PROBLEM:</span> <span className="opacity-80">{p.description}</span>
                        </p>
                        <p className="text-sm md:text-base opacity-90 leading-relaxed">
                            <span className="font-bold text-white bg-green-900/30 px-1">THE SOLUTION:</span> <span className="opacity-80">{p.solution}</span>
                        </p>
                    </div>

                    {/* ARSENAL SECTION */}
                    <div className="mt-auto pt-4 border-t border-green-900/50">
                        <div className="text-[10px] text-green-500 mb-2 uppercase tracking-widest font-bold opacity-70">Deployed Arsenal:</div>
                        <div className="flex flex-wrap gap-2">
                            {p.stack.map(tech => (
                                <span key={tech} className="border border-[#0F0] text-[#0F0] px-3 py-1 text-xs font-bold bg-black hover:bg-[#0F0] hover:text-black transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Animated Terminal Column */}
                <div className="hidden md:block h-full">
                    <Terminal 
                        command={`./init_${p.name.toLowerCase()}`} 
                        logs={p.logs} 
                        isHovered={isHovered} 
                    />
                </div>
            </div>
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function Portfolio() {
  const projects = [
    {
      id: "01",
      name: "THE_GATEKEEPER",
      subtitle: "AI SAFETY & GUARDRAILS",
      role: "The Shield",
      status: "ACTIVE",
      description: "An architectural pattern that prevents AI hallucinations from becoming security incidents.",
      solution: "A Pydantic-based middleware that rigidly validates all AI outputs against strict schemas. If the AI suggests a dangerous command, The Gatekeeper blocks it.",
      stack: ["Python", "Pydantic", "Custom Validators"],
      logs: [
          "[System] Loading Pydantic Schemas... OK",
          "[Security] Inspecting Output... FLAG DETECTED",
          "[Action] Blocked unsafe command: 'rm -rf /'",
          "[Status] System Secure."
      ]
    },
    {
      id: "02",
      name: "GHOST_IN_THE_SHELL",
      subtitle: "SELF-HEALING DEVOPS AGENT",
      role: "The Hands",
      status: "BETA",
      description: "A ReAct (Reasoning + Acting) agent designed to autonomously troubleshoot server infrastructure.",
      solution: "An agent that 'wakes up' upon error, reads logs, investigates Docker container states, and applies remediation strategies based on real-time feedback loops.",
      stack: ["LangChain", "Docker SDK", "Python"],
      logs: [
          "[Alert] Service 'web-api' Unresponsive",
          "[Agent] Reading /var/log/syslog...",
          "[Analysis] Memory Overflow Detected",
          "[Action] Restarting Docker Container... SUCCESS"
      ]
    },
    {
      id: "03",
      name: "THE_MATRIX_CODEX",
      subtitle: "ENTERPRISE RAG SYSTEM",
      role: "The Brain",
      status: "DEPLOYED",
      description: "A Retrieval Augmented Generation system designed for 'Director Mode' control. Standard RAG systems often retrieve garbage context.",
      solution: "A structured knowledge pipeline using ChromaDB that cleans, tags, and slices technical manuals (PDFs) into precise chunks with human verification.",
      stack: ["LangChain", "ChromaDB", "OpenAI API", "Streamlit"],
      logs: [
          "[Query] 'Reset Procedure for HPE Server'",
          "[Vector] Retrieving Chunks... (Matches: 3)",
          "[Context] Cleaning & Ranking...",
          "[Output] Generating Response... COMPLETE"
      ]
    },
    {
      id: "04",
      name: "GHOST_IN_THE_MARKET",
      subtitle: "FINANCIAL CO-PILOT",
      role: "The Analyst",
      status: "ACTIVE",
      description: "Micro-investment analysis agent designed to navigate market volatility and identify trend anomalies.",
      solution: "Autonomous monitoring of financial data streams to provide actionable intelligence without human latency.",
      stack: ["Python", "Pandas", "LLM Integration"],
      logs: [
          "[Stream] Connecting to Market Feed...",
          "[Analysis] Ticker SPY: Volatility > 2.5",
          "[Pattern] Bearish Divergence Detected",
          "[Signal] ALERT: HEDGE POSITIONS"
      ]
    }
  ];

  const arsenal = [
    { domain: "AI Frameworks", tools: "LangChain, CrewAI, OpenAI API" },
    { domain: "Core Engineering", tools: "Python, Bash, JSON" },
    { domain: "Infrastructure", tools: "Docker, Linux, Check Point Firewalls, HPE" },
    { domain: "Data & Vector", tools: "ChromaDB, Pydantic (Data Validation)" },
    { domain: "Interface", tools: "Streamlit, CLI" }
  ];

  return (
    <div className="min-h-screen bg-black text-[#0F0] font-mono p-4 md:p-8 relative overflow-hidden">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{backgroundImage: 'linear-gradient(#0F0 1px, transparent 1px), linear-gradient(90deg, #0F0 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <header className="mb-12 border-b border-[#0F0] pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">AGENT REGISTRY</h1>
            <p className="text-xs md:text-sm opacity-70">/usr/local/bin/projects</p>
          </div>
          <Link href="/" className="hover:bg-[#0F0] hover:text-black px-4 py-1 border border-[#0F0] transition-colors text-xs md:text-sm">
            &lt; RETURN_ROOT
          </Link>
        </header>

        {/* PROJECTS GRID */}
        <div className="grid gap-8 mb-16">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        {/* TECHNICAL ARSENAL SUMMARY */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#0F0] pl-4">FULL TECHNICAL ARSENAL</h2>
          <div className="border border-[#0F0] bg-black bg-opacity-90">
            {arsenal.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 border-b border-green-900 last:border-0 hover:bg-[#0F0] hover:bg-opacity-5 transition-colors">
                <div className="p-4 font-bold border-b md:border-b-0 md:border-r border-green-900 bg-green-900/10 md:bg-transparent text-sm md:text-base">
                  {item.domain}
                </div>
                <div className="p-4 md:col-span-3 opacity-80 flex items-center text-sm md:text-base">
                  {item.tools}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONNECT CTA */}
        <div className="text-center border border-[#0F0] border-dashed p-8 bg-green-900/5">
          <p className="text-lg md:text-xl mb-4">
            "I am currently open to <span className="text-white font-bold">Staff AI Engineer</span> roles."
          </p>
          <p className="opacity-70 mb-8 text-sm max-w-2xl mx-auto">
             If you need someone who understands both the <span className="text-[#0F0]">Neural Network</span> and the <span className="text-[#0F0]">Network Switch</span>, let's talk.
          </p>
          <Link href="/contact" className="inline-block hover:bg-[#0F0] hover:text-black px-8 py-3 border border-[#0F0] transition-all duration-300 uppercase tracking-widest font-bold">
            &gt; INITIATE HANDSHAKE
          </Link>
        </div>

      </div>
    </div>
  );
}