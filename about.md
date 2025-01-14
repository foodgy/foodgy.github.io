---
layout: default
title: Представляюсь
description: Биомашина по решению бизнес-задач.
permalink: /about/
last_modified_at: "2025-01-05"
---
<head>
  <title>{{ page.title | append: ' — Роман Кох' }}</title>
  <meta name="description" content="{{ page.description }}">
  <link rel="canonical" href="{{ page.url | absolute_url}}">
  <link rel="icon" href="{{ '/assets/img/icon.svg' | relative_url }}?v={{ site.time | date:'%s' }}" type="image/svg+xml">
  <link rel="icon" href="{{ '/assets/img/icon.png' | relative_url }}?v={{ site.time | date:'%s' }}" type="image/png" sizes="329x329">
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [{
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": {{ site.url | absolute_url | jsonify }}
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": {{ page.title | jsonify }},
          "item": {{ page.url | absolute_url | jsonify }}
        }]
      },
      {
        "@type": "ProfilePage",
        "datePublished": "2024-05-19T03:00:00+03:00",
        "dateModified": {{ page.last_modified_at | date_to_xmlschema | jsonify }},
        "mainEntity": {
          "@type": "Person",
          "name": {{ site.author.name | jsonify }},
          "description": {{ site.author.description | jsonify }},
          "image": {
            "@type": "ImageObject",
            "url": {{ site.author.avatar | absolute_url | jsonify }},
            "width": 400,
            "height": 400
          },
          "url": {{ '/about/' | absolute_url | jsonify }},
          "sameAs": [
            {% for entry in site.social_links -%}
              {{ entry.user_url | jsonify }}
            {%- unless forloop.last %},{%- endunless %}
            {% endfor -%}
          ]
        }
      }]
    }
  </script>
  {%- if jekyll.environment == 'production' and site.google_tag_manager -%}
      {%- include gtm.html -%}
  {%- endif -%}
</head>

[<< Главная]({{ site.url | absolute_url }})

# Роман Кох

## Карьера

* 2021&nbsp;&mdash; &nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;&#124; **Alshaya Group**, Head of&nbsp;E-commerce;
* 2019&nbsp;&mdash; 2021&nbsp;&#124; **Xiaomi**, Head of&nbsp;E-commerce;
* 2017&nbsp;&mdash; 2019&nbsp;&#124; **Michelin**, E-commerce Region Lead;
* 2016&nbsp;&mdash; 2017&nbsp;&#124; **Clarins Group**, Senior Product Manager.

## Характеристика

* В&nbsp;e-commerce&nbsp;&mdash; монстр;
* В&nbsp;суть процессов и&nbsp;явлений вникаю с&nbsp;первой космической&nbsp;&mdash; это моя суперсила;
* Всегда нахожу точки роста (см. выше про суперсилу);
* Находить решения&nbsp;&mdash; мой фетиш;
* Поднимать e-com с&nbsp;колен&nbsp;&mdash; мой крест;
* Только зелёные циферки в&nbsp;P&amp;L;
* Видел всю трудовую &laquo;дичь&raquo; (всю).

## Контакты

* [linkedin](https://www.linkedin.com/in/fatnotbad/){:target="_blank" rel="me noreferrer"};
* [telegram](https://t.me/FatNotBad){:target="_blank" rel="me noreferrer"};
* [e-mail](mailto:mail@romakoch.com){:target="_blank"}.

## Публикации

* [habr.ru](https://habr.com/ru/users/FatNotBad/publications/articles/){:target="_blank" rel="noreferrer"};
* [vc.ru](https://vc.ru/u/245143-roman-ko){:target="_blank" rel="noreferrer"};
* [e-xecutive.ru](https://www.e-xecutive.ru/users/1898956-roman-koh/articles){:target="_blank" rel="noreferrer"}.
