
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "rxjs": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild__rxjs__prebuild__.js")
          return pkg
        }
      ,
        "@angular/compiler": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild___mf_0_angular_mf_1_compiler__prebuild__.js")
          return pkg
        }
      ,
        "zone.js": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild__zone_mf_3_js__prebuild__.js")
          return pkg
        }
      ,
        "@angular/platform-browser": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild___mf_0_angular_mf_1_platform_mf_2_browser__prebuild__.js")
          return pkg
        }
      ,
        "@angular/core": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild___mf_0_angular_mf_1_core__prebuild__.js")
          return pkg
        }
      ,
        "@angular/router": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild___mf_0_angular_mf_1_router__prebuild__.js")
          return pkg
        }
      ,
        "@angular/common/http": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild___mf_0_angular_mf_1_common_mf_1_http__prebuild__.js")
          return pkg
        }
      ,
        "@angular/common": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild___mf_0_angular_mf_1_common__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "rxjs": {
            name: "rxjs",
            version: "7.8.1",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["rxjs"].loaded = true
              const {"rxjs": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^7.8.1"
            }
          }
        ,
          "@angular/compiler": {
            name: "@angular/compiler",
            version: "20.1.3",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["@angular/compiler"].loaded = true
              const {"@angular/compiler": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^20.1.3"
            }
          }
        ,
          "zone.js": {
            name: "zone.js",
            version: "0.15.0",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["zone.js"].loaded = true
              const {"zone.js": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.15.0"
            }
          }
        ,
          "@angular/platform-browser": {
            name: "@angular/platform-browser",
            version: "20.1.3",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["@angular/platform-browser"].loaded = true
              const {"@angular/platform-browser": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^20.1.3"
            }
          }
        ,
          "@angular/core": {
            name: "@angular/core",
            version: "20.1.3",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["@angular/core"].loaded = true
              const {"@angular/core": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^20.1.3"
            }
          }
        ,
          "@angular/router": {
            name: "@angular/router",
            version: "20.1.3",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["@angular/router"].loaded = true
              const {"@angular/router": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^20.1.3"
            }
          }
        ,
          "@angular/common/http": {
            name: "@angular/common/http",
            version: "20.1.3",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["@angular/common/http"].loaded = true
              const {"@angular/common/http": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^20.1.3"
            }
          }
        ,
          "@angular/common": {
            name: "@angular/common",
            version: "20.1.3",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["@angular/common"].loaded = true
              const {"@angular/common": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^20.1.3"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      