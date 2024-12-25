/* eslint-disable react/prop-types */
const Input = ({ type, name, register, validationSchema, errors}) => {
  return (
    <div>
      <label htmlFor={name}>{name}:</label>
      <input
        type={type}
        {...register(name, validationSchema)}
        className="border border-gray-500"
      />
      
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
   
    </div>
  );
};

export default Input;
