export default function getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
        console.error("Geçersiz tarih:", dateString);
        return "Geçersiz Tarih"; // veya herhangi bir hata mesajı ya da boş bir string döndürebilirsiniz.
    }

    return new Intl.DateTimeFormat('tr-TR', { dateStyle: 'long' }).format(date);
}
