import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Metro Food Court located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Metro Food Court is located at Gyan Ganga Trade Centre in Kankarbagh, Patna."
      }
    },
    {
      "@type": "Question",
      "name": "What cuisine does Metro Food Court serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Metro Food Court serves North Indian, Chinese, and a wide range of rolls, including mutton kaathi roll, paneer roll, and chicken tikka roll."
      }
    },
    {
      "@type": "Question",
      "name": "Does Metro Food Court deliver in Kankarbagh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Metro Food Court delivers across Kankarbagh via Zomato and Swiggy."
      }
    },
    {
      "@type": "Question",
      "name": "What are Metro Food Court's opening hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Metro Food Court is open from 11:00 AM to 11:00 PM every day."
      }
    },
    {
      "@type": "Question",
      "name": "What are Metro Food Court's most popular items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The rolls menu is the most popular — particularly the mutton kaathi roll and chicken tikka roll — alongside North Indian and Chinese mains."
      }
    },
    {
      "@type": "Question",
      "name": "Is Metro Food Court good for families or groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Metro Food Court offers a spacious, welcoming dine-in area perfect for families, groups, and casual hangouts."
      }
    }
  ]
};

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`bg-[#FDFBF7] rounded-2xl md:rounded-3xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] border-2 transition-all duration-300 overflow-hidden ${isOpen ? 'border-primary/40 shadow-[0_15px_40px_-15px_rgba(138,46,40,0.15)]' : 'border-accent/10 hover:border-accent/30'}`}>
      <button 
        onClick={onClick}
        className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center gap-4 focus:outline-none"
      >
        <h3 className={`text-lg md:text-xl font-heading font-bold transition-colors ${isOpen ? 'text-primary' : 'text-secondary'}`}>
          {question}
        </h3>
        <span className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-accent/10 text-secondary'}`}>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </span>
      </button>
      <div 
        className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6 md:pb-8' : 'max-h-0 opacity-0 pb-0'}`}
      >
        <p className="text-text/80 leading-relaxed text-sm md:text-base font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pb-24 min-h-screen bg-background relative selection:bg-accent selection:text-white">
      <div className="fixed inset-0 bg-indian-pattern opacity-[0.03] pointer-events-none z-0" />
      
      {/* ── Hero Banner ── */}
      <div className="w-full h-[30vh] md:h-[40vh] relative mb-12 md:mb-16 shadow-lg z-10">
        <img 
          src="https://loremflickr.com/1974/800/restaurant,interior?lock=104" 
          alt="Restaurant Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4">
          <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-[0.25em] text-white uppercase mb-4 md:mb-6 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Support & Info
            <span className="w-1 h-1 rounded-full bg-primary" />
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-4 drop-shadow-lg leading-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="space-y-4 md:space-y-6">
          {faqSchema.mainEntity.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.name}
              answer={item.acceptedAnswer.text}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
      
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
};
