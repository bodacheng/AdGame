if ( TRACE ) { TRACE( JSON.parse( '["PlayworksComplianceHooks#init","PlayworksComplianceHooks#Start","PlayworksComplianceHooks#TriggerInstall","PlayworksComplianceHooks#TriggerGameEnded"]' ) ); }
/**
 * @version 1.0.9532.30370
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PlayworksComplianceHooks start.*/
    Bridge.define("PlayworksComplianceHooks", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            iosStoreUrl: null,
            androidStoreUrl: null,
            defaultLevel: 0,
            gameEnded: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#init", this ); }

                this.iosStoreUrl = "";
                this.androidStoreUrl = "";
                this.defaultLevel = 1;
            }
        },
        methods: {
            /*PlayworksComplianceHooks.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#Start", this ); }

                // LP3007 custom event
                Luna.Unity.Analytics.LogEvent$1("session_start", 1);
            },
            /*PlayworksComplianceHooks.Start end.*/

            /*PlayworksComplianceHooks.TriggerInstall start.*/
            TriggerInstall: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#TriggerInstall", this ); }

                // LP3006 required API
                Luna.Unity.Playable.InstallFullGame(this.iosStoreUrl, this.androidStoreUrl);
                Luna.Unity.Analytics.LogEvent$1("cta_click", 1);
            },
            /*PlayworksComplianceHooks.TriggerInstall end.*/

            /*PlayworksComplianceHooks.TriggerGameEnded start.*/
            TriggerGameEnded: function () {
if ( TRACE ) { TRACE( "PlayworksComplianceHooks#TriggerGameEnded", this ); }

                if (this.gameEnded) {
                    return;
                }

                this.gameEnded = true;
                // LP3015 required API
                Luna.Unity.LifeCycle.GameEnded(System.Array.init(["completed"], System.Object));
                Luna.Unity.Analytics.LogEvent$1("game_end", 1);
            },
            /*PlayworksComplianceHooks.TriggerGameEnded end.*/


        }
    });
    /*PlayworksComplianceHooks end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System"];

    /*PlayworksComplianceHooks start.*/
    $m("PlayworksComplianceHooks", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TriggerGameEnded","t":8,"sn":"TriggerGameEnded","rt":$n[0].Void},{"a":2,"n":"TriggerInstall","t":8,"sn":"TriggerInstall","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Android Store URL", 1, "CTA", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"androidStoreUrl","t":4,"rt":$n[0].String,"sn":"androidStoreUrl"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Default Level", 2, "Gameplay", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultLevel","t":4,"rt":$n[0].Int32,"sn":"defaultLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"gameEnded","t":4,"rt":$n[0].Boolean,"sn":"gameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("iOS Store URL", 0, "CTA", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"iosStoreUrl","t":4,"rt":$n[0].String,"sn":"iosStoreUrl"}]}; }, $n);
    /*PlayworksComplianceHooks end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
