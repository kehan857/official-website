import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Testimonials = () => {
  const { currentLang, translations } = useContext(AppContext);
  const t = translations[currentLang];

  const testimonials = [
    {
      quote: t.testimonials.testimonial1.quote,
      author: t.testimonials.testimonial1.author,
      title: t.testimonials.testimonial1.title,
      company: t.testimonials.testimonial1.company
    },
    {
      quote: t.testimonials.testimonial2.quote,
      author: t.testimonials.testimonial2.author,
      title: t.testimonials.testimonial2.title,
      company: t.testimonials.testimonial2.company
    },
    {
      quote: t.testimonials.testimonial3.quote,
      author: t.testimonials.testimonial3.author,
      title: t.testimonials.testimonial3.title,
      company: t.testimonials.testimonial3.company
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title">
            {t.testimonials.title}
          </h2>
          <p className="section-subtitle">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="mb-6">
                <svg className="w-8 h-8 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.title} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
                {t.testimonials.stats.clients}
              </div>
              <div className="text-gray-600 text-lg font-medium">
                {t.testimonials.stats.clientsLabel}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
                {t.testimonials.stats.projects}
              </div>
              <div className="text-gray-600 text-lg font-medium">
                {t.testimonials.stats.projectsLabel}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
                {t.testimonials.stats.satisfaction}
              </div>
              <div className="text-gray-600 text-lg font-medium">
                {t.testimonials.stats.satisfactionLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;