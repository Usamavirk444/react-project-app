import * as yup from 'yup';

 export const signUp = yup.object().shape({
    email:yup.string().email('PLease enter an valid email').required()
})
