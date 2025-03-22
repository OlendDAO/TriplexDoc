import { ArrowRightIcon } from '@components/icons'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import { MdxIcon } from 'nextra/icons'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'
import styles from './page.module.css'
import './page.css'
import type { FC } from 'react'

export const metadata: Metadata = {
  description:
    'Triplex是基于Aptos区块链的高性能去中心化交易协议，提供永续合约、现货交易、流动性池和Oracle系统，利用Move资源模型确保交易安全与高效。'
}

const IndexPage: FC = () => {
  return (
    <div className="home-content">
      {/* Hero Section */}
      <div className="content-container relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url(/assets/grid-pattern.svg)] -z-10"></div>
        
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          打造 Web3 金融的未来
        </h1>
        <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
          Triplex 是基于 Aptos 区块链的高性能去中心化交易协议，为 DeFi 生态提供全方位的交易解决方案
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Link className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 text-lg transition-colors text-center" href="/architecturalanalysis">
            开始探索
          </Link>
          <Link className="rounded-lg border border-gray-300 hover:border-gray-400 font-medium px-8 py-3 text-lg transition-colors text-center" href="/architecturalanalysis/markets">
            了解市场系统
          </Link>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="animate-bounce bg-white dark:bg-gray-800 p-2 w-10 h-10 ring-1 ring-gray-200 dark:ring-gray-700 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="content-container px-6 md:px-12">
        {/* 代码示例展示 */}
        <div className="mb-24 mt-16">
          <h2 className="text-center text-3xl font-bold mb-3">利用 Move 构建安全高效的金融合约</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            使用 Move 语言的强类型和资源模型创建安全、高性能的去中心化金融应用
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 max-w-3xl mx-auto shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-t-lg mb-4 -mx-6 -mt-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">synthetic_asset.move</div>
              <div></div>
            </div>
            <div className="text-sm font-mono">
              <pre className="language-move">
                <code>
{`module triplex::synthetic_asset {
  use std::signer;
  use aptos_framework::account;
  use aptos_std::table::{Self, Table};
  
  struct SyntheticAsset has key {
      asset_code: vector<u8>,
      oracle_id: u64,
      collateral_ratio: u64,
      mint_paused: bool,
  }
  
  struct UserPosition has key {
      collateral: Table<vector<u8>, u64>,
      minted: Table<vector<u8>, u64>,
  }
  
  public fun register_asset(
      admin: &signer,
      asset_code: vector<u8>,
      oracle_id: u64,
      initial_ratio: u64
  ) {
      move_to(admin, SyntheticAsset {
          asset_code,
          oracle_id,
          collateral_ratio: initial_ratio,
          mint_paused: false,
      });
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* 核心功能特性 */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-bold mb-3">探索 Triplex 区块链特性</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            利用 Aptos 区块链的独特优势构建下一代去中心化金融应用
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">永续合约市场</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">支持最高20倍杠杆，配备动态调整的风险参数和多层次清算机制，确保市场稳定运行。</p>
              <Link href="/architecturalanalysis/markets/perpetual" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                了解更多 <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">去中心化 Oracle</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">多源价格聚合技术，结合加权平均算法和偏差检测机制，确保链上价格数据的真实性与可靠性。</p>
              <Link href="/architecturalanalysis/markets/oracle" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                了解更多 <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">资源安全模型</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">充分发挥 Move 语言的资源安全性，实现形式化验证和不变量保证，防止资产盗用与漏洞利用。</p>
              <Link href="/architecturalanalysis/security" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                了解更多 <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Triplex 工具链 */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-bold mb-3">Triplex 开发工具让 Web3 开发更简单</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            全面的开发工具链和SDK支持，加速去中心化应用的开发和部署
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center">
                <Image src={docsCard} alt="文档" className="w-full mb-6 dark:hidden rounded-lg" />
                <Image src={docsCardDark} alt="文档 (深色)" className="w-full mb-6 hidden dark:block rounded-lg" />
                <h3 className="text-xl font-bold mb-2">文档搜索</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">使用我们的文档搜索功能快速找到您需要的信息，支持关键词和自然语言查询</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center">
                <div className="relative w-full mb-6 aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover dark:hidden">
                    <source src="/assets/search.mp4" type="video/mp4" />
                  </video>
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover hidden dark:block">
                    <source src="/assets/search-dark.mp4" type="video/mp4" />
                  </video>
                </div>
                <h3 className="text-xl font-bold mb-2">流动性池设计</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">高效的资本利用率和多层级风险隔离机制，确保流动性提供者获得最佳收益</p>
              </div>
            </div>
          </div>
        </div>

        {/* 区块链特性卡片 */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-bold mb-3">在 Aptos 上探索区块链特性</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            利用 Aptos 区块链的独特功能构建高性能金融应用
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">高性能交易</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                利用Aptos并行执行引擎，实现每秒超过10万次交易的处理能力，亚秒级确认时间。
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">并行执行</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Block-STM技术支持交易并行化处理，极大提升吞吐量和用户体验。
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">链上随机性</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                强大的VRF随机数生成机制，为金融应用提供公平可验证的随机性。
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Fee Payer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                灵活的费用支付机制，支持第三方代付交易费用，降低用户进入门槛。
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">低gas费用</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                高效的区块链设计确保更低的交易成本，提升用户和开发者体验。
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Keyless认证</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                无需私钥的身份验证方案，简化用户体验，提升安全性。
              </p>
            </div>
          </div>
        </div>

        {/* 开发者社区 */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-bold mb-3">Triplex 开发者优先</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            加入我们蓬勃发展的社区，获取支持并参与协议建设
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">社区讨论</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">加入我们的社区讨论，与来自全球的开发者交流，获取即时帮助和支持。</p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                加入社区 <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">学习资源</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">通过我们全面的教程和指南掌握 Triplex 协议开发，从基础到高级应用一应俱全。</p>
              <Link href="/architecturalanalysis" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                开始学习 <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">激励计划</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">了解 Triplex 基金会提供的激励计划，获得资金支持和资源，推动您的创新项目发展。</p>
              <Link href="/architecturalanalysis/tokenomics/incentives" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                了解更多 <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 生态系统合作伙伴 */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-bold mb-3">来自生态系统的声音</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            了解我们合作伙伴对 Triplex 平台的评价
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-bold">Aptin Finance</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">DeFi协议</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "Triplex提供了安全、直观和无缝的金融交互体验。我们与Triplex的愿景一致，共同建立全方位的DeFi生态系统。"
              </p>
              <p className="mt-4 text-sm font-medium">——CTO & 联合创始人</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">C</span>
                </div>
                <div>
                  <h4 className="font-bold">Cellana Finance</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">金融应用</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "我们选择与Triplex合作是因为其快速的交易速度、成本效益和强大的安全性。Triplex的即时确认机制是吸引各种金融应用的关键优势。"
              </p>
              <p className="mt-4 text-sm font-medium">——CEO</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">Z</span>
                </div>
                <div>
                  <h4 className="font-bold">Zabava Labs</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Web3开发</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "在Triplex平台上构建应用是一种变革性的体验，提供了无与伦比的交易速度和可靠性。我们热爱这个充满活力的社区和生态系统的发展方向。"
              </p>
              <p className="mt-4 text-sm font-medium">——CEO</p>
            </div>
          </div>
        </div>

        {/* 技术特点网格 */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-bold mb-3">探索 Triplex 技术优势</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            全面了解Triplex平台的核心技术特点和优势
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <h3 className="font-medium mb-2">去中心化治理</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">DAO治理架构，实现协议参数、功能升级和资金分配的社区自治</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <h3 className="font-medium mb-2">高性能交易系统</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">毫秒级交易延迟，每秒处理超过100,000笔交易的能力</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <h3 className="font-medium mb-2">跨链兼容性</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">支持多链资产集成，实现无缝跨链操作和资产转移</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <h3 className="font-medium mb-2">资本效率优化</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">先进的流动性池设计，最大化流动性提供者收益</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <h3 className="font-medium mb-2">实时风控系统</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">动态风险参数调整，多层次清算机制确保系统安全</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <h3 className="font-medium mb-2">模块化架构</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">灵活可扩展的设计，支持快速迭代和功能增强</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <h3 className="font-medium mb-2">形式化验证</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">利用 Move 语言特性实现合约的形式化验证</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <h3 className="font-medium mb-2">Layer 2 扩展</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">未来支持 Layer 2 扩展方案，进一步提升性能</p>
            </div>
          </div>
        </div>

        {/* CTA 部分 */}
        <div className="mb-24 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-4">准备好开始构建了吗？</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              深入了解 Triplex 协议，开始构建未来的去中心化金融应用
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link className="rounded-lg bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3 text-lg transition-colors" href="/architecturalanalysis">
                探索完整文档
              </Link>
              <Link className="rounded-lg border border-white hover:bg-white/10 font-medium px-8 py-3 text-lg transition-colors" href="https://github.com/your-repo">
                GitHub 仓库
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
