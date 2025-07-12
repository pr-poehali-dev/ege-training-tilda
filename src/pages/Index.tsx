import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 border-b bg-white/80 backdrop-blur-sm fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="GraduationCap" size={28} className="text-primary" />
            <span className="text-xl font-bold">ЕГЭ Английский</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#course"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              О курсе
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <Button variant="outline">Войти</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-50 text-primary border-primary/20">
              <Icon name="Target" size={16} className="mr-2" />
              Подготовка к ЕГЭ 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Подготовься к ЕГЭ по английскому на
              <span className="text-primary"> 80+</span> за 3–6 месяцев
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Курс с полными вариантами на каждом уроке, реальными заданиями
              ФИПИ и индивидуальной обратной связью
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Пройти бесплатный урок
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Узнать о курсе
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-gray-600">
                  полных вариантов ЕГЭ в месяц
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">90+</div>
                <div className="text-gray-600">средний балл выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3-6</div>
                <div className="text-gray-600">месяцев до результата</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="course" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как всё устроено
            </h2>
            <p className="text-xl text-gray-600">
              Каждый урок = мини-ЕГЭ. Ты учишься работать с форматом с первого
              занятия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon
                  name="Headphones"
                  size={32}
                  className="text-primary mb-4"
                />
                <CardTitle>Listening</CardTitle>
                <CardDescription>
                  Реальные аудио из банка ФИПИ с пошаговым разбором
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="BookOpen" size={32} className="text-primary mb-4" />
                <CardTitle>Reading</CardTitle>
                <CardDescription>
                  Тексты и задания точно как на экзамене
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="PenTool" size={32} className="text-primary mb-4" />
                <CardTitle>Writing</CardTitle>
                <CardDescription>
                  Проверка эссе с комментариями преподавателя
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="Mic" size={32} className="text-primary mb-4" />
                <CardTitle>Speaking</CardTitle>
                <CardDescription>
                  Тренировка устной части с обратной связью
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon name="Zap" size={32} className="text-primary mb-4" />
                <CardTitle>Grammar</CardTitle>
                <CardDescription>
                  Теория по кодификатору + практика на заданиях
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Icon
                  name="BookMarked"
                  size={32}
                  className="text-primary mb-4"
                />
                <CardTitle>Vocabulary</CardTitle>
                <CardDescription>
                  Словарь по темам кодификатора ФИПИ
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-8">
              Почему это работает?
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 font-semibold">Критерий</th>
                    <th className="text-center py-4 font-semibold text-primary">
                      Наш курс
                    </th>
                    <th className="text-center py-4 font-semibold text-gray-500">
                      Типичные курсы
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">Источник заданий</td>
                    <td className="py-4 text-center">
                      <Badge className="bg-green-50 text-green-700 border-green-200">
                        Банк ФИПИ
                      </Badge>
                    </td>
                    <td className="py-4 text-center text-gray-500">
                      «На коленке»
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Частота полных вариантов</td>
                    <td className="py-4 text-center font-semibold text-primary">
                      2 в неделю
                    </td>
                    <td className="py-4 text-center text-gray-500">
                      1 в месяц
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Проверка Writing/Speaking</td>
                    <td className="py-4 text-center">
                      <Icon
                        name="Check"
                        size={20}
                        className="text-green-600 mx-auto"
                      />
                    </td>
                    <td className="py-4 text-center">
                      <Icon
                        name="X"
                        size={20}
                        className="text-gray-400 mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Форматы обучения
            </h2>
            <p className="text-xl text-gray-600">
              Выбери подходящий тариф для достижения своей цели
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Самостоятельный</CardTitle>
                <CardDescription>
                  Подходит для дисциплинированных ребят со средним уровнем
                </CardDescription>
                <div className="text-3xl font-bold text-primary">2990₽</div>
                <div className="text-gray-500">в месяц</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Все уроки и задания
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Автоматическая проверка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Общий чат учеников
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Icon name="X" size={16} className="text-gray-400 mr-3" />
                    Нет Writing и Speaking
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Icon name="X" size={16} className="text-gray-400 mr-3" />
                    Нет чата с преподавателем
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-primary shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">С куратором</CardTitle>
                <CardDescription>
                  Оптимальный выбор — контроль, прогресс и поддержка
                </CardDescription>
                <div className="text-3xl font-bold text-primary">5790₽</div>
                <div className="text-gray-500">в месяц</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Всё из базового
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Проверка Writing и Speaking
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Чат с преподавателем
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Индивидуальная обратная связь
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            {/* VIP Plan */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">VIP</CardTitle>
                <CardDescription>
                  Подходит тем, кто хочет сдать на 90+ или с нуля
                </CardDescription>
                <div className="text-3xl font-bold text-primary">8900₽</div>
                <div className="text-gray-500">в месяц</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Всё из «С куратором»
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    1–2 групповых урока в неделю
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Групповые Speaking-разборы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Живые тренировки
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Gift" size={48} className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Попробуй бесплатно</h2>
          <p className="text-xl mb-8 opacity-90">
            Получи пробный урок с разбором всех частей ЕГЭ и убедись, что формат
            тебе подходит
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Download" size={20} className="mr-2" />
              Получить бесплатный урок
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
            >
              PDF-гид «Как писать эссе на 14 баллов»
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Что делать, если я с нуля?
              </AccordionTrigger>
              <AccordionContent>
                Наш VIP-тариф специально разработан для начинающих. Включает
                групповые занятия с преподавателем, где разбираются основы
                грамматики и лексики.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Можно ли подключаться в середине месяца?
              </AccordionTrigger>
              <AccordionContent>
                Да, можно подключиться в любой момент. Доступ к урокам
                предоставляется сразу после оплаты, включая все пройденные
                материалы текущего месяца.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Сколько времени в неделю нужно?
              </AccordionTrigger>
              <AccordionContent>
                Рекомендуем заниматься 4-6 часов в неделю: 2 урока по 1.5-2 часа
                + время на выполнение домашних заданий и повторение материала.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Можно ли купить на 1 месяц?
              </AccordionTrigger>
              <AccordionContent>
                Да, доступна оплата за 1 месяц. Также есть скидки при оплате за
                3 месяца (10%) и 6 месяцев (20%).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Какой тариф мне подойдёт?
              </AccordionTrigger>
              <AccordionContent>
                Если у вас есть базовые знания и высокая самодисциплина —
                выбирайте «Самостоятельный». Для большинства учеников оптимален
                тариф «С куратором». Если начинаете с нуля или нацелены на 90+
                баллов — рекомендуем VIP.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Готов начать подготовку?</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйся к тысячам учеников, которые уже сдали ЕГЭ на высокие
            баллы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Выбрать тариф
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2025 ЕГЭ Английский. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
