import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => (
  <motion.a
    href="https://open.kakao.com/o/sMwuYIVg"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.5, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#FEE500] text-[#191919] flex items-center justify-center shadow-lg hover:brightness-95 transition"
    aria-label="카카오톡 상담하기"
  >
    <MessageCircle className="w-6 h-6" />
  </motion.a>
);

export default FloatingCTA;
