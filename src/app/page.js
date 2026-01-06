"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const fullText = "> Initialize Matrix CR AI Studio...\n> Loading Architect Profile: Pablo Ramirez...\n> Status: ONLINE";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0F0'; 
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const intervalId = setInterval(draw, 30);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typeInterval);
    }, 50);
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-[#0F0] font-mono">
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />

      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-black via-transparent to-transparent">
        
        <div className="border border-[#0F0] bg-black bg-opacity-80 p-8 rounded shadow-[0_0_20px_#0F0] max-w-2xl w-full">
          <div className="border-b border-[#0F0] pb-2 mb-4 flex justify-between">
            <span>TERMINAL: ADMIN_ACCESS</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <pre className="whitespace-pre-wrap text-lg md:text-xl mb-8 min-h-[100px]">
            {text}
            <span className="animate-pulse">_</span>
          </pre>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/portfolio" className="border border-[#0F0] hover:bg-[#0F0] hover:text-black py-2 px-4 transition-all duration-300 uppercase tracking-widest text-center block">
              &gt; Agent Portfolio
            </Link>
            
            <Link href="/services" className="border border-[#0F0] hover:bg-[#0F0] hover:text-black py-2 px-4 transition-all duration-300 uppercase tracking-widest text-center block">
              &gt; Deploy Agent
            </Link>
            <Link href="/about" className="border border-[#0F0] hover:bg-[#0F0] hover:text-black py-2 px-4 transition-all duration-300 uppercase tracking-widest text-center block">
              &gt; About Pablo
            </Link>
            <Link href="/contact" className="border border-[#0F0] hover:bg-[#0F0] hover:text-black py-2 px-4 transition-all duration-300 uppercase tracking-widest text-center block">
              &gt; Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}