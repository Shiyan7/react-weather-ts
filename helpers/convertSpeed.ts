export function convertSpeed(speed: number | undefined, unit = 'км/ч') {
    switch(unit) {
        case 'м/с':
            return (Number(speed) / 3.6).toPrecision(2)
        default:
            return Number(speed)
    }
} 