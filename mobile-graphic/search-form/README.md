# Форма поиска для сайта книжного магазина

## Описание

Еще один крупный заказчик! Компания «Читай-город» решила провести редизайн сайта и наняла вас для вёрстки. И в качестве первого задания нужно доделать форму поиска. Текущее состояние формы такое:

![Search form layout current](../../sources/mobile-graphic-form-current.jpeg)

Для наглядности в форму нужно добавить иконку лупы:

![Search form layout target with icon](../../sources/mobile-graphic-form-target.jpeg)

Также требуется реализовать смену цвета иконки при установке курсора в поле ввода:

![Search form in focus](../../sources/mobile-graphic-form-focus.jpeg)

## Процесс реализации

1. Скачайте иконку лупы [по ссылке](https://netology-code.github.io/mq-homeworks/sources/search.svg).

2. Вставьте иконку в HTML-файл, добавив ей класс `search__icon`.

3. Задайте иконке белый цвет — `#ffffff`.

4. При получении фокуса (псевдокласс `:focus`) полем ввода поменяйте цвет иконки на `#6441a5`.

## Реализация

### Локально с использованием git

Внесите изменения в файлы `index.html` и `./css/form.css`. Файл уже подключен к документу, поэтому другие файлы изменять не требуется (не изменяйте файл `./css/form-common.css`).

### В песочнице CodePen

Перед началом работы сделайте форк пена на [https://codepen.io/Netology/pen/ZaeKGq](https://codepen.io/Netology/pen/ZaeKGq)
Внесите изменения во вкладках HTML и CSS пена.