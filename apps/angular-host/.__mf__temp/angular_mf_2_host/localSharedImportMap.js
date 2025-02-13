
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "rxjs": async () => {
          let pkg = await import("__mf__virtual/angular_mf_2_host__prebuild__rxjs__prebuild__.js")
          return pkg
        }
      ,
        "@angular/compiler": async () => {
          let pkg = await import("__mf__virtual/angular_mf_2_host__prebuild___mf_0_angular_mf_1_compiler__prebuild__.js")
          return pkg
        }
      ,
        "@angular/platform-browser": async () => {
          let pkg = await import("__mf__virtual/angular_mf_2_host__prebuild___mf_0_angular_mf_1_platform_mf_2_browser__prebuild__.js")
          return pkg
        }
      ,
        "@angular/router": async () => {
          let pkg = await import("__mf__virtual/angular_mf_2_host__prebuild___mf_0_angular_mf_1_router__prebuild__.js")
          return pkg
        }
      ,
        "zone.js": async () => {
          let pkg = await import("__mf__virtual/angular_mf_2_host__prebuild__zone_mf_3_js__prebuild__.js")
          return pkg
        }
      ,
        "@angular/core": async () => {
          let pkg = await import("__mf__virtual/angular_mf_2_host__prebuild___mf_0_angular_mf_1_core__prebuild__.js")
          return pkg
        }
      ,
        "@angular/common": async () => {
          let pkg = await import("__mf__virtual/angular_mf_2_host__prebuild___mf_0_angular_mf_1_common__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "rxjs": {
            name: "rxjs",
            version: "7.8.1",
            scope: ["default"],
            loaded: false,
            from: "angular-host",
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
            version: "19.1.5",
            scope: ["default"],
            loaded: false,
            from: "angular-host",
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
              requiredVersion: "^19.1.5"
            }
          }
        ,
          "@angular/platform-browser": {
            name: "@angular/platform-browser",
            version: "19.1.5",
            scope: ["default"],
            loaded: false,
            from: "angular-host",
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
              requiredVersion: "^19.1.5"
            }
          }
        ,
          "@angular/router": {
            name: "@angular/router",
            version: "19.1.5",
            scope: ["default"],
            loaded: false,
            from: "angular-host",
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
        ,
          "zone.js": {
            name: "zone.js",
            version: "0.15.0",
            scope: ["default"],
            loaded: false,
            from: "angular-host",
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
          "@angular/core": {
            name: "@angular/core",
            version: "19.1.5",
            scope: ["default"],
            loaded: false,
            from: "angular-host",
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
              requiredVersion: "^19.1.5"
            }
          }
        ,
          "@angular/common": {
            name: "@angular/common",
            version: "19.1.5",
            scope: ["default"],
            loaded: false,
            from: "angular-host",
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
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "remote",
                  name: "remote",
                  type: "module",
                  entry: "http://localhost:5174/remoteEntry.js",
                }
          ,
                {
                  entryGlobalName: "@common-store",
                  name: "@common-store",
                  type: "module",
                  entry: "http://localhost:5176/remoteEntry.js",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      