import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Award,
  Database,
  Server,
  Share2,
  ShieldCheck,
  Zap,
  Activity,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  User,
  Layers,
  ArrowRight,
  Globe,
  Smartphone,
  Layout,
  Settings,
  Shuffle,
  BarChart3,
  ArrowLeftRight,
  RefreshCw,
  Code,
  Globe2,
  Minimize2,
  Maximize2,
  ArrowDown,
  FileText,
  Users,
  Gavel,
  CheckSquare,
  ClipboardList,
  GraduationCap,
  Building,
  Menu,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  PanelLeftClose,
  PanelRightClose,
  LayoutTemplate,
  Network,     
  Shield, 
  Building2,
  School,
  Map
} from 'lucide-react';

/**
 * UNIFIED AWARDING PLATFORM (UAP) - INTERACTIVE DOCUMENTATION & SIMULATOR
 * * This application provides a comprehensive architectural view and interactive simulation
 * of the UAP based on the ministry PRDs.
 * * Structure:
 * - Left Panel: Documentation & Context (Per PRD)
 * - Right Panel: Interactive Simulators (Per PRD)
 */

// --- DATA CONSTANTS & CONFIGURATION ---

const PAGES = [
  { id: 'overview', label: 'System Overview', icon: <Globe2 size={18} />, desc: 'Master Platform Vision' },
  { id: 'config', label: 'Award Configuration', icon: <Settings size={18} />, desc: 'PRD-1: Wizard & Setup' },
  { id: 'submission', label: 'Submission Engine', icon: <FileText size={18} />, desc: 'PRD-2: Forms & Eligibility' },
  { id: 'hierarchy', label: 'Hierarchy & Roles', icon: <Building size={18} />, desc: 'PRD-3: Permissions' },
  { id: 'evaluators', label: 'Evaluators & Committees', icon: <Users size={18} />, desc: 'PRD-4: Management' },
  { id: 'scoring', label: 'Scoring Engine', icon: <BarChart3 size={18} />, desc: 'PRD-5: Calculation' },
  { id: 'appeals', label: 'Appeals & Audit', icon: <Gavel size={18} />, desc: 'PRD-6: Corrections' },
];

// --- SHARED UI COMPONENTS ---

const DocSection = ({ title, icon, children }) => (
  <section className="mb-10 animate-fade-in">
    <div className="flex items-center gap-3 mb-4 pb-2 border-b border-slate-100">
      <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">{icon}</span>
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
    </div>
    <div className="text-slate-600 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

const FeatureCard = ({ title, desc, icon }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start gap-3">
      <div className="text-indigo-500 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-slate-900 text-sm">{title}</h4>
        <p className="text-xs text-slate-500 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    'Draft': 'bg-slate-100 text-slate-600',
    'Submitted': 'bg-blue-100 text-blue-700',
    'Pre-Review': 'bg-purple-100 text-purple-700',
    'Evaluation': 'bg-amber-100 text-amber-700',
    'Finalized': 'bg-green-100 text-green-700',
    'Appeals': 'bg-rose-100 text-rose-700',
  };
  return (
    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${styles[status] || 'bg-gray-100'}`}>
      {status}
    </span>
  );
};

// --- SIMULATOR COMPONENTS ---

// 1. SYSTEM OVERVIEW SIMULATOR
const SimOverview = ({ onNavigate }) => {
  return (
    <div className="p-6 space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-white">Unified Awarding Ecosystem</h3>
        <p className="text-slate-400 text-sm">Interactive Architecture Map</p>
      </div>

      <div className="relative">
        {/* Central Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="grid grid-cols-1 gap-6 relative z-10">
          {/* Top Layer: Config */}
          <div className="flex justify-center">
            <button 
              onClick={() => onNavigate('config')}
              className="bg-slate-800 border-2 border-indigo-500/50 p-4 rounded-2xl w-64 text-center hover:bg-slate-700 transition-all hover:scale-105 group"
            >
              <div className="flex justify-center mb-2"><Settings className="text-indigo-400 group-hover:text-white" /></div>
              <h4 className="font-bold text-white">1. Configuration</h4>
              <p className="text-xs text-slate-400 mt-1">Wizard, Rules, Criteria</p>
            </button>
          </div>

          <div className="flex justify-center"><ArrowDown className="text-slate-600" /></div>

          {/* Middle Layer: Submission & Routing */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => onNavigate('submission')}
              className="bg-slate-800 border border-slate-600 p-4 rounded-2xl text-center hover:bg-slate-700 transition-all hover:border-blue-400 group"
            >
              <div className="flex justify-center mb-2"><FileText className="text-blue-400" /></div>
              <h4 className="font-bold text-white">2. Submission</h4>
              <p className="text-xs text-slate-400 mt-1">Eligibility & Forms</p>
            </button>

            <button 
              onClick={() => onNavigate('hierarchy')}
              className="bg-slate-800 border border-slate-600 p-4 rounded-2xl text-center hover:bg-slate-700 transition-all hover:border-purple-400 group"
            >
              <div className="flex justify-center mb-2"><Building className="text-purple-400" /></div>
              <h4 className="font-bold text-white">3. Hierarchy</h4>
              <p className="text-xs text-slate-400 mt-1">Pre-Review & Roles</p>
            </button>
          </div>

          <div className="flex justify-center"><ArrowDown className="text-slate-600" /></div>

          {/* Bottom Layer: Evaluation */}
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => onNavigate('evaluators')}
              className="bg-slate-800 border border-slate-600 p-3 rounded-xl text-center hover:bg-slate-700 transition-all hover:border-amber-400 group"
            >
              <div className="flex justify-center mb-1"><Users size={16} className="text-amber-400" /></div>
              <h4 className="font-bold text-white text-xs">4. Evaluation</h4>
            </button>
             <button 
              onClick={() => onNavigate('scoring')}
              className="bg-slate-800 border border-slate-600 p-3 rounded-xl text-center hover:bg-slate-700 transition-all hover:border-emerald-400 group"
            >
              <div className="flex justify-center mb-1"><BarChart3 size={16} className="text-emerald-400" /></div>
              <h4 className="font-bold text-white text-xs">5. Scoring</h4>
            </button>
             <button 
              onClick={() => onNavigate('appeals')}
              className="bg-slate-800 border border-slate-600 p-3 rounded-xl text-center hover:bg-slate-700 transition-all hover:border-rose-400 group"
            >
              <div className="flex justify-center mb-1"><Gavel size={16} className="text-rose-400" /></div>
              <h4 className="font-bold text-white text-xs">6. Appeals</h4>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2"><Activity size={14}/> Live System Metrics</h4>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-slate-900 p-2 rounded">
            <div className="text-indigo-400 font-bold text-lg">142</div>
            <div className="text-[10px] text-slate-500">Active Awards</div>
          </div>
          <div className="bg-slate-900 p-2 rounded">
            <div className="text-emerald-400 font-bold text-lg">8.4k</div>
            <div className="text-[10px] text-slate-500">Submissions</div>
          </div>
          <div className="bg-slate-900 p-2 rounded">
            <div className="text-amber-400 font-bold text-lg">98%</div>
            <div className="text-[10px] text-slate-500">Auto-Routed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. CONFIG WIZARD SIMULATOR
const SimConfig = () => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    hasSpecializations: false,
    isRecurring: false,
    visibility: "Public",
    criteriaCount: 0,
    criteriaWeightsValid: false,
    evaluationModel: "single",
  });

  const derived = useMemo(() => {
    // Force single committee when no specializations
    const effectiveEvaluationModel = config.hasSpecializations
      ? config.evaluationModel
      : "single";

    const hasCriteria = config.criteriaCount > 0;

    // Evaluation model must match specialization usage
    const isEvaluationCompatible =
      (config.hasSpecializations &&
        ["single", "per-specialization", "multi-level"].includes(
          effectiveEvaluationModel
        )) ||
      (!config.hasSpecializations && effectiveEvaluationModel === "single");

    // All requirements must be met for approval
    const isReadyForApproval =
      hasCriteria && config.criteriaWeightsValid && isEvaluationCompatible;

    return {
      effectiveEvaluationModel,
      hasCriteria,
      isEvaluationCompatible,
      isReadyForApproval,
    };
  }, [config]);

  const goToStep = (s) => {
    if (s < 1 || s > 7) return;
    setStep(s);
  };

  const stepLabels = [
    "Basic Info",
    "Eligibility",
    "Specializations",
    "Criteria",
    "Evaluation",
    "Lifecycle",
    "Review"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-2">
            <Settings className="text-white" size={28} />
            <h1 className="text-2xl font-bold text-white">Award Configuration Wizard</h1>
          </div>
          <p className="text-indigo-100 text-sm">
            Interactive simulator demonstrating the 7-step linear configuration flow from PRD-1
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-800">
  {/* Progress Stepper – slider */}
  <div className="overflow-x-auto -mx-2 px-2 mb-4">
    <div className="flex items-center gap-4 min-w-max snap-x snap-mandatory">
      {stepLabels.map((label, idx) => {
        const stepNum = idx + 1;
        const isActive = stepNum === step;
        const isComplete = stepNum < step;

        return (
          <button
            key={stepNum}
            onClick={() => goToStep(stepNum)}
            className="flex flex-col items-center gap-2 flex-shrink-0 snap-center"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all
                ${
                  isComplete
                    ? 'bg-green-500 text-white'
                    : isActive
                    ? 'bg-indigo-500 text-white ring-4 ring-indigo-500/30'
                    : 'bg-slate-700 text-slate-400'
                }`}
            >
              {isComplete ? '✓' : stepNum}
            </div>
            <span
              className={`text-xs font-medium text-center whitespace-nowrap
                ${
                  isActive
                    ? 'text-indigo-400'
                    : isComplete
                    ? 'text-green-400'
                    : 'text-slate-500'
                }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  </div>

  {/* thin line under slider */}
  <div className="h-px w-full bg-slate-800 mb-4" />

  {/* Navigation */}
  <div className="flex justify-between items-center pt-4 border-t border-slate-800">
    <button
      onClick={() => goToStep(step - 1)}
      className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      disabled={step === 1}
    >
      ← Previous
    </button>
    <span className="text-sm text-slate-400">Step {step} of 7</span>
    <button
      onClick={() => goToStep(step + 1)}
      className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      disabled={step === 7}
    >
      Next →
    </button>
  </div>
</div>


        {/* Configuration Controls */}
        <div className="space-y-4">
          {/* STEP 1: BASIC INFO */}
          <div className={`bg-slate-900 rounded-xl border-2 transition-all ${
            step === 1 ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-slate-800'
          }`}>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                  step === 1 ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  1
                </div>
                <h3 className="font-semibold text-lg text-slate-200">Basic Info</h3>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <span className="text-slate-300 font-medium">Recurring Award?</span>
                  <p className="text-xs text-slate-500 mt-1">
                    Recurring awards can clone templates from previous cycles
                  </p>
                </div>
                <button
                  onClick={() =>
                    setConfig({ ...config, isRecurring: !config.isRecurring })
                  }
                  className={`w-14 h-7 rounded-full relative transition-all ${
                    config.isRecurring ? "bg-green-500" : "bg-slate-600"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow-lg ${
                      config.isRecurring ? "left-8" : "left-1"
                    }`}
                  />
                </button>
              </div>

              {config.isRecurring && (
                <div className="text-sm text-green-400 bg-green-500/10 p-3 rounded-lg border border-green-500/30">
                  ✓ System will offer to clone configuration from previous cycle
                </div>
              )}
            </div>
          </div>

          {/* STEP 3: SPECIALIZATIONS */}
          <div className={`bg-slate-900 rounded-xl border-2 transition-all ${
            step === 3 ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-slate-800'
          }`}>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                  step === 3 ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  3
                </div>
                <h3 className="font-semibold text-lg text-slate-200">Specializations</h3>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <span className="text-slate-300 font-medium">Use Specializations?</span>
                  <p className="text-xs text-slate-500 mt-1">
                    Enable field-specific categories (e.g., Engineering, Medicine)
                  </p>
                </div>
                <button
                  onClick={() =>
                    setConfig({
                      ...config,
                      hasSpecializations: !config.hasSpecializations,
                    })
                  }
                  className={`w-14 h-7 rounded-full relative transition-all ${
                    config.hasSpecializations ? "bg-indigo-500" : "bg-slate-600"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow-lg ${
                      config.hasSpecializations ? "left-8" : "left-1"
                    }`}
                  />
                </button>
              </div>

              {config.hasSpecializations ? (
                <div className="text-sm text-indigo-300 bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/30">
                  <p className="font-medium mb-1">✓ Specializations Active</p>
                  <p className="text-xs text-indigo-400">
                    Step 5 can now use per-specialization committees or multi-level evaluation
                  </p>
                </div>
              ) : (
                <div className="text-sm text-slate-400 bg-slate-800 p-3 rounded-lg">
                  This step will be skipped. Single committee evaluation only.
                </div>
              )}
            </div>
          </div>

          {/* STEP 4: CRITERIA */}
          <div className={`bg-slate-900 rounded-xl border-2 transition-all ${
            step === 4 ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-slate-800'
          }`}>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                  step === 4 ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  4
                </div>
                <h3 className="font-semibold text-lg text-slate-200">Criteria & Scoring</h3>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <span className="text-slate-300 font-medium">Number of Criteria</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setConfig({
                        ...config,
                        criteriaCount: Math.max(0, config.criteriaCount - 1),
                      })
                    }
                    className="w-8 h-8 rounded-lg border border-slate-600 bg-slate-700 hover:bg-slate-600 text-slate-300 font-bold transition-all"
                  >
                    −
                  </button>
                  <span className="text-slate-100 font-bold text-lg w-8 text-center">
                    {config.criteriaCount}
                  </span>
                  <button
                    onClick={() =>
                      setConfig({
                        ...config,
                        criteriaCount: config.criteriaCount + 1,
                      })
                    }
                    className="w-8 h-8 rounded-lg border border-slate-600 bg-slate-700 hover:bg-slate-600 text-slate-300 font-bold transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <span className="text-slate-300 font-medium">Weights Total 100%?</span>
                  <p className="text-xs text-slate-500 mt-1">
                    All criteria weights must sum to exactly 100%
                  </p>
                </div>
                <button
                  onClick={() =>
                    setConfig({
                      ...config,
                      criteriaWeightsValid: !config.criteriaWeightsValid,
                    })
                  }
                  className={`w-14 h-7 rounded-full relative transition-all ${
                    config.criteriaWeightsValid ? "bg-emerald-500" : "bg-slate-600"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow-lg ${
                      config.criteriaWeightsValid ? "left-8" : "left-1"
                    }`}
                  />
                </button>
              </div>

              {!derived.hasCriteria && (
                <div className="text-sm text-amber-300 bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 flex items-start gap-2">
                  <AlertTriangle size={18} className="mt-0.5 flex-shrink-0" />
                  <p>At least one criterion required before approval</p>
                </div>
              )}

              {!config.criteriaWeightsValid && derived.hasCriteria && (
                <div className="text-sm text-amber-300 bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 flex items-start gap-2">
                  <AlertTriangle size={18} className="mt-0.5 flex-shrink-0" />
                  <p>Weights must total 100% before submission</p>
                </div>
              )}

              {derived.hasCriteria && config.criteriaWeightsValid && (
                <div className="text-sm text-emerald-300 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30 flex items-start gap-2">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
                  <p>✓ Criteria configuration valid</p>
                </div>
              )}
            </div>
          </div>

          {/* STEP 5: EVALUATION MODEL */}
          <div className={`bg-slate-900 rounded-xl border-2 transition-all ${
            step === 5 ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-slate-800'
          }`}>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                  step === 5 ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  5
                </div>
                <h3 className="font-semibold text-lg text-slate-200">Evaluation Model</h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: "single", label: "Single Committee", desc: "One committee for all" },
                  { key: "per-specialization", label: "Per Specialization", desc: "Committee per field" },
                  { key: "multi-level", label: "Multi-Level", desc: "University then Ministry" },
                ].map((opt) => {
                  const isForcedSingle =
                    !config.hasSpecializations && opt.key !== "single";
                  const isActive =
                    derived.effectiveEvaluationModel === opt.key &&
                    !isForcedSingle;

                  return (
                    <button
                      key={opt.key}
                      onClick={() =>
                        !isForcedSingle &&
                        setConfig({ ...config, evaluationModel: opt.key })
                      }
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        isActive
                          ? "bg-blue-600 border-blue-500 text-white"
                          : "bg-slate-800 border-slate-700 text-slate-300"
                      } ${
                        isForcedSingle
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:border-slate-600"
                      }`}
                    >
                      <div className="font-medium text-sm">{opt.label}</div>
                      <div className="text-xs mt-1 opacity-75">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 bg-slate-800 rounded-lg">
                <span className="text-slate-400 text-sm">Active Model: </span>
                <span className="font-semibold text-slate-100">
                  {derived.effectiveEvaluationModel === "single" && "Single Committee"}
                  {derived.effectiveEvaluationModel === "per-specialization" && "Per-Specialization"}
                  {derived.effectiveEvaluationModel === "multi-level" && "Multi-Level"}
                </span>
              </div>

              {!derived.isEvaluationCompatible && (
                <div className="text-sm text-amber-300 bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 flex items-start gap-2">
                  <AlertTriangle size={18} className="mt-0.5 flex-shrink-0" />
                  <p>
                    Configuration mismatch: evaluation model must align with specialization usage
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* STEP 6: LIFECYCLE */}
          <div className={`bg-slate-900 rounded-xl border-2 transition-all ${
            step === 6 ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-slate-800'
          }`}>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                  step === 6 ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  6
                </div>
                <h3 className="font-semibold text-lg text-slate-200">Lifecycle Settings</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["Public", "Private"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setConfig({ ...config, visibility: m })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      config.visibility === m
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    <div className="font-medium">{m}</div>
                    <div className="text-xs mt-1 opacity-75">
                      {m === "Public" ? "Visible to all users" : "Invite-only access"}
                    </div>
                  </button>
                ))}
              </div>

              {config.visibility === "Private" && (
                <div className="flex items-center gap-2 text-sm text-amber-400 bg-amber-500/10 p-3 rounded-lg border border-amber-500/30">
                  <Share2 size={16} />
                  <p>Unique invite link will be generated after approval</p>
                </div>
              )}
            </div>
          </div>

          {/* STEP 7: REVIEW & PUBLISH */}
          <div className={`bg-slate-900 rounded-xl border-2 transition-all ${
            step === 7 ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-slate-800'
          }`}>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                  step === 7 ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  7
                </div>
                <h3 className="font-semibold text-lg text-slate-200">Review & Submit</h3>
              </div>

              <div className="p-4 bg-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400 text-sm">Configuration Status:</span>
                  {derived.isReadyForApproval ? (
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500 font-medium">
                      <CheckCircle2 size={16} /> Ready for Approval
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500 font-medium">
                      <AlertTriangle size={16} /> Incomplete
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Criteria Count:</span>
                    <span className={config.criteriaCount > 0 ? "text-green-400" : "text-amber-400"}>
                      {config.criteriaCount} {config.criteriaCount === 0 && "(required > 0)"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Weights Valid:</span>
                    <span className={config.criteriaWeightsValid ? "text-green-400" : "text-amber-400"}>
                      {config.criteriaWeightsValid ? "Yes (100%)" : "No"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Specializations:</span>
                    <span className="text-slate-200">
                      {config.hasSpecializations ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Evaluation Model:</span>
                    <span className="text-slate-200 capitalize">
                      {derived.effectiveEvaluationModel.replace("-", " ")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400">Visibility:</span>
                    <span className="text-slate-200">{config.visibility}</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 bg-slate-800/50 p-3 rounded-lg">
                <strong>PRD-1 Requirement:</strong> Award transitions from Draft → Pending Approval
                only when all criteria are defined, weights total 100%, and evaluation structure
                matches specialization configuration.
              </div>

              {derived.isReadyForApproval && (
                <button className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg">
                  Submit for Approval
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-slate-500 pb-4">
          Simulating PRD-1 Configuration Wizard • 7-Step Linear Flow with Validation
        </div>
      </div>
    </div>
  );
};
// 3. SUBMISSION ENGINE SIMULATOR
const SimSubmission = () => {
  const [userType, setUserType] = useState('Student');
  const [gpa, setGpa] = useState(3.5);
  const [files, setFiles] = useState({ transcript: false, id: false });

  const isEligible = useMemo(() => {
    if (userType === 'Student' && gpa < 3.0) return false;
    return true;
  }, [userType, gpa]);

  return (
    <div className="p-4 space-y-6">
      <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-blue-500">
        <h3 className="text-white font-bold mb-1">Dynamic Form Preview</h3>
        <p className="text-slate-400 text-xs">Simulates how PRD-2 eligibility rules block/allow submissions in real-time.</p>
      </div>

      {/* Simulator Inputs */}
      <div className="space-y-4">
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-700">
          <label className="text-xs text-slate-500 uppercase font-bold">1. Applicant Persona</label>
          <select 
            value={userType} 
            onChange={(e) => setUserType(e.target.value)}
            className="w-full mt-2 bg-slate-800 text-white text-sm p-2 rounded border border-slate-600"
          >
            <option>Student</option>
            <option>Faculty</option>
            <option>External Researcher</option>
          </select>
        </div>

        {userType === 'Student' && (
          <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 animate-fade-in">
            <label className="text-xs text-slate-500 uppercase font-bold">2. Academic Performance (GPA)</label>
            <div className="flex items-center gap-4 mt-2">
              <input 
                type="range" min="1.0" max="4.0" step="0.1" 
                value={gpa} onChange={(e) => setGpa(parseFloat(e.target.value))}
                className="flex-1 accent-blue-500"
              />
              <span className={`font-mono font-bold ${gpa < 3.0 ? 'text-red-400' : 'text-green-400'}`}>{gpa}</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1">Min required: 3.0</p>
          </div>
        )}

        <div className="bg-slate-900 p-3 rounded-xl border border-slate-700">
          <label className="text-xs text-slate-500 uppercase font-bold">3. Required Documents</label>
          <div className="flex gap-2 mt-2">
            <button 
              onClick={() => setFiles({...files, transcript: !files.transcript})}
              className={`flex-1 py-2 text-xs rounded border flex items-center justify-center gap-2 ${files.transcript ? 'bg-blue-600/20 border-blue-500 text-blue-400' : 'bg-slate-800 border-slate-600 text-slate-500'}`}
            >
              {files.transcript ? <CheckCircle size={12}/> : <div className="w-3 h-3 rounded-full border border-slate-500"/>} Transcript
            </button>
            <button 
              onClick={() => setFiles({...files, id: !files.id})}
              className={`flex-1 py-2 text-xs rounded border flex items-center justify-center gap-2 ${files.id ? 'bg-blue-600/20 border-blue-500 text-blue-400' : 'bg-slate-800 border-slate-600 text-slate-500'}`}
            >
              {files.id ? <CheckCircle size={12}/> : <div className="w-3 h-3 rounded-full border border-slate-500"/>} ID Card
            </button>
          </div>
        </div>
      </div>

      {/* Validation Result */}
      <div className={`p-4 rounded-xl border ${isEligible && files.transcript && files.id ? 'bg-green-500/10 border-green-500/50' : 'bg-red-500/10 border-red-500/50'}`}>
        <h4 className={`font-bold text-sm ${isEligible && files.transcript && files.id ? 'text-green-400' : 'text-red-400'}`}>
          {isEligible && files.transcript && files.id ? 'Eligible to Submit' : 'Submission Blocked'}
        </h4>
        <ul className="mt-2 space-y-1">
          {!isEligible && <li className="text-xs text-red-400 flex items-center gap-2"><X size={10}/> GPA below threshold (3.0)</li>}
          {(!files.transcript || !files.id) && <li className="text-xs text-red-400 flex items-center gap-2"><X size={10}/> Missing documents</li>}
          {isEligible && files.transcript && files.id && <li className="text-xs text-green-400 flex items-center gap-2"><CheckCircle size={10}/> All rules passed</li>}
        </ul>
      </div>
    </div>
  );
};

// 4. HIERARCHY SIMULATOR
const SimHierarchy = () => {
  const [role, setRole] = useState('Applicant');
   
  const permissions = {
    'Applicant': { view: 'Own Submissions', edit: 'Drafts Only', route: 'None' },
    'Pre-Reviewer': { view: 'University Submissions', edit: 'None', route: 'Approve/Return' },
    'Evaluator': { view: 'Assigned Only', edit: 'None', route: 'Score' },
    'Directorate Admin': { view: 'All Award Submissions', edit: 'Config Only', route: 'Manage Committees' }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-purple-500">
        <h3 className="text-white font-bold mb-1">Role & Permission Matrix</h3>
        <p className="text-slate-400 text-xs">Switch roles to see how PRD-3 alters visibility and actions.</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {Object.keys(permissions).map(r => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`p-3 rounded-lg border text-xs font-semibold text-left transition-all ${role === r ? 'bg-purple-600 border-purple-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 rounded-xl p-5 border border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] text-slate-500">Permission Context</div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg"><ShieldCheck className="text-purple-400" size={20} /></div>
          <div>
            <h4 className="text-white font-bold">{role}</h4>
            <p className="text-xs text-slate-500">Current active session</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-slate-400 text-xs">Visibility Scope</span>
            <span className="text-white text-xs font-mono bg-slate-800 px-2 py-1 rounded">{permissions[role].view}</span>
          </div>
           <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-slate-400 text-xs">Edit Rights</span>
            <span className="text-white text-xs font-mono bg-slate-800 px-2 py-1 rounded">{permissions[role].edit}</span>
          </div>
           <div className="flex justify-between items-center">
            <span className="text-slate-400 text-xs">Routing Action</span>
            <span className="text-emerald-400 text-xs font-mono bg-emerald-900/20 px-2 py-1 rounded">{permissions[role].route}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. EVALUATORS SIMULATOR
const SimEvaluators = () => {
  const [model, setModel] = useState('Single');
   
  return (
    <div className="p-4 space-y-6">
       <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-amber-500">
        <h3 className="text-white font-bold mb-1">Routing Logic Visualizer</h3>
        <p className="text-slate-400 text-xs">PRD-4 defines how submissions flow to committees based on award model.</p>
      </div>

      <div className="flex gap-2">
        {['Single', 'Specialization', 'Multi-Level'].map(m => (
          <button
            key={m}
            onClick={() => setModel(m)}
            className={`flex-1 py-2 text-[10px] font-bold uppercase rounded border ${model === m ? 'bg-amber-600 border-amber-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 relative min-h-[200px] flex flex-col items-center justify-center gap-4">
        {/* Source */}
        <div className="bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold shadow-lg z-10">Submission</div>
        
        {/* Arrows & Logic */}
        <ArrowDown size={20} className="text-slate-600" />
        
        {model === 'Specialization' && (
           <div className="bg-indigo-900 text-indigo-200 px-3 py-1 rounded border border-indigo-700 text-[10px] animate-fade-in">
             Detect Specialization (e.g. Engineering)
           </div>
        )}
        
        {model === 'Multi-Level' && (
           <div className="bg-purple-900 text-purple-200 px-3 py-1 rounded border border-purple-700 text-[10px] animate-fade-in">
             Stage 1: University Committee
           </div>
        )}

        {/* Destination */}
        <div className="flex gap-4">
          {model === 'Single' && (
             <div className="bg-amber-500 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-amber-500/20">Main Committee</div>
          )}
          {model === 'Specialization' && (
            <>
              <div className="bg-amber-500/50 text-white px-3 py-2 rounded-lg text-xs border border-amber-500">Medical Comm.</div>
              <div className="bg-amber-500 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-lg shadow-amber-500/20 border border-white">Eng. Comm.</div>
            </>
          )}
          {model === 'Multi-Level' && (
             <div className="flex flex-col items-center gap-2">
                <ArrowDown size={14} className="text-slate-600" />
                <div className="bg-amber-500 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-amber-500/20">Ministry Committee</div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 6. SCORING SIMULATOR
const SimScoring = () => {
  const [scores, setScores] = useState({ c1: 8, c2: 75 });
   
  const total = useMemo(() => {
    // Logic: C1 (0-10) is 40%, C2 (0-100) is 60%
    const s1 = (scores.c1 / 10) * 40;
    const s2 = (scores.c2 / 100) * 60;
    return (s1 + s2).toFixed(1);
  }, [scores]);

  return (
    <div className="p-4 space-y-6">
       <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-emerald-500">
        <h3 className="text-white font-bold mb-1">Scoring Engine Calculator</h3>
        <p className="text-slate-400 text-xs">PRD-5 defines weighting and normalization.</p>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
          <div className="flex justify-between mb-2">
            <label className="text-xs text-slate-400">Criterion 1: Innovation (0-10)</label>
            <span className="text-xs text-emerald-400 font-mono">Weight: 40%</span>
          </div>
          <input 
            type="range" min="0" max="10" 
            value={scores.c1} onChange={(e) => setScores({...scores, c1: parseInt(e.target.value)})}
            className="w-full accent-emerald-500"
          />
          <div className="text-right text-white font-bold">{scores.c1}</div>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
          <div className="flex justify-between mb-2">
            <label className="text-xs text-slate-400">Criterion 2: Impact (0-100)</label>
            <span className="text-xs text-emerald-400 font-mono">Weight: 60%</span>
          </div>
          <input 
            type="range" min="0" max="100" 
            value={scores.c2} onChange={(e) => setScores({...scores, c2: parseInt(e.target.value)})}
            className="w-full accent-emerald-500"
          />
          <div className="text-right text-white font-bold">{scores.c2}</div>
        </div>
      </div>

      <div className="bg-emerald-900/30 border border-emerald-500/30 p-4 rounded-xl text-center">
        <p className="text-xs text-emerald-200 uppercase tracking-widest mb-1">Final Weighted Score</p>
        <div className="text-4xl font-black text-white">{total}%</div>
      </div>
    </div>
  );
};

// 7. APPEALS SIMULATOR
const SimAppeals = () => {
  const [status, setStatus] = useState('Open');
  const [decision, setDecision] = useState(null);

  const steps = [
    { s: 'Open', label: 'Appeal Submitted' },
    { s: 'Review', label: 'Admin Review' },
    { s: 'Closed', label: 'Final Decision' }
  ];

  return (
    <div className="p-4 space-y-6">
       <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-rose-500">
        <h3 className="text-white font-bold mb-1">Appeal Lifecycle</h3>
        <p className="text-slate-400 text-xs">PRD-6: Corrections trigger re-scoring and audit logs.</p>
      </div>

      <div className="flex justify-between items-center relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -z-10" />
        {steps.map((st, i) => (
          <div key={i} className={`flex flex-col items-center gap-2 bg-slate-900 px-2`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${status === st.s || (status === 'Review' && i === 0) || (status === 'Closed' && i <= 2) ? 'bg-rose-500 text-white' : 'bg-slate-700 text-slate-500'}`}>
              {i + 1}
            </div>
            <span className="text-[10px] text-slate-400">{st.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 min-h-[160px] flex flex-col justify-center">
        {status === 'Open' && (
          <div className="text-center animate-fade-in">
            <p className="text-slate-300 text-sm mb-4">Applicant claims score error in Criterion 1.</p>
            <button 
              onClick={() => setStatus('Review')}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
            >
              Start Review
            </button>
          </div>
        )}
        
        {status === 'Review' && (
          <div className="text-center animate-fade-in space-y-3">
            <p className="text-slate-300 text-sm">Reviewing evidence...</p>
            <div className="flex justify-center gap-2">
              <button 
                onClick={() => { setDecision('Approved'); setStatus('Closed'); }}
                className="bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded text-xs font-semibold"
              >
                Approve & Correct
              </button>
              <button 
                onClick={() => { setDecision('Rejected'); setStatus('Closed'); }}
                className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded text-xs font-semibold"
              >
                Reject
              </button>
            </div>
          </div>
        )}

        {status === 'Closed' && (
          <div className="text-center animate-fade-in">
             <div className={`inline-block p-3 rounded-full mb-2 ${decision === 'Approved' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
               {decision === 'Approved' ? <CheckCircle /> : <X />}
             </div>
             <h4 className="text-white font-bold">Appeal {decision}</h4>
             {decision === 'Approved' && <p className="text-xs text-slate-400 mt-1">Audit Log: Score updated. Rank regenerated.</p>}
             <button onClick={() => { setStatus('Open'); setDecision(null); }} className="mt-4 text-[10px] text-slate-500 underline">Reset Simulation</button>
          </div>
        )}
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT ---

export default function UAPDocumentationApp() {
  const [activePage, setActivePage] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDocs, setShowDocs] = useState(true);
  const [showSim, setShowSim] = useState(true);

  // Content Mapping
  const renderContent = () => {
    switch(activePage) {
      case 'overview':
        return (
          <>
            <DocSection title="System Vision" icon={<Globe2 />}>
            <div className="mb-8">
            <img 
              src="/overview.png" 
              alt="Multi-tenant Gamification Service Architecture Diagram showing the central hub, connected platforms, and data flow." 
              className="w-full h-auto rounded-lg shadow-xl border border-gray-200"
            />
          </div>
              <p>The <strong>Unified Awarding Platform (UAP)</strong> is a centralized digital ecosystem designed to replace fragmented legacy systems. It enables ministries to manage the complete lifecycle of national and institutional awards—from configuration to appeals—without needing new code for every award.</p>
              <p>It solves the problem of rigid, hard-coded systems by introducing a highly configurable engine that supports competitions, research grants, and excellence awards through a single interface.</p>
            </DocSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
               <FeatureCard title="Configurable" desc="Create awards without IT support" icon={<Settings size={20}/>} />
               <FeatureCard title=" unified" desc="Single identity for all users" icon={<User size={20}/>} />
               <FeatureCard title="Auditable" desc="Full traceability of scores" icon={<ShieldCheck size={20}/>} />
               <FeatureCard title="Hierarchical" desc="Respects ministry structure" icon={<Layers size={20}/>} />
            </div>
          </>
        );
        case 'config':
          return (
            <>
              <DocSection title="PRD-1: Award Configuration Wizard" icon={<Settings />}>
                <div className="space-y-8">
                  {/* HERO / EXECUTIVE SUMMARY */}
                  <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-600 text-white p-6 shadow-2xl shadow-indigo-200/50">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-2 max-w-2xl">
                          <p className="text-[11px] uppercase tracking-[0.4em] text-white/70 flex items-center gap-2">
                            <span className="flex items-center gap-1">
                              <Settings size={16} />
                              PRD-1 • Configuration Wizard
                            </span>
                          </p>
                          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            One Wizard to Configure Every Award Safely
                          </h2>
                          <p className="text-sm md:text-base text-indigo-100">
                            The <strong>Award Configuration Wizard</strong> is a guided,
                            end-to-end flow that lets ministry and directorate admins configure
                            complex awards in a single place—without manuals, scattered settings,
                            or risky shortcuts.
                          </p>
                        </div>
        
                        <div className="flex flex-wrap gap-3 justify-end min-w-[220px]">
                          <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                              Wizard Steps
                            </p>
                            <p className="text-2xl font-bold mt-1">7</p>
                            <p className="text-[11px] text-white/70 mt-1">
                              From idea → ready to launch
                            </p>
                          </div>
                          <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                              Target Users
                            </p>
                            <p className="text-sm font-semibold mt-1">Ministry & Directorates</p>
                            <p className="text-[11px] text-white/70 mt-1">
                              Safe, guided configuration
                            </p>
                          </div>
                        </div>
                      </div>
        
                      <div className="flex flex-wrap gap-2 text-[11px]">
                        <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                          Linear, validated flow
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                          Drafts & autosave
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                          Approval lifecycle
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                          Audit-ready configuration
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
            <img 
              src="/award-config.png" 
              alt="Multi-tenant Gamification Service Architecture Diagram showing the central hub, connected platforms, and data flow." 
              className="w-full h-auto rounded-lg shadow-xl border border-gray-200"
            />
          </div>
        
                  {/* SCOPE / PROBLEM / KPIs / STAKEHOLDERS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        Scope & Vision
                      </p>
                      <p className="text-sm text-slate-700 mt-2">
                        Deliver a single, user-friendly wizard that captures every award field,
                        rule, and setting from one place. Admins move from idea to
                        <span className="font-semibold"> “ready for launch”</span> in one guided flow.
                      </p>
                    </div>
        
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        Problem Addressed
                      </p>
                      <p className="text-sm text-slate-700 mt-2">
                        Today, admins jump between multiple screens; dependencies are unclear,
                        critical fields get missed, and they depend heavily on support.
                        The wizard fixes this with a <span className="font-semibold">strict, linear,
                        validated path</span>.
                      </p>
                    </div>
        
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        Success Metrics / KPIs
                      </p>
                      <ul className="mt-2 text-sm text-slate-700 space-y-1">
                        <li>⬇ Reduced configuration time per award.</li>
                        <li>⬇ Fewer misconfigured awards and support tickets.</li>
                        <li>⬆ Higher completion rate of award setup.</li>
                        <li>⬆ Better consistency across cycles and directorates.</li>
                      </ul>
                    </div>
        
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        Stakeholders & Approvals
                      </p>
                      <ul className="mt-2 text-sm text-slate-700 space-y-1">
                        <li>
                          <span className="font-semibold">Ministry super admins:</span> define standards and templates.
                        </li>
                        <li>
                          <span className="font-semibold">Directorate / award admins:</span> configure specific awards.
                        </li>
                        <li>
                          <span className="font-semibold">Approvers:</span> validate configuration before
                          moving to <em>Approved / Active</em>.
                        </li>
                      </ul>
                    </div>
                  </div>
        
                  {/* PERSONAS & JOURNEYS / WIZARD OVERVIEW */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        Personas & User Journeys
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-slate-700">
                        <li>
                          <strong>Primary persona:</strong> Directorate / Ministry Award Admin who needs a
                          safe, guided way to configure complex rules.
                        </li>
                        <li>
                          <strong>Secondary personas:</strong> Ministry super admins (governance & audits),
                          technical operations (support), and reporting users.
                        </li>
                        <li>
                          <strong>Key journey:</strong> Admin clicks “Create New Award”, walks through
                          7 guided steps, fixes inline validation, saves drafts, and finally submits
                          for approval.
                        </li>
                        <li>
                          <strong>Identity & Access:</strong> Only authorized roles can access the wizard;
                          permissions follow the ministry / directorate / institution hierarchy and
                          view/edit boundaries.
                        </li>
                      </ul>
                    </div>
        
                    <div className="bg-slate-900 rounded-2xl border border-slate-800 text-slate-100 p-5">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                        Wizard Overview
                      </p>
                      <ul className="mt-3 text-sm space-y-2">
                        <li>
                          <span className="font-semibold">Linear 7-step flow:</span> cannot skip required
                          steps; each step has inline help and validation.
                        </li>
                        <li>
                          <span className="font-semibold">Drafts & autosave:</span> awards can be saved as
                          draft at any time; admins can return, continue, or clone from an existing award.
                        </li>
                        <li>
                          <span className="font-semibold">Status lifecycle:</span>{' '}
                          <code className="font-mono text-xs bg-slate-800 px-2 py-1 rounded">
                            Draft → Submitted for Approval → Approved → Active / Archived
                          </code>
                          . Only approved awards can open submissions.
                        </li>
                        <li>
                          <span className="font-semibold">Cross-step validation:</span> e.g. criteria weights
                          must total 100%, evaluation model must match committees, and dates must be coherent.
                        </li>
                      </ul>
                    </div>
                  </div>
        
                  {/* 7-STEP CONFIGURATION FLOW AS A TIMELINE */}
                  <div className="space-y-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      7-Step Configuration Flow
                    </p>
        
                    <div className="relative pl-6 space-y-4">
                      {/* Vertical line */}
                      <div className="absolute left-[7px] top-0 bottom-0 w-px bg-slate-200" />
        
                      {/* STEP 1 */}
                      <div className="relative">
                        <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                            Step 1 – Basic Info
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                            <li>Award name (Arabic/English), description, icon/logo, display tags.</li>
                            <li>Award type (student, research, faculty, institutional, …) and cycle year.</li>
                            <li>Owning directorate / ministry unit, supported languages, recurring vs one-off.</li>
                            <li>High-level visibility: internal-only or open to external applicants.</li>
                          </ul>
                        </div>
                      </div>
        
                      {/* STEP 2 */}
                      <div className="relative">
                        <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                            Step 2 – Eligibility Rules (Eligibility Builder)
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                            <li>Applicant types (student, graduate, postgraduate, faculty, researcher, external).</li>
                            <li>Academic levels (undergraduate, bachelor’s, higher diploma, master’s, PhD).</li>
                            <li>Affiliation rules (specific university, any university, or no affiliation).</li>
                            <li>GPA / percentage / rank thresholds, graduation year ranges, age rules.</li>
                            <li>Required eligibility documents (transcripts, recommendations, ID, …).</li>
                            <li>Logical combinations (AND / OR) for nuanced eligibility.</li>
                          </ul>
                        </div>
                      </div>
        
                      {/* STEP 3 */}
                      <div className="relative">
                        <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                            Step 3 – Specializations & Target Groups
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                            <li>Optional tree of fields/specializations (UNESCO lists or ministry catalogues).</li>
                            <li>Define allowed specializations and whether they share or split winner pools.</li>
                            <li>Set per-specialization quotas, limits, or category-specific rules.</li>
                            <li>Ensure evaluation structures later map correctly to these specializations.</li>
                          </ul>
                        </div>
                      </div>
        
                      {/* STEP 4 */}
                      <div className="relative">
                        <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                            Step 4 – Criteria & Scoring Setup
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                            <li>Define evaluation criteria, grouped into sections (Merit, Impact, Innovation, …).</li>
                            <li>Assign weights; total must equal 100% with inline validation.</li>
                            <li>
                              Criterion types: numeric, boolean, option-based, ranking, file-based, textual justification.
                            </li>
                            <li>Flags for normalization, mandatory/optional, and report visibility.</li>
                            <li>Preview of how criteria appear in the evaluator scoring UI.</li>
                          </ul>
                        </div>
                      </div>
        
                      {/* STEP 5 */}
                      <div className="relative">
                        <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                            Step 5 – Evaluation Structure (Committees & Flows)
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                            <li>
                              Choose model: single committee, per-specialization committees, or multi-level flows
                              (e.g., university → ministry).
                            </li>
                            <li>Map specializations to committees; enforce expertise coverage.</li>
                            <li>Configure number of evaluators per submission, conflicts of interest rules.</li>
                            <li>Define aggregation model (average, median, custom rule) and deadlines.</li>
                          </ul>
                        </div>
                      </div>
        
                      {/* STEP 6 */}
                      <div className="relative">
                        <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                            Step 6 – Submission Lifecycle Settings
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                            <li>Submission window (start/end dates, time zone, optional grace periods).</li>
                            <li>Rules for editing after submission and up to which stage.</li>
                            <li>Enable/disable pre-review at university/college/department level.</li>
                            <li>Handling of “Needs Verification” and automated status transitions.</li>
                            <li>Visibility rules (public vs restricted; who can see award page and form).</li>
                          </ul>
                        </div>
                      </div>
        
                      {/* STEP 7 */}
                      <div className="relative">
                        <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                            Step 7 – Review & Publish
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                            <li>Read-only summary of all configuration choices across the 7 steps.</li>
                            <li>Inline warnings for missing/inconsistent data (weights, mappings, dates, …).</li>
                            <li>Jump back to any step to fix issues before submission.</li>
                            <li>
                              Submit configuration for approval; award moves to{' '}
                              <span className="font-semibold">Pending Approval</span> and becomes locked
                              except for authorized roles.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* NON-FUNCTIONAL + UX NOTES */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        Non-Functional Requirements
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-slate-700">
                        <li>
                          <strong>Usability:</strong> Clear labeling, inline help/tooltips, mobile-friendly layout,
                          full RTL/LTR support, and guardrails to prevent misconfiguration.
                        </li>
                        <li>
                          <strong>Reliability & Performance:</strong> Draft autosave, resilience to network
                          interruptions, responsive even with many criteria/specializations.
                        </li>
                        <li>
                          <strong>Security & Auditability:</strong> Role-based access, and all changes logged
                          with who/when/what (creation, edits, approvals, status changes).
                        </li>
                        <li>
                          <strong>Extensibility:</strong> New award types, criteria types, and eligibility rules
                          are addable without breaking existing awards or requiring core rewrites.
                        </li>
                      </ul>
                    </div>
        
                    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        Visual Flow & UX Notes
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-slate-700">
                        <li>Top stepper shows all 7 steps, current step, and completion state.</li>
                        <li>Each step groups related fields into compact sections to reduce cognitive load.</li>
                        <li>Global “Save draft” and “Cancel” actions are always visible.</li>
                        <li>
                          Error states are shown inline next to fields, with a summary panel to jump directly
                          to blocking issues.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </DocSection>
            </>
          );
        
      case 'submission':
        return (
          <>
            {/* HERO / EXECUTIVE SUMMARY */}
            <DocSection title="PRD-2: Submission Engine & Eligibility" icon={<FileText />}>
              <div className="space-y-8">
                <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-600 text-white p-6 shadow-2xl shadow-indigo-200/50">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2 max-w-2xl">
                        <p className="text-[11px] uppercase tracking-[0.4em] text-white/70 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <FileText size={16} />
                            PRD-2 • Submission Engine
                          </span>
                        </p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                          From Draft to Submitted — Safely, For Every Applicant
                        </h2>
                        <p className="text-sm md:text-base text-indigo-100">
                          The <strong>Submission Engine</strong> turns PRD-1 configuration into a live,
                          dynamic application flow. It generates award-specific forms, enforces
                          <strong> eligibility rules in real time</strong>, and manages state transitions
                          from <em>Draft</em> → <em>Submitted</em> in a controlled, auditable way.
                        </p>
                      </div>
      
                      <div className="flex flex-wrap gap-3 justify-end min-w-[220px]">
                        <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                            Core States
                          </p>
                          <p className="text-2xl font-bold mt-1">4</p>
                          <p className="text-[11px] text-white/70 mt-1">
                            Draft, Needs Fix, Submitted, Withdrawn
                          </p>
                        </div>
                        <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                            Guardrails
                          </p>
                          <p className="text-sm font-semibold mt-1">Eligibility + Deadlines</p>
                          <p className="text-[11px] text-white/70 mt-1">
                            Block invalid or late submissions
                          </p>
                        </div>
                      </div>
                    </div>
      
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      {[
                        'Dynamic, config-driven forms',
                        'Real-time eligibility checks',
                        'Drafts & autosave',
                        'Pre-review & routing',
                      ].map((chip, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-white/15 border border-white/25"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
            <img 
              src="/submission-engine.png" 
              alt="Multi-tenant Gamification Service Architecture Diagram showing the central hub, connected platforms, and data flow." 
              className="w-full h-auto rounded-lg shadow-xl border border-gray-200"
            />
          </div>
      
                {/* HIGH-LEVEL SYSTEM VIEW */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'Config → Runtime',
                      icon: <Activity size={18} />,
                      desc: 'PRD-1 award config is compiled into a runtime schema that drives fields, rules, and validation.',
                    },
                    {
                      title: 'Eligibility Engine',
                      icon: <Shield size={18} />,
                      desc: 'Central engine evaluates GPA, level, affiliation, dates, and custom rules before allowing submission.',
                    },
                    {
                      title: 'Submission Graph',
                      icon: <Network size={18} />,
                      desc: 'Tracks state across draft, submitted, pre-review, and withdrawal with full audit history.',
                    },
                  ].map((card, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex gap-3"
                    >
                      <div className="mt-1 text-indigo-500">{card.icon}</div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{card.title}</p>
                        <p className="text-xs text-slate-600 mt-1">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DocSection>
      
            {/* KEY CAPABILITIES */}
            <DocSection title="Key Capabilities" icon={<CheckCircle />}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  {[
                    {
                      title: 'Dynamic, Award-Specific Forms',
                      body: 'Form fields, sections, and help text are generated from PRD-1 configuration (eligibility builder, criteria, lifecycle). Only relevant fields are shown per award.',
                    },
                    {
                      title: 'Real-Time Eligibility Enforcement',
                      body: 'As applicants fill fields (GPA, graduation year, affiliation, etc.), the engine validates against configured rules and blocks clearly ineligible profiles before submission.',
                    },
                    {
                      title: 'Drafts, Autosave & Resume Later',
                      body: 'Applicants can save partial data, come back later from any device, and resume where they left off without losing state.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex gap-3"
                    >
                      <div className="mt-1">
                        <ArrowRight size={16} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="text-slate-600 text-xs mt-1">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
      
                <div className="space-y-3">
                  {[
                    {
                      title: 'Pre-Review & Routing',
                      body: 'Optionally send submissions to university/college/department reviewers for verification before they reach evaluation committees.',
                    },
                    {
                      title: 'Deadline & Window Enforcement',
                      body: 'Submission windows are enforced down to the minute, with optional grace periods, preventing late submissions from entering the main competition.',
                    },
                    {
                      title: 'Multi-Award, Multi-Cycle Safety',
                      body: 'Applicants see clearly which awards they can apply to, avoid duplicate submissions, and cannot bypass configured per-cycle limits.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-slate-900 rounded-2xl border border-slate-800 text-slate-100 p-4 flex gap-3"
                    >
                      <div className="mt-1">
                        <ArrowRight size={16} className="text-indigo-300" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-xs text-slate-300 mt-1">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DocSection>
      
            {/* STATES & LIFECYCLE */}
            <DocSection title="Submission States & Lifecycle" icon={<Activity />}>
              <div className="space-y-4 text-sm">
                <p className="text-slate-700">
                  Each application moves through a controlled state machine. Transitions are driven by
                  applicant actions, pre-review decisions, and hard deadlines configured in PRD-1.
                </p>
      
                <div className="relative pl-6 space-y-3">
                  <div className="absolute left-[7px] top-0 bottom-0 w-px bg-slate-200" />
      
                  {[
                    {
                      label: 'Draft',
                      desc: 'Applicant can edit all fields, upload files, and see eligibility hints. No evaluator can see it yet.',
                    },
                    {
                      label: 'Needs Fix / Incomplete',
                      desc: 'Pre-review detects missing documents or mismatches. Applicant receives a checklist of required fixes and can resubmit before the deadline.',
                    },
                    {
                      label: 'Submitted',
                      desc: 'All blocking checks passed (eligibility, required documents, window). Application is locked for editing and becomes visible to evaluation stages.',
                    },
                    {
                      label: 'Withdrawn / Canceled',
                      desc: 'Applicant (or system) withdraws submission. Record stays in history but is excluded from scoring.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-2 text-slate-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DocSection>
      
            {/* NON-FUNCTIONAL / GUARANTEES */}
            <DocSection title="Non-Functional Guarantees & Guardrails" icon={<Shield />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Reliability & Integrity
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    {[
                      'Autosave protects applicants from losing work during connectivity issues.',
                      'All submissions carry a stable submissionId for audit and downstream systems.',
                      'State transitions are append-only and logged with who/when/what.',
                    ].map((li, index) => (
                      <li key={index}>{li}</li>
                    ))}
                  </ul>
                </div>
      
                <div className="bg-white rounded-2xl border border-slate-100 p-5 space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Experience & Compliance
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    {[
                      'Clear, localized error messages explain exactly why a submission is blocked.',
                      'Eligibility rules are transparent: applicants see which conditions they failed.',
                      'Full RTL/LTR and accessibility support (labels, focus states, keyboard navigation).',
                    ].map((li, index) => (
                      <li key={index}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DocSection>
          </>
        );
        
      case 'hierarchy':
        return (
          <>
          {/* PRD-3 HERO / EXEC SUMMARY */}
          <DocSection title="PRD-3: Hierarchy & User Role Management" icon={<Network />}>
            <div className="space-y-8">
              {/* Hero */}
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-700 to-sky-700 text-white p-6 shadow-2xl shadow-indigo-200/40">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2 max-w-2xl">
                      <p className="text-[11px] uppercase tracking-[0.4em] text-white/70 flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <Network size={16} />
                          PRD-3 • Hierarchy & Roles
                        </span>
                      </p>
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                        One Hierarchy to Control Access, Routing & Visibility
                      </h2>
                      <p className="text-sm md:text-base text-indigo-100">
                        PRD-3 defines the <strong>organizational hierarchy, user roles, visibility rules,
                        and routing logic</strong> that govern everything in the Unified Awarding Platform
                        (UAP): who can see what, who can edit, and where submissions are routed.
                      </p>
                    </div>
        
                    <div className="flex flex-wrap gap-3 justify-end min-w-[220px]">
                      <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                          Hierarchy Levels
                        </p>
                        <p className="text-2xl font-bold mt-1">4</p>
                        <p className="text-[11px] text-white/70 mt-1">
                          Ministry → Directorate → University → Sub-unit
                        </p>
                      </div>
                      <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                          Core Dimension
                        </p>
                        <p className="text-sm font-semibold mt-1">Roles & Access</p>
                        <p className="text-[11px] text-white/70 mt-1">
                          Visibility • Routing • Edit rights
                        </p>
                      </div>
                    </div>
                  </div>
        
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                      Single UAP hierarchy model
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                      Role-based access control
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                      Award & submission visibility rules
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                      Pre-review & evaluation routing
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-8">
            <img 
              src="/hierarchy.png" 
              alt="Multi-tenant Gamification Service Architecture Diagram showing the central hub, connected platforms, and data flow." 
              className="w-full h-auto rounded-lg shadow-xl border border-gray-200"
            />
          </div>
        
              {/* Scope / Problem / KPIs / Stakeholders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Product Scope & Vision
                  </p>
                  <p className="text-sm text-slate-700 mt-2">
                    Define a <strong>unified, consistent framework</strong> for hierarchy, roles,
                    permissions and routing. UAP should always know which node a user belongs to,
                    what they can see, and which path each submission should follow.
                  </p>
                </div>
        
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Problem Statement
                  </p>
                  <p className="text-sm text-slate-700 mt-2">
                    Previous systems had <strong>ambiguous roles and inconsistent visibility</strong>.
                    Awards and submissions could be accessed by the wrong actors, and routing between
                    directorates, universities and evaluators was not standardized.
                  </p>
                </div>
        
                <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Success Metrics / KPIs
                  </p>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    <li>✅ 0 unauthorized access incidents.</li>
                    <li>✅ 100% correct pre-review & evaluation routing based on hierarchy.</li>
                    <li>✅ 50% reduction in role/access related support tickets.</li>
                    <li>✅ Full audit trail for all hierarchy and role changes.</li>
                  </ul>
                </div>
        
                <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Stakeholder Map
                  </p>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    <li>
                      <span className="font-semibold">Ministry Super Admin:</span> Owns hierarchy and role
                      framework; approves structural changes.
                    </li>
                    <li>
                      <span className="font-semibold">Directorate Admins:</span> Manage awards, committees
                      and evaluators within their directorate.
                    </li>
                    <li>
                      <span className="font-semibold">Universities / Sub-units:</span> Perform pre-review
                      and institutional oversight on their own submissions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </DocSection>
        
          {/* Personas & Journeys */}
          <DocSection title="Personas & Access Journeys" icon={<User />}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                  Key Personas
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-slate-700">
                  <li>
                    <strong>Ministry Super Admin:</strong> Maintains the full hierarchy and assigns roles
                    across all directorates and institutions.
                  </li>
                  <li>
                    <strong>Directorate Admin:</strong> Manages awards, committees and evaluator accounts
                    within a single directorate.
                  </li>
                  <li>
                    <strong>Award Creator / Approver:</strong> Configure awards and approve configurations,
                    but do not change hierarchy.
                  </li>
                  <li>
                    <strong>Pre-Reviewer / Verification Admin:</strong> Handle institutional pre-review and
                    ministry-level verification.
                  </li>
                  <li>
                    <strong>Committee Member / Evaluator:</strong> Score only the submissions assigned to
                    them.
                  </li>
                  <li>
                    <strong>Applicant:</strong> Creates and tracks their own applications.
                  </li>
                </ul>
              </div>
        
              <div className="bg-slate-900 rounded-2xl border border-slate-800 text-slate-100 p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  Access Journeys
                </p>
                <div className="mt-3 space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-slate-50 mb-1">Journey A – Pre-Review Routing</p>
                    <p className="text-slate-300 text-xs">
                      Applicant submits → UAP resolves university &amp; sub-unit → submission appears only
                      in the queue of the correct institutional pre-reviewer.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50 mb-1">Journey B – Evaluation Routing</p>
                    <p className="text-slate-300 text-xs">
                      Award configuration defines evaluation model → specialization field maps each
                      submission to committees → evaluators see only assigned workloads.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50 mb-1">Journey C – Visibility Control</p>
                    <p className="text-slate-300 text-xs">
                      Applicants see only their own submissions; pre-reviewers see their institution;
                      directorate admins see all submissions under their awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DocSection>
        
          {/* Hierarchy Model */}
          <DocSection title="Organizational Hierarchy Model (V1)" icon={<Layers />}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 p-4 flex flex-col gap-2">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Level 1</p>
                <p className="font-semibold flex items-center gap-2">
                  <Shield size={16} /> Ministry
                </p>
                <p className="text-xs text-slate-300">
                  Top-level governance. Owns the global hierarchy, role catalogue, and cross-directorate
                  standards.
                </p>
              </div>
              <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 p-4 flex flex-col gap-2">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Level 2</p>
                <p className="font-semibold flex items-center gap-2">
                  <Building2 size={16} /> Directorate
                </p>
                <p className="text-xs text-slate-300">
                  Owns awards, committees and evaluators within a specific directorate.
                </p>
              </div>
              <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 p-4 flex flex-col gap-2">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Level 3</p>
                <p className="font-semibold flex items-center gap-2">
                  <School size={16} /> University
                </p>
                <p className="text-xs text-slate-300">
                  Performs pre-review and manages institutional submissions and reviewers.
                </p>
              </div>
              <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 p-4 flex flex-col gap-2">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Level 4</p>
                <p className="font-semibold flex items-center gap-2">
                  <Layers size={16} /> Sub-Units
                </p>
                <p className="text-xs text-slate-300">
                  Colleges, departments, labs, centres, libraries etc. used for fine-grained routing and
                  visibility.
                </p>
              </div>
            </div>
          </DocSection>
        
          {/* Roles & Capabilities */}
          <DocSection title="Roles & Capabilities" icon={<User />}>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-3">
                Role Catalogue (V1)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    role: 'Ministry Super Admin',
                    desc: 'Manage full hierarchy; assign any role; full audit visibility.',
                  },
                  {
                    role: 'Directorate Admin',
                    desc: 'Manage awards, evaluators and committees for their directorate.',
                  },
                  {
                    role: 'Award Creator',
                    desc: 'Create awards via the configuration wizard; cannot approve own awards.',
                  },
                  {
                    role: 'Award Approver',
                    desc: 'Approve/reject award configurations before they become Active.',
                  },
                  {
                    role: 'Pre-Reviewer',
                    desc: 'Review submissions belonging to their university or sub-unit.',
                  },
                  {
                    role: 'Verification Admin',
                    desc: 'Handle escalations, unlock limited fields and correct minor issues.',
                  },
                  {
                    role: 'Committee Member / Evaluator',
                    desc: 'Score only the submissions assigned to them; no edit to other data.',
                  },
                  {
                    role: 'Committee Manager',
                    desc: 'Manage evaluators, committee membership and mappings to awards.',
                  },
                  {
                    role: 'Applicant',
                    desc: 'Create, edit (until submission) and submit applications.',
                  },
                ].map((item) => (
                  <div
                    key={item.role}
                    className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 flex flex-col gap-1"
                  >
                    <p className="font-semibold text-slate-900 text-sm">{item.role}</p>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </DocSection>
        
          {/* Visibility & Edit Permissions */}
          <DocSection title="Visibility & Edit Rules" icon={<Shield />}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-sm">
              {/* Award-level visibility */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-2">
                  Award-Level Visibility
                </p>
                <ul className="space-y-1 text-slate-700">
                  <li>
                    <strong>Directorate Admins:</strong> Awards within their directorate.
                  </li>
                  <li>
                    <strong>University Users:</strong> Awards open to their institution or public awards.
                  </li>
                  <li>
                    <strong>Applicants:</strong> Awards they are eligible for based on PRD-2 rules.
                  </li>
                </ul>
              </div>
        
              {/* Submission-level visibility */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-2">
                  Submission-Level Visibility
                </p>
                <ul className="space-y-1 text-slate-700">
                  <li>
                    <strong>Applicants:</strong> Only their own submissions.
                  </li>
                  <li>
                    <strong>Pre-Reviewers:</strong> Submissions from their university/sub-unit.
                  </li>
                  <li>
                    <strong>Verification Admins:</strong> Escalated submissions only.
                  </li>
                  <li>
                    <strong>Evaluators:</strong> Submissions explicitly assigned to them.
                  </li>
                  <li>
                    <strong>Directorate Admins:</strong> All submissions under their awards.
                  </li>
                </ul>
              </div>
        
              {/* Edit permissions */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 text-slate-100 p-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-2">
                  Edit Permissions
                </p>
                <ul className="space-y-1 text-xs">
                  <li>
                    <strong>Applicants:</strong> Draft or explicitly unlocked fields only.
                  </li>
                  <li>
                    <strong>Pre-Reviewers / Evaluators:</strong> No direct edit rights on applicant data;
                    they only review/score.
                  </li>
                  <li>
                    <strong>Verification Admins:</strong> Limited corrections on escalated cases.
                  </li>
                  <li>
                    <strong>Directorate Admins:</strong> Edit award configuration, not hierarchy.
                  </li>
                </ul>
              </div>
            </div>
          </DocSection>
        
          {/* Routing Logic */}
          <DocSection title="Routing Logic (Pre-Review, Verification & Evaluation)" icon={<ArrowRight />}>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm space-y-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-1">
                  Pre-Review Routing
                </p>
                <p className="text-slate-700 text-xs">
                  Submissions are routed based on <strong>applicant affiliation</strong>. The system resolves
                  the applicant&apos;s university and sub-unit, then queues the submission for the correct
                  institutional pre-reviewers only.
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-1">
                  Verification Routing
                </p>
                <p className="text-slate-700 text-xs">
                  Cases flagged during pre-review or evaluation escalate to
                  <strong>ministry-level verification admins</strong>. They see a focused queue of escalated
                  items and can perform limited corrections.
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-1">
                  Evaluation Routing
                </p>
                <p className="text-slate-700 text-xs">
                  The award&apos;s evaluation model (single committee, per-specialization, multi-level) and
                  specialization mapping determine which committee receives each submission and which
                  evaluators are assigned. Evaluators never browse free-form lists; they work from
                  <strong> curated assignment queues</strong>.
                </p>
              </div>
            </div>
          </DocSection>
        </>
        
        );
      case 'evaluators':
        return (
          <>
            <DocSection title="PRD-4: Evaluators & Committees Management" icon={<Users />}>
              <div className="space-y-8">
                {/* HERO / EXECUTIVE SUMMARY */}
                <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-600 text-white p-6 shadow-2xl shadow-indigo-200/50">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      {/* Left: title + narrative */}
                      <div className="space-y-2 max-w-2xl">
                        <p className="text-[11px] uppercase tracking-[0.4em] text-white/70 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Users size={16} />
                            PRD-4 • Evaluators & Committees
                          </span>
                        </p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                          One Evaluators Engine to Protect Fairness & Scale Decisions
                        </h2>
                        <p className="text-sm md:text-base text-indigo-100">
                          The <strong>Evaluators & Committees Management</strong> module ensures that every
                          submission is routed to the right committee, scored by the right experts, and
                          governed by clear rules for conflicts, permissions, and lifecycle. It turns
                          fragmented evaluation spreadsheets into a single, auditable system of record.
                        </p>
                      </div>
      
                      {/* Right: small hero stats */}
                      <div className="flex flex-wrap gap-3 justify-end min-w-[220px]">
                        <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                            Entities
                          </p>
                          <p className="text-2xl font-bold mt-1">3</p>
                          <p className="text-[11px] text-white/70 mt-1">
                            Committees, evaluators, roles
                          </p>
                        </div>
                        <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                            Core Guarantees
                          </p>
                          <p className="text-sm font-semibold mt-1">No orphan reviews</p>
                          <p className="text-[11px] text-white/70 mt-1">
                            Every eligible submission has a home
                          </p>
                        </div>
                      </div>
                    </div>
      
                    {/* Hero chips */}
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                        Structured committees & roles
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                        Conflict-of-interest controls
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                        Routing per specialization & stage
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                        Audit-ready evaluation history
                      </span>
                    </div>
                  </div>
                </div>
      
               
      
                {/* SCOPE / PROBLEM / KPIs / STAKEHOLDERS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      Scope & Vision
                    </p>
                    <p className="text-sm text-slate-700 mt-2">
                      Provide a <strong>single control plane</strong> to create committees, register
                      evaluators, and define who can score which submissions. The system must support
                      simple awards (one committee) and complex ones (multi-level, per-specialization
                      paths) without custom development each time.
                    </p>
                  </div>
      
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      Problem Addressed
                    </p>
                    <p className="text-sm text-slate-700 mt-2">
                      Today, committees and evaluators are tracked in Excel or ad-hoc systems. This
                      leads to <strong>lost submissions, double-evaluation, and unclear accountability</strong>.
                      PRD-4 replaces this with explicit committee definitions, evaluator assignments,
                      and routing rules tied to the hierarchy from PRD-3.
                    </p>
                  </div>
      
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      Success Metrics / KPIs
                    </p>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>⬇ Zero “orphan” submissions without an assigned committee.</li>
                      <li>⬇ Fewer manual routing fixes and re-assignments.</li>
                      <li>⬆ Clear trace of who evaluated what and when.</li>
                      <li>⬆ Ability to support multi-level evaluation without chaos.</li>
                    </ul>
                  </div>
      
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      Stakeholders & Responsibilities
                    </p>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>
                        <span className="font-semibold">Ministry owners:</span> define global committee
                        types, evaluation policies, and conflict-of-interest rules.
                      </li>
                      <li>
                        <span className="font-semibold">Directorate / award admins:</span> instantiate
                        committees per award, map specializations, and assign evaluators.
                      </li>
                      <li>
                        <span className="font-semibold">Evaluators:</span> receive scoped access to only
                        the submissions they are allowed to score.
                      </li>
                    </ul>
                  </div>
                </div>
      
                {/* CORE MODEL: ENTITIES & RELATIONSHIPS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      Core Entities
                    </p>
                    <ul className="mt-3 text-sm text-slate-700 space-y-2">
                      <li>
                        <strong>Evaluator:</strong> a user with one or more evaluator roles (e.g. member,
                        chair, observer) tied to awards or specializations.
                      </li>
                      <li>
                        <strong>Committee:</strong> a named group of evaluators created for an award or a
                        specialization, with a stage (e.g. Stage 1, Final).
                      </li>
                      <li>
                        <strong>Assignment:</strong> mapping between submissions and specific committees
                        and evaluators (who scores this file).
                      </li>
                    </ul>
                  </div>
      
                  <div className="bg-slate-900 rounded-2xl border border-slate-800 text-slate-100 p-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                      Hierarchy & Routing
                    </p>
                    <ul className="mt-3 text-sm space-y-2">
                      <li>
                        Committees can be <strong>global</strong>, <strong>per-award</strong>, or
                        <strong> per-specialization</strong>, but are always anchored to the hierarchy
                        (ministry → directorate → institution) from PRD-3.
                      </li>
                      <li>
                        Multi-level awards support flows like{' '}
                        <code className="font-mono text-xs bg-slate-800 px-2 py-1 rounded">
                          University → Directorate → Ministry
                        </code>
                        .
                      </li>
                      <li>
                        Routing rules decide which committee receives each submission once pre-review is
                        completed.
                      </li>
                    </ul>
                  </div>
      
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      Governance & Safety
                    </p>
                    <ul className="mt-3 text-sm text-slate-700 space-y-2">
                      <li>Per-award limits on how many submissions each evaluator can handle.</li>
                      <li>Conflict-of-interest flags (self, supervisor, same department, etc.).</li>
                      <li>Ability to replace evaluators mid-cycle with clear audit trail.</li>
                    </ul>
                  </div>
                </div>
      
                {/* TYPICAL FLOWS AS A VERTICAL TIMELINE */}
                <div className="space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Evaluation & Committees – Core Flows
                  </p>
      
                  <div className="relative pl-6 space-y-4">
                    {/* vertical line */}
                    <div className="absolute left-[7px] top-0 bottom-0 w-px bg-slate-200" />
      
                    {/* Flow A */}
                    <div className="relative">
                      <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                          Flow A – Simple Award (Single Committee)
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                          <li>Award admin creates one committee at ministry level.</li>
                          <li>All eligible submissions after pre-review are routed to this committee.</li>
                          <li>Each evaluator scores their assigned submissions using PRD-5 scoring UI.</li>
                          <li>System aggregates scores and publishes results to the award owner.</li>
                        </ul>
                      </div>
                    </div>
      
                    {/* Flow B */}
                    <div className="relative">
                      <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                          Flow B – Per-Specialization Committees
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                          <li>Award is configured with specializations (e.g., Engineering, Medicine).</li>
                          <li>Each specialization has its own committee and evaluators.</li>
                          <li>
                            Submissions are routed based on specialization chosen in the submission engine.
                          </li>
                          <li>
                            Committees see only the submissions mapped to their specialization, ensuring
                            expertise and fairness.
                          </li>
                        </ul>
                      </div>
                    </div>
      
                    {/* Flow C */}
                    <div className="relative">
                      <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                          Flow C – Multi-Level Evaluation
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                          <li>First-level committee evaluates and shortlists submissions.</li>
                          <li>
                            System locks first-level scores, then routes shortlisted files to the next
                            stage (e.g. national committee).
                          </li>
                          <li>Second-level evaluators see previous recommendations but have their own scores.</li>
                          <li>
                            Final results combine stage scores according to PRD-1 rules (weights,
                            aggregation model).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
      
                {/* NON-FUNCTIONAL REQUIREMENTS & UX NOTES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      Non-Functional Requirements
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-slate-700">
                      <li>
                        <strong>Performance:</strong> Filtering and assigning evaluators must remain
                        responsive even for large national awards.
                      </li>
                      <li>
                        <strong>Reliability:</strong> No loss of assignments when committees change;
                        re-routing must be tracked and reversible.
                      </li>
                      <li>
                        <strong>Auditability:</strong> Every evaluation action (view, score, change) is
                        logged with user, time, and context.
                      </li>
                    </ul>
                  </div>
      
                  <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      UX & Access Principles
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-slate-700">
                      <li>Evaluator views are minimal: only necessary data to score fairly.</li>
                      <li>
                        Committees see aggregate progress (how many submissions scored, pending, etc.).
                      </li>
                      <li>
                        Admins get dashboards to monitor evaluator load, overdue submissions, and routing
                        health.
                      </li>
                      <li>
                        All screens respect the same <strong>hierarchy, roles, and permissions</strong>{' '}
                        defined in PRD-3.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </DocSection>
          </>
        );
       case 'scoring':
        return (
          <>
          {/* PRD-5: Scoring Engine & Results Generation */}
          <DocSection
            title="PRD-5: Scoring Engine & Results Generation"
            icon={<BarChart3 />}
          >
            <div className="space-y-8">
              {/* HERO / EXECUTIVE SUMMARY */}
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-600 text-white p-6 shadow-2xl shadow-indigo-200/50">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2 max-w-2xl">
                      <p className="text-[11px] uppercase tracking-[0.4em] text-white/70 flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <BarChart3 size={16} />
                          PRD-5 • Scoring Engine
                        </span>
                      </p>
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                        Turning Evaluator Inputs into Fair, Auditable Results
                      </h2>
                      <p className="text-sm md:text-base text-indigo-100">
                        The <strong>Scoring Engine &amp; Results Generation</strong> module
                        takes evaluator scores, applies configured rules, and produces
                        consistent, explainable rankings for every award cycle.
                      </p>
                    </div>
        
                    <div className="flex flex-wrap gap-3 justify-end min-w-[220px]">
                      <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                          Core Responsibility
                        </p>
                        <p className="text-sm font-semibold mt-1">
                          Scoring &amp; Ranking
                        </p>
                        <p className="text-[11px] text-white/70 mt-1">
                          From raw inputs → final results
                        </p>
                      </div>
        
                      <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[120px]">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                          Success Signals
                        </p>
                        <p className="text-sm font-semibold mt-1">
                          100% accurate weights
                        </p>
                        <p className="text-[11px] text-white/70 mt-1">
                          Zero unresolved inconsistencies
                        </p>
                      </div>
                    </div>
                  </div>
        
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                      Unified scoring rules
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                      Multi-stage evaluation support
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                      Deterministic ranking &amp; ties
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                      Fully auditable lifecycle
                    </span>
                  </div>
                </div>
              </div>
        
              {/* SCOPE / PROBLEM / STAKEHOLDERS / KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Scope &amp; Vision
                  </p>
                  <p className="text-sm text-slate-700 mt-2">
                    Provide a single <strong>platform-wide scoring engine</strong> that
                    executes award configuration rules, aggregates evaluator scores,
                    and generates transparent final results across all awards and
                    cycles.
                  </p>
                  <ul className="mt-3 text-xs text-slate-600 space-y-1">
                    <li>• Criterion-level scoring &amp; validation.</li>
                    <li>• Evaluator &amp; stage-level aggregation.</li>
                    <li>• Final scoring, ranking, and tie handling.</li>
                    <li>• Versioned, auditable result sets.</li>
                  </ul>
                </div>
        
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Problem Addressed
                  </p>
                  <p className="text-sm text-slate-700 mt-2">
                    Without a standard engine, multi-stage evaluations risk{' '}
                    <strong>inconsistent aggregation, manual reconciliation, and
                    non-auditable decisions</strong>. This PRD enforces strict,
                    centralized scoring logic and result generation.
                  </p>
                </div>
        
                <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Success Metrics / KPIs
                  </p>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    <li>⬇ 80% reduction in manual scoring reconciliation.</li>
                    <li>⬆ 100% rules-consistent score aggregation per award.</li>
                    <li>⬆ 100% of scores &amp; result sets fully auditable.</li>
                    <li>⬇ Zero unresolved scoring inconsistencies.</li>
                  </ul>
                </div>
        
                <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Stakeholders &amp; Responsibilities
                  </p>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    <li>
                      <span className="font-semibold">Ministry Super Admin:</span>{' '}
                      approves final results, owns scoring policies.
                    </li>
                    <li>
                      <span className="font-semibold">Directorate Admin:</span>{' '}
                      triggers aggregation &amp; ranking for awards they own.
                    </li>
                    <li>
                      <span className="font-semibold">Committee Manager:</span>{' '}
                      monitors scoring completeness and stage readiness.
                    </li>
                    <li>
                      <span className="font-semibold">Evaluators:</span> submit
                      criterion-level scores only; no aggregation rights.
                    </li>
                  </ul>
                </div>
              </div>
        
              {/* PERSONAS & ENGINE OVERVIEW */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Personas &amp; Key Journeys
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-slate-700">
                    <li>
                      <strong>Evaluator:</strong> scores assigned criteria for a
                      submission, then submits inputs for aggregation.
                    </li>
                    <li>
                      <strong>Committee Manager:</strong> tracks completion and marks
                      stages as ready for scoring engine execution.
                    </li>
                    <li>
                      <strong>Directorate Admin:</strong> triggers aggregation,
                      validates outputs, and generates ranked results.
                    </li>
                    <li>
                      <strong>Ministry Super Admin:</strong> reviews and approves
                      final result sets for publication.
                    </li>
                  </ul>
                </div>
        
                <div className="bg-slate-900 rounded-2xl border border-slate-800 text-slate-100 p-5">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                    Engine Overview
                  </p>
                  <ul className="mt-3 text-sm space-y-2">
                    <li>
                      <span className="font-semibold">Input:</span> validated
                      criterion-level scores from evaluators, per stage.
                    </li>
                    <li>
                      <span className="font-semibold">Processing:</span> apply scoring
                      models, aggregate per criterion, then per stage, then per
                      applicant.
                    </li>
                    <li>
                      <span className="font-semibold">Output:</span> final scores,
                      ranked lists, and versioned result sets ready for ministry
                      approval and publication.
                    </li>
                    <li>
                      <span className="font-semibold">Guardrails:</span> evaluation
                      must be closed; incomplete or invalid submissions are
                      automatically blocked from ranking.
                    </li>
                  </ul>
                </div>
              </div>
        
              {/* SCORING LIFECYCLE TIMELINE */}
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                  Scoring &amp; Results Lifecycle
                </p>
        
                <div className="relative pl-6 space-y-4">
                  {/* Vertical line */}
                  <div className="absolute left-[7px] top-0 bottom-0 w-px bg-slate-200" />
        
                  {/* STEP A – Evaluator Scoring */}
                  <div className="relative">
                    <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                        Phase A – Evaluator Scoring
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                        <li>
                          Evaluators score each required criterion using configured
                          scoring models (numeric, binary, mapped, ranking, file, text,
                          normalization).
                        </li>
                        <li>
                          Strong validation: required fields, min/max, valid options,
                          mandatory files.
                        </li>
                        <li>
                          All scoring must occur before the evaluation end-date; late
                          submissions are blocked and logged.
                        </li>
                      </ul>
                    </div>
                  </div>
        
                  {/* STEP B – Criterion & Evaluator Aggregation */}
                  <div className="relative">
                    <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                        Phase B – Criterion Finalization &amp; Evaluator Aggregation
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                        <li>
                          For each criterion, the engine produces one authoritative
                          numeric score.
                        </li>
                        <li>
                          Final-stage evaluator’s score is the source of truth;
                          earlier-stage inputs are visible but not used in calculations.
                        </li>
                        <li>
                          Incomplete criteria prevent stage completion and result
                          generation.
                        </li>
                      </ul>
                    </div>
                  </div>
        
                  {/* STEP C – Stage & Final Scores */}
                  <div className="relative">
                    <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                        Phase C – Stage-Level &amp; Final Score Calculation
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                        <li>
                          Stage score = sum of all final criterion scores for that
                          stage.
                        </li>
                        <li>
                          Multi-stage awards: Stage 1 must be fully complete before
                          Stage 2; Stage 2 overrides Stage 1 as the final score source.
                        </li>
                        <li>
                          Final Score per applicant is a single numeric value used for
                          ranking and tie-handling.
                        </li>
                      </ul>
                    </div>
                  </div>
        
                  {/* STEP D – Ranking & Tie Handling */}
                  <div className="relative">
                    <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                        Phase D – Ranking, Ties &amp; Result Sets
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                        <li>
                          Engine ranks applicants in descending order of Final Score.
                        </li>
                        <li>
                          For exact ties, the system <strong>never auto-selects</strong>{' '}
                          a winner; it notifies the authorized admin to manually decide
                          and log a reason.
                        </li>
                        <li>
                          Ranked list is stored as a versioned, auditable result set
                          with timestamp and triggering admin.
                        </li>
                      </ul>
                    </div>
                  </div>
        
                  {/* STEP E – Appeals & Recalculation */}
                  <div className="relative">
                    <div className="absolute left-[-1px] top-2 w-3 h-3 rounded-full bg-indigo-500 border border-white shadow" />
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                        Phase E – Appeals, Re-Scoring &amp; Re-Ranking
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-slate-700">
                        <li>
                          Appeals update only the affected applicant’s scores; engine
                          recalculates their Final Score and regenerates ranking.
                        </li>
                        <li>
                          Each recalculation produces a new result-set version; previous
                          versions remain archived for audit.
                        </li>
                        <li>
                          If appeals create new ties, the same manual tie-resolution
                          process is enforced.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
        
              {/* NON-FUNCTIONAL & EDGE CASES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Non-Functional Requirements
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-slate-700">
                    <li>
                      <strong>Determinism:</strong> same inputs and configuration always
                      yield the same scores and rankings.
                    </li>
                    <li>
                      <strong>Auditability:</strong> all scoring actions, overrides,
                      appeals, and tie resolutions are fully logged.
                    </li>
                    <li>
                      <strong>Performance:</strong> can aggregate scores and generate
                      rankings for large batches without timeouts.
                    </li>
                    <li>
                      <strong>Safety:</strong> scoring cannot run before evaluation
                      end-date; incomplete submissions never enter ranking.
                    </li>
                  </ul>
                </div>
        
                <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    Error Handling &amp; Edge Cases
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-3 text-sm text-slate-700">
                    <li>
                      Late evaluator submissions are blocked and logged; they never
                      alter finalized scores.
                    </li>
                    <li>
                      Missing or invalid scores flag the submission as incomplete and
                      block ranking until resolved.
                    </li>
                    <li>
                      Stage sequencing is enforced; Stage 2 cannot start if Stage 1 is
                      incomplete.
                    </li>
                    <li>
                      Critical calculation errors (e.g., division by zero) halt the
                      scoring run, log diagnostics, and notify system admins.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </DocSection>
        </>
        
        );
      case 'appeals':
        return (
          <>
  {/* PRD-6: Appeals, Corrections & Audit Trail */}
  <DocSection
    title="PRD-6: Appeals, Corrections & Audit Trail"
    icon={<AlertCircle />}
  >
    <div className="space-y-6">
      {/* Hero / Overview */}
      <div className="rounded-3xl bg-gradient-to-br from-rose-600 via-orange-500 to-amber-500 text-white p-6 shadow-2xl shadow-rose-200/50">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.4em] text-white/80 flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <AlertCircle size={16} />
                  PRD-6 • Appeals & Audit
                </span>
              </p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                Fair Appeals, Safe Corrections, Full Traceability
              </h2>
              <p className="text-sm md:text-base text-amber-50">
                PRD-6 defines how applicants challenge results, how admins correct scores,
                and how the system keeps an immutable audit trail. It activates after
                results are generated and ensures that every appeal, correction, and
                re-scoring step is transparent and compliant.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-end min-w-[220px]">
              <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[130px]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">
                  Scope
                </p>
                <p className="text-sm font-semibold mt-1">
                  Appeals & Corrections
                </p>
                <p className="text-[11px] text-white/75 mt-1">
                  After scoring & ranking
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-4 py-3 min-w-[130px]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">
                  Guarantees
                </p>
                <p className="text-sm font-semibold mt-1">
                  Fairness & Auditability
                </p>
                <p className="text-[11px] text-white/75 mt-1">
                  Every change is logged
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
              Applicant appeal workflow
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
              Score corrections & versioning
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
              Re-scoring & ranking updates
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
              Appeal-specific audit trail
            </span>
          </div>
        </div>
      </div>

      {/* Stakeholders & Journeys */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            Stakeholders
          </p>
          <ul className="mt-2 text-sm text-slate-700 space-y-2">
            <li>
              <span className="font-semibold">Applicant:</span> submits appeals with
              justification and evidence; needs clarity and transparency on outcomes.
            </li>
            <li>
              <span className="font-semibold">Directorate Admin:</span> reviews appeals,
              adjusts scores when needed, and ensures compliance with ministry rules.
            </li>
            <li>
              <span className="font-semibold">Ministry Super Admin:</span> defines appeal
              policies, oversees complex or escalated cases, and can export audit data.
            </li>
            <li>
              <span className="font-semibold">Committee Manager:</span> provides context
              or clarifications on evaluations when requested by admins.
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
            Core User Journeys
          </p>
          <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc pl-5">
            <li>
              <strong>Journey A – Appeal Submission:</strong> applicant reviews results,
              submits an appeal with a reason, justification text, and optional evidence.
            </li>
            <li>
              <strong>Journey B – Review & Decision:</strong> admin assesses the appeal,
              optionally requests clarifications, and records an approve / partial / reject
              decision.
            </li>
            <li>
              <strong>Journey C – Correction & Re-Scoring:</strong> admin fixes affected
              scores; the system versions the result and triggers re-scoring & ranking.
            </li>
            <li>
              <strong>Journey D – Audit & Traceability:</strong> authorized users inspect
              the full history of decisions, corrections, and post-appeal scoring changes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </DocSection>

  {/* Key Capabilities */}
  <DocSection title="Key Capabilities" icon={<CheckCircle />}>
    <ul className="space-y-3 text-sm">
      <li className="flex gap-2">
        <div className="mt-1">
          <ArrowRight size={14} className="text-rose-500" />
        </div>
        <span>
          <strong>Appeal Submission Guardrails:</strong> appeals are only allowed when the
          applicant has a final score, the appeal window is open, and the reason matches an
          allowed category (e.g., missing score, mis-evaluation, incorrect data). Required
          fields include reason, justification, and optional evidence, plus an applicant
          declaration checkbox.
        </span>
      </li>

      <li className="flex gap-2">
        <div className="mt-1">
          <ArrowRight size={14} className="text-rose-500" />
        </div>
        <span>
          <strong>Structured Review & Decisions:</strong> admins work from a dedicated
          appeal details page, can ask evaluators/committees for clarifications, and
          decide whether to approve, partially approve, or reject the appeal. All decisions
          are logged and applicants are notified.
        </span>
      </li>

      <li className="flex gap-2">
        <div className="mt-1">
          <ArrowRight size={14} className="text-rose-500" />
        </div>
        <span>
          <strong>Safe Score Corrections:</strong> only authorized roles can edit criterion
          or stage scores. Every correction must include justification text and
          automatically creates a new version that stores old value, new value, admin id,
          timestamp, and linked Appeal ID.
        </span>
      </li>

      <li className="flex gap-2">
        <div className="mt-1">
          <ArrowRight size={14} className="text-rose-500" />
        </div>
        <span>
          <strong>Post-Appeal Re-Scoring & Ranking:</strong> whenever a correction changes
          stage or final scores—or applicants are added/removed—the system recalculates
          scores, regenerates rankings, and highlights changed positions. Tie cases trigger
          a manual resolution step that is also logged.
        </span>
      </li>

      <li className="flex gap-2">
        <div className="mt-1">
          <ArrowRight size={14} className="text-rose-500" />
        </div>
        <span>
          <strong>Appeal Lifecycle & Closure:</strong> an appeal is closed only after a
          decision is issued, all corrections are applied, re-scoring is complete, and the
          new ranking is in place. Closure records the final decision, score version, and
          responsible admin.
        </span>
      </li>

      <li className="flex gap-2">
        <div className="mt-1">
          <ArrowRight size={14} className="text-rose-500" />
        </div>
        <span>
          <strong>Appeal-Specific Audit Trail:</strong> the platform logs every key event
          (submission, decision, correction, re-scoring, ranking regeneration, tie
          resolution, closure) with event type, submission id, appeal id, old/new values,
          admin id, timestamp, and notes. Applicants can see their own appeal history;
          ministry super admins can access and export full logs.
        </span>
      </li>
    </ul>
  </DocSection>

  {/* Visual Lifecycle Summary */}
  <DocSection
    title="Appeal Lifecycle at a Glance"
    icon={<FileText />}
  >
    <div className="bg-slate-900 rounded-2xl border border-slate-800 text-slate-100 p-5">
      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
        End-to-End Workflow
      </p>
      <p className="mt-2 text-sm text-slate-200">
        The appeal process runs as a controlled, linear lifecycle:
      </p>
      <ol className="mt-3 text-sm space-y-2 list-decimal pl-5 text-slate-200">
        <li>Applicant submits an appeal with justification and evidence.</li>
        <li>System validates eligibility (period, status, reason) and logs an Appeal ID.</li>
        <li>Admin reviews the case and records a decision (approve / partial / reject).</li>
        <li>For approved cases, scores are corrected and versioned.</li>
        <li>System re-scores, regenerates rankings, and flags any new ties.</li>
        <li>Admins resolve tie cases when needed; decisions are logged.</li>
        <li>Appeal is closed and the full trail remains available for audits.</li>
      </ol>
    </div>
  </DocSection>
</>

        );
      default: return null;
    }
  };

  const renderSimulator = () => {
    switch(activePage) {
      case 'overview': return <SimOverview onNavigate={setActivePage} />;
      case 'config': return <SimConfig />;
      case 'submission': return <SimSubmission />;
      case 'hierarchy': return <SimHierarchy />;
      case 'evaluators': return <SimEvaluators />;
      case 'scoring': return <SimScoring />;
      case 'appeals': return <SimAppeals />;
      default: return <div className="p-4 text-white">Simulator not found</div>;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg text-white"><Award size={20} /></div>
          <div>
            <h1 className="font-bold text-white text-lg leading-none">UAP</h1>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase">Platform Docs</span>
          </div>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
          {PAGES.map(page => (
            <button
              key={page.id}
              onClick={() => { setActivePage(page.id); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${activePage === page.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'hover:bg-slate-800'}`}
            >
              <span className={activePage === page.id ? 'text-white' : 'text-slate-500'}>{page.icon}</span>
              <div className="text-left">
                <div className="text-sm font-semibold">{page.label}</div>
                <div className={`text-[10px] ${activePage === page.id ? 'text-indigo-200' : 'text-slate-600'}`}>{page.desc}</div>
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-40 flex items-center px-4 justify-between">
        <div className="font-bold text-slate-800">UAP Documentation</div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col md:flex-row h-full pt-16 md:pt-0 overflow-hidden relative">
        
        {/* RESTORE BUTTONS (Visible when panels are closed) */}
        {!showDocs && (
          <button 
            onClick={() => setShowDocs(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white border border-slate-200 p-2 rounded-r-xl shadow-lg hover:bg-slate-50 transition-all group"
            title="Expand Documentation"
          >
            <ChevronRight className="text-slate-400 group-hover:text-indigo-600" size={20} />
          </button>
        )}

        {!showSim && (
          <button 
            onClick={() => setShowSim(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-slate-900 border border-slate-700 p-2 rounded-l-xl shadow-lg hover:bg-slate-800 transition-all group"
            title="Expand Simulator"
          >
            <ChevronLeft className="text-slate-400 group-hover:text-indigo-400" size={20} />
          </button>
        )}

        {/* EMPTY STATE (If both closed) */}
        {!showDocs && !showSim && (
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-slate-100">
            <button 
              onClick={() => { setShowDocs(true); setShowSim(true); }}
              className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-white shadow-xl hover:scale-105 transition-all group"
            >
              <LayoutTemplate size={48} className="text-slate-300 group-hover:text-indigo-500 transition-colors" />
              <span className="font-bold text-slate-600">Restore View</span>
            </button>
          </div>
        )}

        {/* LEFT PANEL: DOCUMENTATION */}
        <div className={`
          transition-all duration-300 ease-in-out h-full overflow-hidden bg-white relative
          ${showDocs 
            ? (showSim ? 'w-full md:w-1/2 lg:w-7/12 border-r border-slate-200' : 'w-full') 
            : 'w-0 border-none'
          }
        `}>
          {showDocs && (
            <div className="h-full overflow-y-auto p-6 md:p-10 relative">
              {/* COLLAPSE BUTTON */}
              <button
                onClick={() => setShowDocs(false)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors z-20"
                title="Collapse Documentation"
              >
                <Minimize2 size={16} />
              </button>

              <div className="max-w-3xl mx-auto">
                 <header className="mb-8">
                   <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2 block">
                     {PAGES.find(p => p.id === activePage)?.desc}
                   </span>
                   <h1 className="text-3xl font-black text-slate-900 mb-2">
                     {PAGES.find(p => p.id === activePage)?.label}
                   </h1>
                 </header>
                 
                 {renderContent()}

                 <div className="h-20" />
              </div>
            </div>
          )}
        </div>

        {/* RIGHT PANEL: SIMULATOR */}
        <div className={`
          transition-all duration-300 ease-in-out h-full bg-slate-950 relative shadow-2xl z-10 flex flex-col
          ${showSim 
            ? (showDocs ? 'w-full md:w-1/2 lg:w-5/12 border-l border-slate-800' : 'w-full') 
            : 'w-0 border-none'
          }
        `}>
          {showSim && (
            <>
              <div className="h-14 bg-slate-900/50 border-b border-slate-800 flex items-center px-6 justify-between backdrop-blur-sm shrink-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Activity size={14} className="text-indigo-400" /> Interactive Simulator
                </span>
                
                {/* COLLAPSE BUTTON */}
                <button
                  onClick={() => setShowSim(false)}
                  className="p-2 hover:bg-slate-800 rounded-full text-slate-500 hover:text-white transition-colors"
                  title="Collapse Simulator"
                >
                  <Minimize2 size={16} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                 {renderSimulator()}
              </div>
              
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-center shrink-0">
                <p className="text-[10px] text-slate-500">
                  Interactive sandbox based on Ministry PRDs V1.0
                </p>
              </div>
            </>
          )}
        </div>

      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}