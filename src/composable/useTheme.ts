import {ref} from "vue";

export const useTheme = () => {
    //init
    const dark=ref(!!localStorage.getItem('dark') || false)
    if(dark.value){
        document.getElementsByTagName("html")[0]?.classList.add("dark");
    }

    //toggle
    const toggle=()=>{
        dark.value=!dark.value;
        setTimeout(()=>{
            document.getElementsByTagName("html")[0]?.classList.toggle("dark");

            if(dark.value){
                localStorage.setItem('dark','dark')
            }else{
                localStorage.removeItem('dark')
            }
        }, 250)
    }

    return {
        toggle,
        dark
    }
}