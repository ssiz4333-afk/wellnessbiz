import { motion } from "framer-motion";
import { Store, Wallet, GraduationCap } from "lucide-react";

const cards = [
  {
    icon: Store,
    title: "무점포",
    subtitle: "No Store Required",
    description: "장소의 제약 없이 어디서든 비즈니스가 가능합니다.",
  },
  {
    icon: Wallet,
    title: "무자본",
    subtitle: "No Capital Required",
    description: "초기 비용 부담 없이 열정만으로 시작할 수 있습니다.",
  },
  {
    icon: GraduationCap,
    title: "무경험",
    subtitle: "No Experience Required",
    description: "체계적인 교육 시스템으로 초보자도 전문가가 됩니다.",
  },
];

const ValueProposition = () => (
  <section id="value" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          누구나 시작할 수 있습니다
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          세 가지 '무(無)'로 진입 장벽을 없앴습니다
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative bg-card rounded-2xl p-8 text-center shadow-sage hover:shadow-gold transition-shadow duration-500 border border-border"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <card.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-1">{card.title}</h3>
            <p className="text-sm text-accent font-medium mb-4">{card.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProposition;
