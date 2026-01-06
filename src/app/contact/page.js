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
    <div className="min-h-screen bg-black text-[#0F0] font-mono p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{backgroundImage: 'radial-gradient(#0F0 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
      </div>

      <div className="z-10 w-full max-w-2xl border border-[#0F0] bg-black bg-opacity-90 p-8 shadow-[0_0_30px_rgba(0,255,0,0.2)]">
        
        <header className="mb-8 border-b border-[#0F0] pb-4 text-center">
          <h1 className="text-3xl font-bold mb-2 tracking-widest">ESTABLISH_UPLINK</h1>
          <p className="text-xs opacity-70">SECURE_CHANNEL_V4.0 // ENCRYPTED</p>
        </header>

        <div className="space-y-6">
          
          {/* Email Protocol */}
          <div className="group">
            <div className="text-xs opacity-50 mb-1">PROTOCOL: SMTP</div>
            <div className="flex items-center justify-between border border-[#0F0] p-4 hover:bg-[#0F0] hover:bg-opacity-10 transition-all">
              <span className="text-lg md:text-xl">{email}</span>
              <button 
                onClick={handleCopy}
                className="text-xs border border-[#0F0] px-3 py-1 hover:bg-[#0F0] hover:text-black uppercase"
              >
                {copied ? 'COPIED_TO_CLIPBOARD' : 'COPY_ADDR'}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://www.linkedin.com/in/pablo-ramirez-7357a2143/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="border border-[#0F0] p-4 hover:bg-[#0F0] hover:text-black transition-all text-center group">
                <div className="text-xs opacity-50 group-hover:text-black mb-1">NETWORK: LINKEDIN</div>
                <div className="font-bold text-xl">&gt; CONNECT_NODE</div>
              </div>
            </a>

            <a href="#" className="block"> {/* Add your GitHub URL here later if needed */}
              <div className="border border-[#0F0] p-4 hover:bg-[#0F0] hover:text-black transition-all text-center group">
                <div className="text-xs opacity-50 group-hover:text-black mb-1">REPO: GITHUB</div>
                <div className="font-bold text-xl">&gt; ACCESS_CODE</div>
              </div>
            </a>
          </div>

          {/* Matrix CR Studio Info */}
          <div className="mt-8 border-t border-[#0F0] border-dashed pt-6 text-center">
            <p className="text-sm opacity-80 mb-4">
              "I build the reliable, secure 'Shell' that allows the AI 'Ghost' to function."
            </p>
            <Link href="/" className="inline-block hover:bg-[#0F0] hover:text-black px-6 py-2 border border-[#0F0] transition-colors uppercase tracking-widest text-sm">
              &lt; TERMINATE_SESSION
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}