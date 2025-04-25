import React from "react";
import { Button } from "@/components/ui/button";
import { Lock, ShieldAlert, Eye, FileCheck, Key, Fingerprint } from "lucide-react";

const SecuritySection = () => {
  return (
    <div className="bg-abacus-dark py-24 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.6) 0%, transparent 50%)`,
          filter: "blur(60px)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Безопасность на уровне <span className="text-gradient">военных стандартов</span>
            </h2>
            <p className="text-abacus-text text-lg">
              Мы используем многоуровневую архитектуру безопасности для защиты ваших данных и транзакций
            </p>
          </div>
          
          <div className="bg-abacus-darker p-6 md:p-8 rounded-lg border border-abacus-accent/10 mb-10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-abacus-accent/10 rounded-full p-3 shrink-0">
                <ShieldAlert size={24} className="text-abacus-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Защита от хакерских атак</h3>
                <p className="text-abacus-text mb-4">
                  Наша инфраструктура защищена от всех известных векторов атак, включая DDoS, брутфорс, 
                  SQL-инъекции и XSS. Мы регулярно проводим пентесты с привлечением специалистов мирового уровня.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center text-sm text-abacus-text">
                    <div className="w-2 h-2 bg-abacus-accent rounded-full mr-2"></div>
                    Защита от DDoS атак
                  </div>
                  <div className="flex items-center text-sm text-abacus-text">
                    <div className="w-2 h-2 bg-abacus-accent rounded-full mr-2"></div>
                    Web Application Firewall
                  </div>
                  <div className="flex items-center text-sm text-abacus-text">
                    <div className="w-2 h-2 bg-abacus-accent rounded-full mr-2"></div>
                    Системы обнаружения вторжений
                  </div>
                  <div className="flex items-center text-sm text-abacus-text">
                    <div className="w-2 h-2 bg-abacus-accent rounded-full mr-2"></div>
                    Постоянный мониторинг безопасности
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <SecurityFeatureCard 
            icon={<Lock />}
            title="End-to-End шифрование"
            description="Все коммуникации защищены шифрованием уровня AES-256 и RSA-4096, недоступным даже для администраторов платформы."
          />
          
          <SecurityFeatureCard 
            icon={<Key />}
            title="Мультиподпись транзакций"
            description="Все транзакции требуют множественного подтверждения для обеспечения безопасности и снижения рисков мошенничества."
          />
          
          <SecurityFeatureCard 
            icon={<Eye />}
            title="Отсутствие следов активности"
            description="Мы не храним логи, историю действий или информацию, которая может скомпрометировать пользователей."
          />
          
          <SecurityFeatureCard 
            icon={<Fingerprint />}
            title="Биометрическая аутентификация"
            description="Опциональная дополнительная защита с использованием биометрических данных без их хранения на серверах."
          />
          
          <SecurityFeatureCard 
            icon={<FileCheck />}
            title="Смарт-контракты на блокчейне"
            description="Все финансовые операции обеспечены надежностью и прозрачностью блокчейн-технологий."
          />
          
          <SecurityFeatureCard 
            icon={<ShieldAlert />}
            title="Обнаружение аномалий"
            description="Система автоматически выявляет подозрительную активность и блокирует потенциальные угрозы безопасности."
          />
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 bg-gradient-to-r from-abacus-accent/20 to-abacus-accent2/20 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Наш подход к безопасности</h3>
            <p className="text-abacus-text">
              Мы рассматриваем безопасность не как отдельный компонент, а как основу всей нашей архитектуры. 
              Каждое решение, от пользовательского интерфейса до бэкенд-инфраструктуры, 
              принимается с учетом высочайших стандартов безопасности и конфиденциальности.
            </p>
          </div>
          
          <Button className="bg-abacus-accent hover:bg-abacus-accent2 text-black">
            Подробнее о системе безопасности
          </Button>
        </div>
      </div>
    </div>
  );
};

const SecurityFeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-abacus-darker p-5 rounded-lg border border-abacus-accent/10 card-hover">
      <div className="bg-abacus-accent/10 rounded-full w-10 h-10 flex items-center justify-center mb-4">
        <div className="text-abacus-accent">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-abacus-text text-sm">{description}</p>
    </div>
  );
};

export default SecuritySection;
