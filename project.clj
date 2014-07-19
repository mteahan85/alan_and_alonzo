(defproject alan-and-alonzo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2069"]
                 [ring "1.2.0"]
                 [domina "1.0.2"]
                 [jayq "2.4.0"]
                 [org.clojure/core.async "0.1.242.0-44b1e3-alpha"]]
  :plugins [[lein-cljsbuild "1.0.0"]
            [lein-ring "0.8.7"]]
  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj"]
  :main alan-and-alonzo.server
  :ring {:handler alan-and-alonzo.server/app}
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/alan_and_alonzo.js"
                           :optimizations :whitespace
                           :pretty-print true}}]})