import { getTranslations } from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations('Contact');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-32 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">{t('headerTitle')}</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            {t('headerSubtitle')}
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
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{t('hqTitle')}</h2>
                <h3 className="text-2xl font-light mb-2">{t('hqName')}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Via Monte Napoleone, 14<br />
                  20121 Milano MI, Italy
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{t('infoTitle')}</h2>
                <p className="text-lg font-light mb-2">
                  <a href="mailto:info@genesimobli.it" className="hover:text-primary transition-colors">info@genesimobli.it</a>
                </p>
                <p className="text-lg font-light">
                  <a href="tel:+390212345678" className="hover:text-primary transition-colors">+39 02 1234 5678</a>
                </p>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{t('tradePressTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {t('tradePressDesc')} <a href="mailto:press@genesimobli.it" className="text-foreground hover:text-primary underline underline-offset-4">press@genesimobli.it</a>.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 md:p-12 border border-border">
              <h2 className="text-2xl font-light mb-8">{t('formTitle')}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-muted-foreground">{t('firstName')}</label>
                    <input type="text" id="firstName" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-muted-foreground">{t('lastName')}</label>
                    <input type="text" id="lastName" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">{t('email')}</label>
                  <input type="email" id="email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry" className="text-xs uppercase tracking-widest text-muted-foreground">{t('inquiryType')}</label>
                  <select id="inquiry" defaultValue="" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors appearance-none rounded-none">
                    <option value="" disabled>{t('selectOption')}</option>
                    <option value="general">{t('optGeneral')}</option>
                    <option value="sales">{t('optSales')}</option>
                    <option value="contract">{t('optContract')}</option>
                    <option value="press">{t('optPress')}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">{t('message')}</label>
                  <textarea id="message" rows={4} className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-semibold hover:bg-foreground/90 transition-colors mt-8">
                  {t('submit')}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
