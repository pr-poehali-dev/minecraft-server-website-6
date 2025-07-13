import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <Icon name="Box" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">MineCraft</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-purple-300 hover:text-white transition-colors">Главная</a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">Сервера</a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">Статистика</a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">Википедия</a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">Магазин</a>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Icon name="Users" size={16} className="mr-2" />
              Войти через Discord
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                🎮 Реалистичное выживание
              </Badge>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Minecraft сервер
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {" "}нового поколения
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Погрузитесь в мир реалистичного выживания, где каждое решение имеет значение. 
                Уникальная экономика, кланы и невероятные приключения ждут вас.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                  <Icon name="Youtube" size={20} className="mr-2" />
                  Смотреть трейлер
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/img/fd7c0b86-e7dd-4787-b9e3-f18bf3c1382a.jpg" 
                  alt="Minecraft мир" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика онлайн */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">247</div>
                <div className="text-gray-300">Игроков онлайн</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1,856</div>
                <div className="text-gray-300">Всего игроков</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">42</div>
                <div className="text-gray-300">Активных кланов</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.8%</div>
                <div className="text-gray-300">Аптайм сервера</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Игровые режимы */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Игровые режимы</h2>
            <p className="text-xl text-gray-300">Выберите свой путь в нашем мире</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Выживание */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Sword" size={32} className="text-green-400" />
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Активен</Badge>
                </div>
                <CardTitle className="text-white text-xl">Реалистичное выживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Настоящее выживание с реалистичной механикой, экономикой и кланами. 
                  Стройте, торгуйте, сражайтесь за территории.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Игроков онлайн</span>
                    <span className="text-green-400">198/300</span>
                  </div>
                  <Progress value={66} className="h-2" />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Подключиться
                </Button>
              </CardContent>
            </Card>

            {/* SkyBlock */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Cloud" size={32} className="text-blue-400" />
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Скоро</Badge>
                </div>
                <CardTitle className="text-white text-xl">SkyBlock</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Выживание на небесном острове. Расширяйте территорию, 
                  развивайте экономику и соревнуйтесь с другими игроками.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Прогресс разработки</span>
                    <span className="text-blue-400">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <Button className="w-full" variant="outline" disabled>
                  В разработке
                </Button>
              </CardContent>
            </Card>

            {/* Моды */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Cog" size={32} className="text-purple-400" />
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Планируется</Badge>
                </div>
                <CardTitle className="text-white text-xl">Технический сервер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Сервер с модами для технических игроков. Автоматизация, 
                  сложные механизмы и продвинутые технологии.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Планируемый запуск</span>
                    <span className="text-purple-400">Q2 2024</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <Button className="w-full" variant="outline" disabled>
                  Уведомить о запуске
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Быстрые ссылки */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Icon name="BarChart3" size={48} className="text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Статистика</h3>
                <p className="text-gray-400 text-sm">Просмотр статистики игроков и серверов</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Icon name="BookOpen" size={48} className="text-green-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Википедия</h3>
                <p className="text-gray-400 text-sm">Гайды, правила и полезная информация</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Icon name="ShoppingCart" size={48} className="text-yellow-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Магазин</h3>
                <p className="text-gray-400 text-sm">Донат-привилегии и игровые предметы</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Icon name="Settings" size={48} className="text-purple-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Панель управления</h3>
                <p className="text-gray-400 text-sm">Административные функции</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900/50 border-t border-purple-500/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <Icon name="Box" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">MineCraft Server</span>
          </div>
          <p className="text-gray-400 mb-4">
            Лучший Minecraft сервер с реалистичным выживанием
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <Icon name="MessageSquare" size={20} />
            </a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <Icon name="Users" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;