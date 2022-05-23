export function convertPressure(speed: number | undefined, unit = 'mbar') {
    switch(unit) {
        case 'атм':
            return (Number(speed) / 1013).toPrecision(3)
        default:
            return Number(speed)
    }
} 