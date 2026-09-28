// Discord invite, in one place. Every [data-discord] link uses it.
var DISCORD = "https://discord.gg/7Kz8DdVRDG";
(function () {
  document.querySelectorAll("[data-discord]").forEach(function (a) {
    if (!DISCORD) { a.hidden = true; return; }
    a.href = DISCORD; a.target = "_blank"; a.rel = "noopener";
  });
})();

// Support email, in one place. Every [data-email] element shows it.
var SUPPORT_EMAIL = "eric.linder@gmail.com";
(function () {
  document.querySelectorAll("[data-email]").forEach(function (row) {
    if (!SUPPORT_EMAIL) return;
    row.hidden = false;
    var code = row.querySelector("code");
    if (code) code.textContent = SUPPORT_EMAIL;
    var link = row.querySelector("a[data-mailto]");
    if (link) link.href = "mailto:" + SUPPORT_EMAIL + "?subject=Miles%20Ahead%20of%20Lease";
    var btn = row.querySelector("button");
    if (btn) btn.addEventListener("click", function () {
      var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(SUPPORT_EMAIL).then(done, function () {});
    });
  });
})();
