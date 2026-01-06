"use client";
import React from 'react';
import Link from 'next/link';

export default function About() {
  // Data extracted from your resume
  const timeline = [
    { 
      year: "2002-2006", 
      role: "BIOS_INIT", 
      company: "Alienware / Lennar",
      title: "Systems Support Analyst", 
      desc: "Hardware diagnostics, high-end PC architecture, and early server administration. The foundation of the machine." 
    },
    { 
      year: "2007-2015", 
      role: "NETWORK_PROTOCOLS", 
      company: "Vitas Health",
      title: "Technical Systems Engineer", 
      desc: "Scaled enterprise infrastructure. Managed Cisco routing, server migrations, and data room design for multi-site operations." 
    },
    { 
      year: "2016-2023", 
      role: "CLOUD_UPLINK", 
      company: "HPE / UKG / MTX Group",
      title: "Infrastructure Operations & DevOps", 
      desc: "Cloud migration and global Tier-3 support. Managed Salesforce deployments (NYC COVID Project), Azure AD identity systems, and high-availability architecture." 
    },
    { 
      year: "2024-PRESENT", 
      role: "NEURAL_ENGINE_ACTIVE", 
      company: "Matrix CR AI Studio",
      title: "AI Application Engineer", 
      desc: "Full-stack AI development. Building RAG pipelines with LangChain, autonomous agents with Tavily, and containerized microservices (Docker/FastAPI)." 
    }
  ];

  const education = [
    {
      id: "PKG_00",
      name: "WEB3_SECURITY_PROTOCOLS",
      institution: "Cyfrin Updraft",
      year: "2026 (LOADING...)",
      details: "Smart Contract Security, Solidity, Foundry Audit"
    },
    {
      id: "PKG_01",
      name: "AI_ENGINEERING_CORE",
      institution: "Self-Directed Intensive",
      year: "2026",
      details: "16-Week Bootcamp: RAG, LangChain, Docker, FastAPI"
    },
    {
      id: "PKG_02",
      name: "MASTER_DEVOPS_V1",
      institution: "Mithun Technologies",
      year: "2023",
      details: "CI/CD Pipelines, Kubernetes, Infrastructure as Code"
    },
    {
      id: "PKG_03",
      name: "BS_INFO_TECH_LEGACY",
      institution: "American Intercontinental Univ.",
      year: "2005",
      details: "90 Credits Completed: Core IT Infrastructure"
    },
    {
      id: "PKG_04",
      name: "LEGACY_BIOS_V1.0",
      institution: "Miami Senior High School",
      year: "1996",
      details: "High School Diploma: Foundation Layer"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-[#0F0] font-mono p-4 md:p-8 flex flex-col items-center relative overflow-hidden">
       {/* Background Scanline */}
       <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>

      <div className="z-10 w-full max-w-4xl">
        <header className="mb-12 border-b border-[#0F0] pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">BOOT_SEQUENCE: PABLO RAMIREZ</h1>
            <p className="text-xs md:text-sm opacity-70">/var/log/career_history.log</p>
          </div>
          <Link href="/" className="hover:bg-[#0F0] hover:text-black px-4 py-1 border border-[#0F0] transition-colors text-sm">
            &lt; RETURN_ROOT
          </Link>
        </header>

        {/* Skills Header */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm border-b border-[#0F0] border-dashed pb-8">
            <div className="p-2 border border-green-900 bg-green-900/10">
                <div className="opacity-50 mb-1">CORE_LANG:</div>
                <div className="font-bold">PYTHON / JS</div>
            </div>
            <div className="p-2 border border-green-900 bg-green-900/10">
                <div className="opacity-50 mb-1">INFRASTRUCTURE:</div>
                <div className="font-bold">DOCKER / AZURE</div>
            </div>
            <div className="p-2 border border-green-900 bg-green-900/10">
                <div className="opacity-50 mb-1">AI_FRAMEWORK:</div>
                <div className="font-bold">LANGCHAIN / RAG</div>
            </div>
            <div className="p-2 border border-green-900 bg-green-900/10">
                <div className="opacity-50 mb-1">LOCATION:</div>
                <div className="font-bold">COSTA RICA / REMOTE</div>
            </div>
        </div>

        {/* TIMELINE SECTION */}
        <div className="relative border-l-2 border-[#0F0] ml-2 md:ml-0 space-y-12 pl-6 md:pl-0 mb-16">
          {timeline.map((item, index) => (
            <div key={index} className="md:flex items-start group relative">
              
              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute left-[-6px] top-6 w-3 h-3 bg-black border border-[#0F0] rounded-full group-hover:bg-[#0F0] transition-colors z-20"></div>
              
              {/* Left Column: Date & Role */}
              <div className="md:w-1/3 md:text-right md:pr-12 mb-4 md:mb-0">
                <div className="text-xl font-bold text-[#0F0]">{item.year}</div>
                <div className="text-xs opacity-60 font-bold tracking-widest mb-1">{item.role}</div>
                <div className="text-sm text-green-300 opacity-80">{item.company}</div>
              </div>

              {/* Mobile Dot */}
              <div className="md:hidden absolute left-[-31px] top-1 w-4 h-4 bg-black border border-[#0F0] rounded-full group-hover:bg-[#0F0] transition-colors"></div>

              {/* Right Column: Content Card */}
              <div className="md:w-2/3 border border-[#0F0] bg-black bg-opacity-80 p-6 relative hover:shadow-[0_0_15px_#0F0] hover:translate-x-2 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="opacity-80 leading-relaxed text-sm">
                  <span className="text-[#0F0] mr-2">&gt;</span>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION SECTION (INSTALLED MODULES) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#0F0] pl-4">INSTALLED_MODULES (EDUCATION)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.map((edu) => (
              <div key={edu.id} className="border border-green-900 bg-green-900/5 p-4 hover:bg-[#0F0] hover:bg-opacity-10 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-green-500 opacity-70 border border-green-900 px-1">{edu.id}</span>
                    <span className={`text-xs font-bold ${edu.year.includes('LOADING') ? 'animate-pulse text-green-300' : ''}`}>{edu.year}</span>
                  </div>
                  <div className="font-bold text-sm mb-1 text-white">{edu.name}</div>
                  <div className="text-xs text-green-400 mb-2">{edu.institution}</div>
                </div>
                <div className="text-[10px] opacity-60 leading-tight pt-2 border-t border-green-900/30">
                  {edu.details}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block border border-[#0F0] px-6 py-2 animate-pulse text-sm">
                SYSTEM INTEGRITY VERIFIED... READY FOR DEPLOYMENT
            </div>
        </div>
      </div>
    </div>
  );
}