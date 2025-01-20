/**
 * @name: loading hooks
 * @param initValue
 */
export const useLoading = (initValue: boolean = true) => {
    const loading = ref(initValue)

    const setLoading = (value: boolean) => {
        loading.value = value
    }

    return {
        loading,
        setLoading
    }
}