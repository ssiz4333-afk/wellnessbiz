import { motion, useInView } from "framer-motion";
import { Globe, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import doterraHq from "@/assets/doterra-hq.png";

const useCountUp = (end: number, duration = 2000, inView: boolean) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return count;
};

const stats = [
  {
    icon: TrendingUp,
    label: "글로벌 매출액",
    numValue: 20,
    suffix: "억 달러",
    sub: "약 2.7조 원 돌파",
  },
  {
    icon: Users,
    label: "고객 재구매율",
    numValue: 65,
    suffix: "%",
    sub: "Retention Rate",
  },
  {
    icon: ShieldCheck,
    label: "재무 건전성",
    numValue: null,
    displayValue: "Net Debt-Free",
    suffix: "",
    sub: "부채 없는 기업",
  },
];

const StatCard = ({ stat, i }: { stat: (typeof stats)[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(stat.numValue ?? 0, 2000, inView);

  return (
    <motion.div
      ref={ref}
      key={stat.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15 }}
      className="bg-background rounded-2xl p-6 border border-border text-center shadow-sage hover:shadow-gold transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-sage flex items-center justify-center mx-auto mb-4">
        <stat.icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
      <p className="text-2xl font-display font-bold text-foreground">
        {stat.numValue !== null ? `${count}${stat.suffix}` : stat.displayValue}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
    </motion.div>
  );
};

const DoterraSection = () => (
  <section id="doterra" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Globe className="w-6 h-6 text-accent" />
          <span className="text-sm font-medium tracking-widest uppercase text-accent">
            Global Wellness Leader
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          글로벌 <span className="text-gradient-gold">dōTERRA</span> 소개
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          전 세계 155개국, 1,000만 명의 선택을 받은 글로벌 No.1 에센셜 오일 전문 기업.
          <br className="hidden md:block" />
          가장 순수한 자연의 정수를 과학으로 증명하며, 전 인류의 건강과 경제적 자립을 선도하는 글로벌 웰니스 리더입니다.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden shadow-sage mb-14 max-w-5xl mx-auto"
      >
        <img
          src={doterraHq}
          alt="dōTERRA 글로벌 본사"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} i={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto"
      >
        외부 자본이나 대출 없이 스스로 성장한 강력하고 안정적인 비즈니스 기반
      </motion.p>
    </div>
  </section>
);

export default DoterraSection;
