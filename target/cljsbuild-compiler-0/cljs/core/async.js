// Compiled by ClojureScript 0.0-2069
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14443 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14443 = (function (f,fn_handler,meta14444){
this.f = f;
this.fn_handler = fn_handler;
this.meta14444 = meta14444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14443.cljs$lang$type = true;
cljs.core.async.t14443.cljs$lang$ctorStr = "cljs.core.async/t14443";
cljs.core.async.t14443.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t14443");
});
cljs.core.async.t14443.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14445){var self__ = this;
var _14445__$1 = this;return self__.meta14444;
});
cljs.core.async.t14443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14445,meta14444__$1){var self__ = this;
var _14445__$1 = this;return (new cljs.core.async.t14443(self__.f,self__.fn_handler,meta14444__$1));
});
cljs.core.async.__GT_t14443 = (function __GT_t14443(f__$1,fn_handler__$1,meta14444){return (new cljs.core.async.t14443(f__$1,fn_handler__$1,meta14444));
});
}
return (new cljs.core.async.t14443(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14446 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14446);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14446);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3273__auto__ = ret;if(cljs.core.truth_(and__3273__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3273__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4103__auto___14447 = n;var x_14448 = 0;while(true){
if((x_14448 < n__4103__auto___14447))
{(a[x_14448] = 0);
{
var G__14449 = (x_14448 + 1);
x_14448 = G__14449;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14450 = (i + 1);
i = G__14450;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14454 = (function (flag,alt_flag,meta14455){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14455 = meta14455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14454.cljs$lang$type = true;
cljs.core.async.t14454.cljs$lang$ctorStr = "cljs.core.async/t14454";
cljs.core.async.t14454.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t14454");
});
cljs.core.async.t14454.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14456){var self__ = this;
var _14456__$1 = this;return self__.meta14455;
});
cljs.core.async.t14454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14456,meta14455__$1){var self__ = this;
var _14456__$1 = this;return (new cljs.core.async.t14454(self__.flag,self__.alt_flag,meta14455__$1));
});
cljs.core.async.__GT_t14454 = (function __GT_t14454(flag__$1,alt_flag__$1,meta14455){return (new cljs.core.async.t14454(flag__$1,alt_flag__$1,meta14455));
});
}
return (new cljs.core.async.t14454(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14460 = (function (cb,flag,alt_handler,meta14461){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14461 = meta14461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14460.cljs$lang$type = true;
cljs.core.async.t14460.cljs$lang$ctorStr = "cljs.core.async/t14460";
cljs.core.async.t14460.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t14460");
});
cljs.core.async.t14460.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14462){var self__ = this;
var _14462__$1 = this;return self__.meta14461;
});
cljs.core.async.t14460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14462,meta14461__$1){var self__ = this;
var _14462__$1 = this;return (new cljs.core.async.t14460(self__.cb,self__.flag,self__.alt_handler,meta14461__$1));
});
cljs.core.async.__GT_t14460 = (function __GT_t14460(cb__$1,flag__$1,alt_handler__$1,meta14461){return (new cljs.core.async.t14460(cb__$1,flag__$1,alt_handler__$1,meta14461));
});
}
return (new cljs.core.async.t14460(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14463_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14463_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3285__auto__ = wport;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14464 = (i + 1);
i = G__14464;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3285__auto__ = ret;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3273__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3273__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3273__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14465){var map__14467 = p__14465;var map__14467__$1 = ((cljs.core.seq_QMARK_.call(null,map__14467))?cljs.core.apply.call(null,cljs.core.hash_map,map__14467):map__14467);var opts = map__14467__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14465 = null;if (arguments.length > 1) {
  p__14465 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14465);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14468){
var ports = cljs.core.first(arglist__14468);
var p__14465 = cljs.core.rest(arglist__14468);
return alts_BANG___delegate(ports,p__14465);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14476 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14476 = (function (ch,f,map_LT_,meta14477){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14477 = meta14477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14476.cljs$lang$type = true;
cljs.core.async.t14476.cljs$lang$ctorStr = "cljs.core.async/t14476";
cljs.core.async.t14476.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t14476");
});
cljs.core.async.t14476.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14476.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14476.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14476.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14479 = (function (fn1,_,meta14477,ch,f,map_LT_,meta14480){
this.fn1 = fn1;
this._ = _;
this.meta14477 = meta14477;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14480 = meta14480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14479.cljs$lang$type = true;
cljs.core.async.t14479.cljs$lang$ctorStr = "cljs.core.async/t14479";
cljs.core.async.t14479.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t14479");
});
cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14469_SHARP_){return f1.call(null,(((p1__14469_SHARP_ == null))?null:self__.f.call(null,p1__14469_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14481){var self__ = this;
var _14481__$1 = this;return self__.meta14480;
});
cljs.core.async.t14479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14481,meta14480__$1){var self__ = this;
var _14481__$1 = this;return (new cljs.core.async.t14479(self__.fn1,self__._,self__.meta14477,self__.ch,self__.f,self__.map_LT_,meta14480__$1));
});
cljs.core.async.__GT_t14479 = (function __GT_t14479(fn1__$1,___$2,meta14477__$1,ch__$2,f__$2,map_LT___$2,meta14480){return (new cljs.core.async.t14479(fn1__$1,___$2,meta14477__$1,ch__$2,f__$2,map_LT___$2,meta14480));
});
}
return (new cljs.core.async.t14479(fn1,___$1,self__.meta14477,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3273__auto__ = ret;if(cljs.core.truth_(and__3273__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3273__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14476.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14476.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14478){var self__ = this;
var _14478__$1 = this;return self__.meta14477;
});
cljs.core.async.t14476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14478,meta14477__$1){var self__ = this;
var _14478__$1 = this;return (new cljs.core.async.t14476(self__.ch,self__.f,self__.map_LT_,meta14477__$1));
});
cljs.core.async.__GT_t14476 = (function __GT_t14476(ch__$1,f__$1,map_LT___$1,meta14477){return (new cljs.core.async.t14476(ch__$1,f__$1,map_LT___$1,meta14477));
});
}
return (new cljs.core.async.t14476(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14485 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14485 = (function (ch,f,map_GT_,meta14486){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14486 = meta14486;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14485.cljs$lang$type = true;
cljs.core.async.t14485.cljs$lang$ctorStr = "cljs.core.async/t14485";
cljs.core.async.t14485.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t14485");
});
cljs.core.async.t14485.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14485.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14485.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14487){var self__ = this;
var _14487__$1 = this;return self__.meta14486;
});
cljs.core.async.t14485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14487,meta14486__$1){var self__ = this;
var _14487__$1 = this;return (new cljs.core.async.t14485(self__.ch,self__.f,self__.map_GT_,meta14486__$1));
});
cljs.core.async.__GT_t14485 = (function __GT_t14485(ch__$1,f__$1,map_GT___$1,meta14486){return (new cljs.core.async.t14485(ch__$1,f__$1,map_GT___$1,meta14486));
});
}
return (new cljs.core.async.t14485(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14491 = (function (ch,p,filter_GT_,meta14492){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14492 = meta14492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14491.cljs$lang$type = true;
cljs.core.async.t14491.cljs$lang$ctorStr = "cljs.core.async/t14491";
cljs.core.async.t14491.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t14491");
});
cljs.core.async.t14491.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14491.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14491.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14493){var self__ = this;
var _14493__$1 = this;return self__.meta14492;
});
cljs.core.async.t14491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14493,meta14492__$1){var self__ = this;
var _14493__$1 = this;return (new cljs.core.async.t14491(self__.ch,self__.p,self__.filter_GT_,meta14492__$1));
});
cljs.core.async.__GT_t14491 = (function __GT_t14491(ch__$1,p__$1,filter_GT___$1,meta14492){return (new cljs.core.async.t14491(ch__$1,p__$1,filter_GT___$1,meta14492));
});
}
return (new cljs.core.async.t14491(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5949__auto___14568 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_14551){var state_val_14552 = (state_14551[1]);if((state_val_14552 === 1))
{var state_14551__$1 = state_14551;var statearr_14553_14569 = state_14551__$1;(statearr_14553_14569[2] = null);
(statearr_14553_14569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14552 === 2))
{var state_14551__$1 = state_14551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14551__$1,4,ch);
} else
{if((state_val_14552 === 3))
{var inst_14549 = (state_14551[2]);var state_14551__$1 = state_14551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14551__$1,inst_14549);
} else
{if((state_val_14552 === 4))
{var inst_14533 = (state_14551[5]);var inst_14533__$1 = (state_14551[2]);var inst_14534 = (inst_14533__$1 == null);var state_14551__$1 = (function (){var statearr_14554 = state_14551;(statearr_14554[5] = inst_14533__$1);
return statearr_14554;
})();if(cljs.core.truth_(inst_14534))
{var statearr_14555_14570 = state_14551__$1;(statearr_14555_14570[1] = 5);
} else
{var statearr_14556_14571 = state_14551__$1;(statearr_14556_14571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14552 === 5))
{var inst_14536 = cljs.core.async.close_BANG_.call(null,out);var state_14551__$1 = state_14551;var statearr_14557_14572 = state_14551__$1;(statearr_14557_14572[2] = inst_14536);
(statearr_14557_14572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14552 === 6))
{var inst_14533 = (state_14551[5]);var inst_14538 = p.call(null,inst_14533);var state_14551__$1 = state_14551;if(cljs.core.truth_(inst_14538))
{var statearr_14558_14573 = state_14551__$1;(statearr_14558_14573[1] = 8);
} else
{var statearr_14559_14574 = state_14551__$1;(statearr_14559_14574[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14552 === 7))
{var inst_14547 = (state_14551[2]);var state_14551__$1 = state_14551;var statearr_14560_14575 = state_14551__$1;(statearr_14560_14575[2] = inst_14547);
(statearr_14560_14575[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14552 === 8))
{var inst_14533 = (state_14551[5]);var state_14551__$1 = state_14551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14551__$1,11,out,inst_14533);
} else
{if((state_val_14552 === 9))
{var state_14551__$1 = state_14551;var statearr_14561_14576 = state_14551__$1;(statearr_14561_14576[2] = null);
(statearr_14561_14576[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14552 === 10))
{var inst_14544 = (state_14551[2]);var state_14551__$1 = (function (){var statearr_14562 = state_14551;(statearr_14562[6] = inst_14544);
return statearr_14562;
})();var statearr_14563_14577 = state_14551__$1;(statearr_14563_14577[2] = null);
(statearr_14563_14577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14552 === 11))
{var inst_14541 = (state_14551[2]);var state_14551__$1 = state_14551;var statearr_14564_14578 = state_14551__$1;(statearr_14564_14578[2] = inst_14541);
(statearr_14564_14578[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_14566 = (new Array(7));(statearr_14566[0] = state_machine__5900__auto__);
(statearr_14566[1] = 1);
return statearr_14566;
});
var state_machine__5900__auto____1 = (function (state_14551){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_14551);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_14551){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_14551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_14567 = f__5950__auto__.call(null);(statearr_14567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto___14568);
return statearr_14567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5949__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_14726){var state_val_14727 = (state_14726[1]);if((state_val_14727 === 1))
{var state_14726__$1 = state_14726;var statearr_14728_14761 = state_14726__$1;(statearr_14728_14761[2] = null);
(statearr_14728_14761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 2))
{var state_14726__$1 = state_14726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14726__$1,4,in$);
} else
{if((state_val_14727 === 3))
{var inst_14724 = (state_14726[2]);var state_14726__$1 = state_14726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14726__$1,inst_14724);
} else
{if((state_val_14727 === 4))
{var inst_14672 = (state_14726[5]);var inst_14672__$1 = (state_14726[2]);var inst_14673 = (inst_14672__$1 == null);var state_14726__$1 = (function (){var statearr_14729 = state_14726;(statearr_14729[5] = inst_14672__$1);
return statearr_14729;
})();if(cljs.core.truth_(inst_14673))
{var statearr_14730_14762 = state_14726__$1;(statearr_14730_14762[1] = 5);
} else
{var statearr_14731_14763 = state_14726__$1;(statearr_14731_14763[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 5))
{var inst_14675 = cljs.core.async.close_BANG_.call(null,out);var state_14726__$1 = state_14726;var statearr_14732_14764 = state_14726__$1;(statearr_14732_14764[2] = inst_14675);
(statearr_14732_14764[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 6))
{var inst_14672 = (state_14726[5]);var inst_14677 = f.call(null,inst_14672);var inst_14682 = cljs.core.seq.call(null,inst_14677);var inst_14683 = inst_14682;var inst_14684 = null;var inst_14685 = 0;var inst_14686 = 0;var state_14726__$1 = (function (){var statearr_14733 = state_14726;(statearr_14733[6] = inst_14684);
(statearr_14733[7] = inst_14685);
(statearr_14733[8] = inst_14683);
(statearr_14733[9] = inst_14686);
return statearr_14733;
})();var statearr_14734_14765 = state_14726__$1;(statearr_14734_14765[2] = null);
(statearr_14734_14765[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 7))
{var inst_14722 = (state_14726[2]);var state_14726__$1 = state_14726;var statearr_14735_14766 = state_14726__$1;(statearr_14735_14766[2] = inst_14722);
(statearr_14735_14766[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 8))
{var inst_14685 = (state_14726[7]);var inst_14686 = (state_14726[9]);var inst_14688 = (inst_14686 < inst_14685);var inst_14689 = inst_14688;var state_14726__$1 = state_14726;if(cljs.core.truth_(inst_14689))
{var statearr_14736_14767 = state_14726__$1;(statearr_14736_14767[1] = 10);
} else
{var statearr_14737_14768 = state_14726__$1;(statearr_14737_14768[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 9))
{var inst_14719 = (state_14726[2]);var state_14726__$1 = (function (){var statearr_14738 = state_14726;(statearr_14738[10] = inst_14719);
return statearr_14738;
})();var statearr_14739_14769 = state_14726__$1;(statearr_14739_14769[2] = null);
(statearr_14739_14769[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 10))
{var inst_14684 = (state_14726[6]);var inst_14686 = (state_14726[9]);var inst_14691 = cljs.core._nth.call(null,inst_14684,inst_14686);var state_14726__$1 = state_14726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14726__$1,13,out,inst_14691);
} else
{if((state_val_14727 === 11))
{var inst_14683 = (state_14726[8]);var inst_14697 = (state_14726[11]);var inst_14697__$1 = cljs.core.seq.call(null,inst_14683);var state_14726__$1 = (function (){var statearr_14743 = state_14726;(statearr_14743[11] = inst_14697__$1);
return statearr_14743;
})();if(inst_14697__$1)
{var statearr_14744_14770 = state_14726__$1;(statearr_14744_14770[1] = 14);
} else
{var statearr_14745_14771 = state_14726__$1;(statearr_14745_14771[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 12))
{var inst_14717 = (state_14726[2]);var state_14726__$1 = state_14726;var statearr_14746_14772 = state_14726__$1;(statearr_14746_14772[2] = inst_14717);
(statearr_14746_14772[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 13))
{var inst_14684 = (state_14726[6]);var inst_14685 = (state_14726[7]);var inst_14683 = (state_14726[8]);var inst_14686 = (state_14726[9]);var inst_14693 = (state_14726[2]);var inst_14694 = (inst_14686 + 1);var tmp14740 = inst_14684;var tmp14741 = inst_14685;var tmp14742 = inst_14683;var inst_14683__$1 = tmp14742;var inst_14684__$1 = tmp14740;var inst_14685__$1 = tmp14741;var inst_14686__$1 = inst_14694;var state_14726__$1 = (function (){var statearr_14747 = state_14726;(statearr_14747[6] = inst_14684__$1);
(statearr_14747[7] = inst_14685__$1);
(statearr_14747[8] = inst_14683__$1);
(statearr_14747[12] = inst_14693);
(statearr_14747[9] = inst_14686__$1);
return statearr_14747;
})();var statearr_14748_14773 = state_14726__$1;(statearr_14748_14773[2] = null);
(statearr_14748_14773[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 14))
{var inst_14697 = (state_14726[11]);var inst_14699 = cljs.core.chunked_seq_QMARK_.call(null,inst_14697);var state_14726__$1 = state_14726;if(inst_14699)
{var statearr_14749_14774 = state_14726__$1;(statearr_14749_14774[1] = 17);
} else
{var statearr_14750_14775 = state_14726__$1;(statearr_14750_14775[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 15))
{var state_14726__$1 = state_14726;var statearr_14751_14776 = state_14726__$1;(statearr_14751_14776[2] = null);
(statearr_14751_14776[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 16))
{var inst_14715 = (state_14726[2]);var state_14726__$1 = state_14726;var statearr_14752_14777 = state_14726__$1;(statearr_14752_14777[2] = inst_14715);
(statearr_14752_14777[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 17))
{var inst_14697 = (state_14726[11]);var inst_14701 = cljs.core.chunk_first.call(null,inst_14697);var inst_14702 = cljs.core.chunk_rest.call(null,inst_14697);var inst_14703 = cljs.core.count.call(null,inst_14701);var inst_14683 = inst_14702;var inst_14684 = inst_14701;var inst_14685 = inst_14703;var inst_14686 = 0;var state_14726__$1 = (function (){var statearr_14753 = state_14726;(statearr_14753[6] = inst_14684);
(statearr_14753[7] = inst_14685);
(statearr_14753[8] = inst_14683);
(statearr_14753[9] = inst_14686);
return statearr_14753;
})();var statearr_14754_14778 = state_14726__$1;(statearr_14754_14778[2] = null);
(statearr_14754_14778[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 18))
{var inst_14697 = (state_14726[11]);var inst_14706 = cljs.core.first.call(null,inst_14697);var state_14726__$1 = state_14726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14726__$1,20,out,inst_14706);
} else
{if((state_val_14727 === 19))
{var inst_14712 = (state_14726[2]);var state_14726__$1 = state_14726;var statearr_14755_14779 = state_14726__$1;(statearr_14755_14779[2] = inst_14712);
(statearr_14755_14779[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14727 === 20))
{var inst_14697 = (state_14726[11]);var inst_14708 = (state_14726[2]);var inst_14709 = cljs.core.next.call(null,inst_14697);var inst_14683 = inst_14709;var inst_14684 = null;var inst_14685 = 0;var inst_14686 = 0;var state_14726__$1 = (function (){var statearr_14756 = state_14726;(statearr_14756[6] = inst_14684);
(statearr_14756[7] = inst_14685);
(statearr_14756[8] = inst_14683);
(statearr_14756[13] = inst_14708);
(statearr_14756[9] = inst_14686);
return statearr_14756;
})();var statearr_14757_14780 = state_14726__$1;(statearr_14757_14780[2] = null);
(statearr_14757_14780[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_14759 = (new Array(14));(statearr_14759[0] = state_machine__5900__auto__);
(statearr_14759[1] = 1);
return statearr_14759;
});
var state_machine__5900__auto____1 = (function (state_14726){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_14726);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_14726){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_14726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_14760 = f__5950__auto__.call(null);(statearr_14760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto__);
return statearr_14760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return c__5949__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5949__auto___14853 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_14836){var state_val_14837 = (state_14836[1]);if((state_val_14837 === 1))
{var state_14836__$1 = state_14836;var statearr_14838_14854 = state_14836__$1;(statearr_14838_14854[2] = null);
(statearr_14838_14854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 2))
{var state_14836__$1 = state_14836;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14836__$1,4,from);
} else
{if((state_val_14837 === 3))
{var inst_14834 = (state_14836[2]);var state_14836__$1 = state_14836;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14836__$1,inst_14834);
} else
{if((state_val_14837 === 4))
{var inst_14819 = (state_14836[5]);var inst_14819__$1 = (state_14836[2]);var inst_14820 = (inst_14819__$1 == null);var state_14836__$1 = (function (){var statearr_14839 = state_14836;(statearr_14839[5] = inst_14819__$1);
return statearr_14839;
})();if(cljs.core.truth_(inst_14820))
{var statearr_14840_14855 = state_14836__$1;(statearr_14840_14855[1] = 5);
} else
{var statearr_14841_14856 = state_14836__$1;(statearr_14841_14856[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 5))
{var state_14836__$1 = state_14836;if(cljs.core.truth_(close_QMARK_))
{var statearr_14842_14857 = state_14836__$1;(statearr_14842_14857[1] = 8);
} else
{var statearr_14843_14858 = state_14836__$1;(statearr_14843_14858[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 6))
{var inst_14819 = (state_14836[5]);var state_14836__$1 = state_14836;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14836__$1,11,to,inst_14819);
} else
{if((state_val_14837 === 7))
{var inst_14832 = (state_14836[2]);var state_14836__$1 = state_14836;var statearr_14844_14859 = state_14836__$1;(statearr_14844_14859[2] = inst_14832);
(statearr_14844_14859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 8))
{var inst_14823 = cljs.core.async.close_BANG_.call(null,to);var state_14836__$1 = state_14836;var statearr_14845_14860 = state_14836__$1;(statearr_14845_14860[2] = inst_14823);
(statearr_14845_14860[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 9))
{var state_14836__$1 = state_14836;var statearr_14846_14861 = state_14836__$1;(statearr_14846_14861[2] = null);
(statearr_14846_14861[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 10))
{var inst_14826 = (state_14836[2]);var state_14836__$1 = state_14836;var statearr_14847_14862 = state_14836__$1;(statearr_14847_14862[2] = inst_14826);
(statearr_14847_14862[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 11))
{var inst_14829 = (state_14836[2]);var state_14836__$1 = (function (){var statearr_14848 = state_14836;(statearr_14848[6] = inst_14829);
return statearr_14848;
})();var statearr_14849_14863 = state_14836__$1;(statearr_14849_14863[2] = null);
(statearr_14849_14863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_14851 = (new Array(7));(statearr_14851[0] = state_machine__5900__auto__);
(statearr_14851[1] = 1);
return statearr_14851;
});
var state_machine__5900__auto____1 = (function (state_14836){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_14836);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_14836){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_14836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_14852 = f__5950__auto__.call(null);(statearr_14852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto___14853);
return statearr_14852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5949__auto___14942 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_14924){var state_val_14925 = (state_14924[1]);if((state_val_14925 === 1))
{var state_14924__$1 = state_14924;var statearr_14926_14943 = state_14924__$1;(statearr_14926_14943[2] = null);
(statearr_14926_14943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14925 === 2))
{var state_14924__$1 = state_14924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14924__$1,4,ch);
} else
{if((state_val_14925 === 3))
{var inst_14922 = (state_14924[2]);var state_14924__$1 = state_14924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14924__$1,inst_14922);
} else
{if((state_val_14925 === 4))
{var inst_14905 = (state_14924[5]);var inst_14905__$1 = (state_14924[2]);var inst_14906 = (inst_14905__$1 == null);var state_14924__$1 = (function (){var statearr_14927 = state_14924;(statearr_14927[5] = inst_14905__$1);
return statearr_14927;
})();if(cljs.core.truth_(inst_14906))
{var statearr_14928_14944 = state_14924__$1;(statearr_14928_14944[1] = 5);
} else
{var statearr_14929_14945 = state_14924__$1;(statearr_14929_14945[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14925 === 5))
{var inst_14908 = cljs.core.async.close_BANG_.call(null,tc);var inst_14909 = cljs.core.async.close_BANG_.call(null,fc);var state_14924__$1 = (function (){var statearr_14930 = state_14924;(statearr_14930[6] = inst_14908);
return statearr_14930;
})();var statearr_14931_14946 = state_14924__$1;(statearr_14931_14946[2] = inst_14909);
(statearr_14931_14946[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14925 === 6))
{var inst_14905 = (state_14924[5]);var inst_14911 = p.call(null,inst_14905);var state_14924__$1 = state_14924;if(cljs.core.truth_(inst_14911))
{var statearr_14932_14947 = state_14924__$1;(statearr_14932_14947[1] = 9);
} else
{var statearr_14933_14948 = state_14924__$1;(statearr_14933_14948[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14925 === 7))
{var inst_14920 = (state_14924[2]);var state_14924__$1 = state_14924;var statearr_14934_14949 = state_14924__$1;(statearr_14934_14949[2] = inst_14920);
(statearr_14934_14949[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14925 === 8))
{var inst_14917 = (state_14924[2]);var state_14924__$1 = (function (){var statearr_14935 = state_14924;(statearr_14935[7] = inst_14917);
return statearr_14935;
})();var statearr_14936_14950 = state_14924__$1;(statearr_14936_14950[2] = null);
(statearr_14936_14950[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14925 === 9))
{var state_14924__$1 = state_14924;var statearr_14937_14951 = state_14924__$1;(statearr_14937_14951[2] = tc);
(statearr_14937_14951[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14925 === 10))
{var state_14924__$1 = state_14924;var statearr_14938_14952 = state_14924__$1;(statearr_14938_14952[2] = fc);
(statearr_14938_14952[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14925 === 11))
{var inst_14905 = (state_14924[5]);var inst_14915 = (state_14924[2]);var state_14924__$1 = state_14924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14924__$1,8,inst_14915,inst_14905);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_14940 = (new Array(8));(statearr_14940[0] = state_machine__5900__auto__);
(statearr_14940[1] = 1);
return statearr_14940;
});
var state_machine__5900__auto____1 = (function (state_14924){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_14924);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_14924){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_14924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_14941 = f__5950__auto__.call(null);(statearr_14941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto___14942);
return statearr_14941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5949__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_14995){var state_val_14996 = (state_14995[1]);if((state_val_14996 === 7))
{var inst_14991 = (state_14995[2]);var state_14995__$1 = state_14995;var statearr_14997_15009 = state_14995__$1;(statearr_14997_15009[2] = inst_14991);
(statearr_14997_15009[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14996 === 6))
{var inst_14981 = (state_14995[5]);var inst_14984 = (state_14995[6]);var inst_14988 = f.call(null,inst_14981,inst_14984);var inst_14981__$1 = inst_14988;var state_14995__$1 = (function (){var statearr_14998 = state_14995;(statearr_14998[5] = inst_14981__$1);
return statearr_14998;
})();var statearr_14999_15010 = state_14995__$1;(statearr_14999_15010[2] = null);
(statearr_14999_15010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14996 === 5))
{var inst_14981 = (state_14995[5]);var state_14995__$1 = state_14995;var statearr_15000_15011 = state_14995__$1;(statearr_15000_15011[2] = inst_14981);
(statearr_15000_15011[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14996 === 4))
{var inst_14984 = (state_14995[6]);var inst_14984__$1 = (state_14995[2]);var inst_14985 = (inst_14984__$1 == null);var state_14995__$1 = (function (){var statearr_15001 = state_14995;(statearr_15001[6] = inst_14984__$1);
return statearr_15001;
})();if(cljs.core.truth_(inst_14985))
{var statearr_15002_15012 = state_14995__$1;(statearr_15002_15012[1] = 5);
} else
{var statearr_15003_15013 = state_14995__$1;(statearr_15003_15013[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14996 === 3))
{var inst_14993 = (state_14995[2]);var state_14995__$1 = state_14995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14995__$1,inst_14993);
} else
{if((state_val_14996 === 2))
{var state_14995__$1 = state_14995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14995__$1,4,ch);
} else
{if((state_val_14996 === 1))
{var inst_14981 = init;var state_14995__$1 = (function (){var statearr_15004 = state_14995;(statearr_15004[5] = inst_14981);
return statearr_15004;
})();var statearr_15005_15014 = state_14995__$1;(statearr_15005_15014[2] = null);
(statearr_15005_15014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_15007 = (new Array(7));(statearr_15007[0] = state_machine__5900__auto__);
(statearr_15007[1] = 1);
return statearr_15007;
});
var state_machine__5900__auto____1 = (function (state_14995){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_14995);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_14995){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_14995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_15008 = f__5950__auto__.call(null);(statearr_15008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto__);
return statearr_15008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return c__5949__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5949__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_15072){var state_val_15073 = (state_15072[1]);if((state_val_15073 === 1))
{var inst_15052 = cljs.core.seq.call(null,coll);var inst_15053 = inst_15052;var state_15072__$1 = (function (){var statearr_15074 = state_15072;(statearr_15074[5] = inst_15053);
return statearr_15074;
})();var statearr_15075_15089 = state_15072__$1;(statearr_15075_15089[2] = null);
(statearr_15075_15089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15073 === 2))
{var inst_15053 = (state_15072[5]);var state_15072__$1 = state_15072;if(cljs.core.truth_(inst_15053))
{var statearr_15076_15090 = state_15072__$1;(statearr_15076_15090[1] = 4);
} else
{var statearr_15077_15091 = state_15072__$1;(statearr_15077_15091[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15073 === 3))
{var inst_15070 = (state_15072[2]);var state_15072__$1 = state_15072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15072__$1,inst_15070);
} else
{if((state_val_15073 === 4))
{var inst_15053 = (state_15072[5]);var inst_15056 = cljs.core.first.call(null,inst_15053);var state_15072__$1 = state_15072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15072__$1,7,ch,inst_15056);
} else
{if((state_val_15073 === 5))
{var state_15072__$1 = state_15072;if(cljs.core.truth_(close_QMARK_))
{var statearr_15078_15092 = state_15072__$1;(statearr_15078_15092[1] = 8);
} else
{var statearr_15079_15093 = state_15072__$1;(statearr_15079_15093[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15073 === 6))
{var inst_15068 = (state_15072[2]);var state_15072__$1 = state_15072;var statearr_15080_15094 = state_15072__$1;(statearr_15080_15094[2] = inst_15068);
(statearr_15080_15094[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15073 === 7))
{var inst_15053 = (state_15072[5]);var inst_15058 = (state_15072[2]);var inst_15059 = cljs.core.next.call(null,inst_15053);var inst_15053__$1 = inst_15059;var state_15072__$1 = (function (){var statearr_15081 = state_15072;(statearr_15081[6] = inst_15058);
(statearr_15081[5] = inst_15053__$1);
return statearr_15081;
})();var statearr_15082_15095 = state_15072__$1;(statearr_15082_15095[2] = null);
(statearr_15082_15095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15073 === 8))
{var inst_15063 = cljs.core.async.close_BANG_.call(null,ch);var state_15072__$1 = state_15072;var statearr_15083_15096 = state_15072__$1;(statearr_15083_15096[2] = inst_15063);
(statearr_15083_15096[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15073 === 9))
{var state_15072__$1 = state_15072;var statearr_15084_15097 = state_15072__$1;(statearr_15084_15097[2] = null);
(statearr_15084_15097[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15073 === 10))
{var inst_15066 = (state_15072[2]);var state_15072__$1 = state_15072;var statearr_15085_15098 = state_15072__$1;(statearr_15085_15098[2] = inst_15066);
(statearr_15085_15098[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_15087 = (new Array(7));(statearr_15087[0] = state_machine__5900__auto__);
(statearr_15087[1] = 1);
return statearr_15087;
});
var state_machine__5900__auto____1 = (function (state_15072){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_15072);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_15072){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_15072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_15088 = f__5950__auto__.call(null);(statearr_15088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto__);
return statearr_15088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return c__5949__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15100 = {};return obj15100;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3273__auto__ = _;if(and__3273__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3273__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3883__auto__ = (((_ == null))?null:_);return (function (){var or__3285__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15102 = {};return obj15102;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15315 = (function (cs,ch,mult,meta15316){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15316 = meta15316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15315.cljs$lang$type = true;
cljs.core.async.t15315.cljs$lang$ctorStr = "cljs.core.async/t15315";
cljs.core.async.t15315.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t15315");
});})(cs))
;
cljs.core.async.t15315.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15315.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15315.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15315.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15315.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15315.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15317){var self__ = this;
var _15317__$1 = this;return self__.meta15316;
});})(cs))
;
cljs.core.async.t15315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15317,meta15316__$1){var self__ = this;
var _15317__$1 = this;return (new cljs.core.async.t15315(self__.cs,self__.ch,self__.mult,meta15316__$1));
});})(cs))
;
cljs.core.async.__GT_t15315 = ((function (cs){
return (function __GT_t15315(cs__$1,ch__$1,mult__$1,meta15316){return (new cljs.core.async.t15315(cs__$1,ch__$1,mult__$1,meta15316));
});})(cs))
;
}
return (new cljs.core.async.t15315(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5949__auto___15527 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_15445){var state_val_15446 = (state_15445[1]);if((state_val_15446 === 32))
{try{var inst_15396 = (state_15445[5]);var inst_15320 = (state_15445[6]);var inst_15402 = cljs.core.async.put_BANG_.call(null,inst_15396,inst_15320,done);var state_15445__$1 = state_15445;var statearr_15449_15528 = state_15445__$1;(statearr_15449_15528[2] = inst_15402);
(statearr_15449_15528[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15447){if((e15447 instanceof Object))
{var ex__5893__auto__ = e15447;var statearr_15448_15529 = state_15445;(statearr_15448_15529[1] = 31);
(statearr_15448_15529[2] = ex__5893__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15447;
} else
{return null;
}
}
}} else
{if((state_val_15446 === 1))
{var state_15445__$1 = state_15445;var statearr_15450_15530 = state_15445__$1;(statearr_15450_15530[2] = null);
(statearr_15450_15530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 33))
{var inst_15408 = (state_15445[7]);var inst_15410 = cljs.core.chunked_seq_QMARK_.call(null,inst_15408);var state_15445__$1 = state_15445;if(inst_15410)
{var statearr_15451_15531 = state_15445__$1;(statearr_15451_15531[1] = 36);
} else
{var statearr_15452_15532 = state_15445__$1;(statearr_15452_15532[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 2))
{var state_15445__$1 = state_15445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15445__$1,4,ch);
} else
{if((state_val_15446 === 34))
{var state_15445__$1 = state_15445;var statearr_15453_15533 = state_15445__$1;(statearr_15453_15533[2] = null);
(statearr_15453_15533[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 3))
{var inst_15443 = (state_15445[2]);var state_15445__$1 = state_15445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15445__$1,inst_15443);
} else
{if((state_val_15446 === 35))
{var inst_15432 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15454_15534 = state_15445__$1;(statearr_15454_15534[2] = inst_15432);
(statearr_15454_15534[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 4))
{var inst_15320 = (state_15445[6]);var inst_15320__$1 = (state_15445[2]);var inst_15321 = (inst_15320__$1 == null);var state_15445__$1 = (function (){var statearr_15455 = state_15445;(statearr_15455[6] = inst_15320__$1);
return statearr_15455;
})();if(cljs.core.truth_(inst_15321))
{var statearr_15456_15535 = state_15445__$1;(statearr_15456_15535[1] = 5);
} else
{var statearr_15457_15536 = state_15445__$1;(statearr_15457_15536[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 36))
{var inst_15408 = (state_15445[7]);var inst_15412 = cljs.core.chunk_first.call(null,inst_15408);var inst_15413 = cljs.core.chunk_rest.call(null,inst_15408);var inst_15414 = cljs.core.count.call(null,inst_15412);var inst_15388 = inst_15413;var inst_15389 = inst_15412;var inst_15390 = inst_15414;var inst_15391 = 0;var state_15445__$1 = (function (){var statearr_15458 = state_15445;(statearr_15458[8] = inst_15388);
(statearr_15458[9] = inst_15389);
(statearr_15458[10] = inst_15390);
(statearr_15458[11] = inst_15391);
return statearr_15458;
})();var statearr_15459_15537 = state_15445__$1;(statearr_15459_15537[2] = null);
(statearr_15459_15537[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 5))
{var inst_15327 = cljs.core.deref.call(null,cs);var inst_15328 = cljs.core.seq.call(null,inst_15327);var inst_15329 = inst_15328;var inst_15330 = null;var inst_15331 = 0;var inst_15332 = 0;var state_15445__$1 = (function (){var statearr_15460 = state_15445;(statearr_15460[12] = inst_15331);
(statearr_15460[13] = inst_15332);
(statearr_15460[14] = inst_15330);
(statearr_15460[15] = inst_15329);
return statearr_15460;
})();var statearr_15461_15538 = state_15445__$1;(statearr_15461_15538[2] = null);
(statearr_15461_15538[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 37))
{var inst_15408 = (state_15445[7]);var inst_15417 = cljs.core.first.call(null,inst_15408);var state_15445__$1 = (function (){var statearr_15462 = state_15445;(statearr_15462[16] = inst_15417);
return statearr_15462;
})();var statearr_15463_15539 = state_15445__$1;(statearr_15463_15539[2] = null);
(statearr_15463_15539[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 6))
{var inst_15379 = cljs.core.deref.call(null,cs);var inst_15380 = cljs.core.keys.call(null,inst_15379);var inst_15381 = cljs.core.count.call(null,inst_15380);var inst_15382 = cljs.core.reset_BANG_.call(null,dctr,inst_15381);var inst_15387 = cljs.core.seq.call(null,inst_15380);var inst_15388 = inst_15387;var inst_15389 = null;var inst_15390 = 0;var inst_15391 = 0;var state_15445__$1 = (function (){var statearr_15464 = state_15445;(statearr_15464[8] = inst_15388);
(statearr_15464[9] = inst_15389);
(statearr_15464[10] = inst_15390);
(statearr_15464[11] = inst_15391);
(statearr_15464[17] = inst_15382);
return statearr_15464;
})();var statearr_15465_15540 = state_15445__$1;(statearr_15465_15540[2] = null);
(statearr_15465_15540[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 38))
{var inst_15429 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15466_15541 = state_15445__$1;(statearr_15466_15541[2] = inst_15429);
(statearr_15466_15541[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 7))
{var inst_15441 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15467_15542 = state_15445__$1;(statearr_15467_15542[2] = inst_15441);
(statearr_15467_15542[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 39))
{var inst_15408 = (state_15445[7]);var inst_15425 = (state_15445[2]);var inst_15426 = cljs.core.next.call(null,inst_15408);var inst_15388 = inst_15426;var inst_15389 = null;var inst_15390 = 0;var inst_15391 = 0;var state_15445__$1 = (function (){var statearr_15468 = state_15445;(statearr_15468[18] = inst_15425);
(statearr_15468[8] = inst_15388);
(statearr_15468[9] = inst_15389);
(statearr_15468[10] = inst_15390);
(statearr_15468[11] = inst_15391);
return statearr_15468;
})();var statearr_15469_15543 = state_15445__$1;(statearr_15469_15543[2] = null);
(statearr_15469_15543[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 8))
{var inst_15331 = (state_15445[12]);var inst_15332 = (state_15445[13]);var inst_15334 = (inst_15332 < inst_15331);var inst_15335 = inst_15334;var state_15445__$1 = state_15445;if(cljs.core.truth_(inst_15335))
{var statearr_15470_15544 = state_15445__$1;(statearr_15470_15544[1] = 10);
} else
{var statearr_15471_15545 = state_15445__$1;(statearr_15471_15545[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 40))
{var inst_15417 = (state_15445[16]);var inst_15418 = (state_15445[2]);var inst_15419 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15420 = cljs.core.async.untap_STAR_.call(null,m,inst_15417);var state_15445__$1 = (function (){var statearr_15472 = state_15445;(statearr_15472[19] = inst_15418);
(statearr_15472[20] = inst_15419);
return statearr_15472;
})();var statearr_15473_15546 = state_15445__$1;(statearr_15473_15546[2] = inst_15420);
(statearr_15473_15546[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 9))
{var inst_15377 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15474_15547 = state_15445__$1;(statearr_15474_15547[2] = inst_15377);
(statearr_15474_15547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 41))
{try{var inst_15417 = (state_15445[16]);var inst_15320 = (state_15445[6]);var inst_15423 = cljs.core.async.put_BANG_.call(null,inst_15417,inst_15320,done);var state_15445__$1 = state_15445;var statearr_15477_15548 = state_15445__$1;(statearr_15477_15548[2] = inst_15423);
(statearr_15477_15548[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15475){if((e15475 instanceof Object))
{var ex__5893__auto__ = e15475;var statearr_15476_15549 = state_15445;(statearr_15476_15549[1] = 40);
(statearr_15476_15549[2] = ex__5893__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15475;
} else
{return null;
}
}
}} else
{if((state_val_15446 === 10))
{var inst_15332 = (state_15445[13]);var inst_15330 = (state_15445[14]);var inst_15338 = cljs.core._nth.call(null,inst_15330,inst_15332);var inst_15339 = cljs.core.nth.call(null,inst_15338,0,null);var inst_15340 = cljs.core.nth.call(null,inst_15338,1,null);var state_15445__$1 = (function (){var statearr_15478 = state_15445;(statearr_15478[21] = inst_15339);
return statearr_15478;
})();if(cljs.core.truth_(inst_15340))
{var statearr_15479_15550 = state_15445__$1;(statearr_15479_15550[1] = 13);
} else
{var statearr_15480_15551 = state_15445__$1;(statearr_15480_15551[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 42))
{var inst_15438 = (state_15445[2]);var state_15445__$1 = (function (){var statearr_15481 = state_15445;(statearr_15481[22] = inst_15438);
return statearr_15481;
})();var statearr_15482_15552 = state_15445__$1;(statearr_15482_15552[2] = null);
(statearr_15482_15552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 11))
{var inst_15349 = (state_15445[23]);var inst_15329 = (state_15445[15]);var inst_15349__$1 = cljs.core.seq.call(null,inst_15329);var state_15445__$1 = (function (){var statearr_15483 = state_15445;(statearr_15483[23] = inst_15349__$1);
return statearr_15483;
})();if(inst_15349__$1)
{var statearr_15484_15553 = state_15445__$1;(statearr_15484_15553[1] = 16);
} else
{var statearr_15485_15554 = state_15445__$1;(statearr_15485_15554[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 12))
{var inst_15375 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15486_15555 = state_15445__$1;(statearr_15486_15555[2] = inst_15375);
(statearr_15486_15555[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 13))
{var inst_15339 = (state_15445[21]);var inst_15342 = cljs.core.async.close_BANG_.call(null,inst_15339);var state_15445__$1 = state_15445;var statearr_15490_15556 = state_15445__$1;(statearr_15490_15556[2] = inst_15342);
(statearr_15490_15556[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 14))
{var state_15445__$1 = state_15445;var statearr_15491_15557 = state_15445__$1;(statearr_15491_15557[2] = null);
(statearr_15491_15557[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 15))
{var inst_15331 = (state_15445[12]);var inst_15332 = (state_15445[13]);var inst_15330 = (state_15445[14]);var inst_15329 = (state_15445[15]);var inst_15345 = (state_15445[2]);var inst_15346 = (inst_15332 + 1);var tmp15487 = inst_15331;var tmp15488 = inst_15330;var tmp15489 = inst_15329;var inst_15329__$1 = tmp15489;var inst_15330__$1 = tmp15488;var inst_15331__$1 = tmp15487;var inst_15332__$1 = inst_15346;var state_15445__$1 = (function (){var statearr_15492 = state_15445;(statearr_15492[12] = inst_15331__$1);
(statearr_15492[13] = inst_15332__$1);
(statearr_15492[14] = inst_15330__$1);
(statearr_15492[24] = inst_15345);
(statearr_15492[15] = inst_15329__$1);
return statearr_15492;
})();var statearr_15493_15558 = state_15445__$1;(statearr_15493_15558[2] = null);
(statearr_15493_15558[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 16))
{var inst_15349 = (state_15445[23]);var inst_15351 = cljs.core.chunked_seq_QMARK_.call(null,inst_15349);var state_15445__$1 = state_15445;if(inst_15351)
{var statearr_15494_15559 = state_15445__$1;(statearr_15494_15559[1] = 19);
} else
{var statearr_15495_15560 = state_15445__$1;(statearr_15495_15560[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 17))
{var state_15445__$1 = state_15445;var statearr_15496_15561 = state_15445__$1;(statearr_15496_15561[2] = null);
(statearr_15496_15561[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 18))
{var inst_15373 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15497_15562 = state_15445__$1;(statearr_15497_15562[2] = inst_15373);
(statearr_15497_15562[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 19))
{var inst_15349 = (state_15445[23]);var inst_15353 = cljs.core.chunk_first.call(null,inst_15349);var inst_15354 = cljs.core.chunk_rest.call(null,inst_15349);var inst_15355 = cljs.core.count.call(null,inst_15353);var inst_15329 = inst_15354;var inst_15330 = inst_15353;var inst_15331 = inst_15355;var inst_15332 = 0;var state_15445__$1 = (function (){var statearr_15498 = state_15445;(statearr_15498[12] = inst_15331);
(statearr_15498[13] = inst_15332);
(statearr_15498[14] = inst_15330);
(statearr_15498[15] = inst_15329);
return statearr_15498;
})();var statearr_15499_15563 = state_15445__$1;(statearr_15499_15563[2] = null);
(statearr_15499_15563[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 20))
{var inst_15349 = (state_15445[23]);var inst_15359 = cljs.core.first.call(null,inst_15349);var inst_15360 = cljs.core.nth.call(null,inst_15359,0,null);var inst_15361 = cljs.core.nth.call(null,inst_15359,1,null);var state_15445__$1 = (function (){var statearr_15500 = state_15445;(statearr_15500[25] = inst_15360);
return statearr_15500;
})();if(cljs.core.truth_(inst_15361))
{var statearr_15501_15564 = state_15445__$1;(statearr_15501_15564[1] = 22);
} else
{var statearr_15502_15565 = state_15445__$1;(statearr_15502_15565[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 21))
{var inst_15370 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15503_15566 = state_15445__$1;(statearr_15503_15566[2] = inst_15370);
(statearr_15503_15566[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 22))
{var inst_15360 = (state_15445[25]);var inst_15363 = cljs.core.async.close_BANG_.call(null,inst_15360);var state_15445__$1 = state_15445;var statearr_15504_15567 = state_15445__$1;(statearr_15504_15567[2] = inst_15363);
(statearr_15504_15567[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 23))
{var state_15445__$1 = state_15445;var statearr_15505_15568 = state_15445__$1;(statearr_15505_15568[2] = null);
(statearr_15505_15568[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 24))
{var inst_15349 = (state_15445[23]);var inst_15366 = (state_15445[2]);var inst_15367 = cljs.core.next.call(null,inst_15349);var inst_15329 = inst_15367;var inst_15330 = null;var inst_15331 = 0;var inst_15332 = 0;var state_15445__$1 = (function (){var statearr_15506 = state_15445;(statearr_15506[12] = inst_15331);
(statearr_15506[13] = inst_15332);
(statearr_15506[14] = inst_15330);
(statearr_15506[15] = inst_15329);
(statearr_15506[26] = inst_15366);
return statearr_15506;
})();var statearr_15507_15569 = state_15445__$1;(statearr_15507_15569[2] = null);
(statearr_15507_15569[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 25))
{var inst_15390 = (state_15445[10]);var inst_15391 = (state_15445[11]);var inst_15393 = (inst_15391 < inst_15390);var inst_15394 = inst_15393;var state_15445__$1 = state_15445;if(cljs.core.truth_(inst_15394))
{var statearr_15508_15570 = state_15445__$1;(statearr_15508_15570[1] = 27);
} else
{var statearr_15509_15571 = state_15445__$1;(statearr_15509_15571[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 26))
{var inst_15436 = (state_15445[2]);var state_15445__$1 = (function (){var statearr_15510 = state_15445;(statearr_15510[27] = inst_15436);
return statearr_15510;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15445__$1,42,dchan);
} else
{if((state_val_15446 === 27))
{var inst_15389 = (state_15445[9]);var inst_15391 = (state_15445[11]);var inst_15396 = cljs.core._nth.call(null,inst_15389,inst_15391);var state_15445__$1 = (function (){var statearr_15511 = state_15445;(statearr_15511[5] = inst_15396);
return statearr_15511;
})();var statearr_15512_15572 = state_15445__$1;(statearr_15512_15572[2] = null);
(statearr_15512_15572[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 28))
{var inst_15388 = (state_15445[8]);var inst_15408 = (state_15445[7]);var inst_15408__$1 = cljs.core.seq.call(null,inst_15388);var state_15445__$1 = (function (){var statearr_15516 = state_15445;(statearr_15516[7] = inst_15408__$1);
return statearr_15516;
})();if(inst_15408__$1)
{var statearr_15517_15573 = state_15445__$1;(statearr_15517_15573[1] = 33);
} else
{var statearr_15518_15574 = state_15445__$1;(statearr_15518_15574[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 29))
{var inst_15434 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15519_15575 = state_15445__$1;(statearr_15519_15575[2] = inst_15434);
(statearr_15519_15575[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 30))
{var inst_15388 = (state_15445[8]);var inst_15389 = (state_15445[9]);var inst_15390 = (state_15445[10]);var inst_15391 = (state_15445[11]);var inst_15404 = (state_15445[2]);var inst_15405 = (inst_15391 + 1);var tmp15513 = inst_15388;var tmp15514 = inst_15389;var tmp15515 = inst_15390;var inst_15388__$1 = tmp15513;var inst_15389__$1 = tmp15514;var inst_15390__$1 = tmp15515;var inst_15391__$1 = inst_15405;var state_15445__$1 = (function (){var statearr_15520 = state_15445;(statearr_15520[8] = inst_15388__$1);
(statearr_15520[9] = inst_15389__$1);
(statearr_15520[10] = inst_15390__$1);
(statearr_15520[11] = inst_15391__$1);
(statearr_15520[28] = inst_15404);
return statearr_15520;
})();var statearr_15521_15576 = state_15445__$1;(statearr_15521_15576[2] = null);
(statearr_15521_15576[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 31))
{var inst_15396 = (state_15445[5]);var inst_15397 = (state_15445[2]);var inst_15398 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15399 = cljs.core.async.untap_STAR_.call(null,m,inst_15396);var state_15445__$1 = (function (){var statearr_15522 = state_15445;(statearr_15522[29] = inst_15397);
(statearr_15522[30] = inst_15398);
return statearr_15522;
})();var statearr_15523_15577 = state_15445__$1;(statearr_15523_15577[2] = inst_15399);
(statearr_15523_15577[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_15525 = (new Array(31));(statearr_15525[0] = state_machine__5900__auto__);
(statearr_15525[1] = 1);
return statearr_15525;
});
var state_machine__5900__auto____1 = (function (state_15445){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_15445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_15445){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_15445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_15526 = f__5950__auto__.call(null);(statearr_15526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto___15527);
return statearr_15526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15579 = {};return obj15579;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15685 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15685 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15686){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta15686 = meta15686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15685.cljs$lang$type = true;
cljs.core.async.t15685.cljs$lang$ctorStr = "cljs.core.async/t15685";
cljs.core.async.t15685.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t15685");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15685.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15685.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15685.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15685.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15685.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15685.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15685.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15687){var self__ = this;
var _15687__$1 = this;return self__.meta15686;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15687,meta15686__$1){var self__ = this;
var _15687__$1 = this;return (new cljs.core.async.t15685(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15686__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15685 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15685(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15686){return (new cljs.core.async.t15685(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15686));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15685(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5949__auto___15790 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_15752){var state_val_15753 = (state_15752[1]);if((state_val_15753 === 1))
{var inst_15691 = (state_15752[5]);var inst_15691__$1 = calc_state.call(null);var inst_15692 = cljs.core.seq_QMARK_.call(null,inst_15691__$1);var state_15752__$1 = (function (){var statearr_15754 = state_15752;(statearr_15754[5] = inst_15691__$1);
return statearr_15754;
})();if(inst_15692)
{var statearr_15755_15791 = state_15752__$1;(statearr_15755_15791[1] = 2);
} else
{var statearr_15756_15792 = state_15752__$1;(statearr_15756_15792[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 2))
{var inst_15691 = (state_15752[5]);var inst_15694 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15691);var state_15752__$1 = state_15752;var statearr_15757_15793 = state_15752__$1;(statearr_15757_15793[2] = inst_15694);
(statearr_15757_15793[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 3))
{var inst_15691 = (state_15752[5]);var state_15752__$1 = state_15752;var statearr_15758_15794 = state_15752__$1;(statearr_15758_15794[2] = inst_15691);
(statearr_15758_15794[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 4))
{var inst_15691 = (state_15752[5]);var inst_15697 = (state_15752[2]);var inst_15698 = cljs.core.get.call(null,inst_15697,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15699 = cljs.core.get.call(null,inst_15697,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15700 = cljs.core.get.call(null,inst_15697,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15701 = inst_15691;var state_15752__$1 = (function (){var statearr_15759 = state_15752;(statearr_15759[6] = inst_15701);
(statearr_15759[7] = inst_15700);
(statearr_15759[8] = inst_15699);
(statearr_15759[9] = inst_15698);
return statearr_15759;
})();var statearr_15760_15795 = state_15752__$1;(statearr_15760_15795[2] = null);
(statearr_15760_15795[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 5))
{var inst_15701 = (state_15752[6]);var inst_15704 = cljs.core.seq_QMARK_.call(null,inst_15701);var state_15752__$1 = state_15752;if(inst_15704)
{var statearr_15761_15796 = state_15752__$1;(statearr_15761_15796[1] = 7);
} else
{var statearr_15762_15797 = state_15752__$1;(statearr_15762_15797[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 6))
{var inst_15750 = (state_15752[2]);var state_15752__$1 = state_15752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15752__$1,inst_15750);
} else
{if((state_val_15753 === 7))
{var inst_15701 = (state_15752[6]);var inst_15706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15701);var state_15752__$1 = state_15752;var statearr_15763_15798 = state_15752__$1;(statearr_15763_15798[2] = inst_15706);
(statearr_15763_15798[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 8))
{var inst_15701 = (state_15752[6]);var state_15752__$1 = state_15752;var statearr_15764_15799 = state_15752__$1;(statearr_15764_15799[2] = inst_15701);
(statearr_15764_15799[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 9))
{var inst_15709 = (state_15752[10]);var inst_15709__$1 = (state_15752[2]);var inst_15710 = cljs.core.get.call(null,inst_15709__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15711 = cljs.core.get.call(null,inst_15709__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15712 = cljs.core.get.call(null,inst_15709__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15752__$1 = (function (){var statearr_15765 = state_15752;(statearr_15765[10] = inst_15709__$1);
(statearr_15765[11] = inst_15712);
(statearr_15765[12] = inst_15711);
return statearr_15765;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15752__$1,10,inst_15710);
} else
{if((state_val_15753 === 10))
{var inst_15717 = (state_15752[13]);var inst_15716 = (state_15752[14]);var inst_15715 = (state_15752[2]);var inst_15716__$1 = cljs.core.nth.call(null,inst_15715,0,null);var inst_15717__$1 = cljs.core.nth.call(null,inst_15715,1,null);var inst_15718 = (inst_15716__$1 == null);var inst_15719 = cljs.core._EQ_.call(null,inst_15717__$1,change);var inst_15720 = (inst_15718) || (inst_15719);var state_15752__$1 = (function (){var statearr_15766 = state_15752;(statearr_15766[13] = inst_15717__$1);
(statearr_15766[14] = inst_15716__$1);
return statearr_15766;
})();if(cljs.core.truth_(inst_15720))
{var statearr_15767_15800 = state_15752__$1;(statearr_15767_15800[1] = 11);
} else
{var statearr_15768_15801 = state_15752__$1;(statearr_15768_15801[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 11))
{var inst_15716 = (state_15752[14]);var inst_15722 = (inst_15716 == null);var state_15752__$1 = state_15752;if(cljs.core.truth_(inst_15722))
{var statearr_15769_15802 = state_15752__$1;(statearr_15769_15802[1] = 14);
} else
{var statearr_15770_15803 = state_15752__$1;(statearr_15770_15803[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 12))
{var inst_15717 = (state_15752[13]);var inst_15731 = (state_15752[15]);var inst_15712 = (state_15752[11]);var inst_15731__$1 = inst_15712.call(null,inst_15717);var state_15752__$1 = (function (){var statearr_15771 = state_15752;(statearr_15771[15] = inst_15731__$1);
return statearr_15771;
})();if(cljs.core.truth_(inst_15731__$1))
{var statearr_15772_15804 = state_15752__$1;(statearr_15772_15804[1] = 17);
} else
{var statearr_15773_15805 = state_15752__$1;(statearr_15773_15805[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 13))
{var inst_15748 = (state_15752[2]);var state_15752__$1 = state_15752;var statearr_15774_15806 = state_15752__$1;(statearr_15774_15806[2] = inst_15748);
(statearr_15774_15806[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 14))
{var inst_15717 = (state_15752[13]);var inst_15724 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15717);var state_15752__$1 = state_15752;var statearr_15775_15807 = state_15752__$1;(statearr_15775_15807[2] = inst_15724);
(statearr_15775_15807[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 15))
{var state_15752__$1 = state_15752;var statearr_15776_15808 = state_15752__$1;(statearr_15776_15808[2] = null);
(statearr_15776_15808[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 16))
{var inst_15727 = (state_15752[2]);var inst_15728 = calc_state.call(null);var inst_15701 = inst_15728;var state_15752__$1 = (function (){var statearr_15777 = state_15752;(statearr_15777[6] = inst_15701);
(statearr_15777[16] = inst_15727);
return statearr_15777;
})();var statearr_15778_15809 = state_15752__$1;(statearr_15778_15809[2] = null);
(statearr_15778_15809[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 17))
{var inst_15731 = (state_15752[15]);var state_15752__$1 = state_15752;var statearr_15779_15810 = state_15752__$1;(statearr_15779_15810[2] = inst_15731);
(statearr_15779_15810[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 18))
{var inst_15717 = (state_15752[13]);var inst_15712 = (state_15752[11]);var inst_15711 = (state_15752[12]);var inst_15734 = cljs.core.empty_QMARK_.call(null,inst_15712);var inst_15735 = inst_15711.call(null,inst_15717);var inst_15736 = cljs.core.not.call(null,inst_15735);var inst_15737 = (inst_15734) && (inst_15736);var state_15752__$1 = state_15752;var statearr_15780_15811 = state_15752__$1;(statearr_15780_15811[2] = inst_15737);
(statearr_15780_15811[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 19))
{var inst_15739 = (state_15752[2]);var state_15752__$1 = state_15752;if(cljs.core.truth_(inst_15739))
{var statearr_15781_15812 = state_15752__$1;(statearr_15781_15812[1] = 20);
} else
{var statearr_15782_15813 = state_15752__$1;(statearr_15782_15813[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 20))
{var inst_15716 = (state_15752[14]);var state_15752__$1 = state_15752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15752__$1,23,out,inst_15716);
} else
{if((state_val_15753 === 21))
{var state_15752__$1 = state_15752;var statearr_15783_15814 = state_15752__$1;(statearr_15783_15814[2] = null);
(statearr_15783_15814[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 22))
{var inst_15709 = (state_15752[10]);var inst_15745 = (state_15752[2]);var inst_15701 = inst_15709;var state_15752__$1 = (function (){var statearr_15784 = state_15752;(statearr_15784[6] = inst_15701);
(statearr_15784[17] = inst_15745);
return statearr_15784;
})();var statearr_15785_15815 = state_15752__$1;(statearr_15785_15815[2] = null);
(statearr_15785_15815[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15753 === 23))
{var inst_15742 = (state_15752[2]);var state_15752__$1 = state_15752;var statearr_15786_15816 = state_15752__$1;(statearr_15786_15816[2] = inst_15742);
(statearr_15786_15816[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_15788 = (new Array(18));(statearr_15788[0] = state_machine__5900__auto__);
(statearr_15788[1] = 1);
return statearr_15788;
});
var state_machine__5900__auto____1 = (function (state_15752){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_15752);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_15752){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_15752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_15789 = f__5950__auto__.call(null);(statearr_15789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto___15790);
return statearr_15789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15818 = {};return obj15818;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3273__auto__ = p;if(and__3273__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3273__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3883__auto__ = (((p == null))?null:p);return (function (){var or__3285__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3273__auto__ = p;if(and__3273__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3273__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3883__auto__ = (((p == null))?null:p);return (function (){var or__3285__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3273__auto__ = p;if(and__3273__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3273__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3883__auto__ = (((p == null))?null:p);return (function (){var or__3285__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3273__auto__ = p;if(and__3273__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3883__auto__ = (((p == null))?null:p);return (function (){var or__3285__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3285__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3285__auto__,mults){
return (function (p1__15819_SHARP_){if(cljs.core.truth_(p1__15819_SHARP_.call(null,topic)))
{return p1__15819_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15819_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3285__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15943 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15943 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15944){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15944 = meta15944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15943.cljs$lang$type = true;
cljs.core.async.t15943.cljs$lang$ctorStr = "cljs.core.async/t15943";
cljs.core.async.t15943.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write.call(null,writer__3825__auto__,"cljs.core.async/t15943");
});})(mults,ensure_mult))
;
cljs.core.async.t15943.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15943.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15943.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15943.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15945){var self__ = this;
var _15945__$1 = this;return self__.meta15944;
});})(mults,ensure_mult))
;
cljs.core.async.t15943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15945,meta15944__$1){var self__ = this;
var _15945__$1 = this;return (new cljs.core.async.t15943(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15944__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15943 = ((function (mults,ensure_mult){
return (function __GT_t15943(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15944){return (new cljs.core.async.t15943(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15944));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15943(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5949__auto___16066 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_16018){var state_val_16019 = (state_16018[1]);if((state_val_16019 === 1))
{var state_16018__$1 = state_16018;var statearr_16020_16067 = state_16018__$1;(statearr_16020_16067[2] = null);
(statearr_16020_16067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 2))
{var state_16018__$1 = state_16018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16018__$1,4,ch);
} else
{if((state_val_16019 === 3))
{var inst_16016 = (state_16018[2]);var state_16018__$1 = state_16018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16018__$1,inst_16016);
} else
{if((state_val_16019 === 4))
{var inst_15948 = (state_16018[5]);var inst_15948__$1 = (state_16018[2]);var inst_15949 = (inst_15948__$1 == null);var state_16018__$1 = (function (){var statearr_16021 = state_16018;(statearr_16021[5] = inst_15948__$1);
return statearr_16021;
})();if(cljs.core.truth_(inst_15949))
{var statearr_16022_16068 = state_16018__$1;(statearr_16022_16068[1] = 5);
} else
{var statearr_16023_16069 = state_16018__$1;(statearr_16023_16069[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 5))
{var inst_15955 = cljs.core.deref.call(null,mults);var inst_15956 = cljs.core.vals.call(null,inst_15955);var inst_15957 = cljs.core.seq.call(null,inst_15956);var inst_15958 = inst_15957;var inst_15959 = null;var inst_15960 = 0;var inst_15961 = 0;var state_16018__$1 = (function (){var statearr_16024 = state_16018;(statearr_16024[6] = inst_15959);
(statearr_16024[7] = inst_15958);
(statearr_16024[8] = inst_15960);
(statearr_16024[9] = inst_15961);
return statearr_16024;
})();var statearr_16025_16070 = state_16018__$1;(statearr_16025_16070[2] = null);
(statearr_16025_16070[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 6))
{var inst_15948 = (state_16018[5]);var inst_15998 = (state_16018[10]);var inst_15996 = (state_16018[11]);var inst_15996__$1 = topic_fn.call(null,inst_15948);var inst_15997 = cljs.core.deref.call(null,mults);var inst_15998__$1 = cljs.core.get.call(null,inst_15997,inst_15996__$1);var state_16018__$1 = (function (){var statearr_16026 = state_16018;(statearr_16026[10] = inst_15998__$1);
(statearr_16026[11] = inst_15996__$1);
return statearr_16026;
})();if(cljs.core.truth_(inst_15998__$1))
{var statearr_16027_16071 = state_16018__$1;(statearr_16027_16071[1] = 19);
} else
{var statearr_16028_16072 = state_16018__$1;(statearr_16028_16072[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 7))
{var inst_16014 = (state_16018[2]);var state_16018__$1 = state_16018;var statearr_16029_16073 = state_16018__$1;(statearr_16029_16073[2] = inst_16014);
(statearr_16029_16073[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 8))
{var inst_15960 = (state_16018[8]);var inst_15961 = (state_16018[9]);var inst_15963 = (inst_15961 < inst_15960);var inst_15964 = inst_15963;var state_16018__$1 = state_16018;if(cljs.core.truth_(inst_15964))
{var statearr_16033_16074 = state_16018__$1;(statearr_16033_16074[1] = 10);
} else
{var statearr_16034_16075 = state_16018__$1;(statearr_16034_16075[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 9))
{var inst_15994 = (state_16018[2]);var state_16018__$1 = state_16018;var statearr_16035_16076 = state_16018__$1;(statearr_16035_16076[2] = inst_15994);
(statearr_16035_16076[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 10))
{var inst_15959 = (state_16018[6]);var inst_15958 = (state_16018[7]);var inst_15960 = (state_16018[8]);var inst_15961 = (state_16018[9]);var inst_15966 = cljs.core._nth.call(null,inst_15959,inst_15961);var inst_15967 = cljs.core.async.muxch_STAR_.call(null,inst_15966);var inst_15968 = cljs.core.async.close_BANG_.call(null,inst_15967);var inst_15969 = (inst_15961 + 1);var tmp16030 = inst_15959;var tmp16031 = inst_15958;var tmp16032 = inst_15960;var inst_15958__$1 = tmp16031;var inst_15959__$1 = tmp16030;var inst_15960__$1 = tmp16032;var inst_15961__$1 = inst_15969;var state_16018__$1 = (function (){var statearr_16036 = state_16018;(statearr_16036[6] = inst_15959__$1);
(statearr_16036[12] = inst_15968);
(statearr_16036[7] = inst_15958__$1);
(statearr_16036[8] = inst_15960__$1);
(statearr_16036[9] = inst_15961__$1);
return statearr_16036;
})();var statearr_16037_16077 = state_16018__$1;(statearr_16037_16077[2] = null);
(statearr_16037_16077[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 11))
{var inst_15972 = (state_16018[13]);var inst_15958 = (state_16018[7]);var inst_15972__$1 = cljs.core.seq.call(null,inst_15958);var state_16018__$1 = (function (){var statearr_16038 = state_16018;(statearr_16038[13] = inst_15972__$1);
return statearr_16038;
})();if(inst_15972__$1)
{var statearr_16039_16078 = state_16018__$1;(statearr_16039_16078[1] = 13);
} else
{var statearr_16040_16079 = state_16018__$1;(statearr_16040_16079[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 12))
{var inst_15992 = (state_16018[2]);var state_16018__$1 = state_16018;var statearr_16041_16080 = state_16018__$1;(statearr_16041_16080[2] = inst_15992);
(statearr_16041_16080[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 13))
{var inst_15972 = (state_16018[13]);var inst_15974 = cljs.core.chunked_seq_QMARK_.call(null,inst_15972);var state_16018__$1 = state_16018;if(inst_15974)
{var statearr_16042_16081 = state_16018__$1;(statearr_16042_16081[1] = 16);
} else
{var statearr_16043_16082 = state_16018__$1;(statearr_16043_16082[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 14))
{var state_16018__$1 = state_16018;var statearr_16044_16083 = state_16018__$1;(statearr_16044_16083[2] = null);
(statearr_16044_16083[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 15))
{var inst_15990 = (state_16018[2]);var state_16018__$1 = state_16018;var statearr_16045_16084 = state_16018__$1;(statearr_16045_16084[2] = inst_15990);
(statearr_16045_16084[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 16))
{var inst_15972 = (state_16018[13]);var inst_15976 = cljs.core.chunk_first.call(null,inst_15972);var inst_15977 = cljs.core.chunk_rest.call(null,inst_15972);var inst_15978 = cljs.core.count.call(null,inst_15976);var inst_15958 = inst_15977;var inst_15959 = inst_15976;var inst_15960 = inst_15978;var inst_15961 = 0;var state_16018__$1 = (function (){var statearr_16046 = state_16018;(statearr_16046[6] = inst_15959);
(statearr_16046[7] = inst_15958);
(statearr_16046[8] = inst_15960);
(statearr_16046[9] = inst_15961);
return statearr_16046;
})();var statearr_16047_16085 = state_16018__$1;(statearr_16047_16085[2] = null);
(statearr_16047_16085[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 17))
{var inst_15972 = (state_16018[13]);var inst_15981 = cljs.core.first.call(null,inst_15972);var inst_15982 = cljs.core.async.muxch_STAR_.call(null,inst_15981);var inst_15983 = cljs.core.async.close_BANG_.call(null,inst_15982);var inst_15984 = cljs.core.next.call(null,inst_15972);var inst_15958 = inst_15984;var inst_15959 = null;var inst_15960 = 0;var inst_15961 = 0;var state_16018__$1 = (function (){var statearr_16048 = state_16018;(statearr_16048[6] = inst_15959);
(statearr_16048[14] = inst_15983);
(statearr_16048[7] = inst_15958);
(statearr_16048[8] = inst_15960);
(statearr_16048[9] = inst_15961);
return statearr_16048;
})();var statearr_16049_16086 = state_16018__$1;(statearr_16049_16086[2] = null);
(statearr_16049_16086[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 18))
{var inst_15987 = (state_16018[2]);var state_16018__$1 = state_16018;var statearr_16050_16087 = state_16018__$1;(statearr_16050_16087[2] = inst_15987);
(statearr_16050_16087[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 19))
{var state_16018__$1 = state_16018;var statearr_16051_16088 = state_16018__$1;(statearr_16051_16088[2] = null);
(statearr_16051_16088[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 20))
{var state_16018__$1 = state_16018;var statearr_16052_16089 = state_16018__$1;(statearr_16052_16089[2] = null);
(statearr_16052_16089[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 21))
{var inst_16011 = (state_16018[2]);var state_16018__$1 = (function (){var statearr_16053 = state_16018;(statearr_16053[15] = inst_16011);
return statearr_16053;
})();var statearr_16054_16090 = state_16018__$1;(statearr_16054_16090[2] = null);
(statearr_16054_16090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 22))
{var inst_16008 = (state_16018[2]);var state_16018__$1 = state_16018;var statearr_16055_16091 = state_16018__$1;(statearr_16055_16091[2] = inst_16008);
(statearr_16055_16091[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 23))
{var inst_15996 = (state_16018[11]);var inst_16000 = (state_16018[2]);var inst_16001 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15996);var state_16018__$1 = (function (){var statearr_16056 = state_16018;(statearr_16056[16] = inst_16000);
return statearr_16056;
})();var statearr_16057_16092 = state_16018__$1;(statearr_16057_16092[2] = inst_16001);
(statearr_16057_16092[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16019 === 24))
{try{var inst_15948 = (state_16018[5]);var inst_15998 = (state_16018[10]);var inst_16004 = cljs.core.async.muxch_STAR_.call(null,inst_15998);var state_16018__$1 = state_16018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16018__$1,25,inst_16004,inst_15948);
}catch (e16058){if((e16058 instanceof Object))
{var ex__5893__auto__ = e16058;var statearr_16059_16093 = state_16018;(statearr_16059_16093[1] = 23);
(statearr_16059_16093[2] = ex__5893__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16058;
} else
{return null;
}
}
}} else
{if((state_val_16019 === 25))
{try{var inst_16006 = (state_16018[2]);var state_16018__$1 = state_16018;var statearr_16062_16094 = state_16018__$1;(statearr_16062_16094[2] = inst_16006);
(statearr_16062_16094[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e16060){if((e16060 instanceof Object))
{var ex__5893__auto__ = e16060;var statearr_16061_16095 = state_16018;(statearr_16061_16095[1] = 23);
(statearr_16061_16095[2] = ex__5893__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16060;
} else
{return null;
}
}
}} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_16064 = (new Array(17));(statearr_16064[0] = state_machine__5900__auto__);
(statearr_16064[1] = 1);
return statearr_16064;
});
var state_machine__5900__auto____1 = (function (state_16018){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_16018);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_16018){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_16018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_16065 = f__5950__auto__.call(null);(statearr_16065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto___16066);
return statearr_16065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,java.util.Arrays.copyOf.call(null,rets,cnt));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5949__auto___16226 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_16198){var state_val_16199 = (state_16198[1]);if((state_val_16199 === 1))
{var state_16198__$1 = state_16198;var statearr_16200_16227 = state_16198__$1;(statearr_16200_16227[2] = null);
(statearr_16200_16227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 2))
{var inst_16162 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16163 = 0;var state_16198__$1 = (function (){var statearr_16201 = state_16198;(statearr_16201[5] = inst_16162);
(statearr_16201[6] = inst_16163);
return statearr_16201;
})();var statearr_16202_16228 = state_16198__$1;(statearr_16202_16228[2] = null);
(statearr_16202_16228[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 3))
{var inst_16196 = (state_16198[2]);var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16198__$1,inst_16196);
} else
{if((state_val_16199 === 4))
{var inst_16163 = (state_16198[6]);var inst_16165 = (inst_16163 < cnt);var state_16198__$1 = state_16198;if(cljs.core.truth_(inst_16165))
{var statearr_16203_16229 = state_16198__$1;(statearr_16203_16229[1] = 6);
} else
{var statearr_16204_16230 = state_16198__$1;(statearr_16204_16230[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 5))
{var inst_16182 = (state_16198[2]);var state_16198__$1 = (function (){var statearr_16205 = state_16198;(statearr_16205[7] = inst_16182);
return statearr_16205;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16198__$1,12,dchan);
} else
{if((state_val_16199 === 6))
{var state_16198__$1 = state_16198;var statearr_16206_16231 = state_16198__$1;(statearr_16206_16231[2] = null);
(statearr_16206_16231[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 7))
{var state_16198__$1 = state_16198;var statearr_16207_16232 = state_16198__$1;(statearr_16207_16232[2] = null);
(statearr_16207_16232[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 8))
{var inst_16180 = (state_16198[2]);var state_16198__$1 = state_16198;var statearr_16208_16233 = state_16198__$1;(statearr_16208_16233[2] = inst_16180);
(statearr_16208_16233[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 9))
{var inst_16163 = (state_16198[6]);var inst_16175 = (state_16198[2]);var inst_16176 = (inst_16163 + 1);var inst_16163__$1 = inst_16176;var state_16198__$1 = (function (){var statearr_16209 = state_16198;(statearr_16209[6] = inst_16163__$1);
(statearr_16209[8] = inst_16175);
return statearr_16209;
})();var statearr_16210_16234 = state_16198__$1;(statearr_16210_16234[2] = null);
(statearr_16210_16234[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 10))
{var inst_16167 = (state_16198[2]);var inst_16168 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16198__$1 = (function (){var statearr_16211 = state_16198;(statearr_16211[9] = inst_16167);
return statearr_16211;
})();var statearr_16212_16235 = state_16198__$1;(statearr_16212_16235[2] = inst_16168);
(statearr_16212_16235[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 11))
{try{var inst_16163 = (state_16198[6]);var inst_16171 = chs__$1.call(null,inst_16163);var inst_16172 = done.call(null,inst_16163);var inst_16173 = cljs.core.async.take_BANG_.call(null,inst_16171,inst_16172);var state_16198__$1 = state_16198;var statearr_16215_16236 = state_16198__$1;(statearr_16215_16236[2] = inst_16173);
(statearr_16215_16236[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e16213){if((e16213 instanceof Object))
{var ex__5893__auto__ = e16213;var statearr_16214_16237 = state_16198;(statearr_16214_16237[1] = 10);
(statearr_16214_16237[2] = ex__5893__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16213;
} else
{return null;
}
}
}} else
{if((state_val_16199 === 12))
{var inst_16184 = (state_16198[10]);var inst_16184__$1 = (state_16198[2]);var inst_16185 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16184__$1);var state_16198__$1 = (function (){var statearr_16216 = state_16198;(statearr_16216[10] = inst_16184__$1);
return statearr_16216;
})();if(cljs.core.truth_(inst_16185))
{var statearr_16217_16238 = state_16198__$1;(statearr_16217_16238[1] = 13);
} else
{var statearr_16218_16239 = state_16198__$1;(statearr_16218_16239[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 13))
{var inst_16187 = cljs.core.async.close_BANG_.call(null,out);var state_16198__$1 = state_16198;var statearr_16219_16240 = state_16198__$1;(statearr_16219_16240[2] = inst_16187);
(statearr_16219_16240[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 14))
{var inst_16184 = (state_16198[10]);var inst_16189 = cljs.core.apply.call(null,f,inst_16184);var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16198__$1,16,out,inst_16189);
} else
{if((state_val_16199 === 15))
{var inst_16194 = (state_16198[2]);var state_16198__$1 = state_16198;var statearr_16220_16241 = state_16198__$1;(statearr_16220_16241[2] = inst_16194);
(statearr_16220_16241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 16))
{var inst_16191 = (state_16198[2]);var state_16198__$1 = (function (){var statearr_16221 = state_16198;(statearr_16221[11] = inst_16191);
return statearr_16221;
})();var statearr_16222_16242 = state_16198__$1;(statearr_16222_16242[2] = null);
(statearr_16222_16242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_16224 = (new Array(12));(statearr_16224[0] = state_machine__5900__auto__);
(statearr_16224[1] = 1);
return statearr_16224;
});
var state_machine__5900__auto____1 = (function (state_16198){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_16198);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_16198){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_16198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_16225 = f__5950__auto__.call(null);(statearr_16225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto___16226);
return statearr_16225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5949__auto___16342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5950__auto__ = (function (){var switch__5899__auto__ = (function (state_16322){var state_val_16323 = (state_16322[1]);if((state_val_16323 === 1))
{var inst_16293 = cljs.core.vec.call(null,chs);var inst_16294 = inst_16293;var state_16322__$1 = (function (){var statearr_16324 = state_16322;(statearr_16324[5] = inst_16294);
return statearr_16324;
})();var statearr_16325_16343 = state_16322__$1;(statearr_16325_16343[2] = null);
(statearr_16325_16343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16323 === 2))
{var inst_16294 = (state_16322[5]);var inst_16296 = cljs.core.count.call(null,inst_16294);var inst_16297 = (inst_16296 > 0);var state_16322__$1 = state_16322;if(cljs.core.truth_(inst_16297))
{var statearr_16326_16344 = state_16322__$1;(statearr_16326_16344[1] = 4);
} else
{var statearr_16327_16345 = state_16322__$1;(statearr_16327_16345[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16323 === 3))
{var inst_16320 = (state_16322[2]);var state_16322__$1 = state_16322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16322__$1,inst_16320);
} else
{if((state_val_16323 === 4))
{var inst_16294 = (state_16322[5]);var state_16322__$1 = state_16322;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16322__$1,7,inst_16294);
} else
{if((state_val_16323 === 5))
{var inst_16316 = cljs.core.async.close_BANG_.call(null,out);var state_16322__$1 = state_16322;var statearr_16328_16346 = state_16322__$1;(statearr_16328_16346[2] = inst_16316);
(statearr_16328_16346[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16323 === 6))
{var inst_16318 = (state_16322[2]);var state_16322__$1 = state_16322;var statearr_16329_16347 = state_16322__$1;(statearr_16329_16347[2] = inst_16318);
(statearr_16329_16347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16323 === 7))
{var inst_16301 = (state_16322[6]);var inst_16302 = (state_16322[7]);var inst_16301__$1 = (state_16322[2]);var inst_16302__$1 = cljs.core.nth.call(null,inst_16301__$1,0,null);var inst_16303 = cljs.core.nth.call(null,inst_16301__$1,1,null);var inst_16304 = (inst_16302__$1 == null);var state_16322__$1 = (function (){var statearr_16330 = state_16322;(statearr_16330[6] = inst_16301__$1);
(statearr_16330[7] = inst_16302__$1);
(statearr_16330[8] = inst_16303);
return statearr_16330;
})();if(cljs.core.truth_(inst_16304))
{var statearr_16331_16348 = state_16322__$1;(statearr_16331_16348[1] = 8);
} else
{var statearr_16332_16349 = state_16322__$1;(statearr_16332_16349[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16323 === 8))
{var inst_16301 = (state_16322[6]);var inst_16302 = (state_16322[7]);var inst_16294 = (state_16322[5]);var inst_16303 = (state_16322[8]);var inst_16306 = (function (){var c = inst_16303;var v = inst_16302;var vec__16299 = inst_16301;var cs = inst_16294;return ((function (c,v,vec__16299,cs,inst_16301,inst_16302,inst_16294,inst_16303,state_val_16323){
return (function (p1__16243_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16243_SHARP_);
});
;})(c,v,vec__16299,cs,inst_16301,inst_16302,inst_16294,inst_16303,state_val_16323))
})();var inst_16307 = cljs.core.filterv.call(null,inst_16306,inst_16294);var inst_16294__$1 = inst_16307;var state_16322__$1 = (function (){var statearr_16333 = state_16322;(statearr_16333[5] = inst_16294__$1);
return statearr_16333;
})();var statearr_16334_16350 = state_16322__$1;(statearr_16334_16350[2] = null);
(statearr_16334_16350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16323 === 9))
{var inst_16302 = (state_16322[7]);var state_16322__$1 = state_16322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16322__$1,11,out,inst_16302);
} else
{if((state_val_16323 === 10))
{var inst_16314 = (state_16322[2]);var state_16322__$1 = state_16322;var statearr_16336_16351 = state_16322__$1;(statearr_16336_16351[2] = inst_16314);
(statearr_16336_16351[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16323 === 11))
{var inst_16294 = (state_16322[5]);var inst_16311 = (state_16322[2]);var tmp16335 = inst_16294;var inst_16294__$1 = tmp16335;var state_16322__$1 = (function (){var statearr_16337 = state_16322;(statearr_16337[5] = inst_16294__$1);
(statearr_16337[9] = inst_16311);
return statearr_16337;
})();var statearr_16338_16352 = state_16322__$1;(statearr_16338_16352[2] = null);
(statearr_16338_16352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5899__auto__){
return (function() {
var state_machine__5900__auto__ = null;
var state_machine__5900__auto____0 = (function (){var statearr_16340 = (new Array(10));(statearr_16340[0] = state_machine__5900__auto__);
(statearr_16340[1] = 1);
return statearr_16340;
});
var state_machine__5900__auto____1 = (function (state_16322){while(true){
var result__5901__auto__ = switch__5899__auto__.call(null,state_16322);if(cljs.core.keyword_identical_QMARK_.call(null,result__5901__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5901__auto__;
}
break;
}
});
state_machine__5900__auto__ = function(state_16322){
switch(arguments.length){
case 0:
return state_machine__5900__auto____0.call(this);
case 1:
return state_machine__5900__auto____1.call(this,state_16322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5900__auto____0;
state_machine__5900__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5900__auto____1;
return state_machine__5900__auto__;
})()
;})(switch__5899__auto__))
})();var state__5951__auto__ = (function (){var statearr_16341 = f__5950__auto__.call(null);(statearr_16341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5949__auto___16342);
return statearr_16341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5951__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
