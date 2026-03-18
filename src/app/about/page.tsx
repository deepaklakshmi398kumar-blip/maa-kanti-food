import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Maa Kanti Foods',
  description: 'Learn about Maa Kanti Foods and our mission to provide premium organic food products.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-r from-golden-500 to-brown-600 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-4">About Maa Kanti Foods</h1>
          <p className="max-w-2xl mx-auto text-golden-100">
            Dedicated to bringing authentic, organic, and premium-quality food products to your kitchen since 2015.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Maa Kanti Foods was founded with a simple mission: to bring the authentic taste and
              health benefits of traditional, organic food products to modern households. What started
              as a small family operation has grown into a trusted brand serving over 50,000 happy customers.
            </p>
            <p>
              We believe in quality over quantity. Every product we offer is carefully selected from
              trusted suppliers, ensuring that what reaches your kitchen is fresh, pure, and packed
              with nutrition.
            </p>
            <p>
              Our commitment to organic farming practices and sustainable sourcing ensures that we
              contribute positively to both your health and the environment. We work directly with
              farmers to promote fair-trade practices and support rural communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50 dark:bg-brown-800">
        <div className="container-custom">
          <h2 className="mb-12 text-center">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Quality',
                description: 'We never compromise on quality. Every product is tested and certified.',
                icon: '✓',
              },
              {
                title: 'Sustainability',
                description: 'We support organic farming and eco-friendly practices for a better future.',
                icon: '♻️',
              },
              {
                title: 'Trust',
                description: 'Your trust is our most valuable asset. We maintain transparency in everything.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="card space-y-4 text-center"
              >
                <div className="text-5xl">{value.icon}</div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <h2 className="mb-12 text-center">The Team Behind It All</h2>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              Our dedicated team of food enthusiasts, supply chain experts, and customer service professionals
              work tirelessly to bring you the best experience. We're passionate about what we do, and it shows
              in everything we deliver.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                { name: 'Rajesh Kumar', role: 'Founder & CEO' },
                { name: 'Priya Sharma', role: 'Quality Manager' },
                { name: 'Amit Patel', role: 'Supply Chain Head' },
              ].map((member, index) => (
                <div key={index} className="rounded-lg bg-gray-100 p-6 dark:bg-brown-700">
                  <div className="mb-3 text-4xl">👤</div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-golden-50 to-cream dark:from-brown-700 dark:to-dark">
        <div className="container-custom text-center">
          <h2 className="mb-6">Got Questions?</h2>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Get in touch with our team for any inquiries.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
