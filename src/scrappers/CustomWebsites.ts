import { clsScrapper } from "../modules/clsScrapper";
import { enuDomains } from "../modules/interfaces";
import { HTMLElement } from "node-html-parser"

export class divar extends clsScrapper {
  constructor() {
    super(enuDomains.divar, "divar.ir", {
      basePath: "/s/iran",
      selectors: {
        article: "article .kt-row",
        title: ".kt-page-title__title",
        subtitle: ".kt-page-title__subtitle",
        datetime: {
          acceptNoDate: true
        },
        content: {
          main: "p.kt-description-row__text, .kt-col-5 section:nth-child(1) .post-page__section--padded, img.kt-image-block__image",
        },
        category: {
          selector: (_, fullHtml: HTMLElement) => fullHtml.querySelectorAll("ol.kt-breadcrumbs li a")
        },
        tags: "nav .kt-wrapper-row a button"
      }
    })
  }
}
export class extern extends clsScrapper {
  constructor() {
    super(enuDomains.extern, "extern.ir", {
      selectors: {
        article: "body.single",
        title: "h1",
        datetime: {
          conatiner: (_, fullHtml: HTMLElement) => fullHtml.querySelector("time"),
          splitter: (el: HTMLElement) => el.getAttribute("datetime")?.substring(0, 10) || "NO_DATE"
        },
        content: {
          main: ".paper__content, figure.paper__thumbnail",
          ignoreNodeClasses: ["toc"]
        },
        category: {
          selector: "nav.rank-math-breadcrumb p a"
        },
        tags: "a[rel='tag']",
        comments: {
          container: (_, fullHtml: HTMLElement) => fullHtml.querySelectorAll("ol.comments__list li article"),
          author: ".comment__author .fn",
          datetime: "time",
          text: ".comment__content"
        }
      },
    })
  }
}

export class rastineh extends clsScrapper {
  constructor() {
    super(enuDomains.rastineh, "rastineh.com", {
      selectors: {
        article: ".single_page article",
        title: "h1",
        datetime: {
          conatiner: (_, fullHtml: HTMLElement) => fullHtml.querySelector("meta[property='article:published_time'], time"),
          splitter: (el: HTMLElement) => (el.getAttribute("content") || el.getAttribute("datetime"))?.substring(0, 10) || "NO_DATE"
        },
        content: {
          main: ".single_content",
          ignoreNodeClasses: ["su-spoiler"]
        },
        category: {
          selector: "#crumbs a",
          startIndex: 1
        },
        tags: "a[rel='tag']",
        comments: {
          container: (_, fullHtml: HTMLElement) => fullHtml.querySelectorAll("ol.comment-list li .comment-body"),
          author: ".comment-author cite",
          text: "p"
      }
      },
    })
  }
}

export class bahjat extends clsScrapper {
  constructor() {
    super(enuDomains.bahjat, "bahjat.ir", {
      basePath: "/fa",
      selectors: {
        article: ".nodeWrapper, .barge, body.node-type-ahkam",
        title: (_, fullHtml: HTMLElement) => fullHtml.querySelector("h1, title"),
        subtitle: ".subTitle",
        datetime: {
          conatiner: "time",
          acceptNoDate: true
        },
        content: {
          main: (_, fullHtml: HTMLElement) => fullHtml.querySelectorAll(".cBody, section.ahkam-teaser .wrapper, span.imgTeaser a"),
        },
        tags: (_, fullHtml: HTMLElement) => fullHtml.querySelectorAll(".nodeWrapper .entry-tags span a"),
      },
      url: {
        extraInvalidStartPaths: ["/ur", "/en"]
      }
    })
  }
}

export class zanjani extends clsScrapper {
  constructor() {
    super(enuDomains.zanjani, "zanjani.ir", {
      selectors: {
        article: ".singe-content, [data-xhr='qa-content'], .wrapper-single-post-gallery",
        title: ".single-content-title, .article span:nth-child(1), h1",
        datetime: {
          acceptNoDate: true
        },
        content: {
          main: ".single-content-content, .article_box, #lightgallery",
        },
        category: {
          selector: (_, fullHtml: HTMLElement) => fullHtml.querySelectorAll(".article-art-breadcrumb span a")
        },
      },
      url: {
        extraInvalidStartPaths: ["/?ar"]
      }
    })
  }
}

export class rasekhoon extends clsScrapper {
  constructor() {
    super(enuDomains.rasekhoon, "rasekhoon.net", {
      selectors: {
        article: ".js_ConID .MainIntra",
        title: "h1",
        subtitle: ".Sootitr",
        datetime: {
          conatiner: ".Date"
        },
        content: {
          main: "article, img.ira",
        },
        category: {
          selector: (_, fullHtml: HTMLElement) => fullHtml.querySelectorAll("nav.SubNav div a")
        },
      },
      url: {
        removeWWW: true
      }
    })
  }
}


export class islamquest extends clsScrapper {
  constructor() {
    super(enuDomains.islamquest, "islamquest.net", {
      basePath: "/fa",
      selectors: {
        article: ".question-details, #quran-big-page",
        title: ".main-question, .sure-title",
        datetime: {
          conatiner: ".last-up span.item",
          acceptNoDate: true
        },
        content: {
          main: ".full-question, .short-answer, .quran-text, .translate-text, .tafsir-text",
        },
        category: {
          selector: ".category a"
        },
        tags: ".tags a",
      },
      url: {
        extraInvalidStartPaths: ["/ur", "/en", "/ar", "/id", "/ms", "/tr", "/ru", "/th", "/fr", "/az", "/es", "/de", "/it", "/sw", "/ha", "/hi"]
      }
    })
  }
}

export class eporsesh extends clsScrapper {
  constructor() {
    super(enuDomains.eporsesh, "eporsesh.com", {
      selectors: {
        article: ".node-historyquestioncontent.view-mode-full, body.node-type-article, body.node-type-picnews, body.node-type-montakhabepayamaki",
        title: (_, fullHtml: HTMLElement) => fullHtml.querySelector("h1"),
        subtitle: ".Sootitr",
        datetime: {
          acceptNoDate: true
        },
        content: {
          main: ".group-header, .field-name-field-image div div, .field-type-text-with-summary div div, .flexslider ul li," + 
           ".field-name-field-picnews-headpic div div, .field-name-field-montakhabepayamaki-questio div div",
          ignoreTexts: [/.*eitaa.*/]
        },
        category: {
          selector: "[property='rdfs:label skos:prefLabel']"
        },
      },
      url: {
        removeWWW: true
      }
    })
  }
}

export class pasokhgoo extends clsScrapper {
  constructor() {
    super(enuDomains.pasokhgoo, "pasokhgoo.ir", {
      selectors: {
        article: "body.node-type-article, body.node-type-gallery",
        title: "h1",
        subtitle: ".field-name-field-subtitle div div",
        datetime: {
          conatiner: (_, fullHtml: HTMLElement) => fullHtml.querySelector("span[property='dc:date dc:created']"),
          splitter: (el: HTMLElement) => el.getAttribute("content")?.substring(0, 10) || "NO_DATE"
        },
        content: {
          main: ".field-type-text-with-summary div div, .field-name-field-pasokh div div, .field-name-field-image div div a, .flexslider ul li",
        },
        category: {
          selector: (_, fullHtml: HTMLElement) => fullHtml.querySelectorAll(".field-name-field-subject div div span a")
        },
        tags: ".field-name-field-tags div div a"
      },
    })
  }
}