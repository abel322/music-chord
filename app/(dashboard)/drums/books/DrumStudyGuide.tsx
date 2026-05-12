'use client';

import { useState } from 'react';
import { ChevronDown, Music, Activity, Users, Footprints, Clock } from 'lucide-react';
import { studyPathData } from './studyPathData';

export default function DrumStudyGuide() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [expandedBook, setExpandedBook] = useState<string | null>(null);

  const iconMap: Record<number, any> = {
    1: Music,
    2: Music,
    3: Activity,
    4: Footprints,
    5: Clock,
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
            <Music className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">Guía de Estudio de Batería</h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              Roadmap Profesional: De Principiante a Avanzado
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Sigue este camino estructurado para desarrollar una técnica sólida y convertirte en un baterista completo.
            </p>
          </div>
        </div>
      </div>

      {/* Study Path Sections */}
      <div className="space-y-4">
        {studyPathData.map((section) => {
          const Icon = iconMap[section.id];
          const isExpanded = expandedSection === section.id;

          return (
            <div
              key={section.id}
              className="border-2 rounded-xl overflow-hidden shadow-md transition-all"
              style={{ borderColor: `${section.color}40` }}
            >
              {/* Section Header */}
              <button
                onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                className="w-full p-6 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                style={{
                  background: isExpanded
                    ? `linear-gradient(135deg, ${section.color}15 0%, ${section.color}05 100%)`
                    : `linear-gradient(135deg, ${section.color}10 0%, ${section.color}05 100%)`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-3 flex-shrink-0"
                  style={{
                    backgroundColor: `${section.color}15`,
                    borderColor: section.color,
                    borderWidth: '3px',
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: section.color }} />
                </div>

                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold mb-1" style={{ color: section.color }}>
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{section.subtitle}</p>
                </div>

                <div
                  className="px-4 py-2 rounded-full text-white font-bold"
                  style={{ backgroundColor: section.color }}
                >
                  Paso {section.id}
                </div>

                <ChevronDown
                  className={`w-8 h-8 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  style={{ color: section.color }}
                />
              </button>

              {/* Section Content */}
              {isExpanded && (
                <div className="p-6 bg-white dark:bg-gray-900">
                  {/* Description */}
                  <div
                    className="p-4 mb-6 rounded-lg border-l-4"
                    style={{
                      backgroundColor: `${section.color}08`,
                      borderColor: section.color,
                    }}
                  >
                    <p className="font-medium">{section.description}</p>
                  </div>

                  {/* Books or Exercises */}
                  {section.books ? (
                    <div className="space-y-4">
                      {section.books.map((book: any) => {
                        const isBookExpanded = expandedBook === book.id;

                        return (
                          <div
                            key={book.id}
                            className="border-2 rounded-lg overflow-hidden"
                            style={{ borderColor: `${section.color}30` }}
                          >
                            <button
                              onClick={() => setExpandedBook(isBookExpanded ? null : book.id)}
                              className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                              style={{
                                background: `linear-gradient(90deg, ${section.color}08 0%, ${section.color}03 100%)`,
                              }}
                            >
                              <h4 className="text-xl font-bold mb-1" style={{ color: section.color }}>
                                📚 {book.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{book.subtitle}</p>
                            </button>

                            {isBookExpanded && (
                              <div className="p-6" style={{ backgroundColor: `${section.color}02` }}>
                                <div
                                  className="p-4 mb-6 rounded-lg border-l-4"
                                  style={{
                                    backgroundColor: `${section.color}08`,
                                    borderColor: section.color,
                                  }}
                                >
                                  <p className="font-medium">{book.description}</p>
                                </div>

                                {/* Render book content based on structure */}
                                {book.tiers && <TiersContent tiers={book.tiers} color={section.color} />}
                                {book.levels && <LevelsContent levels={book.levels} color={section.color} />}
                                {book.exercises && <ExercisesContent exercises={book.exercises} color={section.color} />}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : section.content ? (
                    /* Render custom content for Groove y Tiempo */
                    <GrooveTimekeepingContent content={section.content} color={section.color} exercises={section.exercises} />
                  ) : section.exercises ? (
                    <ExercisesContent exercises={section.exercises} color={section.color} />
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Practice Schedule */}
      <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-2 border-green-200 dark:border-green-800 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">
          📅 Rutina de Práctica Sugerida (60 minutos)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { time: '10 min', activity: 'Calentamiento con Single y Double Strokes', color: 'blue' },
            { time: '15 min', activity: 'Rudimentos (Paradiddles, Flams, Drags)', color: 'purple' },
            { time: '15 min', activity: 'Independencia y Coordinación', color: 'green' },
            { time: '10 min', activity: 'Control de Pies', color: 'orange' },
            { time: '10 min', activity: 'Groove y Aplicación Musical', color: 'red' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className={`text-2xl font-bold mb-2 text-${item.color}-600`}>{item.time}</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{item.activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Tiers Content Component
function TiersContent({ tiers, color }: { tiers: any[]; color: string }) {
  return (
    <div className="space-y-6">
      {tiers.map((tier: any, idx: number) => (
        <div key={idx} className="border-2 rounded-lg overflow-hidden" style={{ borderColor: tier.color }}>
          <div
            className="p-4 border-b-2"
            style={{
              background: `linear-gradient(135deg, ${tier.color}15 0%, ${tier.color}05 100%)`,
              borderColor: tier.color,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-full text-white font-bold text-sm"
                style={{ backgroundColor: tier.color }}
              >
                {tier.tier}
              </span>
              <h5 className="text-lg font-bold" style={{ color: tier.color }}>
                {tier.level}
              </h5>
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {tier.sections.map((item: any, i: number) => (
              <div
                key={i}
                className="p-3 rounded-lg border transition-all hover:shadow-md hover:-translate-y-1"
                style={{
                  backgroundColor: `${tier.color}05`,
                  borderColor: `${tier.color}20`,
                }}
              >
                <h6 className="font-bold text-sm mb-1">{item.name}</h6>
                <p className="text-xs font-bold mb-1" style={{ color: tier.color }}>
                  {item.pages}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Levels Content Component
function LevelsContent({ levels, color }: { levels: any[]; color: string }) {
  return (
    <div className="space-y-6">
      {levels.map((level: any, idx: number) => (
        <div key={idx} className="border-2 rounded-lg overflow-hidden" style={{ borderColor: level.color }}>
          <div
            className="p-4 border-b-2"
            style={{
              background: `linear-gradient(135deg, ${level.color}15 0%, ${level.color}05 100%)`,
              borderColor: level.color,
            }}
          >
            <h5 className="text-lg font-bold mb-1" style={{ color: level.color }}>
              {level.level}
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">{level.subtitle}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{level.description}</p>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {level.lessons.map((lesson: any, i: number) => (
              <div
                key={i}
                className="p-3 rounded-lg border transition-all hover:shadow-md hover:-translate-y-1"
                style={{
                  backgroundColor: `${level.color}05`,
                  borderColor: `${level.color}20`,
                }}
              >
                <h6 className="font-bold text-sm mb-1">{lesson.name}</h6>
                <p className="text-xs font-bold mb-1" style={{ color: level.color }}>
                  {lesson.pages}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{lesson.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Exercises Content Component
function ExercisesContent({ exercises, color }: { exercises: any[]; color: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {exercises.map((exercise: any, idx: number) => (
        <div
          key={idx}
          className="p-6 bg-white dark:bg-gray-800 border rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
          style={{ borderColor: `${color}30` }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: color }} />
            <h6 className="text-lg font-bold">{exercise.name}</h6>
          </div>

          <div
            className="font-mono text-lg p-3 rounded-lg text-center font-bold mb-3"
            style={{
              backgroundColor: '#1a1a1a',
              color: color,
            }}
          >
            {exercise.pattern}
          </div>

          <div className="p-3 rounded-lg mb-3" style={{ backgroundColor: `${color}10` }}>
            <p className="text-xs font-bold mb-1" style={{ color: color }}>
              ENFOQUE:
            </p>
            <p className="text-sm font-medium">{exercise.focus}</p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{exercise.description}</p>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" style={{ color: color }} />
            <span className="text-xs font-bold">BPM: {exercise.bpm}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Groove and Timekeeping Content Component
function GrooveTimekeepingContent({ content, color, exercises }: { content: any; color: string; exercises: any[] }) {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div
        className="p-6 rounded-lg border-l-4"
        style={{
          backgroundColor: `${color}08`,
          borderColor: color,
        }}
      >
        <h4 className="text-xl font-bold mb-3" style={{ color: color }}>
          Groove vs. Tiempo: Dos Caras de la Misma Moneda
        </h4>
        <p className="text-gray-700 dark:text-gray-300">{content.introduction}</p>
      </div>

      {/* Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.concepts.map((concept: any, idx: number) => (
          <div
            key={idx}
            className="border-2 rounded-lg overflow-hidden"
            style={{ borderColor: `${color}30` }}
          >
            <div className="p-4 border-b-2" style={{ backgroundColor: `${color}10`, borderColor: `${color}30` }}>
              <h5 className="text-xl font-bold mb-1" style={{ color: color }}>
                {concept.title}
              </h5>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{concept.subtitle}</p>
            </div>

            {/* Image */}
            <img
              src={concept.image}
              alt={concept.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{concept.description}</p>

              <div className="space-y-3">
                {concept.points.map((point: any, i: number) => (
                  <div key={i} className="p-3 rounded-lg" style={{ backgroundColor: `${color}05` }}>
                    <p className="text-xs font-bold mb-1" style={{ color: color }}>
                      {point.label}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{point.text}</p>
                    {point.subtypes && (
                      <div className="mt-2 ml-4 space-y-2">
                        {point.subtypes.map((subtype: any, j: number) => (
                          <div key={j}>
                            <p className="text-xs font-bold text-gray-700 dark:text-gray-300">
                              • {subtype.name}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 ml-3">
                              {subtype.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="border-2 rounded-lg overflow-hidden" style={{ borderColor: `${color}30` }}>
        <div className="p-4 border-b-2" style={{ backgroundColor: `${color}10`, borderColor: `${color}30` }}>
          <h5 className="text-xl font-bold" style={{ color: color }}>
            {content.comparison.title}
          </h5>
        </div>

        {/* Image */}
        <img
          src={content.comparison.image}
          alt="Comparación"
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          {/* Table */}
          <div className="overflow-x-auto mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b-2" style={{ borderColor: `${color}30` }}>
                  <th className="text-left p-3 font-bold">Concepto</th>
                  <th className="text-left p-3 font-bold">Pregunta que responde</th>
                  <th className="text-left p-3 font-bold">Se mide con...</th>
                  <th className="text-left p-3 font-bold">Objetivo</th>
                </tr>
              </thead>
              <tbody>
                {content.comparison.table.map((row: any, idx: number) => (
                  <tr key={idx} className="border-b" style={{ borderColor: `${color}20` }}>
                    <td className="p-3">
                      <span
                        className="px-3 py-1 rounded-full text-white font-bold text-sm"
                        style={{ backgroundColor: idx === 0 ? '#3b82f6' : '#f59e0b' }}
                      >
                        {row.concept}
                      </span>
                    </td>
                    <td className="p-3 text-sm">{row.question}</td>
                    <td className="p-3 text-sm">{row.measurement}</td>
                    <td className="p-3 text-sm">{row.objective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Example */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: `${color}10` }}>
            <p className="text-sm font-bold mb-2">Un ejemplo famoso:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{content.comparison.example}</p>
          </div>
        </div>
      </div>

      {/* Development Methods */}
      <div className="border-2 rounded-lg overflow-hidden" style={{ borderColor: `${color}30` }}>
        <div className="p-4 border-b-2" style={{ backgroundColor: `${color}10`, borderColor: `${color}30` }}>
          <h5 className="text-xl font-bold" style={{ color: color }}>
            {content.development.title}
          </h5>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {content.development.methods.map((method: any, idx: number) => (
              <div
                key={idx}
                className="p-4 rounded-lg border-2"
                style={{
                  backgroundColor: 'white',
                  borderColor: idx === 0 ? '#3b82f6' : '#f59e0b',
                }}
              >
                <h6
                  className="text-lg font-bold mb-2"
                  style={{ color: idx === 0 ? '#3b82f6' : '#f59e0b' }}
                >
                  {method.skill}
                </h6>
                <p className="text-sm text-gray-700 dark:text-gray-300">{method.practice}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: `${color}10` }}>
            <p className="text-lg italic mb-2 text-gray-800 dark:text-gray-200">
              "{content.development.quote.split(': "')[1].replace('"', '')}"
            </p>
            <p className="text-sm font-bold" style={{ color: color }}>
              — Jeff Porcaro
            </p>
          </div>
        </div>
      </div>

      {/* Exercises */}
      {exercises && exercises.length > 0 && (
        <div>
          <h5 className="text-xl font-bold mb-4" style={{ color: color }}>
            Ejercicios Prácticos
          </h5>
          <ExercisesContent exercises={exercises} color={color} />
        </div>
      )}
    </div>
  );
}

