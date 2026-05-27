// TravelBharat Regional Mapping Database
const travelData = [
  {
    "id": 1,
    "name": "Andhra Pradesh",
    "capital": "Amaravati",
    "zone": "South",
    "category": "Religious",
    "description": "Known as the 'Rice Bowl of India', it is home to ancient Dravidian temples and scenic valleys.",
    "bestTime": "October to March",
    "image": "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800",
    "places": [
      {
        "name": "Tirupati Temple",
        "history": "One of the world's most visited religious sites, dating to 300 AD.",
        "fee": "Free / ₹300 Special",
        "timings": "24 Hours",
        "nearby": "Silathoranam, Akasaganga"
      }
    ],
    "districts": [
      {
        "districtName": "Tirupati",
        "info": "The spiritual capital of Andhra Pradesh, home to the world-famous Tirumala Venkateswara Temple.",
        "places": [
          {
            "name": "Tirumala Temple",
            "image": "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free / ₹300 Special",
            "area": "Tirumala Hills",
            "bestTime": "Sept - March",
            "history": "One of the richest and most visited religious sites in the world, dedicated to Lord Venkateswara."
          }
        ]
      },
      {
        "districtName": "Visakhapatnam",
        "info": "The 'City of Destiny', known for its beautiful beaches, landscape, and the Eastern Naval Command.",
        "places": [
          {
            "name": "Araku Valley",
            "image": "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=800",
            "timings": "Sunrise - Sunset",
            "cost": "Free",
            "area": "Eastern Ghats",
            "bestTime": "Sept - March",
            "history": "A hill station famous for its coffee plantations, tribal culture, and the Borra Caves."
          }
        ]
      },
      {
        "districtName": "NTR District (Vijayawada)",
        "info": "A major commercial hub situated on the banks of the Krishna River, famous for the Kanaka Durga Temple.",
        "places": [
          {
            "name": "Kanaka Durga Temple",
            "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800",
            "timings": "4 AM - 9 PM",
            "cost": "Free / ₹100 VIP",
            "area": "Indrakeeladri Hill",
            "bestTime": "Oct (Dasara)",
            "history": "An ancient temple mentioned in the Vedas, said to be installed by Arjuna."
          }
        ]
      },
      {
        "districtName": "Kurnool",
        "info": "Known as the Gateway to the South, famous for its historical forts and religious shrines like Srisailam.",
        "places": [
          {
            "name": "Srisailam Mallikarjuna Temple",
            "image": "https://images.unsplash.com/photo-1610450949065-1f2842426993?q=80&w=800",
            "timings": "4:30 AM - 10 PM",
            "cost": "Free",
            "area": "Nallamala Hills",
            "bestTime": "Nov - Feb",
            "history": "One of the 12 Jyotirlingas of Shiva and one of the 18 Shakti Peethas of Goddess Parvati."
          }
        ]
      },
      {
        "districtName": "Alluri Sitharama Raju",
        "info": "A forest-rich district named after the legendary freedom fighter, home to Lambasingi.",
        "places": [
          {
            "name": "Lambasingi (Andhra Kashmir)",
            "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Chintapalli",
            "bestTime": "Nov - Jan",
            "history": "The only place in South India that experiences snowfall-like temperatures and thick fog."
          }
        ]
      },
      {
        "districtName": "Sri Potti Sriramulu Nellore",
        "info": "Famous for its agricultural exports and the SHAR space station at Sriharikota.",
        "places": [
          {
            "name": "Pulicat Lake & Bird Sanctuary",
            "image": "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800",
            "timings": "6 AM - 6 PM",
            "cost": "Free",
            "area": "Sullurpeta",
            "bestTime": "Dec - Feb",
            "history": "The second largest brackish water lake in India, famous for thousands of flamingos."
          }
        ]
      },
      {
        "districtName": "Konaseema",
        "info": "The 'Kerala of Andhra Pradesh', a lush delta region between branches of the Godavari River.",
        "places": [
          {
            "name": "Antarvedi",
            "image": "https://images.unsplash.com/photo-1590393282743-037309250000?q=80&w=800",
            "timings": "6 AM - 8 PM",
            "cost": "Free",
            "area": "Godavari Confluence",
            "bestTime": "Nov - Feb",
            "history": "The holy place where the Vashistha Godavari branch meets the Bay of Bengal."
          }
        ]
      },
      {
        "districtName": "Anantapur",
        "info": "Home to the famous Lepakshi Temple and the spiritual center of Puttaparthi.",
        "places": [
          {
            "name": "Lepakshi Temple",
            "image": "https://images.unsplash.com/photo-1616421588720-305452295656?q=80&w=800",
            "timings": "6 AM - 6 PM",
            "cost": "Free",
            "area": "Lepakshi Village",
            "bestTime": "Oct - March",
            "history": "Famous for the Hanging Pillar and the massive monolithic Nandi bull carved from stone."
          }
        ]
      },
      {
        "districtName": "Chittoor",
        "info": "Known for the Horsley Hills and many ancient shrines nestled in the Chittoor ghats.",
        "places": [
          {
            "name": "Horsley Hills",
            "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
            "timings": "Sunrise - Sunset",
            "cost": "₹20 Entry",
            "area": "Madanapalle",
            "bestTime": "All Year",
            "history": "A scenic hill station at 1,290 meters, named after W.D. Horsley, a British collector."
          }
        ]
      },
      {
        "districtName": "Guntur",
        "info": "Famous for its red chilies and the ancient Buddhist site of Amaravati.",
        "places": [
          {
            "name": "Undavalli Caves",
            "image": "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800",
            "timings": "9 AM - 6 PM",
            "cost": "₹15",
            "area": "Tadepalle",
            "bestTime": "Oct - Feb",
            "history": "Rock-cut caves from the 4th-5th century featuring a huge reclining statue of Lord Vishnu."
          }
        ]
      }
    ],
    "isFavorite": false
  },
  {
    "id": 2,
    "name": "Arunachal Pradesh",
    "capital": "Itanagar",
    "zone": "NE",
    "category": "Adventure",
    "description": "The Land of the Rising Sun, offering pristine Himalayan landscapes and Buddhist culture.",
    "bestTime": "March to May",
    "image": "https://tripoventure.com/wp-content/uploads/2021/06/xv92369ajqb0jt4dmcpwye1b17bt_1539063182_taktsang.jpg",
    "places": [
      {
        "name": "Tawang Monastery",
        "history": "The largest monastery in India, founded in the 17th century.",
        "fee": "Free",
        "timings": "7:00 AM - 7:00 PM",
        "nearby": "Sela Pass, Madhuri Lake"
      }
    ],
    "districts": [
      {
        "districtName": "Tawang",
        "info": "The crown jewel of Arunachal, famous for high-altitude passes and the largest monastery in India.",
        "places": [
          {
            "name": "Tawang Monastery",
            "image": "https://tripoventure.com/wp-content/uploads/2021/06/xv92369ajqb0jt4dmcpwye1b17bt_1539063182_taktsang.jpg",
            "timings": "7 AM - 7 PM",
            "cost": "Free",
            "area": "Tawang Town",
            "bestTime": "March - June",
            "history": "Founded in the 17th century, it is the second largest Buddhist monastery in the world."
          }
        ]
      },
      {
        "districtName": "West Kameng",
        "info": "Home to the beautiful town of Bomdila and the apple orchards of Dirang Valley.",
        "places": [
          {
            "name": "Sela Pass",
            "image": "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=800",
            "timings": "Daylight Hours",
            "cost": "ILP Required",
            "area": "High Altitude Border",
            "bestTime": "April - October",
            "history": "A strategic mountain pass at 13,700 ft, featuring the stunning Paradise Lake."
          }
        ]
      },
      {
        "districtName": "Lower Subansiri",
        "info": "Home to the Ziro Valley, a UNESCO World Heritage site candidate famous for the Apatani tribe.",
        "places": [
          {
            "name": "Ziro Valley",
            "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Hapoli",
            "bestTime": "Sept (Music Fest)",
            "history": "Famous for its unique paddy-cum-fish cultivation and the Ziro Music Festival."
          }
        ]
      },
      {
        "districtName": "Papum Pare",
        "info": "The district housing the state capital, Itanagar, and the historical Ita Fort.",
        "places": [
          {
            "name": "Ita Fort",
            "image": "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800",
            "timings": "9 AM - 5 PM",
            "cost": "₹10",
            "area": "Itanagar Center",
            "bestTime": "Oct - April",
            "history": "Built in the 14th century with irregular bricks, it gives the capital its name."
          }
        ]
      },
      {
        "districtName": "West Siang",
        "info": "Cultural hub of the Galo tribe, centered around the beautiful town of Aalo.",
        "places": [
          {
            "name": "Aalo (Along)",
            "image": "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Siang River Bank",
            "bestTime": "Nov - March",
            "history": "Located at the confluence of Sipu and S Yom rivers, famous for orange orchards."
          }
        ]
      },
      {
        "districtName": "Lohit",
        "info": "Famous for the holy Parshuram Kund and the easternmost sunrise in India.",
        "places": [
          {
            "name": "Parshuram Kund",
            "image": "https://images.unsplash.com/photo-1610450949065-1f2842426993?q=80&w=800",
            "timings": "5 AM - 8 PM",
            "cost": "Free",
            "area": "Tezu",
            "bestTime": "January (Makar Sankranti)",
            "history": "A holy lake where thousands of devotees take a dip to wash away their sins."
          }
        ]
      },
      {
        "districtName": "Changlang",
        "info": "Home to the world-famous Namdapha National Park, a biodiversity hotspot.",
        "places": [
          {
            "name": "Namdapha National Park",
            "image": "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800",
            "timings": "8 AM - 4 PM",
            "cost": "₹50",
            "area": "Miao",
            "bestTime": "Nov - March",
            "history": "One of the few parks in the world where four feline species (Tiger, Leopard, Snow Leopard, Clouded Leopard) coexist."
          }
        ]
      },
      {
        "districtName": "Upper Siang",
        "info": "A rugged terrain famous for river rafting and the Tsangpo-Brahmaputra canyon.",
        "places": [
          {
            "name": "Yingkiong",
            "image": "https://images.unsplash.com/photo-1590393282743-037309250000?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Siang Valley",
            "bestTime": "Oct - Feb",
            "history": "Gateway to the high Himalayas and a hub for mountaineering and rafting expeditions."
          }
        ]
      },
      {
        "districtName": "East Kameng",
        "info": "Known for its rich wildlife and the Pakhui Tiger Reserve.",
        "places": [
          {
            "name": "Pakhui (Pakke) Tiger Reserve",
            "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
            "timings": "Sunrise - Sunset",
            "cost": "₹40",
            "area": "Seijosa",
            "bestTime": "Nov - April",
            "history": "Winner of India Biodiversity Awards, famous for its conservation of Hornbills."
          }
        ]
      },
      {
        "districtName": "Upper Subansiri",
        "info": "A remote district famous for the Daporijo landscape and the Tagin tribe.",
        "places": [
          {
            "name": "Daporijo",
            "image": "https://images.unsplash.com/photo-1616421588720-305452295656?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Subansiri River",
            "bestTime": "Dec - Feb",
            "history": "A scenic town known for its unique hanging bridges made of cane and bamboo."
          }
        ]
      }
    ],
    "isFavorite": false
  },
  {
    "id": 4,
    "name": "Bihar",
    "capital": "Patna",
    "zone": "East",
    "category": "Heritage",
    "description": "The center of ancient learning and the birthplace of Buddhism and Jainism.",
    "bestTime": "October to March",
    "image": "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=600",
    "places": [
      {
        "name": "Nalanda University",
        "history": "An ancient center of higher learning established in the 5th century CE.",
        "fee": "₹15",
        "timings": "9:00 AM - 5:00 PM",
        "nearby": "Pawapuri"
      }
    ],
    "districts": [
      {
        "districtName": "Gaya",
        "info": "One of the most important spiritual destinations in the world for Buddhists and Hindus.",
        "places": [
          {
            "name": "Mahabodhi Temple",
            "image": "https://images.unsplash.com/photo-1628134304677-5e933aa822d0?q=80&w=800",
            "timings": "5 AM - 9 PM",
            "cost": "Free",
            "area": "Bodh Gaya",
            "bestTime": "Nov - March",
            "history": "A UNESCO World Heritage site where Gautama Buddha is said to have attained Enlightenment."
          }
        ]
      },
      {
        "districtName": "Nalanda",
        "info": "The seat of ancient learning, home to the ruins of the world's first residential university.",
        "places": [
          {
            "name": "Nalanda University Ruins",
            "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
            "timings": "9 AM - 5 PM",
            "cost": "₹15",
            "area": "Rajgir-Bihar Sharif",
            "bestTime": "Oct - March",
            "history": "Established in the 5th century AD, it once hosted 10,000 students and 2,000 teachers from across Asia."
          }
        ]
      },
      {
        "districtName": "Patna",
        "info": "The capital city, ancient Pataliputra, standing on the banks of the holy Ganges.",
        "places": [
          {
            "name": "Golghar",
            "image": "https://images.unsplash.com/photo-1610450949065-1f2842426993?q=80&w=800",
            "timings": "10 AM - 5 PM",
            "cost": "₹5",
            "area": "Gandhi Maidan",
            "bestTime": "Nov - Feb",
            "history": "A massive granary built by Captain John Garstin in 1786 following the terrible famine of 1770."
          }
        ]
      },
      {
        "districtName": "Vaishali",
        "info": "Considered the world's first republic, and the birthplace of Lord Mahavira.",
        "places": [
          {
            "name": "Ashoka Pillar",
            "image": "https://images.unsplash.com/photo-1624022730302-6027376a9117?q=80&w=800",
            "timings": "6 AM - 6 PM",
            "cost": "₹20",
            "area": "Kolhua",
            "bestTime": "Oct - March",
            "history": "A perfectly preserved monolithic polished sandstone pillar topped with a single lion capital."
          }
        ]
      },
      {
        "districtName": "West Champaran",
        "info": "The land where Mahatma Gandhi started the Satyagraha movement, home to Valmiki Tiger Reserve.",
        "places": [
          {
            "name": "Valmiki National Park",
            "image": "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800",
            "timings": "6 AM - 5 PM",
            "cost": "₹50",
            "area": "Bettiah",
            "bestTime": "Nov - March",
            "history": "The only tiger reserve in Bihar, located in the Gangetic plains bio-geographic zone."
          }
        ]
      },
      {
        "districtName": "Rohtas",
        "info": "Famous for the massive Rohtasgarh Fort and the beautiful Sasaram tombs.",
        "places": [
          {
            "name": "Tomb of Sher Shah Suri",
            "image": "https://images.unsplash.com/photo-1590393282743-037309250000?q=80&w=800",
            "timings": "6 AM - 6 PM",
            "cost": "₹25",
            "area": "Sasaram",
            "bestTime": "Oct - March",
            "history": "A masterpiece of Indo-Islamic architecture, standing in the middle of an artificial lake."
          }
        ]
      },
      {
        "districtName": "Bhagalpur",
        "info": "Known as the 'Silk City' of India, famous for its Tussar silk and the Vikramshila ruins.",
        "places": [
          {
            "name": "Vikramshila University",
            "image": "https://images.unsplash.com/photo-1616421588720-305452295656?q=80&w=800",
            "timings": "9 AM - 5 PM",
            "cost": "₹20",
            "area": "Antichak",
            "bestTime": "Oct - Feb",
            "history": "One of the two most important centers of learning in India during the Pala Empire."
          }
        ]
      },
      {
        "districtName": "Madhubani",
        "info": "The heart of Mithila culture, world-famous for its unique 'Madhubani' folk paintings.",
        "places": [
          {
            "name": "Saurath Sabha",
            "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Madhubani Town",
            "bestTime": "June - July",
            "history": "An ancient site where Maithil Brahmins gather annually to negotiate marriages."
          }
        ]
      },
      {
        "districtName": "Munger",
        "info": "Historically known as 'Midnapore', famous for its yoga university and ancient fort.",
        "places": [
          {
            "name": "Munger Fort",
            "image": "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=800",
            "timings": "Sunrise - Sunset",
            "cost": "Free",
            "area": "Munger Center",
            "bestTime": "Oct - Feb",
            "history": "Built on a hill overlooking the Ganges, it was the capital of Mir Qasim, Nawab of Bengal."
          }
        ]
      },
      {
        "districtName": "Saran",
        "info": "The land of Chapra, famous for the Sonepur Mela, one of Asia's largest cattle fairs.",
        "places": [
          {
            "name": "Hariharnath Temple",
            "image": "https://images.unsplash.com/photo-1610450949065-1f2842426993?q=80&w=800",
            "timings": "5 AM - 9 PM",
            "cost": "Free",
            "area": "Sonepur",
            "bestTime": "Nov (Kartik Purnima)",
            "history": "Said to have been built by Rama on his way to Janakpur to win Sita's hand."
          }
        ]
      }
    ],
    "isFavorite": false
  },
  {
    "id": 6,
    "name": "Goa",
    "capital": "Panaji",
    "zone": "West",
    "category": "Nature",
    "description": "A mix of Portuguese heritage and tropical beaches on the Arabian Sea.",
    "bestTime": "November to February",
    "image": "https://www.holidest.com/images/indiatours/goa/romantic-Goa-4.JPG",
    "places": [
      {
        "name": "Basilica of Bom Jesus",
        "history": "Holds the mortal remains of St. Francis Xavier, built in 1605.",
        "fee": "Free",
        "timings": "9:00 AM - 6:30 PM",
        "nearby": "Old Goa"
      }
    ],
    "districts": [
      {
        "districtName": "North Goa - Tiswadi",
        "info": "The historical heart of Goa, housing the capital city Panaji and the UNESCO churches of Old Goa.",
        "places": [
          {
            "name": "Basilica of Bom Jesus",
            "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800",
            "timings": "9:00 AM - 6:30 PM",
            "cost": "Free",
            "area": "Old Goa",
            "bestTime": "December",
            "history": "A world heritage site containing the remains of St. Francis Xavier, a masterpiece of Baroque architecture."
          }
        ]
      },
      {
        "districtName": "North Goa - Bardez",
        "info": "The tourism hub of Goa, famous for iconic beaches, vibrant nightlife, and Portuguese forts.",
        "places": [
          {
            "name": "Aguada Fort",
            "image": "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=800",
            "timings": "9:30 AM - 6:00 PM",
            "cost": "Free",
            "area": "Sinquerim",
            "bestTime": "Nov - Feb",
            "history": "A 17th-century Portuguese lighthouse and fort built to guard against Dutch and Maratha invasions."
          }
        ]
      },
      {
        "districtName": "North Goa - Pernem",
        "info": "Known for its laid-back hippie culture, scenic lakes, and the famous Arambol beach.",
        "places": [
          {
            "name": "Arambol Sweet Water Lake",
            "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Arambol",
            "bestTime": "Nov - March",
            "history": "A unique lagoon located right next to the sea, fed by boiling hot springs and surrounded by jungle."
          }
        ]
      },
      {
        "districtName": "North Goa - Ponda",
        "info": "The cultural capital of Goa, famous for its magnificent Hindu temples and spice plantations.",
        "places": [
          {
            "name": "Mangueshi Temple",
            "image": "https://images.unsplash.com/photo-1590393282743-037309250000?q=80&w=800",
            "timings": "6 AM - 10 PM",
            "cost": "Free",
            "area": "Mangueshi Village",
            "bestTime": "All Year",
            "history": "One of the largest and most visited temples in Goa, dedicated to Lord Shiva."
          }
        ]
      },
      {
        "districtName": "North Goa - Bicholim",
        "info": "An industrial and mining hub also known for the stunning Mayem Lake and ancient caves.",
        "places": [
          {
            "name": "Arvalem Caves",
            "image": "https://images.unsplash.com/photo-1616421588720-305452295656?q=80&w=800",
            "timings": "9 AM - 5 PM",
            "cost": "Free",
            "area": "Sanquelim",
            "bestTime": "Oct - March",
            "history": "Rock-cut caves dating back to the 6th century, believed to be used by the Pandavas."
          }
        ]
      },
      {
        "districtName": "South Goa - Salcete",
        "info": "A region of white sand beaches, luxury resorts, and grand Indo-Portuguese mansions.",
        "places": [
          {
            "name": "Colva Beach",
            "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Margao South",
            "bestTime": "Nov - Feb",
            "history": "One of the oldest and largest beaches in Goa, famous for its powder-white sand."
          }
        ]
      },
      {
        "districtName": "South Goa - Canacona",
        "info": "Home to the most beautiful and serene beaches in Goa, like Palolem and Agonda.",
        "places": [
          {
            "name": "Palolem Beach",
            "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Canacona Town",
            "bestTime": "Nov - March",
            "history": "A crescent-shaped bay known for its calm waters and unique 'Silent Disco' parties."
          }
        ]
      },
      {
        "districtName": "South Goa - Dharbandora",
        "info": "A hinterland district famous for the majestic Dudhsagar Waterfalls.",
        "places": [
          {
            "name": "Dudhsagar Waterfalls",
            "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
            "timings": "9 AM - 4 PM",
            "cost": "₹400 (Jeep Safari)",
            "area": "Mollem National Park",
            "bestTime": "Oct - Jan",
            "history": "A four-tiered waterfall on the Mandovi River, looking like a 'Sea of Milk' during peak flow."
          }
        ]
      },
      {
        "districtName": "South Goa - Mormugao",
        "info": "Major port town of Goa, also home to some hidden gems like Bogmalo beach.",
        "places": [
          {
            "name": "St. Andrew's Church",
            "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800",
            "timings": "9 AM - 12 PM",
            "cost": "Free",
            "area": "Vasco da Gama",
            "bestTime": "All Year",
            "history": "Built in 1570, it is one of the most elegant examples of Jesuit architecture in Goa."
          }
        ]
      },
      {
        "districtName": "South Goa - Quepem",
        "info": "A scenic district known for the Salaulim Dam and the Chandreshwar Bhutnath Temple.",
        "places": [
          {
            "name": "Salaulim Dam",
            "image": "https://images.unsplash.com/photo-1590766948562-47e898b02471?q=80&w=800",
            "timings": "9 AM - 6 PM",
            "cost": "₹20",
            "area": "Sanguem-Quepem",
            "bestTime": "July - Oct",
            "history": "Famous for its unique 'Duckbill Spillway' which creates a breathtaking artificial vortex."
          }
        ]
      }
    ],
    "isFavorite": false
  },
  {
    "id": 11,
    "name": "Karnataka",
    "capital": "Bengaluru",
    "zone": "South",
    "category": "Heritage",
    "description": "A kingdom of massive stone monuments, lush hills, and tech-driven cities.",
    "bestTime": "October to March",
    "image": "https://cabbazar.com/assets/img/trips/hampi.jpg",
    "places": [
      {
        "name": "Hampi Ruins",
        "history": "The spectacular 14th-century capital of the Vijayanagara Empire.",
        "fee": "₹40",
        "timings": "6:00 AM - 6:00 PM",
        "nearby": "Virupaksha Temple"
      }
    ],
    "districts": [
      {
        "districtName": "Bengaluru Urban",
        "info": "The 'Silicon Valley of India', known for its pleasant climate, vibrant nightlife, and high-tech industry.",
        "places": [
          {
            "name": "Lalbagh Botanical Garden",
            "image": "https://images.unsplash.com/photo-1590766948562-47e898b02471?q=80&w=800",
            "timings": "6 AM - 7 PM",
            "cost": "₹30",
            "area": "South Bengaluru",
            "bestTime": "Nov - Feb",
            "history": "Commissioned by Hyder Ali in 1760, it holds India's largest collection of tropical plants."
          }
        ]
      },
      {
        "districtName": "Mysuru",
        "info": "The cultural capital of Karnataka, famous for the grand Dasara festival and sandalwood products.",
        "places": [
          {
            "name": "Mysore Palace",
            "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800",
            "timings": "10 AM - 5:30 PM",
            "cost": "₹100",
            "area": "Sayyaji Rao Road",
            "bestTime": "Oct - Mar",
            "history": "The official residence of the Wadiyar dynasty, built in Indo-Saracenic style."
          }
        ]
      },
      {
        "districtName": "Vijayanagara",
        "info": "Home to the UNESCO World Heritage site of Hampi, the former capital of the Vijayanagara Empire.",
        "places": [
          {
            "name": "Virupaksha Temple",
            "image": "https://images.unsplash.com/photo-1610450949065-1f2842426993?q=80&w=800",
            "timings": "6 AM - 6 PM",
            "cost": "Free",
            "area": "Hampi Village",
            "bestTime": "Nov - Feb",
            "history": "A 7th-century temple dedicated to Lord Shiva that survived the destruction of the city."
          }
        ]
      },
      {
        "districtName": "Kodagu (Coorg)",
        "info": "The 'Scotland of India', famous for coffee plantations, misty hills, and brave Kodava culture.",
        "places": [
          {
            "name": "Abbey Falls",
            "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
            "timings": "9 AM - 5 PM",
            "cost": "₹15",
            "area": "Madikeri",
            "bestTime": "July - Oct",
            "history": "A stunning waterfall where the Kaveri river cascades over rocks amidst spice gardens."
          }
        ]
      },
      {
        "districtName": "Uttara Kannada",
        "info": "A coastal paradise known for the world-famous Om Beach in Gokarna and the Jog Falls.",
        "places": [
          {
            "name": "Gokarna Om Beach",
            "image": "https://images.unsplash.com/photo-1590393282743-037309250000?q=80&w=800",
            "timings": "24 Hours",
            "cost": "Free",
            "area": "Gokarna Town",
            "bestTime": "Oct - Mar",
            "history": "Naturally shaped like the spiritual 'Om' symbol, attracting pilgrims and travelers alike."
          }
        ]
      },
      {
        "districtName": "Udupi",
        "info": "Famous for its Krishna Temple, world-class cuisine, and the unique St. Mary's Island.",
        "places": [
          {
            "name": "St. Mary's Island",
            "image": "https://images.unsplash.com/photo-1623126749915-f538ed6f7c8f?q=80&w=800",
            "timings": "9 AM - 5 PM",
            "cost": "₹300 (Boat)",
            "area": "Malpe Coast",
            "bestTime": "Oct - Jan",
            "history": "Basaltic rock formations believed to be formed by subaqueous volcanic activity millions of years ago."
          }
        ]
      },
      {
        "districtName": "Bagalkot",
        "info": "Known for the Chalukyan architecture of Badami, Pattadakal, and Aihole.",
        "places": [
          {
            "name": "Badami Cave Temples",
            "image": "https://images.unsplash.com/photo-1616421588720-305452295656?q=80&w=800",
            "timings": "9 AM - 6 PM",
            "cost": "₹25",
            "area": "Badami Town",
            "bestTime": "Oct - Mar",
            "history": "Four cave temples carved out of sandstone hills in the 6th century."
          }
        ]
      },
      {
        "districtName": "Chikkamagaluru",
        "info": "The birthplace of coffee in India, home to the highest peak in Karnataka, Mullayanagiri.",
        "places": [
          {
            "name": "Mullayanagiri Peak",
            "image": "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=800",
            "timings": "6 AM - 6 PM",
            "cost": "Free",
            "area": "Baba Budangiri Range",
            "bestTime": "Sept - March",
            "history": "Standing at 1,930 meters, it offers a breathtaking view of the Western Ghats."
          }
        ]
      },
      {
        "districtName": "Dharwad",
        "info": "A gateway between the hills and the plains, famous for its music, literature, and 'Peda' sweet.",
        "places": [
          {
            "name": "Chandramouleshwara Temple",
            "image": "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800",
            "timings": "6 AM - 8 PM",
            "cost": "Free",
            "area": "Unkal, Hubli",
            "bestTime": "Oct - Feb",
            "history": "A 900-year-old Chalukyan temple carved out of black soapstone."
          }
        ]
      },
      {
        "districtName": "Belagavi",
        "info": "Known as the 'Sugar Bowl' of Karnataka, it features a unique blend of Kannada and Marathi cultures.",
        "places": [
          {
            "name": "Gokak Falls",
            "image": "https://images.unsplash.com/photo-1624022730302-6027376a9117?q=80&w=800",
            "timings": "8 AM - 6 PM",
            "cost": "Free",
            "area": "Gokak",
            "bestTime": "July - Sept",
            "history": "Often called the 'Niagara of Karnataka' because of its horse-shoe shape."
          }
        ]
      }
    ],
    "isFavorite": true
  }
];
