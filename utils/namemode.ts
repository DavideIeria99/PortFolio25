
export default function NameMode(text: string, type?: 'title' | 'img') {

    const testName = text.split("");


    for (let i = 0; i < testName.length; i++) {


        switch (true) {
            case testName[i].includes("-") && type === 'title':
                testName.splice(i, 1, " ");
                break;
            case testName[i].includes("%") && type === 'img':
                testName.splice(i, 3, "-");
                break;
            case testName[i].includes("%"):
                testName.splice(i, 3, " ");
                break;
        }
    }
    const stringName = testName.join("").trimEnd();
    // console.log("risultato: ", stringName);

    return stringName;
}
