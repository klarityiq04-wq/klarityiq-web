import React from 'react';
import { companyInfo } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Lightbulb, Eye, Shield, Users, ArrowRight } from 'lucide-react';

const Company = () => {
  const iconMap = {
    Lightbulb,
    Eye,
    Shield,
    Users
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxzb2xhciUyMGZhcm18ZW58MHx8fHwxNzYxMzM1MTYxfDA&ixlib=rb-4.1.0&q=85"
            alt="Company"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center w-full">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-400/10 border border-purple-500/20 text-gray-300">
              About KlarityIQ
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto text-white">
            Powering the Future of Solar Operations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to maximize the potential of every solar farm through intelligent analytics and operational excellence
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{companyInfo.mission}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/20 to-purple-900/20 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{companyInfo.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-400">Delivering measurable results for solar operations worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {companyInfo.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyInfo.values.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-400/10 rounded-xl border border-purple-500/20 mb-6">
                    <Icon className="text-purple-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-400">Experts driving innovation in solar analytics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
          </div>
        </div>
      </section> */}

      {/* Culture Section */}
      {/* <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 lg-grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md-text-5xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-400 mb-6">
                We're always looking for talented individuals who are passionate about renewable energy and want to make a real impact on the future of solar operations.
              </p>
              <p className="text-gray-400 mb-8">
                At KlarityIQ, you'll work with cutting-edge technology, collaborate with industry experts, and help shape the future of solar farm analytics. We offer competitive compensation, flexible work arrangements, and a culture that values innovation and work-life balance.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90 text-white font-medium px-8 py-6 text-lg rounded-md transition-all duration-300"
              >
                View Open Positions
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1586366461834-d2d65d725a2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxzb2xhciUyMGZhcm18ZW58MHx8fHwxNzYxMzM1MTYxfDA&ixlib=rb-4.1.0&q=85"
                alt="Team Culture"
                className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Ready to see how KlarityIQ can transform your solar operations?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90 text-white font-medium px-6 py-2 text-lg rounded-md transition-all duration-300"
            asChild
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Company;