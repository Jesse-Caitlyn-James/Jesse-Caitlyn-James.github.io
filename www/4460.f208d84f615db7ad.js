"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4460],{4460:(F,c,m)=>{m.r(c),m.d(c,{GamePage:()=>b});var p=m(177),s=m(4341),o=m(4488),e=m(4438);let d=(()=>{var t;class l{constructor(){this.damageTotal=[],this.playerId=0,this.damageChange=new e.bkB,this.playerProfile="../../../assets/defaultPP.png"}ngOnInit(){}changeDamage(a,n){"plus"==n&&this.damageChange.emit({id:this.playerId,value:a}),"minus"==n&&this.damageTotal[this.playerId]>0&&this.damageChange.emit({id:this.playerId,value:-a})}}return(t=l).\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-comm-damage-tracker"]],inputs:{damageTotal:"damageTotal",playerId:"playerId"},outputs:{damageChange:"damageChange"},standalone:!0,features:[e.aNF],decls:7,vars:1,consts:[["color","medium",1,"playerItem"],["expand","full","fill","clear",1,"ion-no-margin",3,"click"],[1,"lifeTotal"]],template:function(a,n){1&a&&(e.j41(0,"ion-card",0)(1,"ion-button",1),e.bIt("click",function(){return n.changeDamage(1,"plus")}),e.EFF(2,"+"),e.k0s(),e.j41(3,"ion-button",1),e.bIt("click",function(){return n.changeDamage(1,"minus")}),e.EFF(4,"-"),e.k0s(),e.j41(5,"h1",2),e.EFF(6),e.k0s()()),2&a&&(e.R7$(6),e.JRh(n.damageTotal[n.playerId]))},dependencies:[o.bv,o.Jm,o.b_],styles:[".playerItem[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;border:1px solid black}ion-button[_ngcontent-%COMP%]{position:relative;width:100%;height:50%}h1[_ngcontent-%COMP%]{position:absolute;margin:auto;left:50%;top:50%;transform:translate(-50%,-50%)}"]}),l})();var _=m(4162);function u(t,l){if(1&t&&(e.j41(0,"ion-col",10)(1,"ion-card",11),e.EFF(2),e.k0s()()),2&t){const i=l.$implicit,a=e.XpG(2);e.R7$(2),e.SpI(" ",a.commDamage[i]," ")}}function f(t,l){if(1&t&&(e.j41(0,"ion-card",8)(1,"ion-grid")(2,"ion-row"),e.DNE(3,u,3,1,"ion-col",9),e.k0s()()()),2&t){const i=e.XpG();e.Mz_("id","commModal",i.players[1],""),e.Y8G("button",!0),e.R7$(3),e.Y8G("ngForOf",i.playerArr)}}function h(t,l){if(1&t){const i=e.RV6();e.j41(0,"ion-card")(1,"ion-card-header"),e.EFF(2),e.k0s(),e.j41(3,"ion-input",12),e.mxI("ngModelChange",function(n){e.eBV(i);const r=e.XpG();return e.DH7(r.lifeTotal,n)||(r.lifeTotal=n),e.Njj(n)}),e.k0s()()}if(2&t){const i=e.XpG();e.R7$(2),e.JRh(i.playerName),e.R7$(),e.R50("ngModel",i.lifeTotal)}}function y(t,l){if(1&t){const i=e.RV6();e.j41(0,"ion-col",16)(1,"app-comm-damage-tracker",17),e.bIt("damageChange",function(n){e.eBV(i);const r=e.XpG(2);return e.Njj(r.changeCommDamage(n))}),e.k0s()()}if(2&t){const i=l.$implicit,a=e.XpG(2);e.R7$(),e.Y8G("playerId",i)("damageTotal",a.commDamage)}}function C(t,l){if(1&t&&(e.j41(0,"ion-grid",13)(1,"ion-row",14),e.DNE(2,y,2,2,"ion-col",15),e.k0s()()),2&t){const i=e.XpG();e.R7$(2),e.Y8G("ngForOf",i.playerArr)}}function P(t,l){if(1&t){const i=e.RV6();e.j41(0,"ion-list",18)(1,"ion-item")(2,"ion-input",19),e.mxI("ngModelChange",function(n){e.eBV(i);const r=e.XpG();return e.DH7(r.playerName,n)||(r.playerName=n),e.Njj(n)}),e.k0s()(),e.j41(3,"app-image-select",20),e.bIt("imageReturn",function(n){e.eBV(i);const r=e.XpG();return e.Njj(r.changeProfile(n))}),e.k0s()()}if(2&t){const i=e.XpG();e.R7$(2),e.FS9("value",i.playerName),e.R50("ngModel",i.playerName),e.R7$(),e.Y8G("imageType","art")}}let T=(()=>{var t;class l{constructor(){this.players=[],this.lifeTotal=40,this.commanderSetting=!0,this.commDamage=[],this.playerName="Player ",this.playerArr=[],this.playerProfile="../../../assets/defaultPP.png",this.alertInputs=[{placeholder:this.lifeTotal,value:this.lifeTotal}]}ngOnInit(){this.playerName+=this.players[1];for(let a=0;a<this.players[0];a++)this.playerArr.push(a),this.commDamage[a]=0}changeLife(a,n){"plus"==n&&(this.lifeTotal+=a),"minus"==n&&(this.lifeTotal-=a)}changeCommDamage(a){this.commDamage[a.id]+=a.value,this.lifeTotal-=a.value}changeProfile(a){this.playerProfile=a.imageUri}}return(t=l).\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-player"]],inputs:{players:"players",lifeTotal:"lifeTotal",commanderSetting:"commanderSetting"},standalone:!0,features:[e.aNF],decls:18,vars:15,consts:[[1,"playerItem","ion-no-margin"],["alt","",1,"playerImg",3,"src"],["expand","full","fill","clear",1,"ion-no-margin",3,"click"],[1,"playerName",3,"id"],[1,"lifeTotal",3,"button","id"],["class","commDamage",3,"button","id",4,"ngIf"],[3,"trigger"],["id","commModal",3,"trigger"],[1,"commDamage",3,"button","id"],["size","6",4,"ngFor","ngForOf"],["size","6"],["color","primary"],["label","Life Total: ","type","number",3,"ngModelChange","ngModel"],[1,"ion-no-padding","ion-no-margin"],[1,"ion-no-margin"],["size","6","class","ion-no-margin",4,"ngFor","ngForOf"],["size","6",1,"ion-no-margin"],[1,"ion-no-margin",3,"damageChange","playerId","damageTotal"],["id","imageGallery"],["label","Player Name:    ",3,"ngModelChange","ngModel","value"],[3,"imageReturn","imageType"]],template:function(a,n){1&a&&(e.j41(0,"ion-card",0),e.nrm(1,"img",1),e.j41(2,"ion-button",2),e.bIt("click",function(){return n.changeLife(1,"plus")}),e.EFF(3,"+"),e.k0s(),e.j41(4,"ion-button",2),e.bIt("click",function(){return n.changeLife(1,"minus")}),e.EFF(5,"-"),e.k0s(),e.j41(6,"ion-card",3)(7,"ion-item"),e.EFF(8),e.k0s()(),e.j41(9,"ion-card",4),e.EFF(10),e.k0s(),e.DNE(11,f,4,4,"ion-card",5),e.j41(12,"ion-modal",6),e.DNE(13,h,4,2,"ng-template"),e.k0s(),e.j41(14,"ion-modal",7),e.DNE(15,C,3,1,"ng-template"),e.k0s(),e.j41(16,"ion-modal",6),e.DNE(17,P,4,3,"ng-template"),e.k0s()()),2&a&&(e.R7$(),e.FS9("src",n.playerProfile,e.B4B),e.R7$(5),e.Mz_("id","profileModal",n.players[1],""),e.R7$(2),e.JRh(n.playerName),e.R7$(),e.Mz_("id","lifeChangeAlert",n.players[1],""),e.Y8G("button",!0),e.R7$(),e.JRh(n.lifeTotal),e.R7$(),e.Y8G("ngIf",n.commanderSetting),e.R7$(),e.Mz_("trigger","lifeChangeAlert",n.players[1],""),e.R7$(2),e.Mz_("trigger","commModal",n.players[1],""),e.R7$(2),e.Mz_("trigger","profileModal",n.players[1],""))},dependencies:[o.bv,o.Jm,o.b_,o.ME,o.hU,o.lO,o.$w,o.uz,o.nf,o.ln,o.Sb,o.su,o.Gw,p.pM,p.bT,d,s.YN,s.BC,s.vS,_.J],styles:[".playerItem[_ngcontent-%COMP%]{width:100%;height:100%;border:2px solid grey}.playerImg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}ion-button[_ngcontent-%COMP%]{position:relative;width:100%;height:50%}.playerName[_ngcontent-%COMP%]{position:absolute;margin:auto;left:50%;top:5%;transform:translate(-50%);text-align:center}.commDamage[_ngcontent-%COMP%]{position:absolute;margin:auto;left:50%;bottom:5%;transform:translate(-50%)}ion-grid[_ngcontent-%COMP%]{height:100%}ion-row[_ngcontent-%COMP%]{height:100%}.commDamage[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:100%;height:100%;margin:0%;text-align:center;padding-top:10%}#imageGallery[_ngcontent-%COMP%]{overflow:auto}.lifeTotal[_ngcontent-%COMP%]{padding:5px;background-color:gray;border:1px solid black;border-radius:10px;color:#000;position:absolute;margin:auto;left:50%;top:50%;transform:translate(-50%,-50%)}"]}),l})();const M=(t,l)=>[t,l];function k(t,l){if(1&t&&(e.j41(0,"ion-col",10),e.nrm(1,"app-player",11),e.k0s()),2&t){const i=l.$implicit,a=l.index,n=e.XpG();e.R7$(),e.Mz_("id","player",a,""),e.Y8G("players",e.l_i(5,M,n.playerCount,i))("lifeTotal",n.lifeTotal)("commanderSetting",n.commanderDamage)}}let b=(()=>{var t;class l{constructor(){this.playerCount=4,this.playerArr=[],this.lifeTotal=40,this.commanderDamage=!0;for(let a=0;a<this.playerCount;a++)this.playerArr.push(a)}ngOnInit(){}}return(t=l).\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-game"]],standalone:!0,features:[e.aNF],decls:20,vars:4,consts:[[3,"fullscreen"],[1,"ion-no-margin"],[1,"ion-padding"],["size","6",4,"ngFor","ngForOf"],["defaultHref","/home"],[3,"ngModelChange","ngModel"],["value","20"],["value","40"],["value","60"],["checked","true",3,"ngModelChange","ngModel"],["size","6"],[3,"players","lifeTotal","commanderSetting","id"]],template:function(a,n){1&a&&(e.j41(0,"ion-content",0)(1,"ion-grid",1)(2,"ion-row",2),e.DNE(3,k,2,8,"ion-col",3),e.k0s()()(),e.j41(4,"ion-footer")(5,"ion-card")(6,"ion-buttons"),e.nrm(7,"ion-back-button",4),e.k0s(),e.j41(8,"ion-radio-group",5),e.mxI("ngModelChange",function(g){return e.DH7(n.lifeTotal,g)||(n.lifeTotal=g),g}),e.EFF(9," Life Total: "),e.j41(10,"ion-item")(11,"ion-radio",6),e.EFF(12,"20"),e.k0s(),e.j41(13,"ion-radio",7),e.EFF(14,"40"),e.k0s(),e.j41(15,"ion-radio",8),e.EFF(16,"60"),e.k0s()()(),e.j41(17,"ion-buttons")(18,"ion-checkbox",9),e.mxI("ngModelChange",function(g){return e.DH7(n.commanderDamage,g)||(n.commanderDamage=g),g}),e.EFF(19,"Commander Damage: "),e.k0s()()()()),2&a&&(e.Y8G("fullscreen",!0),e.R7$(3),e.Y8G("ngForOf",n.playerArr),e.R7$(5),e.R50("ngModel",n.lifeTotal),e.R7$(10),e.R50("ngModel",n.commanderDamage))},dependencies:[o.bv,o.QW,o.b_,o.eY,o.hU,o.W9,o.M0,o.lO,o.uz,o.KO,o.f0,o.ln,o.hB,o.uR,o.Je,o.el,p.MD,p.Sq,s.YN,s.BC,s.vS,T],styles:["ion-grid[_ngcontent-%COMP%]{height:100%}ion-row[_ngcontent-%COMP%]{height:100%;width:100%;transition:all 1s ease}ion-footer[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;margin:0}ion-radio-group[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{padding-left:10px}#player0[_ngcontent-%COMP%], #player1[_ngcontent-%COMP%]{display:block;height:100%;width:100%;transform:rotate(180deg)}@media (max-width: 769px){ion-row[_ngcontent-%COMP%]{height:100vw;width:95vh;position:absolute;top:95%;transform-origin:top left;transform:rotate(-90deg)}}"]}),l})()}}]);