# Список курсов Нетологии

## Описание

На странице с курсами Нетологии каждый курс представлен отдельным блоком с кратким описанием и изображением-иконкой. Эти блоки выглядят так:
 
![Course blocks page layout current](../../sources/adaptive-images-courses-current.jpg)

Но до этого момента на странице отображались одинаковые изображения для любых устройств с любыми экранами. Самое время заняться вёрсткой и сделать блоки и изображения в них адаптивными.

## Процесс реализации

1. Если вы выполняете задание в песочнице CodePen, в начале работы добавьте в тег `<head>` следующий метатег `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Если вы выполняете задание локально, этот метатег уже добавлен.
   
2. Измените HTML-разметку блоков с курсами так, чтобы на устройствах с шириной экрана до `640px` загружались следующие изображения: [front-end-mobile.jpg](https://netology-code.github.io/mq-homeworks/adaptive-images/course-list/img/front-end-mobile.jpg), [fullstack-designer-mobile.jpg](https://netology-code.github.io/mq-homeworks/adaptive-images/course-list/img/fullstack-designer-mobile.jpg) и [web-developer-mobile.jpg](https://netology-code.github.io/mq-homeworks/adaptive-images/course-list/img/web-developer-mobile.jpg). 

3. Сделайте так, чтобы на устройствах с шириной экрана от `641px` загружались следующие изображения: [front-end-desktop.jpg](https://netology-code.github.io/mq-homeworks/adaptive-images/course-list/img/front-end-desktop.jpg), [fullstack-designer-desktop.jpg](https://netology-code.github.io/mq-homeworks/adaptive-images/course-list/img/fullstack-designer-desktop.jpg) и [web-developer-desktop.jpg](https://netology-code.github.io/mq-homeworks/adaptive-images/course-list/img/web-developer-desktop.jpg). Также эти изображения должны отобразиться в браузерах, которые не поддерживают тег `<picture>`.

4. Протестируйте результат. На устройствах с шириной экрана от `641px` блок с курсом должен выглядеть так: 

![Course blocks page layout target](../../sources/adaptive-images-courses-step0.jpg)

А на устройствах с шириной до `640px` — так:

![Course blocks page layout target small screen](../../sources/adaptive-images-courses-step1.jpg)

## Реализация

Внесите изменения во вкладке HTML. [Перед началом работы сделайте форк пена](https://codepen.io/Netology/pen/yPQQWq).

Редактор CodePen больше недоступен в РФ. Если вы не можете сделать задание в нём, то предлагаем вам альтернативное решение - JS Bin. Создайте аккаунт, перенесите стили из репозитория GitHub и выполняйте задания в JS Bin. [Подробная инструкция](https://github.com/netology-code/guides/tree/master/jsbin)
