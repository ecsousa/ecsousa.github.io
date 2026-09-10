// ==UserScript==
// @name        Globo Remove
// @namespace   Violentmonkey Scripts
// @match       *://*.globo.com/*
// @match       *://globo.com/*
// @grant       none
// @version     1.0
// @author      ecsousa
// @description Removes specific elements from globo.com domains
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @run-at      document-idle
// ==/UserScript==

(function() {
    'use strict';

    var selectorsToRemove = [
        '#banner_slb_meio',
        '#banner_slb_topo',
        '#footerOgloboPianoId',
        '#header-cbn',
        '#header-produto',
        '#login-barreira',
        '#oglobo-shopping',
        '#onesignal-popover-container',
        '#outbrain-recomendacao2',
        '#relacionadas-topo',
        '#related-content',
        '#sidebar',
        '#site-header',
        '.adv',
        '.adv-article',
        '.aep-ads',
        '.article-related-links',
        '.banner-bottom-fixed-cpnt',
        '.banner-topo',
        '.barra-assine',
        '.barra-globocom',
        '.block--advertising',
        '.block__advertising',
        '.box-vejaTambem',
        '.container-adv',
        '.content-ads',
        '.home-widgets-inferiores',
        '.hui-publicidade--banner_slb_fim',
        '.hui-publicidade--banner_slb_meio',
        '.publicidade',
        '.publicidade-materia',
        '.related-content',
        '.site-header',
        '.teads-inread',
        '.top-header',
        '.tudosobre-container',
        '[data-google-query-id]',
        'div.shopping',
        'progress',
        '.tp-container-inner'
    ];

    function runRemoval() {
        $('body').css('overflow', 'auto');
        $('body').css('display', 'contents');

        var currentSelectors = selectorsToRemove.slice();

        if($(location).attr('href') != 'https://www.globo.com/') {
            currentSelectors.push('#header');
            currentSelectors.push('#glb-topo');
        }

        var remover;

        if($('#frameContent').length > 0) {
            var contents = $('#frameContent').contents();
            remover = function(index, item) {
                contents.find(item).remove();
            };
        }
        else {
            remover = function(index, item) {
                $(item).remove();
            };
        }

        $.each(currentSelectors, remover);
    }

    // Run immediately on load
    runRemoval();

    // Run periodically to catch dynamically loaded elements
    setInterval(runRemoval, 2000);

})();
