$(function () {
	var width = $(window).width();
	$("header .subNav li.userName").click(function () {
		$(this).toggleClass("opened");
		$(this).children(".thirdNav").slideToggle();
	});
	$('.sideMenu > ul > li.moreItem > a').click(function(e) {
		e.preventDefault();
	})
	$(".sideMenu .moreItem > a").click(function () {
		$(this).toggleClass("open");
		$(this).siblings("ul").slideToggle();
	});
	$("body").append('<div class="bodyTouchBlock"></div>');
	$(".toggleSideMenu, .bodyTouchBlock").click(function () {
		$(".sideMenu").toggleClass("show");
		$("body").toggleClass("opened");
		$(".bodyTouchBlock").toggleClass("show");
	});
	$(".tabPanel .tabGroup li").click(function () {
		var tabIndex = $(this).index();
		$(".tabContent .active").removeClass("active");
		$(this).addClass("active").siblings(".active").removeClass("active");
		$(this)
			.parent()
			.siblings(".tabContent")
			.children("ul")
			.eq(tabIndex)
			.addClass("active");
	});
	// channelTitle 空值隱藏
	$(".caption .channelTitle").each(function () {
		if ($(this).text() == "") {
			$(this).hide();
		}
	});
	// 首頁手機版欄位
	$(".mobile-tab li").click(function () {
		var tabIndex = $(this).index();
		$(".mobile-tab .active").removeClass("active");
		$(this).addClass("active");
		$(".main article, .main aside").hide();
		$(".main").children().eq(tabIndex).show();
	});
	// 文章頁最新消息
	var nowIndex = 0;
	$(".slider-ct .prev").click(function () {
		var sliderLength = $(".slider-ct .slider-item-group").length,
			$sliderItemGroup = $(".slider-ct .slider-item-group");
		$sliderItemGroup.attr("class", "slider-item-group");
		$sliderItemGroup.eq(nowIndex).addClass("ltr_out");
		if (nowIndex > 0) {
			nowIndex--;
		} else {
			nowIndex = sliderLength - 1;
		}
		$sliderItemGroup.eq(nowIndex).addClass("ltr_in");
		return false;
	});
	$(".slider-ct .next").click(function () {
		var sliderLength = $(".slider-ct .slider-item-group").length,
			$sliderItemGroup = $(".slider-ct .slider-item-group");
		$sliderItemGroup.attr("class", "slider-item-group");
		$sliderItemGroup.eq(nowIndex).addClass("rtl_out");
		if (nowIndex < sliderLength - 1) {
			nowIndex++;
		} else {
			nowIndex = 0;
		}
		$sliderItemGroup.eq(nowIndex).addClass("rtl_in");
		return false;
	});
	// 首頁網書
	var nowIndex2 = 0;
	$(".slider .prev").click(function () {
		var sliderLiLength = $(".slider li").length,
			$sliderLi = $(".slider li");
		$sliderLi.attr("class", "");
		$sliderLi.eq(nowIndex2).addClass("ltr_out");
		if (nowIndex2 > 0) {
			nowIndex2--;
		} else {
			nowIndex2 = sliderLiLength - 1;
		}
		$sliderLi.eq(nowIndex2).addClass("ltr_in");
		return false;
	});
	// 字體放大
	var $fz = $(".fontSize");
	var fzLevel = 0;
	var fzClass = "fz" + fzLevel;
	$fz.click(function () {
		fzLevel < 2 ? fzLevel++ : (fzLevel = 0);
		fzClass = "fz" + fzLevel;
		$(".nevin").attr("class", "nevin");
		$(".nevin").addClass(fzClass);
		return false;
	});
	$(".slider .next").click(function () {
		var sliderLiLength = $(".slider li").length,
			$sliderLi = $(".slider li");
		$sliderLi.attr("class", "");
		$sliderLi.eq(nowIndex2).addClass("rtl_out");
		if (nowIndex2 < sliderLiLength - 1) {
			nowIndex2++;
		} else {
			nowIndex2 = 0;
		}
		$sliderLi.eq(nowIndex2).addClass("rtl_in");
		return false;
	});
	// 文章內頁iframe youtube
	$(".nevin p iframe[src*='youtube'], .nevin p iframe[src*='vimeo']").each(
		function () {
			$(this).parent("").addClass("embed-16by9");
		}
	);
	// 包版廣告位置
	if (window.location.href.indexOf("article") > -1) {
		$(".couplet-left, .couplet-right").css(
			"top",
			Math.ceil($(".slider-hr").offset().top + 75)
		);
	}
	// 關閉付費閱讀相關 lightbox
	$(".btn-close, .cancel, .paywallpanelGroup .black").click(function () {
		$(".paywallpanelGroup").fadeOut();
	});
	// 手機版搜尋
	$(".toggleSearchBlock").click(function () {
		$("form.search").addClass("fadein");
	});
	$("form.search .closeTouch").click(function () {
		$("form.search").removeClass("fadein");
	});
	$(window).load(function () {
		// etu height
		$(".etu-item-list").each(function () {
			if ($(this).outerHeight() < 20) {
				$(this).hide();
			}
		});
	});
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		$('body > .banner').css('margin-bottom', $('header').outerHeight());
		// header
		if ( scrollTop >= $('body > .banner').outerHeight() ) {
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
		if (location.href.match(/article/) && width >= 1025) {
			var $informationArea = $(".informationArea").first();
			// console.log(scrollTop, $informationArea.offset().top);
			if (scrollTop >= $informationArea.offset().top + 30) {
				$informationArea.children(".sns-list").addClass("fixed");
				$informationArea.children(".sns-list").removeClass("origin");
			} else {
				$informationArea.children(".sns-list").removeClass("fixed");
				$informationArea.children(".sns-list").addClass("origin");
			}
		}
	});
});
