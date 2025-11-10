import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <footer className="py-12 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} PayPow. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700">Termos</a>
            <a href="#" className="hover:text-slate-700">Privacidade</a>
            <a href="#" className="hover:text-slate-700">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
