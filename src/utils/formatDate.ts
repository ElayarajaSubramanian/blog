export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return{
        day: date.getDate().toString().padStart(2,"0"),
        month: date.toLocaleString("en-US",{month:"short"}),
        year: date.getFullYear(),
    }
}