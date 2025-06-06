import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import Buttondelete from "../components/Buttondelete";
import useFetchUsers from "../hooks/users/useFetchUsers";
import { optionSelect } from "../utils/apiUrl";
import useUserAction from "../hooks/users/useUserAction";

const Home = () => {
  const { users, getUsers } = useFetchUsers();
  const { deleteUser, handleUpdateUser } = useUserAction(getUsers);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl bg-gray-900 bg-opacity-90 rounded-3xl shadow-2xl p-10 text-gray-200">
        <div className="flex justify-between items-center mb-8">
          <Titulo titulo="Información de Cursos" className="text-red-500 font-extrabold text-3xl drop-shadow-lg" />
          <Link
            to="/users"
            className="inline-block bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors duration-300"
            aria-label="Agregar nuevo curso"
          >
            + Agregar Cursos
          </Link>
        </div>

        <p className="mb-6 text-red-400 text-base tracking-wide">
          Lista de cursos registrados en el sistema.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-lg">
          <table className="min-w-full bg-gray-800 rounded-xl border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="bg-red-800 text-white py-4 px-6 text-left text-sm font-semibold first:rounded-tl-xl last:rounded-tr-xl">
                  Curso
                </th>
                <th className="bg-red-800 text-white py-4 px-6 text-left text-sm font-semibold">
                  Temática
                </th>
                <th className="bg-red-800 text-white py-4 px-6 text-left text-sm font-semibold">
                  Instructor
                </th>
                <th className="bg-red-800 text-white py-4 px-6 text-left text-sm font-semibold">
                  Descripción
                </th>
                <th className="bg-red-800 text-white py-4 px-6 text-center text-sm font-semibold last:rounded-tr-xl">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, idx) => (
                <tr
                  key={user.id}
                  className={`transition-colors ${
                    idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                  } hover:bg-red-900`}
                >
                  <td className="px-6 py-4 text-red-400 border-b border-gray-700">
                    {optionSelect.find((opt) => opt.value === user.curso)?.label || user.curso}
                  </td>
                  <td className="px-6 py-4 text-red-400 border-b border-gray-700">{user.tematica}</td>
                  <td className="px-6 py-4 text-red-400 border-b border-gray-700">{user.instructor}</td>
                  <td className="px-6 py-4 text-red-300 font-medium border-b border-gray-700">{user.descripcion}</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-center">
                    <div className="inline-flex space-x-3 justify-center">
                      <Button
                        text="Editar"
                        onClick={() => handleUpdateUser(user.id)}
                        className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold py-1.5 px-5 rounded-md shadow-lg transition-colors"
                      />
                      <Buttondelete
                        text="Eliminar"
                        onClick={() => deleteUser(user.id)}
                        className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-1.5 px-5 rounded-md shadow-lg transition-colors"
                      />
                    </div>
                  </td>
                </tr>
              ))}
              {users?.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500 italic">
                    No hay cursos registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
