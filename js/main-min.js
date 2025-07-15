let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
    ubicacionPrincipal >= Desplazamiento_Actual ? this.document.getElementById("header").style.top = "0" : this.document.getElementById("id").style.top = "-100px", ubicacionPrincipal = Desplazamiento_Actual
}, jQuery((function (e) {
    var a = "http://localhost/readybpm/", t = e(window).width(), o = !0, r;

    function s(e, a, t, o, r) {
        var s = new google.maps.Map(document.getElementById(e), {
            mapTypeId: google.maps.MapTypeId.type,
            scrollwheel: !1,
            draggable: !1,
            zoom: o,
            styles: r
        }), l;
        (new google.maps.Geocoder).geocode({address: a}, (function (e, a) {
            a === google.maps.GeocoderStatus.OK && (new google.maps.Marker({
                position: e[0].geometry.location,
                map: s
            }), s.setCenter(e[0].geometry.location))
        }))
    }

    function l(a, t, o) {
        var r = e("table.canciones").find("[data-product=" + a + "]");
        r.find(".anadido").css({display: "block"}), r.find(".anadido").css({left: t.left + o}), r.find(".anadido").css({top: t.top}), console.log(r), setTimeout((function () {
            console.log(r), r.find(".anadido").css({display: "none"})
        }), 3e3)
    }

    function i(a) {
        e(".mini-cart .cant").html(a), console.log("cart updated with " + a)
    }

    function n() {
        e(".field-wrap input,.field-wrap textarea").each((function (a, t) {
            "" !== e(this).val() && e("label[for=" + e(this).attr("id") + "]").hide()
        })), e(".field-wrap input,.field-wrap textarea").focus((function () {
            e("label[for=" + e(this).attr("id") + "]").hide()
        })), e(".field-wrap input,.field-wrap textarea").blur((function () {
            "" === e(this).val() && e("label[for=" + e(this).attr("id") + "]").show()
        })), t <= 768 && (o = !1), e("#home-slider").flexslider({
            animation: "slide",
            directionNav: !0,
            controlNav: !0,
            pauseOnHover: !0,
            slideshowSpeed: 5e3,
            slideshow: !0,
            direction: "horizontal",
            start: function () {
                e(window).trigger("resize"), t >= 768 && e(".xv_slider .animated").addClass("go").removeClass("goAway")
            },
            before: function () {
                t >= 768 && e(".xv_slider .animated").addClass("goAway").removeClass("go")
            },
            after: function () {
                t >= 768 && e(".xv_slider .animated").addClass("go").removeClass("goAway")
            }
        }), 0 !== e(".xv_slider").length && e(".xv_slide").each((function () {
            e(this).css("background-image", (function () {
                return e(this).attr("data-slidebg")
            }))
        })), t >= 768 && e.stellar({
            horizontalScrolling: !1,
            verticalOffset: 0,
            responsive: !0
        }), e(".custome-select select").on("change", (function () {
            var a;
            e(this).parent(".custome-select").find("span").html(e(this).find("option:selected").text())
        })), e(".tweet").length && e(".tweet").twittie({
            username: "envato",
            dateFormat: "%b. %d, %Y",
            template: '{{tweet}} <time class="date">{{date}}</time>',
            count: 3,
            apiPath: "assets/php/tweet_api/tweet.php"
        }, (function () {
            e(".tweet ul").addClass("tweet_slider owl-carousel owl-theme"), e(".tweet_slider").owlCarousel({
                autoplaySpeed: 1e3,
                navSpeed: 500,
                items: 1,
                center: !0
            })
        })), e(".article-slider").each((function (a, t) {
            e(this).owlCarousel({
                autoplaySpeed: 1e3,
                navSpeed: 500,
                items: 1,
                dots: !1,
                nav: !0,
                center: !0,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            })
        })), e(".store-grid-slider").owlCarousel({
            navSpeed: 500,
            items: 5,
            dots: !1,
            nav: !0,
            navContainer: "#relatedAlbumsSlderNav",
            navText: ['<div class="col-xs-6"><a href="javascript:;"><i class="fa fa-arrow-left"></i> previous  Albums</a></div>', '<div class="col-xs-6"><a href="javascript:;"><i class="fa fa-arrow-right"></i> Next  Albums</a></div>'],
            responsive: {0: {items: 2}, 600: {items: 4}, 1e3: {items: 5}}
        }), e(window).on("resize load", (function () {
            var a = 0, t = e(window).width();
            a = t >= 1200 ? 100 : 20, t >= 581 && e(".masonry-container").waitForImages((function () {
                e(".masonry-container").masonry({itemSelector: ".ele-masonry", gutter: a})
            }))
        })), e("body").on("click", ".showAllTrending", (function (a) {
            var t = e(this);
            a.preventDefault(), t.fadeOut(), e(".populateSongList li").show(), e("body,html").animate({scrollTop: e(".populateSongList").offset().top - 70})
        })), e(".countdown").length && e(".countdown").each((function (a, t) {
            var o;
            e(this).downCount({date: "09/09/2016 12:00:00", offset: 10}, (function () {
                alert("WOOT WOOT, done!")
            }))
        })), e(".xvDatePicker").length && e(".xvDatePicker").each((function (a, t) {
            var o;
            e(this).datetimepicker({timepicker: !1})
        })), e("#myModalTerms").modal({
            backdrop: !0,
            keyboard: !1,
            show: !1
        }), console.log("la variable vale " + sessionStorage.wasVisited2), null == sessionStorage.wasVisited2 || "undefined" == sessionStorage.wasVisited2 ? e("#myModalTerms").modal("show") : null != sessionStorage.wasVisited2 && console.log(sessionStorage.wasVisited2), e("#accept-terms").on("click", (function () {
            sessionStorage.setItem("wasVisited2", "1")
        })), e("#enviarBecome").on("click", (function () {
            var t = e("#name").val(), o = e("#country").val(), r = e("#time").val(), s = e("#work").val(),
                l = e("#email-become").val(), i = e("#why").val(), n = e("#trabajos").val();
            "" == t || "" == o || "" == r || "" == s || "" == l || "" == i || "" == n ? alert("Todos los campos son obligatorios") : f(l) ? e.ajax({
                data: {
                    name: t,
                    country: o,
                    experience: r,
                    work: s,
                    email: l,
                    message: i,
                    trabajos: n
                }, type: "POST", dataType: "json", url: a + "pages/ser_miembro_mail/"
            }).done((function (e) {
                e.success ? alert("Mensaje Enviado. Gracias") : alert(e.message)
            })).fail((function () {
                alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
            })) : alert("Formato de correo erroneo, por favor confirma que todo este bien escrito")
        }));
        var r = "fa fa-play-circle-o", l = "fa fa-stop-circle-o";

        function i(a) {
            var t = a.closest("tr").attr("id"), o = e("#jquery_jplayer_1").attr("data-audio-id");
            if ("undefined" != o) return String(t) == String(o) ? e("#jquery_jplayer_1").data().jPlayer.status.paused ? (e("#jquery_jplayer_1").jPlayer("play"), e("#" + o).find(".fa").removeClass().addClass(l), !0) : (e("#jquery_jplayer_1").jPlayer("stop"), e("#" + o).find(".fa").removeClass().addClass(r), !0) : (e("#" + o).find(".fa").removeClass().addClass(r), !1)
        }

        e(".singleSongPlayer").length && e(".singleSong-jplayer").on("click", (function () {
            if (!i(e(this))) {
                var a = e(this).attr("id"), t = e(this).attr("data-mp3"), o = e(this).attr("data-title"),
                    s = "#" + e(this).closest("tr").attr("id"), n = e(this).closest("tr").attr("id"), d;
                e(this).find(".fa").removeClass().addClass(l), e("#jquery_jplayer_1").attr("data-audio-id", n), e("#jquery_jplayer_1").jPlayer("destroy"), e("#jquery_jplayer_1").jPlayer({
                    ready: function () {
                        e(this).jPlayer("setMedia", {mp3: t})
                    },
                    pause: function () {
                        var a = "#" + e(this).attr("data-audio-id");
                        e(a).find(".fa").removeClass().addClass(r)
                    },
                    play: function () {
                        var a = "#" + e(this).attr("data-audio-id");
                        e(a).find(".fa").removeClass().addClass(l)
                    },
                    cssSelectorAncestor: "#jp_container_1",
                    swfPath: "/js/jplayer",
                    supplied: "mp3",
                    useStateClassSkin: !0,
                    autoBlur: !1,
                    smoothPlayBar: !0,
                    keyEnabled: !0,
                    remainingDuration: !0,
                    toggleDuration: !0,
                    errorAlerts: !0
                }), setTimeout((function () {
                    e("#jquery_jplayer_1").jPlayer("play")
                }), 100)
            }
        }));
        var n = "play", d = "pausa", c;

        function p(a) {
            var t = a.closest("tr").attr("id"), o = e("#jquery_jplayer_2").attr("data-audio-id");
            if ("undefined" != o) return String(t) == String(o) ? e("#jquery_jplayer_2").data().jPlayer.status.paused ? (e("#jquery_jplayer_2").jPlayer("play"), e("#" + o).find(".fa").removeClass().addClass(d), !0) : (e("#jquery_jplayer_2").jPlayer("stop"), e("#" + o).find(".fa").removeClass().addClass(n), !0) : (e("#" + o).find(".fa").removeClass().addClass(n), !1)
        }

        (e("#myModalTerms").hide(), e("#myModalVideo").hide(), e(".modal-backdrop").remove(), this.document.body.classList.remove("modal-open"), e(".singleVideoPlayer").length && e(".thumb_container").on("click", (function () {
            if (e("#myModalVideo").modal({backdrop: !0, keyboard: !1, show: !1}), !p(e(this))) {
                e("#myModalVideo").modal("show");
                var a = e(this).attr("id"), t = e(this).attr("data-mp3"), o = e(this).attr("data-title"),
                    r = "#" + e(this).closest("tr").attr("id"), s = e(this).closest("tr").attr("id"),
                    l = e("#myModalVideo").modal("show"), i;
                l.find(".modal-header h4").remove(), l.find(".modal-header").append("<h4>Preview: " + o + "</h4>"), e(this).removeClass("play").addClass(d), e("#jquery_jplayer_2").attr("data-video-id", s), e("#jquery_jplayer_2").jPlayer("destroy"), e("#jquery_jplayer_2").jPlayer({
                    ready: function () {
                        e(this).jPlayer("setMedia", {m4v: t})
                    },
                    pause: function () {
                        var a = "#" + e(this).attr("data-video-id");
                        e(a).find(".thumb_container").removeClass("play").addClass(n)
                    },
                    play: function () {
                        var a = "#" + e(this).attr("data-video-id");
                        e(a).find(".thumb_container").removeClass("pausa").addClass(d)
                    },
                    cssSelectorAncestor: "#jp_container_2",
                    swfPath: "/js/jplayer",
                    supplied: "m4v",
                    useStateClassSkin: !0,
                    autoBlur: !1,
                    smoothPlayBar: !0,
                    keyEnabled: !0,
                    remainingDuration: !0,
                    toggleDuration: !0,
                    errorAlerts: !0
                }), setTimeout((function () {
                    e("#jquery_jplayer_2").jPlayer("play")
                }), 100)
            }
        })), e(".xvPackeryItems").length) && e(".xvPackeryItems").packery({itemSelector: ".xvPackeryItem", gutter: 0});
        var u = e(".eventsSlider"), y = u.data("nexttext"), m = u.data("prevtext");

        function f(e) {
            var a;
            return /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
        }

        e(".eventsSlider").bxSlider({
            mode: "vertical",
            minSlides: 3,
            maxSlider: 3,
            slideMargin: 10,
            pager: !1,
            nextSelector: "#nextEvents",
            prevSelector: "#prevEvents",
            nextText: y,
            prevText: m,
            infiniteLoop: !1,
            hideControlOnEnd: !0
        }), 0 != e("#contactForm").length && e("#contactForm").submit((function (a) {
            a.preventDefault();
            var t = e("#xv_name").val(), o = e("#xv_email").val(), r = e("#xv_message").val(),
                s = "name=" + t + "&email=" + o + "&message=" + r;
            return "" !== t && f(o) && "" !== r ? e.ajax({
                type: "POST",
                url: "assets/php/submit.php",
                data: s,
                success: function () {
                    e("#contactForm").slideUp(), e(".messageSentSuccess").fadeIn()
                }
            }) : e(".validationError").show(), !1
        })), e(".xv-gmap").length && e(".xv-gmap").each((function () {
            var a = e(this), t = a.attr("id"), o = a.data("address"), r = a.data("maptype"), l = a.data("zoomlvl"), i,
                n;
            switch (a.data("theme")) {
                case"pink":
                    n = [{stylers: [{hue: "#e62948"}, {visibility: "on"}, {invert_lightness: !0}, {saturation: 40}, {lightness: 10}]}];
                    break;
                case"red":
                    n = [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{color: "#ffdfa6"}]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{color: "#b52127"}]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{color: "#c5531b"}]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{color: "#74001b"}, {lightness: -10}]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{color: "#da3c3c"}]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry.fill",
                        stylers: [{color: "#74001b"}]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry.stroke",
                        stylers: [{color: "#da3c3c"}]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry.fill",
                        stylers: [{color: "#990c19"}]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{color: "#ffffff"}]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{color: "#74001b"}, {lightness: -8}]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{color: "#6a0d10"}, {visibility: "on"}]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry",
                        stylers: [{color: "#ffdfa6"}, {weight: .4}]
                    }, {featureType: "road.local", elementType: "geometry.stroke", stylers: [{visibility: "off"}]}];
                    break;
                case"blue":
                    n = [{stylers: [{hue: "#007fff"}, {saturation: 89}]}, {
                        featureType: "water",
                        stylers: [{color: "#ffffff"}]
                    }, {featureType: "administrative.country", elementType: "labels", stylers: [{visibility: "off"}]}];
                    break;
                case"yellow":
                    n = [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{color: "#a2daf2"}]
                    }, {
                        featureType: "landscape.man_made",
                        elementType: "geometry",
                        stylers: [{color: "#f7f1df"}]
                    }, {
                        featureType: "landscape.natural",
                        elementType: "geometry",
                        stylers: [{color: "#d0e3b4"}]
                    }, {
                        featureType: "landscape.natural.terrain",
                        elementType: "geometry",
                        stylers: [{visibility: "off"}]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{color: "#bde6ab"}]
                    }, {
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [{visibility: "off"}]
                    }, {
                        featureType: "poi.medical",
                        elementType: "geometry",
                        stylers: [{color: "#fbd3da"}]
                    }, {featureType: "poi.business", stylers: [{visibility: "off"}]}, {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{visibility: "off"}]
                    }, {
                        featureType: "road",
                        elementType: "labels",
                        stylers: [{visibility: "off"}]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{color: "#ffe15f"}]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{color: "#efd151"}]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry.fill",
                        stylers: [{color: "#ffffff"}]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry.fill",
                        stylers: [{color: "black"}]
                    }, {
                        featureType: "transit.station.airport",
                        elementType: "geometry.fill",
                        stylers: [{color: "#cfb2db"}]
                    }];
                    break;
                case"green":
                    n = [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{visibility: "on"}, {color: "#aee2e0"}]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry.fill",
                        stylers: [{color: "#abce83"}]
                    }, {
                        featureType: "poi",
                        elementType: "geometry.fill",
                        stylers: [{color: "#769E72"}]
                    }, {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#7B8758"}]
                    }, {
                        featureType: "poi",
                        elementType: "labels.text.stroke",
                        stylers: [{color: "#EBF4A4"}]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{visibility: "simplified"}, {color: "#8dab68"}]
                    }, {
                        featureType: "road",
                        elementType: "geometry.fill",
                        stylers: [{visibility: "simplified"}]
                    }, {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#5B5B3F"}]
                    }, {
                        featureType: "road",
                        elementType: "labels.text.stroke",
                        stylers: [{color: "#ABCE83"}]
                    }, {
                        featureType: "road",
                        elementType: "labels.icon",
                        stylers: [{visibility: "off"}]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{color: "#A4C67D"}]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{color: "#9BBF72"}]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{color: "#EBF4A4"}]
                    }, {featureType: "transit", stylers: [{visibility: "off"}]}, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{visibility: "on"}, {color: "#87ae79"}]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{color: "#7f2200"}, {visibility: "off"}]
                    }, {
                        featureType: "administrative",
                        elementType: "labels.text.stroke",
                        stylers: [{color: "#ffffff"}, {visibility: "on"}, {weight: 4.1}]
                    }, {
                        featureType: "administrative",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#495421"}]
                    }, {
                        featureType: "administrative.neighborhood",
                        elementType: "labels",
                        stylers: [{visibility: "off"}]
                    }];
                    break;
                default:
                    n = []
            }
            s(t, o, r, l, n)
        }))
    }

    if (e(window).on("pronto.render", (function (a, t) {
        e("html, body").animate({scrollTop: 0}), n(), e(".pageLoader").removeClass("active")
    })), e(window).on("pronto.request", (function (a, t) {
        e(".pageLoader").addClass("active")
    })), e((function () {
        e('[data-toggle="tooltip"]').tooltip()
    })), e(".downloadButtonVideo").on("click", (function (t) {
        t.preventDefault();
        var o = e(this).data("id");
        e.ajax({
            data: {product_id: o},
            type: "POST",
            dataType: "json",
            url: a + "micuenta/descargar_producto_video/"
        }).done((function (t) {
            var r;
            t.success ? (console.log(t), e(".player-" + o).addClass("archivo_cliente"), t.is_unlimited || e("#cantidad_tokens_video").html(t.total_tokens), window.location.assign(a + "products/descargar_producto_video/" + o), e.ajax({
                type: "POST",
                dataType: "json",
                url: a + "micuenta/hasTokensPostVideo/"
            }).done((function (a) {
                console.log(a), t.is_unlimited || e("#cantidad_tokens_video").html(a.tokens_video)
            })).fail((function () {
                alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
            }))) : ("NOTOKENS" == t.message && (console.log("entro no tokens"), e("#messagesModal").modal("show"), e("#messagesModal .modal-title").empty(), e("#messagesModal .modal-title").append('<i class="fa fa-exclamation-triangle"></i> NO POSEES DESCARGAS DISPONIBLES PARA VIDEO'), e("#messagesModal .modal-body").empty(), e("#messagesModal .modal-body").append('Obtén uno de nuestros planes de DESCARGAS en el siguiente enlace para que continues disfrutando de nuestro contenido<br> <a href="' + a + 'planes/" class="btn btn-default">Comprar Planes</a>')), "NOLOGGUEDIN" == t.message && (e("#myModal").modal("show"), e("#myModal .modal-body .alert").remove(), e("#myModal .modal-body").append('<div class="alert alert-danger">Necesitas estar logueado y adquirir uno de nuestros planes para poder descargar este contenido</div>')), console.log(t.message))
        })).fail((function () {
            alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
        }))
    })), e(".downloadButton").on("click", (function (t) {
        t.preventDefault();
        var o = e(this).data("id");
        e.ajax({
            data: {product_id: o},
            type: "POST",
            dataType: "json",
            url: a + "micuenta/descargar_producto/"
        }).done((function (t) {
            var r;
            t.success ? (console.log(t), e(".player-" + o).addClass("archivo_cliente"), t.is_unlimited || e("#cantidad_tokens").html(t.total_tokens), window.location.assign(a + "products/descargar_producto/" + o), e.ajax({
                type: "POST",
                dataType: "json",
                url: a + "micuenta/hasTokensPost/"
            }).done((function (a) {
                t.is_unlimited || e("#cantidad_tokens").html(a.tokens)
            })).fail((function () {
                alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
            }))) : ("NOTOKENS" == t.message && (console.log("entro no tokens"), e("#messagesModal").modal("show"), e("#messagesModal .modal-title").empty(), e("#messagesModal .modal-title").append('<i class="fa fa-exclamation-triangle"></i> NO POSEES DESCARGAS DISPONIBLES'), e("#messagesModal .modal-body").empty(), e("#messagesModal .modal-body").append('Obtén uno de nuestros planes de DESCARGAS en el siguiente enlace para que continues disfrutando de nuestro contenido<br> <a href="' + a + 'planes/" class="btn btn-default">Comprar Planes</a>')), "NOLOGGUEDIN" == t.message && (e("#myModal").modal("show"), e("#myModal .modal-body .alert").remove(), e("#myModal .modal-body").append('<div class="alert alert-danger">Necesitas estar logueado y adquirir uno de nuestros planes para poder descargar este contenido</div>')), console.log(t.message))
        })).fail((function () {
            alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
        }))
    })), e(".addToCart").on("click", (function () {
        var t = e(this).position(), o = e(this).outerWidth(), r = e(this).closest("tr").attr("data-product"),
            s = e(this).data("id");
        console.log(s), e.ajax({
            data: {id: s},
            type: "POST",
            dataType: "json",
            url: a + "cart/acciones/add_to_cart/"
        }).done((function (e) {
            e.success ? (i(e.cart_count), console.log(e.cart_count), l(r, t, o)) : alert(e.message)
        })).fail((function () {
            alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
        }))
    })), e("#aplicarDescuento").on("click", (function (t) {
        console.log("Aplicando Cupon de descuento"), e.ajax({
            data: {cupon: e("#cuponcode").val()},
            type: "POST",
            dataType: "json",
            url: a + "cart/applyCupon/"
        }).done((function (e) {
            e.success ? (alert(e.message), location.reload()) : alert(e.message)
        })).fail((function () {
            alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
        }))
    })), e("#removeCupon").on("click", (function (t) {
        console.log("Eliminando Cupon de descuento"), e.ajax({
            type: "POST",
            dataType: "json",
            url: a + "cart/removeCupon/"
        }).done((function (e) {
            e.success ? (alert(e.message), location.reload()) : alert(e.message)
        })).fail((function () {
            alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
        }))
    })), e("#login-btn").on("click", (function (t) {
        console.log("ingresando"), e.ajax({
            data: {email: e("#email").val(), password: e("#password").val()},
            type: "POST",
            dataType: "json",
            url: a + "login/front/"
        }).done((function (e) {
            e.success ? location.reload() : alert(e.message)
        })).fail((function () {
            alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
        }))
    })), e("#myModalRecuperar").on("shown.bs.modal", (function () {
        e("#myModal").modal("hide")
    })), e("#recuperar-btn").on("click", (function (t) {
        console.log("recuperando"), e.ajax({
            data: {email: e("#recuperar-email").val()},
            type: "POST",
            dataType: "json",
            url: a + "login/recuperar_contrasena/"
        }).done((function (e) {
            e.success ? (alert(e.message), location.reload()) : alert(e.message)
        })).fail((function () {
            alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
        }))
    })), e("#cambiarpass").on("click", (function (t) {
        console.log("cambiando pass"), 0 != e("#cpassword").val().length && 0 != e("#crpassword").val().length ? e("#cpassword").val() != e("#crpassword").val() ? alert("Ambos campos deben ser iguales") : e.ajax({
            data: {
                pass: e("#cpassword").val(),
                rpass: e("#crpassword").val(),
                id: e("#cuser_id").val()
            }, type: "POST", dataType: "json", url: a + "users/changepass/"
        }).done((function (e) {
            e.success ? (alert("Tu contraseña ha sido modificada. Serás redirigido para que ingreses."), location.href = "https://videoremixpool.com") : alert("Algo ha salido mal, intentalo más tarde")
        })).fail((function (e) {
            return alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com"), !1
        })) : alert("Ambos campos deben estar llenos")
    })), e("#registrar-btn").on("click", (function (t) {
        console.log("registrando"), 0 != e("#registro-password").val().length && 0 != e("#registro-repeatpassword").val().length && 0 != e("#registro-email").val().length && 0 != e("#registro-username").val().length ? e("#registro-password").val() != e("#registro-repeatpassword").val() ? alert("password y repetir password deben ser iguales") : e.ajax({
            data: {
                email: e("#registro-email").val(),
                username: e("#registro-username").val(),
                password: e("#registro-password").val()
            }, type: "POST", dataType: "json", url: a + "users/registro/"
        }).done((function (a) {
            "email_existe" == a.respuesta ? alert("Este e-mail ya esta registrado") : "username_existe" == a.respuesta ? alert("Este username ya esta registrado") : "ok" == a.respuesta && (e("#registrar-form").trigger("reset"), alert("Gracias por registrarte. Ya puedes ingresar."), location.reload())
        })).fail((function () {
            alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
        })) : alert("Todos los campos son obligatorios")
    })), e(".deleteFromCart").on("click", (function () {
        var t = e(this).data("id");
        e.ajax({
            data: {id: t},
            type: "POST",
            dataType: "json",
            url: a + "cart/acciones/remove_from_cart/"
        }).done((function (e) {
            e.success ? (console.log("eliminado"), location.reload()) : alert(e.message)
        })).fail((function () {
            alert("Algo extraño ha ocurrido 🤔 envía un mensaje a soporte para corregirlo lo antes posible a: support@videoremixpool.com")
        }))
    })), n(), e("#sticktop").sticky({topSpacing: 0}), e(window).on("resize load", (function () {
        e(".sticky-wrapper").css("height", +e("#sticktop").innerHeight() + "px")
    })), e("body").on("click", ".dl-menu > li > a", (function (a) {
        var t = e(this), o = t.parent();
        o.children("ul").length ? (a.preventDefault(), o.children("ul").addClass("expand"), t.parents(".dl-menu").addClass("backed")) : (e(".dl-menu").removeClass("xvMenuShow"), e(".dl-menu > li").removeClass("active"), t.parent().addClass("active"))
    })), e("body").on("click", ".dl-menu > li > ul > li > a", (function (a) {
        e(this).hasClass("backLvl") || (e(".dl-menu").removeClass("backed"), e(".dl-menu").removeClass("xvMenuShow"))
    })), e("body").on("click", ".menuTrigger", (function (a) {
        a.preventDefault(), e(".dl-menu").toggleClass("xvMenuShow")
    })), e("body").on("click", ".backLvl", (function (a) {
        var t = e(this);
        a.preventDefault(), t.parents(".dl-submenu").removeClass("expand"), t.parents(".dl-menu").removeClass("backed")
    })), e(".dl-submenu").each((function () {
        var a;
        e(this).prepend('<li class="gobackLvl"><a class="backLvl" href="#"><i class="fa fa-long-arrow-left"></i>Go Back</li>')
    })), e("body").on("click", (function (a) {
        e(a.target).closest(".the-xv-Jplayer").length || (e(".jp-playlist").slideUp(), e("body").removeClass("playerFullOn"))
    })), e(".sound-trigger").click((function (a) {
        e(this).parent(".jp-volume-controls").toggleClass("open")
    })), e(".playList-trigger").click((function (a) {
        e("body").toggleClass("playerFullOn"), e(".jp-playlist").slideToggle()
    })), e("#audio-player").length) {
        if (e("#player-instance").jPlayer({cssSelectorAncestor: "#audio-player"}), e(".playlist-files").length) {
            for (var d = [], c = e(".playlist-files li"), p = c.length, u = 0 ; u < p ; u++) {
                var y = {};
                y.title = c.eq(u).attr("data-title"), y.artist = c.eq(u).attr("data-artist"), y.mp3 = c.eq(u).attr("data-mp3"), d.push(y)
            }
            r = new jPlayerPlaylist({
                jPlayer: "#player-instance",
                enableRemoveControls: !1,
                cssSelectorAncestor: "#audio-player"
            }, d, {
                playlistOptions: {
                    autoPlay: !1,
                    loopOnPrevious: !0
                }
            }, {
                swfPath: "assets/js/jPlayer/jquery.jplayer.swf",
                supplied: "mp3",
                displayTime: "fast",
                addTime: "fast"
            }), e("#player-instance").bind(e.jPlayer.event.play, (function (a) {
                var t = r.current, o = r.playlist;
                jQuery.each(o, (function (a, o) {
                    a == t && e(".the-xv-Jplayer .audio-title").html('<span class="jp-artist">' + o.artist + '</span><span class="jp-songTitle">' + o.title + "</span>")
                }))
            }))
        }
        e(".jp-prev").click((function () {
            r.previous()
        }))
    }
    if (e("#audio-player-radio").length) {
        var m = e("#audio-player-radio").attr("data-radio-url"), f,
            g = {title: e("#audio-player-radio").attr("data-title"), mp3: m}, v = !1;
        e("#player-instance-radio").jPlayer({
            ready: function (a) {
                v = !0, e(this).jPlayer("setMedia", g).jPlayer("play")
            },
            pause: function () {
                e(this).jPlayer("clearMedia")
            },
            error: function (a) {
                v && a.jPlayer.error.type === e.jPlayer.error.URL_NOT_SET && e(this).jPlayer("setMedia", g).jPlayer("play")
            },
            cssSelectorAncestor: "#audio-player-radio",
            swfPath: "assets/js/jPlayer/jquery.jplayer.swf",
            preload: "none"
        })
    }
    var h = e(".waveSurferPlayer"), b = e("#waveform"), T = b.attr("data-wave-color"), w = b.attr("data-wave-progress"),
        j = b.attr("data-cursor"), k = +b.attr("data-height"), S;

    function _(a) {
        (a = Object.create(WaveSurfer)).init({
            container: "#waveform",
            waveColor: T,
            progressColor: w,
            cursorColor: j,
            height: k
        }), a.load("assets/demo-data/demo.wav"), a.on("ready", (function (t) {
            a.play(), e(".playWave").hide()
        })), a.on("error", (function (e) {
            console.error(e)
        })), a.on("finish", (function () {
            console.log("Finished playing"), e(".pauseWave").hide(), e(".playWave").show()
        })), e("body").on("click", ".playWave", (function (t) {
            t.preventDefault(), a.play(), e(this).hide(), e(".pauseWave").show()
        })), e("body").on("click", ".pauseWave", (function (t) {
            t.preventDefault(), a.pause(), e(this).hide(), e(".playWave").show()
        })), e("body").on("click", ".muteWave", (function (t) {
            t.preventDefault(), e(this).toggleClass("pc-mute", "pc-volume"), a.toggleMute()
        }))
    }

    h.length && (WaveSurfer.Swf.supportsAudioContext() && WaveSurfer.Swf.supportsCanvas() ? _(S = Object.create(WaveSurfer)) : (swfobject.embedSWF("assets/js/wavesurfer/wavesurfer.swf", "wavesurfer", "100%", "128", "11.1.0", "expressInstall.swf", {}, {allowScriptAccess: "always"}, {}), (S = new WaveSurfer.Swf).on("init", (function () {
        _(S)
    }))))
}));