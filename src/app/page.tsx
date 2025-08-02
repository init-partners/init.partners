import { getAllTeamMembers, getAllExpertise, getAllPortfolioCompanies } from '@/lib/content';
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import ScrollReveal from '@/components/ScrollReveal';
import { ExternalLink, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const teamMembers = getAllTeamMembers();
  const expertise = getAllExpertise();
  const portfolioCompanies = getAllPortfolioCompanies();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-200 pb-200">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-full">
              <h1 className="hero-text text-hero-mobile tablet:text-hero-tablet desktop:text-hero-desktop font-black text-black leading-none mb-12">
                INIT.PARTNERS:
                <br />
                YOUR PARTNER
                <br />
                IN BUILDING
                <br />
                <span className="text-neutral-800">ENDURING</span>
                <br />
                STARTUPS
              </h1>
              <div className="max-w-2xl">
                <p className="text-lg tablet:text-xl font-medium text-black leading-relaxed tracking-wide">
                  THE JOURNEY OF AN EARLY-STAGE STARTUP IS BOTH EXCITING AND CHALLENGING. 
                  HAVING THE RIGHT PARTNERS CAN MAKE ALL THE DIFFERENCE.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-200 bg-neutral-100">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-display tablet:text-display-sm font-black text-black mb-16 tracking-tight uppercase">
                WHAT WE DO
              </h2>
              <div className="space-y-8">
                <p className="text-lg tablet:text-xl font-medium text-black leading-relaxed tracking-wide">
                  WE PARTNER WITH EARLY-STAGE STARTUPS TO HELP THEM NAVIGATE THE COMPLEX JOURNEY 
                  FROM IDEA TO PRODUCT-MARKET FIT AND BEYOND. OUR HANDS-ON APPROACH COMBINES DEEP 
                  TECHNICAL EXPERTISE WITH PRACTICAL BUSINESS EXPERIENCE.
                </p>
                <p className="text-lg tablet:text-xl font-medium text-black leading-relaxed tracking-wide">
                  WHETHER YOU NEED HELP BUILDING YOUR TECHNICAL FOUNDATION, DEVELOPING YOUR 
                  GO-TO-MARKET STRATEGY, OR PREPARING FOR YOUR NEXT FUNDING ROUND, WE PROVIDE 
                  THE EXPERTISE AND SUPPORT YOU NEED TO SUCCEED.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Areas of Expertise Marquee */}
      <section className="py-24 bg-white overflow-hidden">
        <ScrollReveal>
          <Marquee 
            items={expertise.map(item => item.title.toUpperCase())}
            className="border-y border-black/10"
          />
        </ScrollReveal>
      </section>

      {/* Who We Are Section */}
      <section id="team" className="py-200 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-display tablet:text-display-sm font-black text-black mb-24 tracking-tight uppercase">
              WHO WE ARE
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.slug} delay={index * 0.2}>
                <div className="space-y-8">
                  <div className="w-full aspect-square bg-neutral-200 flex items-center justify-center">
                    <span className="text-6xl font-black text-neutral-400 tracking-tight">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-black tracking-tight uppercase">
                      {member.name}
                    </h3>
                    <p className="text-lg font-medium text-black tracking-wide uppercase">
                      {member.role}
                    </p>
                    <p className="text-base font-medium text-black leading-relaxed tracking-wide">
                      {member.bio.toUpperCase()}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-black hover:text-neutral-800 transition-colors tracking-wide uppercase"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="portfolio" className="py-200 bg-neutral-100">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-display tablet:text-display-sm font-black text-black mb-24 tracking-tight uppercase">
              OUR WORK
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioCompanies.map((company, index) => (
              <ScrollReveal key={company.slug} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="bg-white overflow-hidden transition-all duration-500 hover:scale-105">
                    <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black flex items-center justify-center">
                        <span className="text-3xl font-black text-white tracking-tight uppercase">
                          {company.name}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-black text-black mb-4 tracking-tight uppercase">
                        {company.name}
                      </h3>
                      <p className="text-sm font-medium text-black leading-relaxed tracking-wide mb-6">
                        {company.description.toUpperCase()}
                      </p>
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-black hover:text-neutral-800 transition-colors tracking-wide uppercase"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        VISIT WEBSITE
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Partner With Section */}
      <section className="py-200 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <ScrollReveal>
              <div>
                <h2 className="text-display-sm font-black text-black mb-12 tracking-tight uppercase">
                  WHO WE PARTNER WITH
                </h2>
                <p className="text-lg font-medium text-black leading-relaxed mb-8 tracking-wide">
                  WE WORK WITH AMBITIOUS FOUNDERS WHO ARE BUILDING THE NEXT GENERATION 
                  OF TRANSFORMATIVE COMPANIES. OUR IDEAL PARTNERS ARE:
                </p>
                <ul className="space-y-6 text-base font-medium text-black tracking-wide">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-black mt-2 mr-6 flex-shrink-0"></span>
                    EARLY-STAGE STARTUPS (PRE-SEED TO SERIES A)
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-black mt-2 mr-6 flex-shrink-0"></span>
                    TECHNOLOGY-DRIVEN COMPANIES WITH SCALABLE BUSINESS MODELS
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-black mt-2 mr-6 flex-shrink-0"></span>
                    TEAMS COMMITTED TO BUILDING LONG-TERM SUSTAINABLE BUSINESSES
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-display-sm font-black text-black mb-12 tracking-tight uppercase">
                  OUR PARTNERSHIP MODEL
                </h3>
                <p className="text-lg font-medium text-black leading-relaxed mb-8 tracking-wide">
                  WE BELIEVE IN ALIGNING OUR SUCCESS WITH YOURS. OUR PARTNERSHIP 
                  APPROACH INCLUDES:
                </p>
                <ul className="space-y-6 text-base font-medium text-black tracking-wide">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-black mt-2 mr-6 flex-shrink-0"></span>
                    HANDS-ON ADVISORY AND CONSULTING SERVICES
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-black mt-2 mr-6 flex-shrink-0"></span>
                    STRATEGIC EQUITY PARTNERSHIPS FOR LONG-TERM ALIGNMENT
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-black mt-2 mr-6 flex-shrink-0"></span>
                    ACCESS TO OUR NETWORK OF INVESTORS, CUSTOMERS, AND TALENT
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-200 bg-black">
        <div className="container-custom">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h2 className="text-display tablet:text-display-sm font-black text-white mb-12 tracking-tight uppercase leading-none">
                READY TO BUILD
                <br />
                SOMETHING AMAZING?
              </h2>
              <p className="text-lg font-medium text-white/80 mb-16 leading-relaxed tracking-wide max-w-2xl">
                LET&apos;S DISCUSS HOW WE CAN HELP ACCELERATE YOUR STARTUP&apos;S GROWTH 
                AND SUCCESS. GET IN TOUCH TO START THE CONVERSATION.
              </p>
              <a
                href="mailto:hello@init.partners"
                className="btn-primary inline-flex items-center font-bold px-12 py-6 text-lg tracking-wide uppercase transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-4" />
                GET IN TOUCH
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-black text-white mb-4 md:mb-0 tracking-tight">
              INIT.PARTNERS
            </div>
            <div className="text-sm font-medium text-white/60 tracking-wide uppercase">
              © {new Date().getFullYear()} INIT.PARTNERS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}