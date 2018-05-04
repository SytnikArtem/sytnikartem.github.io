$(document).ready(function() {
    //Tabs
    var isMobile = window.innerWidth < 680;

    var SOURCE_ATTRIBUTE = 'data-index',
        SOURCE_ITEMS_SELECTOR = '.vacancy',
        SOURCE_ITEMS_ACTIVE_CLASS = 'active',
        TAB_CONTAINER = '.target-tabs',
        TAB_CLASS = '.target-tabs .info',
        TAB_ATTRIBUTE_NAME = 'data-tab-index',
        DEFAULT_STYLES = {
            'top': '',
            // 'transform': '',
            'display': ''
        },
        HEADER_OFFSET = isMobile ? 51 :  54;
    var tabsOpened = 0;

    $(SOURCE_ITEMS_SELECTOR, '.vacancy-list').on('click', function () {
        hideAllTabs();
        var $this = $(this);
        $this.addClass(SOURCE_ITEMS_ACTIVE_CLASS);
        var index = this.getAttribute(SOURCE_ATTRIBUTE);
        var tab = getRelatedTab(index);
        var position = $this.offset().top;
        tab.css({
            'top': position + HEADER_OFFSET + 'px',
            // 'transform': `translate3d(0, ${position + HEADER_OFFSET}px, 0)`,
            'display': 'block'
        });
        setTimeout(function () {
            tabsOpened++;
    });
    });


    $(document).on('click', function(e) {
        if (!tabsOpened) return;
    var $target = $(e.target);
    if (!$target.parents(TAB_CONTAINER).length) {
        hideAllTabs();
    }
});


    function hideAllTabs() {
        $(SOURCE_ITEMS_SELECTOR).removeClass(SOURCE_ITEMS_ACTIVE_CLASS);
        $(TAB_CLASS).css(DEFAULT_STYLES);
        tabsOpened = 0;
    }

    function getRelatedTab(index) {
        return $(TAB_CLASS +'['+TAB_ATTRIBUTE_NAME + '=' + index +']').first();
    }


    $(".close-tab").click(function (e) {
        e.stopImmediatePropagation();
        hideAllTabs();

    });

    $(".open-tab-form").click(function () {
        $(this).toggleClass("caret-toggle");
        $(".tab-form").toggleClass("show-form");
    });

});
