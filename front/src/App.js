import { useEffect, useState } from "react";
import NotistackProvider from "./components/NotistackProvider";
import RtlLayout from "./components/RtlLayout";
import ScrollToTop from "./components/ScrollToTop";
import ThemeColorPresets from "./components/ThemeColorPresets";
import ThemeLocalization from "./components/ThemeLocalization";
import { DialogAnimate, MotionLazyContainer } from "./components/animate";
import { SessionDialog } from "./components/confirm-dialog";
import Settings from "./components/settings";
import MainRouter from "./routes";
import ThemeProvider from "./theme";
import { ProgressBarStyle } from "./components/ProgressBar";
import { SettingsProvider } from "./contexts/SettingsContext";

function App() {
  const [isLogout, setLogout] = useState(false);

  useEffect(() => {
    const onFocus = () => {
      const token = localStorage.getItem('accessToken');
      if (window.location.href.indexOf("admin") > -1 || window.location.href.indexOf("branch") > -1 || window.location.href.indexOf("employee") > -1) {
        if (token === null) {
          setLogout(true);
        }
      }
    };
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener('focus', onFocus);
    };
  }, [])

  return (
    <SettingsProvider>
      <ThemeProvider>
        <ThemeColorPresets>
          <ThemeLocalization>
            <RtlLayout>
              <NotistackProvider>
                <MotionLazyContainer>
                  <ProgressBarStyle />
                  <ScrollToTop />
                  <MainRouter />
                  <DialogAnimate open={isLogout} width="xs">
                    <SessionDialog />
                  </DialogAnimate>
                </MotionLazyContainer>
              </NotistackProvider>
            </RtlLayout>
          </ThemeLocalization>
        </ThemeColorPresets>
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;
