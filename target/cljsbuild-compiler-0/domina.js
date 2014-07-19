// Compiled by ClojureScript 0.0-2069
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_13974 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_13975 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_13976 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_13975,table_section_wrapper_13975,opt_wrapper_13974,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_13976,table_section_wrapper_13975,cell_wrapper_13976,opt_wrapper_13974,table_section_wrapper_13975,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_13975]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3273__auto__ = div.firstChild;if(cljs.core.truth_(and__3273__auto__))
{return div.firstChild.childNodes;
} else
{return and__3273__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__13981 = cljs.core.seq.call(null,tbody);var chunk__13982 = null;var count__13983 = 0;var i__13984 = 0;while(true){
if((i__13984 < count__13983))
{var child = cljs.core._nth.call(null,chunk__13982,i__13984);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__13985 = seq__13981;
var G__13986 = chunk__13982;
var G__13987 = count__13983;
var G__13988 = (i__13984 + 1);
seq__13981 = G__13985;
chunk__13982 = G__13986;
count__13983 = G__13987;
i__13984 = G__13988;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13981);if(temp__4092__auto__)
{var seq__13981__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13981__$1))
{var c__4004__auto__ = cljs.core.chunk_first.call(null,seq__13981__$1);{
var G__13989 = cljs.core.chunk_rest.call(null,seq__13981__$1);
var G__13990 = c__4004__auto__;
var G__13991 = cljs.core.count.call(null,c__4004__auto__);
var G__13992 = 0;
seq__13981 = G__13989;
chunk__13982 = G__13990;
count__13983 = G__13991;
i__13984 = G__13992;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__13981__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__13993 = cljs.core.next.call(null,seq__13981__$1);
var G__13994 = null;
var G__13995 = 0;
var G__13996 = 0;
seq__13981 = G__13993;
chunk__13982 = G__13994;
count__13983 = G__13995;
i__13984 = G__13996;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__13998 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__13998,0,null);var start_wrap = cljs.core.nth.call(null,vec__13998,1,null);var end_wrap = cljs.core.nth.call(null,vec__13998,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__13999 = wrapper.lastChild;
var G__14000 = (level - 1);
wrapper = G__13999;
level = G__14000;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3273__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3273__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3273__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj14002 = {};return obj14002;
})();
domina.nodes = (function nodes(content){if((function (){var and__3273__auto__ = content;if(and__3273__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3273__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3883__auto__ = (((content == null))?null:content);return (function (){var or__3285__auto__ = (domina.nodes[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.nodes["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3273__auto__ = nodeseq;if(and__3273__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3273__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3883__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3285__auto__ = (domina.single_node[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.single_node["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3273__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3273__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3273__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__14003){
var mesg = cljs.core.seq(arglist__14003);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__14004){
var mesg = cljs.core.seq(arglist__14004);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__14005){
var contents = cljs.core.seq(arglist__14005);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__14006_SHARP_){return p1__14006_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__14007_SHARP_,p2__14008_SHARP_){return goog.dom.insertChildAt(p1__14007_SHARP_,p2__14008_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14010_SHARP_,p2__14009_SHARP_){return goog.dom.insertSiblingBefore(p2__14009_SHARP_,p1__14010_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14012_SHARP_,p2__14011_SHARP_){return goog.dom.insertSiblingAfter(p2__14011_SHARP_,p1__14012_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__14014_SHARP_,p2__14013_SHARP_){return goog.dom.replaceNode(p2__14013_SHARP_,p1__14014_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__14019_14023 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14020_14024 = null;var count__14021_14025 = 0;var i__14022_14026 = 0;while(true){
if((i__14022_14026 < count__14021_14025))
{var n_14027 = cljs.core._nth.call(null,chunk__14020_14024,i__14022_14026);goog.style.setStyle(n_14027,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14028 = seq__14019_14023;
var G__14029 = chunk__14020_14024;
var G__14030 = count__14021_14025;
var G__14031 = (i__14022_14026 + 1);
seq__14019_14023 = G__14028;
chunk__14020_14024 = G__14029;
count__14021_14025 = G__14030;
i__14022_14026 = G__14031;
continue;
}
} else
{var temp__4092__auto___14032 = cljs.core.seq.call(null,seq__14019_14023);if(temp__4092__auto___14032)
{var seq__14019_14033__$1 = temp__4092__auto___14032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14019_14033__$1))
{var c__4004__auto___14034 = cljs.core.chunk_first.call(null,seq__14019_14033__$1);{
var G__14035 = cljs.core.chunk_rest.call(null,seq__14019_14033__$1);
var G__14036 = c__4004__auto___14034;
var G__14037 = cljs.core.count.call(null,c__4004__auto___14034);
var G__14038 = 0;
seq__14019_14023 = G__14035;
chunk__14020_14024 = G__14036;
count__14021_14025 = G__14037;
i__14022_14026 = G__14038;
continue;
}
} else
{var n_14039 = cljs.core.first.call(null,seq__14019_14033__$1);goog.style.setStyle(n_14039,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14040 = cljs.core.next.call(null,seq__14019_14033__$1);
var G__14041 = null;
var G__14042 = 0;
var G__14043 = 0;
seq__14019_14023 = G__14040;
chunk__14020_14024 = G__14041;
count__14021_14025 = G__14042;
i__14022_14026 = G__14043;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14044){
var content = cljs.core.first(arglist__14044);
arglist__14044 = cljs.core.next(arglist__14044);
var name = cljs.core.first(arglist__14044);
var value = cljs.core.rest(arglist__14044);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__14049_14053 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14050_14054 = null;var count__14051_14055 = 0;var i__14052_14056 = 0;while(true){
if((i__14052_14056 < count__14051_14055))
{var n_14057 = cljs.core._nth.call(null,chunk__14050_14054,i__14052_14056);n_14057.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14058 = seq__14049_14053;
var G__14059 = chunk__14050_14054;
var G__14060 = count__14051_14055;
var G__14061 = (i__14052_14056 + 1);
seq__14049_14053 = G__14058;
chunk__14050_14054 = G__14059;
count__14051_14055 = G__14060;
i__14052_14056 = G__14061;
continue;
}
} else
{var temp__4092__auto___14062 = cljs.core.seq.call(null,seq__14049_14053);if(temp__4092__auto___14062)
{var seq__14049_14063__$1 = temp__4092__auto___14062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14049_14063__$1))
{var c__4004__auto___14064 = cljs.core.chunk_first.call(null,seq__14049_14063__$1);{
var G__14065 = cljs.core.chunk_rest.call(null,seq__14049_14063__$1);
var G__14066 = c__4004__auto___14064;
var G__14067 = cljs.core.count.call(null,c__4004__auto___14064);
var G__14068 = 0;
seq__14049_14053 = G__14065;
chunk__14050_14054 = G__14066;
count__14051_14055 = G__14067;
i__14052_14056 = G__14068;
continue;
}
} else
{var n_14069 = cljs.core.first.call(null,seq__14049_14063__$1);n_14069.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14070 = cljs.core.next.call(null,seq__14049_14063__$1);
var G__14071 = null;
var G__14072 = 0;
var G__14073 = 0;
seq__14049_14053 = G__14070;
chunk__14050_14054 = G__14071;
count__14051_14055 = G__14072;
i__14052_14056 = G__14073;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__14074){
var content = cljs.core.first(arglist__14074);
arglist__14074 = cljs.core.next(arglist__14074);
var name = cljs.core.first(arglist__14074);
var value = cljs.core.rest(arglist__14074);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__14079_14083 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14080_14084 = null;var count__14081_14085 = 0;var i__14082_14086 = 0;while(true){
if((i__14082_14086 < count__14081_14085))
{var n_14087 = cljs.core._nth.call(null,chunk__14080_14084,i__14082_14086);n_14087.removeAttribute(cljs.core.name.call(null,name));
{
var G__14088 = seq__14079_14083;
var G__14089 = chunk__14080_14084;
var G__14090 = count__14081_14085;
var G__14091 = (i__14082_14086 + 1);
seq__14079_14083 = G__14088;
chunk__14080_14084 = G__14089;
count__14081_14085 = G__14090;
i__14082_14086 = G__14091;
continue;
}
} else
{var temp__4092__auto___14092 = cljs.core.seq.call(null,seq__14079_14083);if(temp__4092__auto___14092)
{var seq__14079_14093__$1 = temp__4092__auto___14092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14079_14093__$1))
{var c__4004__auto___14094 = cljs.core.chunk_first.call(null,seq__14079_14093__$1);{
var G__14095 = cljs.core.chunk_rest.call(null,seq__14079_14093__$1);
var G__14096 = c__4004__auto___14094;
var G__14097 = cljs.core.count.call(null,c__4004__auto___14094);
var G__14098 = 0;
seq__14079_14083 = G__14095;
chunk__14080_14084 = G__14096;
count__14081_14085 = G__14097;
i__14082_14086 = G__14098;
continue;
}
} else
{var n_14099 = cljs.core.first.call(null,seq__14079_14093__$1);n_14099.removeAttribute(cljs.core.name.call(null,name));
{
var G__14100 = cljs.core.next.call(null,seq__14079_14093__$1);
var G__14101 = null;
var G__14102 = 0;
var G__14103 = 0;
seq__14079_14083 = G__14100;
chunk__14080_14084 = G__14101;
count__14081_14085 = G__14102;
i__14082_14086 = G__14103;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__14105 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__14105,0,null);var v = cljs.core.nth.call(null,vec__14105,1,null);if(cljs.core.truth_((function (){var and__3273__auto__ = k;if(cljs.core.truth_(and__3273__auto__))
{return v;
} else
{return and__3273__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__14106_SHARP_){var attr = attrs__$1.item(p1__14106_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__14113_14119 = cljs.core.seq.call(null,styles);var chunk__14114_14120 = null;var count__14115_14121 = 0;var i__14116_14122 = 0;while(true){
if((i__14116_14122 < count__14115_14121))
{var vec__14117_14123 = cljs.core._nth.call(null,chunk__14114_14120,i__14116_14122);var name_14124 = cljs.core.nth.call(null,vec__14117_14123,0,null);var value_14125 = cljs.core.nth.call(null,vec__14117_14123,1,null);domina.set_style_BANG_.call(null,content,name_14124,value_14125);
{
var G__14126 = seq__14113_14119;
var G__14127 = chunk__14114_14120;
var G__14128 = count__14115_14121;
var G__14129 = (i__14116_14122 + 1);
seq__14113_14119 = G__14126;
chunk__14114_14120 = G__14127;
count__14115_14121 = G__14128;
i__14116_14122 = G__14129;
continue;
}
} else
{var temp__4092__auto___14130 = cljs.core.seq.call(null,seq__14113_14119);if(temp__4092__auto___14130)
{var seq__14113_14131__$1 = temp__4092__auto___14130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14113_14131__$1))
{var c__4004__auto___14132 = cljs.core.chunk_first.call(null,seq__14113_14131__$1);{
var G__14133 = cljs.core.chunk_rest.call(null,seq__14113_14131__$1);
var G__14134 = c__4004__auto___14132;
var G__14135 = cljs.core.count.call(null,c__4004__auto___14132);
var G__14136 = 0;
seq__14113_14119 = G__14133;
chunk__14114_14120 = G__14134;
count__14115_14121 = G__14135;
i__14116_14122 = G__14136;
continue;
}
} else
{var vec__14118_14137 = cljs.core.first.call(null,seq__14113_14131__$1);var name_14138 = cljs.core.nth.call(null,vec__14118_14137,0,null);var value_14139 = cljs.core.nth.call(null,vec__14118_14137,1,null);domina.set_style_BANG_.call(null,content,name_14138,value_14139);
{
var G__14140 = cljs.core.next.call(null,seq__14113_14131__$1);
var G__14141 = null;
var G__14142 = 0;
var G__14143 = 0;
seq__14113_14119 = G__14140;
chunk__14114_14120 = G__14141;
count__14115_14121 = G__14142;
i__14116_14122 = G__14143;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__14150_14156 = cljs.core.seq.call(null,attrs);var chunk__14151_14157 = null;var count__14152_14158 = 0;var i__14153_14159 = 0;while(true){
if((i__14153_14159 < count__14152_14158))
{var vec__14154_14160 = cljs.core._nth.call(null,chunk__14151_14157,i__14153_14159);var name_14161 = cljs.core.nth.call(null,vec__14154_14160,0,null);var value_14162 = cljs.core.nth.call(null,vec__14154_14160,1,null);domina.set_attr_BANG_.call(null,content,name_14161,value_14162);
{
var G__14163 = seq__14150_14156;
var G__14164 = chunk__14151_14157;
var G__14165 = count__14152_14158;
var G__14166 = (i__14153_14159 + 1);
seq__14150_14156 = G__14163;
chunk__14151_14157 = G__14164;
count__14152_14158 = G__14165;
i__14153_14159 = G__14166;
continue;
}
} else
{var temp__4092__auto___14167 = cljs.core.seq.call(null,seq__14150_14156);if(temp__4092__auto___14167)
{var seq__14150_14168__$1 = temp__4092__auto___14167;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14150_14168__$1))
{var c__4004__auto___14169 = cljs.core.chunk_first.call(null,seq__14150_14168__$1);{
var G__14170 = cljs.core.chunk_rest.call(null,seq__14150_14168__$1);
var G__14171 = c__4004__auto___14169;
var G__14172 = cljs.core.count.call(null,c__4004__auto___14169);
var G__14173 = 0;
seq__14150_14156 = G__14170;
chunk__14151_14157 = G__14171;
count__14152_14158 = G__14172;
i__14153_14159 = G__14173;
continue;
}
} else
{var vec__14155_14174 = cljs.core.first.call(null,seq__14150_14168__$1);var name_14175 = cljs.core.nth.call(null,vec__14155_14174,0,null);var value_14176 = cljs.core.nth.call(null,vec__14155_14174,1,null);domina.set_attr_BANG_.call(null,content,name_14175,value_14176);
{
var G__14177 = cljs.core.next.call(null,seq__14150_14168__$1);
var G__14178 = null;
var G__14179 = 0;
var G__14180 = 0;
seq__14150_14156 = G__14177;
chunk__14151_14157 = G__14178;
count__14152_14158 = G__14179;
i__14153_14159 = G__14180;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__14185_14189 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14186_14190 = null;var count__14187_14191 = 0;var i__14188_14192 = 0;while(true){
if((i__14188_14192 < count__14187_14191))
{var node_14193 = cljs.core._nth.call(null,chunk__14186_14190,i__14188_14192);goog.dom.classes.add(node_14193,class$);
{
var G__14194 = seq__14185_14189;
var G__14195 = chunk__14186_14190;
var G__14196 = count__14187_14191;
var G__14197 = (i__14188_14192 + 1);
seq__14185_14189 = G__14194;
chunk__14186_14190 = G__14195;
count__14187_14191 = G__14196;
i__14188_14192 = G__14197;
continue;
}
} else
{var temp__4092__auto___14198 = cljs.core.seq.call(null,seq__14185_14189);if(temp__4092__auto___14198)
{var seq__14185_14199__$1 = temp__4092__auto___14198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14185_14199__$1))
{var c__4004__auto___14200 = cljs.core.chunk_first.call(null,seq__14185_14199__$1);{
var G__14201 = cljs.core.chunk_rest.call(null,seq__14185_14199__$1);
var G__14202 = c__4004__auto___14200;
var G__14203 = cljs.core.count.call(null,c__4004__auto___14200);
var G__14204 = 0;
seq__14185_14189 = G__14201;
chunk__14186_14190 = G__14202;
count__14187_14191 = G__14203;
i__14188_14192 = G__14204;
continue;
}
} else
{var node_14205 = cljs.core.first.call(null,seq__14185_14199__$1);goog.dom.classes.add(node_14205,class$);
{
var G__14206 = cljs.core.next.call(null,seq__14185_14199__$1);
var G__14207 = null;
var G__14208 = 0;
var G__14209 = 0;
seq__14185_14189 = G__14206;
chunk__14186_14190 = G__14207;
count__14187_14191 = G__14208;
i__14188_14192 = G__14209;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__14214_14218 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14215_14219 = null;var count__14216_14220 = 0;var i__14217_14221 = 0;while(true){
if((i__14217_14221 < count__14216_14220))
{var node_14222 = cljs.core._nth.call(null,chunk__14215_14219,i__14217_14221);goog.dom.classes.remove(node_14222,class$);
{
var G__14223 = seq__14214_14218;
var G__14224 = chunk__14215_14219;
var G__14225 = count__14216_14220;
var G__14226 = (i__14217_14221 + 1);
seq__14214_14218 = G__14223;
chunk__14215_14219 = G__14224;
count__14216_14220 = G__14225;
i__14217_14221 = G__14226;
continue;
}
} else
{var temp__4092__auto___14227 = cljs.core.seq.call(null,seq__14214_14218);if(temp__4092__auto___14227)
{var seq__14214_14228__$1 = temp__4092__auto___14227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14214_14228__$1))
{var c__4004__auto___14229 = cljs.core.chunk_first.call(null,seq__14214_14228__$1);{
var G__14230 = cljs.core.chunk_rest.call(null,seq__14214_14228__$1);
var G__14231 = c__4004__auto___14229;
var G__14232 = cljs.core.count.call(null,c__4004__auto___14229);
var G__14233 = 0;
seq__14214_14218 = G__14230;
chunk__14215_14219 = G__14231;
count__14216_14220 = G__14232;
i__14217_14221 = G__14233;
continue;
}
} else
{var node_14234 = cljs.core.first.call(null,seq__14214_14228__$1);goog.dom.classes.remove(node_14234,class$);
{
var G__14235 = cljs.core.next.call(null,seq__14214_14228__$1);
var G__14236 = null;
var G__14237 = 0;
var G__14238 = 0;
seq__14214_14218 = G__14235;
chunk__14215_14219 = G__14236;
count__14216_14220 = G__14237;
i__14217_14221 = G__14238;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__14243_14247 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14244_14248 = null;var count__14245_14249 = 0;var i__14246_14250 = 0;while(true){
if((i__14246_14250 < count__14245_14249))
{var node_14251 = cljs.core._nth.call(null,chunk__14244_14248,i__14246_14250);goog.dom.classes.toggle(node_14251,class$);
{
var G__14252 = seq__14243_14247;
var G__14253 = chunk__14244_14248;
var G__14254 = count__14245_14249;
var G__14255 = (i__14246_14250 + 1);
seq__14243_14247 = G__14252;
chunk__14244_14248 = G__14253;
count__14245_14249 = G__14254;
i__14246_14250 = G__14255;
continue;
}
} else
{var temp__4092__auto___14256 = cljs.core.seq.call(null,seq__14243_14247);if(temp__4092__auto___14256)
{var seq__14243_14257__$1 = temp__4092__auto___14256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14243_14257__$1))
{var c__4004__auto___14258 = cljs.core.chunk_first.call(null,seq__14243_14257__$1);{
var G__14259 = cljs.core.chunk_rest.call(null,seq__14243_14257__$1);
var G__14260 = c__4004__auto___14258;
var G__14261 = cljs.core.count.call(null,c__4004__auto___14258);
var G__14262 = 0;
seq__14243_14247 = G__14259;
chunk__14244_14248 = G__14260;
count__14245_14249 = G__14261;
i__14246_14250 = G__14262;
continue;
}
} else
{var node_14263 = cljs.core.first.call(null,seq__14243_14257__$1);goog.dom.classes.toggle(node_14263,class$);
{
var G__14264 = cljs.core.next.call(null,seq__14243_14257__$1);
var G__14265 = null;
var G__14266 = 0;
var G__14267 = 0;
seq__14243_14247 = G__14264;
chunk__14244_14248 = G__14265;
count__14245_14249 = G__14266;
i__14246_14250 = G__14267;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_14276__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__14272_14277 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14273_14278 = null;var count__14274_14279 = 0;var i__14275_14280 = 0;while(true){
if((i__14275_14280 < count__14274_14279))
{var node_14281 = cljs.core._nth.call(null,chunk__14273_14278,i__14275_14280);goog.dom.classes.set(node_14281,classes_14276__$1);
{
var G__14282 = seq__14272_14277;
var G__14283 = chunk__14273_14278;
var G__14284 = count__14274_14279;
var G__14285 = (i__14275_14280 + 1);
seq__14272_14277 = G__14282;
chunk__14273_14278 = G__14283;
count__14274_14279 = G__14284;
i__14275_14280 = G__14285;
continue;
}
} else
{var temp__4092__auto___14286 = cljs.core.seq.call(null,seq__14272_14277);if(temp__4092__auto___14286)
{var seq__14272_14287__$1 = temp__4092__auto___14286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14272_14287__$1))
{var c__4004__auto___14288 = cljs.core.chunk_first.call(null,seq__14272_14287__$1);{
var G__14289 = cljs.core.chunk_rest.call(null,seq__14272_14287__$1);
var G__14290 = c__4004__auto___14288;
var G__14291 = cljs.core.count.call(null,c__4004__auto___14288);
var G__14292 = 0;
seq__14272_14277 = G__14289;
chunk__14273_14278 = G__14290;
count__14274_14279 = G__14291;
i__14275_14280 = G__14292;
continue;
}
} else
{var node_14293 = cljs.core.first.call(null,seq__14272_14287__$1);goog.dom.classes.set(node_14293,classes_14276__$1);
{
var G__14294 = cljs.core.next.call(null,seq__14272_14287__$1);
var G__14295 = null;
var G__14296 = 0;
var G__14297 = 0;
seq__14272_14277 = G__14294;
chunk__14273_14278 = G__14295;
count__14274_14279 = G__14296;
i__14275_14280 = G__14297;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__14302_14306 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14303_14307 = null;var count__14304_14308 = 0;var i__14305_14309 = 0;while(true){
if((i__14305_14309 < count__14304_14308))
{var node_14310 = cljs.core._nth.call(null,chunk__14303_14307,i__14305_14309);goog.dom.setTextContent(node_14310,value);
{
var G__14311 = seq__14302_14306;
var G__14312 = chunk__14303_14307;
var G__14313 = count__14304_14308;
var G__14314 = (i__14305_14309 + 1);
seq__14302_14306 = G__14311;
chunk__14303_14307 = G__14312;
count__14304_14308 = G__14313;
i__14305_14309 = G__14314;
continue;
}
} else
{var temp__4092__auto___14315 = cljs.core.seq.call(null,seq__14302_14306);if(temp__4092__auto___14315)
{var seq__14302_14316__$1 = temp__4092__auto___14315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14302_14316__$1))
{var c__4004__auto___14317 = cljs.core.chunk_first.call(null,seq__14302_14316__$1);{
var G__14318 = cljs.core.chunk_rest.call(null,seq__14302_14316__$1);
var G__14319 = c__4004__auto___14317;
var G__14320 = cljs.core.count.call(null,c__4004__auto___14317);
var G__14321 = 0;
seq__14302_14306 = G__14318;
chunk__14303_14307 = G__14319;
count__14304_14308 = G__14320;
i__14305_14309 = G__14321;
continue;
}
} else
{var node_14322 = cljs.core.first.call(null,seq__14302_14316__$1);goog.dom.setTextContent(node_14322,value);
{
var G__14323 = cljs.core.next.call(null,seq__14302_14316__$1);
var G__14324 = null;
var G__14325 = 0;
var G__14326 = 0;
seq__14302_14306 = G__14323;
chunk__14303_14307 = G__14324;
count__14304_14308 = G__14325;
i__14305_14309 = G__14326;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__14331_14335 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14332_14336 = null;var count__14333_14337 = 0;var i__14334_14338 = 0;while(true){
if((i__14334_14338 < count__14333_14337))
{var node_14339 = cljs.core._nth.call(null,chunk__14332_14336,i__14334_14338);goog.dom.forms.setValue(node_14339,value);
{
var G__14340 = seq__14331_14335;
var G__14341 = chunk__14332_14336;
var G__14342 = count__14333_14337;
var G__14343 = (i__14334_14338 + 1);
seq__14331_14335 = G__14340;
chunk__14332_14336 = G__14341;
count__14333_14337 = G__14342;
i__14334_14338 = G__14343;
continue;
}
} else
{var temp__4092__auto___14344 = cljs.core.seq.call(null,seq__14331_14335);if(temp__4092__auto___14344)
{var seq__14331_14345__$1 = temp__4092__auto___14344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14331_14345__$1))
{var c__4004__auto___14346 = cljs.core.chunk_first.call(null,seq__14331_14345__$1);{
var G__14347 = cljs.core.chunk_rest.call(null,seq__14331_14345__$1);
var G__14348 = c__4004__auto___14346;
var G__14349 = cljs.core.count.call(null,c__4004__auto___14346);
var G__14350 = 0;
seq__14331_14335 = G__14347;
chunk__14332_14336 = G__14348;
count__14333_14337 = G__14349;
i__14334_14338 = G__14350;
continue;
}
} else
{var node_14351 = cljs.core.first.call(null,seq__14331_14345__$1);goog.dom.forms.setValue(node_14351,value);
{
var G__14352 = cljs.core.next.call(null,seq__14331_14345__$1);
var G__14353 = null;
var G__14354 = 0;
var G__14355 = 0;
seq__14331_14335 = G__14352;
chunk__14332_14336 = G__14353;
count__14333_14337 = G__14354;
i__14334_14338 = G__14355;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3273__auto__ = allows_inner_html_QMARK_;if(and__3273__auto__)
{var and__3273__auto____$1 = (function (){var or__3285__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3273__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
})()))
{var value_14366 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__14362_14367 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14363_14368 = null;var count__14364_14369 = 0;var i__14365_14370 = 0;while(true){
if((i__14365_14370 < count__14364_14369))
{var node_14371 = cljs.core._nth.call(null,chunk__14363_14368,i__14365_14370);node_14371.innerHTML = value_14366;
{
var G__14372 = seq__14362_14367;
var G__14373 = chunk__14363_14368;
var G__14374 = count__14364_14369;
var G__14375 = (i__14365_14370 + 1);
seq__14362_14367 = G__14372;
chunk__14363_14368 = G__14373;
count__14364_14369 = G__14374;
i__14365_14370 = G__14375;
continue;
}
} else
{var temp__4092__auto___14376 = cljs.core.seq.call(null,seq__14362_14367);if(temp__4092__auto___14376)
{var seq__14362_14377__$1 = temp__4092__auto___14376;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14362_14377__$1))
{var c__4004__auto___14378 = cljs.core.chunk_first.call(null,seq__14362_14377__$1);{
var G__14379 = cljs.core.chunk_rest.call(null,seq__14362_14377__$1);
var G__14380 = c__4004__auto___14378;
var G__14381 = cljs.core.count.call(null,c__4004__auto___14378);
var G__14382 = 0;
seq__14362_14367 = G__14379;
chunk__14363_14368 = G__14380;
count__14364_14369 = G__14381;
i__14365_14370 = G__14382;
continue;
}
} else
{var node_14383 = cljs.core.first.call(null,seq__14362_14377__$1);node_14383.innerHTML = value_14366;
{
var G__14384 = cljs.core.next.call(null,seq__14362_14377__$1);
var G__14385 = null;
var G__14386 = 0;
var G__14387 = 0;
seq__14362_14367 = G__14384;
chunk__14363_14368 = G__14385;
count__14364_14369 = G__14386;
i__14365_14370 = G__14387;
continue;
}
}
} else
{}
}
break;
}
}catch (e14361){if((e14361 instanceof Error))
{var e_14388 = e14361;domina.replace_children_BANG_.call(null,content,value_14366);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14361;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3273__auto__ = bubble;if(cljs.core.truth_(and__3273__auto__))
{return (value == null);
} else
{return and__3273__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3285__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__14395_14399 = cljs.core.seq.call(null,children);var chunk__14396_14400 = null;var count__14397_14401 = 0;var i__14398_14402 = 0;while(true){
if((i__14398_14402 < count__14397_14401))
{var child_14403 = cljs.core._nth.call(null,chunk__14396_14400,i__14398_14402);frag.appendChild(child_14403);
{
var G__14404 = seq__14395_14399;
var G__14405 = chunk__14396_14400;
var G__14406 = count__14397_14401;
var G__14407 = (i__14398_14402 + 1);
seq__14395_14399 = G__14404;
chunk__14396_14400 = G__14405;
count__14397_14401 = G__14406;
i__14398_14402 = G__14407;
continue;
}
} else
{var temp__4092__auto___14408 = cljs.core.seq.call(null,seq__14395_14399);if(temp__4092__auto___14408)
{var seq__14395_14409__$1 = temp__4092__auto___14408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14395_14409__$1))
{var c__4004__auto___14410 = cljs.core.chunk_first.call(null,seq__14395_14409__$1);{
var G__14411 = cljs.core.chunk_rest.call(null,seq__14395_14409__$1);
var G__14412 = c__4004__auto___14410;
var G__14413 = cljs.core.count.call(null,c__4004__auto___14410);
var G__14414 = 0;
seq__14395_14399 = G__14411;
chunk__14396_14400 = G__14412;
count__14397_14401 = G__14413;
i__14398_14402 = G__14414;
continue;
}
} else
{var child_14415 = cljs.core.first.call(null,seq__14395_14409__$1);frag.appendChild(child_14415);
{
var G__14416 = cljs.core.next.call(null,seq__14395_14409__$1);
var G__14417 = null;
var G__14418 = 0;
var G__14419 = 0;
seq__14395_14399 = G__14416;
chunk__14396_14400 = G__14417;
count__14397_14401 = G__14418;
i__14398_14402 = G__14419;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__14389_SHARP_,p2__14390_SHARP_){return f.call(null,p1__14389_SHARP_,p2__14390_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3273__auto__ = obj;if(cljs.core.truth_(and__3273__auto__))
{var and__3273__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3273__auto____$1)
{return obj.length;
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__14421 = list_thing;if(G__14421)
{var bit__3906__auto__ = (G__14421.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__14421.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14421.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14421);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14421);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__14422 = content;if(G__14422)
{var bit__3906__auto__ = (G__14422.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__14422.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14422.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14422);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14422);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__14423 = content;if(G__14423)
{var bit__3906__auto__ = (G__14423.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__14423.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14423.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14423);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14423);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
