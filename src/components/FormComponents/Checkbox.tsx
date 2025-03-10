import { ErrorMessage, Field, FieldProps } from 'formik'
import TextError from './TextError.tsx'

export interface CheckboxOption {
    key: string
    value: string
}

export interface CheckboxProps {
    label: string
    name: string
    options: CheckboxOption[]
    [key: string]: any
}

const Checkbox = ({ label, name, options, ...rest }: CheckboxProps) => {
    return (
        <fieldset className="mb-4 flex space-y-2  flex-col">
            <legend className="text-sm font-bold text-gray-600">{label}</legend>
            <div className="flex space-x-6">
                <Field name={name} {...rest}>
                    {({ field }: FieldProps) => {
                        return options.map((option: CheckboxOption) => {
                            return (
                                <div key={option.value} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value.includes(option.value)}
                                        className="mr-1.5"
                                    />
                                    <label htmlFor={option.value} className="text-sm text-gray-500">
                                        {option.key}
                                    </label>
                                </div>
                            )
                        })
                    }}
                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </fieldset>
    )
}
export default Checkbox