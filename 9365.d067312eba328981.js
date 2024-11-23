"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9365],{9365:(f,d,n)=>{n.r(d),n.d(d,{DeckInfoPage:()=>g});var l=n(177),u=n(4341),c=n(4488),h=n(4162),e=n(4438),k=n(70),m=n(7988);function _(a,s){if(1&a){const i=e.RV6();e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-buttons")(3,"ion-button",10),e.bIt("click",function(){const r=e.eBV(i).index,o=e.XpG();return e.Njj(o.removeCard(r))}),e.EFF(4,"Remove"),e.k0s()()(),e.nrm(5,"img",11),e.k0s()}if(2&a){const i=s.$implicit;e.R7$(5),e.FS9("src",i.imageUri,e.B4B)}}function D(a,s){if(1&a){const i=e.RV6();e.j41(0,"ion-card",12)(1,"ion-item"),e.EFF(2,"Add A New Card"),e.k0s(),e.j41(3,"app-image-select",13),e.bIt("imageReturn",function(r){e.eBV(i);const o=e.XpG();return e.Njj(o.addCard(r))}),e.k0s()()}2&a&&(e.R7$(3),e.Y8G("imageType","png"))}let g=(()=>{var a;class s{constructor(t,r){this.route=t,this.deckPublisher=r,this.deckNumber="",this.decks=[],this.deckName="",this.cmcAverage=0,this.cardColours=[0,0,0,0,0,0]}ngOnInit(){this.deckNumber=this.route.snapshot.paramMap.get("deckNumber"),this.decks=this.deckPublisher.publishDeck(),this.currentDeck=this.decks[Number(this.deckNumber)],this.deckName=this.currentDeck.name,this.getDeckDetails()}addCard(t){this.currentDeck.cardDetails.push(t),this.currentDeck.cardCount++,this.getDeckDetails(),this.decks[Number(this.deckNumber)]=this.currentDeck,this.deckPublisher.updateDeck(this.decks)}getDeckDetails(){this.cmcAverage=0,this.cardColours=[0,0,0,0,0,0];for(let t=0;t<this.currentDeck.cardDetails.length;t++){this.cmcAverage+=this.currentDeck.cardDetails[t].cmc;for(let r=0;r<this.currentDeck.cardDetails[t].colours.length;r++)switch(this.currentDeck.cardDetails[t].colours[r]){case"G":this.cardColours[0]++;break;case"R":this.cardColours[1]++;break;case"W":this.cardColours[2]++;break;case"B":this.cardColours[3]++;break;case"U":this.cardColours[4]++}0==this.currentDeck.cardDetails[t].colours.length&&this.cardColours[5]++}this.cmcAverage=Math.floor(this.cmcAverage/(this.currentDeck.cardDetails.length+1))}removeCard(t){this.currentDeck.cardDetails.splice(t,1),this.currentDeck.cardCount--,this.getDeckDetails(),this.decks[Number(this.deckNumber)]=this.currentDeck,this.deckPublisher.updateDeck(this.decks)}}return(a=s).\u0275fac=function(t){return new(t||a)(e.rXU(k.nX),e.rXU(m.P))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-deck-info"]],standalone:!0,features:[e.aNF],decls:25,vars:7,consts:[[3,"translucent"],["defaultHref","/home"],["slot","end"],["id","addCard","color","primary"],[1,"ion-text-center"],[3,"fullscreen"],["id","deckDetails"],["id","cardAlbum"],[4,"ngFor","ngForOf"],["trigger","addCard"],["color","danger","fill","outline",3,"click"],[3,"src"],["id","newCardModal"],[3,"imageReturn","imageType"]],template:function(t,r){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-item")(3,"ion-buttons"),e.nrm(4,"ion-back-button",1),e.k0s(),e.j41(5,"ion-buttons",2)(6,"ion-button",3),e.EFF(7,"Add Card"),e.k0s()(),e.j41(8,"ion-title",4),e.EFF(9),e.k0s()()()(),e.j41(10,"ion-content",5)(11,"ion-toolbar")(12,"ion-item")(13,"ion-card"),e.EFF(14),e.k0s()()(),e.j41(15,"ion-item")(16,"ion-list",6)(17,"ion-item"),e.EFF(18),e.k0s(),e.j41(19,"ion-item"),e.EFF(20),e.k0s()(),e.j41(21,"ion-list",7),e.DNE(22,_,6,1,"ion-card",8),e.k0s()(),e.j41(23,"ion-modal",9),e.DNE(24,D,4,1,"ng-template"),e.k0s()()),2&t&&(e.Y8G("translucent",!0),e.R7$(9),e.JRh(r.deckName),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(4),e.SpI("Cards: ",r.currentDeck.cardCount,""),e.R7$(4),e.SpI("Converted Mana Cost Average: ",r.cmcAverage,""),e.R7$(2),e.SpI("Card Colours(G, R, W, B, U, C): ",r.cardColours,""),e.R7$(2),e.Y8G("ngForOf",r.currentDeck.cardDetails))},dependencies:[c.bv,c.Jm,c.QW,c.b_,c.ME,c.W9,c.eU,c.uz,c.nf,c.BC,c.ai,c.Sb,c.el,l.MD,l.Sq,u.YN,h.J],styles:["#cardAlbum[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;max-width:85%}#cardAlbum[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{max-width:300px}#deckDetails[_ngcontent-%COMP%]{max-width:15%;height:100%;display:flex;flex-direction:column;justify-content:start}#newCardModal[_ngcontent-%COMP%]{overflow-y:auto}"]}),s})()}}]);