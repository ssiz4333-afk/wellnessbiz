import { motion } from "framer-motion";
import { Droplet, HandHeart, Handshake } from "lucide-react";
import healingHandsLogo from "@/assets/healing-hands-logo.png";
import healingHandsImpact from "@/assets/healing-hands-impact.png";

const initiatives = [
  {
    icon: Droplet,
    title: "생명을 살리는 물",
    description: "오염된 지역에 깨끗한 식수와 의료 서비스 지원",
  },
  {
    icon: HandHeart,
    title: "자유를 향한 손길",
    description: "인신매매 근절 및 소외 계층의 경제적 자립 교육",
  },
  {
    icon: Handshake,
    title: "상생의 철학",
    description: "원료 생산자의 삶을 존중하는 공정 거래(Co-Impact Sourcing)",
  },
];

const HealingHandsSection = () => (
  <section id="healing-hands" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <img
          src={healingHandsLogo}
          alt="doTERRA Healing Hands 로고"
          className="h-32 md:h-40 mx-auto mb-6"
        />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          이익을 넘어{" "}
          <span className="text-gradient-gold">가치를 남기는</span> 비즈니스
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          "도테라는 단순히 이익만 추구하는 회사가 아닙니다."
          <br />
          우리가 나누는 에센셜 오일 한 병에는 세상을 치유하려는 도테라의 진심이
          담겨 있습니다.{" "}
          <strong className="text-foreground">힐링핸즈(Healing Hands)</strong>는
          비즈니스의 성공을 인류의 행복으로 바꾸는 강력한 움직임입니다.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="space-y-6 order-2 lg:order-1">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-5 p-5 rounded-xl bg-background border border-border hover:shadow-gold transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-sage flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-sm leading-relaxed pt-2"
          >
            당신의 비즈니스가 누군가의 희망이 되는 곳. 정종범과 함께, 단순한
            수익을 넘어 세상을 바꾸는 선한 영향력에 동참하세요.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-sage order-1 lg:order-2"
        >
          <img
            src={healingHandsImpact}
            alt="doTERRA Healing Hands 사회공헌 활동"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HealingHandsSection;
