import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => (
  <motion.a
    href="tel:010-6283-3743"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.5, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-gold hover:brightness-110 transition"
    aria-label="전화 상담"
  >
    <Phone className="w-6 h-6" />
  </motion.a>
);

export default FloatingCTA;
