import {defineStore} from "pinia";
import {StoreName} from "@/constant/StoreName.ts";
import {ref} from "vue";
import {Ref} from "vue/dist/vue";


/**
 * 组合式 Setup Store 写法，每个模块应为独立仓库
 * 推荐这样使得模块具有更好的扩展性
 * StoreName 类，定义模块名称
 */



export const userInfo = defineStore(StoreName.userInfo, () => {

    const name = ref("六花")
    const profile = ref("http://139.196.53.82:9000/user/w700d1q75cms.jpg")


    const token: Ref<string | null> = ref(null)

    const tokenChange = (userToken: string) => {
        token.value = userToken
    }


    const clearToken = () => {
        token.value = null
    }


    return {clearToken, token, tokenChange, profile, name}
}, {persist: true,})
