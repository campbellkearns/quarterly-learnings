!(function (e) {
    function t(t) {
        var r = t.getAttribute("data-src"),
        i = t.getAttribute("data-theme") || "night",
        n = e.createElement("iframe");
        n.setAttribute("src", r ),
        n.setAttribute("width", "100%"),
        n.setAttribute("height", "220"),
        n.setAttribute("scrolling", "no"),
        n.setAttribute("frameborder", "no"),
        n.setAttribute("title", "Quarterly Learnings Podcast"),
        t.parentNode.replaceChild(n, t),
        (this.id = +new Date()),
        (this.src = n.src),
        (this.iframe = n);
  }
    var r = "https://quarterlylearnings.com",
    i = e.getElementsByClassName("latest-episode"),
    n = [],
    a = function (e, t) {
      (t.context = "player.js"), (t.version = "0.0.11"), (t.listener = e.id);
      try {
        e.iframe.contentWindow.postMessage(JSON.stringify(t), r);
      } catch (e) {}
    },
    s = function (e) {
      if (e.origin !== r) return !1;
      var t = JSON.parse(e.data);
      if ("player.js" !== t.context) return !1;
      if ("ready" === t.event)
        for (var i = n.length - 1; i >= 0; i--)
          n[i].src === t.value.src &&
            a(n[i], { method: "addEventListener", value: "play" });
      if ("play" === t.event)
        for (var i = n.length - 1; i >= 0; i--)
          n[i].id !== t.listener && a(n[i], { method: "pause" });
    };
  window.addEventListener("message", s);
  for (var o = i.length - 1; o > -1; o--) n.push(new t(i[o]));
})(document);
