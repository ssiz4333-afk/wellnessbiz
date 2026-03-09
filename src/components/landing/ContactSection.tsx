import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/v1/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message })
      });

      if (response.ok) {
        toast.success("문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다!");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (error) {
      toast.error("서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            상담 문의
          </h2>
          <p className="text-muted-foreground text-lg">
            궁금한 점이 있으시면 언제든 연락해주세요
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-5"
        >
          <div className="bg-background/50 border border-border rounded-xl p-8 text-center mt-8">
            <h3 className="text-xl font-medium mb-3 text-foreground">
              온라인 상담 접수 기능 준비 중입니다
            </h3>
            <p className="text-muted-foreground mb-6">
              정식 사이트 오픈 후 이용하실 수 있습니다. 지금은 아래 채널을 이용해주세요.
            </p>
            <a
              href="https://open.kakao.com/o/sMwuYIVg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#191919] px-6 py-3 rounded-xl font-semibold hover:brightness-95 transition"
            >
              카카오톡으로 바로 문의하기
            </a>
          </div>

          {/* Form is temporarily disabled so backend server isn't required 
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-1.5">이름</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary-foreground mb-1.5">연락처</label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              placeholder="010-0000-0000"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-secondary-foreground mb-1.5">문의 내용</label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              placeholder="궁금한 점을 자유롭게 작성해주세요"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3.5 rounded-xl font-semibold shadow-gold hover:brightness-110 transition"
          >
            <Send className="w-4 h-4" />
            문의 보내기
          </button>
          */}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
