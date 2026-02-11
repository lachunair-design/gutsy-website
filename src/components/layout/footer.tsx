import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/products' },
    { name: 'Best Sellers', href: '/products' },
    { name: 'New Arrivals', href: '/products' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Shipping', href: '/shipping' },
  ],
};

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-[12px] border-black selection:bg-[#FF4D4D] selection:text-white">
      {/* Ticker Marquee - High Energy Section */}
      <div className="bg-[#FF4D4D] py-5 border-b-8 border-black overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee space-x-12">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black uppercase italic text-black">
              GUTSY GUTSY GUTSY
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            
            {/* Logo & Brand Identity Block */}
            <div className="md:col-span-5 lg:col-span-6">
              <Link href="/" className="inline-block group relative">
                {/* The Brutalist Logo Box */}
                <div className="relative w-32 h-32 md:w-48 md:h-48 mb-10 border-8 border-white bg-white group-hover:bg-[#FF4D4D] group-hover:border-[#FF4D4D] transition-all duration-300 shadow-[15px_15px_0px_0px_rgba(255,77,77,1)] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 overflow-hidden">
                  <Image
                    src="/images/gutsy-logomark.png"
                    alt="GUTSY Logomark"
                    fill
                    className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <span className="text-8xl md:text-[140px] font-black tracking-tighter leading-none uppercase block hover:text-[#FF4D4D] transition-colors">
                  GUTSY.
                </span>
              </Link>
              <p className="mt-8 text-2xl md:text-4xl font-black uppercase leading-[0.9] max-w-md italic">
                Supplements with backbone. <br />
                Born in Dubai.
              </p>
              
              {/* Disruptive Social Buttons */}
              <div className="mt-12 flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="p-5 border-4 border-white bg-white text-black hover:bg-[#FF4D4D] hover:border-[#FF4D4D] hover:text-white transition-all hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(255,77,77,1)] active:shadow-none active:translate-y-0"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections with Brutalist Underlines */}
            <div className="md:col-span-7 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-12">
              {/* Shop Column */}
              <div>
                <h3 className="text-2xl font-black uppercase italic mb-8 text-[#FF4D4D] underline decoration-[6px] underline-offset-8">Shop</h3>
                <ul className="space-y-5">
                  {footerLinks.shop.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xl font-bold uppercase hover:text-[#FF4D4D] transition-colors tracking-tighter">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-2xl font-black uppercase italic mb-8 text-[#FF4D4D] underline decoration-[6px] underline-offset-8">Company</h3>
                <ul className="space-y-5">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xl font-bold uppercase hover:text-[#FF4D4D] transition-colors tracking-tighter">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h3 className="text-2xl font-black uppercase italic mb-8 text-[#FF4D4D] underline decoration-[6px] underline-offset-8">Legal</h3>
                <ul className="space-y-5">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xl font-bold uppercase hover:text-[#FF4D4D] transition-colors tracking-tighter">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* The Final Bottom Bar */}
        <div className="border-t-[12px] border-white py-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-3xl font-black uppercase italic tracking-tighter">
            &copy; {new Date().getFullYear()} GUTSY WORLDWIDE
          </p>
          
          {/* Decorative Desert Blocks */}
          <div className="hidden lg:flex gap-6">
             <div className="w-16 h-16 bg-[#FF4D4D] border-4 border-white rotate-3 shadow-[4px_4px_0px_0px_white]"></div>
             <div className="w-16 h-16 bg-white border-4 border-black -rotate-6 shadow-[4px_4px_0px_0px_#FF4D4D]"></div>
             <div className="w-16 h-16 bg-[#FF4D4D] border-4 border-white rotate-12 shadow-[4px_4px_0px_0px_white]"></div>
          </div>

          <p className="text-3xl font-black uppercase italic tracking-tighter">
            EST. 2026 // DUBAI
          </p>
        </div>
      </div>
    </footer>
  );
}
