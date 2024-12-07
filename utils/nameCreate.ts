export default function createName(nameImage: string, name: string) {

    const DataTime = Date().split(' ')[4];
    const numberTime = DataTime.split(':').join('');
    const imageExt = nameImage.split(".").pop();
    const imageName = `${name}${numberTime}.${imageExt}`;

    return imageName

}