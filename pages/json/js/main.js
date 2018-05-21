$(document).ready(function(){
  let colorMaps = prompt('Цвет карты', 'black');
  let colorBorder = prompt('Цвет границ', 'white');
  // let countryCode = window.country_code;
  let countryCode = "UA";
  let colorLocation = prompt('Цвет города', 'yellow');
  let region = prompt('Город', '');
  // let locationRegion = "Бровары";
  let locationRegion = $('.block-location').text();
  if(region.length > 0) {
      locationRegion = region;
  }
  let land = $(".land");
  let countryBlock = (".block_" + countryCode).toLowerCase();
  $('.country-block').find('.land').css({"fill": colorMaps, "stroke": colorBorder});
  $('.country-block').find('.water').css({"fill": "transparent", "stroke": "transparent"});
  $(countryBlock).css("display", "block");

  let arrUK = {
        country: ["Украине"],
        kiev: ["Киевская область", "Киев", "Белая Церковь", "Бровары", "Борисполь", "Фастов", "Ирпень", "Вишнёвое", "Васильков", "Боярка", "Обухов", "Буча", "Переяслав-Хмельницкий", "Вышгород", "Славутич", "Яготин", "Богуслав", "Сквира", "Березань", "Украинка", "Кагарлык", "Тетиев", "Узин", "Мироновка", "Тараща", "Ржищев"],
        poltava: ["Полтавская область", "Полтава", "Гадяч", "Глобино", "Горишние Плавни", "Гребёнка", "Заводское", "Зеньков", "Карловка", "Кобеляки", "Кременчуг", "Лохвица", "Лубны", "Миргород", "Пирятин", "Хорол"],
        uzhgorod: ["Закарпатская область", "Ужгород", "Берегово", "Виноградов", "Иршава", "Мукачево", "Перечин", "Рахов", "Свалява", "Тячев", "Хуст", "Чоп"],
        lviv: ["Львовская область", "Львов", "Белз", "Бобрка", "Борислав", "Броды", "Буск", "Великие Мосты", "Винники", "Глиняны", "Городок", "Добромиль", "Дрогобыч", "Дубляны", "Жидачов", "Жолква", "Золочев", "Каменка-Бугская", "Комарно", "Моршин", "Мостиска", "Новояворовск", "Новый Калинов", "Новый Роздол", "Перемышляны", "Пустомыты", "Рава-Русская", "Радехов", "Рудки", "Самбор", "Сколе", "Сокаль", "Сосновка", "Старый Самбор", "Стебник", "Стрый", "Судовая Вишня", "Трускавец", "Турка", "Угнев", "Ходоров", "Хыров", "Червоноград", "Яворов"],
        ivano_frankivsk: ["Ивано-Франковская область", "Ивано-Франковск", "Болехов", "Бурштын", "Галич", "Городенка", "Долина", "Калуш", "Коломыя", "Косов", "Надворная", "Рогатин", "Снятын", "Тлумач", "Тысменица", "Яремче"],
        chernivtsi: ["Черновицкая область", "Черновцы", "Вашковцы", "Вижница", "Герца", "Заставна", "Кицмань", "Новоднестровск", "Новоселица", "Сокиряны", "Сторожинец", "Хотин"],
        ternopil: ["Тернопольская область", "Тернополь", "Бережаны", "Борщёв", "Бучач", "Залещики", "Збараж", "Зборов", "Копычинцы", "Кременец", "Лановцы", "Монастыриска", "Подгайцы", "Почаев", "Скалат", "Теребовля", "Хоростков", "Чортков", "Шумск"],
        lutsk: ["Волынская область", "Луцк", "Берестечко", "Владимир-Волынский", "Горохов", "Камень-Каширский", "Киверцы", "Ковель", "Любомль", "Нововолынск", "Рожище", "Устилуг"],
        rivne: ["Ровненская область", "Ровно", "Березно", "Дубно", "Дубровица", "Здолбунов", "Корец", "Костополь", "Вараш", "Острог", "Радивилов", "Сарны"],
        khmelnytskyi: ["Хмельницкая область", "Хмельницкий", "Волочиск", "Городок", "Деражня", "Дунаевцы", "Изяслав", "Каменец-Подольский", "Красилов", "Нетешин", "Полонное", "Славута", "Староконстантинов", "Шепетовка"],
        zhitomir: ["Житомирская область", "Житомир", "Андрушёвка", "Барановка", "Бердичев", "Коростень", "Коростышев", "Малин", "Новоград-Волынский", "Овруч", "Олевск", "Радомышль", "Чуднов"],
        vinnitsa: ["Винницкая область", "Винница", "Бар", "Бершадь", "Гайсин", "Гнивань", "Жмеринка", "Ильинцы", "Казатин", "Калиновка", "Ладыжин", "Липовец", "Могилёв-Подольский", "Немиров", "Погребище", "Тульчин", "Хмельник", "Шаргород", "Ямполь"],
        odessa: ["Одесская область", "Одесса", "Ананьев", "Арциз", "Балта", "Белгород-Днестровский", "Беляевка", "Березовка", "Болград", "Вилково", "Измаил", "Килия", "Кодыма", "Подольск", "Раздельная", "Рени", "Татарбунары", "Теплодар", "Черноморск", "Южное"],
        mykolaiv: ["Николаевская область", "Николаев", "Баштанка", "Вознесенск", "Новая Одесса", "Новый Буг", "Очаков", "Первомайск", "Снигирёвка", "Южноукраинск"],
        kirovohrad: ["Кировоградская область", "Кировоград", "Александрия", "Благовещенское", "Бобринец", "Гайворон", "Долинская", "Знаменка", "Кропивницкий", "Малая Виска", "Новомиргород", "Новоукраинка", "Помошная", "Светловодск"],
        cherkassy: ["Черкасская область", "Черкассы", "Ватутино", "Городище", "Жашков", "Звенигородка", "Золотоноша", "Каменка", "Канев", "Корсунь-Шевченковский", "Монастырище", "Смела", "Тальное", "Умань", "Христиновка", "Чигирин", "Шпола"],
        chernigov: ["Черниговская область", "Чернигов", "Батурин", "Бахмач", "Бобровица", "Борзна", "Городня", "Ичня", "Корюковка", "Мена", "Нежин", "Новгород-Северский", "Носовка", "Остёр", "Прилуки", "Семёновка", "Сновск"],
        sumy: ["Сумская область", "Сумы", "Ахтырка", "Белополье", "Бурынь", "Ворожба", "Глухов", "Дружба", "Конотоп", "Кролевец", "Лебедин", "Путивль", "Ромны", "Середина-Буда", "Тростянец", "Шостка"],
        dnepropetrovsk: ["Днепропетровская область", "Днепропетровск", "Апостолово", "Верховцево", "Верхнеднепровск", "Вольногорск", "Днепр", "Жёлтые Воды", "Зеленодольск", "Каменское", "Кривой Рог", "Марганец", "Никополь", "Новомосковск", "Покров", "Павлоград", "Перещепино", "Першотравенск", "Подгородное", "Пятихатки", "Синельниково", "Терновка"],
        kherson: ["Херсонская область", "Херсон", "Берислав", "Геническ", "Голая Пристань", "Каховка", "Новая Каховка", "Скадовск", "Таврийск"],
        crimea: ["АР Крым", "Крым", "Алупка", "Алушта", "Армянск", "Бахчисарай", "Белогорск", "Джанкой", "Евпатория", "Керчь", "Красноперекопск", "Саки", "Симферополь", "Старый Крым", "Судак", "Феодосия", "Щёлкино", "Ялта"],
        zaporozhye: ["Запорожская область", "Запорожье", "Бердянск", "Васильевка", "Вольнянск", "Гуляйполе", "Днепрорудное", "Каменка-Днепровская", "Мелитополь", "Молочанск", "Орехов", "Пологи", "Приморск", "Токмак", "Энергодар"],
        donetsk: ["Донецкая область", "Донецк", "Авдеевка", "Амвросиевка", "Бахмут", "Белицкое", "Белозёрское", "Юнокоммунаровск", "Волноваха", "Горловка", "Горняк", "Дебальцево", "Доброполье", "Докучаевск", "Дружковка", "Енакиево", "Ждановка", "Железное", "Зугрэс", "Иловайск", "Комсомольское", "Константиновка", "Краматорск", "Красногоровка", "Кировское", "Курахово", "Лиман", "Макеевка", "Мариуполь", "Марьинка", "Мирноград", "Моспино", "Николаевка", "Новоазовск", "Новогродовка", "Покровск", "Родинское", "Светлодарск", "Святогорск", "Северск", "Селидово", "Славянск", "Снежное", "Соледар", "Торецк", "Углегорск", "Угледар", "Украинск", "Харцызск", "Часов Яр", "Торез", "Шахтёрск", "Ясиноватая"],
        kharkiv: ["Харьковская область", "Харьков", "Балаклея", "Барвенково", "Богодухов", "Валки", "Волчанск", "Дергачи", "Змиёв", "Изюм", "Красноград", "Купянск", "Лозовая", "Люботин", "Мерефа", "Первомайский", "Пивденное", "Чугуев"],
        lugansk: ["Луганская область", "Луганск", "Александровск", "Алмазная", "Алчевск", "Антрацит", "Боково-Хрустальное", "Вахрушево", "Брянка", "Червонопартизанск", "Вознесеновка", "Кировск", "Голубовка", "Горское", "Свердловск", "Зимогорье", "Золотое", "Зоринск", "Ирмино", "Стаханов", "Кадиевка", "Артёмовск", "Кременная", "Лисичанск", "Лутугино", "Миусинск", "Молодогвардейск", "Новодружеск", "Первомайск", "Перевальск", "Петровское", "Петрово-Красноселье", "Попасная", "Приволье", "Ровеньки", "Рубежное", "Сватово", "Краснодон", "Сорокино", "Северодонецк", "Старобельск", "Суходольск", "Счастье", "Красный Луч", "Хрустальный"]
};
console.log(arrUK);
    $(function(){
        $.getJSON('ua.json', function(arrUA) {
            // console.log(arrUA);
            let titleLocation;
            let currentCountry = arrUA.country[0];
            console.log(currentCountry);
            console.log(arrUA);
            console.log(arrUA.length);
            $('.current-country').text(currentCountry);
            for (let key in arrUA) {
                for (let i = 0; i < arrUA[key].length; i++){
                    if (locationRegion === arrUA[key][i]) {
                        titleLocation = arrUA[key][0];
                        console.log(titleLocation)
                    }
                }
            }
        });
    });


  // for (let j = 0; j < land.length; j++) {
  //     let dataRegion = land[j].getAttribute("title");
  //     console.log(dataRegion);
  //       if (dataRegion === titleLocation) {
  //           land.eq(j).addClass('active');
  //       }
  //   }
  //
  // $('.active-location-text').text(titleLocation);

  // function positionLocation(){
  //   let positionPath = $(".land.active").position();
  //   let positionBlock = $(".top-block").offset();
  //   let widthPath = $(".land.active")[0].getBoundingClientRect().width / 2;
  //   let heightPath = $(".land.active")[0].getBoundingClientRect().height / 2;
  //   let leftPosition = positionPath.left;
  //   let topPosition = positionPath.top;
  //   let positionBlockTop = positionBlock.top;
  //   let locationWidth = $('.active-location').innerWidth() / 2;
  //   let leftSum = leftPosition + widthPath - 10;
  //   let topSum = topPosition - positionBlockTop + heightPath - 10;
  //   $('.active-location').css({"left": leftSum, "top": topSum});
  //
  //   let widthLocationText = $('.active-location-text').width();
  //   let blockWidth = $('.country-block').width();
  //   let blockPositionLeft = $('.country-block').offset().left;;
  //   console.log(blockWidth);
  //   console.log(blockPositionLeft);
  //   if (blockPositionLeft + blockWidth / 4 > leftPosition) {
  //     console.log('1 зона')
  //     console.log(blockWidth / 4)
  //   }
  //   else if(blockPositionLeft + blockWidth / 4 * 3 > leftPosition) {
  //     $('.active-location-text').css({"left": - widthLocationText / 2 + locationWidth, "top": "22px"});
  //     console.log('2 зона');
  //     console.log(blockWidth / 4 * 3)
  //   }
  //   else {
  //     console.log('3 зона')
  //     $('.active-location-text').css({"left": - widthLocationText - 5});
  //   }
  // }
  // positionLocation();
  // $('.land.active').css({"fill": colorLocation, "stroke": "transparent"});
  //
  // $(window).resize(function() {
  //   positionLocation();
  // });

});
