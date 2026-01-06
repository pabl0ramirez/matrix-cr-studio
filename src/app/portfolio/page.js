"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- SUB-COMPONENT: The Interactive Terminal ---
const Terminal = ({ command, logs, isActive }) => {
  const [lines, setLines] = useState([]);
  const [activeText, setActiveText] = useState("");
  const [step, setStep] = useState(0); 

  useEffect(() => {
    if (!isActive) {
      setLines([]);
      setActiveText("");
      setStep(0);
    } else {
      setStep(1);
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    let timeout;
    if (step === 1) {
        if (activeText.length < command.length) {
            timeout = setTimeout(() => {
                setActiveText(command.slice(0, activeText.length + 1));
            }, 50); 
        } else {
            timeout = setTimeout(() => {
                setLines((prev) => [...prev, `root@matrix:~# ${command}`]);
                setActiveText("");
                setStep(2);
            }, 400);
        }
    } 
    else if (step === 2) {
        const printedLogsCount = lines.length - 1; 
        if (printedLogsCount < logs.length) {
            timeout = setTimeout(() => {
                setLines((prev) => [...prev, logs[printedLogsCount]]);
            }, 300);
        }
    }
    return () => clearTimeout(timeout);
  }, [step, activeText, isActive, command, logs, lines]);

  return (
    <div className="bg-black border border-green-900 p-3 text-[10px] font-mono opacity-90 flex flex-col justify-end min-h-[140px] shadow-inner h-full w-full">
      {lines.map((line, i) => (
        <div key={i} className="text-green-400 break-all leading-tight mb-1">
          {line}
        </div>
      ))}
      <div className="text-green-400 break-all leading-tight">
        {step === 0 && <span>root@matrix:~# <span className="animate-pulse">_</span></span>}
        {step === 1 && <span>root@matrix:~# {activeText}<span className="bg-green-500 w-2 h-4 inline-block align-middle ml-1"></span></span>}
        {step === 2 && lines.length - 1 < logs.length && <span className="animate-pulse">_</span>}
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: Project Card ---
const ProjectCard = ({ p }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Toggle for mobile tap
    const toggleActive = () => setIsHovered(!isHovered);

    return (
        <div 
            className="border border-[#0F0] bg-black bg-opacity-90 p-4 md:p-6 hover:shadow-[0_0_20px_#0F0] hover:border-green-400 transition-all duration-300 group flex flex-col h-full relative cursor-pointer md:cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleActive} // Tap to run on mobile
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b border-[#0F0] border-dashed pb-2">
                <div className="flex items-baseline gap-2">
                    <span className="text-xs opacity-50">[{p.id}]</span>
                    <h2 className="text-lg md:text-2xl font-bold group-hover:translate-x-2 transition-transform">{p.name}</h2>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                   <span className="text-[10px] border border-[#0F0] px-2 py-1 opacity-80 bg-green-900/20">{p.role}</span>
                   <span className={`text-[10px] px-2 py-1 ${p.status === 'ACTIVE' ? 'bg-[#0F0] text-black animate-pulse' : 'border border-[#0F0]'}`}>
                    {p.status}
                  </span>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 flex-grow">
                <div className="md:col-span-2 flex flex-col">
                    <h3 className="text-green-400 text-xs tracking-widest mb-4 font-bold">{p.subtitle}</h3>
                    <div className="mb-6 space-y-3 flex-grow">
                        <p className="text-sm opacity-90 leading-relaxed">
                            <span className="font-bold text-white bg-green-900/30 px-1">PROBLEM:</span> <span className="opacity-80">{p.description}</span>
                        </p>
                        <p className="text-sm opacity-90 leading-relaxed">
                            <span className="font-bold text-white bg-green-900/30 px-1">SOLUTION:</span> <span className="opacity-80">{p.solution}</span>
                        </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-green-900/50 mb-4 md:mb-0">
                        <div className="text-[10px] text-green-500 mb-2 uppercase tracking-widest font-bold opacity-70">Stack:</div>
                        <div className="flex flex-wrap gap-2">
                            {p.stack.map(tech => (
                                <span key={tech} className="border border-[#0F0] text-[#0F0] px-2 py-1 text-[10px] font-bold bg-black">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Terminal is now VISIBLE on mobile (removed 'hidden') */}
                <div className="block h-full mt-4 md:mt-0">
                    <div className="md:hidden text-[10px] text-center text-green-500 opacity-50 mb-1 animate-pulse">
                        [ TAP TO INITIALIZE ]
                    </div>
                    <Terminal 
                        command={`./init_${p.name.toLowerCase()}`} 
                        logs={p.logs} 
                        isActive={isHovered} 
                    />
                </div>
            </div>
        </div>
    );
};

export default function Portfolio() {
  // ... (Project data remains exactly the same as before) ...
  const projects = [
    {
      id: "01",
      name: "THE_GATEKEEPER",
      subtitle: "AI SAFETY & GUARDRAILS",
      role: "The Shield",
      status: "ACTIVE",
      description: "Prevents AI hallucinations from becoming security incidents.",
      solution: "Pydantic-based middleware that validates AI outputs against strict schemas.",
      stack: ["Python", "Pydantic", "Custom Validators"],
      logs: ["[System] Loading Schemas...", "[Security] FLAG DETECTED", "[Action] Blocked: 'rm -rf /'", "[Status] System Secure."]
    },
    {
      id: "02",
      name: "GHOST_IN_THE_SHELL",
      subtitle: "SELF-HEALING DEVOPS AGENT",
      role: "The Hands",
      status: "BETA",
      description: "ReAct agent designed to autonomously troubleshoot server infrastructure.",
      solution: "Reads logs, investigates Docker states, and applies remediation strategies.",
      stack: ["LangChain", "Docker SDK", "Python"],
      logs: ["[Alert] Service Unresponsive", "[Agent] Reading logs...", "[Action] Restart Container", "[Status] SUCCESS"]
    },
    {
      id: "03",
      name: "THE_MATRIX_CODEX",
      subtitle: "ENTERPRISE RAG SYSTEM",
      role: "The Brain",
      status: "DEPLOYED",
      description: "RAG system designed for 'Director Mode' control.",
      solution: "Knowledge pipeline using ChromaDB that cleans and tags technical manuals.",
      stack: ["LangChain", "ChromaDB", "OpenAI"],
      logs: ["[Query] 'Reset Procedure'", "[Vector] Retrieving...", "[Context] Ranking...", "[Output] COMPLETE"]
    },
    {
      id: "04",
      name: "GHOST_IN_THE_MARKET",
      subtitle: "FINANCIAL CO-PILOT",
      role: "The Analyst",
      status: "ACTIVE",
      description: "Micro-investment analysis agent for market volatility.",
      solution: "Autonomous monitoring of financial data streams.",
      stack: ["Python", "Pandas", "LLM"],
      logs: ["[Stream] Connecting...", "[Analysis] Volatility > 2.5", "[Signal] ALERT: HEDGE", "[Status] Sent."]
    }
  ];

  const arsenal = [
    { domain: "AI Frameworks", tools: "LangChain, CrewAI, OpenAI API" },
    { domain: "Core Engineering", tools: "Python, Bash, JSON" },
    { domain: "Infrastructure", tools: "Docker, Linux, Check Point, HPE" },
    { domain: "Data & Vector", tools: "ChromaDB, Pydantic" },
    { domain: "Interface", tools: "Streamlit, CLI" }
  ];

  return (
    <div className="min-h-screen bg-black text-[#0F0] font-mono p-4 md:p-8 relative">
      <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(#0F0 1px, transparent 1px), linear-gradient(90deg, #0F0 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <header className="mb-8 border-b border-[#0F0] pb-4 flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">AGENT REGISTRY</h1>
            <p className="text-xs opacity-70">/usr/local/bin/projects</p>
          </div>
          <Link href="/" className="w-full md:w-auto text-center hover:bg-[#0F0] hover:text-black px-4 py-2 border border-[#0F0] transition-colors text-xs">
            &lt; RETURN_ROOT
          </Link>
        </header>

        <div className="grid gap-8 mb-16">
          {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#0F0] pl-4">TECHNICAL ARSENAL</h2>
          <div className="border border-[#0F0] bg-black bg-opacity-90">
            {arsenal.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 border-b border-green-900 last:border-0">
                <div className="p-3 font-bold border-b md:border-b-0 md:border-r border-green-900 bg-green-900/10 text-xs">{item.domain}</div>
                <div className="p-3 md:col-span-3 opacity-80 text-xs">{item.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}