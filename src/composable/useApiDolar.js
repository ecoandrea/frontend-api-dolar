import axios from "axios";
import { ref } from "vue";

export const useApiDolar = () => {
    const dolar = ref("");
    const uf = ref("");
    const fecha = ref("");
    const loading = ref(true);

    const getData = async () => {
        loading.value = true;
        try {
            const { data } = await axios.get(
                "https://api-dolar-kib9.onrender.com/"
            );
            // console.log(data);
            dolar.value = data.dolar;
            uf.value = data.UF;
            fecha.value = data.fecha;
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };
    getData();
};
