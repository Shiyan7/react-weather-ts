import dayjs from "dayjs";
require('dayjs/locale/ru')
dayjs.locale('ru')

export function convertTimestampToDate (date: number | undefined, format: string) {
    return dayjs.unix(Number(date)).format(format)
}