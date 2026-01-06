"use client";
import React from 'react';
import Link from 'next/link';

export default function About() {
  const timeline = [
    { year: "2002-2006", role: "BIOS_INIT", company: "Alienware / Lennar", title: "Systems Support Analyst", desc: "Hardware diagnostics, high-end PC architecture, and early server administration." },
    { year: "2007-2015", role: "NETWORK_PROTOCOLS", company: "Vitas Health", title: "Technical Systems Engineer", desc: "Scaled enterprise infrastructure. Managed Cisco routing and server migrations." },
    { year: "2016-2023", role: "CLOUD_UPLINK", company: "HPE / UKG / MTX Group", title: "Infrastructure & DevOps", desc: "Cloud migration and global Tier-3 support. Managed Salesforce deployments and Azure AD." },
    { year: "2024-PRESENT", role: "NEURAL_ENGINE_ACTIVE", company: "Matrix CR AI Studio", title: "AI Application Engineer", desc: "Full-stack AI development. Building RAG pipelines and autonomous agents." }
  ];

  const education = [
    { id: "PKG_00", name: "WEB3_SECURITY", institution: "Cyfrin Updraft", year: "2026 (LOADING...)", details: "Smart Contract Security, Solidity" },
    { id: "PKG_01", name: "AI_ENGINEERING", institution: "Self-Directed", year: "2026", details: "RAG, LangChain, Docker, FastAPI" },
    { id: "PKG_02", name: "DEVOPS_MASTER", institution: "Mithun Tech", year: "2023", details: "CI/CD, Kubernetes, IaC" },
    { id: "PKG_03", name: "BS_INFO_TECH", institution: "AIU", year: "2005", details: "90 Credits: Core IT Infrastructure" },
    { id: "PKG_04", name: "LEGACY_BIOS", institution: "Miami Sr High", year: "1996", details: "High School Diploma" }
  ];

  return (
    <div className="min-h-screen bg-black text-[#0F0] font-mono p-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 bg-green-900/10 opacity-20"></div>

      <div className="z-10 w-full max-w-4xl mx-auto">
        {/* HEADER (Maintains Mobile Fix) */}
        <header className="mb-8 border-b border-[#0F0] pb-4 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-1">BOOT_SEQUENCE</h1>
            <p className="text-xs opacity-70">/var/log/career_history.log</p>
          </div>
          <Link href="/" className="w-full md:w-auto text-center hover:bg-[#0F0] hover:text-black px-4 py-2 border border-[#0F0] transition-colors text-xs">
            &lt; RETURN_ROOT
          </Link>
        </header>

        {/* SKILLS HEADER */}
        <div className="mb-12 grid grid-cols-2 gap-2 text-[10px] md:text-sm border-b border-[#0F0] border-dashed pb-8">
            <div className="p-2 border border-green-900 bg-green-900/10"><div className="opacity-50">CORE:</div><div className="font-bold">PYTHON / JS</div></div>
            <div className="p-2 border border-green-900 bg-green-900/10"><div className="opacity-50">INFRA:</div><div className="font-bold">DOCKER / AZURE</div></div>
            <div className="p-2 border border-green-900 bg-green-900/10"><div className="opacity-50">AI:</div><div className="font-bold">LANGCHAIN / RAG</div></div>
            <div className="p-2 border border-green-900 bg-green-900/10"><div className="opacity-50">LOC:</div><div className="font-bold">COSTA RICA</div></div>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-[#0F0] ml-2 space-y-8 pl-6 mb-16">
          {timeline.map((item, index) => (
            <div key={index} className="group relative">
              <div className="md:hidden absolute left-[-31px] top-1 w-4 h-4 bg-black border border-[#0F0] rounded-full group-hover:bg-[#0F0] transition-colors"></div>
              <div className="mb-2">
                <div className="text-lg font-bold text-[#0F0]">{item.year}</div>
                <div className="text-[10px] opacity-60 font-bold tracking-widest">{item.role}</div>
              </div>
              <div className="border border-[#0F0] bg-black bg-opacity-80 p-4 relative">
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="opacity-80 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION (With Glow Fix) */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6 border-l-4 border-[#0F0] pl-4">INSTALLED_MODULES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div key={edu.id} className="border border-green-900 bg-green-900/5 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-green-500 border border-green-900 px-1">{edu.id}</span>
                    {/* GLOW EFFECT ADDED HERE */}
                    <span className={`text-xs font-bold ${edu.year.includes('LOADING') ? 'animate-pulse text-[#0F0] drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]' : ''}`}>{edu.year}</span>
                  </div>
                  <div className="font-bold text-sm text-white">{edu.name}</div>
                  <div className="text-xs text-green-400 mb-2">{edu.institution}</div>
                </div>
                <div className="text-[10px] opacity-60 border-t border-green-900/30 pt-2">{edu.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}