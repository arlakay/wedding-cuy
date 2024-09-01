export const generateICal = (title, description, location, startDate, endDate) => {
    const formatDateTime = (date) => {
        return date.toISOString().replace(/-|:|\.\d+/g, "").toUpperCase();
    };

    const start = formatDateTime(startDate);
    const end = formatDateTime(endDate);

    return `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//NONSGML Event//EN
BEGIN:VEVENT
UID:${start}-${end}@yourdomain.com
DTSTAMP:${start}
DTSTART:${start}
DTEND:${end}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR
    `.trim();
};
