# Career Compass AI

一个面向计算机大学生的 AI 学习与求职共驾系统。

它的目标不是卖一套“标准课程”，而是持续理解用户的目标岗位、当前能力、时间预算和项目进度，帮助用户把迷茫拆成可执行的学习路线、项目路线和求职路线。

## 为什么做这个项目

很多大学生的痛点不是“完全没有资料”，而是：

- 知道自己焦虑，但不知道先补哪一块
- 收藏了很多网课和面经，但缺少排序和执行
- 想找工作，却说不清自己适合什么岗位
- 学了很多内容，最后没有沉淀成项目、简历和 GitHub 输出

培训机构提供的是课程包，通用 AI 提供的是即时回答，而这个项目想做的是一个长期陪跑、能记住上下文、能推进执行的 agent。

## 项目定位

- 核心用户：大二到大四的计算机相关学生
- 核心场景：学习路线规划、职业规划、项目推进、求职准备
- 核心承诺：帮用户从迷茫走到可执行，再从执行走到可证明

更完整的定位分析见 [docs/product-positioning.md](docs/product-positioning.md)。

## 我们和培训机构的差异

1. 个性化持续陪跑
根据用户目标岗位、基础能力、项目经历和时间预算动态调整计划，而不是统一卖一套课。

2. 以结果为中心
不仅推荐资料，还要把输出落到每周任务、项目作品、简历优化、面试准备和投递节奏。

3. 低成本和更透明
不过度贩卖焦虑，尽量让资料来源、能力差距和行动建议都可解释。

4. 更懂计算机学生
围绕算法、八股、项目、GitHub、实习和校招流程来设计产品，而不是泛职业咨询。

## MVP 范围

第一版先做一个能闭环的最小产品：

1. 用户目标诊断
输入年级、目标方向、基础水平、每天可投入时间。

2. 学习与求职双线规划
生成 30 天、90 天、180 天路线图，并给出每周任务。

3. 资料整理
结合文档、公开视频、题单和文章，为用户生成学习包。

4. 项目推进
把“我想做项目提升简历”拆成明确的 GitHub 任务清单。

5. 求职助手
支持岗位匹配、简历建议、投递节奏、模拟面试和复盘。

6. 周报与复盘
记录完成度，发现卡点，并自动调整下一周计划。

详细里程碑见 [docs/mvp-roadmap.md](docs/mvp-roadmap.md)。

## 技术路线

- 前端：Next.js 16 + React 19 + TypeScript
- 样式：Tailwind CSS 4
- AI 能力规划：OpenAI Responses API + file search + web search
- 后续可扩展：Supabase/Postgres、用户认证、任务调度、简历解析、面试记录

## 当前仓库内容

- 一个用于展示产品定位的 landing page
- 产品定位文档
- MVP 路线图文档
- GitHub 发布说明

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 查看页面。

## GitHub 发布

如果你要把这个项目上传到 GitHub，可以按下面步骤执行：

```bash
git init
git add .
git commit -m "feat: initialize Career Compass AI"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

更详细的说明见 [docs/github-publish.md](docs/github-publish.md)。

## 下一步建议

1. 先做用户 onboarding 表单，收集目标方向、基础和时间预算。
2. 接入 OpenAI，生成第一版学习/求职路线。
3. 增加任务看板和周报复盘页，把计划真正闭环起来。
4. 再考虑上传资料、语音教学和模拟面试。
