import StorageUtil from './storageUtil'

export default class StorageApi {
    static async getAuthState(){
       return StorageUtil.getJsonObject("/APP/AUTH")
    }

    static async setAuthState(auth){
        StorageUtil.saveJsonObject("/APP/AUTH", auth)
    }

}


