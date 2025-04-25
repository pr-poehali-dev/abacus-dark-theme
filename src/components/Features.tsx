import React from "react";
import { Shield, Users, Award, Server, UserCheck, Lock, Eye, MessageSquareX } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-abacus-darker py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Почему <span className="text-gradient">ABACUS</span> лидирует среди даркнет-площадок</h2>
          <p className="text-abacus-text text-lg">
            Наша платформа объединяет передовые технологии безопасности с простотой использования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Lock />}
            title="Многоуровневая аутентификация"
            description="2FA с PGP, биометрия и другие современные методы подтверждения личности для максимальной защиты."
          />
          
          <FeatureCard 
            icon={<Shield />}
            title="Продвинутое шифрование"
            description="Все коммуникации защищены военным уровнем шифрования. Ни один байт информации не доступен посторонним."
          />
          
          <FeatureCard 
            icon={<MessageSquareX />}
            title="Самоуничтожающиеся сообщения"
            description="Автоматическое удаление всей переписки после прочтения или по истечении времени."
          />
          
          <FeatureCard 
            icon={<Eye />}
            title="Отсутствие логов"
            description="Мы не храним историю ваших действий, IP-адреса, данные или историю транзакций после завершения операций."
          />
          
          <FeatureCard 
            icon={<Users />}
            title="Защита от мошенников"
            description="Многоэтапная верификация продавцов и отзывов, подтверждение сделок и репутационная система."
          />
          
          <FeatureCard 
            icon={<Award />}
            title="Прозрачная система рейтингов"
            description="Проверенные механизмы отзывов с защитой от накруток и проверкой подлинности покупок."
          />
          
          <FeatureCard 
            icon={<Server />}
            title="Распределенная инфраструктура"
            description="Сервера расположены в разных юрисдикциях для обеспечения бесперебойной работы и защиты от блокировок."
          />
          
          <FeatureCard 
            icon={<UserCheck />}
            title="Продвинутая система верификации"
            description="Проверка продавцов через тестовые покупки и многоступенчатую систему подтверждения."
          />
          
          <FeatureCard 
            icon={<Shield />}
            title="Анти-фишинг защита"
            description="Персональный код подлинности для защиты от поддельных версий сайта и попыток клонирования."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-abacus-dark border border-abacus-accent/10 rounded-lg p-6 card-hover">
      <div className="bg-abacus-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-abacus-accent">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-abacus-text">{description}</p>
    </div>
  );
};

export default Features;
