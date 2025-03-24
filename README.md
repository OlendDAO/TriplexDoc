# Triplex协议

Triplex是一个将Synthetix V3从以太坊迁移到Aptos区块链的项目，实现合成资产交易和衍生品协议。

## 项目概述

Triplex协议旨在利用Aptos的Move语言的安全特性和高性能架构，重新实现Synthetix V3的核心功能。项目包括智能合约和TypeScript SDK，支持以下主要功能：

- 合成资产的铸造和交易
- 去中心化衍生品交易
- 流动性池和抵押机制
- 预言机价格反馈
- 去中心化治理

## 技术架构

项目分为两个主要部分：

1. **智能合约**：使用Move语言开发，部署在Aptos区块链上
2. **SDK**：使用TypeScript开发，提供对合约的访问接口

### 主要模块

- **资产模块**：管理合成资产的定义和操作
- **预言机模块**：提供价格数据和聚合
- **池模块**：管理流动性池和抵押品
- **市场模块**：处理资产交易和衍生品
- **金库模块**：管理资产存储和利率
- **奖励模块**：计算和分配协议奖励
- **治理模块**：处理协议更新和参数调整

## 开发进度

项目目前处于前期准备阶段，完成了以下工作：

- 设置Aptos开发环境
- 学习Move语言和资源模型
- 创建基本示例和文档
- 分析Synthetix V3代码库

查看[执行计划跟踪](./docs/execution/执行计划跟踪.md)获取详细的项目进度。

## 文档结构

- `/docs`：项目文档
  - `/docs/execution`：执行记录和进度跟踪
  - `/docs/planning`：规划文档
  - `/docs/modules`：模块说明文档
  - `/docs/examples`：学习示例和教程
- `/sources`：Move源代码
  - `/sources/examples`：示例代码
  - `/sources/modules`：项目模块代码
- `/sdk`：TypeScript SDK
- `/tests`：测试代码

## 开发准备

### 环境设置

1. 安装Aptos CLI：
```bash
curl -fsSL "https://aptos.dev/scripts/install_cli.py" | python3
```

2. 验证安装：
```bash
aptos --version
```

3. 创建Move项目：
```bash
aptos move init --name triplex
```

### 学习资源

- [Move语言学习](./docs/execution/03-Move语言学习.md)
- [Move资源模式示例](./docs/examples/move-resource-patterns.md)

## 贡献

我们欢迎社区贡献！如果您有兴趣参与项目开发，请参考[贡献指南](./CONTRIBUTING.md)。

## 许可证

本项目采用[BSD 3-Clause许可证](./LICENSE)。 