---
layout: ../../../layouts/Project.astro
badges: ['React', 'Typescript', 'Express', 'Tailwind CSS', 'Mongodb']
title: 'CasaBlanca (Stara wersja)'
subtitle: 'Ten projekt to strona internetowa dla wynajmu domu w Hiszpanii na wakacje.'
imagePath: 'terasaEnter.webp'
imageAltText: 'Nowoczesny taras na dachu z dwoma leżakami, małym stolikiem bocznym i szklaną balustradą. Schody prowadzą na wyższy poziom. Biały budynek z zewnątrz pod czystym, niebieskim niebem.'
data:
  [
    { href: 'https://casa-blanca-lovat.vercel.app', label: 'Strona' },
    { href: 'https://github.com/fc1g/casaBlanca', label: 'Kod' },
    { href: 'https://github.com/fc1g/casaServer', label: 'Kod serwera' },
  ]
---

Ten projekt to strona internetowa stworzona w celu prezentacji wynajmowanego domu w Hiszpanii, skierowana do potencjalnych najemców, którzy szukają przytulnego miejsca na pobyt. Nowoczesny i responsywny design strony internetowej poprawia doświadczenia użytkowników.

Postanowiłem użyć Reacta dla front-endu, ponieważ umożliwia on dynamiczne wyświetlanie szczegółów dotyczących domu, w tym zdjęć, opisów i innych ważnych informacji. Backend działa na bazie Express.js, który odpowiada za zarządzanie danymi o nieruchomości i obsługę żądań. Wszystkie dane dotyczące domu i rezerwacji są przechowywane w bazie danych MongoDB. Użyłem Tailwind CSS do stylizacji interfejsu, co nadaje mu schludny i stylowy wygląd.

Głównym celem projektu jest uproszczenie procesu rezerwacji wynajmowanego domu i dostarczenie użytkownikom wszelkich niezbędnych informacji do podjęcia świadomych decyzji. Jako główny programista projektu odpowiadałem za integrację komponentów front-end i back-end oraz ich wdrożenie. Odpowiadałem również za projekt strony.

Jedną z głównych cech projektu jest przyjazna strona główna z fotografią domu oraz opiniami z Facebooka, które podkreślają zalety pobytu tutaj. Na stronie "O nas" znajduje się interaktywny suwak ze zdjęciami obiektu oraz zakładki z informacjami o domu, okolicy, warunkach wynajmu oraz możliwościach transportu.

Na stronie "Okolica" przedstawione są lokalne obiekty z możliwością paginacji, filtrowania, sortowania i ograniczenia liczby wyświetlanych elementów. Każdy obiekt ma swoją stronę z mapą pokazującą jego lokalizację w stosunku do domu, zdjęciem i opisem. Dla każdego miejsca podano również linki do tras generowanych w Google Maps.

Na zakładce "Kontakt" zawarta jest struktura cenowa oraz kalendarz pokazujący zarezerwowane daty. Poniżej znajduje się krótki opis warunków rezerwacji oraz ważne informacje dla najemców. Dla osób potrzebujących pomocy dostępny jest także akordeon z informacjami kontaktowymi właściciela i jego asystenta.

Ogólnie rzecz biorąc, projekt ten skutecznie upraszcza proces wynajmu domu w Hiszpanii, dostarczając potencjalnym najemcom łatwo przyswajalnych informacji. Strona internetowa znacząco poprawia doświadczenia użytkowników dzięki takim funkcjom, jak szczegółowe opisy nieruchomości i lokalnych atrakcji. Wykorzystanie nowoczesnych technologii, takich jak React, Express.js i MongoDB, zaspokaja potrzeby zarówno najemców, jak i właścicieli, czyniąc go cennym narzędziem dla turystów, którzy szukają komfortowego zakwaterowania.
