;;;; Author : Aleksander Eskilson
;;;; Client side -
(ns alan-and-alonzo.client
  (:require [domina :as dom]
            [domina.events :as events]
            [cljs.core.async :refer (<! >! chan)])
  (:use-macros
    [cljs.core.async.macros :only [go go-loop]]))

(def canvas (dom/by-id "foreground"))
(def ctx (.getContext canvas "2d"))

(def rect
  {:x 25
   :y 25
   :color "ee0000"
   :width 50
   :height 50})

(defn draw [obj]
  (dom/set-attrs! canvas {:width 640
                          :height 480})
  (set! (.-fillStyle ctx) (:color obj))
  (.fillRect ctx (:x obj) (:y obj) (:width obj) (:height obj)))

(defn image
  [src]
  (let [img (new js/Image)]
    (set! (.-src img) src)
    img))

(defn draw-image [img x y]
  (.drawImage ctx img x y))

(def turing (image "/images/turing/FrontTuring.png"))
(def background (image "/images/Background.png"))

(defn ^:export init
  "Logic's main function - gets executed as JavaScript on upon loading
  of html page"
  []
  (draw-image background 0 0))