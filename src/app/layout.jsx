import './globals.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title:"Entre Perros || Rock del Bueno",
  description: 'Entre Perros banda de rock del oeste de GBA, hacemos rock del bueno. Formada en 2011 Entre Perros está lanzando su tercer album de estudio llamado "Todo".',
  keywords: ["entre perros", "banda", "rock", "banda de rock", "rock and roll", "perros", "musica", "banda de rock", "pop"],
  creator: "Entre Perros",
  publisher: "papelfloreado.ar",
  applicationName:"Entre Perros Web",
  generator: "Next.js",
  authors: [{name: "Gabriel Peralta",url: "https://www.papelfloreado.ar"}],
  "msvalidate.01": "5632EF80205D852EBCEE6F4D12EC881A"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation/>

        {children}

        <Footer/>
      </body>
    </html>
  )
}
