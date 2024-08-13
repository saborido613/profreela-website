import { useCookies } from "react-cookie";

enum COOKIE_STATUS {
  ACCEPTED = "accepted",
  REJECTED = "rejected",
}

function CookiesConsent() {
  const [cookies, setCookies] = useCookies();

  const handleAceptCookies = (consent: string) => {
    setCookies("cookie_consent", { name: "cookies_consent", value: consent });
  };

  const mostrarMensagem = !JSON.stringify(cookies).includes("cookies_consent");

  return (
    <div className="fixed bottom-2 left-[50%] transform -translate-x-1/2 bg-purple-900 text-white rounded-lg">
      {((cookies?.cookies_consent &&
        cookies?.cookies_consent.value != COOKIE_STATUS.ACCEPTED) ||
        mostrarMensagem) && (
        <div className="flex flex-col gap-3 p-3">
          <div className="flex flex-col items-center justify-center text-center">
            <p>
              Nosso site utiliza cookies para personalizar e aprimorar sua
              experiência de navegação. Ao continuar a usar nosso site, você
              concorda com o uso de cookies.
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <button
              onClick={() => handleAceptCookies(COOKIE_STATUS.ACCEPTED)}
              className="bg-white text-purple-900 py-1 px-2 rounded-lg"
            >
              Aceitar
            </button>
            <button
              onClick={() => handleAceptCookies(COOKIE_STATUS.REJECTED)}
              className="bg-white text-purple-900 py-1 px-2 rounded-lg"
            >
              Rejeitar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CookiesConsent;
