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
   :col "ee0000"
   :w 50
   :h 50})

(defn move [obj axis dir]
  (assoc
      (dissoc obj axis)
      axis (if (= dir :pos)
             (+ (axis obj) 1)
             (- (axis obj) 1))))

(defn draw [obj]
  (let [{:keys [x y col w h]} obj]
    (dom/set-attrs! canvas {:width 400
                            :height 300})
    (set! (.-fillStyle ctx) col)
    (.fillRect ctx x y w h)))

(defn ^:export init
  "Logic's main function - gets executed as JavaScript on upon loading
  of html page"
  []
  (draw rect))