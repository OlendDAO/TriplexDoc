import type { ComponentProps, FC } from 'react'

export const ArrowRightIcon: FC<ComponentProps<'svg'>> = props => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
)

export const NextraLogo: FC<ComponentProps<'svg'>> = props => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.608 16.995c.274.172.594.172.868 0l5.944-3.766c.286-.18.286-.5 0-.682l-5.944-3.765a.727.727 0 0 0-.868 0L5.664 12.6c-.286.182-.286.502 0 .683l5.944 3.713Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.608 8.783a.727.727 0 0 0-.868 0L5.796 12.52c-.403.257-.463.736-.135 1.065.97.097.225.161.379.213l5.7-3.585c.274-.173.594-.173.868 0l5.698 3.585c.154-.052.282-.116.38-.213.327-.33.267-.808-.136-1.065l-5.942-3.738Z"
      fill="currentColor"
    />
  </svg>
)

export const VercelLogo: FC<ComponentProps<'svg'>> = props => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path fill="currentColor" d="M12 1 1 21.5h22L12 1Z" />
  </svg>
) 