import { CheckCircle2, MessageSquare, Workflow, Handshake } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks(){
  const steps = [
    {
      icon: Workflow,
      title: "1. Cadastre",
      desc: "Adicione devedores e cobranças em segundos.",
    },
    {
      icon: MessageSquare,
      title: "2. Converse",
      desc: "A IA inicia a negociação diretamente no WhatsApp.",
    },
    {
      icon: CheckCircle2,
      title: "3. Aprove",
      desc: "Você valida propostas e descontos antes do envio.",
    },
    {
      icon: Handshake,
      title: "4. Receba",
      desc: "Feche acordos e gere links de pagamento.",
    },
  ];

  const root = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".how-card", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how" ref={root} className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">Como funciona</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({icon:Icon, title, desc}) => (
            <div key={title} className="how-card rounded-2xl border border-slate-200 p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-slate-900 text-white grid place-items-center mx-auto mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
