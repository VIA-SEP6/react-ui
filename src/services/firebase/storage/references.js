import {storage} from "../firebase";

const getProfileImageReferenceForUser = (userId) => storage.ref(`/users/${userId}/profilePicture.png`)

const storageReferenceService = {
    getProfileImageReferenceForUser
}

export default storageReferenceService