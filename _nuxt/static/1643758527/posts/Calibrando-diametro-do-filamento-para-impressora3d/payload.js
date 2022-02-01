__NUXT_JSONP__("/posts/Calibrando-diametro-do-filamento-para-impressora3d", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{page:{slug:"Calibrando-diametro-do-filamento-para-impressora3d",layout:"post",titulo:"Calibrando diâmetro do filamento para impressão 3D",date:"2019-01-28 01:02",categories:"impressora3d",imagem:"images\u002Ffilamento3d.jpeg",descricao:"Dicas preciosas de como calibrar a espessura do filamento para imprimir",ativo:"sim",toc:[{id:s,depth:t,text:u},{id:v,depth:t,text:w},{id:x,depth:3,text:y}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Para calibrar o filamento vamos precisar de um paquimetro.\nO paquimetro é uma ferramenta impressindivel para quem quer usar impressora 3D. Não é uma ferramenta muito barata, mas compensa muito se você está pensando em ter uma impressora devidamente calibrada, sobre tudo se quer modelar peças."}]},{type:a,value:c},{type:b,tag:z,props:{id:s},children:[{type:b,tag:e,props:{href:"#11-calculando-o-diametro-m%C3%A9dio-do-filamento",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pegue o rolo de filamento e estique ele por volta de 1m (isso porque ele pode variar muito dentro nesse intervalo)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Faça pelo menos 6 medidas ao londo dessa distância, e para cada medida anote o valor nas duas direções do filamento, "},{type:b,tag:p,props:{},children:[{type:a,value:"x"}]},{type:a,value:" e "},{type:b,tag:p,props:{},children:[{type:a,value:"y"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:"v-img",props:{src:"images\u002Fpaquimetro.png",alt:"Paquimetro"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dica: Use sempre o meio do paquimetro para evitar medidas viciadas."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Faça uma tabela para calcular o diametro médio do filamento."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"| n | x | y |\n|-----------|\n| 1 |x1 | y1|\n| 2 |x2 | y2|\n| 3 |x3 | y3|\n| 4 |x4 | y4|\n| 5 |x5 | y5|"}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:q,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"6"}]},{type:b,tag:r,props:{},children:[{type:a,value:"x6"}]},{type:b,tag:r,props:{},children:[{type:a,value:"y6"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:q,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Média"}]},{type:b,tag:f,props:{},children:[{type:a,value:"$$\\frac{\\sum_{n=1}^{6}x_{n}}{6}$$"}]},{type:b,tag:f,props:{},children:[{type:a,value:"$$\\frac{\\sum_{n=1}^{6}y_{n}}{6}$$"}]}]},{type:b,tag:q,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"-----------"}]},{type:b,tag:f,props:{},children:[]},{type:b,tag:f,props:{},children:[]}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Não se assuste, essa formula para a média é uma maneira mais elegante do que escrever "},{type:b,tag:p,props:{},children:[{type:a,value:"soma tudo e divide por 6"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Assim a média total deve ser:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$$Média total = \\frac{\\frac{\\sum_{n=1}^{6}x_{n}}{6}+\\frac{\\sum_{n=1}^{6}y_{n}}{6}}{2}$$"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pronto, depois de toda essa volta (e muita pesquisa e aprendizado aqui para saber como colocar "},{type:b,tag:e,props:{href:"http:\u002F\u002Fcsrgxtu.github.io\u002F2015\u002F03\u002F20\u002FWriting-Mathematic-Fomulars-in-Markdown\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"equação com markdown"}]},{type:a,value:" achamos o valor médio para o filamento.\nNote que se houver muita diferença de x e y você tem um péssimo filamento em mãos e isso pode prejudicar bastante a qualidade da impressão."}]},{type:a,value:c},{type:b,tag:z,props:{id:v},children:[{type:b,tag:e,props:{href:"#12-calculando-o-multiplicador-de-extrus%C3%A3o",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"O "},{type:b,tag:e,props:{href:A},children:[{type:a,value:"multiplicador de extrusão"}]},{type:a,value:" é uma correção extra que devemos calibrar para a espessura impressa seja exatamente aquela que a sua peça tem."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Com o valor médio do filamento vamos fazer uma impressão de teste, um "},{type:b,tag:e,props:{href:A},children:[{type:a,value:"cubo padrão"}]},{type:a,value:". Esse cubo tem a parede de 0,4mm e é utilizada para calcular o multiplicador de extrusão. O que se faz é imprimir esse cubo com as configs pré determinadas para calibragem com o valor medio da espessura do filamento que achamos e depois medimos o valor real, dividimos o valor esperado pelo real e mutiplicamos pelo mutiplicador anterior."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$$ E_m=\\frac{Ø}{Ø_e}*E_a $$"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"onde:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$$ E_m $$ - Multiplicador de extrusão (ou Extrusion multiplier)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$$ Ø $$ - é a espessura da parade da caixa"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$$ Ø_e $$ - foi o valor encontrado para a espessura da caixa"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$$ E_a $$ - foi o extrusion multiplier utilizando que se obteve a espessura medida"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ou seja"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$$ E_m=\\frac{espessura(real)}{espessura(encontrada)}*Extrusion-mutiplier(usado) $$"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Agora repita o procedimento com o novo valor de $$ E_m $$ (extrusion mutiplier) e repita os calculos."}]},{type:a,value:c},{type:b,tag:"br",props:{},children:[]},{type:a,value:c},{type:b,tag:"h3",props:{id:x},children:[{type:b,tag:e,props:{href:"#refer%C3%AAncias",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:B,rel:[g,h,i],target:j},children:[{type:a,value:B}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:C,rel:[g,h,i],target:j},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:D,rel:[g,h,i],target:j},children:[{type:a,value:D}]}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002FCalibrando-diametro-do-filamento-para-impressora3d",extension:".md",createdAt:"2022-02-01T21:04:27.448Z",updatedAt:"2022-02-01T21:25:26.483Z"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","td","nofollow","noopener","noreferrer","_blank","true",-1,"span","icon","icon-link","code","tr","th","11-calculando-o-diametro-médio-do-filamento",2,"1.1 Calculando o diametro médio do filamento","12-calculando-o-multiplicador-de-extrusão","1.2 Calculando o multiplicador de extrusão","referências","Referências:","h2","","https:\u002F\u002Fwww.3dhubs.com\u002Ftalk\u002Ft\u002Fhowto-calibrate-tune-and-fine-tune-your-printer-and-filament\u002F5695","http:\u002F\u002Fprint.theporto.com\u002Fposts\u002Fhow-to-calibrate-extrusion-thickness\u002F","https:\u002F\u002Fboaimpressao3d.com.br\u002F2015\u002F03\u002F18\u002Fcomo-configurar-um-novo-filamento-parte-1\u002F")));