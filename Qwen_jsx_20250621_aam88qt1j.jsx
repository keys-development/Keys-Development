import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 10H5V7l-2 2v8h2v-3h14v3h2v-8l-2-2v3z" />
              <path d="M12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="text-xl font-bold">Ключи</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-200 transition-colors">О нас</a>
            <a href="#services" className="hover:text-blue-200 transition-colors">Услуги</a>
            <a href="#team" className="hover:text-blue-200 transition-colors">Наша команда</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">Контакты</a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-blue-800 p-4 space-y-3">
            <a href="#about" className="block hover:text-blue-200 transition-colors">О нас</a>
            <a href="#services" className="block hover:text-blue-200 transition-colors">Услуги</a>
            <a href="#team" className="block hover:text-blue-200 transition-colors">Наша команда</a>
            <a href="#contact" className="block hover:text-blue-200 transition-colors">Контакты</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Агентство недвижимости <span className="text-blue-700">«Ключи»</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Помогаем находить и приобретать квартиры с торгов по банкротству, новостройки и вторичное жилье.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">О нас</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Нас связала любовь к недвижимости и желание помогать людям обрести свое пространство. Мы — агентство «Ключи», где каждый клиент становится частью нашей истории.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transform transition hover:scale-105 duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Выкуп квартир с торгов</h3>
              <p className="text-gray-600">
                Поможем выкупить квартиру с торгов по банкротству как для инвестиций, так и для личного проживания.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transform transition hover:scale-105 duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Новостройки</h3>
              <p className="text-gray-600">
                Подберем и оформим квартиру в новостройке с кэшбэком от застройщика.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transform transition hover:scale-105 duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Вторичное жилье</h3>
              <p className="text-gray-600">
                Сопровождение при покупке или продаже готового жилья на рынке вторичного жилья.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Наша команда</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center max-w-xs">
              <img
                src="https://placehold.co/200x200" 
                alt="Сергей"
                className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-blue-200 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Сергей</h3>
              <p className="text-gray-600">Сооснователь</p>
            </div>
            <div className="text-center max-w-xs">
              <img
                src="https://placehold.co/200x200" 
                alt="Мария"
                className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-blue-200 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Мария</h3>
              <p className="text-gray-600">Сооснователь</p>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
            Мы познакомились благодаря недвижимости, и она стала важной частью нашей жизни. Теперь мы делаем это вместе — помогаем другим найти свой дом.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Свяжитесь с нами</h2>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  placeholder="Ваше сообщение..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Агентство недвижимости «Ключи». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;