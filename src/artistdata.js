const router = require("./routes/album")

const artistList = [
    {
      "artist_id": 1,
      "artist_active_year_begin": 2006,
      "artist_active_year_end": "",
      "artist_associated_labels": "",
      "artist_bio": "<p>A Way Of Life, A Collective of Hip-Hop from NJ...................</p>",
      "artist_comments": 0,
      "artist_contact": "Brown Bum aka Choke",
      "artist_date_created": "11/26/2008 01:42:32 AM",
      "artist_donation_url": "",
      "artist_favorites": 9,
      "artist_flattr_name": "",
      "artist_handle": "AWOL",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/AWOL_-_2009113014453413.jpg",
      "artist_images": "[{'image_id': '1955', 'image_file': 'https://freemusicarchive.org/file/images/artists/AWOL_-_2009113014453413.jpg', 'image_title': 'artists Image', 'image_caption': 'azillion records', 'image_copyright': None, 'image_source': None}]",
      "artist_latitude": 40.0583238,
      "artist_location": "New Jersey",
      "artist_longitude": -74.4056612,
      "artist_members": "Sajje Morocco,Brownbum,ZawidaGod,Custodian of Records,Zooberelli the Don,F.A.H,MadSicka,Damien Omenicci..and a van load more...",
      "artist_name": "AWOL",
      "artist_paypal_name": "",
      "artist_related_projects": "The list of past projects is 2 long but every1 and every style from Tabby Bonet 2 M.O.P..Azillion Records Flagship trackmaster DJ BrownBum is a beat Wizard.....A-2-Z..illion....(right now working with JerseyBlock Ent)",
      "artist_url": "http://freemusicarchive.org/music/AWOL/",
      "artist_website": "http://www.AzillionRecords.blogspot.com",
      "artist_wikipedia_page": "",
      "tags": "['awol']"
    },
    {
      "artist_id": 10,
      "artist_active_year_begin": "",
      "artist_active_year_end": "",
      "artist_associated_labels": "Mistletone, Marriage Records",
      "artist_bio": "<p>\"Lucky Dragons\" means any recorded or performed or installed or packaged or shared or suggested or imagined pieces made by Luke Fischbeck, Sarah Rara, and/or any sometimes collaborators who claim the name.the name \"lucky dragons\" is borrowed from a japanese fishing boat caught in the fallout of hydrogen bomb test at bikini atoll in the 1950's. the crew stricken ill, and the boat itself contaminated, the \"lucky dragon\" became a crystalizing symbol for the previously diffuse worldwide anti-nuclear sentiment. eventually the boat was painted black, renamed the \"dark falcon\", and put into reuse as a fishing vessel, until it was retired and disposed of on the man-made trash island \"dream island\", where it remains today.lucky dragons are about the birthing of new and temporary creatures--equal-power situations in which audience members cooperate amongst themselves, building up fragile networks held together by such light things as skin contact, unfamiliar language, temporary logic, the spirit of celebration, and things that work but you don't know why. There have been hundreds of these simple yet shifting and unpredictable instances--with audiences ranging from the intense intimacy of one person to the public spectacle of thousands of people. At the heart of it all is playing together--building up social collectivities, re-engaging the wonder and impossibility of technological presence. It sounds--and looks--like simple and ancient patterns coming together and falling apart in a sincere attempt to let wires and screens and words become clear and crystal.they keep a busy schedule of performances and visits and festivals and workshops and things, in the present, and in the past: the 2008 Whitney Biennial, NY's PS1, the Centre Georges Pompidou in Paris, the Philadelphia Institute for Contemporary Art, the Portland Institute for Contemporary Art, the Museum of Contemporary Art San Diego, Frankfurt's Schirn Kunsthalle, Los Angeles' The Smell, NY's The Kitchen, The Smithsonian Institute's Hirshorn Museum, Cooper Union, the Royal Danish Academy of Fine Arts, etc. Lucky dragons live in Los Angeles California and have recorded 19 albums which are all available for downloading.lucky dragons' sister projects include \"sumi ink club\"--a weekly collaborative drawing society, and \"glaciers of nice\"--a small press and internet community.</p>\n<p><em>From Lucky Dragons' <a href=\"http://hawksandsparrows.org/\">website</a>:</em></p>\n<p>??</p>\n<p>(<a href=\"http://flickr.com/photos/jennsu/3102507027/\">photo</a> cc-by Flickr user <a href=\"http://flickr.com/photos/jennsu/\">jennsu</a>)</p>",
      "artist_comments": 3,
      "artist_contact": "Lukey Dargons",
      "artist_date_created": "11/26/2008 01:43:35 AM",
      "artist_donation_url": "http://glaciersofnice.com/shop/",
      "artist_favorites": 111,
      "artist_flattr_name": "",
      "artist_handle": "Lucky_Dragons",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/Lucky_Dragons_-_20120123182332618.jpg",
      "artist_images": "[{'image_id': '17332', 'image_file': 'https://freemusicarchive.org/file/images/artists/Lucky_Dragons_-_20120123182332618.jpg', 'image_title': 'artists Image', 'image_caption': None, 'image_copyright': 'credit Michael Demeo', 'image_source': 'http://hawksandsparrows.org'}, {'image_id': '688', 'image_file': 'https://freemusicarchive.org/file/images/artists/Lucky_Dragons_-_2009113015125506.jpg', 'image_title': 'artists Image', 'image_caption': None, 'image_copyright': 'cc-by Jennsu', 'image_source': 'http://flickr.com/photos/jennsu/3102507027/'}]",
      "artist_latitude": 34.0522342,
      "artist_location": "Los Angeles, CA",
      "artist_longitude": -118.2436849,
      "artist_members": "Luke Fischbeck\nSarah Rara",
      "artist_name": "Lucky Dragons",
      "artist_paypal_name": "",
      "artist_related_projects": "",
      "artist_url": "http://freemusicarchive.org/music/Lucky_Dragons/",
      "artist_website": "http://hawksandsparrows.org/",
      "artist_wikipedia_page": "",
      "tags": "['lucky dragons']"
    },
    {
      "artist_id": 100,
      "artist_active_year_begin": 2004,
      "artist_active_year_end": "",
      "artist_associated_labels": "Captcha Records (HBSP-2X), Pickled Egg (Europe)",
      "artist_bio": "<p><span style=\"font-family:Verdana, Geneva, Arial;font-size:xx-small;\">Chandeliers drink the same Chicagoland water that hydrates fellow hyperrhythmic abstract electronic pop groups like Mahjongg and Lazer Crystal. This water turns the vibraphone of late-90s Chicago post-rock into a synth, and adds a phat trigger to every drum. Chandeliers' debut album <em>The Thrush</em> was recently released on Pickled Egg (UK), and on the group's own Obey Your Brain imprint (co-run by Griffin of Icy Demons, also home to Man Man and Need New Body). - Jason Sigal 2008</span></p>\n<p><span style=\"font-family:arial, sans-serif;font-size:13px;border-collapse:collapse;\"><em>\"A  cut from the lost Zapp album that was produced by Chris Carter, ???Whip  the Gift??? is ethereal, mournful robo-soul at its ghost-in-the-shell  finest... it is surely a beauteous thing indeed. But it is not all  machine-grievance, the??Chandeliers??part of the EP also contains the  guaranteed boogie-splice euphoria of ???Sugarscoop??? ??? which is not leaving  20JFG???s bone encrusted DJ box for the foreseeable future.\" -??<strong>20jazzfunkgreats music blog</strong>. </em></span></p>",
      "artist_comments": 1,
      "artist_contact": "Chris Kalis",
      "artist_date_created": "11/26/2008 02:05:22 AM",
      "artist_donation_url": "",
      "artist_favorites": 8,
      "artist_flattr_name": "",
      "artist_handle": "Chandeliers",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/Chandeliers_-_2009113014608987.png",
      "artist_images": "[{'image_id': '4403', 'image_file': 'https://freemusicarchive.org/file/images/artists/Chandeliers_-_2009113014608987.png', 'image_title': 'artists Image', 'image_caption': None, 'image_copyright': None, 'image_source': None}, {'image_id': '4328', 'image_file': 'https://freemusicarchive.org/file/images/artists/Chandeliers_-_2009113014607953.jpg', 'image_title': 'artists Image', 'image_caption': None, 'image_copyright': None, 'image_source': None}]",
      "artist_latitude": 41.8781136,
      "artist_location": "Chicago, IL",
      "artist_longitude": -87.6297982,
      "artist_members": "Chris Kalis, Harry Brenner, Scott McGaughey, Brett Sova, Cameron Brand",
      "artist_name": "Chandeliers",
      "artist_paypal_name": "",
      "artist_related_projects": "Killer Whales, \nMichael Columbia\nMandate\nMr666",
      "artist_url": "http://freemusicarchive.org/music/Chandeliers/",
      "artist_website": "thechandeliers.com",
      "artist_wikipedia_page": "",
      "tags": "['chandeliers']"
    },
    {
      "artist_id": 1000,
      "artist_active_year_begin": "",
      "artist_active_year_end": "",
      "artist_associated_labels": "",
      "artist_bio": "<p><a href=\"http://marzipanmarzipan.com\">Marzipan Marzipan</a> (aka Zelda Panda) is all about visions, illusions, primal feelings and intuition. Her minimal esoteric musical trips are hypnotizing and evoke one's own playful desires. <a href=\"https://soundcloud.com/marzipanmarzipan\">Marzipan Marzipan</a> brings her \"soft-noise lo-fi disco-dance country-swing crossover experiment\" to the WFMU studios, all the way from Berlin, for this solo performance.</p>",
      "artist_comments": 0,
      "artist_contact": "",
      "artist_date_created": "12/04/2008 09:24:35 AM",
      "artist_donation_url": "",
      "artist_favorites": 0,
      "artist_flattr_name": "",
      "artist_handle": "Marzipan_Marzipan",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/Marzipan_Marzipan_-_20151120162333592.jpg",
      "artist_images": "[{'image_id': '31997', 'image_file': 'https://freemusicarchive.org/file/images/artists/Marzipan_Marzipan_-_20151120162333592.jpg', 'image_title': 'Artist Image: Marzipan Marzipan', 'image_caption': 'Marzipan Marzipan', 'image_copyright': None, 'image_source': None}]",
      "artist_latitude": 41.87194,
      "artist_location": "",
      "artist_longitude": 12.56738,
      "artist_members": "",
      "artist_name": "Marzipan Marzipan",
      "artist_paypal_name": "",
      "artist_related_projects": "",
      "artist_url": "http://freemusicarchive.org/music/Marzipan_Marzipan/",
      "artist_website": "https://soundcloud.com/marzipanmarzipan",
      "artist_wikipedia_page": "",
      "tags": []
    },
    {
      "artist_id": 10000,
      "artist_active_year_begin": "",
      "artist_active_year_end": "",
      "artist_associated_labels": "",
      "artist_bio": "<p><span style=\"font-family:'Times New Roman', Times, serif;font-size:18px;color:#191919;line-height:22px;\"><a style=\"color:#800000;text-decoration:none;padding:0px;margin:0px;border:0px;\" href=\"http://surrism.phonoethics.com/\"><strong style=\"padding:0px;margin:0px;border:0px;\">suRRism-Phonoethics</strong></a>??is proud to release 'Gritty Transmutation (Dedicated to Peter 'Sleazy' Christopherson)'<br style=\"padding:0px;margin:0px;border:0px;\" />by??<strong style=\"padding:0px;margin:0px;border:0px;\">Jack Hertz, PHOBoS, Blue Hell</strong><br style=\"padding:0px;margin:0px;border:0px;\" /><br style=\"padding:0px;margin:0px;border:0px;\" />'the threshold of explosion does not accept any limit...'<br style=\"padding:0px;margin:0px;border:0px;\" />-undRess B??ton??<br style=\"padding:0px;margin:0px;border:0px;\" /><br style=\"padding:0px;margin:0px;border:0px;\" /><br style=\"padding:0px;margin:0px;border:0px;\" />Receive your eligible copy here:<br style=\"padding:0px;margin:0px;border:0px;\" /><a style=\"color:#800000;text-decoration:none;padding:0px;margin:0px;border:0px;\" title=\"Jack Hertz, PHOBoS, Blue Hell - 'Gritty Transmutation (Dedicated to Peter 'Sleazy' Christopherson)'\" href=\"http://www.archive.org/details/sPE_0089\">http://www.archive.org/details/sPE_0089</a><br style=\"padding:0px;margin:0px;border:0px;\" />or here:??<a style=\"color:#800000;text-decoration:none;padding:0px;margin:0px;border:0px;\" title=\"Download Jack Hertz, PHOBoS, Blue Hell - 'Gritty Transmutation (Dedicated to Peter 'Sleazy' Christopherson)' (mp3 and covers)\" href=\"http://www.archive.org/download/sPE_0089/Jack_Hertz_PHOBoS_Blue_Hell_-_Gritty_Transmutation_Dedicated_to_Peter_Sleazy_Christopherson_sPE_0089.zip\">Jack Hertz, PHOBoS, Blue Hell - 'Gritty Transmutation (Dedicated to Peter 'Sleazy' Christopherson)' (mp3 and covers</a>)</span></p>",
      "artist_comments": 0,
      "artist_contact": "",
      "artist_date_created": "1/21/2011 02:11:31 PM",
      "artist_donation_url": "",
      "artist_favorites": 1,
      "artist_flattr_name": "",
      "artist_handle": "Jack_Hertz_PHOBoS_Blue_Hell",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/Jack_Hertz_PHOBoS_Blue_Hell_-_20110121140650772.jpg",
      "artist_images": "[{'image_id': '12266', 'image_file': 'https://freemusicarchive.org/file/images/artists/Jack_Hertz_PHOBoS_Blue_Hell_-_20110121140650772.jpg', 'image_title': 'Artist Image: Jack Hertz, PHOBoS, Blue Hell', 'image_caption': \"Jack Hertz, PHOBoS, Blue Hell - 'Gritty Transmutation (Dedicated to Peter 'Sleazy' Christopherson)'\", 'image_copyright': 'Jack Hertz, PHOBoS, Blue Hell', 'image_source': 'http://surrism.phonoethics.com/surrism-phonoethics_jack_hertz_phobos_blue_hell_-_gritty_transmutatio'}]",
      "artist_latitude": "",
      "artist_location": "",
      "artist_longitude": "",
      "artist_members": "Jack Hertz\nPHOBoS\nBlue Hell",
      "artist_name": "Jack Hertz, PHOBoS, Blue Hell",
      "artist_paypal_name": "",
      "artist_related_projects": "",
      "artist_url": "http://freemusicarchive.org/music/Jack_Hertz_PHOBoS_Blue_Hell/",
      "artist_website": "http://surrism.phonoethics.com/surrism-phonoethics_jack_hertz_phobos_blue_hell_-_gritty_transmutation_spe_0089.html",
      "artist_wikipedia_page": "",
      "tags": "['jack hertz phobos blue hell']"
    },
    {
      "artist_id": 10001,
      "artist_active_year_begin": "",
      "artist_active_year_end": "",
      "artist_associated_labels": "",
      "artist_bio": "<p>Nick Rivera (Michele Sarti's solo project) was born under a bunk bed in a victorian house in Hackney, London. Born in Cagliari, Italy, Michele started playing drums in a number of rock bands, slowly developing a strong interest in more experimental and free-form styles of music. The new approach led him to rediscover the french horn, the instrument he studied for years but never used on any of his projects. He also started toying with lots of different instruments like guitar, trumpet, glockenspiel, percussions, synths and loop machines. His first personal project was a free reinterpretation of the music from german composer Kurt Weill, directing a band featuring banjo, piano, wind instruments, flute and percussions. In Italy he collaborated with Bron Y Aur and Franklin Delano, and after moving to London with Sunny Day Sets Fire and Oh Atoms. He also plays as a stable member of the lo-fi folk band Takoma. Nick Rivera comes from Michele's desire to play something as natural as possible. In his own works is music that would be \"close to the image of a bud who sees the first light, the sounds of wood, nocturnal bugs, broken branches, birds, coppers, sliding water, shadows reflecting lights and glades in the forest... and everything that happens in the galaxy next to ours\".??</p>",
      "artist_comments": 1,
      "artist_contact": "",
      "artist_date_created": "1/22/2011 10:04:27 AM",
      "artist_donation_url": "",
      "artist_favorites": 13,
      "artist_flattr_name": "",
      "artist_handle": "Nick_Rivera",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/Nick_Rivera_-_2013062853731724.jpg",
      "artist_images": "[{'image_id': '24091', 'image_file': 'https://freemusicarchive.org/file/images/artists/Nick_Rivera_-_2013062853731724.jpg', 'image_title': 'Artist Image: Nick Rivera', 'image_caption': None, 'image_copyright': None, 'image_source': None}]",
      "artist_latitude": 39.214525,
      "artist_location": "Cagliari/Italy",
      "artist_longitude": 9.110492,
      "artist_members": "Raffaele Pilia - Electric Guitar\nAndrea Cherchi - Acoustic Guitar\nLuca Muntoni - Drums\nCorrado Loi - Bass and Effect\nMax Coni - Trombone",
      "artist_name": "Nick Rivera",
      "artist_paypal_name": "",
      "artist_related_projects": "",
      "artist_url": "http://freemusicarchive.org/music/Nick_Rivera/",
      "artist_website": "http://www.nickrivera.net/",
      "artist_wikipedia_page": "",
      "tags": "['nick rivera']"
    },
    {
      "artist_id": 10002,
      "artist_active_year_begin": "",
      "artist_active_year_end": "",
      "artist_associated_labels": "",
      "artist_bio": "",
      "artist_comments": 0,
      "artist_contact": "",
      "artist_date_created": "1/22/2011 12:10:00 PM",
      "artist_donation_url": "",
      "artist_favorites": 2,
      "artist_flattr_name": "",
      "artist_handle": "Carlos_Ramirez",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/Carlos_Ramirez_-_20110122111456036.jpg",
      "artist_images": "[{'image_id': '12270', 'image_file': 'https://freemusicarchive.org/file/images/artists/Carlos_Ramirez_-_20110122111456036.jpg', 'image_title': 'Artist Image: Carlos Ramirez', 'image_caption': 'Carlos Ramirez', 'image_copyright': 'Carlos Ramirez', 'image_source': 'http://www.facebook.com/profile.php?id=1648564857&amp;sk=info'}]",
      "artist_latitude": "",
      "artist_location": "",
      "artist_longitude": "",
      "artist_members": "",
      "artist_name": "Carlos Ramirez",
      "artist_paypal_name": "",
      "artist_related_projects": "",
      "artist_url": "http://freemusicarchive.org/music/Carlos_Ramirez/",
      "artist_website": "http://www.reverbnation.com/coatzin",
      "artist_wikipedia_page": "",
      "tags": "['carlos ramirez']"
    },
    {
      "artist_id": 10003,
      "artist_active_year_begin": "",
      "artist_active_year_end": "",
      "artist_associated_labels": "Digitalis, Deep Water Acres",
      "artist_bio": "<p><em>\"Evening Fires is a quartet of Pennsylvanians, featuring members of Clear Spots and Nessmuk, as well as the brains behind the Deep Water Acres website &amp; label. They're busy guys, but still found the time last summer and fall to crank out a set of backporch jams and slipstream electric boogaloos. They get help on banjo and mandolin on a few tracks, too, beefing up the downhome goodness.\"</em></p><hr /><p><strong><a title=\"step out of earth\" href=\"http://www.digitalisindustries.com/\" target=\"_blank\">@Digitalis</a></strong></p>\n<p><em>\"From their secret den in a northern Appalachian forest, Evening Fires brew up a rich blend of wide-spectrum rural psychedelia, with ingredients ranging from earthy folk sounds to cosmic drones to full-on rock freakouts.\"</em></p><hr /><p><strong><a title=\"FaceBook\" href=\"http://www.facebook.com/pages/Evening-Fires/146216722718?v=info\" target=\"_blank\">@FB</a></strong></p>\n<p><em>\"An mostly instrumental forest exploration that offers up little snippets of some long lost forest folk album(s). Shimmery and pastoral, hypnotic and transcendent free folk that spin a repetitive sound web that seems to unite the Music Your Mind Will Love You collective and the Irish Deserted Village label with some of the finest things on Digitalis. The sounds fly majestically over sun-drenched meadows and summer-clad forests like a flock of birds playing in the wind. Evening Fires, that includes members of the Clear Spots and Peacefeather, weave a delicate world of surprisingly structured folky clatter and Appalachian countryside, simply strummed guitars, lilting finger picked melodies, little bursts of primitive percussion, weary flute, bits of hazy drones and organ that wheeze out short mournful melodies that float just above the whirling background ambience.\"</em></p>\n<p><strong>@Mats Gustafsson</strong></p>",
      "artist_comments": 1,
      "artist_contact": "",
      "artist_date_created": "1/22/2011 12:11:35 PM",
      "artist_donation_url": "",
      "artist_favorites": 2,
      "artist_flattr_name": "",
      "artist_handle": "Evening_Fires",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/Evening_Fires_-_20110122121025490.jpg",
      "artist_images": "[{'image_id': '12274', 'image_file': 'https://freemusicarchive.org/file/images/artists/Evening_Fires_-_20110122121025490.jpg', 'image_title': 'artists Image', 'image_caption': None, 'image_copyright': None, 'image_source': None}]",
      "artist_latitude": 40.79373,
      "artist_location": "State College, PA",
      "artist_longitude": -77.860704,
      "artist_members": "Jen Breimhurst, Jason Britten, Gabriel Gould, Julie Greer, Kevin Moist, Nathaniel Rasmussen, Dave Sandy, Andrew Simpson, Bob Sweeny, Ben Wentz",
      "artist_name": "Evening Fires",
      "artist_paypal_name": "",
      "artist_related_projects": "",
      "artist_url": "http://freemusicarchive.org/music/Evening_Fires/",
      "artist_website": "http://www.myspace.com/eveningfires",
      "artist_wikipedia_page": "",
      "tags": "['evening fires']"
    },
    {
      "artist_id": 10004,
      "artist_active_year_begin": "",
      "artist_active_year_end": "",
      "artist_associated_labels": "",
      "artist_bio": "",
      "artist_comments": 0,
      "artist_contact": "",
      "artist_date_created": "1/22/2011 01:44:29 PM",
      "artist_donation_url": "",
      "artist_favorites": 2,
      "artist_flattr_name": "",
      "artist_handle": "Tabla_y_Cuchillo",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/Tabla_y_Cuchillo_-_20110122130034892.jpg",
      "artist_images": "[{'image_id': '12275', 'image_file': 'https://freemusicarchive.org/file/images/artists/Tabla_y_Cuchillo_-_20110122130034892.jpg', 'image_title': 'Artist Image: Tabla y Cuchillo', 'image_caption': 'Ricardo Tejero/Julian Bonequi', 'image_copyright': 'Aniana Heras', 'image_source': 'surrism-phonoethics_tabla_y_cuchillo_spe_0091.html'}]",
      "artist_latitude": "",
      "artist_location": "",
      "artist_longitude": "",
      "artist_members": "Ricardo Tejero\nJulian Bonequi",
      "artist_name": "Tabla y Cuchillo",
      "artist_paypal_name": "",
      "artist_related_projects": "",
      "artist_url": "http://freemusicarchive.org/music/Tabla_y_Cuchillo/",
      "artist_website": "http://surrism.phonoethics.com/surrism-phonoethics_tabla_y_cuchillo_spe_0091.html",
      "artist_wikipedia_page": "",
      "tags": "['tabla y cuchillo']"
    },
    {
      "artist_id": 10005,
      "artist_active_year_begin": "",
      "artist_active_year_end": "",
      "artist_associated_labels": "",
      "artist_bio": "<p><strong>Blank Realm</strong> are decidedly international. The four-piece improv/color-noise band???s releases fit comfortably on L.A.???s <strong>Not Not Fun</strong>, while their trashed grandeur nestles right in on Eagle Rock???s DIY imprint. It would seem that the heat-drenched Brisbane scene from which they mutate is not worlds apart from the streets of LA.</p>\n<p>Then again, read-moars and full stories at <strong><a href=\"http://www.tinymixtapes.com/features/blank-realm\" target=\"_blank\">TINYMIXAPES</a></strong>.</p>",
      "artist_comments": 1,
      "artist_contact": "",
      "artist_date_created": "1/22/2011 07:48:18 PM",
      "artist_donation_url": "",
      "artist_favorites": 8,
      "artist_flattr_name": "",
      "artist_handle": "Blank_Realm",
      "artist_image_file": "https://freemusicarchive.org/file/images/artists/Blank_Realm_-_20110122193643244.jpg",
      "artist_images": "[{'image_id': '12279', 'image_file': 'https://freemusicarchive.org/file/images/artists/Blank_Realm_-_20110122193643244.jpg', 'image_title': 'Artist Image: Blank Realm', 'image_caption': None, 'image_copyright': 'Blank Realm', 'image_source': 'http://www.myspace.com/blankrealm/'}]",
      "artist_latitude": -27.46888,
      "artist_location": "Brisbane, Australia",
      "artist_longitude": 153.022827,
      "artist_members": "",
      "artist_name": "Blank Realm",
      "artist_paypal_name": "",
      "artist_related_projects": "",
      "artist_url": "http://freemusicarchive.org/music/Blank_Realm/",
      "artist_website": "http://www.myspace.com/blankrealm/",
      "artist_wikipedia_page": "",
      "tags": "['blank realm']"
    }
  ]

  module.exports={artistList};