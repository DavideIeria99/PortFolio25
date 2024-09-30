export default function EmailCustom(message: string) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>risposta</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
</head>

<body style="padding: 10px; width: 100%; height: 100vh;">

    <section>
        <div style="font-size:xx-large;font-weight: bold;display: flex; justify-content: center; ">
            <p>
                WEB
            </p>
            <p style="color: red;">
                &#x003c;
            </p>
            <p>
                TAG
            </p>
            <p style="color: red;">
                &#x003e;
            </p>
            <p>
                DEV
            </p>
        </div>
    </section>
    <br>
    <br>
    <section >

        <p>testo ${message}</p>
    </section>
</body>

</html>`;
}
