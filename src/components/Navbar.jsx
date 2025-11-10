import { Menu, MessageSquare, Bot, Wallet } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-indigo-500 grid place-items-center text-white shadow">
              <Wallet size={20} />
            </div>
            <span className="font-extrabold text-xl tracking-tight">PayPow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Recursos</a>
            <a href="#how" className="hover:text-slate-900">Como funciona</a>
            <a href="#pricing" className="hover:text-slate-900">Preços</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#app" className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">Entrar</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-black">Começar grátis</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-slate-200">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#features" className="block">Recursos</a>
            <a href="#how" className="block">Como funciona</a>
            <a href="#pricing" className="block">Preços</a>
            <div className="pt-3 flex gap-3">
              <a href="#app" className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-center">Entrar</a>
              <a href="#cta" className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white text-center">Começar grátis</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
