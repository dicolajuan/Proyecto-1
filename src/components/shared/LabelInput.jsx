

const LabelInput = ({idInput,texto,type='text',value,handleOnChange}) => {
    return (
        <>
            <label className="block text-gray-700 uppercase font-bold" htmlFor={idInput}>{texto}</label>
            <input 
                id={idInput} 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                type={type}
                placeholder={texto}
                value={value}
                onChange={handleOnChange}/>
        </>
  )
}

export default LabelInput