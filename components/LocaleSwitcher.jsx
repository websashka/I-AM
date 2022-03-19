import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const { pathname, query, asPath } = router


  return (
    <div>
      <ul>
        {locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}