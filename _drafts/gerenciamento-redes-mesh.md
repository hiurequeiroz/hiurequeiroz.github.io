---
layout: "post"
title: Dicas para gerenciamento 
categories: redescomunitarias
---

# Dicas de gerenciamento em firmware libremesh/librerouterOS

## Como entrar por ssh em um roteador

Para entrar em um roteador por ssh:

- Abra um terminal de comando, conhecido bash e digite:

```sh
$~: ssh root@thisnode.info
```

Com esse comando você vai entrar no roteador que você está conectado.

Se quiser entrar em outro roteador da malha e você conhece o `hostname` pode fazer:

```sh
$~: ssh root@hostname-do-roteador
```

Ou ainda se não sabe o nome do nó pode entrar pelo ip

```sh
$~: ssh root@ip-do-roteador
```

Se você quer entrar em outro roteador que você não sabe nem o nome e nem o ip você pode fazer:

```sh
$~: ssh root@thisnode.info ip n | grep wlan0-mesh
```
Ou se quiser saber o nome também, logue no roteador que você está conectado por ssh e faça:

```sh
:~# ip n | grep wlan0-mesh | mac2bat
```

## Tirando métricas 