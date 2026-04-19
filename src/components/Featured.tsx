const services = [
  { icon: "🔧", title: "Техническое обслуживание", desc: "Плановое ТО по регламенту производителя" },
  { icon: "🔍", title: "Компьютерная диагностика", desc: "Точное выявление неисправностей за 30 минут" },
  { icon: "⚙️", title: "Ремонт двигателя", desc: "Капитальный и текущий ремонт любой сложности" },
  { icon: "🛞", title: "Шиномонтаж", desc: "Замена, балансировка и хранение шин" },
  { icon: "🚗", title: "Кузовной ремонт", desc: "Покраска и устранение вмятин без следов" },
  { icon: "❄️", title: "Заправка кондиционера", desc: "Дозаправка фреоном и проверка системы" },
];

export default function Featured() {
  return (
    <div id="services" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/ec92e84b-7d36-4b0d-ae86-b89c5d1dcf2a/files/75f39219-4480-4d6e-a655-4b0af804b2e4.jpg"
          alt="Работа механика в автосервисе"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Наши услуги</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Полный цикл обслуживания вашего автомобиля — от диагностики до выдачи с гарантией качества.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {services.map((s) => (
            <div key={s.title} className="flex items-start gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="font-semibold text-sm text-neutral-900">{s.title}</p>
                <p className="text-xs text-neutral-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Записаться на ТО
        </button>
      </div>
    </div>
  );
}