import React from 'react';
import { productFeatures } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Zap, Activity, Brain, Shield } from 'lucide-react';

const Product = () => {
  const iconMap = {
    Zap,
    Activity,
    Brain,
    Shield
  };

  const icons = [Zap, Activity, Brain, Shield];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509389928833-fe62aef36deb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzb2xhciUyMGZhcm18ZW58MHx8fHwxNzYxMzM1MTYxfDA&ixlib=rb-4.1.0&q=85"
            alt="Solar Operations"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 py-32 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-pink-500-10 via-purple-500-10 to-orange-400-10 border border-purple-500-20 text-gray-300">
              Product Overview
            </span>
          </div>
          <h1 className="text-5xl md-text-6xl font-bold mb-6 max-w-4xl mx-auto">
            The Complete Solar Farm Intelligence Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Unified analytics, monitoring, and operations management designed specifically for utility-scale solar farms
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90 text-white font-medium px-6 py-2 text-lg rounded-md transition-all duration-300"
            asChild
          >
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          {productFeatures.map((section, index) => {
            const Icon = icons[index % icons.length];
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg-grid-cols-2 gap-12 items-center mb-32 last:mb-0`}
              >
                {/* Image Side */}
                <div className={`${isEven ? 'lg-order-1' : 'lg-order-2'}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <img
                      src={
                        index === 0
                          ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzYxMzM1MTc3fDA&ixlib=rb-4.1.0&q=85'
                          : index === 1
                          ? 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzYxMzM1MTc3fDA&ixlib=rb-4.1.0&q=85'
                          : index === 2
                          ? 'https://images.unsplash.com/photo-1738918937796-743064feefa1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxtb25pdG9yaW5nJTIwc3lzdGVtc3xlbnwwfHx8fDE3NjEzMzUxODJ8MA&ixlib=rb-4.1.0&q=85'
                          : 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzYxMzM1MTc3fDA&ixlib=rb-4.1.0&q=85'
                      }
                      alt={section.title}
                      className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${isEven ? 'lg-order-2' : 'lg-order-1'}`}>
                  <div className="inline-block mb-4">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-pink-500-10 via-purple-500-10 to-orange-400-10 border border-purple-500-20 text-purple-400">
                      {section.category}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                  <p className="text-gray-400 text-lg mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4">Why Choose KlarityIQ?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built specifically for solar farm operations with industry-leading capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time Precision',
                description: '5-minute data intervals with down-to-the-module visibility for instant issue detection',
                icon: '⚡'
              },
              {
                title: 'AI-Powered Insights',
                description: 'Machine learning algorithms predict issues before they impact production',
                icon: '🧠'
              },
              {
                title: 'Universal Integration',
                description: 'Works seamlessly with all major inverter brands and existing systems',
                icon: '🔗'
              },
              {
                title: 'Mobile-First Design',
                description: 'Full functionality on any device for field teams and executives alike',
                icon: '📱'
              },
              {
                title: 'Enterprise Security',
                description: 'SOC 2 Type II compliant with bank-level encryption and data protection',
                icon: '🔒'
              },
              {
                title: 'Scalable Architecture',
                description: 'From single sites to multi-gigawatt portfolios with consistent performance',
                icon: '📊'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-black-50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500-50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm-px-6 lg-px-8 text-center">
          <h2 className="text-4xl md-text-5xl font-bold mb-6">
            See KlarityIQ in Action
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a personalized demo to see how KlarityIQ can transform your solar operations
          </p>
          <div className="flex flex-col sm-flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90 text-white font-medium px-6 py-2 text-lg rounded-md transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Schedule Demo
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-2 border-white-20 hover:border-white-40 bg-transparent text-white px-8 py-6 text-lg rounded-md transition-all duration-300"
              asChild
            >
              <Link to="/pricing">View Pricing</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;