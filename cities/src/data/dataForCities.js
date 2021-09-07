const cities = [
  {
    id: "0",
    name: "Lille",
    country: "France",
    description:
      "Lille est une ville du nord de la France, préfecture du département du Nord et chef-lieu de la région Hauts-de-France.Avec 233 098 habitants intra-muros au dernier recensement en 2018, Lille est la dixième commune la plus peuplée de France, mais aussi la principale commune de la Métropole européenne de Lille, qui rassemble 94 autres communes dont Roubaix, Tourcoing et Villeneuve-d'Ascq et compte près de 1,2 million d’habitants. ",
    image: "./assets/img/imgForCities/lille_.jpg",
    imagesList: [
      { src: "./assets/img/imgForData/lille.jpg", title: "Le centre commercial Euralille" },
      {src:"./assets/img/imgForData/Lille_st_maurice.jpg", title: "L'église Saint-Maurice Lille"},
      {src:"./assets/img/imgForData/lille1.jpg", title: "La Gare Lille Flandre"},
      {src:"./assets/img/imgForData/lille2.jpg", title: "Des vélos (V'Lille) d'ilévia"},
      {src:"./assets/img/imgForData/lille3.jpg", title: "L'équipe de football de Lille vainqueur de la Ligue 1 Uber Eats 2021"},
      {src:"./assets/img/imgForData/lille4.jpg", title: "République-Beaux Arts"},
      {src:"./assets/img/imgForData/lille6.jpg", title: "La cathédrale Notre-Dame-de-la-Treille."},
      {src:"./assets/img/imgForData/lille7.jpg", title: "Vue de derrière de la gare Lille Flandre"},
      {src:"./assets/img/imgForData/lille8.jpg", title: "Vue de Haut d'une partie de Lille Centre"},
    ],
  },
  {
    id: "1",
    name: "Paris",
    country: "France",
    description:
      "Paris capitale de la France compte plus de 1 800 immeubles classés ou inscrits à l'inventaire des monuments historiques, dont près de cent lieux de culte. Les monuments les plus célèbres de Paris datent d'époques variées. Ils se trouvent souvent dans le centre et sur les rives de la Seine. Les quais de Seine du Pont de Sully au Pont de Bir-Hakeim constituent l'un des plus beaux paysages fluviaux urbains et sont d'ailleurs classés à l'inventaire du patrimoine mondial de l'UNESCO. On y trouve notamment, d'est en ouest : la cathédrale Notre-Dame de Paris, le Palais du Louvre, l'Hôtel des Invalides, le pont Alexandre-III, le Grand Palais, le musée du quai Branly - Jacques-Chirac, la Tour Eiffel et le Trocadéro. Plus à l'est, d'importants édifices contemporains ont été construits : le ministère de l'Économie et des Finances, le site François-Mitterrand de la Bibliothèque nationale de France, etc. ",
    image: "./assets/img/imgForCities/paris1.jpg",
    imagesList: [
      {src:"assets/img/imgForData/paris1.jpg",title:"Paris illuminée"},
      {src:"./assets/img/imgForData/paris2.jpg",title:"L'arc de triomphe de l’Étoile"},
      {src:"./assets/img/imgForData/paris3.jpg",title:"Vue de haut de la Seine traversant Paris"},
      {src:"./assets/img/imgForData/paris4.jpg",title:"Belle vue de la Tour Eiffel"},
      {src:"./assets/img/imgForData/paris5.jpg",title:"Paris ville capitale"},
      {src:"./assets/img/imgForData/paris6.jpg",title:"La chapelle de la Sorbonne symbole de l'Université de Paris"},
    ],
  },
  {
    id: "2",
    name: "Turin",
    country: "Italie",
    description:
      "Turin est une ville italienne, chef-lieu de la ville métropolitaine de Turin et de la région du Piémont. Turin a été la capitale des États de Savoie de 1563 à 1713, du royaume de Sicile de 1713 à 1720, du royaume de Sardaigne de 1720 à 1861 et du royaume d'Italie de 1861 à 1865. ",
    image: "./assets/img/imgForCities/turin2.jpg",
    imagesList: [
      {src:"./assets/img/imgForData/turin1.jpg",title:"Logo de la Juventus de Turin l'une des équipes de football de la ville"},
      {src:"./assets/img/imgForData/turin2.jpg",title:"Turin vue de haut"},
      {src:"./assets/img/imgForData/turin3.jpg",title:"Une place de la ville"},
      {src:"./assets/img/imgForData/turin4.jpg",title:"La porte palatine de Turin"},
      {src:"./assets/img/imgForData/turin5.jpg",title:"Un monument de Turin"},
      {src:"./assets/img/imgForData/turin6.jpg",title:"Beau paysage dans Turin"},
    ],
  },
  {
    id: "3",
    name: "Munich",
    country: "Allemagne",
    description:
      "Munich est une ville allemande, capitale du Land de Bavière. Avec 1 557 451 habitants intra-muros au 31 août 20203 et 2 351 706 habitants dans son aire urbaine, elle est la troisième ville au niveau national par la population après Berlin et Hambourg. La Région métropolitaine de Munich, qui englobe également Augsbourg et Ingolstadt, compte quant à elle plus de cinq millions d'habitants. Traversée par l'Isar, affluent du Danube, elle se situe dans le district de Haute-Bavière, non loin des Préalpes bavaroises. ",
    image: "./assets/img/imgForCities/munich_g.jpg",
    imagesList: [
      {src:"./assets/img/imgForData/munich1.jpg",title:"Olympiasee"},
      {src:"./assets/img/imgForData/munich2.jpg",title:"L'allianz arena"},
      {src:"./assets/img/imgForData/munich3.jpg",title:"Musée BMW"},
      {src:"./assets/img/imgForData/munich4.jpg",title:"Munich vue de haut"},
      {src:"./assets/img/imgForData/munich5.jpg",title:"Un beau parc de Munich"},
      {src:"./assets/img/imgForData/munich7.jpg",title:"Université Louis et Maximilien"},
    ],
  },
  {
    id: "4",
    name: "New-YorK",
    country: "États-Unis",
    description:
      "New Yorka, officiellement nommée City of New York, connue également sous les noms et abréviations de New York City ou NYC (pour éviter la confusion avec l'État de New York), et dont le surnom le plus connu est The Big Apple (« La grosse pomme »), est la plus grande ville des États-Unis en nombre d'habitants et l'une des plus importantes du continent américain. Elle se situe dans le Nord-Est du pays, sur la côte atlantique, à l'extrémité sud-est de l'État de New York. La ville de New York se compose de cinq arrondissements appelés boroughs : Manhattan, Brooklyn, Queens, le Bronx et Staten Island. Ses habitants s'appellent les New-Yorkais (en anglais : New Yorkers). ",
    image: "./assets/img/imgForCities/newyork1.jpg",
    imagesList: [
      {src:"./assets/img/imgForData/newyork2.jpg",title:"Le principal espace vert de Manhattan : Central Park."},
      {src:"./assets/img/imgForData/newyork1.jpg",title:"Le One World Trade Center"},
      {src:"./assets/img/imgForData/newyork3.jpg",title:"La statue de la liberté"},
      {src:"./assets/img/imgForData/newyork4.jpg",title:"Manhattan la nuit tombée"},
      {src:"./assets/img/imgForData/newyork5.jpg",title:"Une vue montrant de haut un aperçu de la circulation de New York bondée de taxis "},
      {src:"./assets/img/imgForData/newyork6.jpg",title:"Un marché à Union Square"},
      {src:"./assets/img/imgForData/newyork7.jpg",title:"Des gratte-ciels de New York "},
    ],
  },
  {
    id: "5",
    name: "Venise",
    country: "Italie",
    description:
      "Venise est une ville côtière du nord-est de l'Italie, sur les rives de la mer Adriatique. Elle s'étend sur un ensemble de 121 petites îles séparées par un réseau de canaux et reliées par 435 ponts. Située au milieu de la lagune vénète, entre les estuaires du Pô et du Piave, Venise est renommée pour cet emplacement exceptionnel ainsi que pour son architecture et son patrimoine culturel, qui lui valent une inscription au patrimoine mondial de l'UNESCO. ",
    image: "./assets/img/imgForCities/venice1.jpg",
    imagesList: [
      {src:"./assets/img/imgForData/venice1.jpg",title:"Une image de Venise, ville lacustre"},
      {src:"./assets/img/imgForData/venice2.jpg",title:"Une image de Venise, ville lacustre"},
      {src:"./assets/img/imgForData/venice3.jpg",title:"Une image de Venise, ville lacustre"},
      {src:"./assets/img/imgForData/venice4.jpg",title:"Une image de Venise, ville lacustre"},
      {src:"./assets/img/imgForData/venice5.jpg",title:"Une image de Venise, ville lacustre"},
      {src:"./assets/img/imgForData/venice6.jpg",title:"Une image de Venise, ville lacustre"},
      {src:"./assets/img/imgForData/venice7.jpg",title:"Une image de Venise, ville lacustre"},
      {src:"./assets/img/imgForData/venice8.jpg",title:"Une image de Venise, ville lacustre"},
    ],
  },
  {
    id: "6",
    name: "Dubaï",
    country: "Émirats arabes unis",
    description:
      "Dubaï, rarement DoubaïNote est la première ville des Émirats arabes unis (devant la capitale fédérale Abou Dabi). Située sur le golfe Persique, elle est capitale de l'émirat de Dubaï, et compte plus de trois millions d'habitants. Elle forme, avec les villes de Charjah, Ajman et Oumm al Qaïwaïn, elles-mêmes capitales de leurs émirats respectifs, une agglomération qui dépasse 3,1 millions d'habitants en 2018. Dubaï est également le premier port du pays. ",
    image: "./assets/img/imgForCities/dubai5.jpg",
    imagesList: [
      {src:"./assets/img/imgForData/dubai1.jpg",title:"Centre Ville "},
      {src:"./assets/img/imgForData/dubai2.jpg",title:"Une vue splendide de la ville de Dubaï "},
      {src:"./assets/img/imgForData/dubai3.jpg",title:"Dubaï Palm et the World"},
      {src:"./assets/img/imgForData/dubai4.jpg",title:"Dubaï une mégapole futuriste "},
      {src:"./assets/img/imgForData/dubai5.jpg",title:"Le Burj khalifa"},
      {src:"./assets/img/imgForData/dubai6.jpg",title:"Le Burj al-Arab"},
      {src:"./assets/img/imgForData/dubai7.jpg",title:"Des gratte-ciels de Dubaï dépassant les nuages"},
      {src:"./assets/img/imgForData/dubai8.jpg",title:"Désert de Dubaï"},
    ],
  },
  /*{
      id: "7",
      name: "",
      country: "",
      description: "",
      image: "",
    },
    {
      id: "8",
      name: "",
      country: "",
      description: "",
      image: "",
    },
    {
      id: "9",
      name: "",
      country: "",
      description: "",
      image: "",
    },
    {
      id: "10",
      name: "",
      country: "",
      description: "",
      image: "",
    },*/
];

export default cities;
