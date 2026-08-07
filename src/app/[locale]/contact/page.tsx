export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-32 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Whether you are inquiring about a specific collection, requesting a bespoke piece, or proposing a large-scale hospitality project, our team is at your disposal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Contact Details */}
            <div className="flex flex-col justify-center">
              <div className="mb-12">
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Headquarters</h2>
                <h3 className="text-2xl font-light mb-2">Genesi Milano</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Via Monte Napoleone, 14<br />
                  20121 Milano MI, Italy
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Contact Info</h2>
                <p className="text-lg font-light mb-2">
                  <a href="mailto:info@genesimobli.it" className="hover:text-primary transition-colors">info@genesimobli.it</a>
                </p>
                <p className="text-lg font-light">
                  <a href="tel:+390212345678" className="hover:text-primary transition-colors">+39 02 1234 5678</a>
                </p>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Trade & Press</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  For press inquiries or to join our trade program, please direct your correspondence to <a href="mailto:press@genesimobli.it" className="text-foreground hover:text-primary underline underline-offset-4">press@genesimobli.it</a>.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 md:p-12 border border-border">
              <h2 className="text-2xl font-light mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <input type="email" id="email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry" className="text-xs uppercase tracking-widest text-muted-foreground">Inquiry Type</label>
                  <select id="inquiry" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors appearance-none rounded-none">
                    <option value="" disabled selected>Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Product Sales</option>
                    <option value="contract">Contract / B2B</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-semibold hover:bg-foreground/90 transition-colors mt-8">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
