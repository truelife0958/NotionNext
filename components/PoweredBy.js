ny888import { siteConfig } from '@/lib/config'

/**
 * 驱动版权 
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://weny888.com'
        className='underline justify-start'>
        文远享当当
      </a>
      .
    </div>
  )
}
