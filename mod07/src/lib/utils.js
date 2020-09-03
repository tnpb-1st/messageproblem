module.exports = {
    date(timestamp) { 
        const date = new Date(timestamp);

        //yyyy
        const year = date.getFullYear();

        //mm
        let month = date.getMonth() + 1; // 0 a 11

        // dd 
        let day = date.getDate();

        //hours
        let hour = date.getHours();

        //minutes
        let minutes = date.getMinutes();

        // checking month and day formats
        if (month.toString().length == 1) {
            month = '0' + `${month}`;
        }

        if (day.toString().length == 1) {
            day = '0' + `${day}`;
        }

        //return yyyy-mm-dd
        return {
            iso: `${year}-${month}-${day}`,
            day,
            month,
            year,
            hour,
            minutes,
            format: `${day}/${month}/${year}`,
            birthday: `${day}/${month}`
        }
    },
    formatPrice(price) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price/100)
    }
}