export function convertTemp(temp: number | undefined, unit = '°C') {
    
    switch(unit) {
        case '°F':
            return Math.round((Number(temp) * 1.8 ) + 32)
        default:
            return Math.round(Number(temp))
    }
} 