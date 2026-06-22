# GitHub Publish Guide

## 1. 初始化仓库

```bash
git init
git add .
git commit -m "feat: initialize Career Compass AI"
```

## 2. 连接远程仓库

先在 GitHub 上手动创建一个新仓库，例如：

- `career-compass-ai`
- `ai-career-coach`
- `student-growth-agent`

然后执行：

```bash
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## 3. 仓库介绍建议

GitHub 仓库描述可以写成：

> An AI learning and career co-pilot for computer science students.

Topics 建议添加：

- `nextjs`
- `typescript`
- `ai-agent`
- `career-planning`
- `education`
- `openai`

## 4. 首个版本的目标

不要把第一次提交做得过大。首个公开版本只需要证明三件事：

1. 你对问题有真实理解
2. 你有清晰的产品思路
3. 你有把它做成实际产品的能力

## 5. 推荐后续提交方向

1. `feat: add onboarding form for student profile`
2. `feat: add roadmap generation result page`
3. `feat: integrate OpenAI responses API`
4. `feat: add weekly review dashboard`
