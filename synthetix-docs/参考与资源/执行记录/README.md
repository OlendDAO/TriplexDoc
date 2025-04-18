# Triplex 项目执行记录

此目录包含 Triplex 项目开发和部署过程中的所有执行记录文档。这些文档按照项目阶段和任务分类整理，提供了项目进展的完整记录，包括决策理由、技术实现细节、遇到的问题和解决方案等。

## 文档结构

- **执行计划跟踪.md** - 整体执行计划跟踪文档，记录所有任务的状态和进度
- **周报/** - 包含项目周报文档
- **[01-99]-\*.md** - 按执行顺序编号的任务执行记录文档

## 文档更新指南

1. 每完成一个任务，创建或更新相应的执行记录文档
2. 使用模板 `../templates/执行记录模板.md` 作为新文档的起点
3. 在 `执行计划跟踪.md` 中更新相应任务的状态和进度
4. 确保文档包含足够的技术细节和决策理由
5. 将遇到的问题和解决方案详细记录下来，作为知识积累

## 文档命名约定

- 采用 `[编号]-[任务简称].md` 的形式
- 编号为两位数字，从01开始
- 任务简称应简洁明了地表达任务内容

例如：
- `01-环境搭建.md`
- `02-Synthetix分析.md`
- `03-Move语言学习.md`

## 文档交叉引用

文档之间可以通过相对路径进行引用，例如：

```markdown
详见[环境搭建记录](./01-环境搭建.md)
```

## 执行记录审查

所有执行记录文档都应由团队成员审查，确保：
1. 内容准确完整
2. 关键决策有充分记录
3. 问题和解决方案有详细描述
4. 技术实现细节足够详尽 