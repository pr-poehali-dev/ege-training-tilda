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
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 border-b bg-white fixed top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="GraduationCap" size={28} className="text-harvard-red" />
            <span className="text-xl font-bold font-merriweather text-harvard-red">
              ЕГЭ Английский
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#course"
              className="text-secondary hover:text-harvard-red transition-colors"
            >
              Программа
            </a>
            <a
              href="#pricing"
              className="text-secondary hover:text-harvard-red transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#about"
              className="text-secondary hover:text-harvard-red transition-colors"
            >
              О нас
            </a>
            <a
              href="#faq"
              className="text-secondary hover:text-harvard-red transition-colors"
            >
              FAQ
            </a>
            <Button
              variant="outline"
              className="border-harvard-red text-harvard-red hover:bg-harvard-red hover:text-white"
            >
              Пробный урок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-8 bg-harvard-red/10 text-harvard-red border-harvard-red/20 text-base px-4 py-2">
            Старт курса: 1 сентября
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold text-secondary mb-8 leading-tight font-merriweather">
            Онлайн-курс по подготовке к ЕГЭ
            <br />
            по английскому языку
          </h1>
          <p className="text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
            Готовься с преподавателями, которые знают, как вывести на{" "}
            <span className="text-harvard-red font-semibold">90+</span>
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            За 9 месяцев ты освоишь все темы и прорешаешь{" "}
            <span className="font-semibold text-harvard-red">72 варианта</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-harvard-red hover:bg-harvard-red/90 text-white"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать с пробного урока
            </Button>
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-harvard-gold hover:bg-harvard-gold/90 text-white"
            >
              Выбрать тариф
            </Button>
          </div>

          <div className="text-sm text-gray-500 mb-8">
            Форматы: от самостоятельной подготовки до VIP-сопровождения
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-secondary mb-6 font-merriweather">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow p-8">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-harvard-red/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Target" size={32} className="text-harvard-red" />
                </div>
                <CardTitle className="text-2xl font-merriweather text-secondary">
                  Методика 1:1 с экзаменом
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Все задания из официального банка ФИПИ — от аудирования до
                  эссе и монолога
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow p-8">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-harvard-red/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    name="BookOpen"
                    size={32}
                    className="text-harvard-red"
                  />
                </div>
                <CardTitle className="text-2xl font-merriweather text-secondary">
                  7 разделов в каждом уроке
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Уроки как полноценный вариант: практика и теория вместе
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow p-8">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-harvard-red/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    name="TrendingUp"
                    size={32}
                    className="text-harvard-red"
                  />
                </div>
                <CardTitle className="text-2xl font-merriweather text-secondary">
                  Прогресс, который видно
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Автоматическая проверка, аналитика, обратная связь
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow p-8">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-harvard-red/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-harvard-red" />
                </div>
                <CardTitle className="text-2xl font-merriweather text-secondary">
                  Поддержка на каждом этапе
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Проверка Writing и Speaking, обратная связь от кураторов,
                  групповые Zoom-разборы
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How Learning Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-secondary mb-6 font-merriweather">
              Как проходит обучение
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Система — это сила. Вот как выглядит твоя подготовка:
            </p>
          </div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-harvard-red rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-secondary font-merriweather">
                  4 вводных урока (старт сразу после оплаты)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <Icon
                    name="Headphones"
                    size={24}
                    className="text-harvard-red mb-2"
                  />
                  <div className="font-semibold text-secondary">
                    Как правильно делать Listening
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Icon
                    name="BookOpen"
                    size={24}
                    className="text-harvard-red mb-2"
                  />
                  <div className="font-semibold text-secondary">
                    Чтение и стратегии
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Icon
                    name="PenTool"
                    size={24}
                    className="text-harvard-red mb-2"
                  />
                  <div className="font-semibold text-secondary">
                    Writing с примерами
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Icon
                    name="Mic"
                    size={24}
                    className="text-harvard-red mb-2"
                  />
                  <div className="font-semibold text-secondary">
                    Speaking: структура и лайфхаки
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-harvard-red/5 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-harvard-red rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-secondary font-merriweather">
                  Затем — 2 полноценных урока каждую неделю
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Каждый состоит из 7 блоков:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {[
                  "Listening",
                  "Reading",
                  "Grammar",
                  "Vocabulary",
                  "Use of English",
                  "Writing",
                  "Speaking",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg text-center"
                  >
                    <div className="font-semibold text-secondary text-sm">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="bg-harvard-gold/20 rounded-xl p-6 inline-block">
                  <div className="text-2xl font-bold text-harvard-red mb-2">
                    72 варианта
                  </div>
                  <div className="text-gray-600">за 9 месяцев обучения</div>
                  <div className="text-sm text-gray-500 mt-2">
                    8 вариантов в месяц
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-secondary mb-6 font-merriweather">
              Форматы участия
            </h2>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-harvard-red text-white">
                  <tr>
                    <th className="text-left p-6 font-merriweather text-lg">
                      Тариф
                    </th>
                    <th className="text-center p-6 font-merriweather text-lg">
                      1 месяц
                    </th>
                    <th className="text-center p-6 font-merriweather text-lg">
                      4 месяца
                    </th>
                    <th className="text-center p-6 font-merriweather text-lg">
                      9 месяцев
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-6 font-semibold text-secondary">
                      Самостоятельный
                    </td>
                    <td className="p-6 text-center text-2xl font-bold text-harvard-red">
                      2 900 ₽
                    </td>
                    <td className="p-6 text-center text-2xl font-bold text-harvard-red">
                      9 800 ₽
                    </td>
                    <td className="p-6 text-center text-2xl font-bold text-harvard-red">
                      18 900 ₽
                    </td>
                  </tr>
                  <tr className="border-b bg-harvard-gold/5">
                    <td className="p-6 font-semibold text-secondary">
                      С куратором
                    </td>
                    <td className="p-6 text-center text-2xl font-bold text-harvard-red">
                      4 900 ₽
                    </td>
                    <td className="p-6 text-center text-2xl font-bold text-harvard-red">
                      16 900 ₽
                    </td>
                    <td className="p-6 text-center text-2xl font-bold text-harvard-red">
                      31 500 ₽
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-secondary">VIP</td>
                    <td className="p-6 text-center text-2xl font-bold text-harvard-red">
                      7 500 ₽
                    </td>
                    <td className="p-6 text-center text-2xl font-bold text-harvard-red">
                      24 900 ₽
                    </td>
                    <td className="p-6 text-center text-2xl font-bold text-harvard-red">
                      45 000 ₽
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Plan Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Self-Study Plan */}
            <Card className="border-2 hover:border-harvard-red/50 transition-colors bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <Icon
                    name="BookOpen"
                    size={24}
                    className="text-harvard-red mr-3"
                  />
                  <CardTitle className="text-2xl font-merriweather text-secondary">
                    Самостоятельный
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    2 урока в неделю
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Вся теория и практика
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
                    Общий чат с учениками
                  </li>
                </ul>
                <Button className="w-full bg-harvard-red hover:bg-harvard-red/90 text-white">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            {/* Curator Plan */}
            <Card className="border-2 border-harvard-gold shadow-lg relative bg-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-harvard-gold text-white text-sm px-3 py-1">
                  Популярный
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <Icon
                    name="Users"
                    size={24}
                    className="text-harvard-red mr-3"
                  />
                  <CardTitle className="text-2xl font-merriweather text-secondary">
                    С куратором
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Всё из «Самостоятельного»
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
                    Индивидуальные рекомендации
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Поддержка преподавателя в Telegram
                  </li>
                </ul>
                <Button className="w-full bg-harvard-gold hover:bg-harvard-gold/90 text-white">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            {/* VIP Plan */}
            <Card className="border-2 hover:border-harvard-red/50 transition-colors bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <Icon
                    name="Crown"
                    size={24}
                    className="text-harvard-red mr-3"
                  />
                  <CardTitle className="text-2xl font-merriweather text-secondary">
                    VIP
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
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
                    Групповой Zoom-разбор каждую неделю
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    Speaking-тренировки
                  </li>
                </ul>
                <Button className="w-full bg-harvard-red hover:bg-harvard-red/90 text-white">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Trial */}
      <section className="py-20 px-6 bg-harvard-red text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Icon name="Gift" size={32} className="text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-6 font-merriweather">
            Попробуй бесплатно
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Убедись, что тебе подойдёт формат — до покупки
          </p>

          <div className="bg-white/10 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-lg mb-6">
              Введи email — получи доступ к платформе и 1 уроку
            </p>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Твой email"
                className="bg-white text-gray-900 border-0 text-center text-lg py-3"
              />
              <Button
                size="lg"
                className="w-full bg-harvard-gold hover:bg-harvard-gold/90 text-white text-lg py-3"
              >
                Получить урок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-secondary mb-6 font-merriweather">
              О нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-merriweather">
                Анастасия
              </h3>
              <ul className="text-left text-gray-600 space-y-2 max-w-sm mx-auto">
                <li>
                  • студентка 3 курса МГУ факультета «Фундаментальная и
                  прикладная лингвистика»
                </li>
                <li>• репетитор с опытом более 3-х лет</li>
                <li>• сертификат преподавателя TESOL</li>
                <li>• подтвержденный С1 (IELTS 8.0)</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-merriweather">
                Софья
              </h3>
              <ul className="text-left text-gray-600 space-y-2 max-w-sm mx-auto">
                <li>• выпускница МГИМО с отличием</li>
                <li>• подтвержденный С1 (IELTS 7.5)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-secondary mb-6 font-merriweather">
              Часто задаваемые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                Могу ли я подключиться в октябре?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Да, можно подключиться в любой момент. Доступ к урокам
                предоставляется сразу после оплаты, включая все пройденные
                материалы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                Сколько времени нужно в неделю?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Рекомендуем заниматься 4-6 часов в неделю: 2 урока по 1.5-2 часа
                + время на выполнение домашних заданий.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                Что, если я совсем с нуля?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                VIP-тариф специально разработан для начинающих. Включает
                групповые занятия с преподавателем, где разбираются основы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                Как происходит оплата?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Оплата происходит через безопасную платежную систему. Доступна
                оплата картой или переводом.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                Что такое ProgressMe?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                ProgressMe — наша платформа для обучения, где проходят все
                уроки, проверяются задания и отслеживается прогресс.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 font-merriweather">
            Готов начать подготовку?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйся к сотням учеников, которые уже сдали ЕГЭ на высокие
            баллы
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-harvard-red hover:bg-harvard-red/90"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Выбрать тариф
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-white text-white hover:bg-white hover:text-secondary"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon
                  name="GraduationCap"
                  size={24}
                  className="text-harvard-red"
                />
                <span className="text-lg font-bold font-merriweather text-harvard-red">
                  ЕГЭ Английский
                </span>
              </div>
              <p className="text-gray-600 max-w-md">
                Онлайн-курс подготовки к ЕГЭ по английскому языку с проверенной
                методикой и высокими результатами.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-secondary mb-3">Навигация</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a
                      href="#course"
                      className="hover:text-harvard-red transition-colors"
                    >
                      Программа
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:text-harvard-red transition-colors"
                    >
                      Тарифы
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-harvard-red transition-colors"
                    >
                      О нас
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="hover:text-harvard-red transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-3">Контакты</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>📧 info@ege-english.ru</li>
                  <li>📱 @ege_english_bot</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 ЕГЭ Английский. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
