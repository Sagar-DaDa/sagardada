import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import hexColor from './resources/Colors.mjs';
import css from './resources/Css.mjs'
import backLightScheme from './resources/Backlight.mjs';
import Notification from './components/Notification';
import Strings from './resources/Strings';
import About from './components/About';
import Footer from './components/Footer';
import Showcase from './components/Showcase';

function App() {

  const body = document.getElementById('body');

  const [isDarkMode, setIsDarkMode] = useState(false); //Whether dark mode is enabled or not
  const [backLightToggle, setBackLightToggle] = useState(false);
  const [backLightColor, setBackLightColor] = useState(backLightScheme());
  const [notification, setNotification] = useState({ type: null, message: null });

  if (isDarkMode) {
    body.style.backgroundColor = hexColor.dark;
  }
  else {
    body.style.backgroundColor = hexColor.light;
  }

  const darkModeSwitcher = () => {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
    setIsDarkMode(updatedIsDarkMode => {
      if (updatedIsDarkMode) {
        setNotification({
          type: Strings.notificationType.toast,
          message: Strings.english.darkModeEnabled
        });
      } else {
        setNotification({
          type: Strings.notificationType.toast,
          message: Strings.english.darkModeDisabled
        });
      }

      setTimeout(() => {
        setNotification({ type: null, message: null });
      }, 2000);

      return updatedIsDarkMode;
    });

  }

  const backLightToggler = () => {
    setBackLightToggle(prevBackLightToggle => !prevBackLightToggle);
    setBackLightColor(backLightScheme(100));

    setBackLightToggle(updatedBackLightToggle => {
      if (updatedBackLightToggle) {
        setNotification({
          type: Strings.notificationType.toast,
          message: Strings.english.backLightEffectOn
        });
      } else {
        setNotification({
          type: Strings.notificationType.toast,
          message: Strings.english.backLightEffectOff
        });
      }

      setTimeout(() => {
        setNotification({ type: null, message: null });
      }, 2000);

      return updatedBackLightToggle;
    });

  }
  const backLightColorChanger = (schemeNo) => {
    setBackLightColor(backLightScheme(schemeNo));
  }



  return (
    <>
      <Notification notification={notification} />
      <Navbar
        title="SagarDaDa"
        portfolio="Showcase"
        about="About"
        darkMode={isDarkMode}
        backgroundColor={isDarkMode ? css.darkBackground : css.lightBackground}
        darkModeSwitch={darkModeSwitcher}
        backLightSwitch={isDarkMode ? css.displayInlineBlock : css.displayNone}
        backLightToggle={backLightToggle}
        backLightToggler={backLightToggler}
        showColorPalette={isDarkMode ? backLightToggle ? css.displayInlineBlock : css.displayNone : css.displayNone}
        backLightColor={isDarkMode ? backLightToggle ? backLightColor : backLightScheme(0) : backLightScheme()}
        backLightColorChanger={backLightColorChanger} />

      <div className='px-2'>
        <Home
          backLightColor={isDarkMode ? backLightToggle ? backLightColor : backLightScheme(0) : backLightScheme()}
        />
        <About
          isDarkMode={isDarkMode}
          backLightToggle={backLightToggle}
          backLightColor={isDarkMode ? backLightToggle ? backLightColor : backLightScheme(0) : backLightScheme()}
        />
        <Showcase
          backLightColor={isDarkMode ? backLightToggle ? backLightColor : backLightScheme(0) : backLightScheme()}
        />
      </div>
      <Footer
        isDarkMode={isDarkMode}
        backLightToggle={backLightToggle}
        backLightColor={isDarkMode ? backLightToggle ? backLightColor : backLightScheme(0) : backLightScheme()}
      />

    </>
  );
}

export default App;
