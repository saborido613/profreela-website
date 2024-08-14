import axios from "axios";
import React, { useEffect, useState } from "react";
import ImagemCadastro from "/images/form-img.png";

export interface SectionCadastroProps {
  id: string;
}

export default function SectionCadastro(props: SectionCadastroProps) {
  // Estado para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    Name: "",
    Username: "",
    Password: "",
    Email: "",
    Phone: ""
  });

  const resetFormData = () => {
    setFormData({
      Name: "",
      Username: "",
      Password: "",
      Email: "",
      Phone: ""
    });
  };

  const [message, setMessage] = useState<string | null>(null);
  const [mostraMensagem, setMostraMensagem] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    console.log("entrei", mostraMensagem);
    mostraMensagem == "e"
      ? setMessage("Ocorreu um erro.")
      : setMessage("Formulário enviado com sucesso!");
    mostraMensagem == null && setMessage(null);
  }, [mostraMensagem]);

  // Função para lidar com mudanças nos inputs do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_BASE_URL + "/users";

    setMessage(null);
    try {
      setLoading(true);
      const response = await axios.post(endpoint, formData);
      resetFormData();
      setMostraMensagem(response?.data);
      setLoading(false);
    } catch (error) {
      setMostraMensagem("e");
    }
  };

  return (
    <section
      id={props.id}
      className="flex flex-col md:flex-row justify-center items-center max-w-[75vw] w-full md:container mx-auto pt-10 pb-5 gap-24"
    >
      <img src={ImagemCadastro} alt="" className="md:h-[60vh] lg:h-[70vh]" />
      <div className="flex flex-col gap-14">
        <>{console.log(message)}</>
        <h1 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
          Pré-Cadastro
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="Name"
            placeholder="Nome Completo"
            className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
            value={formData.Name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Username"
            placeholder="Username"
            className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
            value={formData.Username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="Password"
            placeholder="Senha"
            className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
            value={formData.Password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Email"
            placeholder="Seu melhor email"
            className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
            value={formData.Email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Phone"
            placeholder="Telefone"
            className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
            value={formData.Phone}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-purple-700 text-white font-bold py-2 px-8 rounded-lg"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
          {message && (
            <p className="text-center mt-4 font-semibold text-lg">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
