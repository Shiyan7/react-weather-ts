import dayjs from "dayjs";
require('dayjs/locale/ru')
dayjs.locale('ru')

export function convertTimestampToDate (date: number | undefined, format: string) {
    return dayjs.unix(date).format(format)
}