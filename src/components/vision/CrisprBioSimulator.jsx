import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dna, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

const PRESET_TARGETS = [
  {
    id: 'mybpc3',
    name: 'MYBPC3 Hypertrophic Variant',
    category: 'Hereditary Cardiac Disease',
    originalSequence: ['C', 'T', 'G', 'A', 'G', 'G', 'T', 'C', 'A'],
    targetIndex: 4,
    correction: 'A',
    expectedImpact: 'Prevents 87% generational cardiomyopathy transmission',
  },
  {
    id: 'pcsk9',
    name: 'PCSK9 Lipid Hyper-Regulation',
    category: 'Cardiovascular Longevity',
    originalSequence: ['A', 'A', 'G', 'C', 'T', 'C', 'G', 'A', 'T'],
    targetIndex: 3,
    correction: 'G',
    expectedImpact: 'Reduces atherogenic LDL particle density by 62%',
  },
  {
    id: 'edna_marine',
    name: 'Acropora Coral Thermotolerance',
    category: 'Marine eDNA Biodiversity',
    originalSequence: ['G', 'C', 'A', 'T', 'T', 'G', 'C', 'A', 'A'],
    targetIndex: 5,
    correction: 'T',
    expectedImpact: 'Enhances heat shock protein folding under +2.5°C ocean warming',
  },
];

export default function CrisprBioSimulator() {
  const [selectedTarget, setSelectedTarget] = useState(PRESET_TARGETS[0]);
  const [sequence, setSequence] = useState([...PRESET_TARGETS[0].originalSequence]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);

  const handleSelectPreset = (preset) => {
    setSelectedTarget(preset);
    setSequence([...preset.originalSequence]);
    setSimulationResult(null);
  };

  const handleMutateBase = (index, newBase) => {
    const next = [...sequence];
    next[index] = newBase;
    setSequence(next);
    setSimulationResult(null);
  };

  const runAiSpliceSimulation = () => {
    setIsSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      const isCorrected = sequence[selectedTarget.targetIndex] === selectedTarget.correction;
      setSimulationResult({
        success: isCorrected,
        confidence: isCorrected ? (97.8 + Math.random() * 1.8).toFixed(1) : (44.2 + Math.random() * 8.5).toFixed(1),
        offTargetRisk: isCorrected ? '0.003%' : '14.8%',
        bindingEnergy: isCorrected ? '-38.4 kcal/mol' : '-18.1 kcal/mol',
        verdict: isCorrected
          ? 'Optimal sgRNA Cleavage: High Specificity & Zero Deleterious Indels'
          : 'Suboptimal Cleavage: Mismatched PAM Site or Low Target Affinity',
      });
    }, 900);
  };

  const BASE_COLORS = {
    A: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    T: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    G: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    C: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  };

  return (
    <div className="rounded-3xl bg-[#090b14]/95 border border-purple-500/25 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.12)] space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
            <Dna size={22} className="animate-pulse" />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-white tracking-wide">
              Bio-BERT Neural Genomic Synthesizer
            </h4>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-400">
              Interactive Deep Learning Splicer
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
            NEURAL ENGINE ONLINE
          </span>
        </div>
      </div>

      {/* Target Selector */}
      <div className="space-y-2">
        <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 block font-semibold">
          Select Target Genomic Sequence:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PRESET_TARGETS.map((t) => (
            <button
              key={t.id}
              onClick={() => handleSelectPreset(t)}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedTarget.id === t.id
                  ? 'bg-purple-500/15 border-purple-500/60 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span className="font-display font-semibold text-xs text-white block">{t.name}</span>
              <span className="font-mono text-[9px] text-purple-400 block mt-0.5">{t.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Codon Splicer Ribbon */}
      <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono uppercase tracking-wider">Target Codon Strand (5' → 3')</span>
          <span className="font-mono text-purple-400 text-[11px]">
            Target mutation locus: #{selectedTarget.targetIndex + 1}
          </span>
        </div>

        {/* Nucleotide Base Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
          {sequence.map((base, idx) => {
            const isTarget = idx === selectedTarget.targetIndex;
            return (
              <div key={idx} className="flex flex-col items-center gap-1.5">
                <span className="font-mono text-[8px] text-slate-500">#{idx + 1}</span>
                <div className="relative group">
                  <div
                    className={`w-10 h-12 rounded-lg border font-mono font-bold text-base flex items-center justify-center transition-all ${
                      BASE_COLORS[base]
                    } ${isTarget ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-black scale-105' : ''}`}
                  >
                    {base}
                  </div>

                  {/* Quick Mutate Selector Dropdown on Hover */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:flex bg-black/95 border border-white/20 rounded-lg p-1 gap-1 z-20 shadow-2xl">
                    {['A', 'T', 'G', 'C'].map((b) => (
                      <button
                        key={b}
                        onClick={() => handleMutateBase(idx, b)}
                        className="w-5 h-6 rounded text-[10px] font-mono font-bold hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center font-body text-[11.5px] text-slate-400">
          Hover over nucleotide #{selectedTarget.targetIndex + 1} to mutate the base to <strong className="text-purple-300 font-mono">[{selectedTarget.correction}]</strong> for optimal therapeutic cleavage.
        </p>
      </div>

      {/* Action Button */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={runAiSpliceSimulation}
          disabled={isSimulating}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] disabled:opacity-50"
        >
          {isSimulating ? (
            <>
              <RefreshCw size={14} className="animate-spin" />
              <span>Simulating Binding Dynamics...</span>
            </>
          ) : (
            <>
              <Sparkles size={14} />
              <span>Run CRISPR Neural Analysis</span>
            </>
          )}
        </button>

        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline-block">
          AlphaFold-3 & ESM-2 Model Weights
        </span>
      </div>

      {/* Live Simulation Results Box */}
      <AnimatePresence>
        {simulationResult && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`p-5 rounded-2xl border ${
              simulationResult.success
                ? 'bg-emerald-950/30 border-emerald-500/40 text-slate-200'
                : 'bg-amber-950/30 border-amber-500/40 text-slate-200'
            } space-y-4`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className={simulationResult.success ? 'text-emerald-400' : 'text-amber-400'}
                />
                <span className="font-display font-bold text-sm text-white">
                  {simulationResult.success ? 'CRISPR Target Validated' : 'Cleavage Target Warning'}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-purple-400">
                Confidence: {simulationResult.confidence}%
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[11px] pt-1">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 block text-[9px] uppercase">Off-Target Probability</span>
                <span className="text-white font-bold">{simulationResult.offTargetRisk}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-400 block text-[9px] uppercase">Thermodynamic Free Energy</span>
                <span className="text-white font-bold">{simulationResult.bindingEnergy}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 col-span-2 sm:col-span-1">
                <span className="text-slate-400 block text-[9px] uppercase">Clinical Outcome</span>
                <span className="text-emerald-300 font-bold truncate block">{selectedTarget.expectedImpact}</span>
              </div>
            </div>

            <p className="font-body text-xs text-slate-300 italic border-t border-white/10 pt-2.5">
              Verdict: {simulationResult.verdict}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
