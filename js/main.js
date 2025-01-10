// const nav = document.querySelector('.block-navigation');
// const navItems = nav.querySelectorAll('li');

// navItems?.forEach((item) => {
//   item.addEventListener('click', () => {
//     navItems.forEach(item => {
//       item.classList.remove('nav-select');
//     });
//     item.classList.add('nav-select');
//   })
// })

// let currentIndex = 0;
// const carouselItems = document.querySelectorAll('.carousel-item');

// function goToSlide(index) {
//  if (index < 0) {
//  index = carouselItems.length - 1;
//  } else if (index >= carouselItems.length) {
//  index = 0;
//  }
//  currentIndex = index;
//  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function goToNextSlide() {
//  goToSlide(currentIndex + 1);
// }

// function goToPrevSlide() {
//  goToSlide(currentIndex - 1);
// }

// setInterval(goToNextSlide, 3000);

const menu = document.querySelector('.side-menu');
const menuContent = document.querySelector('.side-menu-block');
const closeMenuBtn = document.querySelector('.menu-exp');
const openMenuBtn = document.querySelector('.menu-open');

menu.addEventListener('click', () => {
  menuContent.classList.toggle('hide');
  closeMenuBtn.classList.toggle('hide');
  openMenuBtn.classList.toggle('hide');
  menu.classList.toggle('close');
})

const carouselInfo = document.querySelectorAll('.carousel-item');

carouselInfo.forEach(info => {
  info.addEventListener('click', () => {
    if (info.querySelector('.carousel-info').classList.contains('gazprom')) {
      console.log('Газпром');
    } else if (info.querySelector('.carousel-info').classList.contains('hospital')) {
      console.log('фмба');
      info.querySelector('.carousel-text').classList.remove('hide');
      info.querySelector('img[class="hospital"]').classList.add('hide');
    } else if (info.querySelector('.carousel-info').classList.contains('radezh')) {
      console.log('радеж');
    } else if (info.querySelector('.carousel-info').classList.contains('arnest')) {
      console.log('арнест');
    } else if (info.querySelector('.carousel-info').classList.contains('glt')) {
      console.log('глт');
    } else if (info.querySelector('.carousel-info').classList.contains('panaceya')) {
      console.log('панацея');
    } else if (info.querySelector('.carousel-info').classList.contains('rn')) {
      console.log('роснефть');
    } else if (info.querySelector('.carousel-info').classList.contains('volma')) {
      console.log('волма');
    }
  })
});

const gazpromText = ``;

const fmbaText = `Северо-Кавказский федеральный научно-клинический центр – это объединение нескольких крупных санаторно-курортных, медицинских и научно-исследовательских учреждений.
Основан в 2016 году по приказу Министерства здравоохранения Российской федерации. В СКФНКЦ вошли такие известные здравницы, как Медицинский центр «Юность», Санатории имени С.М.Кирова и Н.К.Крупской, «Салют», «Смена», «Нарат», а так же Клиническая больница (г. Лермонтов) и Научно-исследовательский центр курортологии и реабилитации (г. Сочи).
С внедрением системы удалось решить все поставленные задачи. Пользователями Docsvision стали около 150 сотрудников в 7 филиалах организации – это несколько санаториев, больница, научно-исследовательский центр. Сегодня в СЭД настроена работа с исходящей и входящей документацией, приказами и распоряжениями, служебными записками, договорами и протоколами комиссии, а также рядом специфических документов – таких, как заявка на выдачу со склада или служебная записка на закупку.
В результате внедрения СЭД удаленные филиалы получили возможность регистрации документов в единой базе организации и ускорили процессы исполнения заданий, поступающих из ФГБУ СКФНЦ. Соответственно сотрудники ФГБУ СКФНЦ получили возможность  оперативно  получать документы из филиалов.`;

const radezhText = `Крупнейшая торговая сеть на юге России «Радеж» оценила преимущества работы в системе электронного документооборота Docsvision.

Компания «Радеж» - одна из крупнейших торговых сетей на юге России, объединяющая более 150 магазинов и производств. 

Переход на электронный документооборот на базе платформы Docsvision позволил упростить и в разы ускорить обработку и согласование внутренней документации, а с помощью специально разработанного приложения-чата повысилась производительность сотрудников в работе с заданиями и совместными документами в СЭД.`;

const arnestText = ``;

const gltText = `Компания GLT автоматизировала согласование договоров на базе российской платформы Docsvision.

Выбор Docsvision для решения задач электронного документооборота определила гибкость платформы и наличие конструктора согласования, а также компетенция партнёра – компании «Эркер» - во внедрении на базе Docsvision. В соответствии с требованиями «GLT» были настроены карточки договора, различные маршруты согласования, в зависимости от категории документа, а также отображение полной истории маршрута документа. Сегодня в Docsvision согласовываются 3 типа договоров, процесс стал более удобным и быстрым.`;

const panaceyaText = ``;

const rnText = ``;

const volmaText = ``;