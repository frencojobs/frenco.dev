import '@styles/globals.css'
import '@styles/tailwind.css'

import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
