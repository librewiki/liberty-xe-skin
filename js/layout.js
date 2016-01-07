/* 드롭다운 페이드인 */
jQuery('.dropdown').on('show.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

jQuery('.dropdown').on('hide.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

jQuery('.btn-group').on('show.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

jQuery('.btn-group').on('hide.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});
/* 드롭다운 페이드인 End */

/* 모달 포커스잡기 */
jQuery('#login-modal').on('shown.bs.modal', function () {
    jQuery('#wpName1').focus();
})
/* 모달 포커스잡기 End */

/* 광고 로드 */
var width = jQuery(window).width();
if (width < 1024) {
    jQuery(document).ready(function() {
        var right_ads = jQuery(".right-ads").html();
        jQuery(".bottom-ads").html(right_ads);
        jQuery(".right-ads").remove();
        jQuery('.adsbygoogle').each(function(){(adsbygoogle = window.adsbygoogle || []).push({});});
    });
} else {
    jQuery('.adsbygoogle').each(function(){(adsbygoogle = window.adsbygoogle || []).push({});});
}
/* 광고 로드 End */
