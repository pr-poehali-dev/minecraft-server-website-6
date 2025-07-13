import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Админ-панель</h1>
          <p className="text-xl text-gray-300">Управление сервером Minecraft</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Управление сервером */}
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Server" size={20} className="mr-2" />
                Сервер
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Icon name="Play" size={16} className="mr-2" />
                Запустить сервер
              </Button>
              <Button variant="outline" className="w-full border-red-500/30 text-red-300 hover:bg-red-500/10">
                <Icon name="Square" size={16} className="mr-2" />
                Остановить сервер
              </Button>
              <Button variant="outline" className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Перезагрузить
              </Button>
            </CardContent>
          </Card>

          {/* Управление игроками */}
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Users" size={20} className="mr-2" />
                Игроки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Добавить в вайтлист
              </Button>
              <Button variant="outline" className="w-full border-red-500/30 text-red-300 hover:bg-red-500/10">
                <Icon name="UserX" size={16} className="mr-2" />
                Забанить игрока
              </Button>
              <Button variant="outline" className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>

          {/* Настройки */}
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Settings" size={20} className="mr-2" />
                Настройки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Icon name="Cog" size={16} className="mr-2" />
                Конфигурация
              </Button>
              <Button variant="outline" className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                <Icon name="Download" size={16} className="mr-2" />
                Бэкап мира
              </Button>
              <Button variant="outline" className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                <Icon name="FileText" size={16} className="mr-2" />
                Логи сервера
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Статистика сервера */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Icon name="Cpu" size={32} className="text-blue-400 mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white">45%</div>
              <div className="text-gray-300 text-sm">Загрузка CPU</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Icon name="HardDrive" size={32} className="text-green-400 mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white">78%</div>
              <div className="text-gray-300 text-sm">Использование RAM</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Icon name="Database" size={32} className="text-yellow-400 mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white">23GB</div>
              <div className="text-gray-300 text-sm">Размер мира</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Icon name="Activity" size={32} className="text-purple-400 mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white">20.0</div>
              <div className="text-gray-300 text-sm">TPS</div>
            </CardContent>
          </Card>
        </div>

        {/* Последние действия */}
        <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle className="text-white">Последние действия</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { action: "Игрок Steve_Builder присоединился к серверу", time: "2 мин назад", type: "join" },
                { action: "Выдана привилегия VIP игроку Alex_Miner", time: "15 мин назад", type: "privilege" },
                { action: "Создан бэкап мира", time: "1 час назад", type: "backup" },
                { action: "Игрок Griefer123 забанен за нарушения", time: "2 часа назад", type: "ban" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={
                        item.type === 'join' ? 'UserPlus' :
                        item.type === 'privilege' ? 'Crown' :
                        item.type === 'backup' ? 'Download' : 'Shield'
                      } 
                      size={16} 
                      className={
                        item.type === 'join' ? 'text-green-400' :
                        item.type === 'privilege' ? 'text-yellow-400' :
                        item.type === 'backup' ? 'text-blue-400' : 'text-red-400'
                      } 
                    />
                    <span className="text-white">{item.action}</span>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300">
                    {item.time}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;