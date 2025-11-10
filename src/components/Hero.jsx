import { MessageSquare, Bot, ShieldCheck, PhoneCall, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(ellipse_at_top_right,rgba(125,211,252,.35),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(167,139,250,.35),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
            <Sparkles size={16} /> Novo • IA que negocia por você
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Cobranças pelo WhatsApp com IA, simples e eficaz
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Cadastre devedores e cobranças. A IA negocia automaticamente, envia mensagens no WhatsApp e você aprova cada etapa num painel claro e amigável.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-6 py-3 rounded-lg bg-slate-900 text-white hover:bg-black text-center">Começar grátis</a>
            <a href="#how" className="px-6 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-center">Ver como funciona</a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2"><PhoneCall className="text-emerald-600" size={18}/> WhatsApp oficial</div>
            <div className="flex items-center gap-2"><Bot className="text-indigo-600" size={18}/> IA negociadora</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-slate-700" size={18}/> Aprovação manual</div>
            <div className="flex items-center gap-2"><MessageSquare className="text-slate-700" size={18}/> Histórico completo</div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-lg">
            <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>PayPow • Fluxo de negociação</span>
                <span>modo demo</span>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 grid place-items-center">A</div>
                  <div className="flex-1 rounded-lg bg-white/10 p-3">Olá, tudo bem? Sobre a cobrança de R$ 1.250 com vencimento 10/11...</div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="flex-1 rounded-lg bg-white/10 p-3">Posso pagar até sexta, consigo um desconto?</div>
                  <div className="h-8 w-8 rounded-full bg-indigo-500 grid place-items-center">D</div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 grid place-items-center">A</div>
                  <div className="flex-1 rounded-lg bg-white/10 p-3">Consigo 5% à vista ou 3x sem juros. Aprovar proposta?</div>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Aprovar</button>
              <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">Editar proposta</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
