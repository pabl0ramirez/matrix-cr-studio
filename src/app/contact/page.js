"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "prog.pabloramirez@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-[#0F0] font-mono p-4 flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'radial-gradient(#0F0 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

      <div className="z-10 w-full max-w-2xl border border-[#0F0] bg-black bg-opacity-90 p-6 md:p-8 shadow-[0_0_30px_rgba(0,255,0,0.2)]">
        
        <header className="mb-8 border-b border-[#0F0] pb-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-widest">ESTABLISH_UPLINK</h1>
          <p className="text-xs opacity-70">SECURE_CHANNEL_V4.0 // ENCRYPTED</p>
        </header>

        <div className="space-y-6">
          <div className="group">
            <div className="text-xs opacity-50 mb-1">PROTOCOL: SMTP</div>
            {/* FIXED: added break-all to handle long email on mobile */}
            <div className="flex flex-col md:flex-row items-center justify-between border border-[#0F0] p-4 gap-4">
              <span className="text-sm md:text-xl break-all text-center md:text-left">{email}</span>
              <button 
                onClick={handleCopy}
                className="text-xs border border-[#0F0] px-4 py-2 hover:bg-[#0F0] hover:text-black uppercase whitespace-nowrap"
              >
                {copied ? 'COPIED' : 'COPY_ADDR'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://www.linkedin.com/in/pablo-ramirez-764929240/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="border border-[#0F0] p-4 hover:bg-[#0F0] hover:text-black transition-all text-center group">
                <div className="text-xs opacity-50 group-hover:text-black mb-1">NETWORK: LINKEDIN</div>
                <div className="font-bold text-lg">&gt; CONNECT_NODE</div>
              </div>
            </a>
            <a href="#" className="block">
              <div className="border border-[#0F0] p-4 hover:bg-[#0F0] hover:text-black transition-all text-center group">
                <div className="text-xs opacity-50 group-hover:text-black mb-1">REPO: GITHUB</div>
                <div className="font-bold text-lg">&gt; ACCESS_CODE</div>
              </div>
            </a>
          </div>

          <div className="mt-8 border-t border-[#0F0] border-dashed pt-6 text-center">
            <Link href="/" className="inline-block hover:bg-[#0F0] hover:text-black px-6 py-2 border border-[#0F0] transition-colors uppercase tracking-widest text-xs">
              &lt; TERMINATE_SESSION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}