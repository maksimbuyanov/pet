// eslint-disable-next-line import/prefer-default-export
export const nav_steps = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fivth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Ninth",
]

export const МФД = "МРД"
export const ДЕЛОВАЯ_СРЕДА = "ВАЖНАЯ ПЯТНИЦА"
export const ГОС_УСЛУГИ = "РОС.ПОМОЩЬ"
export const ФНС = "БАС"
export const БУХ_САМ = "САМ"
export const БУХ_АУТСОРС = "АУТСОРСИНГ"
export const БУХГАЛТЕР = "БУХГФЛТЕР"
export const ЧУЖАЯ = "ГОТОВАЯ КОФЕЙНЯ"
export const ФРАНШИЗА = "ФРАНШИЗА"
export const С_НУЛЯ = "ВСЕ С НУЛЯ"

export const setup = [
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Приве, друг! 
      Ты начинаешь новый вид деятельности, открываешь своё дело. 
      И для начала тебе нужно зарегистрировать свою деятельность. 
      Есть несколько способов, выбери наиболее удобный для сеюя, только внимательно изучи условия каждого варианта.`,
      title: "Регистрация ИП",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 800,
          gradient: "red", // из переменных градиентов
          title: МФД,
          listItems: [
            "Удобная локация возле дома в любом районе",
            "Вся процедура займет 5 рабочих дней",
            "Стоимость пошлины 4000 / 800 руб",
            "Потребуется запись и личный визит в МРД",
          ],
        },
        {
          cost: 800,
          gradient: "blue",
          title: ДЕЛОВАЯ_СРЕДА,
          listItems: [
            "Удобная локация возле дома",
            "Процедура замент 5 рабочих дней",
            "Стоимость пошлины 4000 / 800 руб",
            "Потребуется запись в МРД",
          ],
        },
        {
          cost: 0,
          gradient: "orange",
          title: ГОС_УСЛУГИ,
          listItems: [
            "Процедура займет 3 рабочих дня",
            "Пошлина отсутствует",
            "Потребуется подтвержденная учетная запись",
            "Потребуется усиленная электронная подпись",
            "Потребуется визит в инспекцию по итогам рассмотрения документов",
          ],
        },
        {
          cost: 800,
          gradient: "orange",
          title: ФНС,
          listItems: [
            "Инспекция в каждом районе",
            "Процедура займет 3 рабочих дня",
            "Стоимость пошлины 4000 / 800 руб",
            "Потребуется запись в инспекцию",
          ],
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `В процессе работы тебе потребуется вести учёт доходов и расходов, 
      осуществлять расчёты с поставщиками, сдавать отчётность в налоговый орган. 
      Возможно также нанимать сотрудникови платить им зарплату и страховые взносы.`,
      title: "Бухгалтерия",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          gradient: "red", // из переменных градиентов
          title: БУХ_САМ,
          listItems: `Можешь попробовать вести учёт и готовить отчётность самостоятельно. 
          Тебе придётся использовать бухгатлерские системы, электронные таблицы и ознакомиться с налоговым кодексом.`,
        },
        {
          cost: 250,
          gradient: "blue",
          title: БУХ_АУТСОРС,
          listItems: `Можешь нанять штатного бухгалтера, обеспечив его всей необходимой техникой и программами`,
        },
        {
          cost: 10000,
          gradient: "green",
          title: БУХГАЛТЕР,
          listItems: `Можешь воспользоваться готовым сервисом по ведению учёта и подготовке всей необходимой отчётности для государства`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: "Ты уже решил, какой путь выберешь?",
      title: "Поиск локации",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: null,
          gradient: "red", // из переменных градиентов
          title: ЧУЖАЯ,
          listItems: `Купи уже работающую кофейню и сэкономь время. 
          Однако обрати внимание на стоимость, придётся заплатить за труды предыдущего владельца.`,
        },
        {
          cost: null,
          gradient: "blue",
          title: ФРАНШИЗА,
          listItems: `Используй уже проверенную модель работы и бренд. 
          Это повысит узнаваемость кафе и позволит сократить расходы на маркетинг. 
          Однако придётся платить комиссию с каждого проданного кофе.`,
        },
        {
          cost: null,
          gradient: "green",
          title: С_НУЛЯ,
          listItems: `Попробуй все организовать по-своему. Это потребует времени, но позволит сэкономить на расходах.`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: "New some textable text",
      title: "Аренда помещения",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          gradient: "red", // из переменных градиентов
          title: БУХ_САМ,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 250,
          gradient: "blue",
          title: БУХ_АУТСОРС,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 10000,
          gradient: "green",
          title: БУХГАЛТЕР,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: "New some textable text",
      title: "Обустройство кафе",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          gradient: "red", // из переменных градиентов
          title: БУХ_САМ,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 250,
          gradient: "blue",
          title: БУХ_АУТСОРС,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 10000,
          gradient: "green",
          title: БУХГАЛТЕР,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: "New some textable text",
      title: "Подбор персонала",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          gradient: "red", // из переменных градиентов
          title: БУХ_САМ,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 250,
          gradient: "blue",
          title: БУХ_АУТСОРС,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 10000,
          gradient: "green",
          title: БУХГАЛТЕР,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: "New some textable text",
      title: "Организация процесса закупок",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          gradient: "red", // из переменных градиентов
          title: БУХ_САМ,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 250,
          gradient: "blue",
          title: БУХ_АУТСОРС,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 10000,
          gradient: "green",
          title: БУХГАЛТЕР,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: "New some textable text",
      title: "Получение разрешений",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          gradient: "red", // из переменных градиентов
          title: БУХ_САМ,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 250,
          gradient: "blue",
          title: БУХ_АУТСОРС,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
        {
          cost: 10000,
          gradient: "green",
          title: БУХГАЛТЕР,
          listItems: [
            "text for first card",
            "text for second card",
            "text for third card",
          ],
        },
      ],
    },
  },
]
