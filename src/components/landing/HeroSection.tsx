import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useContent } from "@/hooks/useContent";

const HeroSection = () => {
  const { data } = useContent();
  const heroContent = data?.data?.hero || {};

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="웰니스 배경" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 mb-8 backdrop-blur-sm">
            <Leaf className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              {heroContent.badge || "dōTERRA Wellness Expert"}
            </span>
          </div>

          <h1
            className="text-2xl md:text-[2.75rem] lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: heroContent.title || '건강이 자산이 되는 삶,<br /><span class="text-gradient-gold">도테라 웰니스 비즈니스</span>로<br class="md:hidden" /> 시작하세요.' }}
          />

          <p
            className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed font-light"
            dangerouslySetInnerHTML={{ __html: heroContent.subtitle || '무점포 · 무자본 · 무경험으로 실현하는 경제적 자유.<br class="hidden md:block" />도테라 비즈니스 전문가 정종범이 그 길을 함께합니다.' }}
          />

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-gold transition-all hover:brightness-110"
          >
            지금 바로 코칭 상담하기
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
