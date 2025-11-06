import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    capacity: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
    });
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      capacity: '',
      message: ''
    });
  };

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
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md-text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Let's Transform Your Solar Operations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to maximize your solar farm performance? Contact us today for a personalized demo.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 lg-grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900-50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
                  <div className='w-3-4'>
                    <Label htmlFor="firstName" className="text-gray-300 mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-black-50 border-gray-700 text-white focus:border-purple-500"
                    />
                  </div>
                  <div className='w-3-4'>
                    <Label htmlFor="lastName" className="text-gray-300 mb-2 block">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-black-50 border-gray-700 text-white focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className='w-3-4'>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black-50 border-gray-700 text-white focus:border-purple-500"
                  />
                </div>

                <div className='w-3-4'>
                  <Label htmlFor="company" className="text-gray-300 mb-2 block">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-black-50 border-gray-700 text-white focus:border-purple-500"
                  />
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
                  <div className='w-3-4'>
                    <Label htmlFor="phone" className="text-gray-300 mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-black-50 border-gray-700 text-white focus:border-purple-500"
                    />
                  </div>
                  <div className='w-3-4'>
                    <Label htmlFor="capacity" className="text-gray-300 mb-2 block">
                      Solar Farm Capacity (MW)
                    </Label>
                    <Input
                      id="capacity"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      className="bg-black-50 border-gray-700 text-white focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className='w-3-4'>
                  <Label htmlFor="message" className="text-gray-300 mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-black-50 border-gray-700 text-white focus:border-purple-500"
                    placeholder="Tell us about your solar farm operations and what you're looking to achieve..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90 text-white font-medium py-6 text-lg rounded-md transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Have questions? Our team is here to help. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-pink-500-10 via-purple-500-10 to-orange-400-10 rounded-xl border border-purple-500-20 mr-4">
                    <Mail className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@klarityiq.ai</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-pink-500-10 via-purple-500-10 to-orange-400-10 rounded-xl border border-purple-500-20 mr-4">
                    <Phone className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+(91) 9310180414</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-pink-500-10 via-purple-500-10 to-orange-400-10 rounded-xl border border-purple-500-20 mr-4">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office</h3>
                    <p className="text-gray-400">KlartiyIQ, Unit-37, Floor 01-FF, ITHUM-73,</p>
                    <p className="text-gray-400">Sector-73, Noida (UP),201301</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-purple-900-20 to-pink-900-20 border border-gray-800 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-semibold mb-3">Quick Response Guarantee</h3>
                <p className="text-gray-400">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line directly.
                </p>
              </div>

              {/* Demo CTA */}
              {/* <div className="bg-black-50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Schedule a Live Demo</h3>
                <p className="text-gray-400 mb-4">
                  See KlarityIQ in action with a personalized demo using your actual solar farm data.
                </p>
                <Button
                  className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3 rounded-md transition-all duration-300"
                >
                  Book Demo Now
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      {/* <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-400">We'd love to meet you in person</p>
          </div>
          <div className="bg-gray-800 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <p className="text-gray-500">Interactive Map Placeholder</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;