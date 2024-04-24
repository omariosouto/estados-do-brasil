import dayjs from "dayjs";

const now = dayjs();
const bornDate = dayjs("1997-09-26");
console.log("HOJE", now.format("DD/MM/YYYY HH:mm:ss"));

console.log("2 minutos atrás", now.subtract(2, "minutes").format("DD/MM/YYYY HH:mm:ss"));
console.log("1 mês atrás", now.subtract(1, "month").format("DD/MM/YYYY HH:mm:ss"));
console.log("Dias desde que nasci", now.diff(bornDate, "years"));