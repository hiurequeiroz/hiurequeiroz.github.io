__NUXT_JSONP__("/posts/Compilando%20Libremesh%20para%20Cpe210-v3", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:[{page:{slug:k,layout:"post",titulo:k,date:"2019-01-23 22:31",author:"Hiure",categories:"redescomunitarias",imagem:"images\u002Fterminal.png",descricao:"Como compilar um firmware para um roteador não suportado oficialmente pelo OpenWrt",ativo:"sim",toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"o Cpe210-v3 não tem suporte dos desenvolvedores oficiais do OpenWrt\u002FLede. E no Libremesh todas as maneiras de compilar documentadas são para modelos suportados para o OpenWrt\u002FLede. Esse documento tem o objetivo de documentar a jornada de descobrir como compilar um firmware para um modelo não suportado pelo OpenWrt\u002FLede."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Como meu conhecimento é muito pouco ou quase nenhum esse rascunho vai começar nos passos mais elementares nessa jornada, assim é preciso entender tudo desde o mais básico na arte de compilar openwrt, alguns links:"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:m,rel:[f,g,h],target:i},children:[{type:a,value:m}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:n,rel:[f,g,h],target:i},children:[{type:a,value:n}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:o,rel:[f,g,h],target:i},children:[{type:a,value:o}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:p,rel:[f,g,h],target:i},children:[{type:a,value:p}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:q,rel:[f,g,h],target:i},children:[{type:a,value:q}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:r,rel:[f,g,h],target:i},children:[{type:a,value:r}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:s,rel:[f,g,h],target:i},children:[{type:a,value:s}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:t,rel:[f,g,h],target:i},children:[{type:a,value:t}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:u,rel:[f,g,h],target:i},children:[{type:a,value:u}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Lendo tudo isso, tem algumas coisas importantes a se concluir para prosseguir:"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Não é possível fazer isso pelo ImageBuilder pois ele só vai funcionar para imagens pré-compiladas"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Todas as dependências devem estar [["},{type:b,tag:e,props:{href:"https:\u002F\u002Fopenwrt.org\u002Fdocs\u002Fguide-developer\u002Fbuild-system\u002Finstall-buildsystem#table_of_known_prerequisites%7Crigorosamente",rel:[f,g,h],target:i},children:[{type:a,value:"https:\u002F\u002Fopenwrt.org\u002Fdocs\u002Fguide-developer\u002Fbuild-system\u002Finstall-buildsystem#table_of_known_prerequisites|rigorosamente"}]},{type:a,value:" satisfeitas]]."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Depois de tudo isso comecei fazendo um clone do repositório do openwrt já com as alterações para o cpe210-v3"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"{% highlight sh %}\ngit clone -b CPE210-v3-PR --single-branch "},{type:b,tag:e,props:{href:v,rel:[f,g,h],target:i},children:[{type:a,value:v}]},{type:a,value:"\n{% endhighlight %}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Feito isso acresentei os seguintes repositórios para o feed.conf"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"{% highlight sh %}\ncp feeds.conf.default feeds.conf.default.local\ncp feeds.conf.default feeds.conf\necho \"src-git libremesh "},{type:b,tag:e,props:{href:w,rel:[f,g,h],target:i},children:[{type:a,value:w}]},{type:a,value:"\" \u003E\u003E feeds.conf\necho \"src-git libremap "},{type:b,tag:e,props:{href:x,rel:[f,g,h],target:i},children:[{type:a,value:x}]},{type:a,value:"\" \u003E\u003E feeds.conf\necho \"src-git limeui "},{type:b,tag:e,props:{href:y,rel:[f,g,h],target:i},children:[{type:a,value:y}]},{type:a,value:"\" \u003E\u003E feeds.conf\n{% endhighlight %}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Para atualizar os pacotes fiz:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"{% highlight sh %}\nscripts\u002Ffeeds update -a\nscripts\u002Ffeeds install -a\n{% endhighlight %}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"E então para adicionar manualmente os pacotes executei:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"{% highlight sh %}\nmake menuconfig\n{% endhighlight %}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Aqui foi possivel encontrar em target o cpe210-v3. Segui a sugestão do git do libremesh () que sugere destacar o pacote dnsmasq em Base system e selecionar dnsmasq-dhcpv6 na mesma seção. Selecionei também o pacote lime-full na seção [[LiMe]] \u003E collections."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"img",props:{alt:"",src:"\u002Fassets\u002Fimages\u002Fmenuconfig.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Depois de salvar, é importante dar o comando"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"{% highlight sh %}\nmake download\n{% endhighlight %}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Isso vai fazer com que você baixe todos as fontes antes de compilar, isso é importante caso você use mútlipos cores para compilar. Se não fizer isso provávelmente sua compilação falhe."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"E então rodei:\n{% highlight sh %}\nmake -j1 V=s\n{% endhighlight %}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"E compulou-se uma imagem para testar."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dicas:\nCaso você encontre erro na compilação uma sacada é usar a seguinte linha decomando para encontrar o erro:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"{% highlight sh %}\nmake V=s 2\u003E&1 | tee build.log | grep -i '[^"},{type:b,tag:"em",props:{},children:[{type:a,value:"-\"a-z]error[^"}]},{type:a,value:"-.a-z]'\n{% endhighlight %}"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002FCompilando Libremesh para Cpe210-v3",extension:".md",createdAt:"2022-02-01T21:04:27.396Z",updatedAt:"2022-02-01T21:34:14.248Z"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","nofollow","noopener","noreferrer","_blank","li","Compilando Libremesh para Cpe210-v3","ol","https:\u002F\u002Fopenwrt.org\u002Fdocs\u002Fguide-developer\u002Fstart","https:\u002F\u002Fopenwrt.org\u002Fdocs\u002Fguide-developer\u002Fquickstart-build-images","https:\u002F\u002Fopenwrt.org\u002Fdocs\u002Fguide-user\u002Fadditional-software\u002Fbeginners-build-guide","https:\u002F\u002Fopenwrt.org\u002Fdocs\u002Fguide-developer\u002Fbuild-system\u002Finstall-buildsystem","https:\u002F\u002Fopenwrt.org\u002Fdocs\u002Fguide-user\u002Fadditional-software\u002Fimagebuilder","https:\u002F\u002Fopenwrt.org\u002Fdocs\u002Fguide-developer\u002Fbuild-system\u002Fuse-buildsystem","https:\u002F\u002Fopenwrt.org\u002Fdocs\u002Fguide-developer\u002Fbuild-system\u002Fuse-patches-with-buildsystem","https:\u002F\u002Fwiki.openwrt.org\u002Fdoc\u002Fhowto\u002Fbuild","https:\u002F\u002Fgithub.com\u002Fopenwrt\u002Fopenwrt","https:\u002F\u002Fgithub.com\u002Frobimarko\u002Fopenwrt.git","https:\u002F\u002Fgithub.com\u002Flibremesh\u002Flime-packages.git","https:\u002F\u002Fgithub.com\u002Flibremap\u002Flibremap-agent-openwrt.git","https:\u002F\u002Fgithub.com\u002Flibremesh\u002Flime-packages-ui.git")));