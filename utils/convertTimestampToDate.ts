import dayjs from "dayjs";

export function convertTimestampToDate (date: number, format: string) {
    return dayjs.unix(date).format(format)
}