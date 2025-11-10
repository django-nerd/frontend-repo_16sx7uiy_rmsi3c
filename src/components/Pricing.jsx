import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing(){
  const root = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pricing-card", {
        y: 16,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={root} className="py-16 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">Planos simples e transparentes</h2>
        <p className="mt-3 text-slate-600 text-center">Experimente grátis com até 3 cobranças simultâneas. Cresça no seu ritmo.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="pricing-card rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 inline-flex px-2 py-1 rounded">Comece</div>
            <h3 className="mt-3 text-xl font-semibold">Free</h3>
            <p className="mt-1 text-sm text-slate-600">Até 3 cobranças ativas</p>
            <div className="mt-6 text-3xl font-extrabold">R$ 0<span className="text-base font-medium text-slate-500">/mês</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>WhatsApp + IA</li>
              <li>Aprovação manual</li>
              <li>Dashboard básico</li>
            </ul>
            <a href="#cta" className="mt-6 block w-full text-center px-4 py-2 rounded-lg bg-slate-900 text-white">Começar grátis</a>
          </div>

          <div className="pricing-card rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-lg">
            <div className="text-xs font-semibold text-slate-900 bg-slate-100 inline-flex px-2 py-1 rounded">Mais popular</div>
            <h3 className="mt-3 text-xl font-semibold">Pro</h3>
            <p className="mt-1 text-sm text-slate-600">Até 50 cobranças ativas</p>
            <div className="mt-6 text-3xl font-extrabold">R$ 59<span className="text-base font-medium text-slate-500">/mês</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Fluxos avançados</li>
              <li>Relatórios e exportações</li>
              <li>Equipe (até 3 usuários)</li>
            </ul>
            <a href="#cta" className="mt-6 block w-full text-center px-4 py-2 rounded-lg bg-slate-900 text-white">Assinar Pro</a>
          </div>

          <div className="pricing-card rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 inline-flex px-2 py-1 rounded">Escale</div>
            <h3 className="mt-3 text-xl font-semibold">Business</h3>
            <p className="mt-1 text-sm text-slate-600">Sob demanda, acima de 50 cobranças</p>
            <div className="mt-6 text-3xl font-extrabold">Custom</div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>WhatsApp oficial</li>
              <li>SSO e permissões</li>
              <li>SLA prioritário</li>
            </ul>
            <a href="#cta" className="mt-6 block w-full text-center px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">Falar com vendas</a>
          </div>
        </div>
      </div>
    </section>
  );
}
