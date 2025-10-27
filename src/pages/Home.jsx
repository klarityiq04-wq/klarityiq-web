import React from 'react';
import { Link } from 'react-router-dom';
import { heroData, features, testimonials, integrations } from '../data/mockData';
import { Button } from '../components/ui/button';
import { ArrowRight, BarChart3, TrendingUp, Settings, DollarSign, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const iconMap = {
    BarChart3,
    TrendingUp,
    Settings,
    DollarSign
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroData.heroImage}
            alt="Solar Farm"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-400/10 border border-purple-500/20 text-gray-300">
                  {heroData.subtitle}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                {heroData.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-xl">
                {heroData.description}
              </p>
              <div className="flex flex-col sm-flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white font-semibold px-8 py-4 text-lg rounded-xl hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  {heroData.ctaText}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                {/* <button
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 hover:bg-white/10 bg-transparent text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  {heroData.secondaryCtaText}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4">Comprehensive Solar Analytics</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to monitor, analyze, and optimize your solar farm operations
            </p>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="group relative bg-gray-900-50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500-50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-gradient-to-br from-pink-500-10 via-purple-500-10 to-orange-400-10 rounded-xl border border-purple-500-20">
                        <Icon className="text-purple-400" size={28} />
                      </div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-24 h-24 object-cover rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/product" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white font-semibold px-10 py-4 text-lg rounded-xl hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Features
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-2 md-grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Solar Farms' },
              { value: '2.5 GW', label: 'Capacity Managed' },
              { value: '99.9%', label: 'Platform Uptime' },
              { value: '15%', label: 'Avg. Efficiency Gain' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md-text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md-text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-400">See what our customers are saying</p>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900-50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500-50 transition-all duration-300"
              >
                <div className="mb-6">
                  <svg className="text-purple-500" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-400">Works with all major solar hardware platforms</p>
          </div>

          <div className="grid grid-cols-2 md-grid-cols-3 lg-grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white-5 border border-gray-800 rounded-lg p-6 flex items-center justify-center hover:bg-white-10 transition-all duration-300"
              >
                <span className="text-gray-400 font-medium text-sm">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm-px-6 lg-px-8 text-center">
          <h2 className="text-4xl md-text-5xl font-bold mb-6">
            Ready to Transform Your Solar Operations?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join hundreds of solar farms already maximizing their performance with KlarityIQ
          </p>
          <div className="flex flex-col sm-flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white font-semibold px-12 py-4 text-lg rounded-xl hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;