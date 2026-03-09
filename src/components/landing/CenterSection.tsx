import { motion } from "framer-motion";
import { GraduationCap, Droplets, Users, MapPin } from "lucide-react";
import suseoCenter from "@/assets/suseo-center.jpg";
import tripleGroupLogo from "@/assets/triple-group-logo.png";

const highlights = [
  {
    icon: GraduationCap,
    title: "전문 교육 시스템",
    description: "초보자도 전문가로 거듭나는 단계별 비즈니스 가이드 제공",
  },
  {
    icon: Droplets,
    title: "제품 체험존",
    description: "도테라의 프리미엄 에센셜 오일을 오감으로 경험하는 공간",
  },
  {
    icon: Users,
    title: "네트워킹",
    description: "열정 넘치는 리더들과 소통하며 사업의 확신을 얻는 커뮤니티",
  },
];

const CenterSection = () => (
  <section id="center" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <img
          src={tripleGroupLogo}
          alt="doTERRA TRIPLE GROUP 로고"
          className="h-36 md:h-42 mx-auto mb-6"
        />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          혼자가 아닌 함께 성장하는 공간,
          <br />
          <span className="text-gradient-gold">도테라 수서센터</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          도테라 트리플 그룹의 핵심 거점인 수서센터는 단순한 사무실이 아닙니다.
          비즈니스 파트너들이 모여 에센셜 오일을 직접 체험하고, 실전 마케팅 교육을 받으며,
          서로의 성공을 응원하는 성장의 요람입니다.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-sage"
        >
          <img
            src={suseoCenter}
            alt="도테라 수서센터 교육 현장"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="space-y-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-5 p-5 rounded-xl bg-card border border-border hover:shadow-gold transition-all duration-500"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-start gap-3 pt-4 text-sm text-muted-foreground"
          >
            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <p>
              서울특별시 강남구 수서동 밤고개로1길 10 722호
              <br />
              <span className="text-xs">(수서역 3번 출구)</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default CenterSection;
