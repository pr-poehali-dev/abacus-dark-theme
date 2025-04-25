import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, MessageSquare, HelpCircle, Github, Twitter, Bitcoin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-abacus-darker border-t border-abacus-accent/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ABACUS</h3>
            <p className="text-abacus-text mb-6">
              Безопасная и анонимная платформа для торговли цифровыми товарами, 
              защищенная современными технологиями шифрования.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Github size={18} />} />
              <SocialLink icon={<Twitter size={18} />} />
              <SocialLink icon={<Bitcoin size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Маркетплейс</h4>
            <ul className="space-y-2">
              <FooterLink text="Все категории" />
              <FooterLink text="Популярные товары" />
              <FooterLink text="Специальные предложения" />
              <FooterLink text="Новые поступления" />
              <FooterLink text="Проверенные продавцы" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Платформа</h4>
            <ul className="space-y-2">
              <FooterLink text="О нас" />
              <FooterLink text="Безопасность" />
              <FooterLink text="Условия использования" />
              <FooterLink text="Конфиденциальность" />
              <FooterLink text="Часто задаваемые вопросы" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              <FooterLink text="Руководство по безопасности" />
              <FooterLink text="Как начать торговлю" />
              <FooterLink text="Гид для продавцов" />
              <FooterLink text="Форум сообщества" />
              <FooterLink text="Блог о безопасности" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-abacus-accent/10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <ShieldCheck size={18} className="text-abacus-accent" />
            <span className="text-abacus-text text-sm">Мультиподпись для транзакций</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Award size={18} className="text-abacus-accent" />
            <span className="text-abacus-text text-sm">Верификация всех продавцов</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <MessageSquare size={18} className="text-abacus-accent" />
            <span className="text-abacus-text text-sm">Круглосуточная поддержка</span>
          </div>
        </div>
        
        <div className="border-t border-abacus-accent/10 mt-8 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <span className="text-abacus-text text-sm">PGP: 4A7C 8FA6 DE3A 1B...</span>
            <span className="text-abacus-text text-sm">BTC: 3Jx9rAB...</span>
            <span className="text-abacus-text text-sm">XMR: 4ARF345j...</span>
          </div>
          
          <p className="text-abacus-text text-sm">
            © {new Date().getFullYear()} ABACUS Market. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text }: { text: string }) => (
  <li>
    <Link to="#" className="text-abacus-text hover:text-abacus-accent transition-colors text-sm flex items-center">
      {text}
      <ArrowUpRight size={12} className="ml-1 opacity-70" />
    </Link>
  </li>
);

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="w-9 h-9 rounded-full border border-abacus-accent/20 flex items-center justify-center text-abacus-text hover:text-abacus-accent hover:border-abacus-accent/50 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
