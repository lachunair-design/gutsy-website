'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

type Step = 'intro' | 1 | 2 | 3 | 4 | 5 | 6 | 'email' | 'result';
type FlavorResult = 'vanilla' | 'cacao' | 'both';

interface Answer {
  q: number;
  value: string;
}

const QUESTIONS = [
  {
    id: 1,
    question: 'When do you usually reach for protein?',
    options: [
      'Morning, instead of or with breakfast',
      'Right after I train',
      'Afternoon pick-me-up',
      'It changes every day',
    ],
  },
  {
    id: 2,
    question: 'What is your main reason for adding protein right now?',
    options: [
      'Hit my daily protein target without wrecking my stomach',
      'Support training and recovery',
      'Keep energy and focus steady through the day',
      'Stay full between meals',
    ],
  },
  {
    id: 3,
    question: 'How sensitive is your gut, honestly?',
    options: [
      'Very. Most proteins make me feel bloated or gassy',
      'A bit. Some brands are fine, some are not',
      'Not really. I just prefer something lighter',
      'I am still figuring it out',
    ],
  },
  {
    id: 4,
    question: 'What sounds more like you most days?',
    options: [
      'Calm vanilla, clean and not too sweet',
      'Chocolate, but not a sugar bomb',
      'I like both. Surprise me',
      'I care more about how it feels than the flavor',
    ],
  },
  {
    id: 5,
    question: 'How do you feel about extra “go” in your day?',
    options: [
      'I want gentle, steady energy',
      'I am already caffeinated enough, keep it calm',
      'Depends on the day',
      'I just do not want jitters or a crash',
    ],
  },
  {
    id: 6,
    question: 'How thick do you like your shakes?',
    options: [
      'Light and easy to sip',
      'Somewhere in the middle',
      'Thick, almost dessert-like',
      'I am not sure yet',
    ],
  },
];

function scoreResult(answers: Answer[]): FlavorResult {
  const q4 = answers.find((a) => a.q === 4)?.value;
  const q5 = answers.find((a) => a.q === 5)?.value;

  // Q4 primary driver
  if (q4 === 'Calm vanilla, clean and not too sweet') return 'vanilla';
  if (q4 === 'Chocolate, but not a sugar bomb') return 'cacao';
  if (q4 === 'I like both. Surprise me' || q4 === 'I care more about how it feels than the flavor') {
    // Use Q5 as a nudge but allow both later
    if (q5 === 'I want gentle, steady energy') return 'cacao';
    if (q5 === 'I am already caffeinated enough, keep it calm') return 'vanilla';
    return 'both';
  }

  // Fallback: lean on Q5
  if (q5 === 'I want gentle, steady energy') return 'cacao';
  if (q5 === 'I am already caffeinated enough, keep it calm') return 'vanilla';

  return 'both';
}

export function GutQuiz() {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [email, setEmail] = useState('');
  const [whatsappOptIn, setWhatsappOptIn] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<FlavorResult | null>(null);

  const totalSteps = 6;
  const questionStep = typeof step === 'number' ? step : null;

  const handleSelect = (qId: number, value: string) => {
    setAnswers((prev) => {
      const filtered = prev.filter((a) => a.q !== qId);
      return [...filtered, { q: qId, value }];
    });
    if (qId < totalSteps) {
      setStep((qId + 1) as Step);
    } else {
      setStep('email');
    }
  };

  const handleBack = () => {
    if (typeof step === 'number' && step > 1) {
      setStep((step - 1) as Step);
    } else if (step === 'email') {
      setStep(6);
    } else if (step === 'intro') {
      return;
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    const computed = scoreResult(answers);
    // Simulate sending email; real integration can hook here
    setTimeout(() => {
      setResult(computed);
      setStep('result');
      setSubmitting(false);
    }, 900);
  };

  const progress =
    step === 'intro'
      ? 0
      : step === 'email' || step === 'result'
      ? 100
      : ((step as number) / totalSteps) * 100;

  const currentQuestion = questionStep
    ? QUESTIONS.find((q) => q.id === questionStep)
    : null;

  const pickedForQuestion = (qId: number, value: string) =>
    answers.find((a) => a.q === qId)?.value === value;

  const renderResultCopy = () => {
    if (!result) return null;

    if (result === 'vanilla') {
      return (
        <div className="space-y-6">
          <p className={cn("text-sm uppercase tracking-[0.3em] text-black/40", utoBold.className)}>
            Your gut is asking for calm.
          </p>
          <h2 className={cn("text-4xl md:text-6xl leading-tight", utoBlack.className)}>
            You are a Vanilla Calm person.
          </h2>
          <p className="text-lg md:text-xl text-black/75 leading-relaxed">
            You want protein that pulls its weight without pulling focus. Natural vanilla,
            hydrolyzed plant protein, Actazin® kiwi extract, and reishi for a shake that feels light
            and stays in the background while you get on with your day.
          </p>
          <Link href="/products/vanilla-calm" className="inline-flex">
            <button className={cn("h-14 px-10 rounded-full bg-black text-linen text-xs uppercase tracking-[0.3em] font-black hover:bg-red transition-colors", utoBold.className)}>
              Go to Vanilla Calm
            </button>
          </Link>
        </div>
      );
    }

    if (result === 'cacao') {
      return (
        <div className="space-y-6">
          <p className={cn("text-sm uppercase tracking-[0.3em] text-black/40", utoBold.className)}>
            Your gut wants chocolate that plays nice.
          </p>
          <h2 className={cn("text-4xl md:text-6xl leading-tight", utoBlack.className)}>
            You are a Cacao Boost person.
          </h2>
          <p className="text-lg md:text-xl text-black/75 leading-relaxed">
            You want your protein to carry you through work, training, or long afternoons without
            sending your digestion into chaos. Real cacao, hydrolyzed plant protein, Actazin® kiwi
            extract, and maca for a gentle lift and a chocolate hit that does not feel like a sugar event.
          </p>
          <Link href="/products/cacao-boost" className="inline-flex">
            <button className={cn("h-14 px-10 rounded-full bg-black text-linen text-xs uppercase tracking-[0.3em] font-black hover:bg-red transition-colors", utoBold.className)}>
              Go to Cacao Boost
            </button>
          </Link>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <p className={cn("text-sm uppercase tracking-[0.3em] text-black/40", utoBold.className)}>
          Your gut is flexible. Your taste buds can decide.
        </p>
        <h2 className={cn("text-4xl md:text-6xl leading-tight", utoBlack.className)}>
          Both Vanilla Calm and Cacao Boost fit.
        </h2>
        <p className="text-lg md:text-xl text-black/75 leading-relaxed">
          Based on your answers, both Vanilla Calm and Cacao Boost fit your routine. Pick the flavor
          you are more likely to actually drink every day. Your gut will notice the hydrolyzed
          protein and Actazin® either way.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/products/vanilla-calm">
            <button className={cn("h-12 px-8 rounded-full bg-black text-linen text-[10px] uppercase tracking-[0.25em] font-black hover:bg-red transition-colors", utoBold.className)}>
              Vanilla Calm
            </button>
          </Link>
          <Link href="/products/cacao-boost">
            <button className={cn("h-12 px-8 rounded-full bg-white text-black border border-black/10 text-[10px] uppercase tracking-[0.25em] font-black hover:border-red transition-colors", utoBold.className)}>
              Cacao Boost
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-linen rounded-[40px] md:rounded-[60px] border border-black/5 p-6 md:p-10">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1 h-1.5 rounded-full bg-black/5 overflow-hidden mr-4">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={cn("text-[10px] uppercase tracking-[0.3em] text-black/40 font-black", utoBold.className)}>
          {typeof step === 'number' ? `Step ${step} of ${totalSteps}` : step === 'email' ? 'Almost done' : 'Start'}
        </span>
      </div>

      {step === 'intro' && (
        <div className="space-y-6">
          <p className={cn("text-sm uppercase tracking-[0.3em] text-black/40", utoBold.className)}>
            Find your match
          </p>
          <h2 className={cn("text-4xl md:text-6xl leading-tight mb-2", utoBlack.className)}>
            Let’s find your gut’s favorite shake.
          </h2>
          <p className={cn("text-lg md:text-xl text-black/75 leading-relaxed", utoMedium.className)}>
            6 quick questions about your routine, your gut, and your flavor mood. No wrong answers,
            just better protein logic.
          </p>
          <button
            onClick={() => setStep(1)}
            className={cn("mt-4 h-14 px-10 rounded-full bg-black text-linen text-xs uppercase tracking-[0.3em] font-black hover:bg-red transition-colors", utoBold.className)}
          >
            Start the 45-second quiz
          </button>
        </div>
      )}

      {currentQuestion && typeof step === 'number' && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className={cn(
                "text-[10px] uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors",
                utoBold.className
              )}
            >
              Back
            </button>
            <span className={cn("text-[10px] uppercase tracking-[0.3em] text-black/40", utoBold.className)}>
              Question {step}/{totalSteps}
            </span>
          </div>

          <h2 className={cn("text-2xl md:text-3xl leading-tight", utoBlack.className)}>
            {currentQuestion.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(currentQuestion.id, opt)}
                className={cn(
                  "text-left p-4 md:p-6 rounded-3xl border text-sm md:text-base transition-all",
                  pickedForQuestion(currentQuestion.id, opt)
                    ? "bg-black text-linen border-black scale-[0.99]"
                    : "bg-white text-black border-black/10 hover:border-black/40"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'email' && (
        <form onSubmit={handleEmailSubmit} className="space-y-6">
          <button
            type="button"
            onClick={handleBack}
            className={cn(
              "text-[10px] uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors",
              utoBold.className
            )}
          >
            Back
          </button>
          <h2 className={cn("text-2xl md:text-3xl leading-tight mb-2", utoBlack.className)}>
            Where should we send your match (and your code)?
          </h2>
          <p className={cn("text-sm md:text-base text-black/70 leading-relaxed", utoMedium.className)}>
            Drop your email and we will send your quiz results, your recommended flavor, and a 10% code for your first bag. No hustle‑culture newsletters. We only write when we have something useful to say.
          </p>

          <div className="space-y-4">
            <label className="block text-xs uppercase tracking-[0.2em] text-black/50 font-black">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "w-full h-14 px-6 rounded-full bg-white border border-black/10 text-sm md:text-base outline-none focus:ring-2 focus:ring-red/20 focus:border-red transition-all",
                utoMedium.className
              )}
              placeholder="you@example.com"
            />
          </div>

          <label className="flex items-center gap-3 text-xs md:text-sm text-black/70 cursor-pointer">
            <input
              type="checkbox"
              checked={whatsappOptIn}
              onChange={(e) => setWhatsappOptIn(e.target.checked)}
              className="w-4 h-4 rounded border-black/30"
            />
            <span>Also send me updates or my code over WhatsApp if needed.</span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className={cn(
              "mt-2 h-14 px-10 rounded-full bg-black text-linen text-xs uppercase tracking-[0.3em] font-black hover:bg-red transition-colors disabled:opacity-60",
              utoBold.className
            )}
          >
            {submitting ? 'Sending...' : 'Send me my match'}
          </button>
        </form>
      )}

      {step === 'result' && (
        <div className="space-y-8">
          {renderResultCopy()}
          <p className="text-xs md:text-sm text-black/50 mt-4">
            Skip the quiz next time and go straight to{' '}
            <Link href="/products" className="underline">
              The Goods
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}

