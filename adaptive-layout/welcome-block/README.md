# Блок с приветствием для Нетологии

## Описание

Продолжаем работу над редизайном сайта Нетологии: на очереди блок с приветствием. Нужно изменить верстку так, чтобы для разных разрешений экрана блок выглядел по-разному: изменялся размер шрифта и использовались фоновые изображения разного размера. Сейчас страница выглядит так:

![Welcome block layout current](../../sources/adaptive-layout-welcome-current.jpg)

Для устройств с шириной экрана менее `1301px`, но более `640px` измените верстку так, чтобы страница выглядела так:

![Welcome block layout target](../../sources/adaptive-layout-welcome-target.jpg)

А для мобильных устройств с шириной экрана менее `641px` — так: 

![Welcome block layout target small](../../sources/adaptive-layout-welcome-small.jpg)

## Процесс реализации

1. Измените существующий код так, чтобы свойства `font-size` и `background-image` применялись только для устройств, у которых ширина экрана больше `1300px`.

2. Для устройств, у которых ширина экрана одновременно больше `640px` и меньше `1301px`, рассчитайте `font-size` элемента `.header` так, чтобы у элемента `.header__slogan` `font-size` был `36px`.

3. Для устройств, у которых ширина экрана меньше `641px`, рассчитайте `font-size` элемента `.header` так, чтобы у элемента `.header__slogan` `font-size` был `24px`.

4. Для устройств, у которых ширина экрана одновременно больше `640px` и меньше `1301px`, добавьте фоновое изображение [netology_1200.jpg](https://netology-code.github.io/mq-homeworks/adaptive-layout/welcome-block/img/netology_1200.jpg) у элемента `.header`.

5. Для устройств, у которых ширина экрана меньше 641px, добавьте фоновое изображение [netology_600.jpg](https://netology-code.github.io/mq-homeworks/adaptive-layout/welcome-block/img/netology_600.jpg) у элемента `.header`.

6. Протестируйте результат в эмуляторе, выбрав iPad:
 
![Welcome block layout target on a tablet screen](../../sources/adaptive-layout-welcome-step0.jpg)

У вас должно загружаться фоновое изображение `netology_1200.jpg`, а размер шрифта элемента `.header__slogan` должен быть `36px`.

7. Протестируйте результат в эмуляторе, выбрав iPhone 4:

![Welcome block layout target on a small screen](../../sources/adaptive-layout-welcome-step1.jpg)

У вас должно загружаться фоновое изображение `netology_600.jpg`, а размер шрифта элемента `.header__slogan` должен быть `24px`.

## Реализация

### Локально с использованием git

Внесите изменения в файл `./css/welcome.css`. Файл уже подключен к документу, поэтому другие файлы изменять не требуется (не изменяйте файл `./css/welcome-common.css`).

### В песочнице CodePen

Перед началом работы сделайте форк пена на [https://codepen.io/Netology/pen/aVydom](https://codepen.io/Netology/pen/aVydom).
Внесите изменения во вкладке CSS пена.