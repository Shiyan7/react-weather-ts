import dayjs from "dayjs";
require('dayjs/locale/ru')
dayjs.locale('ru')

export function convertTimestampToDate (date: number | undefined, format: string = 'HH:mm') {
    return dayjs.unix(Number(date)).format(format)
}