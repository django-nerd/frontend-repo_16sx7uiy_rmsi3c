import { FileText, Users, BadgeCheck, Workflow, Send, Shield, Cpu, Zap, Coins } from "lucide-react";

export default function Features(){
  const items = [
    {
      icon: Users,
      title: "Cadastre devedores",
      desc: "Nome, WhatsApp e detalhes do débito em poucos cliques.",
    },
    {
      icon: FileText,
      title: "Crie cobranças",
      desc: "Defina valores, vencimentos e anexos de comprovantes.",
    },
    {
      icon: Cpu,
      title: "IA que negocia",
      desc: "Nosso agente conversa por WhatsApp alinhado às suas regras.",
    },
    {
      icon: Shield,
      title: "Aprovação humana",
      desc: "Você aprova cada etapa para manter controle total.",
    },
    {
      icon: Send,
      title: "Disparo inteligente",
      desc: "Mensagens com timing ideal e follow-up automático.",
    },
    {
      icon: BadgeCheck,
      title: "Histórico completo",
      desc: "Tudo arquivado: propostas, respostas e acordos.",
    },
    {
      icon: Workflow,
      title: "Dashboard amigável",
      desc: "Painel visual para acompanhar negociações e status.",
    },
    {
      icon: Coins,
      title: "Grátis até 3 cobranças",
      desc: "Comece sem custo e compre mais slots conforme crescer.",
    },
    {
      icon: Zap,
      title: "Integração simples",
      desc: "Conecte via número oficial ou provedor parceiro.",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Tudo que você precisa para recuperar com elegância</h2>
        <p className="mt-3 text-slate-600">Automação com IA + seu toque final. Rápido, humano e eficiente.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-400 to-indigo-500 text-white grid place-items-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
