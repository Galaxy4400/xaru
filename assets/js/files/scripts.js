// Инициализация динамической адаптации
new Adapt();

// Инициализация модального окна
const modal = new Modal({ animation: "fadeIn" });

// Инициализация главного меню
new Menu("main-menu");

new Tabs("exchange-tabs", { blinkSpeed: 0 });
