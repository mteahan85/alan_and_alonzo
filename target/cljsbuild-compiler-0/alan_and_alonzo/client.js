// Compiled by ClojureScript 0.0-2069
goog.provide('alan_and_alonzo.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina');
alan_and_alonzo.client.canvas = domina.by_id.call(null,"foreground");
alan_and_alonzo.client.ctx = alan_and_alonzo.client.canvas.getContext("2d");
alan_and_alonzo.client.rect = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",1013904362),25,new cljs.core.Keyword(null,"y","y",1013904363),25,new cljs.core.Keyword(null,"color","color",1108746965),"ee0000",new cljs.core.Keyword(null,"width","width",1127031096),50,new cljs.core.Keyword(null,"height","height",4087841945),50], null);
alan_and_alonzo.client.draw = (function draw(obj){domina.set_attrs_BANG_.call(null,alan_and_alonzo.client.canvas,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"640",new cljs.core.Keyword(null,"height","height",4087841945),"480"], null));
alan_and_alonzo.client.ctx.fillStyle = new cljs.core.Keyword(null,"color","color",1108746965).cljs$core$IFn$_invoke$arity$1(obj);
return alan_and_alonzo.client.ctx.fillRect(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(obj));
});
alan_and_alonzo.client.image = (function image(src){var img = (new Image());img.src = src;
return img;
});
alan_and_alonzo.client.draw_image = (function draw_image(img,x,y){return alan_and_alonzo.client.ctx.drawImage(img,x,y);
});
alan_and_alonzo.client.turing = alan_and_alonzo.client.image.call(null,"/images/turing/FrontTuring.png");
alan_and_alonzo.client.background = alan_and_alonzo.client.image.call(null,"/images/Background.png");
/**
* Logic's main function - gets executed as JavaScript on upon loading
* of html page
*/
alan_and_alonzo.client.init = (function init(){return alan_and_alonzo.client.draw_image.call(null,alan_and_alonzo.client.background,0,0);
});
goog.exportSymbol('alan_and_alonzo.client.init', alan_and_alonzo.client.init);
