import { motion } from "framer-motion";
import { BarChart3, Users, Instagram } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "도테라 비즈니스 코칭",
    description: "성공적인 네트워크 마케팅 전략과 수익 구조 최적화 가이드",
    features: ["수익 구조 분석", "마케팅 전략 수립", "성장 로드맵 설계"],
  },
  {
    icon: Users,
    title: "리더십 코칭",
    description: "팀을 이끄는 힘, 건강한 조직 문화를 만드는 리더십 인사이트",
    features: ["팀 빌딩 전략", "조직 문화 설계", "동기부여 기법"],
  },
  {
    icon: Instagram,
    title: "인스타그램 마케팅 코칭",
    description: "퍼스널 브랜딩부터 실전 마케팅까지, SNS를 통한 비즈니스 확장법",
    features: ["퍼스널 브랜딩", "콘텐츠 전략", "팔로워 성장 전략"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          코칭 프로그램
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          당신의 성공을 위한 맞춤형 코칭 서비스
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background rounded-2xl p-8 border border-border shadow-sage hover:shadow-gold transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-sage flex items-center justify-center mb-6">
              <service.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
