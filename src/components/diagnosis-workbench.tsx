"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import {
  blockerOptions,
  defaultDiagnosisInput,
  deadlineOptions,
  generateDiagnosis,
  learningStyleOptions,
  priorityOptions,
  studentYearOptions,
  targetRoleOptions,
  weeklyHourOptions,
  type Blocker,
  type DiagnosisInput,
  type SkillRatings,
} from "@/lib/diagnosis";

const skillCards: Array<{
  key: keyof SkillRatings;
  label: string;
  description: string;
}> = [
  {
    key: "programming",
    label: "编程实现",
    description: "你独立把一个功能做出来的把握感。",
  },
  {
    key: "fundamentals",
    label: "基础知识",
    description: "操作系统、网络、数据库、浏览器原理等认知。",
  },
  {
    key: "algorithms",
    label: "算法题感",
    description: "高频题型是否能稳定做出并讲清思路。",
  },
  {
    key: "projects",
    label: "项目经历",
    description: "有没有能写进简历并完整讲清楚的项目。",
  },
  {
    key: "interviewing",
    label: "面试表达",
    description: "能否把做过的事讲成结构化故事。",
  },
  {
    key: "english",
    label: "英文阅读",
    description: "能否顺畅看官方文档、issue 和英文教程。",
  },
];

function OptionGrid<T extends string | number>({
  options,
  value,
  onChange,
}: {
  options: Array<{ value: T; label: string }>;
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <button
            key={String(option.value)}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-3xl border px-4 py-4 text-left transition ${
              selected
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/14 text-white"
                : "border-white/10 bg-white/[0.04] text-white/74 hover:border-white/25 hover:text-white"
            }`}
          >
            <span className="block text-sm font-medium">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function RatingField({
  label,
  description,
  value,
  onChange,
}: {
  label: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-white">{label}</h3>
          <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
        </div>
        <span className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/12 px-3 py-1 font-mono text-xs text-[var(--color-accent)]">
          {value}/5
        </span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map((score) => {
          const selected = score === value;

          return (
            <button
              key={score}
              type="button"
              onClick={() => onChange(score)}
              className={`rounded-2xl px-3 py-3 text-sm transition ${
                selected
                  ? "bg-[var(--color-mint)] text-[var(--color-ink)]"
                  : "bg-black/24 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {score}
            </button>
          );
        })}
      </div>
    </article>
  );
}

export function DiagnosisWorkbench() {
  const [form, setForm] = useState<DiagnosisInput>(defaultDiagnosisInput);
  const [result, setResult] = useState(() => generateDiagnosis(defaultDiagnosisInput));
  const [isPending, startTransition] = useTransition();

  function updateField<Key extends keyof DiagnosisInput>(
    key: Key,
    value: DiagnosisInput[Key],
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function updateRating(key: keyof SkillRatings, value: number) {
    setForm((current) => ({
      ...current,
      ratings: {
        ...current.ratings,
        [key]: value,
      },
    }));
  }

  function toggleBlocker(blocker: Blocker) {
    setForm((current) => ({
      ...current,
      blockers: current.blockers.includes(blocker)
        ? current.blockers.filter((item) => item !== blocker)
        : [...current.blockers, blocker],
    }));
  }

  function handleGenerate() {
    startTransition(() => {
      setResult(generateDiagnosis(form));
    });
  }

  function handleReset() {
    setForm(defaultDiagnosisInput);
    startTransition(() => {
      setResult(generateDiagnosis(defaultDiagnosisInput));
    });
  }

  return (
    <main className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(239,182,97,0.14),_transparent_32%),radial-gradient(circle_at_80%_10%,_rgba(155,230,180,0.12),_transparent_24%)]" />

      <section className="relative mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
              MVP 01 / Student Diagnosis
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              先把你的目标、能力差距和时间预算说清楚，
              <br />
              再谈学习路线。
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
              这是第一版可交互原型。它先用规则引擎帮你完成目标诊断和路线生成，后面我们再把这里接到真正的 AI
              agent、资料检索和长期记忆系统。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/12 px-5 py-3 text-sm text-white/78 transition hover:border-white/28 hover:text-white"
            >
              返回首页
            </Link>
            <button
              type="button"
              onClick={handleGenerate}
              className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-accent-strong)]"
            >
              {isPending ? "生成中..." : "生成我的路线"}
            </button>
          </div>
        </header>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <section className="space-y-6">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    basic profile
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">你的目标画像</h2>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/72 transition hover:border-white/24 hover:text-white"
                >
                  恢复默认
                </button>
              </div>

              <div className="mt-6 space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm text-white/62">怎么称呼你</span>
                  <input
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[var(--color-accent)]"
                    placeholder="比如：小许 / 同学 / 我的名字"
                  />
                </label>

                <div>
                  <span className="mb-2 block text-sm text-white/62">当前阶段</span>
                  <OptionGrid
                    options={studentYearOptions}
                    value={form.year}
                    onChange={(value) => updateField("year", value)}
                  />
                </div>

                <div>
                  <span className="mb-2 block text-sm text-white/62">目标岗位方向</span>
                  <OptionGrid
                    options={targetRoleOptions}
                    value={form.targetRole}
                    onChange={(value) => updateField("targetRole", value)}
                  />
                </div>

                <div>
                  <span className="mb-2 block text-sm text-white/62">当前优先级</span>
                  <OptionGrid
                    options={priorityOptions}
                    value={form.priority}
                    onChange={(value) => updateField("priority", value)}
                  />
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-mint)]">
                rhythm & pressure
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">时间和学习方式</h2>

              <div className="mt-6 space-y-5">
                <div>
                  <span className="mb-2 block text-sm text-white/62">每周能投入多少时间</span>
                  <OptionGrid
                    options={weeklyHourOptions}
                    value={form.weeklyHours}
                    onChange={(value) => updateField("weeklyHours", value)}
                  />
                </div>

                <div>
                  <span className="mb-2 block text-sm text-white/62">距离真正投递还有多久</span>
                  <OptionGrid
                    options={deadlineOptions}
                    value={form.monthsToDeadline}
                    onChange={(value) => updateField("monthsToDeadline", value)}
                  />
                </div>

                <div>
                  <span className="mb-2 block text-sm text-white/62">你更适合怎么学</span>
                  <OptionGrid
                    options={learningStyleOptions}
                    value={form.learningStyle}
                    onChange={(value) => updateField("learningStyle", value)}
                  />
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                blockers
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">你现在最卡在哪里</h2>
              <div className="mt-6 grid gap-3">
                {blockerOptions.map((option) => {
                  const selected = form.blockers.includes(option.value);

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => toggleBlocker(option.value)}
                      className={`rounded-3xl border px-4 py-4 text-left transition ${
                        selected
                          ? "border-[var(--color-mint)] bg-[var(--color-mint)]/12 text-white"
                          : "border-white/10 bg-black/16 text-white/70 hover:border-white/24 hover:text-white"
                      }`}
                    >
                      <span className="text-sm font-medium">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-mint)]">
                self rating
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">给现状打个分</h2>
              <div className="mt-6 grid gap-4">
                {skillCards.map((card) => (
                  <RatingField
                    key={card.key}
                    label={card.label}
                    description={card.description}
                    value={form.ratings[card.key]}
                    onChange={(value) => updateRating(card.key, value)}
                  />
                ))}
              </div>
            </article>
          </section>

          <section className="space-y-6">
            <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(239,182,97,0.12),rgba(255,255,255,0.03))] p-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    diagnosis
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {result.headline}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
                    {result.summary}
                  </p>
                </div>

                <div className="min-w-[180px] rounded-[1.75rem] border border-white/12 bg-black/22 p-5 text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/52">
                    readiness
                  </p>
                  <p className="mt-3 text-5xl font-semibold tracking-[-0.05em] text-white">
                    {result.readinessScore}
                  </p>
                  <p className="mt-2 text-sm text-white/58">当前可执行指数</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 xl:grid-cols-3">
                {result.notes.map((note) => (
                  <div
                    key={note}
                    className="rounded-3xl border border-white/10 bg-black/18 p-4 text-sm leading-6 text-white/72"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-mint)]">
                  strengths
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">你的可用优势</h3>
                <div className="mt-5 grid gap-3">
                  {result.strengths.map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-white/8 bg-black/16 p-4 text-sm leading-6 text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  risks
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">最该警惕的风险</h3>
                <div className="mt-5 grid gap-3">
                  {result.risks.map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-white/8 bg-black/16 p-4 text-sm leading-6 text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                focus areas
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">接下来最值钱的 3 件事</h3>
              <div className="mt-6 grid gap-4">
                {result.focusAreas.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-black/18 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 font-mono text-xs text-[var(--color-ink)]">
                        0{index + 1}
                      </span>
                      <h4 className="text-lg font-medium text-white">{item.title}</h4>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/66">{item.reason}</p>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-mint)]">
                      行动建议：{item.action}
                    </p>
                  </article>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-mint)]">
                roadmap
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">你的 30 / 60 / 90 天主线</h3>
              <div className="mt-6 grid gap-4">
                {result.roadmap.map((phase) => (
                  <article
                    key={phase.label}
                    className="rounded-[1.75rem] border border-white/10 bg-black/18 p-5"
                  >
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                          {phase.label}
                        </p>
                        <h4 className="mt-2 text-xl font-medium text-white">{phase.title}</h4>
                      </div>
                      <p className="max-w-xl text-sm leading-6 text-white/62">{phase.goal}</p>
                    </div>
                    <div className="mt-5 grid gap-3">
                      {phase.tasks.map((task) => (
                        <div
                          key={task}
                          className="rounded-3xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/72"
                        >
                          {task}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  portfolio
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">推荐你优先做的项目</h3>
                <div className="mt-6 grid gap-4">
                  {result.projects.map((project) => (
                    <article
                      key={project.name}
                      className="rounded-[1.75rem] border border-white/10 bg-black/18 p-5"
                    >
                      <h4 className="text-lg font-medium text-white">{project.name}</h4>
                      <p className="mt-3 text-sm leading-6 text-white/64">{project.why}</p>
                      <div className="mt-4 grid gap-3">
                        {project.milestones.map((milestone) => (
                          <div
                            key={milestone}
                            className="rounded-3xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/72"
                          >
                            {milestone}
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </article>

              <div className="space-y-6">
                <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-mint)]">
                    first week
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">未来 7 天就做这些</h3>
                  <div className="mt-6 grid gap-3">
                    {result.firstWeekChecklist.map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/8 bg-black/18 px-4 py-3 text-sm leading-6 text-white/72"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    resources
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">下一步资料策略</h3>
                  <div className="mt-6 grid gap-4">
                    {result.resources.map((resource) => (
                      <article
                        key={resource.title}
                        className="rounded-[1.75rem] border border-white/10 bg-black/18 p-5"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="text-base font-medium text-white">{resource.title}</h4>
                          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/54">
                            {resource.type}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-white/64">{resource.reason}</p>
                      </article>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
