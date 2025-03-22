import { ArrowRightIcon } from '@components/icons'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import { MdxIcon } from 'nextra/icons'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'
import { Feature, Features } from './_components/features'
import { MotionDiv, MotionH3 } from './_components/framer-motion'
import { I18n } from './_components/i18n-demo'
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
      <div className="content-container">
        <h1 className="headline">
          Triplex: 下一代去中心化 <br className="max-sm:hidden" />
          金融交易协议
        </h1>
        <p className="subtitle">
          基于Aptos区块链打造的高性能DeFi交易生态系统{' '}
          <br className="max-md:hidden" />
          结合Move语言资源安全模型与高吞吐量交易引擎{' '}
          <Link href="https://aptoslabs.com" className="text-current">
            Aptos
          </Link>
          。
        </p>
        <p className="subtitle">
          <Link className={styles.cta} href="/architecturalanalysis">
            浏览文档 <span>→</span>
          </Link>
        </p>
      </div>
      <div className="features-container x:border-b nextra-border">
        <div className="content-container">
          <Features>
            <Feature
              index={0}
              large
              centered
              id="docs-card"
              href="/architecturalanalysis/markets"
            >
              <Image src={docsCard} alt="Background" loading="eager" />
              <Image
                src={docsCardDark}
                alt="Background (Dark)"
                loading="eager"
              />
              <h3>
                全方位市场系统 <br className="show-on-mobile" />
                多样化交易策略
              </h3>
            </Feature>
            <Feature index={1} centered href="/architecturalanalysis/markets/oracle">
              <h3>
                去中心化Oracle <br className="show-on-mobile" />
                保障 <span className="font-light">价格真实性</span>
              </h3>
              <p className="mb-8 text-start">
                Triplex Oracle系统采用多源价格聚合技术，结合加权平均算法和偏差检测机制，通过严格的权限控制和数据验证确保链上价格数据的真实性与可靠性。
              </p>
              <div>
                <div className={styles.optimization}>
                  <div style={{ fontSize: '.9rem' }} className="leading-8">
                    <code>多数据源聚合</code>
                    <br />
                    <code>价格操纵防护</code>
                  </div>
                </div>
                <ArrowRightIcon
                  width="1.2em"
                  className="mx-auto my-6 rotate-90 text-neutral-400"
                />
                <div className={styles.optimization}>
                  <div style={{ fontSize: '.9rem' }} className="leading-8">
                    <code>实时价格反馈</code>
                    <br />
                    <code>故障自动切换</code>
                  </div>
                </div>
              </div>
            </Feature>
            <Feature
              index={2}
              id="highlighting-card"
              href="/architecturalanalysis/markets/perpetual"
            >
              <h3>
                专业永续合约 <br className="show-on-mobile" />
                精准风控机制
              </h3>
              <p>
                支持最高20倍杠杆，配备动态调整的风险参数和多层次清算机制，自动调节费率与保证金要求，有效降低系统风险。
              </p>
            </Feature>
            <Feature index={3} href="/architecturalanalysis/markets/spot">
              <h3>
                高性能现货交易 <br className="show-on-mobile" />
                原子级交易结算
              </h3>
              <p className="mb-4">
                利用Aptos区块链每秒处理超过100,000笔交易的能力，实现亚秒级交易确认，无滑点执行，为用户提供媲美中心化交易所的体验。
              </p>
              <I18n />
            </Feature>
            <Feature
              index={4}
              centered
              className="flex flex-col items-center justify-center bg-[url(/assets/gradient-bg.jpeg)] bg-cover bg-center text-white"
              href="/architecturalanalysis/tokenomics"
            >
              <MdxIcon className="w-4/6 [filter:drop-shadow(0_2px_10px_rgba(0,0,0,.1))]" />
              <p style={{ textShadow: '0 2px 4px rgb(0 0 0 / 20%)' }}>
                <Link
                  href="/architecturalanalysis/tokenomics/trt"
                  className="!text-current"
                >
                  TRT代币体系
                </Link>{' '}
                全面治理与激励架构，{' '}
                <br className="hide-medium" />
                通过协议收益分享与质押机制促进生态可持续发展。
              </p>
            </Feature>
            <Feature
              index={5}
              centered
              className="feat-darkmode flex items-center justify-center"
            >
              <MotionDiv
                animate={{
                  backgroundPosition: [
                    '0% 0%',
                    '50% 40%',
                    '50% 40%',
                    '100% 100%'
                  ],
                  backgroundImage: [
                    'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)',
                    'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                    'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                    'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)'
                  ]
                }}
                transition={{
                  backgroundPosition: {
                    times: [0, 0.5, 0.5, 1],
                    repeat: Infinity,
                    duration: 10,
                    delay: 1
                  },
                  backgroundImage: {
                    times: [0, 0.2, 0.8, 1],
                    repeat: Infinity,
                    duration: 10,
                    delay: 1
                  }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage:
                    'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                  backgroundSize: '400% 400%',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <MotionH3
                animate={{
                  color: ['#dae5ff', '#fff', '#fff', '#dae5ff']
                }}
                transition={{
                  color: {
                    times: [0.25, 0.35, 0.7, 0.8],
                    repeat: Infinity,
                    duration: 10,
                    delay: 1
                  }
                }}
                style={{
                  position: 'relative',
                  mixBlendMode: 'difference'
                }}
              >
                Move <br />
                资源 <br />
                安全性
              </MotionH3>
            </Feature>
            <Feature
              index={6}
              large
              id="search-card"
              href="/architecturalanalysis/liquidity"
            >
              <h3>
                创新流动性池设计,
                <br />
                高效资本利用率
              </h3>
              <p className="z-2">
                Triplex流动性池采用先进的资本效率优化算法，定制化的做市策略和多层级风险隔离机制，最大化流动性提供者收益同时保障资金安全。{' '}
                <Link href="/architecturalanalysis/liquidity/pool">
                  深入了解
                </Link>
                。
              </p>
              <div className="absolute inset-0 z-1 size-full bg-[linear-gradient(to_right,white_250px,_transparent)] max-sm:hidden dark:bg-[linear-gradient(to_right,#202020_250px,_transparent)]" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="x:focus-visible:nextra-focus block dark:hidden"
              >
                <source src="/assets/search.mp4" type="video/mp4" />
              </video>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="x:focus-visible:nextra-focus hidden -translate-x-4 dark:block"
              >
                <source src="/assets/search-dark.mp4" type="video/mp4" />
              </video>
            </Feature>
            <Feature
              index={7}
              large
              id="fs-card"
              style={{
                color: 'white',
                backgroundImage:
                  'url(/assets/routing.png), url(/assets/gradient-bg.jpeg)',
                backgroundSize: '140%, 180%',
                backgroundPosition: '130px -8px, top',
                backgroundRepeat: 'no-repeat',
                textShadow: '0 1px 6px rgb(38 59 82 / 18%)',
                aspectRatio: '1.765'
              }}
              href="/architecturalanalysis/integration"
            >
              <h3>
                模块化集成架构, <br />
                灵活可扩展设计
              </h3>
            </Feature>
            <Feature
              index={8}
              id="a11y-card"
              style={{
                backgroundSize: 750,
                backgroundRepeat: 'no-repeat',
                minHeight: 288
              }}
            >
              <h3>极致安全保障</h3>
              <p>
                充分发挥Move语言的资源安全性 <br className="show-on-mobile" />
                实现<b>形式化验证</b>和<b>不变量保证</b>，防止资产盗用与漏洞利用。
              </p>
            </Feature>
            <Feature index={9} href="/architecturalanalysis/tokenomics/governance">
              <h3>
                完全去中心化治理, <br />
                社区主导决策
              </h3>
              <p className="mr-6">
                打造真正的DAO治理架构，实现协议参数、功能升级和资金分配的社区自治。透明的提案流程、投票权重和执行机制确保项目长期稳定发展。了解更多关于{' '}
                <Link href="/architecturalanalysis/tokenomics/governance">
                  治理机制
                </Link>
                、{' '}
                <Link href="/architecturalanalysis/tokenomics/incentives">
                  经济激励
                </Link>
                和{' '}
                <Link href="/architecturalanalysis/tokenomics/trt">
                  代币分配
                </Link>
                。
              </p>
            </Feature>
            <Feature index={10} large>
              <h3>技术亮点</h3>
              <p>
                毫秒级交易延迟 / 区块链级别安全保障 / 跨链资产兼容 / 开放API与SDK / 实时风控系统 / Layer 2扩展方案...
                <br />构建面向未来的去中心化金融交易基础设施。
              </p>
              <p className="subtitle">
                <Link className="no-underline" href="/architecturalanalysis">
                  探索Triplex生态 →
                </Link>
              </p>
            </Feature>
          </Features>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
