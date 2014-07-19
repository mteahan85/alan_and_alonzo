(ns alan-and-alonzo.alan.cljs
  (:require [jayq.core :refer [$ append ajax inner css $deferred
                               when done resolve pipe on bind attr
                               offset] :as jq]
            [jayq.util :refer [log]])
  (:require-macros [cljs.core.async.macros :only [go alt!]]))




