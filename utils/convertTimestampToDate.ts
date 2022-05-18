import dayjs from "dayjs";
require('dayjs/locale/ru')
dayjs.locale('ru')

export function convertTimestampToDate (date: number, format: string) {
    return dayjs.unix(date).format(format)
}