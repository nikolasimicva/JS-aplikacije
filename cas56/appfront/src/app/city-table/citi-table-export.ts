export class TableUtil {
    static exportToPdf(tableId: string) {
        let printContent;
        printContent = document.getElementById(tableId).innerHTML;

        let popuWin;
        popuWin = window.open("", "_blank", "top=0, left=0, height=auto, width=auto");

        popuWin.document.open(); // otvoren za upis html koda
        popuWin.document.write(`
            <html>
                <head>
                    <title>Print</title>
                </head>

                <body onload="window.print(); window.close()">
                    <table>${printContent}</table>
                </body>
            </html>
        `);
        popuWin.document.close(); // zavrsava upis html koda
    }
}