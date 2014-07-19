// Compiled by ClojureScript 0.0-2069
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj13820 = {};return obj13820;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3273__auto__ = evt;if(and__3273__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3273__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3883__auto__ = (((evt == null))?null:evt);return (function (){var or__3285__auto__ = (domina.events.prevent_default[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.events.prevent_default["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3273__auto__ = evt;if(and__3273__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3273__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3883__auto__ = (((evt == null))?null:evt);return (function (){var or__3285__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3273__auto__ = evt;if(and__3273__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3273__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3883__auto__ = (((evt == null))?null:evt);return (function (){var or__3285__auto__ = (domina.events.target[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.events.target["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3273__auto__ = evt;if(and__3273__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3273__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3883__auto__ = (((evt == null))?null:evt);return (function (){var or__3285__auto__ = (domina.events.current_target[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.events.current_target["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3273__auto__ = evt;if(and__3273__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3273__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3883__auto__ = (((evt == null))?null:evt);return (function (){var or__3285__auto__ = (domina.events.event_type[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.events.event_type["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3273__auto__ = evt;if(and__3273__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3273__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3883__auto__ = (((evt == null))?null:evt);return (function (){var or__3285__auto__ = (domina.events.raw_event[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.events.raw_event["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t13824 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t13824 = (function (evt,f,create_listener_function,meta13825){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta13825 = meta13825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t13824.cljs$lang$type = true;
domina.events.t13824.cljs$lang$ctorStr = "domina.events/t13824";
domina.events.t13824.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"domina.events/t13824");
});
domina.events.t13824.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t13824.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3285__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return not_found;
}
});
domina.events.t13824.prototype.domina$events$Event$ = true;
domina.events.t13824.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t13824.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t13824.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t13824.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t13824.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t13824.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t13824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13826){var self__ = this;
var _13826__$1 = this;return self__.meta13825;
});
domina.events.t13824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13826,meta13825__$1){var self__ = this;
var _13826__$1 = this;return (new domina.events.t13824(self__.evt,self__.f,self__.create_listener_function,meta13825__$1));
});
domina.events.__GT_t13824 = (function __GT_t13824(evt__$1,f__$1,create_listener_function__$1,meta13825){return (new domina.events.t13824(evt__$1,f__$1,create_listener_function__$1,meta13825));
});
}
return (new domina.events.t13824(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3973__auto__ = (function iter__13831(s__13832){return (new cljs.core.LazySeq(null,(function (){var s__13832__$1 = s__13832;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13832__$1);if(temp__4092__auto__)
{var s__13832__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13832__$2))
{var c__3971__auto__ = cljs.core.chunk_first.call(null,s__13832__$2);var size__3972__auto__ = cljs.core.count.call(null,c__3971__auto__);var b__13834 = cljs.core.chunk_buffer.call(null,size__3972__auto__);if((function (){var i__13833 = 0;while(true){
if((i__13833 < size__3972__auto__))
{var node = cljs.core._nth.call(null,c__3971__auto__,i__13833);cljs.core.chunk_append.call(null,b__13834,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__13835 = (i__13833 + 1);
i__13833 = G__13835;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13834),iter__13831.call(null,cljs.core.chunk_rest.call(null,s__13832__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13834),null);
}
} else
{var node = cljs.core.first.call(null,s__13832__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__13831.call(null,cljs.core.rest.call(null,s__13832__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3973__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__13844 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13845 = null;var count__13846 = 0;var i__13847 = 0;while(true){
if((i__13847 < count__13846))
{var node = cljs.core._nth.call(null,chunk__13845,i__13847);goog.events.removeAll(node);
{
var G__13852 = seq__13844;
var G__13853 = chunk__13845;
var G__13854 = count__13846;
var G__13855 = (i__13847 + 1);
seq__13844 = G__13852;
chunk__13845 = G__13853;
count__13846 = G__13854;
i__13847 = G__13855;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13844);if(temp__4092__auto__)
{var seq__13844__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13844__$1))
{var c__4004__auto__ = cljs.core.chunk_first.call(null,seq__13844__$1);{
var G__13856 = cljs.core.chunk_rest.call(null,seq__13844__$1);
var G__13857 = c__4004__auto__;
var G__13858 = cljs.core.count.call(null,c__4004__auto__);
var G__13859 = 0;
seq__13844 = G__13856;
chunk__13845 = G__13857;
count__13846 = G__13858;
i__13847 = G__13859;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__13844__$1);goog.events.removeAll(node);
{
var G__13860 = cljs.core.next.call(null,seq__13844__$1);
var G__13861 = null;
var G__13862 = 0;
var G__13863 = 0;
seq__13844 = G__13860;
chunk__13845 = G__13861;
count__13846 = G__13862;
i__13847 = G__13863;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__13848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13849 = null;var count__13850 = 0;var i__13851 = 0;while(true){
if((i__13851 < count__13850))
{var node = cljs.core._nth.call(null,chunk__13849,i__13851);goog.events.removeAll(node,type__$1);
{
var G__13864 = seq__13848;
var G__13865 = chunk__13849;
var G__13866 = count__13850;
var G__13867 = (i__13851 + 1);
seq__13848 = G__13864;
chunk__13849 = G__13865;
count__13850 = G__13866;
i__13851 = G__13867;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13848);if(temp__4092__auto__)
{var seq__13848__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13848__$1))
{var c__4004__auto__ = cljs.core.chunk_first.call(null,seq__13848__$1);{
var G__13868 = cljs.core.chunk_rest.call(null,seq__13848__$1);
var G__13869 = c__4004__auto__;
var G__13870 = cljs.core.count.call(null,c__4004__auto__);
var G__13871 = 0;
seq__13848 = G__13868;
chunk__13849 = G__13869;
count__13850 = G__13870;
i__13851 = G__13871;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__13848__$1);goog.events.removeAll(node,type__$1);
{
var G__13872 = cljs.core.next.call(null,seq__13848__$1);
var G__13873 = null;
var G__13874 = 0;
var G__13875 = 0;
seq__13848 = G__13872;
chunk__13849 = G__13873;
count__13850 = G__13874;
i__13851 = G__13875;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__13876 = parent;
var G__13877 = cljs.core.cons.call(null,parent,so_far);
n = G__13876;
so_far = G__13877;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__13886_13894 = cljs.core.seq.call(null,ancestors);var chunk__13887_13895 = null;var count__13888_13896 = 0;var i__13889_13897 = 0;while(true){
if((i__13889_13897 < count__13888_13896))
{var n_13898 = cljs.core._nth.call(null,chunk__13887_13895,i__13889_13897);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_13898;
goog.events.fireListeners(n_13898,evt.type,true,evt);
}
{
var G__13899 = seq__13886_13894;
var G__13900 = chunk__13887_13895;
var G__13901 = count__13888_13896;
var G__13902 = (i__13889_13897 + 1);
seq__13886_13894 = G__13899;
chunk__13887_13895 = G__13900;
count__13888_13896 = G__13901;
i__13889_13897 = G__13902;
continue;
}
} else
{var temp__4092__auto___13903 = cljs.core.seq.call(null,seq__13886_13894);if(temp__4092__auto___13903)
{var seq__13886_13904__$1 = temp__4092__auto___13903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13886_13904__$1))
{var c__4004__auto___13905 = cljs.core.chunk_first.call(null,seq__13886_13904__$1);{
var G__13906 = cljs.core.chunk_rest.call(null,seq__13886_13904__$1);
var G__13907 = c__4004__auto___13905;
var G__13908 = cljs.core.count.call(null,c__4004__auto___13905);
var G__13909 = 0;
seq__13886_13894 = G__13906;
chunk__13887_13895 = G__13907;
count__13888_13896 = G__13908;
i__13889_13897 = G__13909;
continue;
}
} else
{var n_13910 = cljs.core.first.call(null,seq__13886_13904__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_13910;
goog.events.fireListeners(n_13910,evt.type,true,evt);
}
{
var G__13911 = cljs.core.next.call(null,seq__13886_13904__$1);
var G__13912 = null;
var G__13913 = 0;
var G__13914 = 0;
seq__13886_13894 = G__13911;
chunk__13887_13895 = G__13912;
count__13888_13896 = G__13913;
i__13889_13897 = G__13914;
continue;
}
}
} else
{}
}
break;
}
var seq__13890_13915 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__13891_13916 = null;var count__13892_13917 = 0;var i__13893_13918 = 0;while(true){
if((i__13893_13918 < count__13892_13917))
{var n_13919 = cljs.core._nth.call(null,chunk__13891_13916,i__13893_13918);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_13919;
goog.events.fireListeners(n_13919,evt.type,false,evt);
}
{
var G__13920 = seq__13890_13915;
var G__13921 = chunk__13891_13916;
var G__13922 = count__13892_13917;
var G__13923 = (i__13893_13918 + 1);
seq__13890_13915 = G__13920;
chunk__13891_13916 = G__13921;
count__13892_13917 = G__13922;
i__13893_13918 = G__13923;
continue;
}
} else
{var temp__4092__auto___13924 = cljs.core.seq.call(null,seq__13890_13915);if(temp__4092__auto___13924)
{var seq__13890_13925__$1 = temp__4092__auto___13924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13890_13925__$1))
{var c__4004__auto___13926 = cljs.core.chunk_first.call(null,seq__13890_13925__$1);{
var G__13927 = cljs.core.chunk_rest.call(null,seq__13890_13925__$1);
var G__13928 = c__4004__auto___13926;
var G__13929 = cljs.core.count.call(null,c__4004__auto___13926);
var G__13930 = 0;
seq__13890_13915 = G__13927;
chunk__13891_13916 = G__13928;
count__13892_13917 = G__13929;
i__13893_13918 = G__13930;
continue;
}
} else
{var n_13931 = cljs.core.first.call(null,seq__13890_13925__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_13931;
goog.events.fireListeners(n_13931,evt.type,false,evt);
}
{
var G__13932 = cljs.core.next.call(null,seq__13890_13925__$1);
var G__13933 = null;
var G__13934 = 0;
var G__13935 = 0;
seq__13890_13915 = G__13932;
chunk__13891_13916 = G__13933;
count__13892_13917 = G__13934;
i__13893_13918 = G__13935;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3273__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3273__auto__))
{return o.dispatchEvent;
} else
{return and__3273__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__13942_13948 = cljs.core.seq.call(null,evt_map);var chunk__13943_13949 = null;var count__13944_13950 = 0;var i__13945_13951 = 0;while(true){
if((i__13945_13951 < count__13944_13950))
{var vec__13946_13952 = cljs.core._nth.call(null,chunk__13943_13949,i__13945_13951);var k_13953 = cljs.core.nth.call(null,vec__13946_13952,0,null);var v_13954 = cljs.core.nth.call(null,vec__13946_13952,1,null);(evt[k_13953] = v_13954);
{
var G__13955 = seq__13942_13948;
var G__13956 = chunk__13943_13949;
var G__13957 = count__13944_13950;
var G__13958 = (i__13945_13951 + 1);
seq__13942_13948 = G__13955;
chunk__13943_13949 = G__13956;
count__13944_13950 = G__13957;
i__13945_13951 = G__13958;
continue;
}
} else
{var temp__4092__auto___13959 = cljs.core.seq.call(null,seq__13942_13948);if(temp__4092__auto___13959)
{var seq__13942_13960__$1 = temp__4092__auto___13959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13942_13960__$1))
{var c__4004__auto___13961 = cljs.core.chunk_first.call(null,seq__13942_13960__$1);{
var G__13962 = cljs.core.chunk_rest.call(null,seq__13942_13960__$1);
var G__13963 = c__4004__auto___13961;
var G__13964 = cljs.core.count.call(null,c__4004__auto___13961);
var G__13965 = 0;
seq__13942_13948 = G__13962;
chunk__13943_13949 = G__13963;
count__13944_13950 = G__13964;
i__13945_13951 = G__13965;
continue;
}
} else
{var vec__13947_13966 = cljs.core.first.call(null,seq__13942_13960__$1);var k_13967 = cljs.core.nth.call(null,vec__13947_13966,0,null);var v_13968 = cljs.core.nth.call(null,vec__13947_13966,1,null);(evt[k_13967] = v_13968);
{
var G__13969 = cljs.core.next.call(null,seq__13942_13960__$1);
var G__13970 = null;
var G__13971 = 0;
var G__13972 = 0;
seq__13942_13948 = G__13969;
chunk__13943_13949 = G__13970;
count__13944_13950 = G__13971;
i__13945_13951 = G__13972;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__13973_SHARP_){return goog.events.getListeners(p1__13973_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
