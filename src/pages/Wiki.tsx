import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Wiki = () => {
  const guides = [
    { title: "Начало игры", description: "Первые шаги на сервере", difficulty: "Новичок", icon: "PlayCircle" },
    { title: "Система кланов", description: "Создание и управление кланом", difficulty: "Средний", icon: "Users" },
    { title: "Экономика сервера", description: "Торговля и заработок денег", difficulty: "Средний", icon: "DollarSign" },
    { title: "PvP гайд", description: "Сражения с другими игроками", difficulty: "Продвинутый", icon: "Sword" }
  ];

  const rules = [
    "Запрещены читы и модификации дающие преимущество",
    "Уважительное отношение к другим игрокам",
    "Запрещен спам в чате",
    "Не нарушайте постройки других игроков",
    "Запрещена реклама других серверов"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Википедия сервера</h1>
          <p className="text-xl text-gray-300">Гайды, правила и полезная информация</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Гайды */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Гайды для игроков</h2>
            <div className="grid gap-6">
              {guides.map((guide, index) => (
                <Card key={index} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon name={guide.icon as any} size={24} className="text-purple-400" />
                        <CardTitle className="text-white">{guide.title}</CardTitle>
                      </div>
                      <Badge className={`${
                        guide.difficulty === 'Новичок' ? 'bg-green-500/20 text-green-300' :
                        guide.difficulty === 'Средний' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {guide.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{guide.description}</p>
                    <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                      Читать гайд
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Команды */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Полезные команды</h2>
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { cmd: "/spawn", desc: "Телепорт на спавн" },
                      { cmd: "/home", desc: "Телепорт домой" },
                      { cmd: "/sethome", desc: "Установить дом" },
                      { cmd: "/clan create", desc: "Создать клан" },
                      { cmd: "/clan invite", desc: "Пригласить в клан" },
                      { cmd: "/money", desc: "Посмотреть баланс" },
                      { cmd: "/trade", desc: "Торговля с игроком" },
                      { cmd: "/rules", desc: "Показать правила" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <code className="text-purple-400 font-mono">{item.cmd}</code>
                        <span className="text-gray-300 text-sm">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Правила и FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Правила сервера</h2>
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm mb-8">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <Icon name="AlertCircle" size={16} className="text-red-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "Как попасть на сервер?", a: "IP: play.minecraft-server.ru" },
                { q: "Есть ли приват?", a: "Да, используйте /claim для приватизации" },
                { q: "Можно ли играть с друзьями?", a: "Конечно! Создавайте кланы и стройте вместе" },
                { q: "Как получить привилегии?", a: "Через наш магазин или участвуя в конкурсах" }
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                    <p className="text-gray-300">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wiki;