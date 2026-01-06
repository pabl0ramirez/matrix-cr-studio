"use client";
import React from 'react';
import Link from 'next/link';

export default function Services() {
  const missions = [
    {
      id: "M-01",
      title: "ENTERPRISE RAG SYSTEMS",
      subtitle: "KNOWLEDGE RETRIEVAL",
      desc: "Deploy a custom Large Language Model pipeline connected to your internal data (PDFs, SQL, Notion). Secure, private, and hallucination-free.",
      cost: "HIGH_IMPACT",
      action: "mailto:prog.pabloramirez@gmail.com?subject=DEPLOY_AGENT: RAG_SYSTEM_REQUEST"
    },
    {
      id: "M-02",
      title: "AUTONOMOUS AGENTS",
      subtitle: "WORKFLOW AUTOMATION",
      desc: "Spin up intelligent agents (using LangChain/Tavily) that can browse the web, scrape data, and execute complex multi-step workflows autonomously.",
      cost: "EFFICIENCY_BOOST",
      action: "mailto:prog.pabloramirez@gmail.com?subject=DEPLOY_AGENT: AUTONOMOUS_WORKER_REQUEST"
    },
    {
      id: "M-03",
      title: "INFRASTRUCTURE SHELL",
      subtitle: "SECURE HOSTING & DEVOPS",
      desc: "Build the 'Ghost in the Shell'. Hardened Docker containers, Azure cloud architecture, and secure API gateways for your AI models.",
      cost: "MISSION_CRITICAL",
      action: "mailto:prog.pabloramirez@gmail.com?subject=DEPLOY_AGENT: INFRASTRUCTURE_REQUEST"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-[#0F0] font-mono p-8 relative overflow-hidden flex flex-col items-center">
      {/* Background Hexagon Grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{backgroundImage: 'radial-gradient(circle, #0F0 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
      </div>

      <div className="z-10 w-full max-w-5xl">
        <header className="mb-12 border-b border-[#0F0] pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">SELECT MISSION PROFILE</h1>
            <p className="text-sm opacity-70">AWAITING INPUT...</p>
          </div>
          <Link href="/" className="hover:bg-[#0F0] hover:text-black px-4 py-1 border border-[#0F0] transition-colors text-sm">
            &lt; ABORT
          </Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {missions.map((m) => (
            <div key={m.id} className="border border-[#0F0] bg-black bg-opacity-90 p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 group hover:shadow-[0_0_20px_#0F0]">
              <div>
                <div className="flex justify-between items-center mb-4 border-b border-green-900 pb-2">
                  <span className="text-xs font-bold bg-[#0F0] text-black px-2 py-0.5">{m.id}</span>
                  <span className="text-[10px] opacity-60 tracking-widest">{m.cost}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-1 leading-tight">{m.title}</h3>
                <div className="text-xs text-green-400 mb-4 tracking-widest opacity-80">{m.subtitle}</div>
                
                <p className="text-sm opacity-70 mb-8 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <a href={m.action} className="block text-center border border-[#0F0] py-3 hover:bg-[#0F0] hover:text-black transition-colors uppercase tracking-widest text-sm font-bold animate-pulse hover:animate-none">
                &gt; INITIALIZE PROTOCOL
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-40 text-xs">
          WARNING: DEPLOYING AGENT WILL INITIATE CLIENT ONBOARDING SEQUENCE.
        </div>
      </div>
    </div>
  );
}