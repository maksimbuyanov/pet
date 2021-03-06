// eslint-disable-next-line import/prefer-default-export
import {
  ACCOUNTANT_OUTSOURCE,
  ACCOUNTANT_SELF,
  ALIEN,
  BAKANALITIKA,
  BIG_IN_RED_LINE,
  BOOKKEEPER,
  CREATE_BRAND,
  CREATE_COMBO_MENU,
  DARKSTORE,
  DECORATE_HALL,
  DO_NOTHING,
  ECONOMY,
  EXPEND_ASSORTMENT,
  EXPEND_STAFF,
  FNS,
  FRANCHISE,
  FROM_NOTHING,
  IMPORTANT_FRIDAY,
  INSERT_DELIVERY,
  LAUNCH_LOYALTY_PROGRAM,
  MFD,
  ORDER_OFF_LINE_PROMO,
  ORDER_ON_LINE_PROMO,
  PERMISSION_1,
  PERMISSION_2,
  PERSONAL_ANALISYS,
  PERSONAL_DISTRIBUTOR,
  REFRESH_MENU,
  RUS_HELPS_CO,
  SEARCH_WITH_FRIENDSHELP,
  SEARCHING_CANDIDATE,
  SMALL_DISTRICT,
  SMALL_IN_RED_LINE,
  STANDART,
  UPGRADE_RULES_OF_DRINK,
  VIP,
  WHOLESALE_BASE,
} from "./constansts"

export const nav_steps = [
  "Шаг 1",
  "Шаг 2",
  "Шаг 3",
  "Шаг 4",
  "Шаг 5",
  "Шаг 6",
  "Шаг 7",
  "Шаг 8",
  "Шаг 9",
  "Шаг 10",
  "Шаг 11",
]

export const setup = [
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Добро пожаловать в игру "Предприниматель".
      Тут ты сможешь отточить свои навыки ведения бизнеса и проанализировать
      результаты предпринятых действий. Но для начала нужно определиться с двумя
      главными деталями:`,
      title: `Привет!`,
    },
    choice: null,
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Ты начинаешь новый вид деятельности, открываешь своё дело.
      И для начала тебе нужно зарегистрировать свою деятельность.
      Есть несколько способов, выбери наиболее удобный для себя, только
      внимательно изучи условия каждого варианта.`,
      title: "Регистрация бизнеса",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 800,
          title: MFD,
          listItems: [
            "Удобная локация возле дома в любом районе",
            "Вся процедура займёт 5 рабочих дней",
            "Стоимость пошлины 4000 / 800 руб",
            "Потребуется запись и личный визит в МРД",
          ],
        },
        {
          cost: 800,
          title: IMPORTANT_FRIDAY,
          listItems: [
            "Удобная локация возле дома",
            "Процедура займёт 5 рабочих дней",
            "Стоимость пошлины 4000 / 800 руб",
            "Потребуется запись в МРД",
          ],
        },
        {
          cost: 0,
          title: RUS_HELPS_CO,
          listItems: [
            "Процедура займёт 3 рабочих дня",
            "Пошлина отсутствует",
            "Потребуется подтверждённая учётная запись",
            "Потребуется усиленная электронная подпись",
            "Потребуется визит в инспекцию по итогам рассмотрения документов",
          ],
        },
        {
          cost: 800,
          title: FNS,
          listItems: [
            "Инспекция в каждом районе",
            "Процедура займёт 3 рабочих дня",
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
      Возможно также нанимать сотрудников и платить им зарплату и страховые взносы.`,
      title: "Бухгалтерия",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          title: ACCOUNTANT_SELF,
          listItems: `Можешь попробовать вести учёт и готовить отчётность самостоятельно.
          Тебе придётся использовать бухгалтерские системы, электронные таблицы и ознакомиться с налоговым кодексом.`,
        },
        {
          cost: 250,
          title: ACCOUNTANT_OUTSOURCE,
          listItems: `Можешь нанять штатного бухгалтера, обеспечив его всей необходимой техникой и программами`,
        },
        {
          cost: 10000,
          title: BOOKKEEPER,
          listItems: `Можешь воспользоваться готовым сервисом по ведению учёта и подготовке всей необходимой отчётности для государства`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: "Ты уже решил, какой путь выберешь?",
      title: "Выбор концепции",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          title: ALIEN,
          listItems: `Купи уже работающую кофейню и сэкономь время.
          Однако обрати внимание на стоимость, придётся заплатить за труды предыдущего владельца.`,
        },
        {
          cost: 0,
          title: FRANCHISE,
          listItems: `Используй уже проверенную модель работы и бренд.
          Это повысит узнаваемость кафе и позволит сократить расходы на маркетинг.
          Однако придётся платить комиссию с каждого проданного кофе.`,
        },
        {
          cost: 0,
          title: FROM_NOTHING,
          listItems: `Попробуй все организовать по-своему. Это потребует времени, но позволит сэкономить на расходах.`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Тебе предстоит выбрать место и адрес, где будет находиться твоё
      дело. Это важный этап, поскольку от проходимости места сильно зависит
      сколько у тебя будет покупателей`,
      title: "Поиск Локации",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 18760,
          title: BAKANALITIKA,
          listItems: `Ты можешь заказать сервис для малого и среднего бизнеса по оценке
          конкурентной среды в российских городах и потенциальных локаций для размещения торговых
          точек. В стоимость входит аналитика по одному району в т.ч. информация о количестве жителей локации с
          информацией о расходах и количестве покупок и уникальных покупателей, возвращаемость,
          число торгово-сервисных точек конкурентов.`,
        },
        {
          cost: 0,
          title: PERSONAL_ANALISYS,
          listItems: `Тебе придётся проанализировать количество точек конкурентов через общедоступные
          сервисы. Провести анализ проходимости точек на месте. Оценить примерный средний чек каждой из точек.
          Стоимость - бесплатно, твоё время Временные затраты - от одного дня на анализ точки конкурентов
          и один день на анализ данных в Интернете.`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Ты определился с районом и улицей. Теперь тебе предстоит найти
      помещение для аренды. На этом этапе очень важно обеспечить юридическую
      чистоту этапа и внимательно изучить условия договора аренды.`,
      title: "Аренда помещения",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 150000,
          title: SMALL_DISTRICT,
          listItems: `Маленькое помещение - маленькие расходы. Пускай ты и в дали
          от городской суеты, но тут не так много конкурентов и есть потенциал роста.`,
        },
        {
          cost: 300000,

          title: SMALL_IN_RED_LINE,
          listItems: `Ты займешь ровно середину. К тебе можно доехать на метро
          или случайно забрести гуляя мимо. Проходящего трафика не много, зато
          цена не кусается`,
        },
        {
          cost: 450000,
          title: BIG_IN_RED_LINE,
          listItems: `Большая кофейня - больше посетителей! Шикарное двухэтажное
          здание прямо у метро не оставит тебя в минусе. Конечно не сразу, но
          когда-нибудь точно...`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Приступаем к визуально-интересным вещам. Мебель и оборудование -
      максимально важны, ведь от них зависит уют, настроение и главное качество
      продукции твоего кафе. Как будешь двигаться в этом направлении?`,
      title: "Обустройство кафе",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        // {
        //   cost: null,
        //   title: АРЕНДА_ОБОРУДОВАНИЯ,
        //   listItems: `Можешь рассмотреть возможность аренды мебели и оборудования.
        //   Все будет на месте уже через месяц, да и цена привлекательная. Но сам
        //   понимаешь, оборудование не новое, нужно заложить сумму на его ремонт
        //   на ежегодной основе.`,
        // },
        // {
        //   cost: null,
        //   title: ПОКУПКА_ОБОРУДОВАНЯ,
        //   listItems: `Можно купить новую мебель и новое оборудование. Стоить
        //   это будет и придется немного подождать - для твоего дизайна кафе мебель
        //   будет изготавливаться 3 месяца. Зато как красиво будут выглядеть новые
        //   блестящие столики и та самая итальянская кофемашина!`,
        // },
        {
          cost: 800000,
          title: ECONOMY,
          listItems: `Только необходимое для работы, ничего лишнего. Ведь кофейня
          это про атмосферу.`,
        },
        {
          cost: 1000000,
          title: STANDART,
          listItems: `Стандартный набор. Минимум мебели, большая стойка, надёжная
          кофемашина.`,
        },
        {
          cost: 1300000,
          title: VIP,
          listItems: `Только лучшее оборудование, никакой мебели из швецкого
          магазина. Гость должен сразу понять, что тут подаётся лучший кофе.`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Следующий немаловажный шаг = твоя будущая команда! Те, кто каждый
      день будут общаться с твоими клиентами, заряжать их хорошим настроением
      и предоставлять качественный сервис`,
      title: "Подбор персонала",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          title: SEARCH_WITH_FRIENDSHELP,
          listItems: `У тебя есть много знакомых в сфере общественных заведений,
          у них есть большая база необходимых тебе сотрудников. Такое решение
          более оптимально с точки зрения затрат, но займёт больше времени,
          ведь отбирать кандидатов и назначать им встречи тебе придётся самому.`,
        },
        {
          cost: 0,
          title: SEARCHING_CANDIDATE,
          listItems: `Воспользуйся сервисом "Найти кадр" ! Ты сможешь быстро
          найти все необходимые компетенции на проверенной площадке.`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `У тебя есть помещение и персонал, а чем и как кормить будешь
      любимых клиентов?`,
      title: "Организация процесса закупок",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          title: WHOLESALE_BASE,
          listItems: `Хочешь сделать хорошо, сделай сам. Недалеко от города
          есть хорошие оптовые базы, но ездить туда очень долго. Подумай
          сколько сил, времени ты потратишь.`,
        },
        {
          cost: 0,
          title: DARKSTORE,
          listItems: `Можно обратиться на маркетплейс и делать заказ в режиме
          онлайн, не нужно тратить время на дорогу и всегда есть большой выбор.
          Ты будешь экономить время!`,
        },
        {
          cost: 8000,
          title: PERSONAL_DISTRIBUTOR,
          listItems: `Можно найти своего "Личного" поставщика. Обрати внимание
          сколько и каких затрат потребуется для поиска своего человека.`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Итак, у тебя есть помещение, оборудование, персонал. Ты
      определился с поставщиками. Все ли у тебя готово к открытию?`,
      title: "Получение разрешений",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          title: PERMISSION_1,
          listItems: `Тебе предстоит получить разрешение Р.Т.К. Ты работаешь в
          сфере общественного питания и у тебя должны соблюдать все нормы и
          правила по изготовлению, хранению, и реализации питания`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Итак, у тебя есть помещение, оборудование, персонал. Ты
      определился с поставщиками. Все ли у тебя готово к открытию?`,
      title: "Получение разрешений",
    },
    choice: {
      positionClass: "initial__choice",
      cardsArr: [
        {
          cost: 0,
          title: PERMISSION_2,
          listItems: `Получить разрешение также необходимо, чтобы быть
          уверенным к готовности к ситуациям связанным с пожарами, газовым и
          электрооборудованием.`,
        },
      ],
    },
  },
  {
    dialog: {
      positionClass: "initial__dialog",
      text: `Ты прошёл все необходимые основные шаги для открытия своего
      бизнеса и готов к открытию! Начиная с первого квартала работы в кофейне ты
      можешь выбирать 1 бизнес решение, которое так или иначе повлияет на твою
      выручку и количество твоих чеков. Перед каждым выбором ознакомься с
      последствиями решения, подумай, насколько вовремя нужно принимать то
      или иное. Вне зависимости от твоего решения , на ежеквартальной основе
      у тебя будет списываться сумма на погашение кредита, заработную
      плату сотрудников и закупку продукции в трехмесячном эквиваленте
      и ежегодно сумма на ремонт оборудования Я буду наблюдать за тобой и время
      от времени заглядывать в гости - надеюсь ты угостишь друга вкусным кофе!
      Не забудь - по истечении всех шагов ты должен быть в плюсе!`,
      title: `Поздравляю!`,
    },
    choice: null,
  },
]

export const startGameText = `Вот он - твой долгожданный проект! Предлагаю для
начала посмотреть, как будет функционировать твоя бизнес-модель, которую ты так
тщательно прорабатывал на предыдущих шагах. Нажми на часы и увидишь результаты
после первого периода!`

export const secondStepText = `Выглядит очень достойно! Ну а теперь, выбор за тобой!`

export const negativeStart = `Похоже твоей налички не хватило для старта, попробуй
поднакопить еще и пройти заново`

export const finalGameText = `Поздравляю, друг! Казалось, что мы только вчера открылись, а мы уже
так много всего прошли и подошли к завершению. Внимательно изучи всю итоговую аналитику и проверь себя!`

export const userActions = [
  {
    title: EXPEND_ASSORTMENT,
    visitors: 1000, // увеличился на 1000
    cr: 0.1, // Конверсия в покупку увеличилась на 10%. Может быть отрицательным
    avPrice: -50, // ср чек уменьшился на 50
    avPayment: 1, // увеличивает количество покупок на одного клиента на 1 ед
    effect: `Увеличит количество посетителей, конверсию в покупку, количество
    покупок на одного клиента. Но уменьшит средний чек`,
    text: `Ура, покупателей стало ещё больше. Твоя кофейня пользуется ещё
    большей популярностью`,
  },
  {
    title: INSERT_DELIVERY,
    visitors: 5000,
    commissions: -0.15, // уменьшает маржу на 15%
    cost: 100000,
    effect: `Увеличит количество посетителей, но уменьшит маржу. Цена 100 000 руб.`,
    text: `Теперь твой божественный кофе могут попробовать даже в самом далёком
    уголке города без отрыва от работы или домашних дел.`,
  },
  {
    title: EXPEND_STAFF,
    cost: 50000,
    visitors: 2000,
    salary: 50000,
    effect: `Увеличит количество посетителей и расходы на зарплату сотрудникам. Цена 50 000 руб.`,
    text: `Один бариста хорошо, а два ещё лучше. Но помни, чем больше штат, тем
    больше расходы`,
  },
  {
    title: ORDER_OFF_LINE_PROMO,
    cost: 70000,
    visitors: 1500,
    cr: 0.05,
    effect: `Увеличит количество посетителей и конверсию в покупку. Цена 70 000 руб.`,
    text: `Старые и проверенные методы маркетинга работают стабильно. Листовки с
    рекламой на каждом углу и теперь о твоё кафе знает каждый.`,
  },
  {
    title: ORDER_ON_LINE_PROMO,
    cost: 50000,
    visitors: 2500,
    cr: 0.05,
    effect: `Увеличит количество посетителей и конверсию в покупку. Цена 50 000 руб.`,
    text: `Вся молодёжь сейчас в сети, а это 83% твоей целевой аудитории.
    Пара платных постов в соц. сетях и таргетинг делают своё дело, посетителей
    стало значительно больше`,
  },
  {
    title: LAUNCH_LOYALTY_PROGRAM,
    cost: 10000,
    cr: 0.05,
    effect: `Увеличит конверсию в покупку. Цена 10 000 руб.`,
    text: `Кто в наше время не любит бесплатный кофе, даже если перед этим
    нужно купить 9 чашек. Программа лояльности в деле и твоя конверсия увеличилась.`,
  },
  {
    title: REFRESH_MENU,
    avPrice: 20,
    avPayment: 1,
    effect: `Увеличит средний чек и число покупок на одного платящего.`,
    text: `Более смачные картинки и красочное описание. Аппетит просыпается от
    одного взгляда на твоё меню. Что будешь делать дальше?`,
  },
  {
    title: DECORATE_HALL,
    cost: 80000,
    visitors: 2000,
    avPayment: 1,
    effect: `Увеличит количество посетителей и число покупок на одного
    платящего. Цена 80 000 руб.`,
    text: `В любое время нужно думать о том, как поднять настроение своим
    клиентам!  Потрясающая новогодняя атмосфера в кофейне привлекают ещё больше
    гостей`,
  },
  {
    title: UPGRADE_RULES_OF_DRINK,
    cr: 0.05,
    effect: `Увеличит конверсию в покупку.`,
    text: `Милые подписи на стаканчиках заставят улыбнуться каждого клиента.
    Отличный трюк, что бы увеличить конверсию в покупку. Так держать.`,
  },
  {
    title: CREATE_COMBO_MENU,
    visitors: 3000,
    cr: -0.1,
    effect: `Увеличит количество посетителей, но уменьшит конверсию в покупку. Цена 100 000 руб.`,
    text: `"3 по цене 2", "латте и круассан вместе дешевле на 15%",
    а фантазия у тебя работает. Теперь гости приходят большими группами, пускай
    и покупают не все.`,
  },
  {
    title: CREATE_BRAND,
    cost: 100000,
    visitors: 1000,
    avPrice: 20,
    effect: `Увеличит количество посетителей и средний чек. Цена 100 000 руб.`,
    text: `Дизайн штука дорогая, но оно того стоит. В рядах посетителей начали
    появляться солидные люди в костюмах, а вместе с ними подрос и средний чек.`,
  },
  {
    title: DO_NOTHING,
    effect: `Иногда нужно отпустить ситуацию посмотреть как все будет работать без тебя.`,
    text: `Пускать все на самотёк долго нельзя. Бизнес - дело для активных. Уже
    решил что будешь делать теперь?`,
  },
]

export const blackGeese = [
  {
    personalClass: `covid`,
    title: "Пандемия",
    visitors: -4000,
    cr: -0.05,
    text: `Очень грустно говорить, но поток покупателей из-за пандемии
    практически прекратился. Но тебе повезло, если успел подключить
    онлайн доставку.`,
    enemy: INSERT_DELIVERY,
  },
  {
    personalClass: `university`,
    title: "Открылся рядом университет",
    visitors: 2000,
    avPrice: -20,
    text: `Ты "сорвал джекпот", рядом открылся Университет и теперь все зависит
    от скорости работы и количества твоих бариста.`,
    enemy: EXPEND_STAFF,
  },
  {
    personalClass: `opponent`,
    title: "Открылся рядом конкурент",
    visitors: -1000,
    cr: -0.15,
    commissions: -0.2,
    text: `В конкуренции выигрывает сильнейший, покупатель голосует деньгами за
    качество, цену и разнообразие. Подумай, что ещё можно сделать в этой борьбе?`,
    enemy: EXPEND_ASSORTMENT,
  },
  {
    personalClass: `rate-fall`,
    title: "Девальвация рубля в 2 раза",
    visitors: -1500,
    cr: -0.05,
    commissions: -0.05,
    text: `К сожалению геополитические риски не отступают и рубль ослаб. Нужно
    обдумать как снизить зависимость от импортных заказов.`,
  },
  {
    personalClass: `brasil`,
    title: "Случился неурожай кофе в Бразилии",
    avPrice: 50,
    commissions: -0.1,
    text: `И такое случается. В Бразилии сильнейшая засуха и цены на кофе взлетели!
    Твоя маржа упала, нужно срочно исправлять положение.`,
  },
]
