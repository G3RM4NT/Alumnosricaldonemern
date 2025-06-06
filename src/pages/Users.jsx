import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { optionSelect } from '../utils/apiUrl';
import useDataUser from '../hooks/users/useDataUser';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Users = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataUser(methods);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8">
      <Link
        to="/home"
        className="mb-6 inline-block bg-gradient-to-r from-teal-400 to-blue-600 hover:from-teal-500 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors duration-300"
      >
        ← Volver al menú
      </Link>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl p-10 text-gray-100"
        noValidate
      >
        <Titulo 
          titulo="Agregar Cursos" 
          className="text-4xl font-extrabold mb-4 text-white drop-shadow-md" 
        />

        <p className="mb-8 text-gray-300 text-sm tracking-wide">
          Usa una dirección donde puedas recibir emails.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Descripcion */}
          <InputText
            type="text"
            name="descripcion"
            label="Descripción"
            placeholder="Agrega una descripción"
            register={register}
            errors={errors}
            className="bg-gray-900 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400 rounded-lg text-white placeholder-gray-400 transition duration-300"
            labelClassName="text-white font-semibold mb-2"
          />

          {/* Tematica */}
          <InputText
            type="text"
            name="tematica"
            label="Temática"
            placeholder="Agrega una temática"
            register={register}
            errors={errors}
            className="bg-gray-900 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400 rounded-lg text-white placeholder-gray-400 transition duration-300"
            labelClassName="text-white font-semibold mb-2"
          />

          {/* Instructor */}
          <InputText
            type="text"
            name="instructor"
            label="Instructor"
            placeholder="Agrega un instructor"
            register={register}
            errors={errors}
            className="bg-gray-900 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400 rounded-lg text-white placeholder-gray-400 transition duration-300"
            labelClassName="text-white font-semibold mb-2"
          />

          {/* Curso */}
          <SelectInput
            label="Curso"
            options={optionSelect}
            name="curso"
            register={register}
            errors={errors}
            className="bg-gray-900 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400 rounded-lg text-white transition duration-300"
            labelClassName="text-white font-semibold mb-2"
          />
        </div>

        <div className="mt-10 flex justify-end">
          <Button
            type="submit"
            text="Guardar curso"
            className="bg-gradient-to-r from-teal-400 to-blue-600 hover:from-teal-500 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default Users;
