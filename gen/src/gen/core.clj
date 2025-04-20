(ns gen.core
    (:require
      [clojure.java.io :as io]
      [hiccup2.core :as h]))

(defn spit-template [& args]
  (spit
    "../dist/index.html"
   (format
    (-> "index.html" io/resource slurp)
    (str
     (h/html
       args)))))

(def r 41)
(spit-template
 (for [i (range 1 13)]
   (let [t (* 2 Math/PI i 1/12)
         x (+ 48.25 (* r (Math/sin t)))
         y (+ 52 (* -1 r (Math/cos t)))]
     [:text {:x x :y y :fill "black" :font-size "5"} i])))

