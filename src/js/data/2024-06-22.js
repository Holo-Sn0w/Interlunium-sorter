dataSetVersion = "2024-06-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Groups",
    key: "Groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "Interlunium", key: "IL" },
      { name: "Kerberos", key: "KB" },
      { name: "Pastel Project", key: "PP" },
      { name: "Ume Takeuchi", key: "Ume" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Rinko Hanazawa",
    img: "Rinko.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Junko",
    img: "Junko.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Dan Bi Han",
    img: "Danbi.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Megumi Aihara",
    img: "Megumi.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Chiyo Watanabe",
    img: "Chiyo.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Kanon Mistuboshi",
    img: "Kanon.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Eimi Inagawa",
    img: "Eimi.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Akira Hoshino",
    img: "Akira.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Yume Zhou",
    img: "Yume.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Anette Chanel",
    img: "Anette.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Kazue Ono",
    img: "Kazue.jpg",
    opts: {
      Groups: ["IL"]
    }
  },
  {
    name: "Natsuki Ichinose",
    img: "Natsuki.jpg",
    opts: {
      Groups: ["KB"]
    }
  },
  {
    name: "Hayate Sumiyoshi",
    img: "Hayate.jpg",
    opts: {
      Groups: ["KB"]
    }
  },
  {
    name: "Yuu Tobe",
    img: "Yuu.jpg",
    opts: {
      Groups: ["KB"]
    }
  },
  {
    name: "Erika Horie",
    img: "Erika.jpg",
    opts: {
      Groups: ["PP"]
    }
  },
  {
    name: "Mariya Akiyama",
    img: "Mariya.jpg",
    opts: {
      Groups: ["PP"]
    }
  },
  {
    name: "Kohaku Peterson",
    img: "Kohaku.jpg",
    opts: {
      Groups: ["PP"]
    }
  },
  {
    name: "Tae-eun Song",
    img: "Tae-eun.jpg",
    opts: {
      Groups: ["PP"]
    }
  },
  {
    name: "Ai Nakajima",
    img: "Ai.jpg",
    opts: {
      Groups: ["PP"]
    }
  },
  {
    name: "Ume Takeuchi",
    img: "Ume.jpg",
    opts: {
      Groups: ["Ume"]
    }
  } 
];
