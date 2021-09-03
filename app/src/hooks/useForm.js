import { useState, useCallback } from 'react';

const useForm = (initialValue) => {
    const [formValues, setFormValues] = useState(initialValue);

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    }, [formValues]);


    // const handleReset = useCallback(() => {
    //     setFormValues(initialValue)
    // }, [])

    return [formValues, handleChange];

}
export default useForm;