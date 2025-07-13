import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {
  const playerActivityData = [
    { name: 'Пн', players: 45 },
    { name: 'Вт', players: 52 },
    { name: 'Ср', players: 48 },
    { name: 'Чт', players: 61 },
    { name: 'Пт', players: 78 },
    { name: 'Сб', players: 95 },
    { name: 'Вс', players: 89 },
  ];

  const serverModeData = [
    { name: 'Выживание', value: 78, color: '#22c55e' },
    { name: 'Creative', value: 12, color: '#3b82f6' },
    { name: 'Mini-games', value: 10, color: '#f59e0b' },
  ];

  const topPlayers = [
    { name: 'Steve_Builder', time: '156ч', blocks: '12,854' },
    { name: 'Alex_Miner', time: '142ч', blocks: '10,923' },
    { name: 'Creeper_Hunter', time: '138ч', blocks: '9,876' },
    { name: 'Diamond_King', time: '125ч', blocks: '8,654' },
    { name: 'Redstone_Master', time: '119ч', blocks: '7,432' },
  ];

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
              <a href="/" className="text-purple-300 hover:text-white transition-colors">Главная</a>
              <a href="#" className="text-white">Статистика</a>
              <a href="/shop" className="text-purple-300 hover:text-white transition-colors">Магазин</a>
              <a href="/wiki" className="text-purple-300 hover:text-white transition-colors">Википедия</a>
              <a href="/admin" className="text-purple-300 hover:text-white transition-colors">Админ</a>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Icon name="Users" size={16} className="mr-2" />
              Войти через Discord
            </Button>
          </div>
        </div>
      </nav>

      {/* Основной контент */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Статистика сервера</h1>
            <p className="text-xl text-gray-300">Анализ активности игроков и производительности сервера</p>
          </div>

          {/* Основные метрики */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon name="Users" size={32} className="text-blue-400 mb-2 mx-auto" />
                <div className="text-3xl font-bold text-blue-400 mb-1">247</div>
                <div className="text-gray-300 text-sm">Онлайн сейчас</div>
                <div className="text-green-400 text-xs mt-1">+12% за неделю</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" size={32} className="text-green-400 mb-2 mx-auto" />
                <div className="text-3xl font-bold text-green-400 mb-1">98.7%</div>
                <div className="text-gray-300 text-sm">Аптайм</div>
                <div className="text-green-400 text-xs mt-1">30 дней</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon name="Zap" size={32} className="text-yellow-400 mb-2 mx-auto" />
                <div className="text-3xl font-bold text-yellow-400 mb-1">18ms</div>
                <div className="text-gray-300 text-sm">Средний пинг</div>
                <div className="text-green-400 text-xs mt-1">Отлично</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon name="Activity" size={32} className="text-purple-400 mb-2 mx-auto" />
                <div className="text-3xl font-bold text-purple-400 mb-1">20.0</div>
                <div className="text-gray-300 text-sm">TPS сервера</div>
                <div className="text-green-400 text-xs mt-1">Стабильно</div>
              </CardContent>
            </Card>
          </div>

          {/* Графики */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* График активности игроков */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="BarChart3" size={20} className="mr-2" />
                  Активность игроков за неделю
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={playerActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #7c3aed',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Bar dataKey="players" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Распределение по режимам */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="PieChart" size={20} className="mr-2" />
                  Популярность режимов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={serverModeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {serverModeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #7c3aed',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-4 mt-4">
                  {serverModeData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-300 text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Топ игроков */}
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Trophy" size={20} className="mr-2" />
                Топ игроков по активности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPlayers.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Icon name="User" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{player.name}</div>
                        <div className="text-gray-400 text-sm">Время в игре: {player.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-purple-400 font-semibold">{player.blocks}</div>
                      <div className="text-gray-400 text-sm">блоков размещено</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Statistics;