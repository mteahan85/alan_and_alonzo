;;;; Author : Aleksander Eskilson
;;;; Ring server function, allows project to be started
;;;; using 'lein ring server'
(ns alan-and-alonzo.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :refer (wrap-resource)]
            [ring.middleware.content-type :refer (wrap-content-type)]
            [ring.util.response :as response])
  (:gen-class))

(defn handler [uri]
  (if (not= "/alan_and_alonzo.html" uri)
    (response/redirect "/alan_and_alonzo.html")))

(def app
  (-> handler
      (wrap-content-type)
      (wrap-resource "public")))

;; Starts a Jetty server directing traffic to base html page
(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))