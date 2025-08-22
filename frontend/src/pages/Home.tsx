import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2 } from 'lucide-react';
import axios from "axios";
import { BACKEND_URL } from '../config';

export function Home() {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate('/builder', { state: { prompt } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
  <div className="max-w-2xl w-full space-y-8">
    
    {/* Header */}
    <div className="text-center space-y-3">
      <div className="flex justify-center">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-400/10">
          <Wand2 className="w-12 h-12 text-emerald-400" />
        </div>
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
        WebCraft
      </h1>
      <p className="text-lg text-gray-400 max-w-md mx-auto">
        Your AI companion to craft websites — describe your idea, and we’ll build the plan step by step.
      </p>
    </div>

    {/* Input Section */}
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="✨ Describe the website you want to build..."
          className="w-full h-36 p-4 bg-gray-950/80 text-gray-100 border border-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none placeholder-gray-500 text-base leading-relaxed"
        />
        <button
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-500 hover:to-teal-400 transition-all shadow-md hover:shadow-lg"
        >
          🚀 Generate Website 
        </button>
      </div>
    </form>

    {/* Footer */}
    <p className="text-xs text-gray-600 text-center">
      Powered by AI • Designed for creators
    </p>
  </div>
</div>


  );
}