import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Maa Kanti Foods',
  description: 'Get in touch with our support team. We are here to help you with any questions.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-r from-golden-50 to-cream dark:from-brown-700 dark:to-dark">
        <div className="container-custom text-center">
          <h1 className="mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Get in touch with our support team for any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <form className="space-y-4">
              <h2 className="mb-6">Send us a Message</h2>

              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-brown-600 dark:bg-brown-800"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-brown-600 dark:bg-brown-800"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-brown-600 dark:bg-brown-800"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-brown-600 dark:bg-brown-800"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="mb-6">Get in Touch</h2>

              <div className="space-y-4">
                <div className="card">
                  <h3 className="mb-2 font-semibold">Email</h3>
                  <p className="text-golden-500">
                    <a href="mailto:support@maakantifood.com">
                      support@maakantifood.com
                    </a>
                  </p>
                  <p className="text-golden-500">
                    <a href="mailto:info@maakantifood.com">
                      info@maakantifood.com
                    </a>
                  </p>
                </div>

                <div className="card">
                  <h3 className="mb-2 font-semibold">Phone</h3>
                  <p className="mb-1">+91 (800) 123-4567</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Mon - Fri, 10 AM - 6 PM IST
                  </p>
                </div>

                <div className="card">
                  <h3 className="mb-2 font-semibold">Address</h3>
                  <p>Maa Kanti Foods<br />
                    Mumbai, India<br />
                    400001
                  </p>
                </div>

                <div className="card">
                  <h3 className="mb-2 font-semibold">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-golden-500 hover:text-golden-600">
                      Facebook
                    </a>
                    <a href="#" className="text-golden-500 hover:text-golden-600">
                      Twitter
                    </a>
                    <a href="#" className="text-golden-500 hover:text-golden-600">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-brown-800">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'What are your delivery times?',
                a: 'We deliver within 3-5 business days for most areas. Orders above ₹500 get free shipping.',
              },
              {
                q: 'Do you offer returns?',
                a: 'Yes, we have a 30-day money-back guarantee on all products.',
              },
              {
                q: 'Are your products organic?',
                a: 'Yes, all our products are 100% organic and certified by relevant authorities.',
              },
              {
                q: 'Do you have a physical store?',
                a: 'Currently we operate online only. You can order from our website.',
              },
            ].map((item, index) => (
              <details key={index} className="card group">
                <summary className="flex cursor-pointer items-center justify-between font-semibold">
                  {item.q}
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
