---
layout: null
title: Представляюсь
description: Биомашина по решению бизнес-задач.
permalink: /about/
last_modified_at: 2024-06-07 03:00:00 +0300
---
<head>
    <title>{{ page.title }}</title>
    <meta name="description" content="{{ page.description }}">
    <link rel="canonical" href="{{ page.url | absolute_url}}" />
    <link rel="icon" href="{{ '/favicon.svg' | relative_url }}?v={{ site.time | date:'%s' }}" type="image/svg+xml">
    <script type="application/ld+json">
    [{
      "@context": "https://schema.org",
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
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "datePublished": "2024-05-19 03:00:00 +0300",
      "dateModified": {{ page.last_modified_at | jsonify }},
      "mainEntity": {
        "@type": "Person",
        "name": {{ site.author.name | jsonify }},
        "description": "Head of E-commerce",
        "image": {{ site.author.logo | absolute_url | jsonify }},
        "sameAs": [
          {% for entry in site.social_links -%}
            {{ entry.user_url | jsonify }}
          {%- unless forloop.last %},{%- endunless %}
          {% endfor -%}
        ]
      }
    }]
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

* [linkedin](https://www.linkedin.com/in/fatnotbad/){:target="_blank"}{:rel="me noreferrer"};
* [telegram](https://t.me/FatNotBad){:target="_blank"}{:rel="me noreferrer"};
* [e-mail](mailto:mail@romakoch.com){:target="_blank"}.
