(this["webpackJsonpal-plato"] = this["webpackJsonpal-plato"] || []).push([
    [0], {
        105: function (n, e, t) {},
        106: function (n, e, t) {},
        115: function (n, e, t) {},
        116: function (n, e, t) {
            "use strict";
            t.r(e);
            var a, i, r, o, c, s, d, l, b, p, x, j, u, h, m, f, g, O, w, v, y, k, z, C, S, F, P, E, A, D, N, I, M, B, T, L, U, H, R, q, J, W, Y, Q, _, K, V, X, Z, $, G, nn, en, tn, an, rn, on, cn, sn, dn, ln, bn, pn, xn, jn, un, hn, mn, fn, gn, On, wn, vn, yn, kn, zn, Cn, Sn, Fn, Pn, En, An, Dn, Nn, In, Mn, Bn, Tn, Ln, Un, Hn, Rn, qn, Jn, Wn, Yn, Qn, _n, Kn, Vn, Xn, Zn, $n, Gn, ne, ee, te, ae, ie, re, oe, ce, se, de, le, be, pe, xe, je, ue, he, me, fe, ge, Oe, we, ve, ye = t(3),
                ke = t.n(ye),
                ze = t(46),
                Ce = t.n(ze),
                Se = t(10),
                Fe = (t(62), t(80), t(13)),
                Pe = t(12),
                Ee = t(7),
                Ae = t(11),
                De = t.n(Ae),
                Ne = t(19),
                Ie = t(38),
                Me = t(69),
                Be = (t(63), t(117), t(118), t(2)),
                Te = Me.a.initializeApp({
                    apiKey: "AIzaSyBEXin5jFQ50blMlUQgLVWayZi6tUHDifA",
                    authDomain: "products-comia.firebaseapp.com",
                    projectId: "products-comia",
                    storageBucket: "products-comia.appspot.com",
                    messagingSenderId: "84845977891",
                    appId: "1:84845977891:web:96c192fe3fd52800deec96"
                }),
                Le = Te.auth(),
                Ue = Te.firestore(),
                He = Te.storage(),
                Re = Object(ye.createContext)(),
                qe = function (n) {
                    var e = Object(ye.useState)(),
                        t = Object(Ee.a)(e, 2),
                        a = (t[0], t[1]),
                        i = Object(ye.useState)(),
                        r = Object(Ee.a)(i, 2),
                        o = (r[0], r[1]);
                    return Object(ye.useEffect)((function () {
                        var n = Te.auth().onAuthStateChanged(a, o);
                        return function () {
                            return n()
                        }
                    }), []), Object(Be.jsx)(Re.Provider, Object(Se.a)({
                        value: {}
                    }, n))
                },
                Je = t(120),
                We = t(119),
                Ye = t(4),
                Qe = t(5),
                _e = (Qe.a.div(a || (a = Object(Ye.a)(["\njustify-content: center;\ndisplay: flex;\n\n"]))), Qe.a.button(i || (i = Object(Ye.a)(["\n    margin-left: 95%;\n    margin-top: 170px;\n    transform: rotate(270deg);\n"]))), Qe.a.div(r || (r = Object(Ye.a)(["\n"]))), Qe.a.form(o || (o = Object(Ye.a)(["\n    background-color: #efefef;\n    color: black;\n    padding: 30px;\n    position: absolute;\n    width: 50%;\n    z-index: 2;\n\n"]))), Qe.a.div(c || (c = Object(Ye.a)([""])))),
                Ke = Qe.a.label(s || (s = Object(Ye.a)(["\n    display: block;\n    padding-top: 15px;\n    margin-bottom: 5px;\n"]))),
                Ve = Qe.a.input(d || (d = Object(Ye.a)(["\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    display: block;\n    padding: 5px;\n    margin-bottom: 5px;\n    width: 90%;\n    height: 25px;\n    outline: none;\n    border-radius: 5px;\n\n    @media screen and (max-width: 1330px){\n        font-size: 1.2rem;\n    }\n    @media screen and (max-width: 420px){\n        width: 100%;\n        font-size: 1.2rem;\n    }\n"]))),
                Xe = Qe.a.textarea(l || (l = Object(Ye.a)(["\n    width: 100%;\n    display: block;\n    height: 200px;\n    margin: 10px auto 0;\n    outline: none;\n    border-radius: 5px;\n    padding: 5px;\n    @media screen and (max-width: 1330px){\n        font-size: 1.2rem;\n    }\n    @media screen and (max-width: 420px){\n        font-size: 1.2rem;\n    }\n"]))),
                Ze = (Object(Qe.a)(Pe.b)(b || (b = Object(Ye.a)(["\n    text-decoration: none;\n"]))), Qe.a.button(p || (p = Object(Ye.a)(["\n    background-color: #fff;\n    color: #020202;\n    cursor: pointer;\n    width: 30%;\n    display: block;\n    padding: 5px 10px 5px 10px;\n    font-size: 18px;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin: 20px auto 0;\n\n    @media screen and (max-width: 420px){\n        width: 40%;\n    }\n"])))),
                $e = Qe.a.i(x || (x = Object(Ye.a)(["\n    color: #020202;\n    left: 95%;\n    top: 2px;\n    position: absolute;\n    font-size: 27px;\n    font-weight: bold;\n    cursor: pointer;\n    z-index: 1000;\n\n    @media screen and (max-width: 770px){\n        left: 93%;\n    }\n    @media screen and (max-width: 420px){\n        top: 1%;\n        left: 90%;\n        font-size: 2rem;\n    }\n"]))),
                Ge = t(18),
                nt = Qe.a.footer(j || (j = Object(Ye.a)(["\n    background-color: #292828;\n    margin-top: 20px;\n"]))),
                et = Qe.a.div(u || (u = Object(Ye.a)(["\n    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(1,1,1,1) 100%);\n    color: #43b581;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 9rem;\n"]))),
                tt = Qe.a.ul(h || (h = Object(Ye.a)(["\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 20px;\n    margin-bottom: 5px;\n"]))),
                at = Qe.a.ul(m || (m = Object(Ye.a)(["\n    list-style: none;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    "]))),
                it = Qe.a.li(f || (f = Object(Ye.a)(["\n    margin-right: 20px;\n    text-align: center;\n"]))),
                rt = Object(Qe.a)(Pe.b)(g || (g = Object(Ye.a)(["\n    text-decoration: none;\n    color: #43b581;\n    font-weight: 500;\n    font-size: 16px;\n\n    &:hover {\n        color: #fff;\n        transition: 0.2s;\n    }\n"]))),
                ot = Qe.a.p(O || (O = Object(Ye.a)(["\n    font-weight: 500;\n    font-style: italic;\n    margin-bottom: -10px;\n    margin-top: 1rem;\n    position: relative;\n"]))),
                ct = Qe.a.i(w || (w = Object(Ye.a)(["\n    color: #43b581;\n    font-size: 2rem;\n\n    &:hover {\n        color: #fff;\n        transition: 0.2s;\n    }\n"]))),
                st = function () {
                    return Object(Be.jsx)(Be.Fragment, {
                        children: Object(Be.jsx)(nt, {
                            children: Object(Be.jsxs)(et, {
                                children: [Object(Be.jsxs)(tt, {
                                    children: [Object(Be.jsx)(it, {
                                        children: Object(Be.jsx)(rt, {
                                            children: Object(Be.jsx)(ct, {
                                                children: Object(Be.jsx)(Ge.b, {})
                                            })
                                        })
                                    }), Object(Be.jsx)(it, {
                                        children: Object(Be.jsx)(rt, {
                                            children: Object(Be.jsx)(ct, {
                                                children: Object(Be.jsx)(Ge.g, {})
                                            })
                                        })
                                    }), Object(Be.jsx)(it, {
                                        children: Object(Be.jsx)(rt, {
                                            children: Object(Be.jsx)(ct, {
                                                children: Object(Be.jsx)(Ge.d, {})
                                            })
                                        })
                                    }), Object(Be.jsx)(it, {
                                        children: Object(Be.jsx)(rt, {
                                            children: Object(Be.jsx)(ct, {
                                                children: Object(Be.jsx)(Ge.c, {})
                                            })
                                        })
                                    })]
                                }), Object(Be.jsxs)(at, {
                                    children: [Object(Be.jsx)(it, {
                                        children: Object(Be.jsx)(rt, {
                                            children: "About us"
                                        })
                                    }), Object(Be.jsx)(it, {
                                        children: Object(Be.jsx)(rt, {
                                            children: "Where we are"
                                        })
                                    }), Object(Be.jsx)(it, {
                                        children: Object(Be.jsx)(rt, {
                                            children: "Term of Service"
                                        })
                                    }), Object(Be.jsx)(it, {
                                        children: Object(Be.jsx)(rt, {
                                            children: "Contact"
                                        })
                                    })]
                                }), Object(Be.jsx)(ot, {
                                    children: "avilo -All rights reserved \xa9"
                                })]
                            })
                        })
                    })
                },
                dt = t.p + "static/media/bgHero.e5f22b6c.jpg",
                lt = t(73),
                bt = t.p + "static/media/map.a95516ff.png",
                pt = t.p + "static/media/imgTooltipcut.09a2ca1c.jpg",
                xt = Qe.a.div(v || (v = Object(Ye.a)(["\n    width: 100%;\n    box-shadow: 5px 5px 60px rgba(0,0,0,0.2);\n    font-size: 16px;\n"]))),
                jt = Qe.a.figure(y || (y = Object(Ye.a)(["\n    position: relative;\n    width: 100%;\n"]))),
                ut = Qe.a.figcaption(k || (k = Object(Ye.a)(["\n    /*EMPTY*/\n"]))),
                ht = Qe.a.img(z || (z = Object(Ye.a)(["\n    width: 100%;\n    vertical-align: top;\n    box-shadow: 5px 5px 60px rgba(0,0,0,0.2);\n    border-radius: 5px;\n"]))),
                mt = Qe.a.i(C || (C = Object(Ye.a)(["\n    color: #D62E2E;\n    position: absolute;\n    font-size: 2rem;\n    top: 32%;\n    left: 35%;\n    cursor: pointer;\n"]))),
                ft = Qe.a.i(S || (S = Object(Ye.a)(["\n    color: #d62e2e;\n    position: absolute;\n    right: 5px;\n    top: 2px;\n    font-size: 27px;\n    cursor: pointer;\n"]))),
                gt = Qe.a.div(F || (F = Object(Ye.a)(['\n    display: flex;\n    position: absolute;\n    top: -58%;\n    left: 11.4%;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 5px 5px 60px rgba(0,0,0,0.2);\n    width: 31.25em;\n    opacity: 0;\n    transition: .3s ease all;\n    transform: translateY(10px);\n\n    &.active{\n        opacity: 1;\n        transform: translateY(10px);\n        z-index: 200000;\n    }\n    &::after{\n        position: absolute;\n        content: "";\n        display: inline-block;\n        border-left: 15px solid transparent;\n        border-right: 15px solid transparent;\n        border-top: 15px solid #fff;\n        bottom: -15px;\n        left: calc(50% - 15px);\n    }\n']))),
                Ot = Qe.a.div(P || (P = Object(Ye.a)(["\n    width: 40%;\n"]))),
                wt = Qe.a.img(E || (E = Object(Ye.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 10px 0 0 10px;\n    vertical-align: top;\n"]))),
                vt = Qe.a.div(A || (A = Object(Ye.a)(["\n    width: 60%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"]))),
                yt = Qe.a.h3(D || (D = Object(Ye.a)(["\n    color: #0D816A;\n    font-weight: 600;\n    margin-bottom: 10px;\n"]))),
                kt = Qe.a.p(N || (N = Object(Ye.a)(["\n    color: #707070;\n    font-size: 12px;\n    margin-bottom: 20px;\n"]))),
                zt = Qe.a.p(I || (I = Object(Ye.a)(["\n    color: #020202;\n    font-size: 15px;\n    margin-bottom: 20px;\n"]))),
                Ct = Qe.a.div(M || (M = Object(Ye.a)(["\n    display: flex;\n    justify-content: center;\n"]))),
                St = Qe.a.button(B || (B = Object(Ye.a)(["\n    border: none;\n    background-color: #0D816A;\n    font-weight: bold;\n    padding: 10px 20px;\n    width: 80%;\n    color: #fff;\n    border-radius: 100px;\n    cursor: pointer;\n\n    &:hover{\n        background-color: #05a081;\n        transition: .2s;\n    }\n"]))),
                Ft = {
                    hidden: {
                        x: "100vw",
                        opacity: 0
                    },
                    show: {
                        x: "0vw",
                        opacity: 1,
                        transition: {
                            delay: .4,
                            ease: "easeInOut"
                        }
                    }
                },
                Pt = function (n) {
                    var e = n.showMaps,
                        t = n.setShowMaps,
                        a = Object(ye.useState)(!1),
                        i = Object(Ee.a)(a, 2),
                        r = i[0],
                        o = i[1],
                        c = function () {
                            o(!r)
                        };
                    return Object(Be.jsx)(Be.Fragment, {
                        children: e && Object(Be.jsx)(Je.a, {
                            exitBeforeEnter: !0,
                            children: Object(Be.jsx)(We.a.div, {
                                className: "divMapsPosition",
                                variants: Ft,
                                initial: "hidden",
                                animate: "show",
                                children: Object(Be.jsx)(xt, {
                                    children: Object(Be.jsxs)(jt, {
                                        children: [Object(Be.jsx)(ht, {
                                            src: bt
                                        }), Object(Be.jsx)(ft, {
                                            className: "iclose",
                                            onClick: function () {
                                                return t(!1)
                                            },
                                            children: Object(Be.jsx)(lt.a, {})
                                        }), Object(Be.jsxs)(ut, {
                                            children: [Object(Be.jsx)(mt, {
                                                id: "iMap",
                                                onMouseEnter: c,
                                                onMouseLeave: c,
                                                children: Object(Be.jsx)(Ge.d, {})
                                            }), Object(Be.jsxs)(gt, {
                                                id: "tooltip",
                                                className: r ? "active" : null,
                                                children: [Object(Be.jsx)(Ot, {
                                                    children: Object(Be.jsx)(wt, {
                                                        src: pt
                                                    })
                                                }), Object(Be.jsxs)(vt, {
                                                    children: [Object(Be.jsx)(yt, {
                                                        children: "alPlato"
                                                    }), Object(Be.jsx)(kt, {
                                                        children: "Blvd. San Juan 200 C\xf3rdoba, Argentina"
                                                    }), Object(Be.jsxs)(zt, {
                                                        children: ["Restaurante de comidas varias con servicio de entrega a domicilio.", Object(Be.jsx)("br", {})]
                                                    }), Object(Be.jsx)(Ct, {
                                                        children: Object(Be.jsx)(St, {
                                                            children: "Contacto"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })
                },
                Et = t.p + "static/media/sushiPromo.0ca82187.jpg",
                At = Qe.a.div(T || (T = Object(Ye.a)(["\n    width: 100%;\n    height: 100vh;\n   /* background-color: rgb(154,154,154,0.2);*/\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n    position: absolute;\n    /*margin-top: 164px;*/\n   /* display: none; */\n"]))),
                Dt = Qe.a.div(L || (L = Object(Ye.a)(["\n    \n    width: 500px;\n    height: 500px;\n    background-color: #eaeaea;\n    border-radius: 10px;\n    box-shadow: 11px 11px 17px 6px rgba(0,0,0,0.62);\n\n    @media screen and (max-width: 460px){\n       width: 55%;\n       height: 350px;\n    }\n"]))),
                Nt = Qe.a.div(U || (U = Object(Ye.a)(["\n    background-color: #0D816A;\n    background: rgb(67,181,129);\n    background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);\n    padding: 0;\n    height: 100%;\n    width: 25%;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    margin-left: 75.1%;\n    border-radius: 0 10px 10px 0;\n"]))),
                It = Qe.a.i(H || (H = Object(Ye.a)(["\n    position: absolute;\n    z-index: 1;\n    font-size: 35px;\n    font-weight: bold;\n    cursor: pointer;\n    right: 245px;\n\n    @media screen and (max-width: 770px){\n        right: 140px;\n    }\n    @media screen and (max-width: 460px){\n        right: 150px;\n    }\n"]))),
                Mt = Qe.a.h1(R || (R = Object(Ye.a)(["\n    position: absolute;\n    margin-bottom: 20px;\n    font-size: 3.8em;\n    z-index: 1;\n    background: -webkit-linear-gradient(360deg, rgba(14,130,106,1) 39%, rgba(2,0,36,10) 97%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    @media screen and (max-width: 460px){\n       font-size: 3rem;\n    }\n"]))),
                Bt = Qe.a.p(q || (q = Object(Ye.a)(["\n    position: absolute;\n    z-index: 1;\n    line-height: 45px;\n    font-weight: bold;\n    font-size: 22px;\n    margin-top: 225px;\n    margin-left: 20px;\n\n    @media screen and (max-width: 460px){\n        line-height: 30px;\n        margin-top: 150px;\n        z-index: 2;\n        font-size: 25px;\n        background: linear-gradient(50deg, rgba(0,0,0,1) 0%, rgba(67,181,129,1) 100%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n\n"]))),
                Tt = Qe.a.h2(J || (J = Object(Ye.a)(["\n    position: absolute;\n    bottom: 113px;\n    margin-left: 92px;\n    transform: rotate(335deg);\n    font-size: 2.5rem;\n    color: #cf0000;\n    font-weight: bold;\n\n    @media screen and (max-width: 460px){\n        bottom: 160px;\n        margin-left: 60px;\n        font-size: 2rem;\n    }\n"]))),
                Lt = Qe.a.button(W || (W = Object(Ye.a)(["\n    position: absolute;\n    bottom: 105px;\n    margin-left: 287px;\n    z-index: 1;\n    border: none;\n    padding: 11px 30px;\n    cursor: pointer;\n    background-color: #ffc219;\n    border-radius: 10px;\n    font-size: 18px;\n    font-weight: bold;\n    color: #020202;\n    box-shadow: 8px 7px 11px 2px rgb(0 0 0 / 62%);\n    transition: .5s;\n\n    &:hover{\n    background-color: #f29900;\n    border-radius: 10px;\n    box-shadow: 8px 7px 11px 2px rgb(0 0 0 / 62%);\n    }\n    @media screen and (max-width: 460px){\n        bottom: 9.5rem;\n        margin-left: 10.8rem;\n    }\n"]))),
                Ut = Qe.a.img(Y || (Y = Object(Ye.a)(["\n    position: absolute;\n    border-radius: 50%;\n    margin-left: 250px;\n    margin-top: 199px;\n    width: 250px;\n    height: 250px;\n    transition: .5s;\n    z-index: 1;\n    &:hover {\n        transform: scale(1.2) rotate(35deg);\n    }\n    @media screen and (max-width: 460px){\n        margin-left: 193px;\n        margin-top: 150px;\n        width: 150px;\n        height: 150px;\n    }\n"]))),
                Ht = {
                    hidden: {
                        x: "100vw",
                        opacity: 0
                    },
                    show: {
                        x: "0vw",
                        opacity: 1,
                        transition: {
                            delay: 3,
                            ease: "easeInOut"
                        }
                    }
                },
                Rt = function () {
                    var n = Object(ye.useState)(!0),
                        e = Object(Ee.a)(n, 2),
                        t = e[0],
                        a = e[1];
                    return Object(Be.jsx)(Be.Fragment, {
                        children: t && Object(Be.jsx)(Je.a, {
                            exitBeforeEnter: !0,
                            children: Object(Be.jsx)(We.a.div, {
                                className: "divPopupMotion",
                                variants: Ht,
                                initial: "hidden",
                                animate: "show",
                                children: Object(Be.jsx)(At, {
                                    children: Object(Be.jsxs)(Dt, {
                                        children: [Object(Be.jsxs)(Mt, {
                                            children: ["Oferta ", Object(Be.jsx)("br", {}), " Imperdible!"]
                                        }), Object(Be.jsxs)(Bt, {
                                            children: ["Lleva 2 combos", Object(Be.jsx)("br", {}), ' "Sushi xpress"', Object(Be.jsx)("br", {}), " a mitad de precio."]
                                        }), Object(Be.jsxs)(Tt, {
                                            children: ["50", Object(Be.jsx)("sup", {
                                                children: "%"
                                            }), Object(Be.jsx)("br", {}), "Off"]
                                        }), Object(Be.jsx)(Ut, {
                                            src: Et,
                                            type: "sushiPromo/jpg"
                                        }), Object(Be.jsx)(It, {
                                            onClick: function () {
                                                return a(!1)
                                            },
                                            children: Object(Be.jsx)(Ie.a, {})
                                        }), Object(Be.jsx)(Lt, {
                                            children: "Order now!!"
                                        }), Object(Be.jsx)(Nt, {})]
                                    })
                                })
                            })
                        })
                    })
                },
                qt = Qe.a.div(Q || (Q = Object(Ye.a)(["\n    height: 550px;\n    width: 100%;\n    margin-top: -5.625rem;\n    background-color: cadetblue;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    //overflow: hidden;\n"]))),
                Jt = Qe.a.div(_ || (_ = Object(Ye.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]))),
                Wt = Qe.a.img(K || (K = Object(Ye.a)(["\n    height: 100%;\n    width: 100%;\n    -o-object-fit: cover;\n    object-fit: cover;\n"]))),
                Yt = Qe.a.div(V || (V = Object(Ye.a)(["\n    z-index: 3;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n"]))),
                Qt = Qe.a.h1(X || (X = Object(Ye.a)(["\n        font-size: 2.5rem;\n        font-weight: bold;\n        width: 100%;\n        text-align: center;\n        margin-bottom: 2em;\n        color: #0D816A;\n        text-shadow: 1px 1px 2px black;\n\n    @media screen and (max-width: 770px){\n            width: 100vw;\n            text-align: center;\n        }\n\n    @media screen and (max-width: 420px){\n        font-size: 2rem;\n        width: 100vw;\n        text-align: center;\n        font-weight: bold;\n        margin-bottom: 60px;\n        color: #0D816A;\n        text-shadow: 1px 1px 2px black;\n    }\n"]))),
                _t = Qe.a.button(Z || (Z = Object(Ye.a)(["\n        text-align: center;\n        align-items: center;\n        left: 113%;\n        top: 100px;\n        position: absolute;\n        padding: 6px 14px;\n        border: none;\n        cursor: pointer;\n        font-size: 1.2rem;\n        font-weight: bold;\n        background-color: #05A081;\n        color: #fff;\n        border-radius: 50%;\n        box-shadow: 1px 4px 2px -2px black;\n        text-shadow: 1px 1px 2px black;\n        z-index: 20;\n    \n    &:hover{\n        background-color: #0D816A;\n        transition: 0.2s ease-in-out;\n    }\n\n    @media screen and (max-width: 770px){\n        text-align: center;\n        left: 90%;\n        top: 58%;\n        position: absolute;\n        padding: 6px 14px;\n        border: none;\n        cursor: pointer;\n        font-size: 1.2rem;\n        font-weight: bold;\n        background-color: #05A081;\n        color: #fff;\n        border-radius: 50%;\n        box-shadow: 1px 4px 2px -2px black;\n        text-shadow: 1px 1px 2px black;\n    }\n    @media screen and (max-width: 620px){\n        left: 80%;\n    }\n    @media screen and (max-width: 480px){\n        text-align: center;\n        left: 70%;\n        top: -28%;\n        position: absolute;\n        padding: 6px 14px;\n        border: none;\n        cursor: pointer;\n        font-size: 1.2rem;\n        font-weight: bold;\n        background-color: #05A081;\n        color: #fff;\n        border-radius: 50%;\n        box-shadow: 1px 4px 2px -2px black;\n        text-shadow: 1px 1px 2px black;\n    }\n"]))),
                Kt = Qe.a.button($ || ($ = Object(Ye.a)(["\n    text-align: center;\n    position: absolute;\n    bottom: -67%;\n    left: 30%;\n    transform: rotate(270deg);\n    padding: 10px 12px;\n    border: none;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold;\n    background-color: #f29900;\n    color: #fff;\n    border-radius: 50%;\n    box-shadow: -1px 0.5px 10px 1px black;\n    z-index: 20;\n    \n    &:hover{\n        background-color: #d62e2e;\n        transition: 0.2s ease-in-out;\n    }\n    @media screen and (max-width: 1400px){\n        bottom: -100%;\n        left: 112%;\n    }\n    @media screen and (max-width: 720px){\n        display: none;\n    }\n"]))),
                Vt = Qe.a.form(G || (G = Object(Ye.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 648px;\n"]))),
                Xt = Qe.a.input(nn || (nn = Object(Ye.a)(["\n    width: 40rem;\n    height: 3rem;\n    font-size: 1rem;\n    font-weight: 400;\n    border: 1px;\n    border-radius: 5px;\n    text-indent: 5px;\n\n    &:focus{\n        outline: none;\n    }\n    @media screen and (max-width: 770px){\n        width: 35rem;\n    }\n    @media screen and (max-width: 720px){\n        width: 28rem;\n        height: 3rem;\n        font-size: 1rem;\n        font-weight: 400;\n        border: 1px;\n        border-radius: 5px;\n        text-indent: 5px;\n    }\n\n    @media screen and (max-width: 420px){\n        width: 20rem;\n        height: 3rem;\n        font-size: 1rem;\n        font-weight: 400;\n        border: 1px;\n        border-radius: 5px;\n        text-indent: 5px;\n    }\n"]))),
                Zt = Qe.a.button(en || (en = Object(Ye.a)(["\n        height: 3rem;\n        width: 3rem;\n        background-color: #fff;\n        justify-content: center;\n        align-items: center;\n        font-size: 19px;\n        border: 1px;\n        border-radius: 0 5px 5px 0;\n        margin-left: 42.5rem;\n        position: absolute;\n        cursor: pointer;\n\n    &:focus{\n        outline: none;\n    }\n    @media screen and (max-width: 770px){\n        margin-left: 32rem;\n    }\n    @media screen and (max-width: 720px){ \n        height: 3rem;\n        width: fit-content;\n        background-color: #fff;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.1875rem;\n        border: 1px;\n        border-radius: 0 5px 5px 0;\n        margin-left: 25rem;\n        position: absolute;\n        cursor: pointer;\n    }\n    @media screen and (max-width: 420px){\n        height: 3rem;\n        width: fit-content;\n        background-color: #fff;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.1875rem;\n        border: 1px;\n        border-radius: 0 5px 5px 0;\n        margin-left: 17rem;\n        position: absolute;\n        cursor: pointer;\n    }\n"]))),
                $t = Qe.a.i(tn || (tn = Object(Ye.a)(["\n    color: #0D816A;\n    font-weight: bold;\n    cursor: pointer;\n    text-align: center;\n    width: 3rem;\n    height: 1.5rem;\n"]))),
                Gt = Qe.a.i(an || (an = Object(Ye.a)(["\n    color: #020202;\n    font-weight: bold;\n    cursor: pointer;\n    text-align: center;\n    width: 3rem;\n    height: 1.5rem;\n    font-size: 1.25rem;\n"]))),
                na = {
                    hidden: {
                        x: "100vw",
                        opacity: 0
                    },
                    show: {
                        x: "0vw",
                        opacity: 1,
                        transition: {
                            delay: .2,
                            ease: "easeInOut"
                        }
                    }
                },
                ea = function () {
                    var n = Object(ye.useState)(!1),
                        e = Object(Ee.a)(n, 2),
                        t = e[0],
                        a = e[1],
                        i = Object(ye.useState)(!1),
                        r = Object(Ee.a)(i, 2),
                        o = r[0],
                        c = r[1],
                        s = Object(ye.useState)(""),
                        d = Object(Ee.a)(s, 2),
                        l = d[0],
                        b = d[1],
                        p = Object(ye.useState)(""),
                        x = Object(Ee.a)(p, 2),
                        j = x[0],
                        u = x[1],
                        h = Object(ye.useState)(""),
                        m = Object(Ee.a)(h, 2),
                        f = m[0],
                        g = m[1],
                        O = Object(ye.useState)(""),
                        w = Object(Ee.a)(O, 2),
                        v = (w[0], w[1]),
                        y = Object(ye.useState)([]),
                        k = Object(Ee.a)(y, 2),
                        z = (k[0], k[1]),
                        C = function () {
                            var n = Object(Ne.a)(De.a.mark((function n(e) {
                                var t, i, r, o;
                                return De.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return e.preventDefault(), l.trim() || v("El campo nombre est\xe1 vac\xedo"), j.trim() || v("El campo email est\xe1 vac\xedo"), f.trim() || v("El campo nombre est\xe1 vac\xedo"), t = {
                                                nombre: l,
                                                email: j,
                                                pregunta: f
                                            }, n.prev = 5, n.next = 8, Ue.collection("consultas").add(t);
                                        case 8:
                                            return n.sent, n.next = 11, Ue.collection("consultas").get();
                                        case 11:
                                            i = n.sent, r = i.docs, o = r.map((function (n) {
                                                return Object(Se.a)({
                                                    id: n.id
                                                }, n.data())
                                            })), z(o), console.log("Consulta enviada"), n.next = 21;
                                            break;
                                        case 18:
                                            n.prev = 18, n.t0 = n.catch(5), console.log(n.t0);
                                        case 21:
                                            b(""), u(""), g(""), a(!1);
                                        case 25:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [5, 18]
                                ])
                            })));
                            return function (e) {
                                return n.apply(this, arguments)
                            }
                        }();
                    return Object(Be.jsx)(Be.Fragment, {
                        children: Object(Be.jsxs)(qt, {
                            children: [Object(Be.jsx)(Jt, {
                                children: Object(Be.jsx)(Wt, {
                                    src: dt,
                                    type: "bgHero/jpg"
                                })
                            }), Object(Be.jsxs)(Yt, {
                                children: [Object(Be.jsx)(Qt, {
                                    children: "Pide lo que quieras y nosotros te lo daremos!!"
                                }), Object(Be.jsx)(_t, {
                                    onClick: function () {
                                        return a(!0)
                                    },
                                    children: "?"
                                }), Object(Be.jsx)(Kt, {
                                    onClick: function () {
                                        return c(!0)
                                    },
                                    children: Object(Be.jsx)(Gt, {
                                        children: Object(Be.jsx)(Ge.d, {
                                            className: "mapIco"
                                        })
                                    })
                                }), Object(Be.jsxs)(Vt, {
                                    children: [Object(Be.jsx)(Xt, {
                                        type: "text",
                                        placeholder: "Busca en nuestro cat\xe1logo...",
                                        autoComplete: "off",
                                        name: "comida"
                                    }), Object(Be.jsx)(Zt, {
                                        onsubmit: "value",
                                        children: Object(Be.jsx)($t, {
                                            children: Object(Be.jsx)(Ge.e, {})
                                        })
                                    })]
                                }), Object(Be.jsx)("form", {
                                    onSubmit: C,
                                    className: "formConsultasContainer",
                                    children: t && Object(Be.jsx)(Je.a, {
                                        exitBeforeEnter: !0,
                                        children: Object(Be.jsxs)(We.a.FormModal, {
                                            className: "formModal",
                                            target: "_parent",
                                            autoComplete: "off",
                                            variants: na,
                                            initial: "hidden",
                                            animate: "show",
                                            children: [Object(Be.jsx)($e, {
                                                onClick: function () {
                                                    return a(!1)
                                                },
                                                children: Object(Be.jsx)(Ie.a, {})
                                            }), Object(Be.jsxs)(_e, {
                                                children: [Object(Be.jsx)(Ke, {
                                                    htmlFor: "",
                                                    children: "Nombre"
                                                }), Object(Be.jsx)(Ve, {
                                                    type: "text",
                                                    value: l,
                                                    onChange: function (n) {
                                                        b(n.target.value)
                                                    },
                                                    autoComplete: "off"
                                                })]
                                            }), Object(Be.jsxs)(_e, {
                                                children: [Object(Be.jsx)(Ke, {
                                                    htmlFor: "",
                                                    children: "Email"
                                                }), Object(Be.jsx)(Ve, {
                                                    type: "email",
                                                    value: j,
                                                    onChange: function (n) {
                                                        u(n.target.value)
                                                    },
                                                    autoComplete: "off"
                                                })]
                                            }), Object(Be.jsxs)(_e, {
                                                children: [Object(Be.jsx)(Ke, {
                                                    htmlFor: "",
                                                    children: "Consulta"
                                                }), Object(Be.jsx)(Xe, {
                                                    value: f,
                                                    onChange: function (n) {
                                                        g(n.target.value)
                                                    }
                                                })]
                                            }), Object(Be.jsx)(Ze, {
                                                to: "/",
                                                children: "Enviar consulta"
                                            })]
                                        })
                                    })
                                }), Object(Be.jsx)(Pt, {
                                    showMaps: o,
                                    setShowMaps: c
                                }), Object(Be.jsx)(Rt, {})]
                            })]
                        })
                    })
                },
                ta = t.p + "static/media/food-5.79f8d125.jpg",
                aa = t.p + "static/media/food-1.6478c18f.jpg",
                ia = t.p + "static/media/food-4.ef366acd.jpg",
                ra = t.p + "static/media/cards-container-bg.c706a028.jpg",
                oa = Qe.a.div(rn || (rn = Object(Ye.a)(['\n    margin-top: 20px;\n    height: 557px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: #fff;\n    background-image: url("../../images/Foods/cards-container-bg.jpg");\n    background-size: cover;\n    overflow: hidden;\n\n    @media screen and (max-width: 770px){\n        height: 1100px;\n    }\n    @media screen and (max-width: 480px){\n        height: 1300px;\n    }\n']))),
                ca = Qe.a.h1(on || (on = Object(Ye.a)(["\n    font-size: 2.5rem;\n    margin-bottom: 64px;\n    text-align: center;\n    color: #05a081;\n    text-shadow: 1px 1px 2px black;\n\n    @media screen and (max-width: 480px){\n        font-size: 2rem;\n        margin-top: -50px;\n        color: #05a081;\n    }\n"]))),
                sa = Qe.a.div(cn || (cn = Object(Ye.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: center;\n    grid-gap: 16px;\n    padding: 0 50px;\n\n    @media screen and (max-width: 1000px){\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n    @media screen and (max-width: 770px){\n        grid-template-columns: 1fr;\n        padding: 0 20px;\n    }\n"]))),
                da = Qe.a.div(sn || (sn = Object(Ye.a)(["\n    background: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    border-radius: 10px;\n    max-height: 340px;\n    padding: 30px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n    transition: all 0.2s ease-in-out;\n\n    &:hover{\n        transform: scale(1.02);\n        transition: all 0.2s ease-in-out;\n        cursor: pointer;\n    }\n    @media screen and (max-width: 770px){\n        width: 20rem;\n    }\n    @media screen and (max-width: 420px){\n        width: 16rem;\n    }\n"]))),
                la = Qe.a.img(dn || (dn = Object(Ye.a)(["\n    height: 160px;\n    width: 160px;\n    margin: auto;\n    margin-bottom: 10px;\n    clip-path: circle();\n"]))),
                ba = Qe.a.h2(ln || (ln = Object(Ye.a)(["\n    font-size: 1.5rem;\n    margin: auto;\n    margin-bottom: 10px;\n"]))),
                pa = Qe.a.p(bn || (bn = Object(Ye.a)(["\n    font-size: 1rem;\n    text-align: center;\n"]))),
                xa = function () {
                    return Object(Be.jsx)(Be.Fragment, {
                        children: Object(Be.jsxs)(oa, {
                            style: {
                                backgroundImage: "url(".concat(ra, ")")
                            },
                            children: [Object(Be.jsx)(ca, {
                                children: "Platos del d\xeda"
                            }), Object(Be.jsxs)(sa, {
                                children: [Object(Be.jsxs)(da, {
                                    children: [Object(Be.jsx)(la, {
                                        src: ta
                                    }), Object(Be.jsx)(ba, {
                                        children: "Plato 1"
                                    }), Object(Be.jsx)(pa, {
                                        children: "Lorem ipsum dolor sit amet consectetur adipisicing."
                                    })]
                                }), Object(Be.jsxs)(da, {
                                    children: [Object(Be.jsx)(la, {
                                        src: aa
                                    }), Object(Be.jsx)(ba, {
                                        children: "Plato 2"
                                    }), Object(Be.jsx)(pa, {
                                        children: "Lorem ipsum dolor sit amet consectetur adipisicing."
                                    })]
                                }), Object(Be.jsxs)(da, {
                                    children: [Object(Be.jsx)(la, {
                                        src: ia
                                    }), Object(Be.jsx)(ba, {
                                        children: "Plato 3"
                                    }), Object(Be.jsx)(pa, {
                                        children: "Lorem ipsum dolor sit amet consectetur adipisicing."
                                    })]
                                })]
                            })]
                        })
                    })
                },
                ja = t(48),
                ua = t(49),
                ha = t(51),
                ma = t(50),
                fa = t.p + "static/media/food-2.0ef91072.jpg",
                ga = t.p + "static/media/food-3.f9682ce6.jpg",
                Oa = Qe.a.div(pn || (pn = Object(Ye.a)(["\n    height: 500px;\n    width: 100%;\n    background-color: #fff;\n    position: relative;\n    margin-top: 20px;\n\n"]))),
                wa = Qe.a.section(xn || (xn = Object(Ye.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @media screen and (max-width: 420px){\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n"]))),
                va = Qe.a.div(jn || (jn = Object(Ye.a)(["\n    align-items: stretch;\n    text-align: left;\n    background-color: #fff;\n    margin: 0 20px 0 3rem;\n\n    @media screen and (max-width: 770px){\n        margin: 10px 20px 0 3rem;\n    }\n    @media screen and (max-width: 420px){\n        background-color: #fff;\n        align-items: center;\n        text-align: center;\n        width: 80%;\n        height: 100%;\n        margin: 0rem 6rem;\n    }\n"]))),
                ya = Qe.a.h3(un || (un = Object(Ye.a)(["\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: -35px;\n    color: #05a081;\n    font-weight: bold;\n    margin-left: 7px;\n    border-bottom: 2px solid #0D816A;\n\n    @media screen and (max-width: 420px){\n        display: inline-block;\n        margin-top: 2rem;\n        font-size: 1.5rem;\n        color: #05a081;\n        font-weight: bold;\n        margin-left: 7px;\n        border-bottom: 2px solid #0D816A;\n    }\n    \n"]))),
                ka = Qe.a.h1(hn || (hn = Object(Ye.a)(["\n    font-size: 5rem;\n    margin-top: 5px;\n    \n    @media screen and (max-width: 770px){\n        width: 1rem;\n        font-size: 3rem;\n    }\n    @media screen and (max-width: 720px){\n        display: none;\n    }\n"]))),
                za = Qe.a.p(mn || (mn = Object(Ye.a)(["\n    margin: 8px 9px;\n\n    @media screen and (max-width: 770px){\n        font-size: 1rem;\n        margin-top: 1rem;\n    }\n    @media screen and (max-width: 420px){\n        margin: -15px 5px 5px;\n        font-size: 1.5rem;\n        width: 100%;\n    }\n"]))),
                Ca = Object(Qe.a)(Pe.b)(fn || (fn = Object(Ye.a)(["\n    margin-bottom: 3.75rem;\n    background: transparent;\n    padding: 10px 50px;\n    text-decoration: none;\n    color: #0D816A;\n    font-weight: bold;\n    display: inline-block;\n    border: 3px solid #05A081;\n    border-radius: 15px;\n    margin: 30px;\n\n    &:hover{\n        color: #fff;\n        background-color: #0D816A;\n        border: 3px solid #fff;\n        border-radius: 15px;\n        transition: .3s;\n    }\n\n    @media screen and (max-width: 420px){\n        margin: 10px;\n    }\n"]))),
                Sa = Qe.a.div(gn || (gn = Object(Ye.a)(["\n    background-color: #0D816A;\n    background: rgb(67,181,129);\n    background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);\n    padding: 0;\n    height: 100%;\n    height: 500px;\n    width: 20%;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n\n    @media screen and (max-width: 420px){\n        background-color: #0D816A;\n        background: rgb(67,181,129);\n        background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);\n        padding: 0;\n        height: 100%;\n        width: 20%;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n    }\n"]))),
                Fa = (Qe.a.img(On || (On = Object(Ye.a)(["\n        clip-path: circle();\n        position: absolute;\n        height: 25rem;\n        width: 25rem;\n        max-width: 420px;\n        left: 65%;\n        margin-top: -1.5rem;\n\n    @media screen and (max-width: 420px){\n        align-items: center;\n        z-index: 50;\n        clip-path: circle(100px);\n        position: relative;\n        width: 18rem;\n        height: 18rem;\n        margin-top: 0;\n    }\n\n"]))), Qe.a.img(wn || (wn = Object(Ye.a)(["\n        z-index: 50;\n        clip-path: circle();\n        position: absolute;\n        height: 25rem;\n        width: 25rem;\n        max-width: 420px;\n        left: 65%;\n        margin-top: -1.5rem;\n    @media screen and (max-width: 770px){\n        margin-top: -1rem;\n        left: 55%;\n        height: 18rem;\n        width: 18rem;\n    }\n    @media screen and (max-width: 420px){\n        z-index: 50;\n        clip-path: circle(100px);\n        position: relative;\n        left: auto;\n        width: 18rem;\n        height: 18rem;\n        margin-top: 0;\n    }\n"])))),
                Pa = t(74),
                Ea = t.n(Pa),
                Aa = (t(103), t(104), t(105), [{
                    h3: "Bienvenido a nuestro hogar",
                    ImgFoodNews: fa,
                    h1news: "Healty Food",
                    h1news2: "Collection!",
                    pnews: "Proin varius, orci mattis dapibus efficitur",
                    pnews2: "lectus pharetra felis, Ut dapibus ante porttitor,",
                    pnews3: "id bibendum diam sodales!",
                    linknews: "Ordena ahora!"
                }, {
                    h3: "Bienvenido a nuestro hogar",
                    ImgFoodNews: aa,
                    h1news: "Healty Food",
                    h1news2: "Collection!",
                    pnews: "Proin varius, orci mattis dapibus efficitur",
                    pnews2: "lectus pharetra felis, Ut dapibus ante porttitor,",
                    pnews3: "id bibendum diam sodales!",
                    linknews: "Ordena ahora!"
                }, {
                    h3: "Bienvenido a nuestro hogar",
                    ImgFoodNews: ga,
                    h1news: "Happy morning",
                    h1news2: "with us!!",
                    pnews: "Proin varius, orci mattis dapibus efficitur",
                    pnews2: "lectus pharetra felis, Ut dapibus ante porttitor,",
                    pnews3: "id bibendum diam sodales!",
                    linknews: "Ordena ahora!"
                }]),
                Da = function (n) {
                    Object(ha.a)(t, n);
                    var e = Object(ma.a)(t);

                    function t() {
                        return Object(ja.a)(this, t), e.apply(this, arguments)
                    }
                    return Object(ua.a)(t, [{
                        key: "render",
                        value: function () {
                            return Object(Be.jsx)("div", {
                                className: "appSlider",
                                children: Object(Be.jsx)(Ea.a, Object(Se.a)(Object(Se.a)({}, {
                                    dots: !0,
                                    infinite: !0,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    arrows: !0,
                                    autoplay: !0,
                                    speed: 2e3,
                                    autoplaySpeed: 3e3
                                }), {}, {
                                    children: Aa.map((function (n) {
                                        return Object(Be.jsx)(Oa, {
                                            children: Object(Be.jsxs)(wa, {
                                                children: [Object(Be.jsxs)(va, {
                                                    children: [Object(Be.jsx)(ya, {
                                                        children: n.h3
                                                    }), Object(Be.jsx)(Fa, {
                                                        src: n.ImgFoodNews,
                                                        type: "food-2/jpg"
                                                    }), Object(Be.jsxs)(ka, {
                                                        children: [n.h1news, Object(Be.jsx)("br", {}), n.h1news2]
                                                    }), Object(Be.jsxs)(za, {
                                                        children: [n.pnews, "."]
                                                    }), Object(Be.jsx)(Ca, {
                                                        children: n.linknews
                                                    })]
                                                }), Object(Be.jsx)(Sa, {})]
                                            })
                                        })
                                    }))
                                }))
                            })
                        }
                    }]), t
                }(ye.Component),
                Na = Qe.a.div(vn || (vn = Object(Ye.a)(["\n    margin-top: 20px;\n    width: 100%;\n    height: 350px;\n    border-radius: 10px 0 0 10px;\n    background-color: #f0f0f0;\n    display: none;\n\n    @media screen and (max-width: 770px){\n        display: flex;\n    }\n    @media screen and (max-width: 440px){\n        height: 450px;\n        flex-flow: column;\n        border: none;\n    }\n"]))),
                Ia = (Qe.a.figcaption(yn || (yn = Object(Ye.a)(["\n    /*EMPTY*/\n"]))), Qe.a.div(kn || (kn = Object(Ye.a)(["\n    width: 40%;\n\n    @media screen and (max-width: 440px){\n        width: 100%;\n        height: 250px;\n    }\n"])))),
                Ma = Qe.a.img(zn || (zn = Object(Ye.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 10px 0 0 10px;\n    vertical-align: top;\n\n    @media screen and (max-width: 440px){\n        height: 80%;\n        border-radius: 0;\n    }\n"]))),
                Ba = Qe.a.div(Cn || (Cn = Object(Ye.a)(["\n    width: 60%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n    @media screen and (max-width: 440px){\n        width: 89%;\n        margin-top: -50px;\n        height: 250px;\n    }\n"]))),
                Ta = Qe.a.h3(Sn || (Sn = Object(Ye.a)(["\n    color: #0D816A;\n    font-weight: bold;\n    font-size: 3rem;\n    text-align: center;\n    margin-bottom: -10px;\n\n    @media screen and (max-width: 440px){\n        margin-bottom: 20px;\n    }\n"]))),
                La = Qe.a.p(Fn || (Fn = Object(Ye.a)(["\n    color: #707070;\n\n    @media screen and (max-width: 440px){\n        margin-bottom: 20px;\n    }\n\n"]))),
                Ua = Qe.a.p(Pn || (Pn = Object(Ye.a)(["\n    color: #020202;\n\n    @media screen and (max-width: 440px){\n        margin-bottom: 20px;\n    }\n\n"]))),
                Ha = Qe.a.div(En || (En = Object(Ye.a)(["\n    display: flex;\n    justify-content: center;\n\n    @media screen and (max-width: 440px){\n        margin-bottom: 20px;\n    }\n"]))),
                Ra = Qe.a.button(An || (An = Object(Ye.a)(["\n    border: none;\n    background-color: #0D816A;\n    font-weight: bold;\n    padding: 10px 20px;\n    width: 80%;\n    color: #fff;\n    border-radius: 100px;\n    cursor: pointer;\n\n    &:hover{\n        background-color: #05a081;\n        transition: .2s;\n    }\n"]))),
                qa = function () {
                    return Object(Be.jsxs)(Na, {
                        children: [Object(Be.jsx)(Ia, {
                            children: Object(Be.jsx)(Ma, {
                                src: pt
                            })
                        }), Object(Be.jsxs)(Ba, {
                            children: [Object(Be.jsx)(Ta, {
                                children: "alPlato"
                            }), Object(Be.jsx)(La, {
                                children: "Blvd. San Juan 200 C\xf3rdoba, Argentina"
                            }), Object(Be.jsxs)(Ua, {
                                children: ["Restaurante de comidas varias con servicio de entrega a domicilio.", Object(Be.jsx)("br", {})]
                            }), Object(Be.jsx)(Ha, {
                                children: Object(Be.jsx)(Ra, {
                                    children: "Contacto"
                                })
                            })]
                        })]
                    })
                },
                Ja = (t(106), t(107), Qe.a.div(Dn || (Dn = Object(Ye.a)(["\n    padding: 4px;\n    background-color: #31313123;\n    width: 99%;\n    height: 80px;\n    position: sticky;\n    margin-top: 5px;\n    z-index: 5;\n"])))),
                Wa = Qe.a.nav(Nn || (Nn = Object(Ye.a)(["\n    margin-right: 0.5rem;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1rem;\n    position: sticky;\n    max-width: 75rem;\n    @media screen and (max-width: 960px){\n        transition: 0.8s all ease;\n    }\n"]))),
                Ya = Object(Qe.a)(Pe.b)(In || (In = Object(Ye.a)(["\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 2rem;\n    font-weight: bold;\n    text-shadow: 1px 1px 2px black;\n"]))),
                Qa = Qe.a.ul(Mn || (Mn = Object(Ye.a)(["\n    display: flex;\n    list-style: none;\n    margin-left: 48%;\n    align-items: center;\n    @media screen and (max-width: 1330px) {\n        display: none;\n    }\n"]))),
                _a = Qe.a.li(Bn || (Bn = Object(Ye.a)(["\n    padding: 20px 12px;\n"]))),
                Ka = Object(Qe.a)(Pe.b)(Tn || (Tn = Object(Ye.a)(["\n    color: #f29900;\n    text-decoration: none;\n    font-size: 1rem;\n    font-weight: bold;\n    text-shadow: 1px 1px 2px black;\n\n    &:hover {\n        border-bottom: 4px solid #ff5252;\n        padding: 20px 0;\n        transition: 0.1s;\n    }\n"]))),
                Va = Object(Qe.a)(Pe.b)(Ln || (Ln = Object(Ye.a)(["\n    text-decoration: none;\n    color: #fff;\n    font-size: 1rem;\n    font-weight: bold;\n    text-shadow: 1px 1px 2px black;\n\n    &:hover {\n        border-bottom: 4px solid #05a081;\n        padding: 20px 0;\n        transition: 0.1s;\n    }\n    &.active {\n        border-bottom: 4px solid #05a081;\n        padding: 20px 0;\n    }\n"]))),
                Xa = Qe.a.button(Un || (Un = Object(Ye.a)(["\n    margin: 0 0 0 15px;\n    border: none;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold;\n    display: inline-block;\n    padding: 0px 20px;\n    background-color: #cc3300;\n    color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 4px 2px -2px gray;\n    text-shadow: 1px 1px 2px black;\n\n    &:hover{\n        background-color: #ff5252;\n        transition: 0.5s ease-in-out;\n    }\n"]))),
                Za = Qe.a.div(Hn || (Hn = Object(Ye.a)(["\n    display: none;\n    \n    \n    @media screen and (max-width: 1330px){\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(-100%, 60%);\n        cursor: pointer;\n        z-index: 10000;\n        color: #05a081;\n        font-size: 1.8rem;\n    }\n"]))),
                $a = function (n) {
                    var e = n.toggle,
                        t = Object(ye.useState)([]),
                        a = Object(Ee.a)(t, 2),
                        i = a[0],
                        r = a[1];
                    Object(ye.useEffect)((function () {
                        (function () {
                            var n = Object(Ne.a)(De.a.mark((function n(e) {
                                var t, a, i;
                                return De.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, Ue.collection("consultas").get();
                                        case 2:
                                            t = n.sent, a = t.docs, i = a.map((function (n) {
                                                return Object(Se.a)({
                                                    id: n.id
                                                }, n.data())
                                            })), r(i);
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function (e) {
                                return n.apply(this, arguments)
                            }
                        })()()
                    }), []);
                    var o = Object(Fe.g)(),
                        c = Object(ye.useState)(null),
                        s = Object(Ee.a)(c, 2),
                        d = s[0],
                        l = s[1];
                    Object(ye.useEffect)((function () {
                        Le.onAuthStateChanged((function (n) {
                            n && (l(n.email), console.log(n.email))
                        }))
                    }), []);
                    return Object(Be.jsx)(Be.Fragment, {
                        children: Object(Be.jsx)(Ja, {
                            children: Object(Be.jsxs)(Wa, {
                                children: [Object(Be.jsx)(Ya, {
                                    to: "/",
                                    children: "alPlato"
                                }), Object(Be.jsx)(Za, {
                                    onClick: e,
                                    children: Object(Be.jsx)(Ge.a, {})
                                }), Object(Be.jsxs)(Qa, {
                                    children: ["admin@admin.com" == d ? Object(Be.jsxs)(_a, {
                                        children: [Object(Be.jsx)(Ka, {
                                            to: "/consultas",
                                            children: "Consultas"
                                        }), 0 !== i.length ? i.map((function (n) {
                                            return Object(Be.jsx)("span", {
                                                className: "consultasNoti",
                                                children: "!"
                                            })
                                        })) : Object(Be.jsx)("span", {})]
                                    }) : Object(Be.jsx)(_a, {
                                        children: Object(Be.jsx)(Ka, {
                                            style: {
                                                opacity: "0.0",
                                                cursor: "default"
                                            },
                                            children: "Consultas"
                                        })
                                    }), "admin@admin.com" == d ? Object(Be.jsx)(_a, {
                                        children: Object(Be.jsx)(Ka, {
                                            to: "/addproducts",
                                            children: "Agregar"
                                        })
                                    }) : Object(Be.jsx)(_a, {
                                        children: Object(Be.jsx)(Ka, {
                                            style: {
                                                opacity: "0.0",
                                                cursor: "default"
                                            },
                                            children: "Agregar"
                                        })
                                    }), Object(Be.jsx)(_a, {
                                        children: Object(Be.jsx)(Va, {
                                            to: "/foodmenu",
                                            children: "Explora"
                                        })
                                    }), Object(Be.jsx)(_a, {
                                        children: Object(Be.jsx)(Va, {
                                            children: "Especiales"
                                        })
                                    }), Object(Be.jsx)(_a, {
                                        children: Object(Be.jsx)(Va, {
                                            children: "Licencia"
                                        })
                                    }), Object(Be.jsx)(_a, {
                                        children: d ? Object(Be.jsx)(Xa, {
                                            onClick: function () {
                                                Le.signOut(), l(null), o.push("/")
                                            },
                                            children: "Cerrar sesion"
                                        }) : Object(Be.jsx)("span", {})
                                    })]
                                })]
                            })
                        })
                    })
                },
                Ga = Qe.a.aside(Rn || (Rn = Object(Ye.a)(["\n    position: fixed;\n    z-index: 99999;\n    width: 100%;\n    height: 100%;\n    background: #0d0d0d;\n    display: grid;\n    align-items: center;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-in-out;\n    opacity: ", ";\n    top: ", ";\n"])), (function (n) {
                    return n.isOpen ? "100%" : "0"
                }), (function (n) {
                    return n.isOpen ? "0" : "-100%"
                })),
                ni = Object(Qe.a)(Ge.f)(qn || (qn = Object(Ye.a)(["\n    color: #fff;\n\n"]))),
                ei = Qe.a.div(Jn || (Jn = Object(Ye.a)(["\n    position: absolute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: transparent;\n    font-size: 2rem;\n    cursor: pointer;\n    outline: none;\n"]))),
                ti = Qe.a.div(Wn || (Wn = Object(Ye.a)(["\n    color: #fff;\n\n"]))),
                ai = Qe.a.ul(Yn || (Yn = Object(Ye.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 80px);\n    text-align: center;\n\n    @media screen and (max-width: 480px){\n        grid-template-rows: repeat(6, 60px);\n    }\n"]))),
                ii = Object(Qe.a)(Pe.b)(Qn || (Qn = Object(Ye.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n\n    &:hover {\n        color: #020202;\n        background-color: #05a081;\n    }\n"]))),
                ri = Object(Qe.a)(Pe.b)(_n || (_n = Object(Ye.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n\n    &:hover {\n        color: #020202;\n        background-color:#ff5252;\n    }\n"]))),
                oi = Qe.a.button(Kn || (Kn = Object(Ye.a)(["\n    border-radius: 50px;\n    background-color: #cc3300;\n    white-space: nowrap;\n    margin: 10px;\n    display: block;\n    //padding: 16px 34px;\n    color: #fff;\n    font-size: 16px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    font-weight: bold;\n    //text-shadow: 1px 1px 2px black;\n    text-decoration: none;\n    transition: all 0.2s ease-in-out;\n\n    &:hover{\n        background-color: #ff5252;\n        transition: 0.2s ease-in-out;\n    }\n"]))),
                ci = function (n) {
                    var e = n.isOpen,
                        t = n.toggle,
                        a = Object(Fe.g)(),
                        i = Object(ye.useState)(null),
                        r = Object(Ee.a)(i, 2),
                        o = r[0],
                        c = r[1];
                    Object(ye.useEffect)((function () {
                        Le.onAuthStateChanged((function (n) {
                            n && (c(n.email), console.log(n.email))
                        }))
                    }), []);
                    return Object(Be.jsxs)(Ga, {
                        isOpen: e,
                        onClick: t,
                        children: [Object(Be.jsx)(ei, {
                            onClick: t,
                            children: Object(Be.jsx)(ni, {})
                        }), Object(Be.jsx)(ti, {
                            children: Object(Be.jsxs)(ai, {
                                children: [o ? Object(Be.jsx)(ri, {
                                    to: "/consultas",
                                    children: "Consultas"
                                }) : Object(Be.jsx)(ri, {
                                    style: {
                                        opacity: "0.0",
                                        cursor: "default"
                                    },
                                    children: "Consultas"
                                }), o ? Object(Be.jsx)(ri, {
                                    to: "/addproducts",
                                    children: "Agregar"
                                }) : Object(Be.jsx)(ri, {
                                    style: {
                                        opacity: "0.0",
                                        cursor: "default"
                                    },
                                    children: "Agregar"
                                }), Object(Be.jsx)(ii, {
                                    to: "/foodmenu",
                                    children: "Explora"
                                }), Object(Be.jsx)(ii, {
                                    children: "Especiales"
                                }), Object(Be.jsx)(ii, {
                                    children: "Licencia"
                                }), o ? Object(Be.jsx)(oi, {
                                    onClick: function () {
                                        Le.signOut(), c(null), a.push("/")
                                    },
                                    children: "Cerrar sesion"
                                }) : Object(Be.jsx)("span", {})]
                            })
                        })]
                    })
                },
                si = function () {
                    var n = Object(ye.useState)(!1),
                        e = Object(Ee.a)(n, 2),
                        t = e[0],
                        a = e[1],
                        i = function () {
                            a(!t)
                        };
                    return Object(Be.jsxs)(Be.Fragment, {
                        children: [Object(Be.jsx)(ci, {
                            isOpen: t,
                            toggle: i
                        }), Object(Be.jsx)($a, {
                            toggle: i
                        }), Object(Be.jsx)(ea, {}), Object(Be.jsx)(Da, {}), Object(Be.jsx)(qa, {}), Object(Be.jsx)(xa, {}), Object(Be.jsx)(st, {})]
                    })
                },
                di = Qe.a.h1(Vn || (Vn = Object(Ye.a)(["\n\n"]))),
                li = Qe.a.div(Xn || (Xn = Object(Ye.a)(["\n    margin: 0 auto;\n    background-color: #efefef;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    flex-direction: column;\n"]))),
                bi = (Object(Qe.a)(Pe.b)(Zn || (Zn = Object(Ye.a)(["\n    padding: 20px;\n    border-radius: 5px;\n    margin-right: 1200px;\n    text-decoration: none;\n    color: #fff;\n    background-color: #33ad52;\n\n"]))), function () {
                    var n = Object(ye.useState)(!1),
                        e = Object(Ee.a)(n, 2),
                        t = e[0],
                        a = e[1],
                        i = function () {
                            a(!t)
                        },
                        r = Object(ye.useState)(""),
                        o = Object(Ee.a)(r, 2),
                        c = o[0],
                        s = o[1],
                        d = Object(ye.useState)(0),
                        l = Object(Ee.a)(d, 2),
                        b = l[0],
                        p = l[1],
                        x = Object(ye.useState)(null),
                        j = Object(Ee.a)(x, 2),
                        u = j[0],
                        h = j[1],
                        m = Object(ye.useState)(""),
                        f = Object(Ee.a)(m, 2),
                        g = f[0],
                        O = f[1],
                        w = ["image/png", "image/jpeg", "image/jpg"];
                    return Object(Be.jsxs)(Be.Fragment, {
                        children: [Object(Be.jsx)(ci, {
                            isOpen: t,
                            toggle: i
                        }), Object(Be.jsx)($a, {
                            toggle: i
                        }), Object(Be.jsxs)(li, {
                            children: [Object(Be.jsx)("br", {}), Object(Be.jsx)(di, {
                                children: "ADD PRODUCTS"
                            }), Object(Be.jsx)("hr", {}), Object(Be.jsxs)("form", {
                                autoComplete: "off",
                                onSubmit: function (n) {
                                    n.preventDefault(), He.ref("FoodImg/".concat(u.name)).put(u).on("state_change", (function (n) {
                                        var e = n.bytesTransferred / n.totalBytes * 100;
                                        console.log(e)
                                    }), (function (n) {
                                        O(n.message)
                                    }), (function () {
                                        He.ref("FoodImg").child(u.name).getDownloadURL().then((function (n) {
                                            Ue.collection("Plates").add({
                                                FoodImg: n,
                                                FoodPrice: Number(b),
                                                PlateFood: c
                                            }).then((function () {
                                                s(""), p(0), h(""), O(""), document.getElementById("file").value = ""
                                            })).catch((function (n) {
                                                return O(n.message)
                                            }))
                                        }))
                                    }))
                                },
                                children: [Object(Be.jsx)("label", {
                                    htmlFor: "product-name",
                                    children: "Product name"
                                }), Object(Be.jsx)("br", {}), Object(Be.jsx)("input", {
                                    type: "text",
                                    required: !0,
                                    onChange: function (n) {
                                        return s(n.target.value)
                                    },
                                    value: c
                                }), Object(Be.jsx)("label", {
                                    htmlFor: "product-price",
                                    children: "Product price"
                                }), Object(Be.jsx)("br", {}), Object(Be.jsx)("input", {
                                    type: "number",
                                    required: !0,
                                    onChange: function (n) {
                                        return p(n.target.value)
                                    },
                                    value: b
                                }), Object(Be.jsx)("input", {
                                    type: "file",
                                    onChange: function (n) {
                                        var e = n.target.files[0];
                                        e && w.includes(e.type) ? (h(e), O("")) : (h(null), O("Por favor seleccione un tipo de imagen png o jpeg"))
                                    },
                                    id: "file"
                                }), Object(Be.jsx)("br", {}), Object(Be.jsx)("button", {
                                    children: "ADD"
                                })]
                            }), g && Object(Be.jsx)("span", {
                                children: g
                            })]
                        })]
                    })
                }),
                pi = t(75),
                xi = Object(ye.createContext)(),
                ji = function (n) {
                    Object(ha.a)(t, n);
                    var e = Object(ma.a)(t);

                    function t() {
                        var n;
                        Object(ja.a)(this, t);
                        for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r];
                        return (n = e.call.apply(e, [this].concat(i))).state = {
                            products: []
                        }, n
                    }
                    return Object(ua.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var n = this,
                                e = this.state.products;
                            Ue.collection("Plates").onSnapshot((function (t) {
                                t.docChanges().forEach((function (t) {
                                    "added" === t.type && e.push({
                                        ProductID: t.doc.id,
                                        PlateFood: t.doc.data().PlateFood,
                                        FoodPrice: t.doc.data().FoodPrice,
                                        FoodImg: t.doc.data().FoodImg
                                    }), n.setState({
                                        products: e
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return Object(Be.jsx)(xi.Provider, {
                                value: {
                                    products: Object(pi.a)(this.state.products)
                                },
                                children: this.props.children
                            })
                        }
                    }]), t
                }(ke.a.Component),
                ui = Qe.a.div($n || ($n = Object(Ye.a)(["\n    margin: 0 auto;\n    background-color: #fff;\n    width: 80%;\n    height: 85.9vh;\n    display: flex;\n    justify-content: center;\n"]))),
                hi = Qe.a.div(Gn || (Gn = Object(Ye.a)(["\n    margin-top: 80px;\n    justify-content: center;\n"]))),
                mi = Qe.a.h1(ne || (ne = Object(Ye.a)(["\n"]))),
                fi = Qe.a.form(ee || (ee = Object(Ye.a)(["\n    display: flex;\n    flex-flow: column;\n"]))),
                gi = Qe.a.input(te || (te = Object(Ye.a)(["\n    margin-bottom: 20px;\n    padding: 10px;\n    outline: none;\n    font-weight: 500;\n    font-size: 17px;\n    border: 2px solid #43b581;\n    border-radius: 5px;\n"]))),
                Oi = Qe.a.input(ae || (ae = Object(Ye.a)(["\n    padding: 10px;\n    outline: none;\n    font-weight: 500;\n    font-size: 17px;\n    border: 1px;\n    border-radius: 5px;\n    cursor: pointer;\n    color: #fff;\n    background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);\n    transition: .5s;\n\n    &:hover{\n        background: linear-gradient(180deg, rgba(13,129,10,1) 0%, rgba(67,181,129,1) 100%);\n    }\n"]))),
                wi = Qe.a.button(ie || (ie = Object(Ye.a)(["\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 10px 107px;\n    outline: none;\n    font-weight: 500;\n    font-size: 17px;\n    border: 1px;\n    border-radius: 5px;\n    cursor: pointer;\n    color: #fff;\n    background: linear-gradient(180deg, rgba(13,129,10,1) 0%, rgba(67,181,129,1) 100%);\n    transition: .5s;\n    \n    &:hover{\n        background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);\n    }\n"]))),
                vi = Qe.a.div(re || (re = Object(Ye.a)(["\n    position: absolute;\n    margin-top: 7px;\n    padding: 7px;\n    color: #cc3300;\n    font-weight: bold;\n    background-color: #ff9966;\n    border: 2px solid #cc3300;\n    border-radius: 5px;\n"]))),
                yi = function () {
                    var n = Object(ye.useState)(!1),
                        e = Object(Ee.a)(n, 2),
                        t = e[0],
                        a = e[1],
                        i = function () {
                            a(!t)
                        },
                        r = Object(Fe.g)(),
                        o = Object(ye.useState)(""),
                        c = Object(Ee.a)(o, 2),
                        s = c[0],
                        d = c[1],
                        l = Object(ye.useState)(""),
                        b = Object(Ee.a)(l, 2),
                        p = b[0],
                        x = b[1],
                        j = Object(ye.useState)(null),
                        u = Object(Ee.a)(j, 2),
                        h = u[0],
                        m = u[1];
                    return Object(Be.jsxs)(Be.Fragment, {
                        children: [Object(Be.jsx)(ci, {
                            isOpen: t,
                            toggle: i
                        }), Object(Be.jsx)($a, {
                            toggle: i
                        }), Object(Be.jsx)(ui, {
                            children: Object(Be.jsxs)(hi, {
                                children: [Object(Be.jsx)(mi, {
                                    children: "Hazte miembro"
                                }), Object(Be.jsxs)(fi, {
                                    onSubmit: function (n) {
                                        n.preventDefault(), Le.createUserWithEmailAndPassword(s, p).then((function (n) {
                                            r.push("/")
                                        })).catch((function (n) {
                                            "auth/invalid-email" == n.code && m("Formato de email incorrecto"), "auth/weak-password" == n.code && m("Password should be at least 6 characters")
                                        }))
                                    },
                                    autoComplete: "off",
                                    children: [Object(Be.jsx)(gi, {
                                        onChange: function (n) {
                                            d(n.target.value)
                                        },
                                        placeholder: "Ingrese un email v\xe1lido",
                                        type: "email"
                                    }), Object(Be.jsx)(gi, {
                                        onChange: function (n) {
                                            x(n.target.value)
                                        },
                                        placeholder: "Ingrese una contrase\xf1a",
                                        type: "password"
                                    }), Object(Be.jsx)(Oi, {
                                        value: "Registrar usuario",
                                        type: "submit"
                                    })]
                                }), Object(Be.jsx)(wi, {
                                    onClick: function () {
                                        Le.signInWithEmailAndPassword(s, p).then((function (n) {
                                            r.push("/")
                                        })).catch((function (n) {
                                            "auth/wrong-password" == n.code && m("The password is invalid or the user does not have a password.")
                                        }))
                                    },
                                    children: "Iniciar sesi\xf3n"
                                }), null !== h ? Object(Be.jsx)(vi, {
                                    children: h
                                }) : Object(Be.jsx)("span", {})]
                            })
                        })]
                    })
                },
                ki = Qe.a.div(oe || (oe = Object(Ye.a)(["\n    margin: 0 auto;\n    background-color: #fff;\n    width: 80%;\n    height: 85.9vh;\n"]))),
                zi = Qe.a.div(ce || (ce = Object(Ye.a)(["\n    display: flex;\n    flex-flow: flex;\n"]))),
                Ci = Qe.a.div(se || (se = Object(Ye.a)(["\n    display: flex;\n    flex-flow: column;\n    text-align: center;\n    justify-content: center;\n    width: 50%;\n    border-right: 1px solid black;\n"]))),
                Si = Qe.a.h2(de || (de = Object(Ye.a)(["\n    padding: 20px 0;\n"]))),
                Fi = Qe.a.form(le || (le = Object(Ye.a)(["\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    margin-top: 50px;\n"]))),
                Pi = Qe.a.input(be || (be = Object(Ye.a)(["\n    margin-bottom: 20px;\n    outline: none;\n    padding: 10px;\n    width: 80%;\n"]))),
                Ei = Qe.a.input(pe || (pe = Object(Ye.a)(["\n    margin-bottom: 20px;\n    outline: none;\n    padding: 10px;\n    width: 80%;\n"]))),
                Ai = Qe.a.input(xe || (xe = Object(Ye.a)(["\n    display: block;\n    padding: 5px;\n    width: 85%;\n"]))),
                Di = (Qe.a.span(je || (je = Object(Ye.a)(["\n\n"]))), Qe.a.div(ue || (ue = Object(Ye.a)(["\n    display: flex;\n    flex-flow: column;\n    text-align: center;\n    width: 50%;\n"])))),
                Ni = Qe.a.h2(he || (he = Object(Ye.a)(["\n    padding: 20px 0;\n"]))),
                Ii = function () {
                    var n = Object(ye.useState)(null),
                        e = Object(Ee.a)(n, 2),
                        t = e[0],
                        a = e[1],
                        i = Object(ye.useState)(),
                        r = Object(Ee.a)(i, 2),
                        o = r[0],
                        c = r[1],
                        s = Object(ye.useState)(""),
                        d = Object(Ee.a)(s, 2),
                        l = d[0],
                        b = d[1],
                        p = Object(ye.useState)(""),
                        x = Object(Ee.a)(p, 2),
                        j = x[0],
                        u = x[1],
                        h = Object(ye.useState)(""),
                        m = Object(Ee.a)(h, 2),
                        f = m[0],
                        g = m[1],
                        O = Object(ye.useState)([]),
                        w = Object(Ee.a)(O, 2),
                        v = w[0],
                        y = w[1],
                        k = function () {
                            var n = Object(Ne.a)(De.a.mark((function n(e) {
                                var t, a, i, r;
                                return De.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return e.preventDefault(), l.trim() || g("El campo nombre est\xe1 vac\xedo"), j.trim() || g("El campo tarea est\xe1 vac\xedo"), t = {
                                                nombre: l,
                                                tarea: j
                                            }, n.prev = 4, n.next = 7, Ue.collection("agenda").add(t);
                                        case 7:
                                            return n.sent, n.next = 10, Ue.collection("agenda").get();
                                        case 10:
                                            a = n.sent, i = a.docs, r = i.map((function (n) {
                                                return Object(Se.a)({
                                                    id: n.id
                                                }, n.data())
                                            })), y(r), console.log("Tarea a\xf1adida"), n.next = 20;
                                            break;
                                        case 17:
                                            n.prev = 17, n.t0 = n.catch(4), console.log(n.t0);
                                        case 20:
                                            b(""), u("");
                                        case 22:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [4, 17]
                                ])
                            })));
                            return function (e) {
                                return n.apply(this, arguments)
                            }
                        }(),
                        z = function () {
                            var n = Object(Ne.a)(De.a.mark((function n(e) {
                                var t, i, r, o;
                                return De.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, Ue.collection("agenda").doc(e).get();
                                        case 3:
                                            t = n.sent, i = t.data(), i.idUsuario, r = i.nombre, o = i.tarea, b(r), u(o), c(e), a(!0), console.log(e), n.next = 15;
                                            break;
                                        case 12:
                                            n.prev = 12, n.t0 = n.catch(0), console.log(n.t0);
                                        case 15:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 12]
                                ])
                            })));
                            return function (e) {
                                return n.apply(this, arguments)
                            }
                        }();
                    Object(ye.useEffect)((function () {
                        (function () {
                            var n = Object(Ne.a)(De.a.mark((function n(e) {
                                var t, a, i;
                                return De.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, Ue.collection("agenda").get();
                                        case 2:
                                            t = n.sent, a = t.docs, i = a.map((function (n) {
                                                return Object(Se.a)({
                                                    id: n.id
                                                }, n.data())
                                            })), y(i);
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function (e) {
                                return n.apply(this, arguments)
                            }
                        })()()
                    }), []);
                    var C = function () {
                            var n = Object(Ne.a)(De.a.mark((function n(e) {
                                var t, a, i;
                                return De.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, Ue.collection("agenda").doc(e).delete();
                                        case 3:
                                            return n.next = 5, Ue.collection("agenda").get();
                                        case 5:
                                            t = n.sent, a = t.docs, i = a.map((function (n) {
                                                return Object(Se.a)({
                                                    id: n.id
                                                }, n.data())
                                            })), y(i), n.next = 14;
                                            break;
                                        case 11:
                                            n.prev = 11, n.t0 = n.catch(0), console.log(n.t0);
                                        case 14:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 11]
                                ])
                            })));
                            return function (e) {
                                return n.apply(this, arguments)
                            }
                        }(),
                        S = function () {
                            var n = Object(Ne.a)(De.a.mark((function n(e) {
                                var t, i, r, s;
                                return De.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return e.preventDefault(), l.trim() || g("El campo nombre est\xe1 vac\xedo"), j.trim() || g("El campo tarea est\xe1 vac\xedo"), t = {
                                                nombre: l,
                                                tarea: j
                                            }, n.prev = 4, n.next = 7, Ue.collection("agenda").doc(o).set(t);
                                        case 7:
                                            return n.next = 9, Ue.collection("agenda").get();
                                        case 9:
                                            i = n.sent, r = i.docs, s = r.map((function (n) {
                                                return Object(Se.a)({
                                                    id: n.id
                                                }, n.data())
                                            })), y(s), n.next = 18;
                                            break;
                                        case 15:
                                            n.prev = 15, n.t0 = n.catch(4), console.log(n.t0);
                                        case 18:
                                            b(""), u(""), c(""), a(null);
                                        case 22:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [4, 15]
                                ])
                            })));
                            return function (e) {
                                return n.apply(this, arguments)
                            }
                        }();
                    return Object(Be.jsxs)(Be.Fragment, {
                        children: [Object(Be.jsx)($a, {}), Object(Be.jsx)(ki, {
                            children: Object(Be.jsxs)(zi, {
                                children: [Object(Be.jsxs)(Ci, {
                                    children: [Object(Be.jsx)(Si, {
                                        children: "Registra tus tareas"
                                    }), Object(Be.jsxs)(Fi, {
                                        onSubmit: t ? S : k,
                                        autoComplete: "off",
                                        children: [Object(Be.jsx)(Pi, {
                                            value: l,
                                            onChange: function (n) {
                                                b(n.target.value)
                                            },
                                            placeholder: "Ingresa tu nombre",
                                            type: "text"
                                        }), Object(Be.jsx)(Ei, {
                                            value: j,
                                            onChange: function (n) {
                                                u(n.target.value)
                                            },
                                            placeholder: "Ingresa tu tarea",
                                            type: "text"
                                        }), t ? Object(Be.jsx)(Ai, {
                                            type: "submit",
                                            value: "Editar"
                                        }) : Object(Be.jsx)(Ai, {
                                            type: "submit",
                                            value: "Registrar"
                                        })]
                                    }), f ? Object(Be.jsx)("div", {
                                        children: Object(Be.jsx)("p", {
                                            children: f
                                        })
                                    }) : Object(Be.jsx)("span", {})]
                                }), Object(Be.jsxs)(Di, {
                                    children: [Object(Be.jsx)(Ni, {
                                        children: "Tu lista de tareas"
                                    }), Object(Be.jsx)("ul", {
                                        className: "agendaUl",
                                        children: 0 !== v.length ? v.map((function (n) {
                                            return Object(Be.jsxs)("li", {
                                                className: "liTask",
                                                children: [n.nombre, " -- ", n.tarea, Object(Be.jsxs)("div", {
                                                    children: [Object(Be.jsx)("button", {
                                                        onClick: function (e) {
                                                            C(n.id)
                                                        },
                                                        className: "btnDeleteTask",
                                                        children: "Delete"
                                                    }), Object(Be.jsx)("button", {
                                                        onClick: function (e) {
                                                            z(n.id)
                                                        },
                                                        className: "btnEditTask",
                                                        children: "Edit"
                                                    })]
                                                })]
                                            }, n.id)
                                        })) : Object(Be.jsx)("span", {
                                            children: "No hay tareas"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                Mi = (t(115), function () {
                    var n = Object(ye.useState)(!1),
                        e = Object(Ee.a)(n, 2),
                        t = e[0],
                        a = e[1],
                        i = function () {
                            a(!t)
                        },
                        r = Object(ye.useState)([]),
                        o = Object(Ee.a)(r, 2),
                        c = o[0],
                        s = o[1],
                        d = Object(ye.useState)([]),
                        l = Object(Ee.a)(d, 2),
                        b = l[0],
                        p = l[1];
                    return Object(ye.useEffect)((function () {
                        Ue.collection("Plates").onSnapshot((function (n) {
                            return s(n.docs.map((function (n) {
                                return n.data()
                            })))
                        }))
                    }), []), Object(Be.jsxs)(Be.Fragment, {
                        children: [Object(Be.jsx)(ci, {
                            isOpen: t,
                            toggle: i
                        }), Object(Be.jsx)($a, {
                            toggle: i
                        }), 0 !== c.length && Object(Be.jsxs)("div", {
                            className: "content",
                            children: [Object(Be.jsx)("h1", {
                                className: "h1MenuFood",
                                children: "Cat\xe1logo de comidas"
                            }), Object(Be.jsx)("input", {
                                className: "inputMenu",
                                type: "text",
                                onChange: function (n) {
                                    p(n.target.value.toLowerCase())
                                },
                                placeholder: "Busca tu plato aqui...",
                                autoComplete: "off"
                            })]
                        }), Object(Be.jsxs)("div", {
                            className: "products-container",
                            children: [0 === c.length && Object(Be.jsx)("div", {
                                children: "Conexi\xf3n lenta...no hay productos para mostrar"
                            }), c.filter((function (n) {
                                return b === [""] || n.PlateFood.toLowerCase().includes(b) ? n : void 0
                            })).map((function (n) {
                                var e = n.FoodImg,
                                    t = n.FoodPrice,
                                    a = n.PlateFood;
                                return Object(Be.jsxs)("div", {
                                    className: "product-card",
                                    children: [Object(Be.jsx)("div", {
                                        className: "product-img",
                                        children: Object(Be.jsx)("img", {
                                            src: e,
                                            alt: "Food plate"
                                        })
                                    }), Object(Be.jsx)("div", {
                                        className: "product-name",
                                        children: a
                                    }), Object(Be.jsxs)("div", {
                                        className: "product-price",
                                        children: ["$", t, ".00"]
                                    }), Object(Be.jsx)("button", {
                                        className: "addcart-btn",
                                        children: "Ordenar pedido"
                                    })]
                                })
                            }))]
                        }), Object(Be.jsx)(st, {})]
                    })
                }),
                Bi = Qe.a.div(me || (me = Object(Ye.a)(["\n    margin: 0 auto;\n    background-color: #efefefd6;\n    width: 80%;\n    height: 100%;\n    border-radius: 10px;\n\n    @media screen and (max-width: 920px){\n        width: 100%;\n    }\n"]))),
                Ti = Qe.a.ul(fe || (fe = Object(Ye.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-flow: column;\n    list-style: none;\n    border-bottom: 2px solid #020202;\n    margin: 1em;\n    padding: 10px;\n    text-align: center;\n"]))),
                Li = Qe.a.li(ge || (ge = Object(Ye.a)(["\n    text-align: center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    color: #2e2e2e;\n\n    @media screen and (max-width: 440px){\n        font-size: 18px;\n\n    }\n"]))),
                Ui = Qe.a.button(Oe || (Oe = Object(Ye.a)(["\n    padding: 10px;\n    margin: 5px;\n    border: none;\n    border-radius: 5px;\n    background-color: #cf0000;\n    color: #fff;\n    cursor: pointer;\n"]))),
                Hi = (Qe.a.li(we || (we = Object(Ye.a)(["\n\n"]))), Qe.a.li(ve || (ve = Object(Ye.a)(["\n\n"]))), function () {
                    var n = Object(ye.useState)(!1),
                        e = Object(Ee.a)(n, 2),
                        t = e[0],
                        a = e[1],
                        i = function () {
                            a(!t)
                        },
                        r = Object(ye.useState)([]),
                        o = Object(Ee.a)(r, 2),
                        c = o[0],
                        s = o[1];
                    Object(ye.useEffect)((function () {
                        (function () {
                            var n = Object(Ne.a)(De.a.mark((function n(e) {
                                var t, a, i;
                                return De.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, Ue.collection("consultas").get();
                                        case 2:
                                            t = n.sent, a = t.docs, i = a.map((function (n) {
                                                return Object(Se.a)({
                                                    id: n.id
                                                }, n.data())
                                            })), s(i);
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function (e) {
                                return n.apply(this, arguments)
                            }
                        })()()
                    }), []);
                    var d = function () {
                        var n = Object(Ne.a)(De.a.mark((function n(e) {
                            var t, a, i;
                            return De.a.wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, Ue.collection("consultas").doc(e).delete();
                                    case 3:
                                        return n.next = 5, Ue.collection("consultas").get();
                                    case 5:
                                        t = n.sent, a = t.docs, i = a.map((function (n) {
                                            return Object(Se.a)({
                                                id: n.id
                                            }, n.data())
                                        })), s(i), n.next = 14;
                                        break;
                                    case 11:
                                        n.prev = 11, n.t0 = n.catch(0), console.log(n.t0);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 11]
                            ])
                        })));
                        return function (e) {
                            return n.apply(this, arguments)
                        }
                    }();
                    return Object(Be.jsxs)(Be.Fragment, {
                        children: [Object(Be.jsx)(ci, {
                            isOpen: t,
                            toggle: i
                        }), Object(Be.jsx)($a, {
                            toggle: i
                        }), Object(Be.jsx)(Bi, {
                            children: 0 !== c.length ? c.map((function (n) {
                                return Object(Be.jsxs)(Ti, {
                                    children: [Object(Be.jsx)(Li, {
                                        children: Object(Be.jsx)("div", {
                                            children: Object(Be.jsxs)("div", {
                                                children: [Object(Be.jsx)("h2", {
                                                    children: "Nombre:"
                                                }), Object(Be.jsx)("p", {
                                                    children: n.nombre
                                                })]
                                            })
                                        })
                                    }), Object(Be.jsx)(Li, {
                                        children: Object(Be.jsx)("div", {
                                            children: Object(Be.jsxs)("div", {
                                                children: [Object(Be.jsx)("h2", {
                                                    children: "Email:"
                                                }), Object(Be.jsx)("p", {
                                                    className: "PEmailConsultas",
                                                    children: n.email
                                                })]
                                            })
                                        })
                                    }), Object(Be.jsx)(Li, {
                                        children: Object(Be.jsx)("div", {
                                            children: Object(Be.jsxs)("div", {
                                                children: [Object(Be.jsx)("h2", {
                                                    children: "Consulta:"
                                                }), Object(Be.jsx)("p", {
                                                    children: n.pregunta
                                                })]
                                            })
                                        })
                                    }), Object(Be.jsx)("li", {
                                        children: Object(Be.jsx)("div", {
                                            children: Object(Be.jsx)(Ui, {
                                                onClick: function (e) {
                                                    d(n.id)
                                                },
                                                children: "Terminar consulta"
                                            })
                                        })
                                    })]
                                }, n.id)
                            })) : Object(Be.jsx)("span", {
                                children: "No hay consultas"
                            })
                        }), Object(Be.jsx)(st, {})]
                    })
                });
            var Ri = function () {
                return Object(Be.jsx)(ji, {
                    children: Object(Be.jsx)(qe, {
                        children: Object(Be.jsx)(Pe.a, {
                            basename: "/alplato",
                            children: Object(Be.jsxs)(Fe.d, {
                                children: [Object(Be.jsx)(Fe.b, {
                                    exact: !0,
                                    path: "/",
                                    component: si
                                }), Object(Be.jsx)(Fe.b, {
                                    path: "/addproducts",
                                    component: bi
                                }), Object(Be.jsx)(Fe.b, {
                                    path: "/sign",
                                    component: yi
                                }), Object(Be.jsx)(Fe.b, {
                                    path: "/consultas",
                                    component: Hi
                                }), Object(Be.jsx)(Fe.b, {
                                    path: "/agenda",
                                    component: Ii
                                }), Object(Be.jsx)(Fe.b, {
                                    path: "/foodmenu",
                                    component: Mi
                                }), Object(Be.jsx)(Fe.b, {
                                    path: "/mapres",
                                    component: qa
                                })]
                            })
                        })
                    })
                })
            };
            Ce.a.render(Object(Be.jsx)(Ri, {}), document.getElementById("root"))
        },
        80: function (n, e, t) {}
    },
    [
        [116, 1, 2]
    ]
]);
//# sourceMappingURL=main.fbf7571e.chunk.js.map