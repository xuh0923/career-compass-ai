const advantages = [
  {
    title: "持续陪跑，而不是一次性交付",
    description:
      "培训机构卖的是课程包，我们做的是持续更新的成长导航。它会记住你的目标岗位、薄弱技能、项目进度和投递反馈。",
  },
  {
    title: "以结果为中心，而不是只推荐资料",
    description:
      "每一轮对话都要落到行动：今天学什么、这周做什么项目、简历怎么改、下一次面试该怎么准备。",
  },
  {
    title: "更懂计算机学生的真实困境",
    description:
      "不是泛泛职业规划，而是围绕八股、项目、算法、GitHub、实习投递和岗位选择做判断。",
  },
  {
    title: "低成本、透明、不过度贩卖焦虑",
    description:
      "路线、资料来源和能力差距都可以被解释，不靠信息差制造紧张感，而是让用户看到自己在稳步变强。",
  },
];

const modules = [
  "目标诊断：输入年级、方向、基础、时间预算，生成学习与求职双线规划",
  "路线生成：拆成 30 天、90 天、180 天的阶段目标和每周任务",
  "资料整理：结合公开课、文档、题单、博客和论文，自动形成学习包",
  "项目推进：把想法变成能发 GitHub 的项目任务清单和里程碑",
  "求职助手：简历优化、岗位匹配、投递节奏、面试复盘、模拟问答",
  "周报复盘：记录完成度、识别拖延点，自动调整下周计划",
];

const differentiators = [
  "培训班关注成交率，我们关注长期成长和可验证产出。",
  "通用 AI 聊天是即时回答，我们强调长期记忆与连续规划。",
  "资料平台只负责收集内容，我们负责诊断、排序、执行和复盘。",
  "职业测评偏静态，我们要把规划落到每天的具体任务和 GitHub 作品集。",
];

const loop = [
  "了解用户目标：想冲前端、后端、算法、测试、数据还是保研/考公转向",
  "诊断能力差距：课程基础、算法水平、项目经历、英语、表达和时间投入",
  "生成行动计划：学习路线、项目建议、网课资源、练习题与时间表",
  "监督执行：每日提醒、阶段检查、卡点答疑、模拟面试",
  "沉淀成果：简历版本、项目文档、题库总结、复盘记录和 GitHub 输出",
];

const githubChecklist = [
  "清晰的 README，说明项目目标、用户价值、MVP 和技术路线",
  "docs 文档，把产品定位、差异化和阶段计划写清楚",
  "能跑起来的前端壳子，哪怕先只有 landing page 和模块占位",
  "后续接 OpenAI、数据库、认证系统时保持模块化目录结构",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,179,101,0.16),_transparent_32%),radial-gradient(circle_at_80%_15%,_rgba(126,211,153,0.12),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.04),_transparent_45%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
              Career Compass AI
            </p>
            <p className="mt-2 max-w-xl text-sm text-white/70">
              一个面向计算机大学生的 AI 学习与求职共驾系统。
            </p>
          </div>
          <a
            href="#github"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/82 transition hover:border-[var(--color-accent)] hover:text-white"
          >
            GitHub Ready
          </a>
        </header>

        <div className="grid gap-14 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:py-20">
          <div>
            <span className="inline-flex rounded-full border border-[var(--color-accent)]/35 bg-[var(--color-accent)]/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
              For CS students with job anxiety
            </span>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              把求职焦虑，
              <br />
              变成可执行的成长路线。
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              这不是又一个卖课网站，而是一个会长期记住你、理解你、督促你、帮助你把学习成果真正沉淀成项目和 offer
              竞争力的 AI agent。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#advantages"
                className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-accent-strong)]"
              >
                看项目优势
              </a>
              <a
                href="#mvp"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/85 transition hover:border-white/35 hover:text-white"
              >
                看 MVP 范围
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-mint)]">
              product thesis
            </p>
            <div className="mt-6 grid gap-4">
              <article className="rounded-3xl bg-black/20 p-5">
                <p className="text-sm text-white/56">核心用户</p>
                <p className="mt-2 text-xl font-medium text-white">
                  大二到大四的计算机相关学生
                </p>
              </article>
              <article className="rounded-3xl bg-black/20 p-5">
                <p className="text-sm text-white/56">核心承诺</p>
                <p className="mt-2 text-xl font-medium text-white">
                  帮用户从迷茫走到可执行，再从执行走到可证明
                </p>
              </article>
              <article className="rounded-3xl bg-black/20 p-5">
                <p className="text-sm text-white/56">第一阶段结果</p>
                <p className="mt-2 text-xl font-medium text-white">
                  学习路线、项目清单、求职节奏、GitHub 输出
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/10 py-6 text-sm text-white/65 sm:grid-cols-3">
          <p>关键词：学习规划 / 求职规划 / 项目陪跑 / AI agent</p>
          <p>差异化：长期记忆、行动闭环、学生语境、低焦虑感</p>
          <p>落地方向：先做 MVP，再接入 OpenAI、数据存储和用户系统</p>
        </div>
      </section>

      <section
        id="advantages"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
            why this can win
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            和培训机构相比，我们真正的优势不是“课更多”，而是“更懂你接下来该做什么”。
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {advantages.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6"
            >
              <h3 className="text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/68">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-[var(--color-mint)]/25 bg-[var(--color-mint)]/8 p-7">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-mint)]">
            positioning rule
          </p>
          <ul className="mt-5 grid gap-3 text-base leading-7 text-white/78">
            {differentiators.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="mvp"
        className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
            mvp modules
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
            第一版先做对你最有价值的闭环
          </h2>
          <div className="mt-8 grid gap-4">
            {modules.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl border border-white/8 bg-black/20 p-4"
              >
                <span className="mt-1 font-mono text-sm text-[var(--color-accent)]">
                  0{index + 1}
                </span>
                <p className="text-white/76">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-mint)]">
              agent loop
            </p>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
              这个产品最关键的不是聊天，而是闭环。
            </h3>
            <div className="mt-7 space-y-4">
              {loop.map((item, index) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/8 bg-black/18 px-5 py-4"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/46">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-white/76">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article
            id="github"
            className="rounded-[2rem] border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/8 p-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
              github publish
            </p>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
              一个值得发 GitHub 的项目，至少要先像个项目。
            </h3>
            <div className="mt-6 grid gap-3 text-white/76">
              {githubChecklist.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
