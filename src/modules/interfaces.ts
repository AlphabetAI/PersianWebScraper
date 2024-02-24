import { SocksProxyAgent } from "socks-proxy-agent"
import { HTMLElement } from "node-html-parser"
import { IntfRequestParams } from "./request"

export enum enuDomains {
    abantether = "abantether",
    achareh = "achareh",
    activeidea = "activeidea",
    adleiranian = "adleiranian",
    adlpors = "adlpors",
    afkarnews = "afkarnews",
    aftabnews = "aftabnews",
    aghigh = "aghigh",
    agorgani = "agorgani",
    alef = "alef",
    alomohtava = "alomohtava",
    amuzeshtak = "amuzeshtak",
    ana = "ana",
    apademy = "apademy",
    aparat = "aparat",
    arakhabar = "arakhabar",
    arazcloud = "arazcloud",
    armanmeli = "armanmeli",
    arongroups = "arongroups",
    arshehonline = "arshehonline",
    arzdigital = "arzdigital",
    arzfi = "arzfi",
    asblog = "asblog",
    asiatech = "asiatech",
    asriran = "asriran",
    atiyeonline = "atiyeonline",
    avablog = "avablog",
    avalpardakht = "avalpardakht",
    avayekhazar = "avayekhazar",
    ayandnews = "ayandnews",
    azaronline = "azaronline",
    azki = "azki",
    b88 = "b88",
    baeghtesad = "baeghtesad",
    baharnews = "baharnews",
    bahjat = "bahjat",
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
    chabokonline = "chabokonline",
    chamedanmag = "chamedanmag",
    chemibazar = "chemibazar",
    chetor = "chetor",
    chtn = "chtn",
    cinemapress = "cinemapress",
    citna = "citna",
    clickaval = "clickaval",
    dadrah = "dadrah",
    danakhabar = "danakhabar",
    daadyab = "daadyab",
    dadpardaz = "dadpardaz",
    dadvarzyar = "dadvarzyar",
    dargi = "dargi",
    deyblog = "deyblog",
    didarnews = "didarnews",
    didgahemrooz = "didgahemrooz",
    digiato = "digiato",
    digikala = "digikala",
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
    econegar = "econegar",
    eghtesadnews = "eghtesadnews",
    eghtesadonline = "eghtesadonline",
    ekhtebar = "ekhtebar",
    emalls = "emalls",
    eporsesh = "eporsesh",
    etemadonline = "etemadonline",
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
    farhangemrooz = "farhangemrooz",
    farhangesadid = "farhangesadid",
    farsnews = "farsnews",
    fartaknews = "fartaknews",
    filimoshot = "filimoshot",
    fitamin = "fitamin",
    flightio = "flightio",
    foodpress = "foodpress",
    getzoop = "getzoop",
    gashtaninews = "gashtaninews",
    ghafaridiet = "ghafaridiet",
    gishniz = "gishniz",
    goftareno = "goftareno",
    gostaresh = "gostaresh",
    hamgardi = "hamgardi",
    hamrah = "hamrah",
    hamshahrionline = "hamshahrionline",
    hamyarwp = "hamyarwp",
    haal = "haal",
    hawzahnews = "hawzahnews",
    hisalamat = "hisalamat",
    hitalki = "hitalki",
    honareseda = "honareseda",
    honarmrooz = "honarmrooz",
    honaronline = "honaronline",
    iana = "iana",
    ibna = "ibna",
    ictnews = "ictnews",
    idpay = "idpay",
    ifsm = "ifsm",
    ilna = "ilna",
    imereport = "imereport",
    imna = "imna",
    infogramacademy = "infogramacademy",
    ipresta = "ipresta",
    iqna = "iqna",
    iranacademy = "iranacademy",
    iranart = "iranart",
    irancell = "irancell",
    iraneconomist = "iraneconomist",
    iranestekhdam = "iranestekhdam",
    iraneurope = "iraneurope",
    iranhotelonline = "iranhotelonline",
    iranicard = "iranicard",
    irasin = "irasin",
    iribnews = "iribnews",
    irna = "irna",
    isblog = "isblog",
    iscanews = "iscanews",
    isovisit = "isovisit",
    islamquest = "islamquest",
    isna = "isna",
    itna = "itna",
    ivahid = "ivahid",
    jabama = "jabama",
    jadidpress = "jadidpress",
    jadvalyab = "jadvalyab",
    jahanemana = "jahanemana",
    jahannews = "jahannews",
    jamejamonline = "jamejamonline",
    javanonline = "javanonline",
    jobinja = "jobinja",
    jomhouriat = "jomhouriat",
    joomlafarsi = "joomlafarsi",
    kalleh = "kalleh",
    kanoonnews = "kanoonnews",
    karafarinnews = "karafarinnews",
    karajemrouz = "karajemrouz",
    karlancer = "karlancer",
    karokasb = "karokasb",
    kayhan = "kayhan",
    keshavarzplus = "keshavarzplus",
    khabaredagh = "khabaredagh",
    khabarfoori = "khabarfoori",
    khabaronline = "khabaronline",
    khabarvarzeshi = "khabarvarzeshi",
    khamenei = "khamenei",
    khanefootball = "khanefootball",
    khanomsin = "khanomsin",
    khanoumi = "khanoumi",
    khatebazar = "khatebazar",
    khodrotak = "khodrotak",
    khordad = "khordad",
    kidzy = "kidzy",
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
    nabzemarketing = "nabzemarketing",
    nabznaft = "nabznaft",
    naghdfarsi = "naghdfarsi",
    namava = "namava",
    namnak = "namnak",
    nasim = "nasim",
    nasrblog = "nasrblog",
    nazaratshora = "nazaratshora",
    neshanonline = "neshanonline",
    niknews = "niknews",
    niloblog = "niloblog",
    niniban = "niniban",
    ninisite = "ninisite",
    niniweblog = "niniweblog",
    noandish = "noandish",
    nobitex = "nobitex",
    noozdahkala = "noozdahkala",
    novin = "novin",
    ofoghnews = "ofoghnews",
    oghyanos = "oghyanos",
    oipf = "oipf",
    okala = "okala",
    p30world = "p30world",
    pana = "pana",
    panjahopanjonline = "panjahopanjonline",
    panjere = "panjere",
    pansadonavadohasht = "pansadonavadohasht",
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
    persiantools = "persiantools",
    podium = "podium",
    ponisha = "ponisha",
    poonehmedia = "poonehmedia",
    porsan = "porsan",
    portal = "portal",
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
    roozno = "roozno",
    roshadent = "roshadent",
    rozblog = "rozblog",
    saafi = "saafi",
    saat24 = "saat24",
    sabakhabar = "sabakhabar",
    sahebkhabar = "sahebkhabar",
    sakhtafzarmag = "sakhtafzarmag",
    sakkook = "sakkook",
    salamatnews = "salamatnews",
    salameno = "salameno",
    samanehha = "samanehha",
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
    shahr = "shahr",
    shahraranews = "shahraranews",
    shahryarnews = "shahryarnews",
    shana = "shana",
    sharghdaily = "sharghdaily",
    shayanews = "shayanews",
    shereno = "shereno",
    shenasname = "shenasname",
    sheypoor = "sheypoor",
    shianews = "shianews",
    shoaresal = "shoaresal",
    shohadayeiran = "shohadayeiran",
    shomanews = "shomanews",
    shomavaeghtesad = "shomavaeghtesad",
    shoragc = "shoragc",
    sid = "sid",
    sinapub = "sinapub",
    sistani = "sistani",
    snapp = "snapp",
    snappfood = "snappfood",
    snappmarket = "snappmarket",
    snapptrip = "snapptrip",
    snn = "snn",
    soft98 = "soft98",
    soja = "soja",
    sornakhabar = "sornakhabar",
    spnfa = "spnfa",
    sputnikaf = "sputnikaf",
    taaghche = "taaghche",
    tabnak = "tabnak",
    tabnakbato = "tabnakbato",
    tabnakjavan = "tabnakjavan",
    tahlilbazaar = "tahlilbazaar",
    tahririeh = "tahririeh",
    tapesh3 = "tapesh3",
    tarafdari = "tarafdari",
    taraz = "taraz",
    taraznameheghtesad = "taraznameheghtesad",
    tarfandestan = "tarfandestan",
    tarjomic = "tarjomic",
    tasnim = "tasnim",
    tebna = "tebna",
    tebyan = "tebyan",
    technolife = "technolife",
    techranco = "techranco",
    tehrannews = "tehrannews",
    tehranserver = "tehranserver",
    tejaratefarda = "tejaratefarda",
    tejaratemrouz = "tejaratemrouz",
    tejaratonline = "tejaratonline",
    telescope = "telescope",
    titre20 = "titre20",
    titrekootah = "titrekootah",
    tlyn = "tlyn",
    toonblog = "toonblog",
    toseeirani = "toseeirani",
    transis = "transis",
    trip = "trip",
    uptvs = "uptvs",
    vakiltik = "vakiltik",
    vananews = "vananews",
    varzesh3 = "varzesh3",
    virgool = "virgool",
    vindad = "vindad",
    watereng = "watereng",
    webhostingtalk = "webhostingtalk",
    webkima = "webkima",
    webpouya = "webpouya",
    wikibooks = "wikibooks",
    wikifa = "wikifa",
    wikigardi = "wikigardi",
    wikihoghoogh = "wikihoghoogh",
    wikiravan = "wikiravan",
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
    zoomit = "zoomit",
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

export enum enuMajorCategory {
    News = "News",
    QA = "QA",
    Literature = "Literature",
    Forum = "Forum",
    Undefined = "Undefined",
    Weblog = "Weblog",
    Wiki = "Wiki",
    SocialMedia = "SocialMedia",
    Doc = "Doc",
    NA = "NA"
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
    Radio = "Radio",
    Book = "Book",
    Podcast = "Podcast",
    Celebrities = "Celebrities",
    Cinema = "Cinema",
    Photo = "Photo",
    Documentary = "Documentary",
    Music = "Music",
    Media = "Media",
    Theatre = "Theatre",
    Football = "Football",
    Basketball = "Basketball",
    Ball = "Ball",
    Wrestling = "Wrestling",
    Martial = "Martial",
    Weightlifting = "Weightlifting",
    Women = "Women",
    Animals = "Animals",
    Police = "Police"
}

export interface IntfMappedCategory {
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
