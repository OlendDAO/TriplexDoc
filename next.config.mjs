import nextra from 'nextra'
import path from 'path'
import { fileURLToPath } from 'url'
import { remarkMermaid } from '@theguild/remark-mermaid'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const withNextra = nextra({
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [remarkMermaid]
  }
})

// 将主题配置移到这里
export default withNextra({
  // 其他 Next.js 配置
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    return config
  }
}) 