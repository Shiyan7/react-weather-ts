import { CloudyIcon, MistIcon, MoonIcon, NightCloudyIcon, NightRainIcon, NightThunderstormIcon, SnowIcon, SunnyCloudyIcon, SunnyIcon, SunnyRainIcon, SunnyThunderstormIcon } from "../components/Icons/Icons"

/* Простая switch case функция, которая генерирует иконку, на вход принимает пропс code (тут вся документация https://openweathermap.org/weather-conditions) */

export function generateIcon (code: string) {
    switch (code) {
      case '01d':
        return <SunnyIcon />
      case '01n':
        return <MoonIcon />
      case '02d':
        return <SunnyCloudyIcon />
      case '04n':
        return <NightCloudyIcon  />
      case '09d':
      case '10d':
        return <SunnyRainIcon  />
      case '09n':
      case '10n':
        return <NightRainIcon  />
      case '11d':
        return <SunnyThunderstormIcon  />
      case '11n':
          return <NightThunderstormIcon  />
      case '13d':
      case '13n':
        return <SnowIcon  />
      case '50d':
      case '50n':
        return <MistIcon  />
      default:
        return <CloudyIcon />
    }
  }