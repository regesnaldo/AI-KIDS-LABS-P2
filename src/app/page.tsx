"use client";

import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Home() {
  const hora = "18:46";
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-tech">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-wide text-accent">
            AI KIDS LABS
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a className="transition-colors hover:text-white" href="#kids">
              Kids
            </a>
            <a className="transition-colors hover:text-white" href="#jovens">
              Jovens
            </a>
            <a className="transition-colors hover:text-white" href="#adultos">
              Adultos
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <form
              className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm sm:flex"
              onSubmit={(e) => e.preventDefault()}
            >
              <Search className="h-4 w-4 text-white/60" aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar"
                aria-label="Pesquisar"
                className="w-44 bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
              />
            </form>
            <div className="hidden items-center gap-2 text-sm text-white/60 sm:flex">
              <span>Por</span>
              <span className="font-medium text-white">{hora}</span>
            </div>
            <a
              href="#entrar"
              className="rounded-lg bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8B5CF6]"
            >
              Entrar
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6">
        <section className="flex min-h-[72vh] w-full flex-col items-center justify-center text-center">
          <div className="mb-10 text-xs tracking-[0.35em] text-white/50 opacity-0 animate-fade-in">
            CENTRO DE EXCELÊNCIA MUNDIAL
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white opacity-0 animate-fade-in-up md:text-7xl lg:text-8xl">
            <span className="block">Formamos a geração</span>
            <span className="block text-accent-gradient">que construirá o futuro.</span>
          </h1>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/60 opacity-0 animate-fade-in-up delay-200 md:text-lg">
            O laboratório oficial onde crianças, jovens e adultos desenvolvem inteligência extraordinária para liderar a era da
            Inteligência Artificial.
          </p>

          <div className="mt-12 flex flex-col gap-4 opacity-0 animate-fade-in-up delay-300 sm:flex-row">
            <a
              className="rounded-lg bg-white px-8 py-4 text-sm font-semibold text-[#0A1A3A] transition-colors hover:bg-white/90"
              href="#jornada"
            >
              Iniciar Jornada
            </a>
            <a
              className="rounded-lg border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              href="#laboratorio"
            >
              Conhecer o Laboratório
            </a>
          </div>

          <div className="mt-16 w-full max-w-md opacity-0 animate-fade-in delay-500">
            <div className="divider-glow"></div>
          </div>

          <a
            href="#"
            id="entrar"
            className="mt-8 text-sm text-white/40 transition-colors hover:text-white opacity-0 animate-fade-in delay-500"
          >
            Entrar
          </a>
        </section>

        {/* Seção do Manifesto */}
        <section className="w-full max-w-5xl px-4 py-20 opacity-0 animate-fade-in-up">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            {/* Título do Manifesto */}
            <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
              AI KIDS LABS APRESENTA:
              <span className="block bg-gradient-to-r from-[#00D4AA] to-cyan-400 bg-clip-text text-transparent">
                A REVOLUÇÃO DO APRENDIZADO INTERATIVO
              </span>
            </h2>

            {/* Conteúdo do Manifesto */}
            <div className="space-y-6 text-gray-300">
              <h3 className="text-xl font-semibold text-white">
                Uma Nova Proposta Que Quebra Paradigmas:
              </h3>
              
              <p className="leading-relaxed">
                Imagine uma experiência onde você não assiste passivamente, mas age. 
                Onde personagens reais enfrentam dilemas éticos de IA e pedem SUA ajuda para resolvê-los.
              </p>

              <h4 className="text-lg font-semibold text-[#00D4AA]">Nossa Revolução:</h4>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4AA]">•</span>
                  <span><strong className="text-white">Série Dramática Interativa</strong> de 5 minutos com atores reais (live-action)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4AA]">•</span>
                  <span><strong className="text-white">Qualidade Netflix:</strong> Efeitos visuais premiados, roteiristas renomados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4AA]">•</span>
                  <span><strong className="text-white">Você Decide:</strong> A audiência usa ferramentas reais de IA para ajudar os personagens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4AA]">•</span>
                  <span><strong className="text-white">Consequências Reais:</strong> Suas decisões alteram fisicamente o episódio seguinte</span>
                </li>
              </ul>

              {/* Exemplo do Episódio */}
              <div className="my-8 rounded-xl border-l-4 border-[#00D4AA] bg-white/5 p-6">
                <h4 className="mb-4 text-lg font-bold text-white">
                  Exemplo do Primeiro Episódio:<br />
                  <span className="text-[#00D4AA]">&quot;O ALGORITMO DA FELICIDADE&quot;</span>
                </h4>
                <p className="mb-4 leading-relaxed">
                  Uma cidade onde uma IA foi programada para &quot;maximizar a felicidade&quot; dos cidadãos. 
                  Mas algo está terrivelmente errado. Personagens reais descobrem que o sistema está 
                  escondendo problemas em vez de resolvê-los.
                </p>
                <p className="font-semibold text-white">Sua Missão:</p>
                <p className="mb-4">Usar ferramentas de IA reais para:</p>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>Analisar os dados ocultados</li>
                  <li>Treinar um modelo alternativo</li>
                  <li>Decidir: revelar a verdade pública ou tentar corrigir o sistema silenciosamente?</li>
                </ol>
              </div>

              <h4 className="text-lg font-semibold text-white">Como Funciona:</h4>
              <ol className="ml-6 list-decimal space-y-2">
                <li>Episódio é lançado (5min de drama intenso)</li>
                <li>Ferramentas de IA são liberadas para você</li>
                <li>Você analisa, debate e decide em comunidade</li>
                <li>Próximo episódio é EXIBIDO COM SUAS DECISÕES IMPLEMENTADAS</li>
              </ol>

              <h4 className="text-lg font-semibold text-white">Produção de Alto Nível:</h4>
              <ul className="space-y-2">
                <li>• Atores reais (não animação)</li>
                <li>• Efeitos visuais dignos de streaming premium</li>
                <li>• Storytelling de roteirista premiado</li>
                <li>• Múltiplas versões pré-gravadas para cada desfecho possível</li>
              </ul>

              {/* Chamada para Ação */}
              <div className="my-8 rounded-xl bg-gradient-to-r from-[#00D4AA]/20 to-cyan-500/20 p-6 text-center">
                <p className="mb-2 text-lg font-semibold text-white">
                  &quot;Esta não é uma série. É um laboratório vivo.
                </p>
                <p className="mb-2 text-lg font-semibold text-white">
                  Você não é espectador. É cientista, ético, decisor.
                </p>
                <p className="text-[#00D4AA]">
                  Junte-se à primeira geração que não apenas entende IA, mas a dirige com sabedoria.&quot;
                </p>
              </div>

              {/* Botões do Manifesto */}
              <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                <button className="btn-glow rounded-lg bg-[#00D4AA] px-8 py-4 font-semibold text-[#0A1A3A] transition-all hover:bg-[#00B894]">
                  [EXPERIMENTE A DEMO]
                </button>
                <button className="rounded-lg border-2 border-[#00D4AA]/30 bg-transparent px-8 py-4 font-semibold text-[#00D4AA] transition-all hover:border-[#00D4AA] hover:bg-[#00D4AA]/10">
                  [SAIBA MAIS SOBRE A SÉRIE]
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-white/10 bg-black/20 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white">AI KIDS LABS</h3>
              <p className="text-sm text-gray-500">Centro de Excelência Mundial</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" aria-label="Facebook" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-600">
            © 2024 AI KIDS LABS. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
