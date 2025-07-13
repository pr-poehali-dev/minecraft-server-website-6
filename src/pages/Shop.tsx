import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Shop = () => {
  const [cart, setCart] = useState<{id: string, name: string, price: number, quantity: number}[]>([]);

  const privileges = [
    {
      id: '1',
      name: 'VIP',
      price: 299,
      features: ['Цветной ник', '+50 слотов в /home', 'Приват 20 регионов', 'Доступ к /fly'],
      color: 'from-green-500 to-green-600',
      popular: false
    },
    {
      id: '2', 
      name: 'PREMIUM',
      price: 599,
      features: ['Все VIP функции', '+100 слотов в /home', 'Приват 50 регионов', 'Кит раз в день', 'Доступ к /god'],
      color: 'from-blue-500 to-blue-600',
      popular: true
    },
    {
      id: '3',
      name: 'ELITE',
      price: 999,
      features: ['Все PREMIUM функции', 'Безлимитные /home', 'Приват 100 регионов', 'Кит 2 раза в день', 'Доступ к /gm'],
      color: 'from-purple-500 to-purple-600',
      popular: false
    }
  ];

  const items = [
    { id: '4', name: 'Алмазная броня', price: 150, description: 'Полный комплект зачарованной алмазной брони' },
    { id: '5', name: 'Незеритовый меч', price: 200, description: 'Зачарованный незеритовый меч с Резкостью V' },
    { id: '6', name: 'Элитры', price: 100, description: 'Крылья для полета по миру' },
    { id: '7', name: 'Шалкер-бокс', price: 75, description: 'Переносное хранилище предметов' },
  ];

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

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
              <a href="/statistics" className="text-purple-300 hover:text-white transition-colors">Статистика</a>
              <a href="#" className="text-white">Магазин</a>
              <a href="/wiki" className="text-purple-300 hover:text-white transition-colors">Википедия</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина ({cart.length})
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Icon name="Users" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Магазин сервера</h1>
            <p className="text-xl text-gray-300">Донат-привилегии и игровые предметы</p>
          </div>

          {/* Привилегии */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Донат-привилегии</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {privileges.map((privilege) => (
                <Card key={privilege.id} className={`bg-slate-800/50 border-purple-500/20 backdrop-blur-sm relative ${privilege.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {privilege.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-500 text-white px-3 py-1">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${privilege.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <Icon name="Crown" size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-white text-2xl">{privilege.name}</CardTitle>
                    <div className="text-3xl font-bold text-purple-400">{privilege.price}₽</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {privilege.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Icon name="Check" size={16} className="text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => addToCart(privilege)}
                      className={`w-full bg-gradient-to-r ${privilege.color} hover:opacity-90`}
                    >
                      Купить привилегию
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Игровые предметы */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Игровые предметы</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <Card key={item.id} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Icon name="Package" size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-white text-lg text-center">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 text-center">{item.description}</p>
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-purple-400">{item.price}₽</span>
                    </div>
                    <Button 
                      onClick={() => addToCart(item)}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      Добавить в корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Корзина */}
          {cart.length > 0 && (
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Корзина покупок
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                      <div>
                        <div className="text-white font-semibold">{item.name}</div>
                        <div className="text-gray-400 text-sm">Количество: {item.quantity}</div>
                      </div>
                      <div className="text-purple-400 font-semibold">
                        {item.price * item.quantity}₽
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-purple-500/20 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-white">Итого:</span>
                    <span className="text-2xl font-bold text-purple-400">{getTotalPrice()}₽</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оплатить
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;