---
layout: default
---


Hiure Queiroz é graduado em Física e Mestre em Ciência dos Materiais pelo Instituto Tecnológico de Aeronáutica (ITA) e sócio fundador do Sítio do Astronauta. Ele está interessado no estudo e desenvolvimento da ciência e tecnologias através da promoção de seminários e workshops inspirados na cultura do faça-você-mesmo. Nessas reuniões ele introduz ferramentas artesanais, materiais simples e eletrônicos, a fim de fomentar a construção de objetos que poderiam servir para facilitar soluções na vida cotidiana. Hiure é um pesquisador muito dedicado, responsável por alguns desenvolvimentos técnicos e soluções importantes atualmente fornecidos pela Coolab(https://coolab.org).

Ele participa da rede comunitária Portal Sem Porteiras (https://portalsemporteiras.github.io) há 4 ano, trocando conhecimentos em muitos eventos e encontros, e foi designado pela Coolab para fazer viagens e trocas de conhecimento no México, Colombia e nos EUA. Ele também participou da Primeira Cúpula Latino-Americana de Redes Comunitárias, e está trabalhando no desenvolvimento de software e hardware para redes comunitárias, disponibilizando toda a documentação em http://wiki.coolab.org e https://hiurequeiroz.github.io.


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


