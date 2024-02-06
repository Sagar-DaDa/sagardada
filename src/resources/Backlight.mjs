import css from './Css.mjs'
import Colors from './Colors.mjs'

const backLightScheme = (schemeNo) => {
    switch (schemeNo) {
        case 0:
            return {
                themeColor: Colors.mutedGrey,
                color: css.fontMutedGrey,
                boxShadowSm: css.backLightOff,
                boxShadowMd: css.backLightOff
            };
        case 1:
            return {
                themeColor: Colors.red,
                color: css.fontRed,
                boxShadowSm: css.boxShadowRedSm,
                boxShadowMd: css.boxShadowRedMd
            };
        case 2:
            return {
                themeColor: Colors.green,
                color: css.fontGreen,
                boxShadowSm: css.boxShadowGreenSm,
                boxShadowMd: css.boxShadowGreenMd
            };
        case 3:
            return {
                themeColor: Colors.lime,
                color: css.fontLime,
                boxShadowSm: css.boxShadowLimeSm,
                boxShadowMd: css.boxShadowLimeMd
            };
        case 4:
            return {
                themeColor: Colors.orange,
                color: css.fontOrange,
                boxShadowSm: css.boxShadowOrangeSm,
                boxShadowMd: css.boxShadowOrangeMd
            };
        case 5:
            return {
                themeColor: Colors.blue,
                color: css.fontBlue,
                boxShadowSm: css.boxShadowBlueSm,
                boxShadowMd: css.boxShadowBlueMd
            }
        case 6:
            return {
                themeColor: Colors.pink,
                color: css.fontPink,
                boxShadowSm: css.boxShadowPinkSm,
                boxShadowMd: css.boxShadowPinkMd
            }
        case 7:
            return {
                themeColor: Colors.neonPink,
                color: css.fontNeonPink,
                boxShadowSm: css.boxShadowPinkNeonSm,
                boxShadowMd: css.boxShadowPinkNeonMd
            }
        case 8:
            return {
                themeColor: Colors.purple,
                color: css.fontPurple,
                boxShadowSm: css.boxShadowPurpleSm,
                boxShadowMd: css.boxShadowPurpleMd
            }
        case 9:
            return {
                themeColor: Colors.neonGreen,
                color: css.fontNeonGreen,
                boxShadowSm: css.boxShadowGreenNeonSm,
                boxShadowMd: css.boxShadowGreenNeonMd
            }
        case 10:
            return {
                themeColor: Colors.skyBlue,
                color: css.fontSkyBlue,
                boxShadowSm: css.boxShadowSkyBlueSm,
                boxShadowMd: css.boxShadowSkyBlueMd
            }
        case 100:
            return{
                themeColor: Colors.lightGrey,
                color: css.fontLightGrey,
                boxShadowSm: css.boxShadowDefault,
                boxShadowMd: css.boxShadowDefault
            }
        default:
            return {
                themeColor: Colors.dark,
                color: css.fontDark,
                boxShadowSm: css.boxShadowOne,
                boxShadowMd: css.boxShadowOne
            }
    }
}

export default backLightScheme;