import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    q: 'O que é hidrogênio verde?',
    a: 'Hidrogênio produzido com emissão zero ou muito baixa de CO₂, tipicamente a partir de eletricidade renovável.'
  },
  {
    q: 'Como o hidrogênio verde é produzido?',
    a: 'Geralmente por eletrólise da água alimentada por energia renovável, separando água em hidrogênio e oxigênio.'
  },
  {
    q: 'Para que serve o hidrogênio verde?',
    a: 'Para descarbonizar setores difíceis de eletrificar em indústria e mobilidade, como insumo direto ou base para e‑combustíveis.'
  },
  {
    q: 'Qual é a diferença entre hidrogênio azul e verde?',
    a: 'Verde: produzido via eletrólise com renováveis. Azul: obtido de fontes fósseis (ex.: gás natural) com captura e armazenamento de CO₂.'
  },
  {
    q: 'Quais indústrias se tornam mais sustentáveis com H₂V?',
    a: 'Refinarias, química e aço podem substituir hidrogênio fóssil por H₂V. Em transportes, viabiliza combustíveis sintéticos para marítimo, rodoviário pesado e aviação.'
  },
  {
    q: 'Quais são os negativos do hidrogênio verde?',
    a: 'Hoje ainda é mais caro que o hidrogênio cinza, embora os custos tendam a cair com escala e inovação.'
  },
  {
    q: 'Por que o H₂V é importante para a transição energética?',
    a: 'Ajuda a descarbonizar indústria, transporte marítimo e aviação — segmentos em que eletrificação direta é limitada.'
  },
  {
    q: 'Como a H2V Mob participa da produção de H₂V?',
    a: 'Integramos projetos com eletrolisadores, renováveis e infraestrutura de armazenamento e abastecimento, do projeto ao fornecimento.'
  },
  {
    q: 'Quais as vantagens de eletrolisadores PEM?',
    a: 'Alta flexibilidade para acompanhar eólica/solar, boa eficiência e densidade de potência — ideais para renováveis variáveis.'
  },
  {
    q: 'Como funciona a eletrólise PEM?',
    a: 'Uma membrana de troca de prótons separa os gases enquanto prótons atravessam a membrana entre os eletrodos, permitindo coleta segura de H₂ e O₂.'
  },
  {
    q: 'Que experiência existe no setor de hidrogênio?',
    a: 'Há décadas de P&D e projetos em operação; nossa atuação conecta tecnologia, off‑takers e corredores logísticos para escalar o ecossistema.'
  },
  {
    q: 'Quão eficiente é a eletrólise?',
    a: 'A eficiência depende do projeto. Sistemas PEM modernos operam na faixa de ~70–80% (HHV) em condições nominais.'
  }
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-xl border border-h2v-gray shadow-sm overflow-hidden">
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-item-${index}`}
      >
        <span className="font-poppins font-semibold text-h2v-blue text-lg">{item.q}</span>
        <span className={`transition-transform text-h2v-green ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-item-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-6 pb-6 text-gray-700 font-inter"
          >
            {item.a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white border-t-2 border-h2v-green/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-h2v-blue mb-4">
            Obtenha respostas
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            Perguntas frequentes sobre soluções de hidrogênio — H2V Mob
          </p>
          <div className="w-16 h-1 bg-h2v-green mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />)
          )}
        </div>
      </div>
    </section>
  )
}

export default FAQ



