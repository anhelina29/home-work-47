import {Formik, Form, Field, ErrorMessage} from 'formik'
import {object, string} from 'yup';

const validationShema = object().shape({
    name: string()
        .min(2, 'Min length must be greater than 2 characters')
        .max(50, 'Max length must not be greater than 50 characters')
        .required('Please type your name'),

    email: string()
        .email('Please enter a valid email address')
        .required('Please type your email address'),

    password: string()
        .min(8, 'Password must be at least 8 characters')
        .max(16, 'Password must not be greater than 16 characters')
        .required('Please type your password'),

});

const initialValues = {
    name: '',
    email: '',
    password: '',
}

const handleSubmit = (values: typeof initialValues) => {
    console.log("Form values: ", values)
}

    export const RegistrationForm = () => (
        <Formik initialValues={initialValues}
            validationSchema={validationShema}
        onSubmit={handleSubmit}>
                <Form className="flex flex-col gap-5 border-gray-500 border-4 rounded-xl p-4 w-[512px]">
                    <h1 className='text-2xl font-bold'>Registration Form</h1>
                    <div className="flex flex-col gap-2 m-2">
                        <label htmlFor='name' className='text-left'>Name:</label>
                    <Field className='border-2 border-gray-300 rounded-lg p-2' type="text" name="name" placeholder="Name" />
                    <ErrorMessage className='text-red-600' name="name" component="div" />
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                        <label htmlFor='email' className='text-left'>Email:</label>
                    <Field className='border-2 border-gray-300 rounded-lg p-2' type="email" name="email" placeholder="Email" />
                    <ErrorMessage className='text-red-600' name="email" component="div" />
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                        <label htmlFor='password' className='text-left'>Password:</label>
                    <Field className='border-2 border-gray-300 rounded-lg p-2' type="password" name="password" placeholder="Password" />
                    <ErrorMessage className='text-red-600' name="password" component="div" />
                    </div>

                    <button type="submit">
                        Submit
                    </button>

                </Form>
        </Formik>
    )
