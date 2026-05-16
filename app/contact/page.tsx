'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Globe, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

export default function ContactPage() {
  const { t, dir, locale } = useLocale()
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setFormState('success')
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    
    // Reset after 3 seconds
    setTimeout(() => setFormState('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#173042] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className={cn("max-w-3xl", dir === 'rtl' && 'text-right mr-auto')}>
            <div className="inline-flex items-center gap-2 bg-[#167D88]/20 border border-[#167D88]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-[#7DAD3F]">
                {locale === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {t.contact.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed text-pretty">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-[#CFE0DA]/50">
              <h2 className={cn("text-2xl font-bold text-[#173042] mb-8", dir === 'rtl' && 'text-right')}>
                {locale === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h2>

              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#7DAD3F]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-[#7DAD3F]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#173042] mb-2">
                    {locale === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-[#666666]">
                    {locale === 'ar' ? 'سنتواصل معك قريباً' : "We'll get back to you soon"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className={cn("block text-sm font-medium text-[#333333] mb-2", dir === 'rtl' && 'text-right')}>
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border border-[#CFE0DA] focus:border-[#167D88] focus:ring-2 focus:ring-[#167D88]/20 outline-none transition-colors bg-white",
                          dir === 'rtl' && 'text-right'
                        )}
                        placeholder={locale === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={cn("block text-sm font-medium text-[#333333] mb-2", dir === 'rtl' && 'text-right')}>
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border border-[#CFE0DA] focus:border-[#167D88] focus:ring-2 focus:ring-[#167D88]/20 outline-none transition-colors bg-white",
                          dir === 'rtl' && 'text-right'
                        )}
                        placeholder={locale === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className={cn("block text-sm font-medium text-[#333333] mb-2", dir === 'rtl' && 'text-right')}>
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border border-[#CFE0DA] focus:border-[#167D88] focus:ring-2 focus:ring-[#167D88]/20 outline-none transition-colors bg-white",
                          dir === 'rtl' && 'text-right'
                        )}
                        placeholder={locale === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className={cn("block text-sm font-medium text-[#333333] mb-2", dir === 'rtl' && 'text-right')}>
                        {t.contact.form.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border border-[#CFE0DA] focus:border-[#167D88] focus:ring-2 focus:ring-[#167D88]/20 outline-none transition-colors bg-white",
                          dir === 'rtl' && 'text-right'
                        )}
                        placeholder={locale === 'ar' ? 'أدخل اسم شركتك' : 'Enter your company name'}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={cn("block text-sm font-medium text-[#333333] mb-2", dir === 'rtl' && 'text-right')}>
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-[#CFE0DA] focus:border-[#167D88] focus:ring-2 focus:ring-[#167D88]/20 outline-none transition-colors resize-none bg-white",
                        dir === 'rtl' && 'text-right'
                      )}
                      placeholder={locale === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={formState === 'submitting'}
                    className="w-full bg-[#E49E01] text-[#173042] font-semibold hover:bg-[#E49E01]/90 h-14 disabled:opacity-70"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                      </span>
                    ) : (
                      <span className={cn("flex items-center gap-2", dir === 'rtl' && 'flex-row-reverse')}>
                        <Send className="h-5 w-5" />
                        {t.contact.form.submit}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#CFE0DA]/50">
                <h2 className={cn("text-2xl font-bold text-[#173042] mb-8", dir === 'rtl' && 'text-right')}>
                  {locale === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className={cn("flex items-start gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                    <div className="w-12 h-12 bg-[#167D88] rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className={dir === 'rtl' ? 'text-right' : ''}>
                      <h3 className="font-semibold text-[#173042] mb-1">
                        {locale === 'ar' ? 'العنوان' : 'Address'}
                      </h3>
                      <p className="text-[#666666]">{t.contact.info.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={cn("flex items-start gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                    <div className="w-12 h-12 bg-[#E49E01] rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-[#173042]" />
                    </div>
                    <div className={dir === 'rtl' ? 'text-right' : ''}>
                      <h3 className="font-semibold text-[#173042] mb-1">
                        {locale === 'ar' ? 'الهاتف' : 'Phone'}
                      </h3>
                      <a href="tel:+97165449361" className="text-[#666666] hover:text-[#167D88] transition-colors">
                        {t.contact.info.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className={cn("flex items-start gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                    <div className="w-12 h-12 bg-[#7DAD3F] rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className={dir === 'rtl' ? 'text-right' : ''}>
                      <h3 className="font-semibold text-[#173042] mb-1">
                        {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </h3>
                      <a href="mailto:Info@steeltechnology.ae" className="text-[#666666] hover:text-[#167D88] transition-colors">
                        {t.contact.info.email}
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className={cn("flex items-start gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                    <div className="w-12 h-12 bg-[#1768B4] rounded-xl flex items-center justify-center shrink-0">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div className={dir === 'rtl' ? 'text-right' : ''}>
                      <h3 className="font-semibold text-[#173042] mb-1">
                        {locale === 'ar' ? 'الموقع الإلكتروني' : 'Website'}
                      </h3>
                      <a href="https://www.steeltechnology.ae" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#167D88] transition-colors">
                        {t.contact.info.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#173042] rounded-2xl p-8">
                <div className={cn("flex items-center gap-4 mb-6", dir === 'rtl' && 'flex-row-reverse')}>
                  <div className="w-12 h-12 bg-[#E49E01] rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-[#173042]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {locale === 'ar' ? 'ساعات العمل' : 'Business Hours'}
                  </h3>
                </div>

                <div className={cn("space-y-3", dir === 'rtl' && 'text-right')}>
                  <div className={cn("flex justify-between text-white/80", dir === 'rtl' && 'flex-row-reverse')}>
                    <span>{locale === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}</span>
                    <span className="font-semibold text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className={cn("flex justify-between text-white/80", dir === 'rtl' && 'flex-row-reverse')}>
                    <span>{locale === 'ar' ? 'الجمعة' : 'Friday'}</span>
                    <span className="font-semibold text-white">{locale === 'ar' ? 'مغلق' : 'Closed'}</span>
                  </div>
                  <div className={cn("flex justify-between text-white/80", dir === 'rtl' && 'flex-row-reverse')}>
                    <span>{locale === 'ar' ? 'السبت' : 'Saturday'}</span>
                    <span className="font-semibold text-white">9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#CFE0DA]/50">
                <div className="aspect-video bg-[#CFE0DA]/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-[#167D88] mx-auto mb-4" />
                    <p className="text-[#666666] font-medium">
                      {locale === 'ar' ? 'الشارقة، الإمارات العربية المتحدة' : 'Sharjah, United Arab Emirates'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
