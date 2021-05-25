import {storage} from "../firebase";

const getProfileImageReferenceForUser = (userId) => storage.ref(`/users/${userId}/profilePicture.png`)
const getProfileImageResizedReferenceForUser = (userId) => storage.ref(`/users/${userId}/profilePicture_200x200.png`)

const storageReferenceService = {
    getProfileImageReferenceForUser,
    getProfileImageResizedReferenceForUser
}

export default storageReferenceService