// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
"use strict";
const Game = require("789b00406e138236");
const { default: initialState } = require("8fe086ccaf03ae1b");
const { default: swipe } = require("c8d91ac2d14e1f80");
const startButton = document.querySelector(".controls button");
const score = document.querySelector(".game-score");
const game = new Game(initialState());
document.body.style.overflowY = "hidden";
startButton.addEventListener("click", ()=>{
    if (startButton.classList.contains("start")) {
        startButton.classList.remove("start");
        startButton.classList.add("restart");
        startButton.textContent = "Restart";
        game.start();
    } else game.restart();
    document.querySelector(".message-start").classList.add("hidden");
    const data = game.getScore();
    score.textContent = data;
});
document.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowRight") {
        game.moveRight();
        const data = game.getScore();
        score.textContent = data;
    }
    if (e.key === "ArrowLeft") {
        game.moveLeft();
        const data = game.getScore();
        score.textContent = data;
    }
    if (e.key === "ArrowUp") {
        game.moveUp();
        const data = game.getScore();
        score.textContent = data;
    }
    if (e.key === "ArrowDown") {
        game.moveDown();
        const data = game.getScore();
        score.textContent = data;
    }
});
swipe(game);

},{"789b00406e138236":"eIbh2","c8d91ac2d14e1f80":"eNay7","8fe086ccaf03ae1b":"44zvJ"}],"eIbh2":[function(require,module,exports) {
"use strict";
const { gameStatus } = require("3617d266ff2fbcb9");
const { default: addNewNumToState } = require("37a4047862bfeef8");
const { default: initialState } = require("3d7ebad86bbb2650");
const { default: moveDown } = require("b8cabf6749b8e341");
const { default: moveLeft } = require("7fb6626f0dffd925");
const { default: moveRight } = require("e5f5e4ada812ddd5");
const { default: moveUp } = require("8563faa920c7e4ef");
const { default: renderNums } = require("8936b2a6272052d8");
class Game {
    state = [];
    status = gameStatus.idle;
    constructor(data){
        this.state = data;
    }
    moveLeft() {
        if (this.getStatus() !== gameStatus.playing) return;
        const afterMove = moveLeft(this.getState());
        this.applyChanges(afterMove);
    }
    moveRight() {
        if (this.getStatus() !== gameStatus.playing) return;
        const afterMove = moveRight(this.getState());
        this.applyChanges(afterMove);
    }
    moveUp() {
        if (this.getStatus() !== gameStatus.playing) return;
        const afterMove = moveUp(this.getState());
        this.applyChanges(afterMove);
    }
    moveDown() {
        if (this.getStatus() !== gameStatus.playing) return;
        const afterMove = moveDown(this.getState());
        this.applyChanges(afterMove);
    }
    getScore() {
        if (this.status === gameStatus.idle) return 0;
        return this.state.flat().reduce((acc, elem)=>acc + elem, 0);
    }
    getState() {
        return this.state.map((row)=>[
                ...row
            ]);
    }
    getStatus() {
        return this.status;
    }
    start() {
        this.status = gameStatus.playing;
        renderNums(this.getState());
    }
    restart() {
        this.state = initialState();
        renderNums(this.getState());
    }
    applyChanges(afterMove) {
        if (!afterMove) return;
        if (this.isFull(afterMove)) {
            this.gameOver();
            return;
        }
        const newState = addNewNumToState(afterMove);
        this.state = newState;
        renderNums(newState);
        if (this.has2048(this.state)) this.winner();
    }
    isFull(afterMove) {
        return afterMove.flat().every((cell)=>cell !== 0);
    }
    gameOver() {
        this.status = gameStatus.lose;
        document.querySelector(".message-lose").classList.remove("hidden");
    }
    has2048(afterMove) {
        return afterMove.flat().includes(2048);
    }
    winner() {
        this.status = gameStatus.win;
        document.querySelector(".message-win").classList.remove("hidden");
    }
}
module.exports = Game;

},{"3617d266ff2fbcb9":"4pn2y","37a4047862bfeef8":"9vvHs","3d7ebad86bbb2650":"44zvJ","b8cabf6749b8e341":"hS5A9","7fb6626f0dffd925":"dWMOS","e5f5e4ada812ddd5":"6KfQG","8563faa920c7e4ef":"clT1S","8936b2a6272052d8":"500wX"}],"4pn2y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameStatus", ()=>gameStatus);
const gameStatus = {
    idle: "idle",
    playing: "playing",
    win: "win",
    lose: "lose"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9vvHs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _random = require("./random");
var _randomDefault = parcelHelpers.interopDefault(_random);
const addNewNumToState = (state)=>{
    const newState = state.map((row)=>[
            ...row
        ]);
    const num = (0, _randomDefault.default).num();
    const [first, second] = (0, _randomDefault.default).position(newState);
    newState[first][second] = num;
    return newState;
};
exports.default = addNewNumToState;

},{"./random":"cdZ7B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cdZ7B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const random = {
    num () {
        const probability = Math.random();
        if (probability <= 0.9) return 2;
        else return 4;
    },
    position (arr) {
        let firstNum = Math.floor(Math.random() * 4);
        while(!arr[firstNum].includes(0))firstNum = Math.floor(Math.random() * 4);
        let secondNum = Math.floor(Math.random() * 4);
        while(arr[firstNum][secondNum] !== 0)secondNum = Math.floor(Math.random() * 4);
        return [
            firstNum,
            secondNum
        ];
    }
};
exports.default = random;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44zvJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addNewNum = require("./addNewNum");
var _addNewNumDefault = parcelHelpers.interopDefault(_addNewNum);
const initialState = ()=>{
    const state = [
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ]
    ];
    const newState = (0, _addNewNumDefault.default)(state);
    return (0, _addNewNumDefault.default)(newState);
};
exports.default = initialState;

},{"./addNewNum":"9vvHs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hS5A9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const moveDown = (state)=>{
    let noMove = true;
    for(let i = 0; i < state.length; i += 1){
        const lastCell = [
            state.length - 1,
            state[state.length - 1][i]
        ];
        let lastFreeCell = null;
        for(let j = state.length - 1; j >= 0; j -= 1){
            const num = state[j][i];
            if (num === 0) {
                if (lastFreeCell !== null) continue;
                lastFreeCell = j;
                continue;
            }
            if (lastCell[1] === num && lastCell[0] !== j) {
                state[lastCell[0]][i] = num * 2;
                state[j][i] = 0;
                lastFreeCell = j;
                lastCell[0] -= 1;
                j += 1;
                lastCell[1] = state[lastCell[0]][i];
                noMove = false;
                continue;
            }
            if (lastFreeCell !== null) {
                state[lastFreeCell][i] = num;
                lastCell[0] = lastFreeCell;
                lastCell[1] = num;
                lastFreeCell -= 1;
                state[j][i] = 0;
                noMove = false;
                continue;
            }
            if (lastCell[1] !== num) {
                lastCell[0] -= 1;
                lastCell[1] = num;
                continue;
            }
        }
    }
    if (noMove) return false;
    return state;
};
exports.default = moveDown;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWMOS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const moveLeft = (state)=>{
    let noMove = true;
    for(let i = 0; i < state.length; i += 1){
        const line = state[i];
        const lastCell = [
            0,
            line[0]
        ];
        let lastFreeCell = null;
        for(let j = 0; j < line.length; j += 1){
            const num = line[j];
            if (num === 0) {
                if (lastFreeCell !== null) continue;
                lastFreeCell = j;
                continue;
            }
            if (lastCell[1] === num && lastCell[0] !== j) {
                state[i][lastCell[0]] = num * 2;
                state[i][j] = 0;
                lastFreeCell = j;
                lastCell[0] += 1;
                j -= 1;
                lastCell[1] = state[j][lastCell[0]];
                noMove = false;
                continue;
            }
            if (lastFreeCell !== null) {
                state[i][lastFreeCell] = num;
                lastCell[0] = lastFreeCell;
                lastCell[1] = num;
                lastFreeCell += 1;
                state[i][j] = 0;
                noMove = false;
                continue;
            }
            if (lastCell[1] !== num) {
                lastCell[0] += 1;
                lastCell[1] = num;
                continue;
            }
        }
    }
    if (noMove) return false;
    return state;
};
exports.default = moveLeft;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KfQG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const moveRight = (state)=>{
    let noMove = true;
    for(let i = 0; i < state.length; i += 1){
        const line = state[i];
        const lastCell = [
            line.length - 1,
            line[line.length - 1]
        ];
        let lastFreeCell = null;
        for(let j = line.length - 1; j >= 0; j -= 1){
            const num = line[j];
            if (num === 0) {
                if (lastFreeCell !== null) continue;
                lastFreeCell = j;
                continue;
            }
            if (lastCell[1] === num && lastCell[0] !== j) {
                state[i][lastCell[0]] = num * 2;
                state[i][j] = 0;
                lastFreeCell = j;
                lastCell[0] -= 1;
                j += 1;
                lastCell[1] = state[j][lastCell[0]];
                noMove = false;
                continue;
            }
            if (lastFreeCell !== null) {
                state[i][lastFreeCell] = num;
                lastCell[0] = lastFreeCell;
                lastCell[1] = num;
                lastFreeCell -= 1;
                state[i][j] = 0;
                noMove = false;
                continue;
            }
            if (lastCell[1] !== num) {
                lastCell[0] -= 1;
                lastCell[1] = num;
                continue;
            }
        }
    }
    if (noMove) return false;
    return state;
};
exports.default = moveRight;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clT1S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const moveUp = (state)=>{
    let noMove = true;
    for(let i = 0; i < state.length; i += 1){
        const lastCell = [
            0,
            state[0][i]
        ];
        let lastFreeCell = null;
        for(let j = 0; j < state.length; j += 1){
            const num = state[j][i];
            if (num === 0) {
                if (lastFreeCell !== null) continue;
                lastFreeCell = j;
                continue;
            }
            if (lastCell[1] === num && lastCell[0] !== j) {
                state[lastCell[0]][i] = num * 2;
                state[j][i] = 0;
                lastFreeCell = j;
                lastCell[0] += 1;
                j -= 1;
                lastCell[1] = state[lastCell[0]][i];
                noMove = false;
                continue;
            }
            if (lastFreeCell !== null) {
                state[lastFreeCell][i] = num;
                lastCell[0] = lastFreeCell;
                lastCell[1] = num;
                lastFreeCell += 1;
                state[j][i] = 0;
                noMove = false;
                continue;
            }
            if (lastCell[1] !== num) {
                lastCell[0] += 1;
                lastCell[1] = num;
                continue;
            }
        }
    }
    if (noMove) return false;
    return state;
};
exports.default = moveUp;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"500wX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function wait(delay) {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(), delay);
    });
}
const renderNums = (state)=>{
    const table = document.querySelector("tbody");
    const rows = [
        ...table.children
    ];
    rows.forEach((row, index)=>{
        const cells = [
            ...row.children
        ];
        cells.forEach((cell, i)=>{
            if (cell.children.length) {
                cell.lastChild.classList.add("hide");
                wait(75).then(()=>{
                    cell.removeChild(cell.lastChild);
                    const divTag = document.createElement("div");
                    divTag.classList.add("field-cell");
                    divTag.style.cssText = `display: flex; justify-content: center; align-items: center;`;
                    const num = state[index][i];
                    const content = num === 0 ? "" : num;
                    if (num) divTag.classList.add(`field-cell--${num}`);
                    divTag.textContent = content;
                    cell.append(divTag);
                });
            } else {
                const divTag = document.createElement("div");
                divTag.classList.add("field-cell");
                divTag.style.cssText = `display: flex; justify-content: center; align-items: center;`;
                const num = state[index][i];
                const content = num === 0 ? "" : num;
                if (num) divTag.classList.add(`field-cell--${num}`);
                divTag.textContent = content;
                cell.append(divTag);
            }
        });
    });
};
exports.default = renderNums;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNay7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const swipe = (game)=>{
    const table = document.querySelector("tbody");
    const score = document.querySelector(".game-score");
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    const SWIPE_DIFF = 20;
    function checkDirection() {
        const xDiff = Math.abs(touchStartX - touchEndX);
        const yDiff = Math.abs(touchStartY - touchEndY);
        if (xDiff > yDiff) {
            if (touchStartX - touchEndX > SWIPE_DIFF) game.moveLeft();
            if (touchEndX - touchStartX > SWIPE_DIFF) game.moveRight();
        } else {
            if (touchStartY - touchEndY > SWIPE_DIFF) game.moveUp();
            if (touchEndY - touchStartY > SWIPE_DIFF) game.moveDown();
        }
        const data = game.getScore();
        score.textContent = data;
    }
    table.addEventListener("touchstart", (e)=>{
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    });
    table.addEventListener("touchend", (e)=>{
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        checkDirection();
    });
    return ()=>{
        table.removeEventListener("touchstart", touchStartHandler);
        table.removeEventListener("touchend", touchEndHandler);
    };
};
exports.default = swipe;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire7b01")

//# sourceMappingURL=index.b8fca702.js.map
