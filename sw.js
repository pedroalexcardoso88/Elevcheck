{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE_NAME = \'91elevcheck-v1\'92;\
const ASSETS = [\
\'91./index.html\'92,\
\'91./manifest.json\'92,\
\'91https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap\'92\
];\
\
self.addEventListener(\'91install\'92, e => \{\
e.waitUntil(\
caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))\
);\
self.skipWaiting();\
\});\
\
self.addEventListener(\'91activate\'92, e => \{\
e.waitUntil(\
caches.keys().then(keys =>\
Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))\
)\
);\
self.clients.claim();\
\});\
\
self.addEventListener(\'91fetch\'92, e => \{\
e.respondWith(\
caches.match(e.request).then(cached => cached || fetch(e.request))\
);\
\});}