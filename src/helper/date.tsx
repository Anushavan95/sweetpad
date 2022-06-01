
export function addDays( days: any) {
    let result = new Date();
    result.setDate(result.getDate() + days);
    return result.toLocaleString([], {day: 'numeric', month: 'numeric', year: 'numeric', });
}