applyStyle();
function applyStyle() {

    console.log("Fixing StackOverflow buttons...");

    var customStyle = document.createElement("style");
    customStyle.type = "text/css";

    var baseCss = ".js-voting-container .js-vote-up-btn, .js-voting-container .js-vote-down-btn { \
        border-style: solid !important; \
        border-width: 0 !important; \
        border-radius: 0 !important; \
        align-self: auto !important; \
        color: rgb(186, 191, 196) !important; \
        border-color: rgba(0, 0, 0, 0) !important; \
        padding: 0px !important; \
        line-height: 17px !important; \
        } \
        \
        .js-voting-container .iconArrowUp, .js-voting-container .iconArrowDown { \
         width: 36px !important; \
         height: 36px !important; \
        } \
        \
        ";

    var customCss;

    if (document.getElementsByTagName("body")[0].classList.contains("theme-dark")) {
        customCss = ".js-vote-count { \
                color: rgb(186, 191, 196) !important; /*173 179 184*/ /*color: rgb(186, 191, 196) !important;*/ /*color: rgb(106 115 124) !important; */ /*//var(--black-500) !important; //rgb(106 115 124)*/ \
                font-size: 1.61538462rem !important; /*//var(--fs-title) !important; // 1.61538462rem*/ \
                font-weight: 400 !important; \
                padding: 0px !important; \
                line-height: 27px !important; \
            } \
            ";
    }
    else {
        customCss = ".js-vote-count { \
                color: rgb(106, 115, 124) !important; /*173 179 184*/ /*color: rgb(186, 191, 196) !important;*/ /*color: rgb(106 115 124) !important; */ /*//var(--black-500) !important; //rgb(106 115 124)*/ \
                font-size: 1.61538462rem !important; /*//var(--fs-title) !important; // 1.61538462rem*/ \
                font-weight: 400 !important; \
                padding: 0px !important; \
                line-height: 27px !important; \
            } \
            ";
    }


    customCss = baseCss + customCss;

    customStyle.appendChild(document.createTextNode(customCss));
    document.getElementsByTagName("head")[0].appendChild(customStyle);

    console.log("Fixed StackOverflow buttons! :)");
}