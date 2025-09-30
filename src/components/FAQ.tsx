import React, { useState } from 'react';

const faqs = [
  {
    question: "O Studio A1 Dev oferece serviços de UI/UX em Florianópolis?",
    answer: "Sim! Criamos interfaces intuitivas e experiências de usuário personalizadas, otimizadas para desempenho e SEO em Florianópolis e qualquer lugar do mundo."
  },
  {
    question: "Vocês desenvolvem projetos Web3 e integração Blockchain?",
    answer: "Sim, desenvolvemos apps descentralizados, smart contracts e integração com blockchain para garantir segurança, transparência e inovação.Desenvolvimento em Criptoart (NFTs)e oque houver em termos de Dapps."
  },
  {
    question: "O Studio A1 gerencia domínios e hospedagem de sites?",
    answer: "Sim, oferecemos gerenciamento completo de domínios. Desde registro,hospedagem segura e manutenção contínua, garantimos metas de performance e SEO."
  },
  {
    question: "Posso explanar o que quero em criação de site e ou aplicativo?",
    answer: "Sim claro, nós desenvolvemos sites e apps responsivos, você manda e nós realizamos com modernos e otimizados produtos de alta performance para a melhor experiência do usuário ."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-transparent text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 font-teletype">
          <span className="text-green-400">$</span> faq --studioa1
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-transparent p-4 rounded-lg border border-green-600"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="ml-2 text-green-400">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </script>
    </section>
  );
};

export default FAQ;

