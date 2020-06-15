---
layout: default
---

Aqui desejo compartilhar alguns aprendizados, fazer um pouco de blog e tutoriais. Esse material deve estar separado até agora nas seguintes categorias.


## Redes Comunitárias
{% for post in site.categories['redescomunitarias'] %}

<li><a href="{{ post.url }}">{{ post.title }}</a></li>

{% endfor %}

&nbsp;

---

## Aventuras na Impressora 3d
{% for post in site.categories['impressora3d'] %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

&nbsp;

---

## Subvertendo objetos ou aprendendo Eletrônica
{% for post in site.categories['42'] %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

&nbsp;

---

## Pão

{% for post in site.categories['pão'] %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}


```sh
$~: exit
```


