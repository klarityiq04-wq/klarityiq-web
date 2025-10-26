import React from 'react';
import { pricingPlans, faqs } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Pricing = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-pink-500-10 via-purple-500-10 to-orange-400-10 border border-purple-500-20 text-gray-300">
              Pricing Plans
            </span>
          </div>
          <h1 className="text-5xl md-text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your operations. Scale up or down as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-900-50 border rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20 scale-105'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-half transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2
                        className={`mr-3 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-purple-400' : 'text-gray-500'
                        }`}
                        size={20}
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`py-2 text-base font-medium rounded-md transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90 text-white'
                      : 'bg-white-5 hover:bg-white-10 text-white border border-gray-700'
                  }`}
                  asChild
                >
                  <Link to="/contact">
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              All plans include free onboarding, training, and ongoing support
            </p>
            <p className="text-gray-500 text-sm">
              Custom plans available for portfolios over 500 MW. Contact us for details.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about our pricing</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-black-50 border border-gray-800 rounded-lg px-6 hover:border-gray-700 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <Button
              variant="outline"
              className="border-2 border-white-20 hover:border-white-40 bg-transparent text-white px-6 py-3 rounded-md transition-all duration-300"
              asChild
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-xl text-gray-400">See what's included in each plan</p>
          </div>

          <div className="bg-gray-900-50 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-6 px-6 font-semibold">Feature</th>
                    <th className="text-center py-6 px-6 font-semibold">Starter</th>
                    <th className="text-center py-6 px-6 font-semibold">Professional</th>
                    <th className="text-center py-6 px-6 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Capacity Support', starter: '50 MW', professional: '200 MW', enterprise: 'Unlimited' },
                    { feature: 'Real-time Monitoring', starter: true, professional: true, enterprise: true },
                    { feature: 'AI-Powered Analytics', starter: false, professional: true, enterprise: true },
                    { feature: 'Predictive Maintenance', starter: false, professional: true, enterprise: true },
                    { feature: 'Custom Dashboards', starter: false, professional: true, enterprise: true },
                    { feature: 'API Access', starter: 'Limited', professional: 'Full', enterprise: 'Full + Custom' },
                    { feature: 'Support', starter: 'Email', professional: '24/7 Priority', enterprise: 'Dedicated Manager' },
                    { feature: 'White-label Option', starter: false, professional: false, enterprise: true },
                    { feature: 'On-premise Deployment', starter: false, professional: false, enterprise: true }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-800 last:border-0">
                      <td className="py-4 px-6 text-gray-300">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-400">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <CheckCircle2 className="inline text-green-500" size={20} />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )
                        ) : (
                          row.starter
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-400">
                        {typeof row.professional === 'boolean' ? (
                          row.professional ? (
                            <CheckCircle2 className="inline text-green-500" size={20} />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )
                        ) : (
                          row.professional
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-400">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <CheckCircle2 className="inline text-green-500" size={20} />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )
                        ) : (
                          row.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm-px-6 lg-px-8 text-center">
          <h2 className="text-4xl md-text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join hundreds of solar farms optimizing their operations with KlarityIQ
          </p>
          <div className="flex flex-col sm-flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90 text-white font-medium px-6 py-2 text-lg rounded-md transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white-20 hover:border-white-40 bg-transparent text-white px-8 py-6 text-lg rounded-md transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;