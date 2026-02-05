using Luna.Unity;
using UnityEngine;

public sealed class PlayworksComplianceHooks : MonoBehaviour
{
    [LunaPlaygroundField("iOS Store URL", 0, "CTA")]
    [SerializeField] private string iosStoreUrl = "";

    [LunaPlaygroundField("Android Store URL", 1, "CTA")]
    [SerializeField] private string androidStoreUrl = "";

    [LunaPlaygroundField("Default Level", 2, "Gameplay")]
    [SerializeField] private int defaultLevel = 1;

    private bool gameEnded;

    private void Start()
    {
        // LP3007 custom event
        Analytics.LogEvent("session_start", 1);

        // Auto-bootstrap a simple playable loop in SampleScene.
        if (GetComponent<SimpleDodgeGame>() == null)
        {
            gameObject.AddComponent<SimpleDodgeGame>();
        }
    }

    // Bind this to your CTA button OnClick.
    public void TriggerInstall()
    {
        // LP3006 required API
        Playable.InstallFullGame(iosStoreUrl, androidStoreUrl);
        Analytics.LogEvent("cta_click", 1);
    }

    // Call this when gameplay is finished.
    public void TriggerGameEnded()
    {
        if (gameEnded)
        {
            return;
        }

        gameEnded = true;
        // LP3015 required API
        LifeCycle.GameEnded(new object[] { "completed" });
        Analytics.LogEvent("game_end", 1);
    }
}
