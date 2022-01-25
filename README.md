# LOL Profile Viewer


<img src="https://user-images.githubusercontent.com/1374081/150909089-704ad69b-2379-4ee9-8dd5-929be9802bed.png" width="90%"></img> <img src="https://user-images.githubusercontent.com/1374081/150909230-f22bbec5-eed9-48a5-9bea-86424be23050.png" width="90%"></img> <img src="https://user-images.githubusercontent.com/1374081/150909247-a3d10890-2e1a-46e4-8ebe-63f0178beab2.png" width="90%"></img> 

> React app feito para exibir informações de perfis do League of Legends. Exibe o level do player, icone de invocador, e campeões mais utilizados. Ao posicionar o mouse sobre o icone de invocador, exibe o ELO e o winrate do player, ao posicionar o mouse sobre o icone dos campões, exibe a quantidade de pontos e maestria com o campeão.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Exibir ELO e winrate do player (tooltip)
- [x] Exibir pontos e maestrias dos 3 campões mais utilizados (tooltip)
- [ ] Exibir winrate das ultimas 20 partidas
- [ ] Exibir historico de partidas
- [ ] Exibir os campões mais utilizados nas ultimas partidas

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente do `node.js`
* Você possui um programa para inicializar o react app (VS Code por exemplo).
* Você possui o data_dragon mais recente (que pode ser obtido em https://developer.riotgames.com/docs/lol). As pastas necessárias do data_dragon são: `centered`, `champion`, `mastery`, `profileicon` e `ranked` que deverão ser inseridas em client -> public -> images.
* Você possui uma KEY para acessar as APIs da RIOT que deverá ser substituida no `Card.js` ou exportada de um arquivo chamado `KEY.js` inserido em client -> src.

## 🚀 Instalando <nome_do_projeto>

Para instalar os modulos necessários para o LOL Profile Viewer execute o comando `npm install` dentro da pasta `client`, isso instalará todas as dependencias necessárias.

## ☕ Usando <nome_do_projeto>

Para usar o LOL Profile Viewer, siga estas etapas:

```
Acesse a pasta client 
execute o comando npm start para inicializar o React App
```
