import { motion } from "framer-motion";
import { Award, Heart } from "lucide-react";
import coachProfile from "@/assets/coach-profile.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Avatar / visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img
            src={coachProfile}
            alt="정종범 코치 프로필 사진"
            className="w-56 h-56 rounded-full object-cover object-top shadow-sage"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">About the Coach</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            정종범 <span className="text-muted-foreground text-xl font-sans font-normal">Jong-beom Jung</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            도테라 에센셜 오일을 매개로 사람들의 건강과 삶의 가치를 높이는 웰니스 비즈니스 전문가입니다.
            진정성 있는 코칭으로 많은 분들이 경제적 자유와 건강한 삶을 동시에 실현할 수 있도록 돕고 있습니다.
          </p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-sm text-secondary-foreground">
              <Award className="w-4 h-4 text-accent" /> dōTERRA 비즈니스 전문가
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary-foreground">
              <Heart className="w-4 h-4 text-accent" /> 웰니스 코치
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
