
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "rxjs": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild__rxjs__prebuild__.js")
          return pkg
        }
      ,
        "zone.js": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild__zone_mf_3_js__prebuild__.js")
          return pkg
        }
      ,
        "@angular/common": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild___mf_0_angular_mf_1_common__prebuild__.js")
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
          "@angular/common": {
            name: "@angular/common",
            version: "19.1.5",
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
              requiredVersion: "^19.1.5"
            }
          }
        ,
          "@angular/core": {
            name: "@angular/core",
            version: "19.1.5",
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
              singleton: false,
              requiredVersion: "^19.1.5"
            }
          }
        ,
          "@angular/router": {
            name: "@angular/router",
            version: "19.1.5",
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
              requiredVersion: "^19.1.5"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      