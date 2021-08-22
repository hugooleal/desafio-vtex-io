import { useState } from "react";

export const useForm = (callback: any, initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = (event.target as any).name;
        const value = (event.target as any).value;
        setValues({ ...values, [name]: 
            value });
        
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
        setValues({
            "nome": '',
            "email": '',
            "telefone": ''
        });
    };

    return {
        onChange,
        onSubmit,
        values,
    };

}