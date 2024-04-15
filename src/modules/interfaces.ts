import { SocksProxyAgent } from "socks-proxy-agent"
import { HTMLElement } from "node-html-parser"
import { IntfRequestParams } from "./request"

export enum enuDomains {
    aa = "aa",
    abantether = "abantether",
    achareh = "achareh",
    activeidea = "activeidea",
    adleiranian = "adleiranian",
    adlpors = "adlpors",
    afkarnews = "afkarnews",
    aftabnews = "aftabnews",
    aghigh = "aghigh",
    agorgani = "agorgani",
    akharinkhabar = "akharinkhabar",
    akhbarelmi = "akhbarelmi",
    alef = "alef",
    alodoctor = "alodoctor",
    alomohtava = "alomohtava",
    amuzeshtak = "amuzeshtak",
    ana = "ana",
    andishemoaser = "andishemoaser",
    apademy = "apademy",
    aparat = "aparat",
    arakhabar = "arakhabar",
    arannews = "arannews",
    arazcloud = "arazcloud",
    ariananews = "ariananews",
    armanmeli = "armanmeli",
    armradio = "armradio",
    arongroups = "arongroups",
    arshehonline = "arshehonline",
    artanpress = "artanpress",
    aryanews = "aryanews",
    arzdigital = "arzdigital",
    arzfi = "arzfi",
    asblog = "asblog",
    asemooni = "asemooni",
    asiatech = "asiatech",
    asriran = "asriran",
    asrkhabar = "asrkhabar",
    asrpress = "asrpress",
    atiyeonline = "atiyeonline",
    avablog = "avablog",
    avalpardakht = "avalpardakht",
    avayekhazar = "avayekhazar",
    avayerodkof = "avayerodkof",
    ayandnews = "ayandnews",
    ayatemandegar = "ayatemandegar",
    azaronline = "azaronline",
    azki = "azki",
    b88 = "b88",
    baeghtesad = "baeghtesad",
    baghestannews = "baghestannews",
    baharnews = "baharnews",
    bahjat = "bahjat",
    bakhtarnews = "bakhtarnews",
    bamdad24 = "bamdad24",
    banifilmonline = "banifilmonline",
    bankdariirani = "bankdariirani",
    barghnews = "barghnews",
    barnamenevis = "barnamenevis",
    bartarinha = "bartarinha",
    basalam = "basalam",
    basijnews = "basijnews",
    basna = "basna",
    bazarebours = "bazarebours",
    bazarnews = "bazarnews",
    bazicenter = "bazicenter",
    bazmineh = "bazmineh",
    behtarinideh = "behtarinideh",
    behzisti = "behzisti",
    bestfarsi = "bestfarsi",
    beytoote = "beytoote",
    bidarbourse = "bidarbourse",
    bitpin = "bitpin",
    blogfa = "blogfa",
    bloging = "bloging",
    blogir = "blogir",
    blogiran = "blogiran",
    blogsazan = "blogsazan",
    blogsky = "blogsky",
    bonyadvokala = "bonyadvokala",
    bookland = "bookland",
    borna = "borna",
    boursenews = "boursenews",
    boursy = "boursy",
    bultannews = "bultannews",
    cafeamoozeshgah = "cafeamoozeshgah",
    cann = "cann",
    car = "car",
    chabokonline = "chabokonline",
    chamedanmag = "chamedanmag",
    charkhan = "charkhan",
    chemibazar = "chemibazar",
    chetor = "chetor",
    chtn = "chtn",
    cinemaeinews = "cinemaeinews",
    cinemaema = "cinemaema",
    cinemapress = "cinemapress",
    citna = "citna",
    click = "click",
    clickaval = "clickaval",
    controlmgt = "controlmgt",
    cookpad = "cookpad",
    dadrah = "dadrah",
    danakhabar = "danakhabar",
    daadyab = "daadyab",
    dadpardaz = "dadpardaz",
    dadvarzyar = "dadvarzyar",
    dailytelegraph = "dailytelegraph",
    dargi = "dargi",
    dbazi = "dbazi",
    deyblog = "deyblog",
    didarnews = "didarnews",
    didgahemrooz = "didgahemrooz",
    digiato = "digiato",
    digikala = "digikala",
    digikaproducts = "digikaproducts",
    digiro = "digiro",
    digistyle = "digistyle",
    diibache = "diibache",
    divar = "divar",
    doctoreto = "doctoreto",
    doctoryab = "doctoryab",
    donyaeeqtesad = "donyaeeqtesad",
    donyayekhodro = "donyayekhodro",
    donyayemadan = "donyayemadan",
    dotic = "dotic",
    drhast = "drhast",
    drsaina = "drsaina",
    dsport = "dsport",
    ecoiran = "ecoiran",
    ecoview = "ecoview",
    econegar = "econegar",
    eghtesadnews = "eghtesadnews",
    eghtesadonline = "eghtesadonline",
    ekhtebar = "ekhtebar",
    emalls = "emalls",
    ensafnews = "ensafnews",
    eporsesh = "eporsesh",
    ettelaat = "ettelaat",
    etemadonline = "etemadonline",
    euronews = "euronews",
    exbito = "exbito",
    eximnews = "eximnews",
    extern = "extern",
    faab = "faab",
    faradars = "faradars",
    faradeed = "faradeed",
    fararu = "fararu",
    farazdaily = "farazdaily",
    farazsms = "farazsms",
    fardaname = "fardaname",
    fardanews = "fardanews",
    fardayeeghtesad = "fardayeeghtesad",
    fardmag = "fardmag",
    farhangemrooz = "farhangemrooz",
    farhangesadid = "farhangesadid",
    farhikhtegandaily = "farhikhtegandaily",
    farsnews = "farsnews",
    fartaknews = "fartaknews",
    fhnews = "fhnews",
    filmcinemanews = "filmcinemanews",
    filimoshot = "filimoshot",
    filmmagazine = "filmmagazine",
    fitamin = "fitamin",
    flightio = "flightio",
    foodpress = "foodpress",
    gadgetnews = "gadgetnews",
    gamefa = "gamefa",
    gamene = "gamene",
    gametor = "gametor",
    gardeshban = "gardeshban",
    getzoop = "getzoop",
    gashtaninews = "gashtaninews",
    ghafaridiet = "ghafaridiet",
    gishniz = "gishniz",
    gitionline = "gitionline",
    goftareno = "goftareno",
    gooyait = "gooyait",
    gostaresh = "gostaresh",
    haal = "haal",
    hadith = "hadith",
    hamgardi = "hamgardi",
    hamrah = "hamrah",
    hamrahmoshaver = "hamrahmoshaver",
    hamshahrionline = "hamshahrionline",
    hamyarwp = "hamyarwp",
    hakimemehr = "hakimemehr",
    hashtsobh = "hashtsobh",
    hawzahnews = "hawzahnews",
    hayat = "hayat",
    hedayatgar = "hedayatgar",
    hidoctor = "hidoctor",
    hisalamat = "hisalamat",
    hitalki = "hitalki",
    honareseda = "honareseda",
    honarmrooz = "honarmrooz",
    honaronline = "honaronline",
    hourgan = "hourgan",
    iana = "iana",
    ibna = "ibna",
    ictnews = "ictnews",
    ictnn = "ictnn",
    ictpress = "ictpress",
    idpay = "idpay",
    ifsm = "ifsm",
    iichs = "iichs",
    iliadmag = "iliadmag",
    ilna = "ilna",
    imereport = "imereport",
    imna = "imna",
    infogramacademy = "infogramacademy",
    inn = "inn",
    intitr = "intitr",
    ipresta = "ipresta",
    iqna = "iqna",
    iranacademy = "iranacademy",
    iranart = "iranart",
    irancell = "irancell",
    irancook = "irancook",
    iraneconomist = "iraneconomist",
    iranestekhdam = "iranestekhdam",
    iraneurope = "iraneurope",
    iranhotelonline = "iranhotelonline",
    iranicard = "iranicard",
    irasin = "irasin",
    irdc = "irdc",
    iribnews = "iribnews",
    irna = "irna",
    isblog = "isblog",
    iscanews = "iscanews",
    isovisit = "isovisit",
    islamquest = "islamquest",
    isna = "isna",
    itna = "itna",
    ivahid = "ivahid",
    iwna = "iwna",
    jabama = "jabama",
    jadidpress = "jadidpress",
    jadvalyab = "jadvalyab",
    jahanemana = "jahanemana",
    jahannews = "jahannews",
    jamejamonline = "jamejamonline",
    javanonline = "javanonline",
    jobinja = "jobinja",
    jomhornews = "jomhornews",
    jomhouriat = "jomhouriat",
    joomlafarsi = "joomlafarsi",
    kalleh = "kalleh",
    kanoonhend = "kanoonhend",
    kanoonnews = "kanoonnews",
    karafarinnews = "karafarinnews",
    karajemrouz = "karajemrouz",
    karlancer = "karlancer",
    karokasb = "karokasb",
    kayhan = "kayhan",
    keshavarzplus = "keshavarzplus",
    khabaredagh = "khabaredagh",
    khabarfoori = "khabarfoori",
    khabarkhodro = "khabarkhodro",
    khabaronline = "khabaronline",
    khabarvarzeshi = "khabarvarzeshi",
    khamenei = "khamenei",
    khanefootball = "khanefootball",
    khanomsin = "khanomsin",
    khanoumi = "khanoumi",
    khatebazar = "khatebazar",
    khodrokaar = "khodrokaar",
    khodrotak = "khodrotak",
    khordad = "khordad",
    kidzy = "kidzy",
    kojaro = "kojaro",
    ksymg = "ksymg",
    labourlaw = "labourlaw",
    lastsecond = "lastsecond",
    liangroup = "liangroup",
    lioncomputer = "lioncomputer",
    madarsho = "madarsho",
    majidonline = "majidonline",
    maktabkhooneh = "maktabkhooneh",
    malltina = "malltina",
    mamlekatonline = "mamlekatonline",
    mana = "mana",
    manbaekhabar = "manbaekhabar",
    mashreghnews = "mashreghnews",
    mednews = "mednews",
    mefda = "mefda",
    meghdadit = "meghdadit",
    mehrdadcivil = "mehrdadcivil",
    mehrnews = "mehrnews",
    melipayamak = "melipayamak",
    mendellab = "mendellab",
    miare = "miare",
    mihandownload = "mihandownload",
    mihanpezeshk = "mihanpezeshk",
    mihanwebhost = "mihanwebhost",
    mihanwp = "mihanwp",
    mizanonline = "mizanonline",
    mizbanfa = "mizbanfa",
    moaser = "moaser",
    modireweb = "modireweb",
    mojnews = "mojnews",
    moniban = "moniban",
    monoblog = "monoblog",
    mopon = "mopon",
    moroornews = "moroornews",
    mosalasonline = "mosalasonline",
    mosbatesabz = "mosbatesabz",
    moshaver = "moshaver",
    moshaveranetahsili = "moshaveranetahsili",
    mostaghelonline = "mostaghelonline",
    motamem = "motamem",
    myket = "myket",
    nabzefanavari = "nabzefanavari",
    nabzemarketing = "nabzemarketing",
    nabznaft = "nabznaft",
    naghdfarsi = "naghdfarsi",
    namava = "namava",
    namnak = "namnak",
    nasim = "nasim",
    nasrblog = "nasrblog",
    nateghan = "nateghan",
    nazaratshora = "nazaratshora",
    neshanonline = "neshanonline",
    niknews = "niknews",
    niloblog = "niloblog",
    niniban = "niniban",
    ninisite = "ninisite",
    niniweblog = "niniweblog",
    noandish = "noandish",
    nobitex = "nobitex",
    nohsobh = "nohsobh",
    noozdahkala = "noozdahkala",
    novin = "novin",
    ofoghetazenews = "ofoghetazenews",
    ofoghnews = "ofoghnews",
    oghyanos = "oghyanos",
    oipf = "oipf",
    okala = "okala",
    oloompezeshki = "oloompezeshki",
    p30world = "p30world",
    pana = "pana",
    panamag = "panamag",
    panjahopanjonline = "panjahopanjonline",
    panjere = "panjere",
    pansadonavadohasht = "pansadonavadohasht",
    par30games = "par30games",
    parscoders = "parscoders",
    parshistory = "parshistory",
    parsiblog = "parsiblog",
    parsine = "parsine",
    parspack = "parspack",
    pasokhgoo = "pasokhgoo",
    payamekhanevadeh = "payamekhanevadeh",
    payamgostar = "payamgostar",
    paydarymelli = "paydarymelli",
    paziresh24 = "paziresh24",
    pdf = "pdf",
    pedal = "pedal",
    peivast = "peivast",
    persiantools = "persiantools",
    pgnews = "pgnews",
    pishgamfanavari = "pishgamfanavari",
    plaza = "plaza",
    podium = "podium",
    ponisha = "ponisha",
    poonehmedia = "poonehmedia",
    porsan = "porsan",
    portal = "portal",
    pspro = "pspro",
    qavanin = "qavanin",
    qudsonline = "qudsonline",
    quera = "quera",
    radareghtesad = "radareghtesad",
    rahatblog = "rahatblog",
    rahbordemoaser = "rahbordemoaser",
    rajanews = "rajanews",
    ramzarz = "ramzarz",
    rasadeghtesadi = "rasadeghtesadi",
    rasanews = "rasanews",
    rasekhoon = "rasekhoon",
    rastineh = "rastineh",
    rawanshenas = "rawanshenas",
    rayamarketing = "rayamarketing",
    raygansms = "raygansms",
    rcmajlis = "rcmajlis",
    revayatnameh = "revayatnameh",
    rokna = "rokna",
    romanman = "romanman",
    roocket = "roocket",
    rooziato = "rooziato",
    roozno = "roozno",
    roozplus = "roozplus",
    roshadent = "roshadent",
    rouydad24 = "rouydad24",
    rozblog = "rozblog",
    saafi = "saafi",
    saat24 = "saat24",
    saatesalamat = "saatesalamat",
    sabakhabar = "sabakhabar",
    sadohejdahsafar = "sadohejdahsafar",
    safheeghtesad = "safheeghtesad",
    sahebkhabar = "sahebkhabar",
    sakhtafzarmag = "sakhtafzarmag",
    sakkook = "sakkook",
    salamatnews = "salamatnews",
    salameno = "salameno",
    samanehha = "samanehha",
    sanapress = "sanapress",
    sariasan = "sariasan",
    sarmadnews = "sarmadnews",
    scorize = "scorize",
    sedayebourse = "sedayebourse",
    sedayiran = "sedayiran",
    sellfree = "sellfree",
    sena = "sena",
    seratnews = "seratnews",
    sesotweb = "sesotweb",
    sevenlearn = "sevenlearn",
    shabakehmag = "shabakehmag",
    shafaonline = "shafaonline",
    shahr = "shahr",
    shahraranews = "shahraranews",
    shahrsakhtafzar = "shahrsakhtafzar",
    shahryarnews = "shahryarnews",
    shana = "shana",
    sharghdaily = "sharghdaily",
    shayanews = "shayanews",
    shereno = "shereno",
    shenasname = "shenasname",
    sheypoor = "sheypoor",
    shianews = "shianews",
    shiraze = "shiraze",
    shoaresal = "shoaresal",
    shohadayeiran = "shohadayeiran",
    shomalnews = "shomalnews",
    shomanews = "shomanews",
    shomavaeghtesad = "shomavaeghtesad",
    shoragc = "shoragc",
    sid = "sid",
    sinapress = "sinapress",
    sinapub = "sinapub",
    sistani = "sistani",
    snapp = "snapp",
    snappfood = "snappfood",
    snappmarket = "snappmarket",
    snapptrip = "snapptrip",
    snn = "snn",
    sofiamag = "sofiamag",
    soft98 = "soft98",
    soja = "soja",
    sornakhabar = "sornakhabar",
    spnfa = "spnfa",
    sputnikaf = "sputnikaf",
    taaghche = "taaghche",
    tabnak = "tabnak",
    tabnakbato = "tabnakbato",
    tabnakjavan = "tabnakjavan",
    tadbir24 = "tadbir24",
    tahlilbazaar = "tahlilbazaar",
    tahririeh = "tahririeh",
    tapesh3 = "tapesh3",
    tarafdari = "tarafdari",
    taraz = "taraz",
    taraznameheghtesad = "taraznameheghtesad",
    tarfandestan = "tarfandestan",
    tarikhema = "tarikhema",
    tarikhirani = "tarikhirani",
    tarjomic = "tarjomic",
    tasnim = "tasnim",
    tebna = "tebna",
    tebyan = "tebyan",
    techfars = "techfars",
    technoc = "technoc",
    technolife = "technolife",
    techranco = "techranco",
    techrato = "techrato",
    tehrannews = "tehrannews",
    tehranserver = "tehranserver",
    tejaratefarda = "tejaratefarda",
    tejaratemrouz = "tejaratemrouz",
    tejaratonline = "tejaratonline",
    telescope = "telescope",
    tik = "tik",
    tinn = "tinn",
    titre20 = "titre20",
    titrekootah = "titrekootah",
    tlyn = "tlyn",
    toonblog = "toonblog",
    toseeirani = "toseeirani",
    transis = "transis",
    trip = "trip",
    trt = "trt",
    ucan = "ucan",
    uptvs = "uptvs",
    vakiltik = "vakiltik",
    vananews = "vananews",
    varzesh3 = "varzesh3",
    vido = "vido",
    vigiato = "vigiato",
    virgool = "virgool",
    vindad = "vindad",
    watereng = "watereng",
    webhostingtalk = "webhostingtalk",
    webkima = "webkima",
    webpouya = "webpouya",
    wikibooks = "wikibooks",
    wikifa = "wikifa",
    wikifeqh = "wikifeqh",
    wikigardi = "wikigardi",
    wikihoghoogh = "wikihoghoogh",
    wikiravan = "wikiravan",
    wikishahid = "wikishahid",
    wikishia = "wikishia",
    wikisource = "wikisource",
    wikivoyage = "wikivoyage",
    wppersian = "wppersian",
    yekpezeshk = "yekpezeshk",
    yektanet = "yektanet",
    yjc = "yjc",
    zanjani = "zanjani",
    zenhar = "zenhar",
    zhaket = "zhaket",
    zibamoon = "zibamoon",
    zoomg = "zoomg",
    zoomit = "zoomit",
    zoomtech = "zoomtech",
}

export interface IntfGlobalConfigs {
    debugVerbosity?: number,
    showInfo?: boolean,
    debugDB?: boolean,
    showWarnings?: boolean,
    db?: string,
    maxConcurrent?: number,
    delay?: number,
    corpora?: string,
    proxies?: string[] | string,
    hostIP?: string,
    logPath?: string,
    compact?: boolean
}

export enum enuTextType {
    paragraph = "p",
    caption = "caption",
    cite = "cite",
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    alt = "alt",
    link = "link",
    ilink = "ilink",
    li = "li",
    blockquote = "blockquote"
}

export interface IntfKeyVal { [key: string]: string }
export interface IntfText { text: string, type: enuTextType, ref?: string }
export interface IntfComment { text: string, author?: string, date?: string }
export interface IntfImage { src: string, alt?: string }
export interface IntfContentHolder { texts: IntfText[], images: IntfImage[] }

export interface IntfQAcontainer {
    q: IntfComment,
    a?: IntfComment[]
}

export interface IntfPageContent {
    url: string,
    category?: string,
    article?: {
        date?: string,
        title?: string,
        aboveTitle?: string,
        subtitle?: string,
        summary?: string,
        content?: IntfText[],
        comments?: IntfComment[]
        qa?: IntfQAcontainer[]
        images?: IntfImage[],
        tags?: string[],
    }
    links: string[],
}

export interface IntfDocFilecontent {
    url: string,
    category: string | IntfMappedCategory,
    date?: string,
    title?: string,
    aboveTitle?: string,
    subtitle?: string,
    summary?: string,
    content?: IntfText[],
    comments?: IntfComment[]
    images?: IntfImage[],
    tags?: string[],
    qa?: IntfQAcontainer[]
}

export enum enuTextType {
    Formal = "Formal",
    Informal = "Informal",
    Hybrid = "Hybrid",
    Unk = "Unk"
}

export enum enuMajorCategory {
    Undefined = "Undefined",
    News = "News",
    QA = "QA",
    Literature = "Literature",
    Forum = "Forum",
    Weblog = "Weblog",
    SocialMedia = "SocialMedia",
    Doc = "Doc",
}

export enum enuMinorCategory {
    Political = "Political",
    FAQ = "FAQ",
    Social = "Social",
    Health = "Health",
    Medical = "Medical",
    Psychology = "psychology",
    Economics = "Economics",
    Culture = "Art&Culture",
    Consultation = "Consultation",
    Sport = "Sport",
    ScienceTech = "Science&Tech",
    Job = "Job",
    SEO = "SEO",
    Journalism = "Journalism",
    Undefined = "Undefined",
    Generic = "Generic",
    Food = "Food",
    Multimedia = "Multimedia",
    Talk = "Talk",
    Discussion = "Discussion",
    Poem = "Poem",
    Text = "Text",
    Local = "Local",
    Religious = "Religious",
    Law = "Law",
    LifeStyle = "LifeStyle",
    Game = "Game",
    Education = "Education",
    Literature = "Literature",
    Historical = "Historical",
    University = "University",
    Defence = "Defence",
    Fun = "Fun",
    Insurance = "Insurance",
    Weather = "Weather",
    Advert = "Advert",
    CryptoCurrency = "CryptoCurrency",
    IT = "IT",
    ICT = "ICT",
    DigitalMarketing = "DigitalMarketing",
    Tourism = "Tourism",
    Startup = "Startup",
    Cooking = "Cooking"
}

export enum enuSubMinorCategory {
    Game = "Game",
    Cosmos = "Cosmos",
    GoldSilver = "GoldSilver",
    Reportage = "Reportage",
    Security = "Security",
    Mobile = "Mobile",
    Robotic = "Robotic",
    Hardware = "Hardware",
    Network = "Network",
    Software = "Software",
    Chemical = "Chemical",
    Language = "Language",
    Car = "Car",
    Energy = "Energy",
    Gadgets = "Gadgets",
    AI = "AI",
    IOT = "IOT",
    Intl = "Intl",
    Accident = "Accident",
    Art = "Art",
    Agriculture = "Agriculture",
    TV = "TV",
    Pet = "Pet",
    Petroleum = "Petroleum",
    Radio = "Radio",
    Book = "Book",
    Podcast = "Podcast",
    Celebrities = "Celebrities",
    Cinema = "Cinema",
    Photo = "Photo",
    Insurance = "Insurance",
    Documentary = "Documentary",
    Music = "Music",
    Media = "Media",
    Theatre = "Theatre",
    Football = "Football",
    Basketball = "Basketball",
    Nautics = "Nautics",
    Chess = "Chess",
    Bicycle = "Bicycle",
    Karate = "Karate",
    Ball = "Ball",
    Wrestling = "Wrestling",
    Martial = "Martial",
    Weightlifting = "Weightlifting",
    Women = "Women",
    Animals = "Animals",
    Police = "Police"
}

export interface IntfMappedCategory {
    textType : enuTextType,
    major: enuMajorCategory,
    minor?: enuMinorCategory,
    subminor?: enuSubMinorCategory | enuMinorCategory,
    original?: string
}

export interface IntfProxy {
    agent: SocksProxyAgent,
    port: string
}

export interface IntfSelectorFunction {
    (article: HTMLElement, fullHtml: HTMLElement, url: URL): HTMLElement | null | undefined
}

export interface IntfIsValidFunction {
    (article: HTMLElement, fullHtml: HTMLElement): boolean
}

export interface IntfSelectAllFunction {
    (article: HTMLElement, fullHtml: HTMLElement): HTMLElement[] | undefined
}

export interface IntfIgnoreTextElementFunction {
    (el: HTMLElement, index: number, allElements: HTMLElement[]): boolean
}
export interface IntfGetCommentsByAPI {
    (url: URL, reParams: IntfRequestParams): Promise<IntfComment[]>
}

export interface IntfSelectorToString {
    (element: HTMLElement, fullHtml?: HTMLElement): string
}

export interface IntfURLNormalizationConf {
    extraValidDomains?: string[]
    extraInvalidStartPaths?: string[],
    ignoreContentOnPath?: string[],
    removeWWW?: boolean,
    pathToCheckIndex?: number | null
    validPathsItemsToNormalize?: string[],
    forceHTTP?: boolean
}

export interface IntfCommentContainer {
    container?: string | IntfSelectAllFunction
    datetime?: string | IntfSelectorToString
    author?: string | IntfSelectorFunction
    text?: string | IntfSelectorFunction
}

export interface IntfProcessorConfigs {
    selectors?: {
        article?: string | IntfSelectorFunction,
        aboveTitle?: string | IntfSelectorFunction,
        title?: string | IntfSelectorFunction,
        acceptNoTitle?: boolean
        subtitle?: string | IntfSelectorFunction,
        summary?: string | IntfSelectorFunction,
        content?: {
            main?: string | IntfSelectAllFunction,
            alternative?: string | IntfSelectAllFunction,
            textNode?: string | IntfSelectorFunction,
            alterTextContent?: IntfSelectorToString,
            ignoreTexts?: string[] | RegExp[],
            ignoreNodeClasses?: string[] | IntfIsValidFunction,
            qa?: {
                containers: string | IntfSelectAllFunction
                q: IntfCommentContainer
                a: IntfCommentContainer
            }
        },
        comments?: IntfCommentContainer | IntfGetCommentsByAPI,
        tags?: string | IntfSelectAllFunction,
        datetime?: {
            conatiner?: string | IntfSelectorFunction,
            splitter?: string | IntfSelectorToString,
            isGregorian?: boolean
            acceptNoDate?: boolean
        }
        category?: {
            selector?: string | IntfSelectAllFunction,
            startIndex?: number,
            lastIndex?: number
        }
    },
    api?: { (url: URL, reParams: IntfRequestParams, data?: string): Promise<IntfPageContent> },
    url?: IntfURLNormalizationConf
    basePath?: string
    preHTMLParse?: (html: string) => string
}

export const INVALID_URL = "/Invalid"
