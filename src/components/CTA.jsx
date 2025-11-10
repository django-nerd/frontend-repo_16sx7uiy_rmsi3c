import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA(){
  const root = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-card", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={root} className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="cta-card rounded-2xl border border-slate-200 p-8 bg-white">
          <h3 className="text-2xl font-bold text-slate-900">Recupere valores com elegância e automação</h3>
          <p className="mt-2 text-slate-600">Leve o PayPow para suas cobranças e tenha uma IA negociando por você 24/7 no WhatsApp.</p>
          <form className="mt-6 grid sm:grid-cols-3 gap-3">
            <input className="col-span-2 rounded-lg border border-slate-300 px-4 py-3" placeholder="Seu e-mail" />
            <button className="px-4 py-3 rounded-lg bg-slate-900 text-white">Quero começar</button>
          </form>
          <p className="mt-3 text-xs text-slate-500">Grátis até 3 cobranças simultâneas</p>
        </div>
      </div>
    </section>
  );
}
