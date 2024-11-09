(function() {
    "use strict";

    const svgIcon = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M117.294 33.2183H10.7061C9.05531 33.2183 7.47218 33.874 6.30494 35.0413C5.13769 36.2085 4.48193 37.7916 4.48193 39.4424V105.184C4.48193 106.835 5.13769 108.418 6.30494 109.585C7.47218 110.753 9.05531 111.408 10.7061 111.408H117.294C118.944 111.408 120.527 110.753 121.695 109.585C122.862 108.418 123.518 106.835 123.518 105.184V39.4424C123.518 37.7916 122.862 36.2085 121.695 35.0413C120.527 33.874 118.944 33.2183 117.294 33.2183V33.2183ZM26.3207 91.8648C26.3184 93.7967 25.5494 95.6488 24.1825 97.0141C22.8156 98.3793 20.9627 99.1462 19.0307 99.1462C17.0988 99.1462 15.2459 98.3793 13.879 97.0141C12.5121 95.6488 11.7431 93.7967 11.7408 91.8648V52.7619C11.7431 50.8299 12.5121 48.9779 13.879 47.6126C15.2459 46.2473 17.0988 45.4805 19.0307 45.4805C20.9627 45.4805 22.8156 46.2473 24.1825 47.6126C25.5494 48.9779 26.3184 50.8299 26.3207 52.7619V91.8648ZM94.3624 96.434C94.1861 97.6065 93.6341 98.6901 92.7893 99.522C91.9445 100.354 90.8526 100.889 89.6775 101.047C72.6791 103.371 55.4432 103.368 38.4455 101.039C37.2823 100.883 36.1999 100.357 35.3582 99.5391C34.5164 98.7212 33.9597 97.6544 33.7702 96.4961C31.2966 80.4885 31.3147 64.1946 33.824 48.1926C34.0002 47.0201 34.5523 45.9366 35.397 45.1047C36.2418 44.2728 37.3338 43.7375 38.5088 43.5793C55.5073 41.2555 72.7431 41.2584 89.7408 43.5879C90.9041 43.7439 91.9864 44.2697 92.8282 45.0876C93.67 45.9055 94.2267 46.9722 94.4162 48.1305C96.8898 64.1381 96.8716 80.432 94.3624 96.434ZM116.445 91.8648C116.443 93.7967 115.674 95.6488 114.307 97.0141C112.94 98.3793 111.087 99.1462 109.156 99.1462C107.224 99.1462 105.371 98.3793 104.004 97.0141C102.637 95.6488 101.868 93.7967 101.866 91.8648V52.7619C101.868 50.8299 102.637 48.9779 104.004 47.6126C105.371 46.2473 107.224 45.4805 109.156 45.4805C111.087 45.4805 112.94 46.2473 114.307 47.6126C115.674 48.9779 116.443 50.8299 116.445 52.7619V91.8648Z" fill="CurrentColor"></path><path d="M41.6168 51.4161C39.6321 65.2724 39.6033 79.3388 41.5312 93.2031C51.3303 72.6982 66.3718 58.7718 86.6559 51.4239C71.7015 49.5501 56.5719 49.5475 41.6168 51.4161V51.4161Z" fill="CurrentColor"></path><path d="M17.9078 122.941C17.7765 123.294 17.7324 123.674 17.7796 124.047C17.8267 124.421 17.9636 124.778 18.1785 125.087C18.3934 125.397 18.68 125.649 19.0138 125.824C19.3476 125.998 19.7186 126.089 20.0953 126.089H30.5842C30.9612 126.089 31.3327 125.998 31.6667 125.823C32.0008 125.648 32.2875 125.395 32.5023 125.085L37.4 118.021H19.7391L17.9078 122.941Z" fill="CurrentColor"></path><path d="M108.448 118.021H90.7793L95.6771 125.092C95.8919 125.402 96.1787 125.656 96.5128 125.831C96.847 126.006 97.2185 126.097 97.5958 126.097H108.093C108.469 126.097 108.84 126.006 109.174 125.832C109.508 125.657 109.795 125.405 110.009 125.095C110.224 124.786 110.361 124.429 110.409 124.056C110.456 123.682 110.412 123.303 110.281 122.95L108.448 118.021Z" fill="CurrentColor"></path><path d="M26.7978 7.14924L48.8866 16.1234C44.5656 18.7137 41.6351 22.3844 40.9866 26.5278H87.2005C86.552 22.3845 83.6214 18.7138 79.3005 16.1234L101.39 7.14924C102.059 6.87742 102.592 6.35093 102.873 5.6856C103.154 5.02026 103.159 4.27059 102.887 3.60149C102.616 2.93239 102.089 2.39868 101.424 2.11776C100.758 1.83685 100.009 1.83174 99.3397 2.10356L72.0828 13.1772C66.8369 11.87 61.3504 11.87 56.1045 13.1772L28.8476 2.10356C28.5163 1.96897 28.1617 1.90095 27.8041 1.90338C27.4466 1.90582 27.0929 1.97866 26.7635 2.11776C26.4341 2.25685 26.1352 2.45947 25.8841 2.71405C25.633 2.96863 25.4344 3.27018 25.2999 3.60148C25.1653 3.93279 25.0972 4.28736 25.0997 4.64495C25.1021 5.00254 25.175 5.35615 25.314 5.68559C25.4531 6.01503 25.6558 6.31385 25.9103 6.56498C26.1649 6.81612 26.4665 7.01465 26.7978 7.14924V7.14924Z" fill="CurrentColor"></path></svg>';

    const menuItems = [
        { action: "hd", title: "В UHD якості", url: "?cat=&sort=now&uhd=true", component: "category_full", source: "cub", sort: "now", card_type: "true", page: 1 },
        { action: "netflix", title: "Netflix", url: "discover/tv?language=ua&with_networks=213", component: "category_full", source: "tmdb", sort: "now", card_type: "true", page: 1 },
        { action: "ukrainian", title: "Ukrainian", url: "discover/movie?include_adult=true&language=uk&sort_by=popularity.desc&with_original_language=uk", component: "category_full", source: "tmdb", sort: "now", card_type: "true", page: 1 },
    ];

    function createMenuItem(item) {
        const menuItem = $(`<li class="menu__item selector" data-action="pact_${item.action}"><div class="menu__ico">${svgIcon}</div><div class="menu__text">${item.title}</div></li>`);
        menuItem.on("hover:enter", function() {
            Lampa.Activity.push({
                url: item.url,
                title: item.title,
                component: item.component,
                source: item.source,
                sort: item.sort,
                card_type: item.card_type,
                page: item.page
            });
        });
        $(".menu .menu__list").eq(0).append(menuItem);
    }

    function initMenuItems() {
        menuItems.forEach(function (item){
            if(Lampa.Storage.get(`filmselection_${item.action}`) === 1) createMenuItem(item);
        });
    }

    function addSettings() {
        Lampa.SettingsApi.addComponent({
            component: "filmselection",
            icon: '<svg height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="8" width="34" height="21" rx="3" stroke="white" stroke-width="3"/><line x1="13.0925" y1="2.34874" x2="16.3487" y2="6.90754" stroke="white" stroke-width="3" stroke-linecap="round"/><line x1="1.5" y1="-1.5" x2="9.31665" y2="-1.5" transform="matrix(-0.757816 0.652468 0.652468 0.757816 26.197 2)" stroke="white" stroke-width="3" stroke-linecap="round"/><line x1="9.5" y1="34.5" x2="29.5" y2="34.5" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>',
            name: "Підбірки фільмів",
        });

        menuItems.forEach(function (item){
            Lampa.SettingsApi.addParam({
                component: "filmselection",
                param: {
                    name: `filmselection_${item.action}`,
                    type: "select",
                    values: { 1: "Показати", 0: "Сховати" },
                    default: 0
                },
                field: { name: item.title },
                onChange: function(value) {
                    if (value === 1 && $(`[data-action="pact_${item.action}"]`).length === 0) createMenuItem(item);
                    else Lampa.Helper.show("Необхідно перевідкрити Lampa");
                }
            });
        });
    }

    function initialize() {
        if (!window.plugin_categories_sel_ready) {
            initMenuItems();
            addSettings();
            window.plugin_categories_sel_ready = true;
        }
    }

    if (window.appready) {
        initialize();
    } else {
        Lampa.Listener.follow("app", function(event) {
            if (event.type === "ready") initialize();
        });
    }
})();