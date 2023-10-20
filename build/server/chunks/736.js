"use strict";
exports.id = 736;
exports.ids = [736];
exports.modules = {

/***/ 3493:
/***/ (() => {


// UNUSED EXPORTS: guards, isType, pick

;// CONCATENATED MODULE: ./node_modules/.pnpm/@contentlayer+client@0.3.2_esbuild@0.17.19_markdown-wasm@1.2.0/node_modules/@contentlayer/client/dist/guards.js
function is(typeName, _) {
    if (_) {
        if (Array.isArray(typeName)) {
            // TODO make type field name dynamic (probably will require to code-gen the guard function)
            return typeName.some((typeName_)=>_?.type === typeName_);
        } else {
            return typeName === _?.type;
        }
    } else {
        return (_)=>is(typeName, _);
    }
}
const isType = (/* unused pure expression or super */ null && (is));
const guards = {
    is,
    // isType,
    // hasAllFields,
    // allFields,
    hasField
};
function hasField(_, property) {
    return _.hasOwnProperty(property);
} //# sourceMappingURL=guards.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@contentlayer+client@0.3.2_esbuild@0.17.19_markdown-wasm@1.2.0/node_modules/@contentlayer/client/dist/index.js

 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/contentlayer@0.3.2_esbuild@0.17.19_markdown-wasm@1.2.0/node_modules/contentlayer/dist/client/index.js
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 4565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy  } = __webpack_require__(8512);
module.exports = createProxy("A:\\git-repos\\personal-website\\node_modules\\.pnpm\\next@13.4.3_@opentelemetry+api@1.4.1_react-dom@18.2.0_react@18.2.0\\node_modules\\next\\dist\\client\\link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 4700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(4565);


/***/ })

};
;