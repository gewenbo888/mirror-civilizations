export type Bilingual = { en: string; zh: string };

export type Pair = {
  id: number;
  slug: string;
  kind: "city" | "region";
  axis: "latin-baiyue" | "germanic-northern" | "mediterranean-yangtze" | "other";
  china: Bilingual;          // e.g. { en: "Hong Kong", zh: "香港" }
  europe: Bilingual;
  trait: Bilingual;          // the 特点 line from the table
  tagline: Bilingual;
  intro: Bilingual;          // 2 paragraphs
  parallels: Bilingual[];    // 4-6 bullets
  divergences: Bilingual[];  // 2-3 bullets
  history: { era: Bilingual; china: Bilingual; europe: Bilingual }[]; // 3-4 timeline beats
  modern: Bilingual;         // current state paragraph
  reading: { title: string; author?: string; year?: string }[];
};

export const AXES = {
  "latin-baiyue": {
    label: { en: "BaiYue ↔ Latin", zh: "百越 ↔ 拉丁" },
    color: "#d04632",
    body: {
      en: "Southern China's BaiYue peoples and southern Europe's Latin peoples occupy the same civilizational latitude — Mediterranean climate, seafaring instinct, mercantile cities, decentralised maritime republics. From Venetian galleys to Hokkien junks, from Florentine bankers to Cantonese compradors, the institutional rhyme is uncanny.",
      zh: "中国南方的百越族群与南欧的拉丁族群占据相同的文明纬度——地中海气候、航海本能、商业城市、去中心化的海洋共和国。从威尼斯桨帆船到闽南货船，从佛罗伦萨银行家到广府买办，制度上的押韵几乎令人战栗。",
    },
  },
  "germanic-northern": {
    label: { en: "Germanic ↔ Northern Mandarin", zh: "日耳曼 ↔ 北方官话" },
    color: "#2c5e8f",
    body: {
      en: "Northern Europe's Germanic peoples and northern China's Mandarin-speaking heartland share the same continental profile — cold-winter agrarian core, cavalry mobility, centralised bureaucratic instinct, industrial vocation. Berlin and Beijing rhyme more deeply than either rhymes with Rome.",
      zh: "北欧的日耳曼族群与中国北方的官话腹地，分享同一种大陆性格：寒冬农耕的内核、骑兵机动性、中央集权的官僚本能、工业立国的天赋。柏林与北京之间的押韵，比任何一方与罗马之间都更深。",
    },
  },
  "mediterranean-yangtze": {
    label: { en: "Mediterranean ↔ Yangtze", zh: "地中海 ↔ 长江" },
    color: "#c9a14a",
    body: {
      en: "The third axis is the spine itself: the Yangtze is to East Asian civilization what the Mediterranean is to the West — a long, navigable corridor of cities, dialects, and trade, around which the entire civilization arranged itself. Wuhan is to the Yangtze what Alexandria is to the Mediterranean: not the capital, but the gravity well.",
      zh: "第三条轴线是脊柱本身：长江之于东亚文明，正如地中海之于西方文明——一条狭长的、可航行的城市与方言走廊，整个文明都围绕它编排。武汉之于长江，正如亚历山大港之于地中海：不是首都，但是那个真正的引力井。",
    },
  },
  other: {
    label: { en: "Outside the Three Axes", zh: "三轴之外" },
    color: "#15120e",
    body: {
      en: "A handful of pairs sit outside the three main axes — Islamic frontiers, island peripheries, industrial belts, mountain mosaics. They are the controls of the experiment: they pair only by analogy, not by deep structural rhyme.",
      zh: "少数配对落在三条主轴之外——伊斯兰边疆、海岛、工业带、山地拼图。它们是实验的「对照组」：仅在类比意义上配对，而非深层结构上的押韵。",
    },
  },
} as const;

export const PAIRS: Pair[] = [
  {
    id: 1,
    slug: "hongkong-venice",
    kind: "city",
    axis: "latin-baiyue",
    china: { en: "Hong Kong", zh: "香港" },
    europe: { en: "Venice", zh: "威尼斯" },
    trait: { en: "Birthplace of capitalism", zh: "资本主义发源地" },
    tagline: {
      en: "Two improbable city-states that taught the world how money grows when it can sail.",
      zh: "两个不可思议的城邦——它们教会世界：当金钱学会航行，便会生长。",
    },
    intro: {
      en: "Hong Kong and Venice are the same idea twice. A small, defensible harbour on the edge of a continental empire, leveraged into a financial node that outweighs its hinterland by an order of magnitude. Both invented the institutions money needed to leave the ground: double-entry book-keeping in Venice (1494, Pacioli); offshore banking and bearer trusts in Hong Kong (post-1949). Both speak a creole — Venetian, Cantonese-English — that became the language of trade. Both punch laughably above their weight because they sit at exactly the right gate.",
      zh: "香港与威尼斯，是同一个想法的两次实现。一个紧贴大陆帝国边缘的、易守难攻的小港口，被撬动为体量远超腹地一个数量级的金融节点。两地都发明了「钱要离开土地」所需的制度：威尼斯的复式记账（1494，帕乔利）、香港的离岸银行与不记名信托（1949 后）。两地都讲一种克里奥尔语——威尼斯方言、港式中英混语——并将其变为贸易的通用语。两地都因为恰好坐在那一道关口上，而以令人发笑的方式以小博大。",
    },
    parallels: [
      { en: "A natural deep-water harbour at the mouth of a wealthy hinterland.", zh: "处在富庶腹地出海口的天然深水良港。" },
      { en: "An imported labour pool from inland: Slavic galley crews; mainland migrants.", zh: "由内陆迁入的劳动力：威尼斯的斯拉夫桨手；香港的内地移民。" },
      { en: "A reputation for legal stability that priced in a premium for capital.", zh: "为「法律稳定」打出溢价，吸引资本溢价定价。" },
      { en: "Compradors: bridge merchants between empire and ocean.", zh: "买办：横跨帝国与海洋之间的中介商人。" },
      { en: "A great late-empire decline once the new sea routes rerouted around them.", zh: "新的海上路线绕开后，二者都经历了帝国晚期的衰落。" },
    ],
    divergences: [
      { en: "Venice was sovereign for 1,100 years; Hong Kong was a colonial leasehold for 156.", zh: "威尼斯独立 1100 年；香港作为殖民租借地仅 156 年。" },
      { en: "Venice's hinterland was always foreign; Hong Kong's is now its sovereign.", zh: "威尼斯的腹地始终是外国；香港的腹地，如今是它的主权。" },
    ],
    history: [
      { era: { en: "Founding", zh: "立基" }, china: { en: "1842 — ceded after the First Opium War.", zh: "1842——第一次鸦片战争后割让。" }, europe: { en: "697 — first elected Doge of Venice.", zh: "697——威尼斯首任民选总督。" } },
      { era: { en: "Mercantile zenith", zh: "商业之巅" }, china: { en: "1980s — Asia's premier offshore financial centre.", zh: "1980 年代——亚洲首屈一指的离岸金融中心。" }, europe: { en: "1300s — controlled the Mediterranean spice route.", zh: "1300 年代——掌控地中海香料商路。" } },
      { era: { en: "Hinge moment", zh: "转折点" }, china: { en: "1997 handover; new constitutional status.", zh: "1997 年回归；进入新的宪制安排。" }, europe: { en: "1797 — fell to Napoleon, the Republic ended.", zh: "1797——为拿破仑所征服，共和国终结。" } },
    ],
    modern: {
      en: "Both cities are now living monuments — Venice to tourism and Hong Kong to a single global story it can no longer entirely author. But the institutional code each one wrote is everywhere money moves.",
      zh: "两座城市如今都已成「活着的纪念碑」——威尼斯被旅游业塑形，香港则承载着一段它已无法完全自己书写的全球叙事。但它们各自写下的制度密码，遍布于一切金钱流动之处。",
    },
    reading: [
      { title: "City of Fortune", author: "Roger Crowley", year: "2011" },
      { title: "Hong Kong: Epilogue to an Empire", author: "Jan Morris", year: "1988" },
    ],
  },

  {
    id: 2,
    slug: "shenzhen-florence",
    kind: "city",
    axis: "latin-baiyue",
    china: { en: "Shenzhen", zh: "深圳" },
    europe: { en: "Florence", zh: "弗洛伦萨" },
    trait: { en: "Innovation engine of its civilization", zh: "科技中心" },
    tagline: {
      en: "Two cities where capital and craft fused into the future their civilizations couldn't yet name.",
      zh: "两座城市——资本与工艺在此熔铸成各自文明尚未命名的未来。",
    },
    intro: {
      en: "Florence in 1450 and Shenzhen in 2010 are the same compression engine running on different fuels. A medium-sized city with a freakish concentration of skilled artisans, plenty of patient capital, an ambient culture of competition between workshops, and a willingness to break every received aesthetic in order to ship the next thing. Medici banks underwrote Brunelleschi; Tencent and Huawei underwrite the next billion-device platform. Both cities are bottoms-up in a way that the official capital never quite manages.",
      zh: "1450 年的弗洛伦萨与 2010 年的深圳，是同一台压缩引擎在不同燃料下的运转。一个中等规模的城市，工匠技能密度高得离谱，耐心资本充足，工作坊之间充斥竞争，并且愿意为了让下一个东西出货而打破一切既有的审美。美第奇家族银行资助布鲁内莱斯基；腾讯、华为资助下一个十亿设备级平台。两座城市都是「自下而上」的——首都从未真正做到。",
    },
    parallels: [
      { en: "Dense vertical supply chains within walking (or driving) distance.", zh: "致密的垂直供应链，可在步行（或行车）范围内闭环。" },
      { en: "Patient capital married to short-cycle iteration.", zh: "耐心资本与短周期迭代的联姻。" },
      { en: "A merchant class that thinks of itself as a maker class.", zh: "把自己看作「制造者阶层」的商人阶层。" },
      { en: "A culture of imitation as the on-ramp to invention.", zh: "把模仿作为通往发明的引坡。" },
    ],
    divergences: [
      { en: "Florence's product was art and finance; Shenzhen's is hardware and software.", zh: "弗洛伦萨的产品是艺术与金融，深圳的是硬件与软件。" },
      { en: "Shenzhen was farmland 40 years ago; Florence was already a thousand years old at its zenith.", zh: "深圳 40 年前还是农田；弗洛伦萨在巅峰时已有千年历史。" },
    ],
    history: [
      { era: { en: "Founding spark", zh: "立基火花" }, china: { en: "1980 — Special Economic Zone declared.", zh: "1980——经济特区设立。" }, europe: { en: "59 BC — founded by Julius Caesar as Florentia.", zh: "公元前 59——凯撒以「Florentia」之名建城。" } },
      { era: { en: "Take-off", zh: "起飞" }, china: { en: "2000s — Huawei, ZTE, Tencent scale.", zh: "2000 年代——华为、中兴、腾讯崛起。" }, europe: { en: "1300s — Medici banking innovates double-entry, letters of credit.", zh: "1300 年代——美第奇银行创新出复式记账与信用证。" } },
      { era: { en: "Civilisational ceiling", zh: "文明天花板" }, china: { en: "2020s — sets the global hardware aesthetic.", zh: "2020 年代——为全球硬件审美定调。" }, europe: { en: "1450s — Brunelleschi's dome, Renaissance perspective.", zh: "1450 年代——布鲁内莱斯基穹顶、文艺复兴透视法。" } },
    ],
    modern: {
      en: "Shenzhen today is what Florence was: a city where, if you can ship the model in your head, you can find the people to build it within a 30-minute drive.",
      zh: "今日的深圳正是当年的弗洛伦萨：只要脑中那个模型能出货，半小时车程之内就能找到把它造出来的人。",
    },
    reading: [
      { title: "The Innovators Behind Leonardo", author: "Plinio Innocenzi", year: "2018" },
      { title: "Shenzhen: The Silicon Valley of Hardware", author: "Wired video doc", year: "2016" },
    ],
  },

  {
    id: 3,
    slug: "guangzhou-rome",
    kind: "city",
    axis: "latin-baiyue",
    china: { en: "Guangzhou", zh: "广州" },
    europe: { en: "Rome", zh: "罗马" },
    trait: { en: "Old political capital of its sphere", zh: "政治中心" },
    tagline: {
      en: "The mother cities — older than their empires, harder to kill than their rulers.",
      zh: "母城——比帝国更老，比统治者更难杀死。",
    },
    intro: {
      en: "Rome and Guangzhou are the deep capitals: cities that existed before their civilizations were named after them, and that outlast every dynasty that uses them. Both were founded as river ports on a contested frontier between agrarian and maritime worlds. Both became the canonical headquarters of an entire linguistic and legal family — Latin, Cantonese — and exported their officialdom across an empire. Both are now slightly out-of-fashion regional capitals that quietly hold most of the cultural cards.",
      zh: "罗马与广州是「深层首都」：它们在以自己为名的文明被命名之前就存在，并比一切利用过它们的王朝活得更久。两者都是建立于「农耕世界与海洋世界争夺前线」的河口城市；两者都成为整个语言与法律家族——拉丁语、广府话——的标准司令部，并把官僚体制输送至整个帝国。如今两者都是稍稍「过气」的地方都会，却悄然握有最多的文化王牌。",
    },
    parallels: [
      { en: "River + sea geography that made them the natural gate.", zh: "河流加海洋的双重地理，使其天然成为关口。" },
      { en: "An old legal and bureaucratic vocabulary every successor city borrowed.", zh: "为后来一切继承者所借用的、古老的法政与官僚词汇。" },
      { en: "A reputation for cuisine that survives every political swing.", zh: "穿越一切政治起伏的饮食声望。" },
      { en: "A subordinate role under a newer northern capital — but spiritual seniority.", zh: "在更新的北方首都之下处于从属地位，但精神上更年长。" },
    ],
    divergences: [
      { en: "Rome ruled directly; Guangzhou's empire ruled from elsewhere.", zh: "罗马直接统治；广州所在的帝国从别处统治它。" },
      { en: "Rome's church is global; Guangzhou's diaspora is global.", zh: "罗马的教会是全球性的；广州的侨民是全球性的。" },
    ],
    history: [
      { era: { en: "Foundation", zh: "建城" }, china: { en: "214 BC — founded as Panyu under Qin.", zh: "公元前 214——秦置番禺。" }, europe: { en: "753 BC — Romulus's traditional founding date.", zh: "公元前 753——罗慕路斯传统建城年。" } },
      { era: { en: "Imperial role", zh: "帝国角色" }, china: { en: "Tang–Ming — capital of southern maritime trade.", zh: "唐至明——南方海上贸易之都。" }, europe: { en: "27 BC – 476 AD — capital of an empire of 70m.", zh: "公元前 27—公元 476——七千万人口帝国之都。" } },
      { era: { en: "Modern hinge", zh: "近代转折" }, china: { en: "1840s — first foreign-trade port; Canton System.", zh: "1840 年代——首批通商口岸；广州十三行。" }, europe: { en: "1870 — re-becomes capital of unified Italy.", zh: "1870——重新成为意大利统一后的首都。" } },
    ],
    modern: {
      en: "Today Guangzhou and Rome are both the second-most-important city in their country, but the first-most-important to the cuisine, the diaspora, and the deep memory.",
      zh: "今天广州与罗马都已不再是各自国家的第一城市，但论饮食、论侨民、论深层记忆——它们仍是第一。",
    },
    reading: [
      { title: "SPQR", author: "Mary Beard", year: "2015" },
      { title: "Canton Under Communism", author: "Ezra Vogel", year: "1969" },
    ],
  },

  {
    id: 4,
    slug: "guangdong-italy",
    kind: "region",
    axis: "latin-baiyue",
    china: { en: "Guangdong", zh: "广东" },
    europe: { en: "Italy", zh: "意大利" },
    trait: { en: "One of the three great Latin / BaiYue powers", zh: "拉丁和百越三大强国之一" },
    tagline: {
      en: "The peninsular factories of the world — and the family-business spine of two civilizations.",
      zh: "世界的「半岛工厂」——两种文明的家族企业脊柱。",
    },
    intro: {
      en: "Guangdong and Italy are the same shape twice. A long, sun-drenched, mountain-spined coast facing a warm sea, divided into fiercely independent city-clusters, each with its own dialect and cuisine, none of which fully obey the political capital up north. Both economies run on dense networks of small-and-medium family firms — Italian SMEs and the Chaoshan/Cantonese/Hakka clan businesses — that punch globally without ever quite being national champions.",
      zh: "广东与意大利是同一种形状的两次实现。一片狭长、阳光充足、脊背是山的海岸，朝向一个温暖的海，分裂为彼此不服气的城市群，每一个都有自己的方言与饮食——没有一个会全心全意听北方首都的话。两地的经济都跑在「中小家族企业」密网之上：意大利的中小企业、潮汕／广府／客家的宗族商业——在全球出击，却从来不是「国家冠军」。",
    },
    parallels: [
      { en: "A coast of city-state mentalities — Genoa, Naples, Milan; Guangzhou, Shenzhen, Foshan.", zh: "一片「城邦心态」的海岸——热那亚、那不勒斯、米兰；广州、深圳、佛山。" },
      { en: "Family-firm capitalism: industrial districts, not corporate giants.", zh: "家族企业资本主义：工业集群，而非超大企业。" },
      { en: "Strong dialects: Lombard, Sicilian; Cantonese, Hakka, Teochew.", zh: "强势方言：伦巴第、西西里；粤、客家、潮汕。" },
      { en: "Cuisine as identity marker as much as language.", zh: "饮食与语言同等程度地标志身份。" },
      { en: "Cultural confidence that does not require political dominance.", zh: "无需政治主导的文化自信。" },
    ],
    divergences: [
      { en: "Italy is a sovereign nation; Guangdong a province of 130m.", zh: "意大利是主权国家；广东是 1.3 亿人口的省。" },
      { en: "Italy's industrial belt is in the north; Guangdong's is in the south.", zh: "意大利工业带在北部；广东工业带在南部。" },
    ],
    history: [
      { era: { en: "Origins", zh: "起源" }, china: { en: "Pre-Qin — BaiYue tribal confederation.", zh: "先秦——百越部族联盟。" }, europe: { en: "Pre-Roman — Etruscan and Greek city-states.", zh: "罗马之前——伊特鲁里亚与希腊城邦。" } },
      { era: { en: "Maritime turn", zh: "海洋转向" }, china: { en: "Song–Yuan — maritime silk road hub.", zh: "宋元——海上丝路枢纽。" }, europe: { en: "Medieval — Venice & Genoa control the Levant.", zh: "中世纪——威尼斯与热那亚掌控地中海东岸。" } },
      { era: { en: "Industrial spring", zh: "工业之春" }, china: { en: "1980s — Pearl River Delta factories.", zh: "1980 年代——珠三角工厂。" }, europe: { en: "1970s — Third Italy's industrial districts.", zh: "1970 年代——「第三意大利」工业区。" } },
    ],
    modern: {
      en: "Both regions today are aging but still set the floor of global craftsmanship — leather, fashion, wine, electronics, drones. The next generation's question is the same: can family-firm density survive consolidation?",
      zh: "今天两地都在老去，却仍为全球工艺设下底线——皮具、时装、葡萄酒、电子、无人机。下一代人的问题相同：家族企业的密度，能否在并购浪潮中存活？",
    },
    reading: [
      { title: "The Italian Miracle", author: "Vera Zamagni", year: "1993" },
      { title: "Guangdong's Industrial Districts", author: "Chinese Academy of Social Sciences", year: "2010" },
    ],
  },

  {
    id: 5,
    slug: "chaoshan-portugal",
    kind: "region",
    axis: "latin-baiyue",
    china: { en: "Chaoshan", zh: "潮汕" },
    europe: { en: "Portugal", zh: "葡萄牙" },
    trait: { en: "Seafaring people", zh: "航海民族" },
    tagline: {
      en: "Small coastlines that built outsize maritime diasporas — and never quite came home.",
      zh: "海岸线很短，却孕育出远大海外侨民的两个航海族群——他们从未真正回家。",
    },
    intro: {
      en: "Chaoshan and Portugal are the same maritime instinct in two languages. Both face a sea that immediately drops to open ocean. Both have a population a hundred times overrepresented abroad relative to their land area. Portuguese sailors charted the Indian Ocean; Chaoshanese merchants spread Hokkien-Teochew commercial networks across Southeast Asia. Both languages are spoken in more places than the language's homeland could justify on the map.",
      zh: "潮汕与葡萄牙，是同一种航海本能在两种语言中的实现。两地都直面立刻进入大洋的海。两地人口在海外的代表率，按本土面积来算高了上百倍。葡萄牙水手测绘了印度洋；潮商把闽南—潮汕的商业网络铺满东南亚。两种语言被使用的地点，远比其母土在地图上所能解释的多得多。",
    },
    parallels: [
      { en: "A small, defensible coast that pushes the population outward.", zh: "狭小、易守难攻的海岸，把人口推向外部。" },
      { en: "A diaspora that runs the local economy of every port it lands in.", zh: "在每一个落脚港口都掌握当地经济的侨民。" },
      { en: "A taste for sweetness — port wine and stewed gravy; tea-egg and sweet soup.", zh: "对甜味的偏好——波特酒与红烧肉；茶叶蛋与糖水。" },
      { en: "A relationship with their northern capital that runs from polite to mistrustful.", zh: "与北方首都的关系从客气到提防不等。" },
    ],
    divergences: [
      { en: "Portugal was an empire; Chaoshan was an empire's province.", zh: "葡萄牙是帝国；潮汕是帝国的一部分。" },
      { en: "Portuguese diaspora is South American, African, Asian; Chaoshanese is Southeast Asian.", zh: "葡萄牙裔遍布南美、非洲、亚洲；潮汕裔以东南亚为主。" },
    ],
    history: [
      { era: { en: "Open the sea", zh: "向海开拓" }, china: { en: "Song dynasty — Chaozhou outport for the southern coast.", zh: "宋代——潮州为南方沿海外港。" }, europe: { en: "1415 — capture of Ceuta begins the Age of Discovery.", zh: "1415——攻占休达，开启大航海时代。" } },
      { era: { en: "Diaspora era", zh: "侨民时代" }, china: { en: "1800s — emigration waves to Siam, Java, Malaya.", zh: "1800 年代——大批移民暹罗、爪哇、马来亚。" }, europe: { en: "1500s — Brazil, Goa, Macau, Mozambique.", zh: "1500 年代——巴西、果阿、澳门、莫桑比克。" } },
      { era: { en: "Modern recall", zh: "近代回望" }, china: { en: "Today — Teochew tycoons drive Southeast Asian capital.", zh: "今天——潮商驱动东南亚资本。" }, europe: { en: "Today — Lusophone world of 270m people.", zh: "今天——葡语世界 2.7 亿人。" } },
    ],
    modern: {
      en: "Both homelands today are quieter than their diasporas — and yet the cultural code (a particular dialect, a particular sweetness, a particular way of doing family business) keeps a global network coherent.",
      zh: "今天两地的母土都比其侨民安静；但那套文化密码（特定的方言、特定的甜、特定的家族经商方式）仍把一张全球网络黏合在一起。",
    },
    reading: [
      { title: "The Portuguese Empire 1415–1808", author: "A. R. Disney", year: "2009" },
      { title: "The Chaoshan Merchant Network", author: "Choi Chi-cheung", year: "1995" },
    ],
  },

  {
    id: 6,
    slug: "fujian-spain",
    kind: "region",
    axis: "latin-baiyue",
    china: { en: "Fujian", zh: "福建" },
    europe: { en: "Spain", zh: "西班牙" },
    trait: { en: "Seafarers; one of the three great Latin / BaiYue powers", zh: "航海民族，百越和拉丁三大强国" },
    tagline: {
      en: "The other peninsular powerhouse — bigger than Portugal, hungrier than Italy, mountain-locked toward the homeland.",
      zh: "另一个半岛强权——比葡萄牙更大、比意大利更饿、被山脉锁向母国。",
    },
    intro: {
      en: "Fujian and Spain are the larger sister of the Portugal / Chaoshan pair. Where the smaller cousin specialised in trade, the larger one converted that maritime instinct into territory: Hokkien-speakers across Taiwan, the Philippines, Singapore, southern Malaysia; Spanish-speakers across the Americas. Both have a mountain wall between coast and inland that keeps the maritime culture pure and forces the language to crystallise its own grammar.",
      zh: "福建与西班牙，是「葡萄牙／潮汕」配对的大姐。当那位小表亲专注于贸易，这位大姐则把同样的海洋本能转化为领土：闽南语遍布台湾、菲律宾、新加坡、马来亚南部；西班牙语遍布美洲。两地都有山墙隔开海岸与内陆——这墙让海洋文化保持纯度，并迫使语言把自身语法结晶下来。",
    },
    parallels: [
      { en: "A mountain barrier between coast and inland.", zh: "海岸与内陆之间的山墙。" },
      { en: "A maritime-conquest period followed by long economic eclipse.", zh: "海上征服期之后是漫长的经济黯淡。" },
      { en: "A diaspora that's the dominant business class in another country.", zh: "成为他国主导商业阶层的侨民群。" },
      { en: "Tea, tobacco, sugar — same colonial-era cash crops.", zh: "茶、烟、糖——殖民时代的同一批经济作物。" },
    ],
    divergences: [
      { en: "Spain's colonies became nation-states; Fujian's never did.", zh: "西班牙的殖民地后来成为民族国家；福建的从未。" },
      { en: "Spain's catholic; Fujian's syncretic Buddhist-Daoist-folk.", zh: "西班牙天主教；福建则是佛道民间混融。" },
    ],
    history: [
      { era: { en: "Maritime opening", zh: "海洋开拓" }, china: { en: "Song–Yuan — Quanzhou is the largest port on earth.", zh: "宋元——泉州，地球上最大的港口。" }, europe: { en: "711–1492 — Reconquista; 1492 — Columbus sails.", zh: "711—1492——光复运动；1492——哥伦布出航。" } },
      { era: { en: "Empire", zh: "帝国" }, china: { en: "Ming — Zheng He's fleets, then turn inward.", zh: "明——郑和远航，随后内转。" }, europe: { en: "1500s — silver from Potosí, an Atlantic civilization.", zh: "1500 年代——波托西银山，一个大西洋文明。" } },
      { era: { en: "Diaspora century", zh: "侨民世纪" }, china: { en: "1700–1900 — Hokkien Southeast Asia.", zh: "1700—1900——闽南人下南洋。" }, europe: { en: "1500–1800 — Spanish America.", zh: "1500—1800——西属美洲。" } },
    ],
    modern: {
      en: "Hokkien is heard in 50 cities; Spanish in 21 countries. Both Fujian and Spain still set the cuisine, the tongue, and the family architecture of vast hinterlands they no longer govern.",
      zh: "闽南话回响在 50 座城市；西班牙语横跨 21 个国家。两地至今仍为它们已不再统治的广袤腹地，定义饮食、口音与家庭结构。",
    },
    reading: [
      { title: "Empires of the Atlantic World", author: "J. H. Elliott", year: "2006" },
      { title: "Maritime Quanzhou", author: "Hugh Clark", year: "1991" },
    ],
  },

  {
    id: 7,
    slug: "wuyue-france",
    kind: "region",
    axis: "latin-baiyue",
    china: { en: "Wuyue", zh: "吴越" },
    europe: { en: "France", zh: "法国" },
    trait: { en: "One of the three great Latin / BaiYue powers", zh: "百越和拉丁三大强国" },
    tagline: {
      en: "The cultured cousin — neither the merchant peninsula nor the seafaring rock, but the rich, articulate centre of taste.",
      zh: "有教养的表亲——既非商人半岛，也非航海礁岩，而是富庶、能言、定义品味的中心。",
    },
    intro: {
      en: "France and Wuyue (the Suzhou-Hangzhou-Shaoxing-Ningbo zone) are the wealthy interior coast of their respective Latin / BaiYue worlds. Not as adventurously maritime as Italy or Spain, not as continental as the Germanic north — but the richest farmland, the most refined cuisine, the most prestigious literary tradition. Paris and Suzhou both decided that articulating the standard of taste was a power play, and won it.",
      zh: "法国与吴越（苏州—杭州—绍兴—宁波一带），是各自拉丁／百越世界中富庶的内海岸。海洋性不及意大利、西班牙之冒险，大陆性不及日耳曼之厚重——却拥有最丰饶的田、最精致的菜、最具威望的文学传统。巴黎与苏州都做出了同一个选择：把「定义品味的标准」变成权力游戏——并赢下了它。",
    },
    parallels: [
      { en: "An agricultural superregion fertile enough to subsidise universities, gardens, theatres.", zh: "一个农业超富区，足以供养大学、园林、剧场。" },
      { en: "A national literary language born here that everyone else has to learn.", zh: "一种诞生在此、其他人必须学的全国书面语。" },
      { en: "Cuisine codified into a written, exportable canon.", zh: "把饮食成文为可输出的经典。" },
      { en: "A merchant class that doesn't see itself as merchants — it sees itself as scholars.", zh: "把自己看作士人而非商人的商人阶层。" },
    ],
    divergences: [
      { en: "France is sovereign; Wuyue is dialect group with no border.", zh: "法国为主权国；吴越是没有边界的方言群。" },
      { en: "France's wine; Wuyue's huangjiu and tea.", zh: "法国之葡萄酒；吴越之黄酒与茶。" },
    ],
    history: [
      { era: { en: "Cultural ascendancy", zh: "文化崛起" }, china: { en: "Southern Song (1127–1279) — Hangzhou is the world's richest city.", zh: "南宋（1127—1279）——杭州为当时世界首富之城。" }, europe: { en: "1660s — Versailles fixes European taste for a century.", zh: "1660 年代——凡尔赛定下了欧洲一个世纪的品味。" } },
      { era: { en: "Mercantile age", zh: "商业时代" }, china: { en: "Ming–Qing — Suzhou & Yangzhou as luxury craft capitals.", zh: "明清——苏州与扬州为奢侈品工艺之都。" }, europe: { en: "1700s — French luxury (silk, porcelain, fashion) industrialises.", zh: "1700 年代——法式奢侈品（丝绸、瓷器、时装）工业化。" } },
      { era: { en: "Modern hub", zh: "近代枢纽" }, china: { en: "Today — Hangzhou is Alibaba; Suzhou is precision manufacturing.", zh: "今天——杭州是阿里巴巴；苏州是精密制造。" }, europe: { en: "Today — Paris remains a cultural and luxury capital.", zh: "今天——巴黎仍是文化与奢侈品之都。" } },
    ],
    modern: {
      en: "Both regions today still earn extra income simply by being themselves. People pay extra for a wine bottled in Burgundy, a silk woven in Suzhou, a meal that comes from the right kitchen tradition.",
      zh: "两地至今仍仅凭「身份」就能赚到额外溢价。人们愿意为产自勃艮第的酒、苏州织出的丝绸、出自正宗师门的一顿饭多付几倍价格。",
    },
    reading: [
      { title: "The Pursuit of Glory: Europe 1648–1815", author: "Tim Blanning", year: "2007" },
      { title: "City of Heaven: The Glories of Hangzhou", author: "Jacques Gernet", year: "1959" },
    ],
  },

  {
    id: 8,
    slug: "shanghai-paris",
    kind: "city",
    axis: "latin-baiyue",
    china: { en: "Shanghai", zh: "上海" },
    europe: { en: "Paris", zh: "巴黎" },
    trait: { en: "The cosmopolitan capital of the Latin/BaiYue world", zh: "拉丁与百越世界的世界级都会" },
    tagline: {
      en: "The cities where their civilization most wants to look at itself in the mirror.",
      zh: "两座城市——各自文明最想在镜中端详自己的地方。",
    },
    intro: {
      en: "Shanghai and Paris are the boulevards their civilizations dress up for. Both grew enormous between 1850 and 1930, and both spent the rest of the 20th century deciding what to do with the architecture, the music halls, the journalism, the fashion industry, and the new middle class that period built. Both are river cities whose river is a national symbol. Both have a relationship with their political capital that is one part affection, one part eye-roll.",
      zh: "上海与巴黎，是各自文明特意盛装出场的林荫大道。两地都在 1850—1930 之间扩张为巨型城市，并用 20 世纪余下的时间，决定如何安置那段年代留下的建筑、音乐厅、新闻业、时装产业与新中产阶级。两地都是江畔城市，那条江都是国家象征；两地与各自政治首都的关系，都是一分喜爱、九分翻白眼。",
    },
    parallels: [
      { en: "An era-defining urban planning episode (Haussmann; the Bund + concessions).", zh: "塑造时代的城市规划事件（奥斯曼；外滩与租界）。" },
      { en: "A magnetic literary scene that punches above the city's economy.", zh: "一股远超城市经济体量的磁性文学生态。" },
      { en: "A fashion industry as soft-power vehicle of the whole nation.", zh: "作为全国软实力载具的时装产业。" },
      { en: "A media gravity well that determines national mood.", zh: "决定全国情绪的媒体引力井。" },
    ],
    divergences: [
      { en: "Paris is the political capital; Shanghai is not.", zh: "巴黎是首都；上海不是。" },
      { en: "Shanghai's foreign quarter was extraterritorial; Paris's was never.", zh: "上海的外国区域曾是治外法权；巴黎的从未。" },
    ],
    history: [
      { era: { en: "Becoming a metropolis", zh: "城市化" }, china: { en: "1842 — opened to foreign trade.", zh: "1842——开埠通商。" }, europe: { en: "1853–70 — Haussmann's grand redesign.", zh: "1853—70——奥斯曼的大规划。" } },
      { era: { en: "Golden age", zh: "黄金年代" }, china: { en: "1920–37 — Paris of the Orient.", zh: "1920—37——东方巴黎。" }, europe: { en: "1900–14 — Belle Époque.", zh: "1900—14——美好年代。" } },
      { era: { en: "Reinvention", zh: "再造" }, china: { en: "1992 — Pudong opens, second take-off.", zh: "1992——浦东开放，第二次起飞。" }, europe: { en: "1989 — Grands Projets; Pyramid at the Louvre.", zh: "1989——「大工程」；卢浮宫金字塔。" } },
    ],
    modern: {
      en: "Both cities are now museums of themselves and engines of new culture at the same time — which is exactly what global cosmopolitan capitals are supposed to be.",
      zh: "两地如今同时是「自身的博物馆」与「新文化的引擎」——这恰是世界级都会的应有之义。",
    },
    reading: [
      { title: "Shanghai Modern", author: "Leo Ou-fan Lee", year: "1999" },
      { title: "Paris: Biography of a City", author: "Colin Jones", year: "2004" },
    ],
  },

  {
    id: 9,
    slug: "shandong-germany",
    kind: "region",
    axis: "germanic-northern",
    china: { en: "Shandong", zh: "山东" },
    europe: { en: "Germany", zh: "德国" },
    trait: { en: "The Germanic / Northern Mandarin great power", zh: "北方官话和日耳曼强国" },
    tagline: {
      en: "Plain, plain-spoken, machine-handed, philosophically serious — the engine room of the continent.",
      zh: "平实、说话直、机械之手、哲学认真——大陆的轮机舱。",
    },
    intro: {
      en: "Shandong and Germany are the heartland of their respective civilizations' machine instinct. Both sit on a fertile coastal plain that faces a shallow sea. Both produced the canonical philosophers — Confucius, Mencius from Shandong; Kant, Hegel from Germany — and the canonical engineers. Both have a strong reputation for being literal-minded, slightly humourless, hard-working, and devastatingly effective once a target is set.",
      zh: "山东与德国，是各自文明「机器本能」的腹地。两地都坐落在朝向浅海的肥沃沿海平原。两地都贡献了正典哲学家（孔孟出山东；康德、黑格尔出德国）与正典工程师。两地都以「认死理、不太幽默、刻苦、目标一旦定下便摧枯拉朽」著称。",
    },
    parallels: [
      { en: "A grain belt feeding the entire civilization.", zh: "养活整个文明的粮带。" },
      { en: "A philosophical canon that the rest of the civilization is graded against.", zh: "一套被整个文明用来给自身打分的哲学经典。" },
      { en: "Heavy industry, beer, ports, shipyards.", zh: "重工业、啤酒、港口、船坞。" },
      { en: "A strong moral seriousness; politics is read as ethics.", zh: "强烈的道德严肃感——政治被理解为伦理。" },
    ],
    divergences: [
      { en: "Germany is sovereign and federal; Shandong is one Chinese province.", zh: "德国是联邦主权国；山东是中国一省。" },
      { en: "Germany's Protestant Reformation; Shandong's Confucian orthodoxy.", zh: "德国的新教改革；山东的儒家正统。" },
    ],
    history: [
      { era: { en: "Philosophical age", zh: "哲学时代" }, china: { en: "551 BC – Confucius born in Qufu.", zh: "公元前 551——孔子生于曲阜。" }, europe: { en: "1517 — Luther's 95 Theses.", zh: "1517——路德 95 条论纲。" } },
      { era: { en: "Industrial rise", zh: "工业崛起" }, china: { en: "1898 — Qingdao under German lease; Tsingtao Brewery.", zh: "1898——青岛德占；青岛啤酒诞生。" }, europe: { en: "1870s — Krupp, Siemens, modern industry.", zh: "1870 年代——克虏伯、西门子、现代工业。" } },
      { era: { en: "Modern role", zh: "近代角色" }, china: { en: "Today — Shandong is China's largest port complex.", zh: "今天——山东是中国最大港口群。" }, europe: { en: "Today — Germany is Europe's economic anchor.", zh: "今天——德国是欧洲经济压舱石。" } },
    ],
    modern: {
      en: "Both are the no-nonsense block of their continent, and both are now wrestling with the same question: how does a manufacturing heartland reinvent itself when the next economic wave is intangible?",
      zh: "两地都是各自大陆「不废话」的板块，并在今天面对同一问题：当下一波经济浪潮是非物质的，制造业腹地该如何再造自己？",
    },
    reading: [
      { title: "Germany: Memories of a Nation", author: "Neil MacGregor", year: "2014" },
      { title: "The Analects of Confucius", author: "(trans. Slingerland)", year: "2003" },
    ],
  },

  {
    id: 10,
    slug: "northeast-nordic",
    kind: "region",
    axis: "germanic-northern",
    china: { en: "Northeast China", zh: "东北" },
    europe: { en: "Nordic Europe", zh: "北欧" },
    trait: { en: "The northernmost Germanic / Northern Mandarin peoples", zh: "北方官话日耳曼人最北" },
    tagline: {
      en: "Cold winters, dark winters, careful neighbours, world-class engineers.",
      zh: "冷的冬天、长的夜、谨慎的邻里、世界级的工程师。",
    },
    intro: {
      en: "The Northeast (Manchuria) and the Nordic countries are the latitude-50 mirrors of their civilizations. Long winters, sparse old populations, recent waves of industrial migration, deep timber forests, ice-class harbours. Both regions punched far above their weight in industrial output for a brief 20th-century period (Northeast under Mao; Sweden / Finland under social-democracy) and both are now reckoning with depopulation, ageing, and what to do with the company towns the old factories built.",
      zh: "东北与北欧，是两种文明在北纬五十度的镜像。漫长的冬天、稀薄而年老的人口、近代的工业移民潮、深邃的木材森林、冰区港口。两地在 20 世纪短暂的一段时间里产能远超体量（毛时代的东北；社民主义下的瑞典、芬兰），如今同样在面对人口萎缩、老龄化，以及「老工厂留下的企业镇该如何处理」。",
    },
    parallels: [
      { en: "Latitude-driven culture: dark winters reward indoor crafts.", zh: "纬度塑造的文化——长夜奖励室内技艺。" },
      { en: "Strong social cohesion; trust as institutional infrastructure.", zh: "强社会凝聚——信任本身是制度基础设施。" },
      { en: "Forestry, papermaking, heavy machinery, shipbuilding.", zh: "林业、造纸、重型机械、造船。" },
      { en: "A reputation for stoic humour and direct speech.", zh: "以「斯多葛式幽默」与直来直去著称。" },
    ],
    divergences: [
      { en: "Nordic states are sovereign welfare states; Northeast is a Chinese region in transition.", zh: "北欧是主权福利国家；东北是中国处于转型中的区域。" },
      { en: "Nordics export design; Northeast historically exported labour and steel.", zh: "北欧输出设计；东北历史上输出劳动力与钢铁。" },
    ],
    history: [
      { era: { en: "Frontier era", zh: "边疆时代" }, china: { en: "Qing — Manchu homeland, restricted Han settlement.", zh: "清——满洲故乡，限制汉人入垦。" }, europe: { en: "9th–11th c. — Viking expansion.", zh: "9—11 世纪——维京扩张。" } },
      { era: { en: "Industrial boom", zh: "工业期" }, china: { en: "1949–80 — Northeast = China's Ruhr.", zh: "1949—80——东北 = 中国的鲁尔。" }, europe: { en: "1900–80 — Nordic engineering miracles (Ericsson, Volvo, Nokia).", zh: "1900—80——北欧工程奇迹（爱立信、富豪、诺基亚）。" } },
      { era: { en: "Hollowing", zh: "空心化" }, china: { en: "1990–2020 — outflow to coastal provinces.", zh: "1990—2020——人口流向沿海。" }, europe: { en: "1990s — heavy industry restructures into design + services.", zh: "1990 年代——重工业转型为设计与服务业。" } },
    ],
    modern: {
      en: "Both regions are now rebranding around what their geography actually produces well: ice, wood, design, careful institutions, and ski resorts.",
      zh: "两地正在围绕「地理真正擅长的事」重新塑造形象：冰、木、设计、谨慎的制度，以及滑雪场。",
    },
    reading: [
      { title: "The Almost Nearly Perfect People", author: "Michael Booth", year: "2014" },
      { title: "Manchuria: A Frontier History", author: "Owen Lattimore", year: "1932" },
    ],
  },

  {
    id: 11,
    slug: "xian-vienna",
    kind: "city",
    axis: "other",
    china: { en: "Xi'an", zh: "西安" },
    europe: { en: "Vienna", zh: "维也纳" },
    trait: { en: "Continental imperial capital of the pre-maritime age", zh: "古代航陆时代政治中心" },
    tagline: {
      en: "Inland courts that defined what a court was — before the sea took the world from them.",
      zh: "内陆宫廷——它们定义了「宫廷」二字本身，直到海洋夺走了世界。",
    },
    intro: {
      en: "Xi'an and Vienna are the great pre-maritime imperial capitals. Both sit far enough inland to control a continental empire safely. Both ruled at the intersection of multiple language families (Chinese-Turkic-Tibetan-Sogdian; German-Hungarian-Slavic-Italian). Both designed a court culture and a court music that the rest of their world copied. And both were dethroned by exactly the same long-term force: the rise of the maritime trade route, which moved gravity to the coasts.",
      zh: "西安与维也纳，是大航海以前两大伟岸的内陆帝国之都。两地都足够内陆，可以安全地统御一片大陆帝国。两地都坐落在多语系交叉点（汉—突厥—藏—粟特；德—匈—斯拉夫—意）。两地都设计了被各自世界复制的宫廷文化与宫廷音乐。两地最终都被同一股长波击落——海洋商路崛起，文明引力迁往海岸。",
    },
    parallels: [
      { en: "Sit at a continental crossroads, not a coast.", zh: "坐落在大陆十字路口，不在海岸。" },
      { en: "Multilingual courts; the king's table heard 5 languages a night.", zh: "多语种宫廷——一个晚上能听到五种语言。" },
      { en: "A culinary and musical canon copied across the empire.", zh: "一套被全帝国复制的饮食与音乐经典。" },
      { en: "An imperial decline triggered by maritime trade routes.", zh: "因海上商路兴起而导致的帝国式微。" },
    ],
    divergences: [
      { en: "Xi'an's Tang lasted 289 years; Vienna's Habsburgs 640.", zh: "西安的唐朝 289 年；维也纳的哈布斯堡 640 年。" },
      { en: "Vienna survives as a national capital; Xi'an as a regional one.", zh: "维也纳至今仍是国都；西安如今是省会。" },
    ],
    history: [
      { era: { en: "Imperial zenith", zh: "帝国之巅" }, china: { en: "Tang Chang'an — capital of a world-empire of 80m.", zh: "唐长安——八千万人口世界帝国之都。" }, europe: { en: "Habsburg Vienna — capital of central Europe.", zh: "哈布斯堡维也纳——中欧帝国之都。" } },
      { era: { en: "Civilisational radiation", zh: "文明辐射" }, china: { en: "Silk Road conduit — Sogdians, Persians, Buddhists.", zh: "丝路通道——粟特、波斯、佛教。" }, europe: { en: "Music + science capital — Mozart, Freud, Wittgenstein.", zh: "音乐与科学之都——莫扎特、弗洛伊德、维特根斯坦。" } },
      { era: { en: "Decline phase", zh: "衰落期" }, china: { en: "907 — Tang falls; capital shifts east.", zh: "907——唐亡；首都东移。" }, europe: { en: "1918 — Habsburg empire dissolves.", zh: "1918——哈布斯堡帝国解体。" } },
    ],
    modern: {
      en: "Both cities now make a careful living from heritage tourism, classical performance, university research, and a quiet, well-mannered pride.",
      zh: "两地如今都靠遗产旅游、古典演奏、大学研究，以及一种安静而克制的骄傲，过着体面的日子。",
    },
    reading: [
      { title: "Daily Life in Tang China", author: "Charles Benn", year: "2002" },
      { title: "Vienna and the Habsburgs", author: "Steven Beller", year: "2006" },
    ],
  },

  {
    id: 12,
    slug: "beijing-brussels",
    kind: "city",
    axis: "germanic-northern",
    china: { en: "Beijing", zh: "北京" },
    europe: { en: "Brussels", zh: "布鲁塞尔" },
    trait: { en: "Political capital of the maritime age", zh: "航海时代政治中心" },
    tagline: {
      en: "Northern capitals that organise a coastline they don't quite belong to.",
      zh: "北方首都——它们组织起一段并不真正属于自己的海岸。",
    },
    intro: {
      en: "Beijing and Brussels are the choice each civilization made when it decided the maritime era required a political administrator that wasn't itself maritime. Both are sober, central, somewhat boring cities that rule rich coasts they only partially understand. Both are bureaucratic machines: Brussels runs the EU; Beijing runs a 1.4-billion-person continent. The deep joke is the same: the people who actually make the money live three hours away, by train.",
      zh: "北京与布鲁塞尔，是各自文明在「航海时代需要一个非海洋的政治管理者」这一选择上的答案。两座城都肃穆、居中、略显沉闷——治理着自己只是部分理解的富裕海岸。两地都是官僚机器：布鲁塞尔治欧盟；北京治十四亿人口的大陆。两地深层的玩笑相同：真正赚钱的人，火车三个小时之外。",
    },
    parallels: [
      { en: "Northern, inland-leaning political capital.", zh: "偏北、偏内陆的政治首都。" },
      { en: "A reputation for committee meetings, not commerce.", zh: "以「开会」而不以「做生意」著称。" },
      { en: "Multilingual diplomatic apparatus.", zh: "多语种外交机构。" },
      { en: "A skyline of think-tanks and embassies.", zh: "由智库与使馆构成的天际线。" },
    ],
    divergences: [
      { en: "Beijing is a sovereign capital; Brussels is a supranational one.", zh: "北京是主权国首都；布鲁塞尔是超国家机构所在地。" },
      { en: "Beijing has 3,000 years; Brussels 1,000.", zh: "北京已有三千年；布鲁塞尔约一千年。" },
    ],
    history: [
      { era: { en: "Becoming capital", zh: "成为首都" }, china: { en: "1271 — Khanbaliq under Kublai Khan.", zh: "1271——大都，忽必烈定都。" }, europe: { en: "1830 — capital of independent Belgium.", zh: "1830——独立比利时首都。" } },
      { era: { en: "Imperial role", zh: "帝国角色" }, china: { en: "Ming–Qing capital, again.", zh: "明清复为首都。" }, europe: { en: "1957 — EEC; 1992 — EU; the European capital.", zh: "1957——欧洲经济共同体；1992——欧盟；欧洲首都。" } },
      { era: { en: "Modern administrator", zh: "现代管理者" }, china: { en: "Today — runs the PRC, headquarters most SOEs.", zh: "今天——执掌中国，国企总部所在地。" }, europe: { en: "Today — Commission, Parliament, NATO HQ.", zh: "今天——欧委会、欧议会、北约总部。" } },
    ],
    modern: {
      en: "Both cities live in the calm hum of governance — the kind of city you visit, not the kind you go to to feel something.",
      zh: "两地都在「治理的低沉嗡鸣」中生活——是你去办事的城市，而不是你去感受心跳的城市。",
    },
    reading: [
      { title: "The Search for Modern China", author: "Jonathan Spence", year: "1990" },
      { title: "The Great Surge: The Ascent of the Developing World", author: "Steven Radelet", year: "2015" },
    ],
  },

  {
    id: 13,
    slug: "wuhan-alexandria",
    kind: "city",
    axis: "mediterranean-yangtze",
    china: { en: "Wuhan", zh: "武汉" },
    europe: { en: "Alexandria", zh: "亚历山大港" },
    trait: { en: "Major city of the great civilizational corridor", zh: "长江和地中海重要城市" },
    tagline: {
      en: "Where the river meets the world — and the library teaches the empire what it knows.",
      zh: "大江入世之地——也是图书馆教帝国「它知道什么」的地方。",
    },
    intro: {
      en: "Alexandria stood at the western edge of the Mediterranean's Egyptian shore; Wuhan stands at the middle of the Yangtze. Both are the natural transhipment point — the place where the river craft meet the deep-water boats. Alexandria's library codified Greek knowledge; Wuhan's universities did the same for early-20th-century Chinese science. Both are cities that did not need to rule but that decided what the empire knew.",
      zh: "亚历山大港坐落在地中海埃及海岸的西端；武汉坐落在长江的正中。两地都是天然的转运点——内河船与海船的接驳处。亚历山大图书馆把希腊知识汇编成典籍；武汉的大学群在 20 世纪初为中国科学做了同样的事。两地都不必统治——但它们决定了帝国所「知道」的内容。",
    },
    parallels: [
      { en: "A river-and-sea (river-and-river) interchange.", zh: "河海（或江河）交汇枢纽。" },
      { en: "A canonical library / university tradition.", zh: "经典的图书馆／大学传统。" },
      { en: "A reputation as the empire's hospital and teaching city.", zh: "享有「帝国的医院与教学之城」之声誉。" },
      { en: "Strategically critical — chokepoint for any continental shipping.", zh: "战略要地——任何大陆航运的咽喉。" },
    ],
    divergences: [
      { en: "Alexandria is now mid-size; Wuhan is 13 million people.", zh: "亚历山大今为中型城市；武汉为千三百万。" },
      { en: "Alexandria faces the sea; Wuhan faces a long inland axis.", zh: "亚历山大面海；武汉面对一条狭长的内陆轴。" },
    ],
    history: [
      { era: { en: "Founding", zh: "立基" }, china: { en: "Han dynasty — Wuchang military port.", zh: "汉——武昌军港。" }, europe: { en: "331 BC — founded by Alexander.", zh: "公元前 331——亚历山大建城。" } },
      { era: { en: "Knowledge centre", zh: "知识中心" }, china: { en: "1893 — Hubei University; 1920s — modern medical city.", zh: "1893——湖北自强学堂；1920 年代——现代医学之都。" }, europe: { en: "3rd c. BC — Great Library; Euclid, Eratosthenes.", zh: "公元前 3 世纪——亚历山大图书馆；欧几里得、埃拉托色尼。" } },
      { era: { en: "Pivotal moments", zh: "关键节点" }, china: { en: "1911 — Wuchang Uprising sparks the Republic.", zh: "1911——武昌起义点燃共和。" }, europe: { en: "30 BC — Cleopatra's death; Egypt becomes Roman.", zh: "公元前 30——克莱奥帕特拉之死；埃及入罗马。" } },
    ],
    modern: {
      en: "Both are mid-tier in the imperial pecking order today, but the people they trained run the empire from elsewhere.",
      zh: "两地今天在帝国排序中只算中等；但它们培养出的人，从别处治理着帝国。",
    },
    reading: [
      { title: "Alexandria: City of Memory", author: "Michael Haag", year: "2004" },
      { title: "Wuhan: A City of the Two Lakes", author: "various", year: "—" },
    ],
  },

  {
    id: 14,
    slug: "chongqing-constantinople",
    kind: "city",
    axis: "mediterranean-yangtze",
    china: { en: "Chongqing", zh: "重庆" },
    europe: { en: "Constantinople", zh: "君士坦丁堡" },
    trait: { en: "Hinge city of the river / sea corridor", zh: "地中海和长江重要城市" },
    tagline: {
      en: "The mountain-girdled inland fortress that holds the long corridor open from one end.",
      zh: "被山缠绕的内陆要塞——它从一端把那条狭长走廊撑开。",
    },
    intro: {
      en: "Constantinople and Chongqing are the same job description: a heavily defensible city at the head of a long civilizational corridor, with a population large enough to need its own dialect and small enough to feel besieged. Constantinople held the eastern Mediterranean against everything for a thousand years. Chongqing held wartime China against Japan when Nanjing and Wuhan fell. Both are gigantic, vertical, fog-bound, and proud of how spicy their food is.",
      zh: "君士坦丁堡与重庆，是同一份职位描述：长走廊源头的一座重防御之城，人口足以拥有自己的方言，又小到永远感觉「在被围攻」。君士坦丁堡顶住东地中海一千年；重庆在南京、武汉沦陷后顶住战时中国。两地都巨型、垂直、雾气缭绕，并以自家饮食的辣劲为豪。",
    },
    parallels: [
      { en: "A topography that turns the city into a natural fortress.", zh: "把城市变成天然要塞的地形。" },
      { en: "Position at the head of a riverine or seafaring corridor.", zh: "处于河流或海上走廊的咽喉。" },
      { en: "A reputation for grit, spice, and surviving the apocalypse.", zh: "以坚韧、辣味与「劫后犹生」著称。" },
      { en: "Late wartime capital duty (Chongqing 1937–46; Constantinople many times).", zh: "战时陪都之责（重庆 1937—46；君士坦丁堡多次）。" },
    ],
    divergences: [
      { en: "Constantinople is now Istanbul, a city of 16m; Chongqing is the world's largest municipal area.", zh: "君士坦丁堡今为伊斯坦布尔，1600 万人口；重庆是世界最大「市」级行政体。" },
      { en: "Constantinople was emperor; Chongqing was emperor-in-exile.", zh: "君士坦丁堡是皇帝；重庆是「行宫」。" },
    ],
    history: [
      { era: { en: "Foundation", zh: "立基" }, china: { en: "Pre-Qin — Ba kingdom capital.", zh: "先秦——巴国故都。" }, europe: { en: "330 — Constantine founds his city.", zh: "330——君士坦丁立城。" } },
      { era: { en: "Defensive zenith", zh: "防御之巅" }, china: { en: "1937–46 — wartime capital of the Republic of China.", zh: "1937—46——中华民国战时首都。" }, europe: { en: "717 — withstands Arab siege; 1453 — finally falls.", zh: "717——抵御阿拉伯围攻；1453——终破。" } },
      { era: { en: "Modern role", zh: "近代角色" }, china: { en: "1997 — direct-administered municipality; 32m people.", zh: "1997——直辖市；3200 万人。" }, europe: { en: "1923 — Republican Turkey; capital moves to Ankara.", zh: "1923——共和土耳其；首都迁安卡拉。" } },
    ],
    modern: {
      en: "Both are still strategically gigantic. Both are the place you fall back to when the rest of the empire is on fire.",
      zh: "两地至今仍战略巨大——都是「当帝国其余在燃烧时，你回到的那座城」。",
    },
    reading: [
      { title: "Constantinople: City of the World's Desire", author: "Philip Mansel", year: "1995" },
      { title: "Chongqing: Bombing the Wartime Capital", author: "Stephen MacKinnon", year: "2008" },
    ],
  },

  {
    id: 15,
    slug: "shanxi-hungary",
    kind: "region",
    axis: "other",
    china: { en: "Shanxi", zh: "山西" },
    europe: { en: "Hungary", zh: "匈牙利" },
    trait: { en: "Strong Xiongnu / Hunnic substrate", zh: "匈奴人影响" },
    tagline: {
      en: "Two basins that the same horse-archer empire passed through — and that still speak slightly differently because of it.",
      zh: "两片盆地——同一支骑射帝国从这里经过——至今说话仍因此略有不同。",
    },
    intro: {
      en: "Shanxi and Hungary share a startling demographic fact: both received deep gene-and-language influence from the steppe horsemen who Europeans called Huns and the Chinese called Xiongnu. Shanxi's loess basin was the corridor through which steppe peoples entered the Chinese heartland; the Hungarian plain was the western terminus of the same migration. Both regions sit just east-or-west of a major continental empire's heart, both have unusual cuisines, both are slightly mistrusted as a result.",
      zh: "山西与匈牙利共享一个惊人的人口学事实：欧洲人称作匈人、中国人称作匈奴的草原骑士，对两地的基因与语言都留下深刻影响。山西的黄土盆地是草原民族进入华夏的通道；匈牙利大平原则是同一支迁徙的西端。两地都恰好位于一个大陆帝国心脏的东侧或西侧，都有不寻常的饮食，因此都被各自的大邻居略带不安地看着。",
    },
    parallels: [
      { en: "Significant steppe-nomad genetic substrate.", zh: "显著的草原民族基因底层。" },
      { en: "A reputation as merchant-banker peoples.", zh: "以「商人—银行家」族群闻名。" },
      { en: "Strong distinct cuisine (Shanxi noodles; Hungarian paprika).", zh: "强烈的独特饮食（山西面食；匈牙利红椒粉）。" },
      { en: "Position at the inland gateway of their civilization.", zh: "位于各自文明的内陆门户。" },
    ],
    divergences: [
      { en: "Hungarian is Uralic, not Indo-European; Shanxi speaks Jin dialect, Sinitic.", zh: "匈牙利语属乌拉尔语系，非印欧；山西话为晋语，仍属汉语。" },
      { en: "Hungary is a sovereign state; Shanxi a Chinese province.", zh: "匈牙利为主权国；山西为中国一省。" },
    ],
    history: [
      { era: { en: "Steppe pressure", zh: "草原压力" }, china: { en: "Han–Tang — Xiongnu raids and integration.", zh: "汉至唐——匈奴侵扰与融合。" }, europe: { en: "5th c. — Attila's Huns; 9th c. — Magyars arrive.", zh: "5 世纪——阿提拉之匈人；9 世纪——马扎尔人抵达。" } },
      { era: { en: "Merchant era", zh: "商业时代" }, china: { en: "Ming–Qing — Shanxi piao-hao (proto-banks) finance the empire.", zh: "明清——晋商票号融资帝国。" }, europe: { en: "1800s — Budapest as Habsburg banking capital.", zh: "1800 年代——布达佩斯为哈布斯堡金融重镇。" } },
      { era: { en: "Modern role", zh: "近代角色" }, china: { en: "Today — coal heartland of China.", zh: "今天——中国煤炭腹地。" }, europe: { en: "Today — EU/NATO member, friction-prone.", zh: "今天——欧盟与北约成员，有摩擦。" } },
    ],
    modern: {
      en: "Both regions are economically tied to fuels (coal, gas pipelines) and culturally tied to a fierce sense of distinctness.",
      zh: "两地经济都与燃料绑定（煤炭、天然气管道），文化上都拥有强烈的「我们不一样」之自觉。",
    },
    reading: [
      { title: "Empires of the Silk Road", author: "Christopher Beckwith", year: "2009" },
      { title: "A History of Hungary", author: "Peter Sugar", year: "1990" },
    ],
  },

  {
    id: 16,
    slug: "gansu-poland",
    kind: "region",
    axis: "germanic-northern",
    china: { en: "Gansu / Qinghai / Ningxia", zh: "甘青宁" },
    europe: { en: "Poland", zh: "波兰" },
    trait: { en: "A continental march that everyone has to pass through", zh: "大陆走廊，谁都要经过" },
    tagline: {
      en: "The continental crossroads — neither east nor west, but the corridor between.",
      zh: "大陆十字路口——非东亦非西，而是两者之间的走廊。",
    },
    intro: {
      en: "Gansu-Qinghai-Ningxia and Poland sit on each civilization's continental corridor — the flat, exposed plain that every great army marches across on its way to somewhere else. Both were repeatedly partitioned, repeatedly invaded, and developed an exceptional capacity for cultural survival in spite of regimes. Both are devoutly religious (Tibetan Buddhism + Islam in Gansu; Catholic in Poland) in a way the rest of the civilization sometimes finds awkward.",
      zh: "甘青宁与波兰，坐落在各自文明的「大陆走廊」之上——一片平展、暴露的平原，每一支大军都要从这里行军去别处。两地都被反复瓜分、反复入侵，却发展出超强的「无论谁来当政都能文化存续」之能力。两地都虔诚（甘青宁的藏传佛教与伊斯兰；波兰的天主教），其余文明有时对此感到尴尬。",
    },
    parallels: [
      { en: "A continental highway that everyone has to cross.", zh: "一条所有人都得穿越的大陆高速路。" },
      { en: "Repeated partitions and migrations.", zh: "屡次被瓜分与迁徙。" },
      { en: "Strong religious identity that survives every secular regime.", zh: "在任何世俗政权之下都存活的宗教身份。" },
      { en: "A military self-image: stubborn, unbreakable.", zh: "顽强、不可被压垮的军事自我形象。" },
    ],
    divergences: [
      { en: "Poland is a sovereign state of 38m; the Gansu corridor is sparsely populated.", zh: "波兰为 3800 万人主权国；甘青宁人口稀疏。" },
      { en: "Poland's Catholic; the corridor is Buddhist–Muslim mosaic.", zh: "波兰天主教；走廊为佛—伊斯兰拼贴。" },
    ],
    history: [
      { era: { en: "Imperial frontier", zh: "帝国边疆" }, china: { en: "Han onwards — Hexi Corridor military colonies.", zh: "汉以降——河西走廊军屯。" }, europe: { en: "10th c. — Christianisation under Mieszko I.", zh: "10 世纪——梅什科一世受洗，波兰基督化。" } },
      { era: { en: "Partition era", zh: "瓜分时代" }, china: { en: "Tang–Song — held, lost, re-conquered.", zh: "唐宋——得而复失，失而复得。" }, europe: { en: "1772–95 — three partitions by Russia, Prussia, Austria.", zh: "1772—95——遭俄、普、奥三次瓜分。" } },
      { era: { en: "Modern resurgence", zh: "近代复兴" }, china: { en: "Today — Belt-and-Road logistics corridor.", zh: "今天——「一带一路」物流走廊。" }, europe: { en: "Today — EU's industrial back-office, growing fast.", zh: "今天——欧盟的工业后台，增长迅猛。" } },
    ],
    modern: {
      en: "Both are pivotal to logistics on a continental scale and both have learned to convert their geographic vulnerability into strategic indispensability.",
      zh: "两地都对大陆尺度的物流至关重要；两地都已学会把「地理脆弱」转化为「战略不可或缺」。",
    },
    reading: [
      { title: "God's Playground: A History of Poland", author: "Norman Davies", year: "1981" },
      { title: "The Hexi Corridor: A Cultural History", author: "Yang Tongbing", year: "—" },
    ],
  },

  {
    id: 17,
    slug: "luoyang-athens",
    kind: "city",
    axis: "other",
    china: { en: "Luoyang", zh: "洛阳" },
    europe: { en: "Athens", zh: "雅典" },
    trait: { en: "Birthplace of the civilization", zh: "文明发源地" },
    tagline: {
      en: "The first city — where the language that everything else borrowed was spoken first.",
      zh: "第一座城——之后一切所借用的那种语言，最初在此被说出。",
    },
    intro: {
      en: "Luoyang and Athens are the deep origins. Athens isn't Greece's largest city — Thessaloniki and Piraeus are bigger. Luoyang isn't China's biggest city. But Athens invented philosophy, drama, democracy, citizenship; Luoyang was capital under nine dynasties and watched Confucianism, Daoism, and Chinese Buddhism take their classical shape. Both are pilgrim cities — places people go to remember what a civilization originally believed about itself.",
      zh: "洛阳与雅典，是各自文明深层的起点。雅典并非希腊最大都市——塞萨洛尼基与比雷埃夫斯都更大。洛阳也并非中国最大都市。但雅典创造了哲学、戏剧、民主、公民身份；洛阳则在「九朝古都」的身位上，见证了儒道与汉传佛教取其经典形态。两地都是朝圣城——人们前往那里，去回忆一个文明最初对自己的相信。",
    },
    parallels: [
      { en: "Smaller than the maritime modern capitals — but spiritually more senior.", zh: "比近代海上都会更小——但精神上更年长。" },
      { en: "A canonical philosophical / religious moment.", zh: "一段经典的哲学／宗教时刻。" },
      { en: "Heavy use by every later regime to claim legitimacy.", zh: "为后世一切政权用以索取合法性。" },
      { en: "A modern existence as heritage tourism + university town.", zh: "在今天作为「遗产旅游 + 大学城」存在。" },
    ],
    divergences: [
      { en: "Athens stays the capital; Luoyang doesn't.", zh: "雅典至今是首都；洛阳已不是。" },
      { en: "Athens's canon is philosophy; Luoyang's is bureaucracy + ritual.", zh: "雅典经典是哲学；洛阳经典是官僚与礼制。" },
    ],
    history: [
      { era: { en: "Classical age", zh: "古典时代" }, china: { en: "Eastern Zhou + Han + Tang — Luoyang at peak.", zh: "东周、东汉、唐——洛阳至盛。" }, europe: { en: "5th c. BC — Periclean Athens.", zh: "公元前 5 世纪——伯里克利时代之雅典。" } },
      { era: { en: "Religious turn", zh: "宗教转向" }, china: { en: "1st c. AD — Buddhism enters China via Luoyang.", zh: "公元 1 世纪——佛教经洛阳入华。" }, europe: { en: "AD 1–5 c. — Athens absorbs Christianity, Neoplatonism.", zh: "公元 1—5 世纪——雅典吸纳基督教与新柏拉图主义。" } },
      { era: { en: "Modern memory", zh: "近代记忆" }, china: { en: "Today — Longmen Grottoes, peony festivals.", zh: "今天——龙门石窟、牡丹花会。" }, europe: { en: "Today — Acropolis Museum, classical festivals.", zh: "今天——卫城博物馆、古典戏剧节。" } },
    ],
    modern: {
      en: "Both cities now sell memory — but the memory is real and shaped a civilization.",
      zh: "两地今天都在「贩卖记忆」——但这记忆是真实的，曾塑造一整个文明。",
    },
    reading: [
      { title: "The Greeks and Greek Civilization", author: "Jacob Burckhardt", year: "1872" },
      { title: "China's Cosmopolitan Empire: The Tang Dynasty", author: "Mark Edward Lewis", year: "2009" },
    ],
  },

  {
    id: 18,
    slug: "tianjin-switzerland",
    kind: "region",
    axis: "other",
    china: { en: "Tianjin", zh: "天津" },
    europe: { en: "Switzerland", zh: "瑞士" },
    trait: { en: "Quiet wealth, careful banking, neighbour to the capital", zh: "安静的财富，谨慎的金融，靠近首都" },
    tagline: {
      en: "The cautious neighbour of the political capital — money, watches, and an inch of irony.",
      zh: "政治首都旁谨慎的邻居——金钱、钟表，与一寸讽刺。",
    },
    intro: {
      en: "Tianjin and Switzerland are an awkward but interesting pair: both sit just next door to a large political capital, both have a reputation for cautious money-handling, both speak with a slight twang that the capital finds amusing, both feel a little overlooked despite handling a startling share of the wealth. Switzerland is the safe-deposit box of Europe; Tianjin held similar safe-deposit functions during the late Qing and early Republic, and even today is China's largest port of foreign trade by tonnage.",
      zh: "天津与瑞士是一对略显尴尬却有趣的搭档：两地都紧邻一座大政治首都；都以「金钱处理上谨慎」著称；说话都有口音被首都觉得「逗」；都觉得自己处理着出人意料份额的财富，却被略为忽略。瑞士是欧洲的保险箱；天津在晚清与民国曾承担相似职能；今日仍是中国按吨位计最大的对外贸易港。",
    },
    parallels: [
      { en: "Adjacent to a large political capital.", zh: "紧邻一座大政治首都。" },
      { en: "Reputation for cautious finance.", zh: "以谨慎金融著称。" },
      { en: "A distinct local accent / dialect.", zh: "鲜明的本地口音／方言。" },
      { en: "Outsized international trade for the population size.", zh: "国际贸易体量远超人口比例。" },
    ],
    divergences: [
      { en: "Switzerland is mountainous; Tianjin is a coastal flat.", zh: "瑞士多山；天津是滨海平原。" },
      { en: "Swiss neutrality is national doctrine; Tianjin is a Chinese municipality.", zh: "瑞士中立是国策；天津是中国一直辖市。" },
    ],
    history: [
      { era: { en: "Cosmopolitan period", zh: "国际都会期" }, china: { en: "1860–1949 — eight foreign concessions in Tianjin.", zh: "1860—1949——天津八国租界。" }, europe: { en: "1648 — Treaty of Westphalia recognises Swiss neutrality.", zh: "1648——《威斯特伐利亚和约》确认瑞士中立。" } },
      { era: { en: "Banking age", zh: "金融时代" }, china: { en: "1900s — bond market and silver trade hub.", zh: "1900 年代——证券与白银交易枢纽。" }, europe: { en: "1900s — Zurich + Geneva as global banking centres.", zh: "1900 年代——苏黎世与日内瓦为全球金融中心。" } },
      { era: { en: "Modern role", zh: "近代角色" }, china: { en: "Today — China's industrial port for the capital region.", zh: "今天——京津冀工业出海港。" }, europe: { en: "Today — global capital management + UN, WHO.", zh: "今天——全球资产管理 + 联合国、世卫总部。" } },
    ],
    modern: {
      en: "Both maintain a careful, almost private quality. They don't shout — and that's the point.",
      zh: "两地都保持一种谨慎而近乎私密的气质。它们不喧哗——这正是用意。",
    },
    reading: [
      { title: "Tianjin Under Nine Flags", author: "Pierre Singaravélou", year: "2017" },
      { title: "The Swiss, the Gold and the Dead", author: "Jean Ziegler", year: "1997" },
    ],
  },

  {
    id: 19,
    slug: "hebei-netherlands",
    kind: "region",
    axis: "germanic-northern",
    china: { en: "Hebei", zh: "河北" },
    europe: { en: "Netherlands", zh: "荷兰" },
    trait: { en: "Another coastal lowland", zh: "另一个沿海地区" },
    tagline: {
      en: "Northern lowlands that drained the swamps, paved the ports, and engineered their way out of the sea.",
      zh: "北方低地——抽干沼泽、铺设港口、用工程把自己拖出大海。",
    },
    intro: {
      en: "Hebei and the Netherlands are both the low country of their civilization's northern half. Both have a coastline they had to engineer their way around — dyke building, polder construction, port dredging. Both surround a great capital region but never quite become it. Both have a populace famous for hard work, pragmatic engineering, and quietly running a chunk of national logistics nobody else wants to bother with.",
      zh: "河北与荷兰，都是各自文明北半部的「低国」。两地的海岸线都需要工程化处理——筑堤、围垦、清淤。两地都包围着一个大首都圈，却从未真正成为首都圈本身。两地的居民都以勤奋、务实工程、以及「悄悄运营着别人懒得管的国家级物流」而闻名。",
    },
    parallels: [
      { en: "Lowland coastal geography requiring active engineering.", zh: "需要主动工程的低地海岸地形。" },
      { en: "Surrounding a great capital region.", zh: "环绕一片巨大的首都区。" },
      { en: "Strong logistics + ports + steel.", zh: "强物流、强港、强钢铁。" },
      { en: "Reputation for thrift and engineering pragmatism.", zh: "以节俭与工程务实著称。" },
    ],
    divergences: [
      { en: "The Netherlands is sovereign; Hebei is a province.", zh: "荷兰为主权国；河北为中国一省。" },
      { en: "Dutch trade was global empire-building; Hebei was inland-facing.", zh: "荷兰贸易曾是全球帝国建造；河北则更多面向内陆。" },
    ],
    history: [
      { era: { en: "Ancient role", zh: "古代角色" }, china: { en: "Yan kingdom (Warring States) — strong northern state.", zh: "战国——燕国——强势北方诸侯。" }, europe: { en: "Roman Frisia — frontier lowland.", zh: "罗马时代——弗里西亚边疆。" } },
      { era: { en: "Engineering age", zh: "工程时代" }, china: { en: "Sui–Yuan — Grand Canal terminus.", zh: "隋至元——京杭大运河终点。" }, europe: { en: "1600s — Golden Age of Dutch shipbuilding and finance.", zh: "1600 年代——荷兰造船与金融的黄金时代。" } },
      { era: { en: "Modern role", zh: "近代角色" }, china: { en: "Today — main steel + logistics hinterland of Beijing.", zh: "今天——北京之钢铁与物流腹地。" }, europe: { en: "Today — Port of Rotterdam, Europe's largest.", zh: "今天——欧洲第一大港鹿特丹。" } },
    ],
    modern: {
      en: "Both regions punch in logistics, agriculture, and steel, and both are now trying to convert that legacy into greener industries.",
      zh: "两地都在物流、农业与钢铁上发力，并都在尝试把这一遗产转化为更绿色的产业。",
    },
    reading: [
      { title: "The Embarrassment of Riches", author: "Simon Schama", year: "1987" },
      { title: "Yan: A Frontier Kingdom of Ancient China", author: "various", year: "—" },
    ],
  },

  {
    id: 20,
    slug: "guangxi-romania",
    kind: "region",
    axis: "latin-baiyue",
    china: { en: "Guangxi", zh: "广西" },
    europe: { en: "Romania", zh: "罗马尼亚" },
    trait: { en: "An inland Latin / BaiYue cousin without strong sea access", zh: "沿海属性不强的拉丁和百越" },
    tagline: {
      en: "The Latin cousin without the sea — Romance in landlocked karst.",
      zh: "没有海的拉丁表亲——岩溶山地中的「罗曼斯」。",
    },
    intro: {
      en: "Guangxi and Romania are the inland members of the Latin / BaiYue family. Both speak languages that linguistically belong to the larger Latin / BaiYue group, but both lack the maritime gene that their sister regions converted into empires. Romania is Romance with a Slavic neighbourhood; Guangxi is Zhuang-and-Cantonese culture inside a non-maritime karst landscape. The result in both cases is a more rural, more poetic, more song-driven culture.",
      zh: "广西与罗马尼亚，是「拉丁／百越」家族中的内陆成员。两地的语言都在语言学上属于拉丁／百越的更大家族，却都缺少使其姐妹地区铸成帝国的那一段海洋基因。罗马尼亚是被斯拉夫邻居包围的罗曼斯；广西是嵌入在非海洋的喀斯特地貌中的壮—粤文化。结果都是更乡村、更诗性、更歌谣化的文化。",
    },
    parallels: [
      { en: "Latin / BaiYue language family, inland variant.", zh: "拉丁／百越语族的内陆变体。" },
      { en: "A rich folk music tradition where the rest of the family went into trade.", zh: "其余兄弟去做生意时，他们去做民歌。" },
      { en: "Karst / Carpathian landscapes that protect dialect islands.", zh: "喀斯特／喀尔巴阡景观，保护方言孤岛。" },
      { en: "A reputation as a poorer-but-purer cousin.", zh: "「更穷但更纯」的表亲名声。" },
    ],
    divergences: [
      { en: "Romania has Black Sea access; Guangxi has narrow southern Beibu Bay.", zh: "罗马尼亚有黑海出海；广西仅有窄狭的北部湾。" },
      { en: "Romania's Orthodox; Guangxi is Buddhist + folk.", zh: "罗马尼亚信东正教；广西是佛教与民间信仰。" },
    ],
    history: [
      { era: { en: "Ancient stratum", zh: "古层" }, china: { en: "BaiYue tribal kingdoms.", zh: "百越部族王国。" }, europe: { en: "Dacian kingdom; Roman province AD 106.", zh: "达契亚王国；公元 106 年成罗马行省。" } },
      { era: { en: "Frontier era", zh: "边疆时代" }, china: { en: "Tang–Song — semi-autonomous Zhuang chieftains.", zh: "唐宋——半自治壮族土司。" }, europe: { en: "Medieval — Wallachia, Moldavia between empires.", zh: "中世纪——瓦拉几亚、摩尔达维亚在诸帝国之间。" } },
      { era: { en: "Modern role", zh: "近代角色" }, china: { en: "Today — gateway to ASEAN; Beibu Bay opening.", zh: "今天——通往东盟的门户；北部湾开放。" }, europe: { en: "Today — EU member; Bucharest tech scene.", zh: "今天——欧盟成员；布加勒斯特科技业崛起。" } },
    ],
    modern: {
      en: "Both regions are now finding ways to monetise their cultural distinctness: tourism, agriculture, and a quietly competent tech sector.",
      zh: "两地正在把「文化独特性」变现：旅游、农业，以及一支低调能干的科技业。",
    },
    reading: [
      { title: "The Romanians: A History", author: "Vlad Georgescu", year: "1991" },
      { title: "Han Migration to the Far Southwest", author: "C. Patterson Giersch", year: "2006" },
    ],
  },

  {
    id: 21,
    slug: "xinjiang-turkey",
    kind: "region",
    axis: "other",
    china: { en: "Xinjiang", zh: "新疆" },
    europe: { en: "Turkey", zh: "土耳其" },
    trait: { en: "Islamic civilizational hinge on the eastern frontier", zh: "伊斯兰" },
    tagline: {
      en: "Where Turkic languages, Islamic civilization, and a great inland empire meet.",
      zh: "突厥语、伊斯兰文明与大陆帝国相会的边疆。",
    },
    intro: {
      en: "Xinjiang and Turkey are the Turkic-speaking, Islamic-civilizational pivots between their respective worlds and an older, deeper East. Both sit on top of the historic Silk Road; both are home to mosques, bazaars, and a cuisine of lamb, naan, dumplings, and tea. Both have a complicated, century-long relationship between their secular nation-state framework and their religious population. Both run along an east-west desert axis that forces all civilization to bunch along oases.",
      zh: "新疆与土耳其，是各自世界与更老更深的「东方」之间的突厥语、伊斯兰文明枢纽。两地都坐落在历史上的丝绸之路之上；两地都密布清真寺、巴扎与一套羊肉—馕—饺子—茶的饮食。两地都在「世俗民族国家框架」与「宗教人口」之间，存在长达百年的复杂关系。两地都沿一条东西向的沙漠轴线展开，迫使所有文明聚集在绿洲一带。",
    },
    parallels: [
      { en: "Turkic-language family origin.", zh: "突厥语族同源。" },
      { en: "Sunni Muslim majority population.", zh: "以逊尼派穆斯林为主体人口。" },
      { en: "An east-west desert / steppe corridor with oasis cities.", zh: "东西向沙漠／草原走廊，沿线为绿洲城市。" },
      { en: "Crossroads between Sinic / European world and the deeper Islamic world.", zh: "处于「华夏／欧洲世界」与更深之伊斯兰世界之间的十字路口。" },
    ],
    divergences: [
      { en: "Turkey is a sovereign nation of 85m; Xinjiang is a Chinese region of 25m.", zh: "土耳其为 8500 万人主权国；新疆为 2500 万人的中国行政区。" },
      { en: "Turkey's Bosphorus; Xinjiang's continental landlock.", zh: "土耳其守博斯普鲁斯；新疆是大陆深锁。" },
    ],
    history: [
      { era: { en: "Silk Road age", zh: "丝路时代" }, china: { en: "Han–Tang — protectorates over oasis kingdoms.", zh: "汉至唐——对绿洲诸国的都护府。" }, europe: { en: "Anatolian Seljuk + Byzantine borderlands.", zh: "安纳托利亚塞尔柱与拜占庭之间的边疆。" } },
      { era: { en: "Islamic consolidation", zh: "伊斯兰巩固" }, china: { en: "Karakhanid + Chagatai khanates.", zh: "喀喇汗、察合台汗国。" }, europe: { en: "1453 — Ottoman conquest of Constantinople.", zh: "1453——奥斯曼克君士坦丁堡。" } },
      { era: { en: "Modern era", zh: "近代" }, china: { en: "1949 — incorporated into PRC; ongoing development push.", zh: "1949——并入中华人民共和国；持续开发推进。" }, europe: { en: "1923 — Republic of Turkey founded.", zh: "1923——土耳其共和国建立。" } },
    ],
    modern: {
      en: "Both regions sit on enormous logistics value, both are politically delicate, both serve as the eastern hinge between civilizations.",
      zh: "两地都坐拥巨大的物流价值；两地政治都微妙；两地都是文明之间的东向枢纽。",
    },
    reading: [
      { title: "Empires of the Silk Road", author: "Christopher Beckwith", year: "2009" },
      { title: "Turkey: A Modern History", author: "Erik J. Zürcher", year: "2017" },
    ],
  },

  {
    id: 22,
    slug: "hainan-cyprus",
    kind: "region",
    axis: "other",
    china: { en: "Hainan", zh: "海南" },
    europe: { en: "Cyprus", zh: "塞浦路斯" },
    trait: { en: "Island periphery", zh: "海岛" },
    tagline: {
      en: "The tropical island the empire forgot about, then remembered as a beach.",
      zh: "帝国先遗忘、后想起作为度假沙滩的热带海岛。",
    },
    intro: {
      en: "Hainan and Cyprus are the tropical-Mediterranean islands their civilizations sometimes forgot they owned. Both spent a long medieval period as places of exile or strategic outposts, both are now in a long economic conversion toward tourism, offshore finance, and (in Hainan's case) duty-free shopping. Both are at the very southern edge of their civilizational map and feel a little laid-back about it.",
      zh: "海南与塞浦路斯，是各自文明偶尔会忘记自己拥有的热带／地中海海岛。两地都曾在漫长的中世纪期间扮演流放地或战略前哨；两地如今都在朝旅游、离岸金融与（海南）免税购物长期转型。两地都位于各自文明地图的最南端，并对此颇为悠然。",
    },
    parallels: [
      { en: "Tropical / sub-tropical island in the south.", zh: "南方热带或亚热带海岛。" },
      { en: "Historically exile or military outpost.", zh: "历史上为流放或军事前哨。" },
      { en: "Modern conversion to tourism + offshore role.", zh: "近代向旅游与离岸功能转型。" },
      { en: "A distinct local creole / dialect.", zh: "鲜明的本地克里奥尔语或方言。" },
    ],
    divergences: [
      { en: "Cyprus is sovereign + divided; Hainan is a Chinese province.", zh: "塞浦路斯为主权国且分治；海南是中国一省。" },
      { en: "Cyprus has 1.3m people; Hainan has 10m.", zh: "塞浦路斯 130 万人；海南 1000 万人。" },
    ],
    history: [
      { era: { en: "Ancient role", zh: "古代角色" }, china: { en: "Han — exile destination for officials.", zh: "汉——官员流放地。" }, europe: { en: "Mycenaean + Phoenician trading post.", zh: "迈锡尼与腓尼基贸易站。" } },
      { era: { en: "Frontier age", zh: "前哨时代" }, china: { en: "Song–Ming — naval outpost.", zh: "宋至明——水师前哨。" }, europe: { en: "1191 — Crusader Kingdom; 1571 — Ottoman.", zh: "1191——十字军王国；1571——奥斯曼。" } },
      { era: { en: "Modern era", zh: "近代" }, china: { en: "1988 — separated from Guangdong as a province; SEZ.", zh: "1988——从广东分出，建省、设特区。" }, europe: { en: "1960 — independent; 1974 — division.", zh: "1960——独立；1974——分裂。" } },
    ],
    modern: {
      en: "Both islands today are tropical resort economies overshadowed by political proximity to a larger power.",
      zh: "两座海岛今天都是热带度假经济体——并都因紧邻更大的大国而身处政治阴影中。",
    },
    reading: [
      { title: "Cyprus: A Modern History", author: "William Mallinson", year: "2005" },
      { title: "Hainan: A Frontier Province", author: "Anne Csete", year: "2001" },
    ],
  },

  {
    id: 23,
    slug: "liaoning-ruhr",
    kind: "region",
    axis: "germanic-northern",
    china: { en: "Liaoning", zh: "辽宁" },
    europe: { en: "Ruhr (Germany)", zh: "德国鲁尔区" },
    trait: { en: "Heavy industrial belt", zh: "工业区" },
    tagline: {
      en: "Coal, steel, and the cathedral hush of a factory floor — twice.",
      zh: "煤、钢，与工厂车间内大教堂般的肃静——两次。",
    },
    intro: {
      en: "Liaoning and the Ruhr are the same industrial cathedral built in two scripts. Both are coal-and-steel heartlands that powered an entire civilization through its industrial century. Both produced a working-class culture that combined heavy machinery, strong unionism (or its functional equivalent), distinctive food, and a brusque dialect. Both have been struggling for a generation now with the same problem: what does an industrial region do once the rest of the world has moved up the value chain?",
      zh: "辽宁与鲁尔区，是同一座工业大教堂在两种文字下的版本。两地都是煤钢腹地，为各自文明驱动了整个工业世纪。两地都孕育出工人阶级文化——重型机械、强工会（或其功能等价物）、独特饮食、直来直去的方言。两地都在为同一道题挣扎了一代人：当全世界都在价值链上「往上爬」，一个工业区该怎么活？",
    },
    parallels: [
      { en: "Coal-and-steel industrial vocation.", zh: "煤钢工业立身。" },
      { en: "Working-class culture, brusque dialect, hearty food.", zh: "工人阶级文化、爽直方言、扎实饮食。" },
      { en: "A long structural decline in the late 20th century.", zh: "20 世纪后期的结构性长衰。" },
      { en: "A current attempt at reinvention through tech, services, green industry.", zh: "今天通过科技、服务业、绿色产业重塑自身。" },
    ],
    divergences: [
      { en: "The Ruhr's a German region; Liaoning is a Chinese province with imperial Manchu memory.", zh: "鲁尔为德国地区；辽宁为中国一省，且承载满洲皇家记忆。" },
      { en: "Ruhr's conversion succeeded; Liaoning's is ongoing.", zh: "鲁尔的转型已大致完成；辽宁正在进行。" },
    ],
    history: [
      { era: { en: "Boom", zh: "繁荣" }, china: { en: "1930s–80s — China's first industrial base.", zh: "1930—80 年代——中国第一个工业基地。" }, europe: { en: "1850s–1970s — heart of German industry.", zh: "1850—1970 年代——德国工业心脏。" } },
      { era: { en: "Crisis", zh: "危机" }, china: { en: "1990s — SOE restructuring, mass layoffs.", zh: "1990 年代——国企改制，大规模下岗。" }, europe: { en: "1970s–80s — Stahlkrise, coal closures.", zh: "1970—80 年代——钢铁危机，关停煤矿。" } },
      { era: { en: "Reinvention", zh: "再造" }, china: { en: "2010s — Northeast Revitalisation policy.", zh: "2010 年代——东北振兴。" }, europe: { en: "1990s+ — universities, parks, design.", zh: "1990 年代以来——大学、园区、设计。" } },
    ],
    modern: {
      en: "Both are masterclasses in what it takes to dismantle a heavy-industrial economy without dismantling the people in it.",
      zh: "两地都是「如何拆解重工业经济而不拆掉人」的范例研习。",
    },
    reading: [
      { title: "The Wages of Destruction", author: "Adam Tooze", year: "2006" },
      { title: "Northeast China's Industrial Transformation", author: "Carolyn Cartier", year: "2015" },
    ],
  },

  {
    id: 24,
    slug: "jilin-finland",
    kind: "region",
    axis: "germanic-northern",
    china: { en: "Jilin", zh: "吉林" },
    europe: { en: "Finland", zh: "芬兰" },
    trait: { en: "High-latitude region", zh: "高纬度" },
    tagline: {
      en: "Long winters, careful engineering, an alphabet of forests.",
      zh: "漫长的冬天、精细的工程、一座座森林组成的字母表。",
    },
    intro: {
      en: "Jilin and Finland sit at the latitude where the day shortens to a sigh in winter. Both are forested, lake-dotted, sparsely peopled, with a strong tradition of engineering, careful institutions, and surprising contributions to design and education. Both have a historically uneasy relationship with a vast continental neighbour. Both still feel a sense of distinct, almost private, identity.",
      zh: "吉林与芬兰，处于冬天日照短到只剩一声叹息的纬度。两地都森林密布、湖泊点缀、人口稀疏，工程传统强，制度谨慎，对设计与教育也有令人惊讶的贡献。两地与一个广袤的大陆邻居都有过历史上的不安。两地至今仍保有一种鲜明、近乎私密的身份感。",
    },
    parallels: [
      { en: "High latitude, forested landscape.", zh: "高纬度、森林景观。" },
      { en: "Strong engineering + education reputation.", zh: "工程与教育的强势声誉。" },
      { en: "An uneasy relationship with a vast neighbour.", zh: "与广袤邻居之间历史性的不安。" },
      { en: "Small but high-quality cultural output.", zh: "体量小但质量高的文化产出。" },
    ],
    divergences: [
      { en: "Finland is sovereign; Jilin is a Chinese province.", zh: "芬兰为主权国；吉林为中国一省。" },
      { en: "Finnish is Uralic; Jilin speaks Northeastern Mandarin + Korean enclaves.", zh: "芬兰语属乌拉尔语系；吉林讲东北官话，且有朝鲜族聚居区。" },
    ],
    history: [
      { era: { en: "Frontier era", zh: "边疆时代" }, china: { en: "Manchu homeland — Jilin City an old garrison.", zh: "满洲故地——吉林城为旧驻防地。" }, europe: { en: "Swedish then Russian rule before 1917.", zh: "1917 年之前，先后属瑞典与俄罗斯。" } },
      { era: { en: "Modern build-out", zh: "近代建设" }, china: { en: "1950s — Soviet-aided industrialisation (autos, chemicals).", zh: "1950 年代——苏联援建工业化（汽车、化工）。" }, europe: { en: "1950s — rapid post-war industrialisation.", zh: "1950 年代——战后高速工业化。" } },
      { era: { en: "Modern role", zh: "近代角色" }, china: { en: "Today — corn belt + ice tourism.", zh: "今天——玉米带 + 冰雪旅游。" }, europe: { en: "Today — Nokia legacy + Sisu + saunas.", zh: "今天——诺基亚遗产、Sisu 精神与桑拿。" } },
    ],
    modern: {
      en: "Both regions sell winter as a feature, not a bug — Harbin Ice Festival, Lapland Christmas.",
      zh: "两地都把「冬天」卖成卖点而非毛病——哈尔滨冰雪节、拉普兰圣诞。",
    },
    reading: [
      { title: "Finland: A Cultural History", author: "Neil Kent", year: "2019" },
      { title: "The Manchu Way", author: "Mark Elliott", year: "2001" },
    ],
  },

  {
    id: 25,
    slug: "yungui-balkans",
    kind: "region",
    axis: "other",
    china: { en: "Yunnan / Guizhou / Sichuan", zh: "云贵川" },
    europe: { en: "The Balkans", zh: "巴尔干" },
    trait: { en: "Mountain mosaic of peoples and dialects", zh: "民族与方言的山地拼图" },
    tagline: {
      en: "A mountain quilt of peoples — same language family, same plate, never quite the same village.",
      zh: "一床山地的人口拼布——同一语系、同一菜系，却没有两个村是完全一样的。",
    },
    intro: {
      en: "Yunnan-Guizhou-Sichuan and the Balkans are the two great mountain mosaics where dozens of ethnic groups have nested in adjacent valleys for thousands of years. Both are at the edge of two larger civilizations (Chinese + Indian; European + Ottoman) and absorbed pieces of each. Both have spicy cuisines that are loved across their continent. Both are politically fragmented in cultural memory, even where the modern map is unified.",
      zh: "云贵川与巴尔干，是两片巨大的山地拼图——数十个民族在相邻山谷中已栖居数千年。两地都位于两个大文明之间的边缘（华夏与印度；欧洲与奥斯曼），都吸纳了两侧的部分。两地都有横扫整个大陆的辣味饮食。两地在文化记忆中都是政治上碎片化的，哪怕现代地图早已统一。",
    },
    parallels: [
      { en: "Mountain valleys preserving many ethnicities + dialects.", zh: "山谷保留多民族与多方言。" },
      { en: "On the edge of two larger civilizations.", zh: "位于两大文明之间的边缘。" },
      { en: "Spicy national cuisine loved continent-wide.", zh: "横扫大陆的辣味饮食。" },
      { en: "A historical memory of political fragmentation.", zh: "政治碎片化的历史记忆。" },
    ],
    divergences: [
      { en: "The Balkans are 8 sovereign states; Yungui-Sichuan are three Chinese provinces.", zh: "巴尔干为 8 个主权国；云贵川为中国三省。" },
      { en: "The Balkans straddle Christian / Muslim split; Yungui-Sichuan straddle Han / minority traditions.", zh: "巴尔干横跨基督教与伊斯兰；云贵川横跨汉族与少数民族传统。" },
    ],
    history: [
      { era: { en: "Ancient kingdoms", zh: "古代王国" }, china: { en: "Dian, Shu, Ba — pre-Qin local kingdoms.", zh: "滇、蜀、巴——先秦地方王国。" }, europe: { en: "Illyrian, Thracian, Dacian peoples.", zh: "伊利里亚、色雷斯、达契亚诸族。" } },
      { era: { en: "Mosaic age", zh: "拼图时代" }, china: { en: "Yuan–Ming — tusi (chieftain) system.", zh: "元明——土司制度。" }, europe: { en: "Ottoman millet system.", zh: "奥斯曼米利特制度。" } },
      { era: { en: "Modern era", zh: "近代" }, china: { en: "Today — coffee, EVs, lithium, tourism.", zh: "今天——咖啡、电动车、锂矿、旅游。" }, europe: { en: "Today — EU accession + tourism + diaspora remittances.", zh: "今天——入盟、旅游、侨汇。" } },
    ],
    modern: {
      en: "Both regions are now the most photogenic stretches of their civilization — and the most underestimated.",
      zh: "两地都是各自文明中最上镜的一段——也最被低估。",
    },
    reading: [
      { title: "The Balkans: A Short History", author: "Mark Mazower", year: "2000" },
      { title: "Forest of Pearls: Yunnan Borderlands", author: "C. P. Giersch", year: "2006" },
    ],
  },
];

export const getPair = (slug: string) => PAIRS.find((p) => p.slug === slug);
export const getNextPrevPair = (slug: string) => {
  const i = PAIRS.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? PAIRS[i - 1] : PAIRS[PAIRS.length - 1],
    next: i < PAIRS.length - 1 ? PAIRS[i + 1] : PAIRS[0],
  };
};
