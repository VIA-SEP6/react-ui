import noImage from "../../assets/no_image.png"

export function getImageSrc(imgSrc) {
    return !imgSrc ?
        noImage :
        imgSrc
}