function InputPattern ({label, ...rest}){
    return(
        <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          {...rest}
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>
    )
}

export default InputPattern