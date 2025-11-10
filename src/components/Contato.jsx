import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'
import { Particles } from './magicui/Particles'
import { GridPattern } from './magicui/GridPattern'
import animationGif from '../assets/animation_sync_Default_qgqrjolm3.gif'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    mensagem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFeedback({ type: '', message: '' })

    try {
      const response = await fetch('https://formsubmit.co/ajax/ricardo@h2vmob.com.br', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          empresa: formData.empresa || 'Não informado',
          email: formData.email,
          mensagem: formData.mensagem,
          _subject: 'Contato via site H2V Mob',
        }),
      })

      if (!response.ok) {
        throw new Error('Falha no envio, tente novamente.')
      }

      setFeedback({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Verifique sua caixa de entrada para confirmação.',
      })
      setFormData({ nome: '', empresa: '', email: '', mensagem: '' })
    } catch (error) {
      setFeedback({
        type: 'error',
        message:
          error.message ||
          'Não foi possível enviar a mensagem agora. Por favor, tente novamente em instantes.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'E-mail',
      value: 'ricardo@h2vmob.com.br',
      link: 'mailto:ricardo@h2vmob.com.br',
    },
    {
      icon: FaPhone,
      label: 'Telefone',
      value: '(51) 98052-0170',
      link: 'tel:+5551980520170',
    },
    {
      icon: FaGlobe,
      label: 'Website',
      value: 'www.h2vmob.com.br',
      link: 'https://www.h2vmob.com.br',
    },
  ]

  return (
    <section id="contato" className="py-20 md:py-32 bg-h2v-blue relative overflow-hidden">
      {/* Magic UI Background Effects */}
      <div className="absolute inset-0">
        <GridPattern className="opacity-10" />
        <Particles className="opacity-40" quantity={40} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Mensagem do CEO */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl font-inter text-white/90 italic mb-6 leading-relaxed">
            "Estamos construindo o ecossistema de mobilidade a hidrogênio verde, conectando tecnologia, sustentabilidade e inovação para um futuro mais limpo e eficiente."
          </p>
          <p className="text-lg font-poppins font-semibold text-h2v-green">
            — Ricardo Vieira Rodrigues, CEO H2V Mob
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold font-poppins text-white mb-8">
              Entre em Contato
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-h2v-green transition-all font-inter"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-h2v-green transition-all font-inter"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-h2v-green transition-all font-inter"
                />
              </div>
              <div>
                <textarea
                  name="mensagem"
                  placeholder="Mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-h2v-green transition-all font-inter resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-h2v-green text-h2v-blue px-8 py-4 rounded-lg transition-all font-inter font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
            {feedback.message && (
              <div
                className={`mt-6 px-6 py-4 rounded-lg border ${
                  feedback.type === 'success'
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-100'
                    : 'bg-red-500/20 border-red-400 text-red-100'
                }`}
              >
                <p className="font-inter text-sm">{feedback.message}</p>
              </div>
            )}
            
            {/* GIF Animation */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={animationGif}
                alt=""
                className="max-w-full h-auto opacity-80"
                style={{ maxHeight: '200px' }}
                onLoad={(e) => {
                  // Garantir que o GIF faça loop infinito
                  e.target.style.imageRendering = 'auto'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold font-poppins text-white mb-8">
              Informações
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className="w-12 h-12 bg-h2v-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 font-inter text-sm mb-1">{info.label}</p>
                    <p className="text-white font-inter font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Mapa Visual */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-h2v-green text-2xl mr-3" />
                <h4 className="text-white font-poppins font-semibold text-lg">
                  Localização
                </h4>
              </div>
              <p className="text-white/80 font-inter">
                Rio Grande do Sul, Brasil
              </p>
              <div className="mt-6 h-48 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <p className="text-white/40 font-inter text-sm">
                  Mapa interativo será implementado aqui
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contato

