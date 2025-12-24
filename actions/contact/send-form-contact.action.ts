"use server";

export const SendFormContactAction = async () => {
  try {
    console.log("formulario enviado.");
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message:
        "No hubo conexión con la respuesta a la información de contacto.",
    };
  }
};
