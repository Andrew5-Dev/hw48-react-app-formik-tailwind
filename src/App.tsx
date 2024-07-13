import FormikContainer from './components/FormikContainer.tsx'
const App = () => {
    return (
        <div className="bg-black min-h-screen flex justify-center items-center">
            <div className="bg-gray-50 p-10 rounded shadow-xl w-1/3">
                <h1 className="mb-5 text-5xl text-center font-bold">Formik Control & Tailwind</h1>
              <FormikContainer />
            </div>
        </div>
    )
}

export default App